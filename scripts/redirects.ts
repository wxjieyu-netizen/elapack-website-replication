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

  // renamed/removed product slugs (2026-09-30 keyword restructuring)
  "/products/pandora-jewelry-box-white": "/products/custom-white-jewelry-box",
  "/products/velvet-drawstring-pouch": "/products/custom-velvet-drawstring-pouch",
  "/products/cotton-jewelry-pouch": "/products/custom-cotton-jewelry-pouch",
  "/products/cream-rigid-magnetic-gift-box": "/products/magnetic-closure-gift-box",
  "/products/wooden-ring-box-wedding": "/products",

  // series pages (15) → category-filtered products
  "/pouches/jewelry-eyewear": "/products?category=Pouches%20%26%20Bags",
  "/pouches/fragrance": "/products?category=Pouches%20%26%20Bags",
  "/pouches/hair-beauty": "/products?category=Pouches%20%26%20Bags",
  "/pouches/fashion": "/products?category=Pouches%20%26%20Bags",
  "/pouches/gift": "/products?category=Pouches%20%26%20Bags",
  "/boxes/jewelry-eyewear": "/products?category=Boxes",
  "/boxes/fragrance": "/products?category=Boxes",
  "/boxes/hair-beauty": "/products?category=Boxes",
  "/boxes/fashion": "/products?category=Boxes",
  "/boxes/gift": "/products?category=Boxes",
  "/sets/jewelry-eyewear-set": "/products?category=Sets%20%26%20Complete%20Packaging",
  "/sets/fragrance-set": "/products?category=Sets%20%26%20Complete%20Packaging",
  "/sets/hair-beauty-set": "/products?category=Sets%20%26%20Complete%20Packaging",
  "/sets/fashion-set": "/products?category=Sets%20%26%20Complete%20Packaging",
  "/sets/gift-set": "/products?category=Sets%20%26%20Complete%20Packaging",
};

// old product slugs (/product/:slug) → new /products/:slug
const oldProductSlugs = [
  "black-leather-jewelry-box",
  "double-ring-storage-box",
  "luxury-gift-box-ribbon",
  "magnetic-closure-gift-box",
  "velvet-necklace-display",
  "acrylic-earring-display",
  "kraft-paper-shopping-bag",
  "stackable-jewelry-tray",
];
for (const s of oldProductSlugs) redirects[`/product/${s}`] = `/products/${s}`;

// old-site slugs that were renamed in the 2026-09-30 restructuring
redirects["/product/pandora-jewelry-box-white"] = "/products/custom-white-jewelry-box";
redirects["/product/wooden-ring-box-wedding"] = "/products";
redirects["/product/velvet-drawstring-pouch"] = "/products/custom-velvet-drawstring-pouch";
redirects["/product/cotton-jewelry-pouch"] = "/products/custom-cotton-jewelry-pouch";

// old blog posts → /news
for (let i = 1; i <= 5; i++) redirects[`/blog/post-${i}`] = "/news";

let count = 0;
for (const [from, to] of Object.entries(redirects)) {
  const dest = path.join(dist, from.replace(/^\//, ""), "index.html");
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting… | ELAPACK</title>
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="https://elapack.com${to}" />
  </head>
  <body>
    <p>This page has moved to <a href="${to}">${to}</a>.</p>
    <script>location.replace("${to}");</script>
  </body>
</html>
`;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
  count++;
}

console.log(`redirects generated: ${count} pages`);
