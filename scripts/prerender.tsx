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
  "/eyewear-packaging",
  "/custom-jewelry-pouches",
  "/custom-wig-packaging",
  "/custom-jewelry-packaging",
  "/custom-gift-boxes",
  "/custom-candle-boxes",
  "/custom-cosmetic-packaging",
  "/custom-drawstring-bags",
  "/ribbons-accessories",
  "/custom-cosmetic-pouches",
  "/subscription-box-packaging",
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
  "/boxes": "Custom Rigid, Folding & Magnetic Boxes from 200 pcs | ELAPACK",
  "/sets": "Custom Packaging Sets — Pouch, Box & More | ELAPACK",
  "/custom-jewelry-boxes": "Custom Jewelry Boxes with Logo, from 200 pcs | ELAPACK",
  "/eyewear-packaging": "Custom Eyewear Packaging — Glasses Boxes & Pouches | ELAPACK",
  "/custom-jewelry-pouches": "Custom Jewelry Pouches with Logo, from 200 pcs | ELAPACK",
  "/custom-wig-packaging": "Custom Wig Packaging — Satin Wig Bags & Boxes | ELAPACK",
  "/custom-jewelry-packaging": "Custom Jewelry Packaging — Boxes, Pouches & Display | ELAPACK",
  "/custom-gift-boxes": "Custom Gift Boxes with Logo, from 200 pcs | ELAPACK",
  "/custom-candle-boxes": "Custom Candle Boxes with Logo, from 200 pcs | ELAPACK",
  "/custom-cosmetic-packaging": "Custom Cosmetic Packaging Boxes | ELAPACK",
  "/custom-drawstring-bags": "Custom Drawstring Bags & Pouches, from 200 pcs | ELAPACK",
  "/ribbons-accessories": "Custom Printed Ribbons & Packaging Accessories | ELAPACK",
  "/custom-cosmetic-pouches": "Custom Cosmetic Pouches & Makeup Bags with Logo | ELAPACK",
  "/subscription-box-packaging": "Subscription Box Packaging: Boxes, Pouches, Insert Cards from 200 pcs | ELAPACK",
  "/products": "Products — Boxes, Pouches & Gift Packaging | ELAPACK",
  "/industries": "Industries We Serve — Jewelry, Beauty & Luxury Retail | ELAPACK",
  "/solutions": "Packaging Solutions — Custom, Materials & Sustainability | ELAPACK",
  "/news": "News & Insights | ELAPACK",
  "/about": "About ELAPACK — Custom Packaging for Brands",
  "/contact": "Contact ELAPACK — Get a Custom Packaging Quote",
  "/video": "Custom Packaging Process & Video | ELAPACK",
  ...Object.fromEntries(ARTICLES.map((a) => [`/news/${a.slug}`, `${a.title} | ELAPACK`])),
};

