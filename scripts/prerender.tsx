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
import { landings as LANDINGS } from "../src/data/landings";
import { collections as COLLECTIONS } from "../src/data/collections";
import { products as PRODUCTS } from "../src/data/products";
import { productContentUpdates } from "../src/data/productContentUpdates";
import { faqsFor } from "../src/data/categoryCopy";

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
  "/velvet-jewelry-boxes",
  "/eyewear-packaging",
  "/custom-jewelry-pouches",
  "/custom-wig-packaging",
  "/custom-jewelry-packaging",
  "/custom-gift-boxes",
  "/custom-candle-boxes",
  "/custom-cosmetic-packaging",
  "/custom-drawstring-bags",
  "/custom-christmas-packaging",
  "/ribbons-accessories",
  "/custom-cosmetic-pouches",
  "/subscription-box-packaging",
  "/lightweight-luxury-packaging",
  "/products",
  "/industries",
  "/solutions",
  "/solutions/how-it-works",
  "/case-studies",
  "/case-studies/velvet-gwp-pouches-beauty-brand",
  "/case-studies/jewelry-drawer-box-pouch-set",
  "/case-studies/sustainable-magnetic-jewelry-gift-box",
  "/news",
  "/about",
  "/privacy",
  "/contact",
  "/video",
  ...JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "prerender-products.json"), "utf-8")
  ).map((slug) => `/products/${slug}`),
  ...ARTICLES.map((a) => `/news/${a.slug}`),
];

