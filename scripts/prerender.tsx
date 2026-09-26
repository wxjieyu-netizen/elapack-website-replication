/**
 * Post-build prerender for GitHub Pages.
 *
 * Why: GitHub Pages serves exactly one file per path. A pure client-side SPA
 * works in browsers, but every inner route (e.g. /products) returns the
 * 404.html shell with an empty body for crawlers — which is why Google only
 * ever indexed the homepage of the previous site. This script statically
 * renders each route of the new design into its own index.html so every page
 * returns 200 with real, crawlable content.
 *
 * Approach: renderToString over the real App (the app is SSR-safe — all
 * window/document access lives inside useEffect), injected into the built
 * index.html, per route. React hydration is intentionally skipped: the shell
 * is replaced by the client render on load. Scripts/links kept identical.
 */
import { renderToString } from "react-dom/server";
import fs from "node:fs";
import path from "node:path";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "../src/App";

const dist = path.resolve(__dirname, "../dist");
const indexPath = path.join(dist, "index.html");
const shell = fs.readFileSync(indexPath, "utf-8");

/** Homepage stays at /; these inner routes each get their own directory. */
const ROUTES = [
  "/",
  "/products",
  "/industries",
  "/solutions",
  "/news",
  "/about",
  "/contact",
  "/video",
  ...JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "prerender-products.json"), "utf-8")
  ).map((slug) => `/products/${slug}`),
];

/** Static title per route (product pages compose their own from the slug). */
const STATIC_TITLES: Record<string, string> = {
  "/": "ELAPACK — Custom Luxury Packaging for Global Brands",
  "/products": "Products — Boxes, Pouches & Gift Packaging | ELAPACK",
  "/industries": "Industries We Serve — Jewelry, Beauty & Luxury Retail | ELAPACK",
  "/solutions": "Packaging Solutions — Custom, Materials & Sustainability | ELAPACK",
  "/news": "News & Insights | ELAPACK",
  "/about": "About ELAPACK — From Workshop to Global Partner",
  "/contact": "Contact ELAPACK — Get a Custom Packaging Quote",
  "/video": "Inside ELAPACK — Factory & Craft Videos",
};

/** Route-level meta descriptions for SEO. */
const STATIC_DESCRIPTIONS: Record<string, string> = {
  "/": "ELAPACK crafts premium packaging for luxury brands worldwide. Jewelry boxes, velvet pouches, retail bags and complete gift sets — one-stop custom packaging.",
  "/products": "Browse ELAPACK's custom packaging catalog — rigid jewelry boxes, velvet and cotton pouches, retail bags, display systems and gift sets.",
  "/industries": "Custom packaging for jewelry, eyewear, fragrance, beauty, fashion and gifting brands — engineered for Europe and North America.",
  "/solutions": "Custom packaging solutions from ELAPACK — bespoke structures, premium materials and finishes, clear process, sustainable options.",
  "/news": "Packaging insights, material trends and sustainability notes from the ELAPACK team.",
  "/about": "ELAPACK began as a small workshop and grew into a full-service packaging partner for luxury brands across Europe and North America.",
  "/contact": "Talk to ELAPACK about your packaging project — quotes within one business day. Email, phone and WhatsApp available.",
  "/video": "See ELAPACK's production floor, craft details and quality process in video.",
};

let ok = 0;
for (const route of ROUTES) {
  try {
    const html = renderToString(
      <StaticRouter location={route}>
        <AppRoutes />
      </StaticRouter>
    );

    const productMatch = route.match(/^\/products\/([a-z0-9-]+)$/);
    const pageTag = productMatch
      ? `${productMatch[1]
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")} | ELAPACK`
      : STATIC_TITLES[route] || "ELAPACK";

    const pageDesc =
      STATIC_DESCRIPTIONS[route] ||
      (productMatch
        ? `Custom ${productMatch[1].split("-").join(" ")} by ELAPACK — materials, MOQ, lead time and full customization options for luxury brands.`
        : undefined);

    let out = shell
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace(/<title>[^<]*<\/title>/, `<title>${pageTag}</title>`);
    if (pageDesc) {
      out = out.replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/,
        `$1${pageDesc}$2`
      );
    }

    const dest =
      route === "/"
        ? indexPath
        : path.join(dist, route.replace(/^\//, ""), "index.html");
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, out);
    ok++;
    console.log("prerendered:", route);
  } catch (e) {
    console.error("FAILED:", route, e);
  }
}

console.log(`prerender complete: ${ok}/${ROUTES.length} routes`);
