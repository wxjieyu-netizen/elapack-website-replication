"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// scripts/redirects.ts
var import_node_fs = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
var dist = import_node_path.default.resolve(__dirname, "../dist");
var redirects = {
  // NOTE: /pouches-bags, /boxes, /sets are now real landing pages rendered by
  // the prerender step — the old /pouches /boxes /sets URLs land there directly,
  // so no redirects here for the three product lines.
  // standalone pages
  "/sustainability": "/solutions",
  "/custom": "/solutions",
  "/blog": "/news",
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
  "/sets/gift-set": "/products?category=Sets%20%26%20Complete%20Packaging"
};
var oldProductSlugs = [
  "black-leather-jewelry-box",
  "double-ring-storage-box",
  "luxury-gift-box-ribbon",
  "magnetic-closure-gift-box",
  "velvet-necklace-display",
  "acrylic-earring-display",
  "kraft-paper-shopping-bag",
  "stackable-jewelry-tray"
];
for (const s of oldProductSlugs) redirects[`/product/${s}`] = `/products/${s}`;
redirects["/product/pandora-jewelry-box-white"] = "/products/custom-white-jewelry-box";
redirects["/product/wooden-ring-box-wedding"] = "/products";
redirects["/product/velvet-drawstring-pouch"] = "/products/custom-velvet-pouches";
redirects["/product/cotton-jewelry-pouch"] = "/products/custom-cotton-pouches";
for (let i = 1; i <= 5; i++) redirects[`/blog/post-${i}`] = "/news";
var count = 0;
for (const [from, to] of Object.entries(redirects)) {
  const dest = import_node_path.default.join(dist, from.replace(/^\//, ""), "index.html");
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting\u2026 | ELAPACK</title>
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="https://elapack.com${to}" />
  </head>
  <body>
    <p>This page has moved to <a href="${to}">${to}</a>.</p>
    <script>location.replace("${to}");</script>
  </body>
</html>
`;
  import_node_fs.default.mkdirSync(import_node_path.default.dirname(dest), { recursive: true });
  import_node_fs.default.writeFileSync(dest, html);
  count++;
}
console.log(`redirects generated: ${count} pages`);