/** Static title per route (product pages compose their own from the slug). */
const STATIC_TITLES: Record<string, string> = {
  "/": "Custom Luxury Packaging with Logo — Rigid Boxes, Pouches & Sets from 200 Pcs | ELAPACK",
  "/products/custom-velvet-pouches": "Custom Velvet Pouches with Logo — Drawstring, Envelope & Zip | ELAPACK",
  "/products/custom-press-on-nail-boxes": "Custom Press-on Nail Boxes with Logo — From 200 Pcs | ELAPACK",
  "/products/custom-ring-boxes": "Custom Ring Boxes & Engagement Ring Boxes with Logo | ELAPACK",
  "/products/custom-tissue-paper": "Custom Tissue Paper with Logo | ELAPACK",
  "/products/custom-hang-tags": "Custom Hang Tags with Logo for Clothing Brands — MOQ 500 | ELAPACK",
  "/products/custom-foam-inserts": "Custom Foam Inserts for Packaging Boxes | ELAPACK",
  "/products/custom-rigid-drawer-box": "Custom Rigid Drawer Boxes with Logo | ELAPACK",
  "/products/custom-wine-bags": "Custom Wine Bags with Logo — Velvet Wine Bags from 200 pcs | ELAPACK",
  "/products/custom-dust-bags": "Custom Dust Bags with Logo — Handbag, Shoe & Jewelry Dust Bags from 200 pcs | ELAPACK",
  "/products/custom-garment-bags": "Custom Garment Bags with Logo — Suit & Dress Covers from 500 pcs | ELAPACK",
  "/products/custom-mailer-boxes": "Custom Mailer Boxes with Logo — Printed Inside & Out, from 200 pcs | ELAPACK",
  "/products/kraft-paper-shopping-bag": "Custom Paper Gift Bags with Logo — Kraft & Luxury Shopping Bags from 200 pcs | ELAPACK",
  "/products/black-leather-jewelry-box": "Custom Jewelry Boxes with Logo — Black | ELAPACK",
  "/products/custom-white-jewelry-box": "White Jewelry Boxes with Logo, Custom Sizes from 200 pcs | ELAPACK",
  "/products/custom-perfume-boxes": "Custom Perfume Boxes with Logo | ELAPACK",
  "/products/custom-perfume-sample-card-boxes": "Custom Perfume Sample Cards with Logo | ELAPACK",
  "/products/custom-watch-boxes": "Custom Watch Boxes with Logo | ELAPACK",
  "/products/custom-cotton-pouches": "Custom Cotton Pouches & Drawstring Bags with Logo — MOQ 200 | ELAPACK",
  "/products/custom-cotton-envelope-pouches": "Custom Cotton Envelope Pouches with Logo | ELAPACK",
  "/products/leather-envelope-pouch": "Custom Leather Envelope Pouches with Logo | ELAPACK",
  "/products/custom-muslin-drawstring-pouch": "Custom Muslin Drawstring Pouches with Logo | ELAPACK",
  "/products/custom-satin-pouches": "Custom Satin Pouches with Logo | ELAPACK",
  "/products/custom-satin-wig-bag": "Custom Satin Wig Bags with Logo | ELAPACK",
  "/products/custom-pvc-bags": "Custom Clear PVC Bags with Logo | ELAPACK",
  "/products/custom-microfiber-cleaning-cloth-eyewear": "Custom Microfiber Cleaning Cloths for Eyewear with Logo | ELAPACK",
  "/products/custom-microfiber-cleaning-cloth-jewelry": "Custom Microfiber Cleaning Cloths for Jewelry with Logo | ELAPACK",
  "/products/luxury-gift-box-ribbon": "Custom Ribbon-Tie Gift Boxes with Logo | ELAPACK",
  "/products/acrylic-earring-display": "Acrylic Earring Display Stands for Jewelry Retail | ELAPACK",
  "/products/stackable-jewelry-tray": "Stackable Jewelry Trays for Retail Display | ELAPACK",
  "/products/velvet-jewelry-display-set": "Velvet Jewelry Display Sets for Retail | ELAPACK",
  "/products/velvet-necklace-display": "Velvet Necklace Display Stands | ELAPACK",
  "/pouches-bags": "Custom Pouches & Bags with Logo — Fabric Pouches from 200 Pcs | ELAPACK",
  "/boxes": "Custom Rigid Boxes & Magnetic Gift Boxes from 200 Pieces | ELAPACK",
  "/sets": "Custom Packaging Sets with Logo — Box, Pouch & Insert | ELAPACK",
  "/custom-jewelry-boxes": "Custom Jewelry Boxes Wholesale — Logo Jewelry Packaging from 200 pcs | ELAPACK",
  "/velvet-jewelry-boxes": "Custom Velvet Jewelry Boxes with Logo, from 200 pcs | ELAPACK",
  "/eyewear-packaging": "Custom Eyewear Packaging — Glasses Boxes & Pouches | ELAPACK",
  "/custom-jewelry-pouches": "Custom Jewelry Pouches & Bags with Logo — Bulk & Wholesale from 200 pcs | ELAPACK",
  "/custom-wig-packaging": "Custom Wig Packaging with Logo — Bags & Boxes | ELAPACK",
  "/custom-jewelry-packaging": "Custom Jewelry Packaging — Boxes, Pouches & Display | ELAPACK",
  "/custom-gift-boxes": "Custom Gift Boxes with Logo, from 200 pcs | ELAPACK",
  "/custom-candle-boxes": "Custom Candle Boxes with Logo, from 200 pcs | ELAPACK",
  "/custom-cosmetic-packaging": "Custom Cosmetic Packaging Boxes with Logo | ELAPACK",
  "/custom-drawstring-bags": "Custom Drawstring Bags & Pouches with Logo | ELAPACK",
  "/custom-christmas-packaging": "Custom Christmas Gift Bags & Boxes with Logo — Wholesale from 200 pcs | ELAPACK",
  "/ribbons-accessories": "Custom Printed Ribbons & Accessories with Logo | ELAPACK",
  "/custom-cosmetic-pouches": "Custom Makeup Bags & Cosmetic Pouches with Logo | ELAPACK",
  "/subscription-box-packaging": "Custom Subscription Box Packaging with Logo | ELAPACK",
  "/lightweight-luxury-packaging": "Lightweight Luxury Packaging for Jewelry & Beauty Brands | ELAPACK",
  "/products": "Custom Packaging Products — Boxes, Pouches, Bags & Sets | ELAPACK",
  "/industries": "Custom Packaging by Industry — Jewelry, Beauty, Fragrance & Gifts | ELAPACK",
  "/solutions": "Packaging Solutions — Materials, Structures & Sustainability | ELAPACK",
  "/solutions/how-it-works": "How Custom Packaging Is Made: The ELAPACK Process | ELAPACK",
  "/case-studies": "Custom Packaging Case Studies: Jewelry and Beauty Brands | ELAPACK",
  "/case-studies/velvet-gwp-pouches-beauty-brand": "Velvet GWP Pouches for a UK Beauty Brand | ELAPACK Case Study",
  "/case-studies/jewelry-drawer-box-pouch-set": "Drawer Box and Velvet Pouch Set for a US Fine Jewelry Brand | ELAPACK Case Study",
  "/case-studies/sustainable-magnetic-jewelry-gift-box": "Plastic-Free Magnetic Gift Box for a European Pearl Jewelry Brand | ELAPACK Case Study",
  "/news": "News & Insights | ELAPACK",
  "/about": "About ELAPACK — Custom Packaging for Brands",
  "/privacy": "Privacy Policy | ELAPACK",
  "/contact": "Contact ELAPACK — Get a Custom Packaging Quote",
  "/video": "Custom Packaging Process & Video | ELAPACK",
  ...Object.fromEntries(ARTICLES.map((a) => [`/news/${a.slug}`, `${a.title} | ELAPACK`])),
};

