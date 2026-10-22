/**
 * Generates the old-URL → new-URL redirect map as static HTML redirect pages
 * (GitHub Pages cannot emit real HTTP 301s, so an instant meta-refresh + 
 * canonical is the standard equivalent; Google treats meta-refresh 0 as a
 * permanent redirect signal).
 *
 * Old IA: /pouches /boxes /sets (3 lines), 15 series pages, /blog, 5 blog posts,
 * /sustainability, /custom, plus /product/:slug for the 12 real products.
 */
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve(__dirname, "../dist");

const redirects: Record<string, string> = {
  // NOTE: /pouches-bags, /boxes, /sets are now real landing pages rendered by
  // the prerender step — the old /pouches /boxes /sets URLs land there directly,
  // so no redirects here for the three product lines.

  // standalone pages
  "/sustainability": "/solutions",
  "/custom": "/solutions",
  "/blog": "/news",

  // 2026-10-15 #38 merge: makeup-bags guide absorbed into cosmetic-bags guide
  "/news/custom-makeup-bags-guide": "/news/custom-cosmetic-bags-guide/",

  // renamed/removed product slugs (2026-09-30 keyword restructuring)
  "/products/pandora-jewelry-box-white": "/products/custom-white-jewelry-box",
  "/products/velvet-drawstring-pouch": "/products/custom-velvet-pouches",
  "/products/cotton-jewelry-pouch": "/products/custom-cotton-pouches",
  "/products/cream-rigid-magnetic-gift-box": "/products/magnetic-closure-gift-box",
  "/products/wooden-ring-box-wedding": "/products",

  // 2026-10-01 batch-1: pouch SKU de-jewelring + ring box retitle (slug generalization, then URL freeze)
  "/products/custom-velvet-drawstring-pouch": "/products/custom-velvet-pouches",
  "/products/custom-cotton-jewelry-pouch": "/products/custom-cotton-pouches",
  "/products/custom-satin-jewelry-pouch": "/products/custom-satin-pouches",
  "/products/custom-microfiber-jewelry-pouch": "/products/custom-microfiber-pouches",
  "/products/double-ring-storage-box": "/products/custom-ring-boxes",

  // 2026-10-01 batch-3: linen SKU merged into the jewelry pouches collection
  // (linen stays there as a fabric option; no standalone SKU page)
  "/products/custom-linen-jewelry-pouch": "/custom-jewelry-pouches",

  // Historical series paths → canonical product-line landing pages.
  "/pouches/jewelry-eyewear": "/pouches-bags/",
  "/pouches/fragrance": "/pouches-bags/",
  "/pouches/hair-beauty": "/pouches-bags/",
  "/pouches/fashion": "/pouches-bags/",
  "/pouches/gift": "/pouches-bags/",
  "/boxes/jewelry-eyewear": "/boxes/",
  "/boxes/fragrance": "/boxes/",
  "/boxes/hair-beauty": "/boxes/",
  "/boxes/fashion": "/boxes/",
  "/boxes/gift": "/boxes/",
  "/sets/jewelry-eyewear-set": "/sets/",
  "/sets/fragrance-set": "/sets/",
  "/sets/hair-beauty-set": "/sets/",
  "/sets/fashion-set": "/sets/",
  "/sets/gift-set": "/sets/",
};

// old product slugs (/product/:slug) → new /products/:slug
const oldProductSlugs = [
  "black-leather-jewelry-box",
  "luxury-gift-box-ribbon",
  "magnetic-closure-gift-box",
  "velvet-necklace-display",
  "acrylic-earring-display",
  "kraft-paper-shopping-bag",
  "stackable-jewelry-tray",
];
for (const s of oldProductSlugs) redirects[`/product/${s}`] = `/products/${s}`;

// Flatten the known two-hop legacy route to its accepted final product URL.
redirects["/product/double-ring-storage-box"] = "/products/custom-ring-boxes";

// old-site slugs that were renamed in the 2026-09-30 restructuring
redirects["/product/pandora-jewelry-box-white"] = "/products/custom-white-jewelry-box";
redirects["/product/wooden-ring-box-wedding"] = "/products";
redirects["/product/velvet-drawstring-pouch"] = "/products/custom-velvet-pouches";
redirects["/product/cotton-jewelry-pouch"] = "/products/custom-cotton-pouches";

// old blog posts → /news
for (let i = 1; i <= 5; i++) redirects[`/blog/post-${i}`] = "/news";

let count = 0;
for (const [from, to] of Object.entries(redirects)) {
  const dest = path.join(dist, from.replace(/^\//, ""), "index.html");
  const qi = to.indexOf("?");
  const base = qi === -1 ? to : to.slice(0, qi);
  const rest = qi === -1 ? "" : to.slice(qi);
  const toCanon = base === "/" ? to : base.endsWith("/") ? to : `${base}/${rest}`;
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting… | ELAPACK</title>
    <meta http-equiv="refresh" content="0; url=${toCanon}" />
    <link rel="canonical" href="https://elapack.com${toCanon}" />
  </head>
  <body>
    <p>This page has moved to <a href="${toCanon}">${toCanon}</a>.</p>
    <script>location.replace("${toCanon}");</script>
  </body>
</html>
`;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
  count++;
}

console.log(`redirects generated: ${count} pages`);
