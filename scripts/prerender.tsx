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
import { articles as ARTICLES } from "../src/data/articles";
import { products as PRODUCTS } from "../src/data/products";

const dist = path.resolve(__dirname, "../dist");
const indexPath = path.join(dist, "index.html");
const shell = fs.readFileSync(indexPath, "utf-8");

/** Homepage stays at /; these inner routes each get their own directory. */
const ROUTES = [
  "/",
  "/pouches-bags",
  "/boxes",
  "/sets",
  "/custom-jewelry-boxes",
  "/eyewear-packaging",
  "/custom-jewelry-pouches",
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
  ...ARTICLES.map((a) => `/news/${a.slug}`),
];

/** Static title per route (product pages compose their own from the slug). */
const STATIC_TITLES: Record<string, string> = {
  "/": "ELAPACK — Custom Luxury Packaging for Global Brands",
  "/pouches-bags": "Custom Fabric Pouches & Bags from 200 pcs | ELAPACK",
  "/boxes": "Custom Rigid, Folding & Magnetic Boxes from 500 pcs | ELAPACK",
  "/sets": "Custom Packaging Sets — Pouch, Box & More | ELAPACK",
  "/custom-jewelry-boxes": "Custom Jewelry Boxes with Logo, from 500 pcs | ELAPACK",
  "/eyewear-packaging": "Custom Eyewear Packaging — Glasses Boxes & Pouches | ELAPACK",
  "/custom-jewelry-pouches": "Custom Jewelry Pouches with Logo, from 200 pcs | ELAPACK",
  "/products": "Products — Boxes, Pouches & Gift Packaging | ELAPACK",
  "/industries": "Industries We Serve — Jewelry, Beauty & Luxury Retail | ELAPACK",
  "/solutions": "Packaging Solutions — Custom, Materials & Sustainability | ELAPACK",
  "/news": "News & Insights | ELAPACK",
  "/about": "About ELAPACK — From Workshop to Global Partner",
  "/contact": "Contact ELAPACK — Get a Custom Packaging Quote",
  "/video": "Inside ELAPACK — Factory & Craft Videos",
  ...Object.fromEntries(ARTICLES.map((a) => [`/news/${a.slug}`, `${a.title} | ELAPACK`])),
};

/** Route-level meta descriptions for SEO. */
const STATIC_DESCRIPTIONS: Record<string, string> = {
  "/": "ELAPACK crafts premium packaging for luxury brands worldwide. Jewelry boxes, velvet pouches, retail bags and complete gift sets — one-stop custom packaging.",
  "/pouches-bags": "Custom textile pouches and bags — velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, in your size, closure and branding. MOQ from 200 pieces.",
  "/boxes": "Custom rigid, folding carton and magnetic closure boxes with EVA, sponge, pulp or flocked inserts, in your size, finish and branding. MOQ from 500 pieces.",
  "/sets": "Custom packaging sets — pouches, boxes and inserts designed together as one coordinated set, colour-matched to your Pantone reference.",
  "/custom-jewelry-boxes": "Custom jewelry boxes with your logo — rigid lift-off lids, magnetic flip-tops, ribbon-tie and faux leather boxes with EVA, velvet or pulp inserts. MOQ from 500 pieces, free stock samples.",
  "/eyewear-packaging": "Custom eyewear packaging — rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes from 500, pouches from 200 pieces. Free stock samples.",
  "/custom-jewelry-pouches": "Custom jewelry pouches with logo — velvet, suede, cotton, muslin, satin, linen and microfiber drawstring and flap pouches in your size and Pantone colour. MOQ from 200 pieces, free stock samples.",
  "/products": "Browse ELAPACK's custom packaging catalog — rigid jewelry boxes, velvet and cotton pouches, retail bags, display systems and gift sets.",
  "/industries": "Custom packaging for jewelry, eyewear, fragrance, beauty, fashion and gifting brands — engineered for Europe and North America.",
  "/solutions": "Custom packaging solutions from ELAPACK — bespoke structures, premium materials and finishes, clear process, sustainable options.",
  "/news": "Packaging insights, material trends and sustainability notes from the ELAPACK team.",
  "/about": "ELAPACK began as a small workshop and grew into a full-service packaging partner for luxury brands across Europe and North America.",
  "/contact": "Talk to ELAPACK about your packaging project — quotes within one business day. Email, phone and WhatsApp available.",
  "/video": "See ELAPACK's production floor, craft details and quality process in video.",
  ...Object.fromEntries(ARTICLES.map((a) => [`/news/${a.slug}`, a.metaDescription])),
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
    const product = productMatch
      ? PRODUCTS.find((p) => p.slug === productMatch[1])
      : undefined;
    const pageTag = product
      ? `${product.name} | ELAPACK`
      : STATIC_TITLES[route] || "ELAPACK";

    const pageDesc =
      STATIC_DESCRIPTIONS[route] ||
      (product
        ? `${product.shortDesc} ${product.name} by ELAPACK — materials, MOQ ${product.moq}, lead time ${product.leadTime}. Request a quote.`
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