/** Route-level meta descriptions for SEO. */
const STATIC_DESCRIPTIONS: Record<string, string> = {
  "/products/custom-ring-boxes":
    "Custom ring boxes and engagement ring boxes with your logo, made to your ring — common sizes 5 × 5 × 3.5 cm and 6 × 6 × 4 cm, single or double slots. MOQ 200; samples in 3–5 days; DDP to the US.",
  "/products/custom-velvet-pouches":
    "Custom velvet pouches in 200–300 gsm velvet, sized to your product or from 8 × 10, 10 × 12 and 12 × 15 cm, with silkscreen, hot stamp or woven label logos. MOQ 200; samples in 3–5 days.",
  "/products/custom-white-jewelry-box":
    "Custom white jewelry boxes with your logo — structure, insert and logo finish set per project and confirmed on a sample. MOQ 200 pcs, samples in 3–5 days.",
  "/products/custom-press-on-nail-boxes":
    "Custom press-on nail boxes with your logo, from 200 pieces — sized to your nail sets and trays, with shade and size systems shown on pack.",
  "/products/custom-tissue-paper":
    "Custom tissue paper with your logo — custom print from 500 sheets, stock designs with no minimum order. Colour-matched to your boxes and pouches in one set order. Custom samples in 3–5 days.",
  "/products/custom-hang-tags":
    "Custom hang tags from 500 pieces — cardstocks, hot foil and print colour-matched to your boxes and bags, with optional cotton or jute cords. Custom samples in 3–5 days.",
  "/products/custom-foam-inserts":
    "Custom foam inserts cut to your product and box — EVA, sponge, pearl cotton or card, with flocked surfaces. Supplied with your boxes, from 200 sets.",
  "/products/custom-wine-bags":
    "Custom velvet wine bags with your logo — 250 g polyester velvet, double drawstring, upright base; 15 × 35 cm for 750 ml, champagne, slim and mini sizes. MOQ 200.",
  "/products/custom-dust-bags":
    "Custom dust bags with your logo for handbags, shoes, wallets and jewelry — velvet, cotton, non-woven, satin or microfiber, drawstring or flap. MOQ 200, samples in 3–5 days.",
  "/products/custom-garment-bags":
    "Custom garment bags with your logo for suits, dresses and wedding gowns — non-woven, PEVA, cotton or canvas, with zip, hanger opening and window. MOQ 500, samples in 4–6 days.",
  "/products/custom-mailer-boxes":
    "Custom printed mailer boxes with your logo, inside and out — E-flute, kraft or specialty paper, six standard sizes from 15 × 10 × 4 cm or your own. MOQ 200, samples in 3–5 days.",
  "/products/custom-rigid-drawer-box":
    "Custom rigid drawer boxes with your logo — slide-out tray in a sleeve, fitted inserts and ribbon or tab pull. MOQ 200 pieces, samples in 3–5 days.",
  "/products/custom-microfiber-cleaning-cloth-eyewear":
    "Custom microfiber cleaning cloths for eyewear, screens and lenses — your size, edge finish and print. MOQ 200 pcs, custom samples in 3–5 days. Request a quote.",
  "/products/custom-microfiber-cleaning-cloth-jewelry":
    "Custom microfiber polishing cloths for jewelry — rings, necklaces and watches — in your size, edge finish and print. MOQ 200 pcs, samples in 3–5 days. Request a quote.",
  "/products/luxury-gift-box-ribbon":
    "Rigid luxury gift boxes with satin ribbon tie closure, made to your size, colour and branding for corporate gifting. MOQ 200 pcs, samples in 3–5 days. Request a quote.",
  "/products/stackable-jewelry-tray":
    "Stackable jewelry display trays for retail projects — compartment layout, fixture fit and stacking confirmed per project. MOQ per project. Request a quote.",
  "/products/custom-cotton-envelope-pouches":
    "Custom cotton envelope pouches in flap-snap, flat-pocket and zip styles for jewelry, wigs and beauty products. MOQ 200 pcs, samples in 3–5 days. Request a quote.",
  "/products/velvet-jewelry-display-set":
    "Velvet jewelry display sets for retail counters — coordinated stands, trays, busts and risers specified piece by piece. MOQ per project. Request a quote.",
  "/products/velvet-necklace-display":
    "Velvet necklace display stands for retail assortments — height, presentation and branding set per project, in your colours. MOQ per project. Request a quote.",
  "/products/acrylic-earring-display":
    "Acrylic earring display stands for retail projects — layout, capacity and material discussed for your assortment. MOQ per project. Request a quote.",
  "/products/leather-envelope-pouch":
    "Custom leather envelope pouches in pebbled faux leather with gold foil logo, snap closure and suede-touch lining. MOQ 200 pcs, samples in 3–5 days. Request a quote.",
  "/products/custom-watch-boxes":
    "Custom watch boxes with fitted pillow inserts and your logo — single and multi-watch formats for retail and gifting. MOQ 200 pcs. Request a quote.",
  "/products/custom-satin-wig-bag":
    "Custom satin drawstring wig bags in your colour — dimensions, fabric and logo method confirmed on a physical sample first. MOQ 200 pcs. Request a quote.",
  "/products/custom-cotton-pouches":
    "Custom printed cotton pouches made to your size: silkscreen, digital print, hot stamp, woven label or embroidery logos, drawstring, flap or zip closures. MOQ 200, samples in 3–5 days, DDP to the US on request.",
  "/products/custom-satin-pouches":
    "Lustrous satin pouches with drawstring or flap closure for jewelry, beauty and gifts — your colour, size and logo. MOQ 200 pcs, samples in 3–5 days. Request a quote.",
  "/products/kraft-paper-shopping-bag":
    "Custom paper gift bags and shopping bags with your logo — 250 g white card with foil and rope handles, or 150 g kraft with one-colour print. Four standard sizes, MOQ 200.",
  "/": "ELAPACK makes custom luxury packaging for jewelry, beauty, fragrance and gift brands — rigid boxes, velvet pouches, shopping bags and coordinated sets with your logo, from 200 pieces.",
  "/pouches-bags": "Custom pouches and bags with your logo — velvet, cotton, satin, muslin, microfiber and non-woven, drawstring, zip or envelope, made to your size from 200 pieces. DDP to the US on request.",
  "/boxes": "Custom rigid boxes in two-piece, magnetic flap, drawer and folding structures, with EVA, sponge, pulp or flocked inserts. MOQ 200 pcs; samples in 3–5 days.",
  "/sets": "Custom packaging sets with your logo — box, pouch and insert as one set, Pantone colour-matched. Each component from 200 pieces, made in one factory.",
  "/custom-jewelry-boxes": "Custom jewelry boxes wholesale from our own factory in Wuxi — rigid lift-off, magnetic and ribbon-tie jewelry packaging boxes with EVA, velvet or pulp inserts. MOQ 200; DDP to the US on request.",
  "/velvet-jewelry-boxes": "Custom velvet jewelry boxes with your logo — rigid paperboard boxes with a flocked velvet surface and fitted inserts. MOQ from 200 pieces, free stock samples.",
  "/eyewear-packaging": "Custom eyewear packaging — rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes and pouches from 200 pieces. Free stock samples.",
  "/custom-jewelry-pouches": "Custom jewelry pouches and bags with your logo, in bulk from 200 pieces — velvet, suede, cotton, satin and microfiber, drawstring, flap or zip, in your size and Pantone colour. DDP to the US on request.",
  "/custom-wig-packaging": "Custom wig packaging with logo — compare satin bags, rigid boxes and matched sets by packed dimensions, intended use and sample fit. MOQ from 200 pieces.",
  "/custom-jewelry-packaging": "Custom jewelry packaging from one manufacturer: logo jewelry boxes, velvet, satin and cotton pouches, display sets and complete programs, from 200 pieces.",
  "/custom-gift-boxes": "Custom gift boxes with your logo — magnetic closure, satin ribbon-tie and two-piece rigid boxes in any size and finish, including candle jar and tin formats. MOQ from 200 pieces, free stock samples.",
  "/custom-candle-boxes": "Custom candle boxes with logo — rigid, magnetic and sleeve formats sized to jars and tins, with steady-glass inserts. MOQ 200 pieces, free stock samples.",
  "/custom-cosmetic-packaging": "Custom cosmetic packaging for beauty brands, including eyelash and press-on nail boxes, gift boxes and pouches. MOQ from 200 pieces.",
  "/custom-christmas-packaging": "Custom Christmas gift bags, velvet pouches and wine bags, gift boxes and printed shipping boxes with your logo — red, green and gold, foil and ribbon, made to order from 200 pcs. DDP to the US.",
  "/custom-drawstring-bags": "Custom drawstring bags and pouches for jewelry, beauty and gift brands — cotton, velvet, satin, muslin or linen, printed, foiled or embroidered with your logo. Made to your size from 200 pcs; DDP to the US.",
  "/ribbons-accessories": "Custom printed ribbons and packaging accessories — satin ribbon closures, logo-printed ribbon programs, cotton cords and drawstrings matched to your box and pouch programs.",
  "/custom-cosmetic-pouches": "Custom cosmetic pouches and makeup bags with your logo — drawstring, flap, envelope and zip styles in cotton, satin, velvet and canvas. MOQ 200 pcs.",
  "/subscription-box-packaging": "Custom subscription box packaging from one manufacturer — printed boxes, fabric pouches and insert cards for monthly themed programs. Pantone-matched, MOQ from 200 pieces, free stock samples.",
  "/lightweight-luxury-packaging": "Lightweight luxury packaging — right-sized boxes and board inserts, MOQ 200. Weight, volume and freight comparison confirmed by sample for your specific box.",
  "/products": "Browse ELAPACK's custom packaging catalog — rigid jewelry boxes, velvet and cotton pouches, retail bags, display systems and gift sets.",
  "/industries": "Custom packaging for jewelry, eyewear, fragrance, beauty, fashion and gifting brands — engineered for Europe and North America.",
  "/solutions": "Custom packaging solutions: structures, materials and finishes for boxes, pouches and sets, with custom samples in 3–5 days and runs from 200 pieces.",
  "/solutions/how-it-works": "From enquiry to delivery: how custom luxury packaging is quoted, sampled, produced and quality-checked at ELAPACK's own factory in Wuxi. Quotation within one business day.",
  "/case-studies": "How we built custom boxes, pouches and gift sets for jewelry and beauty brands in the US and Europe: the brief, the spec, sample and production times, and the result.",
  "/case-studies/velvet-gwp-pouches-beauty-brand": "How we made 18 × 26 cm velvet gift-with-purchase pouches with a silver foil logo for a UK beauty and personal care brand: the brief, the spec, and a first order that led to growing reorders.",
  "/case-studies/jewelry-drawer-box-pouch-set": "A matched drawer box, velvet envelope pouch and ribbon set for a US fine jewelry brand, with box and pouch colour-matched to ΔE ≤ 2.0 and an embossed foil logo.",
  "/case-studies/sustainable-magnetic-jewelry-gift-box": "A book-style magnetic gift box built to a European pearl jewelry brand's plastic-free brief: paper and a molded pulp insert only, with soy-ink print and a debossed logo.",
  "/news": "Packaging insights, material trends and sustainability notes from the ELAPACK team.",
  "/about": "ELAPACK is operated by Wuxi Magic Packaging Co., Ltd. Learn about its packaging scope, material review and order process.",
  "/privacy": "How ELAPACK (Wuxi Magic Packaging Co., Ltd.) collects, uses and protects the information you share when you request a packaging quotation.",
  "/contact": "Talk to ELAPACK about your packaging project — quotes within one business day. Email, phone and WhatsApp available.",
  "/video": "View packaging process footage and review the design, sample, production and shipping questions to confirm for your order.",
  ...Object.fromEntries(ARTICLES.map((a) => [`/news/${a.slug}`, a.metaDescription])),
};