/** Route-level meta descriptions for SEO. */
const STATIC_DESCRIPTIONS: Record<string, string> = {
  "/": "ELAPACK crafts premium packaging for luxury brands worldwide. Jewelry boxes, velvet pouches, retail bags and complete gift sets — one-stop custom packaging.",
  "/pouches-bags": "Custom textile pouches and bags — velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, in your size, closure and branding. MOQ from 200 pieces.",
  "/boxes": "Custom rigid, folding carton and magnetic closure boxes with EVA, sponge, pulp or flocked inserts, in your size, finish and branding. MOQ from 200 pieces.",
  "/sets": "Custom packaging sets — pouches, boxes and inserts designed together as one coordinated set, colour-matched to your Pantone reference.",
  "/custom-jewelry-boxes": "Custom jewelry boxes with your logo — rigid lift-off lids, magnetic flip-tops, ribbon-tie and faux leather boxes with EVA, velvet or pulp inserts. MOQ from 200 pieces, free stock samples.",
  "/eyewear-packaging": "Custom eyewear packaging — rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes and pouches from 200 pieces. Free stock samples.",
  "/custom-jewelry-pouches": "Custom jewelry pouches with logo — velvet, suede, cotton, muslin, satin, linen and microfiber drawstring and flap pouches in your size and Pantone colour. MOQ from 200 pieces, free stock samples.",
  "/custom-wig-packaging": "Custom wig packaging with your logo — satin drawstring wig bags in the standard 30×40 cm format, plus rigid and magnetic boxes for wigs and hair extensions. Bags from 200 pieces. Free stock samples.",
  "/custom-jewelry-packaging": "Custom jewelry packaging from one manufacturer — logo jewelry boxes, velvet, satin and cotton pouches, display sets and complete box-plus-pouch programs. Boxes and pouches from 200 pieces. Free stock samples.",
  "/custom-gift-boxes": "Custom gift boxes with your logo — magnetic closure, satin ribbon-tie and two-piece rigid boxes in any size and finish, including candle jar and tin formats. MOQ from 200 pieces, free stock samples.",
  "/custom-candle-boxes": "Custom candle boxes with logo — rigid, magnetic and sleeve formats sized to jars and tins, with steady-glass inserts. MOQ 200 pieces, free stock samples.",
  "/custom-cosmetic-packaging": "Custom cosmetic packaging — eyelash boxes from 200 pieces, magnetic and rigid gift boxes for beauty brands, plus fabric and clear PVC-zip cosmetic pouches with your logo. One manufacturer, matched branding. Free stock samples.",
  "/custom-drawstring-bags": "Custom drawstring bags with your logo — cotton, velvet, satin, muslin and linen pouches in any size, plus handbag and shoe dust bag formats. MOQ from 200 pieces, free stock samples.",
  "/ribbons-accessories": "Custom printed ribbons and packaging accessories — satin ribbon closures, logo-printed ribbon programs, cotton cords and drawstrings matched to your box and pouch programs.",
  "/custom-cosmetic-pouches": "Custom cosmetic pouches and makeup bags with your logo — drawstring, flap, envelope and zipper styles in cotton, satin, velvet and canvas, plus clear PVC zip bags. MOQ from 200 pieces, free stock samples.",
  "/subscription-box-packaging": "Custom subscription box packaging from one manufacturer — printed boxes, fabric pouches and insert cards for monthly themed programs. Pantone-matched, MOQ from 200 pieces, free stock samples.",
  "/products": "Browse ELAPACK's custom packaging catalog — rigid jewelry boxes, velvet and cotton pouches, retail bags, display systems and gift sets.",
  "/industries": "Custom packaging for jewelry, eyewear, fragrance, beauty, fashion and gifting brands — engineered for Europe and North America.",
  "/solutions": "Custom packaging solutions from ELAPACK — bespoke structures, premium materials and finishes, clear process, sustainable options.",
  "/news": "Packaging insights, material trends and sustainability notes from the ELAPACK team.",
  "/about": "ELAPACK is operated by Wuxi Magic Packaging Co., Ltd. Learn about its packaging scope, material review and order process.",
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
    const specReview = product && ["black-leather-jewelry-box", "custom-white-jewelry-box", "custom-perfume-boxes", "custom-perfume-sample-card-boxes", "custom-muslin-drawstring-pouch", "custom-pvc-bags"].includes(product.slug);
    const articleMatch = route.match(/^\/news\/([a-z0-9-]+)$/);
    const article = articleMatch
      ? ARTICLES.find((a) => a.slug === articleMatch[1])
      : undefined;
    const pageTag = review ? review.title : product
      ? `${product.name} | ELAPACK`
      : STATIC_TITLES[route] || "ELAPACK";

    const pageDesc =
      review?.meta || STATIC_DESCRIPTIONS[route] ||
      (product
        ? specReview ? product.shortDesc : `${product.shortDesc} ${product.name} by ELAPACK — materials, MOQ ${product.moq}, lead time ${product.leadTime}. Request a quote.`
        : undefined);

    // GitHub Pages 301s bare inner paths to the trailing-slash URL, so that
    // form is the canonical one everywhere (head link, og:url, JSON-LD ids).
    const canonical = `${SITE}${route === "/" ? "/" : route + "/"}`;
    const ogImage = article
      ? pageImage(article.image)
      : product
        ? pageImage(product.image)
        : `${SITE}/hero-packaging.webp`;

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
      legalName: "Wuxi Magic Packaging Co., Ltd",
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
    });
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
        author: { "@type": "Person", name: "Tina", url: `${SITE}/about`, worksFor: { "@type": "Organization", name: "ELAPACK", url: `${SITE}/` } },
        publisher: {
          "@type": "Organization",
          name: "ELAPACK",
          legalName: "Wuxi Magic Packaging Co., Ltd",
          logo: {
            "@type": "ImageObject",
            url: `${SITE}/apple-touch-icon.png`,
            width: 180,
            height: 180,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      });
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
      graph.push(review ? { ...review.schema_product, mainEntityOfPage: { "@type": "WebPage", "@id": canonical } } : {
        "@type": "Product",
        "@id": `${canonical}#product`,
        name: product.name,
        description: product.shortDesc,
        ...(product.image.endsWith(".svg") ? {} : { image: [ogImage] }),
        sku: product.slug,
        category: product.category,
        ...(specReview ? {} : { material: product.materials }),
        brand: { "@type": "Brand", name: "ELAPACK" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Minimum Order Quantity", value: product.moq },
          { "@type": "PropertyValue", name: "Lead Time", value: product.leadTime },
        ],
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      });
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: (review ? review.faqs.map((f: string[]) => ({q:f[0],a:f[1]})) : faqsFor(product)).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    const headExtras = [
      `<link rel="canonical" href="${canonical}" />`,
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