const SITE = "https://elapack.com";

/** Minimal HTML attribute escaping for injected meta content. */
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Safe JSON-LD embed: "</" cannot terminate the script block. */
const ld = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

/**
 * Pull Q&A pairs out of an article body's FAQ section. FAQ sections are the
 * "Frequently asked questions" and "Questions buyers ask…" H2s; questions
 * appear either as `**question** answer` paragraphs or as `### question`
 * headings followed by answer paragraphs — both shapes occur under either
 * heading. Sections with no parseable pair emit nothing.
 */
function articleFaqs(body: string): [string, string][] {
  const out: [string, string][] = [];
  let inFaq = false;
  let q = "";
  let ans: string[] = [];
  const flush = () => {
    if (q && ans.length) out.push([q, ans.join(" ")]);
    q = "";
    ans = [];
  };
  const plain = (s: string) =>
    s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\*\*/g, "");
  for (const raw of body.split("\n")) {
    const line = raw.trim();
    if (line.startsWith("## ")) {
      flush();
      const h = line.slice(3).trim();
      inFaq =
        h === "Frequently asked questions" || h.startsWith("Questions buyers ask");
      continue;
    }
    if (!inFaq || line === "" || line.startsWith("!") || line.startsWith("|")) continue;
    const bold = line.match(/^\*\*(.+?)\*\*\s+(.+)$/);
    if (bold) {
      flush();
      q = plain(bold[1]);
      ans = [plain(bold[2])];
      continue;
    }
    if (line.startsWith("### ")) {
      flush();
      // Only question-shaped H3s count — sections can close with a CTA
      // block whose `###` heading (e.g. "Stop guessing card fits…") is not
      // a question.
      const text = plain(line.slice(4));
      q = text.endsWith("?") ? text : "";
      continue;
    }
    ans.push(plain(line));
  }
  flush();
  return out;
}

/**
 * Social sharing can use the site hero when a SKU has only an SVG placeholder.
 * Product.image below must describe the actual product, so it stays absent.
 */
const pageImage = (image: string) =>
  image.endsWith(".svg") ? `${SITE}/hero-packaging.webp` : `${SITE}${image}`;

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
    const review = product ? productContentUpdates[product.slug] : undefined;
    const specReview = product && ["black-leather-jewelry-box", "custom-white-jewelry-box", "custom-ring-boxes", "custom-perfume-boxes", "custom-perfume-sample-card-boxes", "custom-muslin-drawstring-pouch", "custom-pvc-bags"].includes(product.slug);
    const articleMatch = route.match(/^\/news\/([a-z0-9-]+)$/);
    const article = articleMatch
      ? ARTICLES.find((a) => a.slug === articleMatch[1])
      : undefined;
    const landing = LANDINGS.find((l) => `/${l.slug}` === route);
    const pageTag = review
      ? review.title
      : STATIC_TITLES[route] ||
        (product ? `${product.name} | ELAPACK` : "ELAPACK");

    const pageDesc =
      review?.meta || STATIC_DESCRIPTIONS[route] ||
      (product
        ? specReview ? product.shortDesc : `${product.shortDesc} ${product.name} by ELAPACK — materials, MOQ ${product.moq}, lead time ${product.leadTime}. Request a quote.`
        : undefined);

    // GitHub Pages 301s bare inner paths to the trailing-slash URL, so that
    // form is the canonical one everywhere (head link, og:url, JSON-LD ids).
    const canonical = `${SITE}${route === "/" ? "/" : route + "/"}`;
    // Pages whose social image uses an existing real product photo instead
    // of the shared site hero (micro-fix batch, item 6).
    const OG_IMAGE_OVERRIDES: Record<string, string> = {
      "/sets": `${SITE}/images/sets/magic-pack-navy-set.webp`,
      "/custom-jewelry-boxes": `${SITE}/images/products/custom-ring-boxes/custom-ring-boxes-hero.webp`,
      "/velvet-jewelry-boxes": `${SITE}/images/products/custom-ring-boxes/custom-ring-boxes-hero.webp`,
      "/custom-christmas-packaging": `${SITE}/images/collections/christmas/christmas-hero.webp`,
    };
    const ogImage =
      OG_IMAGE_OVERRIDES[route] ??
      (article
        ? pageImage(article.image)
        : product
          ? pageImage(product.image)
          : `${SITE}/hero-packaging.webp`);

    const crumbs: { name: string; item?: string }[] = [
      { name: "Home", item: `${SITE}/` },
    ];
    if (article) {
      crumbs.push({ name: "News", item: `${SITE}/news/` });
      crumbs.push({ name: article.title });
    } else if (product) {
      crumbs.push({ name: "Products", item: `${SITE}/products/` });
      crumbs.push({ name: product.name });
    } else if (route !== "/") {
      crumbs.push({
        name: STATIC_TITLES[route]?.replace(" | ELAPACK", "") || "ELAPACK",
      });
    }

    const graph: object[] = [];
    graph.push({
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "ELAPACK",
      legalName: "Wuxi Magic Packaging Co., Ltd.",
      foundingDate: "2018",
      alternateName: ["ELAPACK Custom Luxury Packaging", "Wuxi Magic Packaging"],
      description:
        "Custom packaging manufacturer operating a 1,000-square-meter factory with three production lines in Wuxi, Jiangsu, China.",
      url: `${SITE}/`,
      logo: `${SITE}/images/brand/elapack-logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wuxi",
        addressRegion: "Jiangsu",
        addressCountry: "CN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+86-18626352096",
        email: "tina@elapack.com",
        contactType: "sales",
        availableLanguage: ["en"],
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "ISO 9001",
        recognizedBy: { "@type": "Organization", name: "ISO" },
      },
    });
    if (route === "/video") {
      graph.push({
        "@type": "VideoObject",
        "@id": `${SITE}/video/#video`,
        name: STATIC_TITLES[route],
        description: STATIC_DESCRIPTIONS[route],
        contentUrl: `${SITE}/videos/factory-tour.mp4`,
        thumbnailUrl: `${SITE}/factory-video-poster.webp`,
        uploadDate: "2026-11-06",
        duration: "PT49.6S",
      });
    }
    if (crumbs.length > 1) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          ...(c.item ? { item: c.item } : {}),
        })),
      });
    }
    if (landing?.faq?.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: landing.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }
    const collection = COLLECTIONS.find((c) => `/${c.slug}` === route);
    if (collection?.faq?.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: collection.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }
    if (article) {
      graph.push({
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: article.title,
        description: article.metaDescription,
        image: [ogImage],
        ...(article.datePublished
          ? {
              datePublished: article.datePublished,
              dateModified: article.dateModified ?? article.datePublished,
            }
          : {}),
        author: { "@type": "Person", name: "Tina Lee", jobTitle: "Founder", url: `${SITE}/about`, worksFor: { "@type": "Organization", name: "ELAPACK", url: `${SITE}/` } },
        publisher: {
          "@type": "Organization",
          name: "ELAPACK",
          legalName: "Wuxi Magic Packaging Co., Ltd.",
          logo: {
            "@type": "ImageObject",
            url: `${SITE}/apple-touch-icon.png`,
            width: 180,
            height: 180,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      });
      const faqs = articleFaqs(article.body);
      if (faqs.length) {
        graph.push({
          "@type": "FAQPage",
          "@id": `${canonical}#faq`,
          mainEntity: faqs.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        });
      }
    }
    if (article?.slug === "top-china-jewelry-packaging-suppliers") {
      const list = [
        ["Richpack", "Fuzhou"],
        ["Haosung", "Qingdao"],
        ["Jialan Package", "Yiwu"],
        ["Shenzhen ITIS Packaging", "Shenzhen"],
        ["Pakoro Packaging", "Shenzhen"],
        ["Huaisheng Packaging", "Guangzhou"],
        ["Winnerpak", "Guangzhou"],
        ["Ecoicolor", "Dongguan"],
        ["Annaigee", "Huizhou"],
        ["ELAPACK", "Wuxi"],
      ] as const;
      graph.push({
        "@type": "ItemList",
        "@id": `${canonical}#list`,
        name: article.title,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: list.length,
        itemListElement: list.map(([name, city], i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Organization",
            name,
            address: { "@type": "PostalAddress", addressLocality: city, addressCountry: "CN" },
          },
        })),
      });
    }
    if (product) {
      graph.push(review ? { ...review.schema_product, manufacturer: { "@id": `${SITE}/#organization` }, mainEntityOfPage: { "@type": "WebPage", "@id": canonical } } : {
        "@type": "Product",
        "@id": `${canonical}#product`,
        name: product.name,
        description: product.shortDesc,
        ...(product.image.endsWith(".svg") ? {} : { image: [ogImage] }),
        sku: product.slug,
        category: product.category,
        ...(specReview ? {} : { material: product.materials }),
        brand: { "@type": "Brand", name: "ELAPACK" },
        manufacturer: { "@id": `${SITE}/#organization` },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Minimum Order Quantity", value: product.moq },
          { "@type": "PropertyValue", name: "Lead Time", value: product.leadTime },
        ],
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      });
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: (review ? review.faqs.map((f: string[]) => ({q:f[0],a:f[1]})) : (product.faqs ?? faqsFor(product))).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    const heroImage = product
      ? product.gallery?.length
        ? product.gallery[0]
        : product.image
      : landing?.hero?.src;
    const headExtras = [
      `<link rel="canonical" href="${canonical}" />`,
      ...(heroImage && !heroImage.endsWith(".svg")
        ? [
            `<link rel="preload" as="image" href="${heroImage}" fetchpriority="high" />`,
          ]
        : []),
      ...(graph.length
        ? [
            `<script type="application/ld+json">${ld({
              "@context": "https://schema.org",
              "@graph": graph,
            })}</script>`,
          ]
        : []),
    ].join("\n    ");

    let out = shell
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace(/<title>[^<]*<\/title>/, `<title>${pageTag}</title>`);
    if (pageDesc) {
      out = out.replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/,
        `$1${pageDesc}$2`
      );
    }

    out = out
      .replace(
        /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
        `$1${esc(pageTag)}$2`
      )
      .replace(
        /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
        `$1${canonical}$2`
      )
      .replace(
        /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
        `$1${ogImage}$2`
      )
      .replace(
        /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
        `$1${esc(pageTag)}$2`
      )
      .replace(
        /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/,
        `$1${ogImage}$2`
      );
    if (article) {
      out = out.replace(
        /(<meta\s+property="og:type"\s+content=")website(")/,
        `$1article$2`
      );
    }
    if (pageDesc) {
      out = out
        .replace(
          /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
          `$1${esc(pageDesc)}$2`
        )
        .replace(
          /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
          `$1${esc(pageDesc)}$2`
        );
    }
    out = out.replace("</head>", `\n    ${headExtras}\n  </head>`);

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
