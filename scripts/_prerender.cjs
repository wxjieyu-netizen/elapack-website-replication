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

// scripts/prerender.tsx
var import_server = require("react-dom/server");
var import_node_fs = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
var import_server2 = require("react-router-dom/server");

// src/App.tsx
var import_react_router_dom17 = require("react-router-dom");

// src/components/Layout.tsx
var import_react4 = require("react");
var import_react_router_dom5 = require("react-router-dom");

// src/components/Header.tsx
var import_react = require("react");
var import_react_router_dom = require("react-router-dom");

// src/components/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      className: "logo-img",
      src: "/images/brand/elapack-logo.png",
      alt: "ELAPACK",
      width: 1e3,
      height: 383
    }
  );
}

// src/data/products.ts
var products = [
  {
    slug: "black-leather-jewelry-box",
    name: "Custom Black Leather Jewelry Boxes",
    category: "Boxes",
    shortDesc: "Faux leather rigid jewelry box with velvet interior, custom embossing and smart compartments.",
    description: "The black leather jewelry box is more than just storage \u2014 it is a timeless statement of sophistication. Crafted from smooth grain faux leather in a deep, matte black tone, this box offers an elevated unboxing experience that reflects your brand commitment to quality. Its sleek, fingerprint-resistant exterior enhances visual appeal while staying pristine even with daily use. Inside, the velvet-lined smart compartments are laid out around your assortment \u2014 rings, chains, earrings or a mixed set \u2014 and embossed initials or a foil logo carry the brand quietly on the lid. Each quotation starts with a free digital dieline so the interior layout and exterior panels come from one drawing, with die tooling quoted separately at USD 50\u2013100 only when a new die is genuinely needed. Runs ship in 15\u201320 days from 200 pieces, colour is held through a four-step control chain, and a custom sample (USD 25 plus USD 20 shipping, 3\u20135 days) settles grain, shade and emboss depth before bulk.",
    image: "/images/carousel/black-leather-box.png",
    materials: "Faux leather, velvet interior, cardboard core",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Premium Faux Leather Exterior",
        desc: "Smooth grain faux leather with a matte finish that resists fingerprints and daily wear."
      },
      {
        title: "Plush Velvet Interior",
        desc: "Soft velvet lining cushions delicate jewelry and keeps every piece scratch-free."
      },
      {
        title: "Custom Logo Embossing",
        desc: "Blind embossing, foil stamping and color detailing to carry your brand identity."
      },
      {
        title: "Smart Compartment Layout",
        desc: "Compact structure with removable inserts tailored to your product assortment."
      }
    ],
    specs: [
      { label: "Exterior", value: "Velvet, leatherette, wood, satin, MDF, genuine leather" },
      { label: "Interior", value: "Velvet, satin, suede, microfiber, flocked fabric" },
      { label: "Insert", value: "Foam, EVA, molded plastic, recycled paper" },
      { label: "Surface Finish", value: "Matte / glossy / debossed / foil stamping / spot UV" },
      { label: "Closure Type", value: "Magnetic / snap / tuck flap / ribbon tie / drawer" },
      { label: "Eco-Friendly", value: "Recyclable / reusable" }
    ],
    customizationOptions: [
      "Custom exterior materials and colors",
      "Logo embossing or foil stamping",
      "Tailored interior inserts",
      "FSC-certified materials on request"
    ]
  },
  {
    slug: "custom-white-jewelry-box",
    name: "Custom White Jewelry Boxes",
    category: "Boxes",
    shortDesc: "Compact white jewelry box with velvet cushion and custom logo printing \u2014 clean minimalist retail and gift packaging.",
    description: "A compact white jewelry box with a glossy rigid shell and velvet-lined cushion, made for bracelets, small jewelry gifts and clean minimalist retail. The durable shell is built for retail handling and efficient shipping at a lightweight footprint; the velvet insert holds pieces securely, and the snap closure keeps the box shut on shelf and in transit. Branding goes directly on lid and base by silkscreen or hot stamp, with interior insert colors matched to your palette through the four-step color control chain. Sizes are custom on request - from single-bracelet minis to multi-piece gift formats - and runs start at 200 pieces with 15-20 day delivery. Approve a custom sample first (USD 25 plus USD 20 shipping, 3-5 days) to check print density on the glossy shell and cushion fit with your actual piece before committing to bulk.",
    image: "/images/carousel/pandora-box.png",
    materials: "Plastic exterior, velvet interior insert",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Gift", "Fashion"],
    features: [
      {
        title: "Durable White Shell",
        desc: "Rigid plastic construction with a smooth glossy finish built for retail handling."
      },
      {
        title: "Soft Interior Cushion",
        desc: "Velvet-lined insert holds bracelets and small pieces securely in place."
      },
      {
        title: "Retail-Ready Compact Size",
        desc: "Lightweight footprint that displays cleanly on shelves and ships efficiently."
      },
      {
        title: "Custom Logo Printing",
        desc: "Silkscreen or hot-stamp your logo directly onto the lid and base."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '1-3/4" \xD7 2" \xD7 1-1/2" (customizable)' },
      { label: "Surface Finish", value: "Glossy white" },
      { label: "Closure Type", value: "Snap closure" },
      { label: "Color Control", value: "Four-step chain, sample approval before bulk" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" }
    ],
    customizationOptions: [
      "Custom logo printing",
      "Interior insert colors",
      "Custom sizing on request"
    ]
  },
  {
    slug: "custom-ring-boxes",
    name: "Custom Ring & Engagement Ring Boxes",
    category: "Boxes",
    shortDesc: "Custom ring boxes for engagements, weddings and retail \u2014 single or double slots, velvet or foam cushions, your logo.",
    description: "Custom ring boxes made for the moment the box matters most. Single and double slot layouts hold rings securely for engagements and weddings, with plush velvet or foam cushions cut to your ring profile. The matte velvet exterior photographs beautifully in proposal scenes, and your logo is foil-stamped or printed on the lid. Made to your size and colour \u2014 MOQ from 200 pieces, delivered in 15\u201320 days. Every programme starts with a free digital dieline so cushion slots and box proportions come from one drawing; die tooling, when a new die is genuinely needed, is quoted separately at USD 50\u2013100. Colour is held to Pantone references through a four-step control chain \u2014 artwork review, material test, on-press control and sample approval before bulk. Approve a custom sample first (USD 25 plus USD 20 shipping, 3\u20135 days) to check cushion fit with your actual ring before committing to the run.",
    image: "/images/carousel/ring-box-black.png",
    materials: "Velvet exterior, foam insert with velvet covering",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Single or Double Ring Slots",
        desc: "One or two precision-cut velvet slots \u2014 solo rings or proposal sets side by side."
      },
      {
        title: "Engagement-Ready Profile",
        desc: "Slim enough to slip into a jacket pocket for the big moment."
      },
      {
        title: "Matte Velvet Exterior",
        desc: "Deep matte velvet that photographs beautifully in proposal scenes."
      },
      {
        title: "Your Logo on the Lid",
        desc: "Foil stamping, blind emboss or silkscreen \u2014 inside lid message printing available."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '1-3/4" \xD7 2" \xD7 1-1/2" (customizable)' },
      { label: "Closure Type", value: "Magnetic closure" },
      { label: "Surface Finish", value: "Matte velvet" }
    ],
    customizationOptions: [
      "Single or double ring slot layouts",
      "Velvet color matching",
      "Interior message printing",
      "Foil or embossed logo on the lid"
    ]
  },
  {
    slug: "luxury-gift-box-ribbon",
    name: "Luxury Gift Boxes with Ribbon",
    category: "Boxes",
    shortDesc: "Rigid luxury gift box with satin ribbon tie closure \u2014 premium presentation for corporate gifting.",
    description: "A rigid luxury gift box with a satin ribbon tie closure, built for corporate gifting, weddings and high-end retail. Greyboard construction wrapped in premium matte art paper gives the box its substantial feel; the double-face satin ribbon makes the opening itself part of the ceremony, and foil stamping, embossing or spot UV carry the brand mark. Sizes are custom to your product, with Pantone-matched wrapping so box, ribbon and any enclosure card read as one palette - color held through a four-step control chain from artwork review to sample approval before bulk. Interior options secure the product for gifting and courier conditions alike. Each quotation starts with a free digital dieline; die tooling, when a new die is genuinely needed, is quoted separately at USD 50-100. Runs ship in 15-20 days from 200 pieces, and a custom sample (USD 25 plus USD 20 shipping, 3-5 days) settles ribbon hand, wrap shade and finish before the bulk order.",
    image: "/images/carousel/luxury-gift-box.png",
    materials: "Rigid cardboard, satin ribbon",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Gift", "Beauty", "Fragrance"],
    features: [
      {
        title: "Rigid Box Construction",
        desc: "Greyboard wrapped in premium matte art paper for a substantial feel."
      },
      {
        title: "Satin Ribbon Tie",
        desc: "Double-face satin ribbon closure that becomes part of the ceremony."
      },
      {
        title: "Foil Stamping & Embossing",
        desc: "Metallic foil and raised embossing options for brand marks."
      },
      {
        title: "Custom Sizes & Colors",
        desc: "Pantone-matched wrapping and any footprint your product needs."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '8" \xD7 6" \xD7 3" (customizable)' },
      { label: "Closure Type", value: "Ribbon tie" },
      { label: "Surface Finish", value: "Matte / foil stamping / spot UV" },
      { label: "Dieline", value: "Free digital drawing at quotation" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" }
    ],
    customizationOptions: [
      "Pantone color matching",
      "Foil stamping or embossing",
      "Custom sizes and structures",
      "Inserts for product security"
    ]
  },
  {
    slug: "magnetic-closure-gift-box",
    name: "Custom Magnetic Closure Gift Boxes",
    category: "Boxes",
    shortDesc: "Sleek flip-top gift box with hidden magnetic closure and custom interior inserts.",
    description: "A sleek flip-top gift box with a hidden magnetic closure, built for jewelry, eyewear, cosmetics and small luxury programs. The concealed magnet pair keeps the lid shut in transit yet opens one-handed in a retail setting, and because the mechanism sits inside the wrap, the exterior stays clean for full-surface print or foil branding. Construction is 1200-1500gsm greyboard wrapped in your choice of art paper, with interior inserts cut to the product's exact footprint so contents ride immobile - EVA, velvet or molded pulp by product weight and fragility. Specify Pantone references for wrap and print; color is held through a four-step control chain from artwork and Pantone review through on-press control to sample approval before bulk. Every quotation starts with a free digital dieline, die tooling is quoted separately at USD 50-100 only when a new die is genuinely needed, and runs ship in 15-20 days from 200 pieces. Approve a custom sample first (USD 25 plus USD 20 shipping, 3-5 days) to check closure feel and color before committing to bulk.",
    image: "/images/carousel/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png",
    materials: "Rigid cardboard, magnetic closure",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Beauty", "Gift", "Fashion"],
    features: [
      {
        title: "Hidden Magnetic Closure",
        desc: "Concealed magnets deliver a clean exterior and a satisfying open action."
      },
      {
        title: "Flip-Top Design",
        desc: "One-hand lid motion engineered for repeated retail use."
      },
      {
        title: "Premium Rigid Construction",
        desc: "1200\u20131500gsm greyboard wrapped in your choice of art paper."
      },
      {
        title: "Custom Interior Inserts",
        desc: "EVA, velvet or molded pulp inserts cut to your product's exact shape."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '6" \xD7 4" \xD7 2" (customizable)' },
      { label: "Closure Type", value: "Magnetic / flip-top" },
      { label: "Surface Finish", value: "Matte / glossy" },
      { label: "Dieline", value: "Free digital drawing at quotation" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" }
    ],
    customizationOptions: [
      "Custom inserts and compartments",
      "Foil or blind emboss branding",
      "Interior lid printing",
      "Pantone-matched exterior",
      "Lift-off lid variant with matte cream wrap and satin ribbon finish"
    ]
  },
  {
    slug: "custom-eyelash-packaging-boxes",
    name: "Custom Eyelash Packaging Boxes with Logo",
    category: "Boxes",
    shortDesc: "Custom eyelash packaging boxes with your logo \u2014 three stock formats or fully custom sizes, from 200 pieces.",
    description: "Custom eyelash packaging boxes for false eyelash brands, salons and wholesalers \u2014 from single-pair retail boxes to empty wholesale packaging for full lash lines. Built around your lash trays \u2014 strip lashes, volume trays or extension programs \u2014 with fitted inserts that hold each tray in place for storage, transit and shelf, and a printed wrap that carries your brand at retail and in unboxing. Three stock formats cover the common tray sizes: 14\xD710\xD76, 15\xD715\xD75 and 20\xD718\xD78 cm, and any dimension can be made to spec. MOQ from 200 pieces with your logo printed, foil-stamped or embossed. Request a stock sample to judge the board and print quality in hand.",
    image: "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-hero.jpg",
    gallery: [
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-hero.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-01.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-02.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-03.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-04.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-05.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-scene-01.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-scene-02.jpg"
    ],
    materials: "Rigid paperboard with custom printed wrap, fitted lash tray inserts",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Beauty", "Gift"],
    features: [
      {
        title: "Three Stock Formats",
        desc: "14\xD710\xD76, 15\xD715\xD75 and 20\xD718\xD78 cm cover the common lash tray sizes \u2014 or made fully to your spec."
      },
      {
        title: "Fitted Lash Tray Inserts",
        desc: "Inserts cut to hold strip lash trays and extension programs securely in transit and on shelf."
      },
      {
        title: "Your Brand, Fully Printed",
        desc: "Offset print, foil stamping, embossing and spot UV on the wrap \u2014 inside lid printing available."
      },
      {
        title: "Low MOQ 200",
        desc: "Launch or test lash lines from 200 pieces \u2014 well below the typical wholesale 500."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: "14\xD710\xD76 / 15\xD715\xD75 / 20\xD718\xD78 cm, or custom" },
      { label: "Insert", value: "Fitted lash tray inserts, custom layouts" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / spot UV" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Custom sizes beyond the three stock formats",
      "Full-color print, foil or embossed logo",
      "Insert layout tailored to your lash trays",
      "Boxes for single pairs up to multi-tray wholesale packs"
    ]
  },
  {
    slug: "custom-perfume-boxes",
    name: "Custom Perfume Packaging Boxes",
    category: "Boxes",
    shortDesc: "Custom perfume boxes built around your bottle \u2014 two-piece, drawer and magnetic structures, from 200 pieces.",
    description: "Custom perfume packaging boxes made around the bottle, not the other way round. Share your bottle dimensions and we build the structure to fit \u2014 two-piece lift-off lids for the flagship gifting moment, magnetic flip-tops for the retail counter, and drawer formats that layer bottle and story card. The wrap carries your full print, foil or emboss program, and fitted inserts \u2014 EVA foam, paper card or moulded pulp, cut to your bottle profile \u2014 hold glass steady from factory to vanity. MOQ from 200 pieces with your branding. Request a stock sample to judge the board and finish in hand.",
    image: "/images/products/custom-perfume-boxes/custom-perfume-boxes-hero.jpg",
    gallery: [
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-hero.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-01.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-02.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-03.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-04.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-05.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-06-insert.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-scene-01.jpg",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-scene-02.jpg"
    ],
    materials: "Rigid paperboard with custom printed wrap, EVA / paper card / moulded pulp bottle inserts",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Fragrance", "Beauty", "Gift"],
    features: [
      {
        title: "Built Around Your Bottle",
        desc: "Box and insert sized from your bottle dimensions \u2014 travel sprays to flagship formats and multi-bottle gift sets."
      },
      {
        title: "Three Core Structures",
        desc: "Two-piece lift-off, drawer and magnetic flip-top \u2014 the opening ritual that fits the line."
      },
      {
        title: "Full-Print Branding",
        desc: "Offset print, foil stamping, embossing and spot UV on the wrap \u2014 inside lid printing available."
      },
      {
        title: "Secure Bottle Inserts",
        desc: "EVA or molded inserts cut to the bottle profile, holding glass firmly through shipping and on shelf."
      }
    ],
    specs: [
      { label: "Structures", value: "Two-piece lift-off / drawer / magnetic flip-top" },
      { label: "Dimensions", value: "Made to your bottle" },
      { label: "Insert", value: "EVA foam / paper card / moulded pulp, cut to bottle profile" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / spot UV" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Sizing to any bottle format or gift set",
      "Foil, emboss and full-colour print programs",
      "Inserts cut to your bottle profile",
      "Drawer and layered story-card layouts"
    ]
  },
  {
    slug: "custom-perfume-sample-card-boxes",
    name: "Custom Printed Perfume Sample Card Boxes",
    category: "Boxes",
    shortDesc: "Fully printed paper sample cards for perfume vials and sachets \u2014 your card layout, count and artwork.",
    description: "Perfume sample packaging as a printed paper card: vials or sachets mount onto a full-colour card that carries the brand, the scent story and the try-me moment in one mail-flat piece. This is a different product from our rigid perfume gift boxes \u2014 sample cards are printed card construction, sized to your sample count and vial format, with your artwork edge to edge. Sampling programs, subscription inserts, boutique handouts and press mailers all run on the same card system. MOQ from 200 pieces with a 15\u201320 day lead time \u2014 send your sample count and card size for a quote. Product photography is in progress.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Printed paper card with mounted sample holders",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Fragrance", "Beauty", "Gift"],
    features: [
      {
        title: "Full-Colour Card Printing",
        desc: "Your artwork edge to edge \u2014 brand face, scent story and instructions on one card."
      },
      {
        title: "Sized to Your Sample Count",
        desc: "Card layouts for single vials through multi-scent discovery sets."
      },
      {
        title: "Mail-Flat Construction",
        desc: "Slim paper-card build that posts at standard letter weights in sampling campaigns."
      },
      {
        title: "Pairs with Gift Boxes",
        desc: "Sample card for the try-me moment, rigid perfume box for the purchase \u2014 one matched program."
      }
    ],
    specs: [
      { label: "Format", value: "Printed paper card with sample mount" },
      { label: "Sample count", value: "Custom \u2014 single to multi-scent layouts" },
      { label: "Card size", value: "Made to your spec" },
      { label: "Print", value: "Full colour, custom artwork" },
      { label: "MOQ", value: "200 pcs" },
      { label: "Lead time", value: "15\u201320 days" }
    ],
    customizationOptions: [
      "Card sizes and sample-count layouts",
      "Full-colour artwork printing",
      "Formats for vials, sachets and sprays",
      "Matched programs with rigid perfume boxes"
    ]
  },
  {
    slug: "custom-press-on-nail-boxes",
    name: "Custom Press-on Nail Boxes",
    category: "Boxes",
    shortDesc: "Custom press-on nail packaging boxes \u2014 sized to your nail sets and trays, with your logo from the first run.",
    description: "Custom press-on nail packaging for nail brands selling direct and at retail. Press-on sets live or die on presentation \u2014 the box holds the nail trays or tips securely, shows the shade and size system, and carries your brand at first sight. Boxes are made to your set format: single-set sleeves, multi-size kits or wholesale display packs, with fitted inserts that keep every tray in place. Your logo is printed, foil-stamped or embossed on the wrap. MOQ from 200 pieces \u2014 send your tray dimensions and set count for a quote. Product photography is in progress; request a stock sample to judge the board quality.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard with custom printed wrap, fitted tray inserts",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Beauty", "Gift"],
    features: [
      {
        title: "Sized to Your Set Format",
        desc: "Single-set sleeves, multi-size kits and wholesale display packs \u2014 built around your trays."
      },
      {
        title: "Fitted Tray Inserts",
        desc: "Inserts cut to hold nail trays, tips and accessories in place in transit and on shelf."
      },
      {
        title: "Shade-Forward Branding",
        desc: "Full-colour print, foil and embossing that show the shade system and carry the brand."
      },
      {
        title: "Retail and DTC Ready",
        desc: "Structures that work on a retail shelf and in an e-commerce mailer alike."
      }
    ],
    specs: [
      { label: "Dimensions", value: "Made to your nail set and trays" },
      { label: "Insert", value: "Fitted tray inserts, custom layouts" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / spot UV" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Custom sizes for any set or kit format",
      "Full-colour print, foil or embossed logo",
      "Insert layouts tailored to your trays",
      "Wholesale display pack formats"
    ]
  },
  {
    slug: "custom-hair-extension-boxes",
    name: "Custom Hair Extension Boxes",
    category: "Boxes",
    shortDesc: "Custom hair extension packaging boxes \u2014 sleeve, drawer and magnetic formats that present bundles and wefts at retail.",
    description: "Custom hair extension boxes for extension brands and salons. The box does two jobs: it keeps bundles and wefts orderly and protected, and it presents the length-shade system the way a premium hair program deserves. Sleeve boxes for single bundles, drawer boxes for multi-bundle sets and magnetic flip-tops for flagship programs \u2014 each made to your bundle dimensions, with inserts that hold hair in place without crushing it. Your logo prints, foils or embosses on the wrap. MOQ from 200 pieces \u2014 send your bundle dimensions for a quote. Product photography is in progress.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard with custom printed wrap, fitted bundle inserts",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Hair & Wig", "Beauty", "Gift"],
    features: [
      {
        title: "Sleeve, Drawer & Magnetic",
        desc: "Three structures matched to the program \u2014 single bundles, multi-bundle sets and flagship lines."
      },
      {
        title: "Bundle-Holding Inserts",
        desc: "Inserts that keep wefts and bundles in place and presenting, without crushing the hair."
      },
      {
        title: "Length-Shade Presentation",
        desc: "Print programs that show the length and shade system clearly at retail."
      },
      {
        title: "Matched Bag Programs",
        desc: "Pairs with satin wig bags and cotton envelope pouches as one branded system."
      }
    ],
    specs: [
      { label: "Structures", value: "Sleeve / drawer / magnetic flip-top" },
      { label: "Dimensions", value: "Made to your bundle format" },
      { label: "Insert", value: "Fitted inserts for bundles and wefts" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / spot UV" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Custom sizes for any bundle count",
      "Full-colour print, foil or embossed logo",
      "Insert layouts for wefts and accessories",
      "Matched programs with satin wig bags"
    ]
  },
  {
    slug: "custom-watch-boxes",
    name: "Custom Watch Boxes",
    category: "Boxes",
    shortDesc: "Custom watch boxes with fitted watch pillow inserts \u2014 single and multi-watch formats for retail and gifting.",
    description: "Custom watch boxes for watch brands, strap makers and gifting programs. The structure is the same craft as our jewelry boxes: rigid board with your printed or wrapped finish, and a fitted watch pillow that holds the timepiece upright and still \u2014 single-watch presentation boxes through multi-watch cases with individually pillowed bays. Wraps range from matte art paper to faux leather, with foil stamping, embossing and spot UV branding. MOQ from 200 pieces \u2014 send your watch dimensions and piece count for a quote. Product photography is in progress; request a stock sample to judge the board and finish.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard or faux leather wrap, watch pillow inserts",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Fitted Watch Pillows",
        desc: "Velvet or satin-covered pillows hold each watch upright and still \u2014 the same insert craft as our ring boxes."
      },
      {
        title: "Single to Multi-Watch",
        desc: "One-watch presentation boxes through multi-bay cases for collectors and sets."
      },
      {
        title: "Premium Wrap Options",
        desc: "Matte art paper, textured wraps or faux leather \u2014 foil and emboss branding on every version."
      },
      {
        title: "Retail and Gift Ready",
        desc: "Structures that present at the counter and protect through gifting and shipping."
      }
    ],
    specs: [
      { label: "Structures", value: "Two-piece lift-off / drawer / magnetic flip-top" },
      { label: "Insert", value: "Fitted watch pillows, velvet or satin covered" },
      { label: "Wrap", value: "Art paper / textured wrap / faux leather" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / embossing" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Single- and multi-watch layouts",
      "Pillow materials and colours to your spec",
      "Foil, emboss and full-print branding",
      "Matched pouch programs for the after-sale"
    ]
  },
  {
    slug: "custom-velvet-pouches",
    name: "Custom Velvet Pouches",
    category: "Pouches & Bags",
    shortDesc: "Soft velvet pouches in drawstring, flap, envelope and zipper styles \u2014 your colour, size and logo.",
    description: "Custom velvet pouches for programs that want a plush, gift-ready feel at first touch. The dense velvet pile cushions jewelry, eyewear and small luxury goods, and the same pouch carries brands through retail, gifting and unboxing moments. Choose your closure \u2014 drawstring, flap, envelope or zipper \u2014 your Pantone-matched velvet colour, and your logo silkscreened, hot-stamped or woven into a label. Made to order in any size, from small gift pouches to large presentation bags. Runs start at 200 pieces with 15\u201320 day delivery, and velvet dye lots are held to your reference through a four-step colour control chain with sample approval before bulk. A custom sample (USD 25 plus USD 20 shipping, 3\u20135 days) settles pile direction, shade and logo hand before the production order \u2014 the cheapest way to see the exact fabric your program will carry.",
    image: "/images/carousel/velvet-pouch.png",
    materials: "Velvet, cotton cord drawstring",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Plush Velvet Protection",
        desc: "Dense velvet pile cushions jewelry, frames and finished goods against scratches."
      },
      {
        title: "Four Closure Styles",
        desc: "Drawstring, flap, envelope or zipper \u2014 the closure that fits how the pouch is used."
      },
      {
        title: "Full Color Range",
        desc: "Stock and Pantone-matched velvet colors for brand alignment."
      },
      {
        title: "Custom Branding",
        desc: "Silkscreen printing, foil stamping or woven label stitched inside or outside."
      }
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Closure Type", value: "Drawstring / flap / envelope / zipper" },
      { label: "String Type", value: "Cotton cord / satin ribbon / polyester cord" }
    ],
    customizationOptions: [
      "Pantone velvet color matching",
      "Logo printing, foil or woven labels",
      "Drawstring, flap, envelope or zipper closure",
      "Custom sizes, MOQ unchanged"
    ]
  },
  {
    slug: "custom-cotton-pouches",
    name: "Custom Cotton Pouches & Bags",
    category: "Pouches & Bags",
    shortDesc: "Natural cotton pouches and bags \u2014 printable, gently protective, made to your size and logo.",
    description: "Custom cotton pouches and bags for brands that want a natural, honest carrier. Unbleached cotton has a soft hand feel that suits artisan, beauty, jewelry and favor programs alike, and the fabric takes water-based ink prints beautifully. Choose your style \u2014 drawstring, flap, envelope or zipper \u2014 in any size from small jewelry and cosmetics pouches to larger gift bags, with your logo printed or woven in. Made to order \u2014 every fact on this page is our confirmed trade term.",
    image: "/images/carousel/cotton-pouch.png",
    materials: "Natural cotton, cotton cord",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "100% Natural Cotton",
        desc: "Unbleached cotton fabric with a soft, natural hand feel."
      },
      {
        title: "Prints Beautifully",
        desc: "Single to multi-color prints with water-based inks."
      },
      {
        title: "Gentle Protection",
        desc: "Soft texture that protects finishes without abrading."
      },
      {
        title: "Beauty & Favor Ready",
        desc: "A natural fit for cosmetics, favors, retail and gifting programs."
      }
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "String Type", value: "Cotton cord" },
      { label: "Closure Type", value: "Drawstring / flap / envelope / zipper" }
    ],
    customizationOptions: [
      "Water-based ink printing",
      "Natural, bleached or dyed cotton",
      "Custom sizes and drawcord colors",
      "Drawstring, flap, envelope or zipper closure"
    ]
  },
  {
    slug: "custom-cotton-envelope-pouches",
    name: "Custom Cotton Envelope Pouches",
    category: "Pouches & Bags",
    shortDesc: "Cotton envelope pouches with flap-snap, flat-pocket and zip-envelope styles \u2014 a workhorse carrier for jewelry, wigs and beauty.",
    description: "The cotton envelope pouch is one of our most-run pouch programs: a structured cotton carrier with an envelope flap, made in many styles and custom sizes for jewelry, wigs and hair, and beauty lines. Three style families cover the uses \u2014 the flap-and-snap envelope that closes with one hand and gifts beautifully, the flat open pocket for inserts and slip cases, and the zip envelope that secures contents for travel and retail. Natural unbleached cotton takes water-based ink prints and woven labels well, and every size is made to your product. MOQ from 200 pieces. Product photography is in progress; request a stock sample to feel the weave.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Natural cotton, snap or zipper closure",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Hair & Wig", "Beauty"],
    features: [
      {
        title: "Envelope Flap with Snap",
        desc: "The signature style \u2014 a structured flap that closes with one hand and gifts beautifully."
      },
      {
        title: "Flat Pocket & Zip Envelope",
        desc: "Open flat pockets for inserts and slip cases; zip envelopes that secure contents for travel."
      },
      {
        title: "Custom Sizes Across Lines",
        desc: "Small jewelry envelopes through wig and beauty formats \u2014 made to your product, MOQ unchanged."
      },
      {
        title: "Prints & Labels",
        desc: "Water-based ink prints, woven labels and heat transfers sit well on the natural weave."
      }
    ],
    specs: [
      { label: "Styles", value: "Envelope flap (snap) / flat pocket / zip envelope" },
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Natural, bleached or dyed cotton" },
      { label: "Closure", value: "Snap / open pocket / zipper" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Flap, flat-pocket and zip-envelope styles",
      "Custom sizes for jewelry, wigs and beauty",
      "Water-based ink printing or woven labels",
      "Natural, bleached or dyed cotton"
    ]
  },
  {
    slug: "velvet-necklace-display",
    name: "Velvet Necklace Display Stand",
    category: "Sets & Complete Packaging",
    shortDesc: "Velvet-covered retail display stand that presents necklaces securely in showcases.",
    description: "A velvet-covered necklace display stand for retail showcases. The plush surface holds chains and pendants in place without slipping, while the weighted base keeps the stand stable through high-traffic retail hours. Velvet colors are matched to your interior palette through the same four-step color control chain used across the packaging lines - artwork and reference review, material test, production control, and sample approval before bulk. Heights can be varied for different chain lengths, so one stand format can serve pendant, choker and lariat assortments. Runs start at 200 pieces with 15-20 day delivery, and a custom sample (USD 25 plus USD 20 shipping, 3-5 days) settles fabric shade and proportion before the production order. Pairs with the velvet jewelry display set and stackable trays to build a coordinated counter program.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Velvet, wooden base",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Fashion"],
    features: [
      {
        title: "Velvet Presentation Surface",
        desc: "Plush velvet holds necklaces in place without slipping."
      },
      {
        title: "Sturdy Weighted Base",
        desc: "Wooden base keeps the stand stable in high-traffic retail."
      },
      {
        title: "Color Matching",
        desc: "Velvet colors aligned to your retail interior palette."
      },
      {
        title: "Base Branding",
        desc: "Foil or deboss your logo on the wooden base edge."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '12" \xD7 4" \xD7 10"' },
      { label: "Surface Finish", value: "Velvet covering" },
      { label: "Color Control", value: "Four-step chain, sample approval before bulk" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" }
    ],
    customizationOptions: [
      "Velvet color matching",
      "Logo on wooden base",
      "Custom heights for different chain lengths"
    ]
  },
  {
    slug: "acrylic-earring-display",
    name: "Acrylic Earring Display Stand",
    category: "Sets & Complete Packaging",
    shortDesc: "Crystal-clear acrylic earring display with multi-tier slots and weighted base.",
    description: "A crystal-clear acrylic earring display with tiered slots and a weighted base, designed so the jewelry - not the stand - carries the visual. Optical-grade clarity suits contemporary retail settings; the multi-tier layout puts multiple pairs at eye level while the weighted base resists tipping in busy display environments. Slot count, tier count and height are engineered around your assortment, from stud-and-drop pairs to statement earrings, and bases take direct logo printing or frosted and colored acrylic variants for brand-matched counters. Production runs from 200 pieces in 15-20 days. Approve proportions with a custom sample first (USD 25 plus USD 20 shipping, 3-5 days), and specify slot layouts on the drawing so the finished stand fits your exact earring range without rework.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Acrylic / PVC",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Beauty"],
    features: [
      {
        title: "Crystal Clear Acrylic",
        desc: "Optical-grade clarity that keeps all attention on the jewelry."
      },
      {
        title: "Multi-Tier Slots",
        desc: "Tiered layout displays multiple earring pairs at eye level."
      },
      {
        title: "Weighted Stability",
        desc: "Weighted base prevents tipping in busy retail environments."
      },
      {
        title: "Custom Sizing",
        desc: "Height and slot count tailored to your assortment."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '8" \xD7 3" \xD7 8"' },
      { label: "Surface Finish", value: "Transparent glossy" },
      { label: "MOQ / Lead Time", value: "200 pcs, 15-20 days" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" }
    ],
    customizationOptions: [
      "Custom tiers and slot layouts",
      "Frosted or colored acrylic options",
      "Base logo printing"
    ]
  },
  {
    slug: "kraft-paper-shopping-bag",
    name: "Kraft Paper Shopping Bag",
    category: "Pouches & Bags",
    shortDesc: "Durable recycled kraft shopping bag with twisted handles \u2014 custom logo printing.",
    description: "A durable kraft paper shopping bag with twisted paper handles set into reinforced boards, built for retail carry-out, gift wrapping and market days. The natural kraft substrate takes flexo or offset logo printing in up to four colors, and its visible fiber texture gives printed marks a warm, honest backdrop. Sizes and paper weights are custom - from boutique counter bags to event carry-all formats - with handle options in twisted paper or cotton cord. Construction is plastic-free and kerbside recyclable as made. Production runs from 200 pieces in 15-20 days, with color held to named references through a four-step control chain from artwork review to pre-bulk approval. Start with the free dieline at quotation to lock gusset depth and base format for your typical load, then approve a custom sample (USD 25 plus USD 20 shipping, 3-5 days) to test handle comfort and print density in hand before the bulk run.",
    image: "/images/carousel/kraft-bag.png",
    materials: "Recycled kraft paper, twisted paper handles",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Fashion", "Beauty", "Gift"],
    features: [
      {
        title: "Recycled Kraft",
        desc: "Natural kraft substrate with visible fiber texture and eco story."
      },
      {
        title: "Reinforced Handles",
        desc: "Twisted paper handles set into reinforced boards for heavy loads."
      },
      {
        title: "Custom Printing",
        desc: "Flexo or offset logo printing in up to 4 colors."
      },
      {
        title: "Fully Recyclable",
        desc: "Plastic-free construction \u2014 genuinely kerbside recyclable."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '10" \xD7 8" \xD7 12" (customizable)' },
      { label: "Handle Type", value: "Twisted paper / cotton cord" },
      { label: "Eco-Friendly", value: "Recyclable" },
      { label: "Dieline", value: "Free digital drawing at quotation" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" }
    ],
    customizationOptions: [
      "Custom sizes and paper weights",
      "Logo printing up to 4 colors",
      "Handle material options"
    ]
  },
  {
    slug: "stackable-jewelry-tray",
    name: "Stackable Jewelry Tray",
    category: "Sets & Complete Packaging",
    shortDesc: "Stackable velvet-lined jewelry tray system with customizable compartments.",
    description: "A stackable velvet-lined jewelry tray system for organized showcase display and drawer storage. Velvet-lined compartments protect pieces while the vertical stacking format lets one SKU build a full display wall - trays lock in stack so the tower stays stable and presentable through retail hours. The MDF core stays flat and strong under stacked loads, and compartment counts and sizes are laid out around your assortment, from rings and earrings to chains and watches. Velvet colors match your counter palette through the four-step color control chain, with sample approval before bulk. Runs start at 200 pieces with 15-20 day lead times, and a custom sample (USD 25 plus USD 20 shipping, 3-5 days) confirms lining shade and compartment fit with your actual pieces before the production order. Combine with the velvet display set for a coordinated showcase program.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "MDF, velvet lining",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Fashion"],
    features: [
      {
        title: "Velvet-Lined Compartments",
        desc: "Soft velvet bays protect pieces while keeping them organized."
      },
      {
        title: "Stackable System",
        desc: "Trays lock vertically to build full showcases from one SKU."
      },
      {
        title: "Sturdy MDF Core",
        desc: "MDF construction stays flat and strong under stacked loads."
      },
      {
        title: "Custom Layouts",
        desc: "Compartment counts and sizes designed around your assortment."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '14" \xD7 8" \xD7 1-1/2"' },
      { label: "Surface Finish", value: "Velvet covering" },
      { label: "Color Control", value: "Four-step chain, sample approval before bulk" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" }
    ],
    customizationOptions: [
      "Custom compartment layouts",
      "Velvet color matching",
      "Edge banding and branding"
    ]
  },
  {
    slug: "velvet-jewelry-display-set",
    name: "Velvet Jewelry Display Set",
    category: "Sets & Complete Packaging",
    shortDesc: "Matched velvet display set \u2014 necklace busts, T-bar stand, ring cones, earring stands and cushions in one coordinated program.",
    description: "A complete velvet display set that turns a counter into a coherent brand moment. The program pairs necklace busts in two heights with a two-tier T-bar bracelet stand, ring cones, earring stands and plush bracelet cushions \u2014 all cut from the same velvet over structured cores, so every touchpoint matches in color and texture. Designed for jewelry retailers and brands that want display, storage and gifting to speak one visual language. Set composition is built around your assortment \u2014 counts and heights are specified per piece, not fixed \u2014 and the velvet shade is matched to your counter palette through the four-step color control chain with sample approval before bulk. Runs start at 200 pieces per set with 15\u201320 day delivery, and a custom sample (USD 25 plus USD 20 shipping, 3\u20135 days) confirms shade and proportion with your actual jewelry before the production order. Stacks with the tray system for a full showcase build-out.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Velvet over structured core",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Gift", "Fashion"],
    features: [
      {
        title: "One Matched Program",
        desc: "Busts, stands, cones and cushions share the same velvet and core, so nothing looks pieced together."
      },
      {
        title: "Modular Counter Layout",
        desc: "Mix heights and piece types to fit any counter \u2014 from a single bust to a full runway of displays."
      },
      {
        title: "Structured, Not Floppy",
        desc: "Rigid cores keep busts and stands standing straight through daily retail handling."
      },
      {
        title: "Brand-Color Velvet",
        desc: "Velvet dyed to your brand palette, with optional label or embroidery placement."
      }
    ],
    specs: [
      { label: "Pieces", value: "Necklace busts (2 heights), T-bar stand, ring cones, earring stands, cushions" },
      { label: "Covering", value: "Velvet in custom colors" },
      { label: "Core", value: "Structured board for shape retention" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Custom velvet colors across every piece",
      "Piece mix tailored to your assortment",
      "Logo label or embroidery on busts and cushions",
      "Bundle with pouches or boxes as a full set"
    ]
  },
  {
    slug: "leather-envelope-pouch",
    name: "Leather Envelope Pouch",
    category: "Pouches & Bags",
    shortDesc: "Pebbled faux-leather envelope pouch with gold foil logo, snap closure and soft suede-touch interior.",
    description: "The envelope pouch is where a protective sleeve becomes part of the gift. Cut from pebbled faux leather with a structured flap and snap closure, it opens to reveal a suede-touch interior that cushions whatever it carries \u2014 jewelry, eyewear, cards or small leather goods. Gold foil stamping on the flap carries the brand quietly, the way luxury prefers it. A slim profile that mails flat and still feels substantial in the hand. Sizes are cut to your contents, from single-card minis to eyewear-length formats, and foil colour, thread and interior shade are specified together so the pouch reads as one palette \u2014 held through the four-step colour control chain with sample approval before bulk. Production runs from 200 pieces in 15\u201320 days, and a custom sample (USD 25 plus USD 20 shipping, 3\u20135 days) settles flap hand, foil density and interior fit with your actual product before the run.",
    image: "/images/carousel/image.png",
    materials: "Pebbled faux leather, suede-touch lining",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Fashion", "Gift"],
    features: [
      {
        title: "Pebbled Faux Leather",
        desc: "A textured exterior that hides handling marks and reads premium at first touch."
      },
      {
        title: "Snap-Closure Flap",
        desc: "Envelope silhouette with a secure snap \u2014 stays closed in transit, opens with one hand."
      },
      {
        title: "Gold Foil Logo",
        desc: "Foil stamping positioned on the flap for a precise, understated brand mark."
      },
      {
        title: "Slim, Mail-Friendly Profile",
        desc: "Fits standard mailers and gift boxes without bulking up shipping."
      }
    ],
    specs: [
      { label: "Exterior", value: "Pebbled faux leather, custom colors" },
      { label: "Interior", value: "Suede-touch lining" },
      { label: "Closure", value: "Snap button" },
      { label: "Branding", value: "Gold foil stamping / blind emboss / heat transfer" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Custom leather colors and grain textures",
      "Foil stamping, embossing or debossing",
      "Interior lining color matching",
      "Custom sizes for jewelry, eyewear or cards"
    ]
  },
  {
    slug: "custom-satin-wig-bag",
    name: "Custom Satin Wig Bags",
    category: "Pouches & Bags",
    shortDesc: "Satin drawstring wig bag in the standard 30\xD740 cm format \u2014 smooth interior that keeps fibers from tangling, with your logo.",
    description: "A satin drawstring bag sized for wigs and hair extensions. The smooth satin surface lets fibers slide instead of snagging, so wigs come out of the bag the way they went in, and the drawstring closes in one pull. The standard 30\xD740 cm format fits most wig and extension presentations, and every bag is made to order \u2014 your satin colour, cord and branding. Product photography is in progress; request a stock sample to see and feel the material before ordering.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Satin, drawstring cord",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Hair & Wig", "Beauty", "Fashion"],
    features: [
      {
        title: "Smooth Satin Interior",
        desc: "Fibers glide instead of snagging \u2014 wigs and extensions stay tangle-free in storage and transit."
      },
      {
        title: "Standard Wig Format",
        desc: "30\xD740 cm fits most wig and extension programs; other sizes made to your spec."
      },
      {
        title: "Drawstring Closure",
        desc: "One-pull closing with a colour-matched satin or polyester cord."
      },
      {
        title: "Your Branding",
        desc: "Silkscreen logo, woven label or heat transfer \u2014 positioned inside or outside the bag."
      }
    ],
    specs: [
      { label: "Dimensions", value: "30 \xD7 40 cm standard \xB7 custom sizes on request" },
      { label: "Fabric", value: "Satin \xB7 other fabrics on request" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring" }
    ],
    customizationOptions: [
      "Pantone satin color matching",
      "Logo silkscreen, woven label or heat transfer",
      "Custom sizes and cord options"
    ]
  },
  {
    slug: "custom-satin-pouches",
    name: "Custom Satin Pouches",
    category: "Pouches & Bags",
    shortDesc: "Lustrous satin pouches with drawstring or flap closure \u2014 your colour, size and logo.",
    description: "Custom satin pouches for programs that want a gift feel at first touch. The lustrous face catches light in retail displays and unboxing photos, while the soft drape protects finishes and platings \u2014 a natural fit for jewelry, bridal, beauty and gifting lines, and a classic choice for perfume bottle gift bags. Made to order in your satin colour and size, with drawstring or flap closure and your logo silkscreened or hot-stamped. Product photography is in progress; request a stock sample to feel the material.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Satin, drawstring cord",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Fragrance", "Beauty", "Gift"],
    features: [
      {
        title: "Lustrous Gift Face",
        desc: "Light-catching satin that photographs well in retail and unboxing moments."
      },
      {
        title: "Soft Drape Protection",
        desc: "Gentle on platings and finishes \u2014 a natural fit for bridal and gifting lines."
      },
      {
        title: "Perfume Bottle Gift Bags",
        desc: "A classic carrier for fragrance gifting \u2014 sized to your bottle format."
      },
      {
        title: "Made to Your Colour",
        desc: "Pantone-matched satin so the pouch lands exactly on brand."
      }
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Satin, Pantone-matched" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring / flap / envelope" }
    ],
    customizationOptions: [
      "Pantone satin color matching",
      "Silkscreen printing or hot-stamped logo",
      "Drawstring, flap or envelope closure",
      "Custom sizes, MOQ unchanged"
    ]
  },
  {
    slug: "custom-muslin-drawstring-pouch",
    name: "Custom Muslin Pouches",
    category: "Pouches & Bags",
    shortDesc: "Breathable unbleached muslin drawstring pouch \u2014 the natural-look carrier for jewelry, favors and small goods.",
    description: "An unbleached muslin pouch with a visible, honest weave. Muslin is breathable, which makes it a natural fit for items that should not sit in sealed plastic \u2014 and its hand-made look suits artisan, bridal favor and natural-positioned brands. Cut, sewn and printed to order in your size, with a cotton drawstring and your logo in water-based ink. Runs start at 200 pieces with 15\u201320 day delivery, and print density on the open weave is confirmed on a custom sample (USD 25 plus USD 20 shipping, 3\u20135 days) before bulk \u2014 the weave reads differently at different ink weights, so the sample stage earns itself here. Weave weight and drawstring length are specified to your contents, from favor minis to bottle-length formats. Product photography is in progress; request a stock sample to see the weave.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Unbleached muslin, cotton cord",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "Breathable Weave",
        desc: "Air moves through the fabric \u2014 kind to items that should not sit sealed."
      },
      {
        title: "Natural, Unbleached Look",
        desc: "A visible cotton weave that reads artisan and honest on shelf."
      },
      {
        title: "Prints Beautifully",
        desc: "Water-based inks on cotton give soft, matte logo prints."
      },
      {
        title: "Light to Ship",
        desc: "Featherweight construction keeps freight costs down on volume programs."
      }
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Unbleached muslin cotton" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring (cotton cord)" }
    ],
    customizationOptions: [
      "Custom sizes and shapes",
      "Water-based ink logo printing",
      "Bleached or colored muslin on request",
      "Cord color matching"
    ]
  },
  {
    slug: "custom-microfiber-pouches",
    name: "Custom Microfiber Pouches",
    category: "Pouches & Bags",
    shortDesc: "Microfiber pouches that clean as they carry \u2014 eyewear sleeves, jewelry pouches and cloth-plus-pouch sets with your logo.",
    description: "Custom microfiber pouches for programs where the packaging works twice: it carries the product and polishes it. The fine synthetic weave lifts oils and dust without scratching, which makes it the standard companion for eyewear, sunglasses, screens and polished jewelry. Order the pouch alone, or as a set with a custom-printed microfiber cleaning cloth inside \u2014 a proven retail and care-kit combination. Made to order in your size and colour, with drawstring or flap closure and your logo. Product photography is in progress; request a stock sample to test the wipe performance.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Microfiber, drawstring cord",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Eyewear & Sunglasses", "Jewelry", "Beauty"],
    features: [
      {
        title: "Built for Eyewear",
        desc: "The default fabric for glasses and sunglasses sleeves \u2014 soft on lenses and coatings."
      },
      {
        title: "Cleans as It Carries",
        desc: "The pouch itself doubles as a polishing cloth for eyewear and screens."
      },
      {
        title: "Cloth + Pouch Sets",
        desc: "Bundle a custom-printed microfiber cleaning cloth inside the pouch \u2014 a ready-made care kit."
      },
      {
        title: "Scratch-Free Softness",
        desc: "Fine-denier fibers are safe on polished metals, lenses and coatings."
      }
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Microfiber" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring / flap" },
      { label: "Cloth + pouch set MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Custom sizes for eyewear, jewelry or devices",
      "Logo printing in one or multiple colors",
      "Printed microfiber cleaning cloth as a set component",
      "Dyed microfiber with matched cord"
    ]
  },
  {
    slug: "custom-pvc-bags",
    name: "Custom Clear PVC Zip Bags with Logo",
    category: "Pouches & Bags",
    shortDesc: "Clear PVC zip bags with your logo \u2014 transparent carriers for cosmetics, jewelry and press-on nails, from 200 pieces.",
    description: "Custom clear PVC zip bags for programs where seeing the product is the point. Transparent zip bags are the everyday carrier for cosmetics and skincare, a retail-proven format for jewelry, and a practical home for press-on nail sets \u2014 the customer sees everything without opening the bag. Your logo prints on the clear face, and sizes run from small item bags to full toiletry formats. MOQ from 200 pieces \u2014 well below the typical 500\u20131000 on the same format elsewhere. Closure type, thickness and print method are quoted to your spec. Product photography is in progress; request a stock sample to check the material in hand.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Clear PVC, zipper closure",
    moq: "200 pcs",
    leadTime: "15\u201320 days",
    industries: ["Beauty", "Jewelry"],
    features: [
      {
        title: "See-Through Convenience",
        desc: "Customers and retail staff see the contents without opening \u2014 built for cosmetics, jewelry and press-on sets."
      },
      {
        title: "Zipper Closure",
        desc: "Secure zip running the width of the bag \u2014 contents stay put in totes, drawers and travel."
      },
      {
        title: "Logo on the Clear Face",
        desc: "Your logo printed on transparent PVC so the brand shows with the product."
      },
      {
        title: "Low MOQ 200",
        desc: "Launch transparent-packaging programs from 200 pieces \u2014 typically 500\u20131000 elsewhere."
      }
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Material", value: "Clear PVC" },
      { label: "Closure type", value: "To be confirmed (quoted to your spec)" },
      { label: "Thickness / gauge", value: "To be confirmed" },
      { label: "Print method", value: "To be confirmed" },
      { label: "MOQ", value: "200 pcs" }
    ],
    customizationOptions: [
      "Custom sizes from small item bags to toiletry formats",
      "Logo printing on the clear face",
      "Zipper and closure options quoted to spec",
      "Matched programs with fabric pouch lines"
    ]
  }
];
var categories = [
  "All",
  "Boxes",
  "Pouches & Bags",
  "Sets & Complete Packaging"
];
var industries = [
  "Jewelry",
  "Eyewear & Sunglasses",
  "Fragrance",
  "Hair & Wig",
  "Beauty",
  "Fashion",
  "Gift"
];
var solutions = [
  "Custom Packaging",
  "Materials & Finishes",
  "How It Works",
  "Sustainability"
];
function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
var productGuides = {
  "black-leather-jewelry-box": [
    "how-to-choose-custom-jewelry-boxes",
    "jewelry-box-inserts-guide",
    "necklace-bracelet-packaging-guide",
    "custom-rigid-boxes-guide",
    "surface-finishes-compared-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "custom-white-jewelry-box": [
    "how-to-choose-custom-jewelry-boxes",
    "jewelry-box-inserts-guide",
    "necklace-bracelet-packaging-guide",
    "surface-finishes-compared-guide",
    "custom-rigid-boxes-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "custom-ring-boxes": [
    "custom-watch-boxes-guide",
    "custom-ring-boxes-guide",
    "jewelry-box-inserts-guide",
    "packaging-inserts-guide",
    "custom-rigid-boxes-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "luxury-gift-box-ribbon": [
    "custom-printed-ribbon-guide",
    "magnetic-closure-vs-ribbon-tie-gift-boxes",
    "packaging-colour-tolerance-explained",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "magnetic-closure-gift-box": [
    "magnetic-gift-boxes-wholesale-guide",
    "magnetic-gift-boxes-guide",
    "magnetic-closure-vs-ribbon-tie-gift-boxes",
    "custom-rigid-boxes-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "custom-eyelash-packaging-boxes": [
    "how-to-customize-eyelash-boxes",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide",
    "ppwr-empty-space-rules-guide"
  ],
  "custom-perfume-boxes": [
    "custom-perfume-packaging-guide",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide",
    "wholesale-perfume-boxes-guide"
  ],
  "custom-perfume-sample-card-boxes": [
    "perfume-sample-cards-guide",
    "custom-perfume-packaging-guide",
    "how-to-read-a-packaging-specification-sheet",
    "custom-gift-card-boxes-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "custom-press-on-nail-boxes": [
    "press-on-nail-packaging-guide",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide",
    "ppwr-empty-space-rules-guide"
  ],
  "custom-hair-extension-boxes": [
    "custom-hair-extension-boxes-guide",
    "custom-hair-extension-packaging-guide",
    "hair-extension-packaging-ideas",
    "custom-rigid-boxes-guide",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "custom-watch-boxes": [
    "custom-watch-boxes-guide",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
    "how-to-choose-custom-jewelry-boxes",
    "ppwr-packaging-regulation-guide",
    "ppwr-recyclability-grades-guide"
  ],
  "custom-velvet-pouches": [
    "custom-glasses-cases-pouches-guide",
    "velvet-satin-muslin-pouches-compared",
    "how-to-choose-a-custom-jewelry-pouch",
    "custom-logo-pouches-guide"
  ],
  "custom-cotton-pouches": [
    "custom-glasses-cases-pouches-guide",
    "how-to-choose-a-custom-jewelry-pouch",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide",
    "custom-toiletry-bags-guide"
  ],
  "custom-cotton-envelope-pouches": [
    "how-to-choose-a-custom-jewelry-pouch",
    "custom-logo-pouches-guide",
    "how-to-read-a-packaging-specification-sheet",
    "custom-toiletry-bags-guide"
  ],
  "velvet-necklace-display": [
    "jewelry-display-trays-guide",
    "custom-jewelry-packaging-guide",
    "how-to-choose-custom-jewelry-boxes"
  ],
  "acrylic-earring-display": [
    "jewelry-display-trays-guide",
    "custom-jewelry-packaging-guide",
    "how-to-choose-custom-jewelry-boxes"
  ],
  "kraft-paper-shopping-bag": [
    "custom-gift-packaging-guide",
    "custom-clothing-apparel-packaging-guide",
    "custom-logo-pouches-guide",
    "candle-packaging-guide"
  ],
  "stackable-jewelry-tray": [
    "jewelry-display-trays-guide",
    "packaging-inserts-guide",
    "custom-jewelry-packaging-guide"
  ],
  "velvet-jewelry-display-set": [
    "jewelry-display-trays-guide",
    "custom-jewelry-packaging-guide",
    "how-to-choose-custom-jewelry-boxes"
  ],
  "leather-envelope-pouch": [
    "how-to-choose-a-custom-jewelry-pouch",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide"
  ],
  "custom-satin-wig-bag": [
    "custom-wig-packaging-guide",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide",
    "custom-hair-extension-boxes-guide"
  ],
  "custom-satin-pouches": [
    "custom-cosmetic-bags-guide",
    "velvet-satin-muslin-pouches-compared",
    "how-to-choose-a-custom-jewelry-pouch",
    "custom-logo-pouches-guide"
  ],
  "custom-muslin-drawstring-pouch": [
    "custom-muslin-bags-guide",
    "how-to-choose-custom-drawstring-bags",
    "velvet-satin-muslin-pouches-compared"
  ],
  "custom-microfiber-pouches": [
    "custom-glasses-cases-pouches-guide",
    "how-to-choose-a-custom-jewelry-pouch",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide"
  ],
  "custom-pvc-bags": [
    "custom-cosmetic-bags-guide",
    "how-to-choose-custom-drawstring-bags",
    "custom-cosmetic-packaging-guide",
    "custom-logo-pouches-guide",
    "custom-toiletry-bags-guide"
  ]
};

// src/components/Header.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var productCategories = categories.filter((c) => c !== "All");
function Header() {
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
  const [openDropdown, setOpenDropdown] = (0, import_react.useState)(null);
  const location = (0, import_react_router_dom.useLocation)();
  const dropdownTimer = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  (0, import_react.useEffect)(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const handleDropdownEnter = (name) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(name);
  };
  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { className: `site-header ${scrolled ? "is-scrolled" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "container-wide header-inner", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/", className: "header-logo", "aria-label": "ELAPACK home", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Logo, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "nav",
        {
          className: "header-nav",
          onMouseLeave: handleDropdownLeave,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "div",
              {
                className: "nav-dropdown-wrapper",
                onMouseEnter: () => handleDropdownEnter("products"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.NavLink,
                    {
                      to: "/products/",
                      className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                      children: "Products"
                    }
                  ),
                  openDropdown === "products" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown-inner", children: productCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.Link,
                    {
                      to: `/products/?category=${encodeURIComponent(cat)}`,
                      className: "nav-dropdown-link",
                      children: cat
                    },
                    cat
                  )) }) })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "div",
              {
                className: "nav-dropdown-wrapper",
                onMouseEnter: () => handleDropdownEnter("industries"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.NavLink,
                    {
                      to: "/industries/",
                      className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                      children: "Industries"
                    }
                  ),
                  openDropdown === "industries" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown-inner", children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.Link,
                    {
                      to: `/industries/?sector=${encodeURIComponent(ind)}`,
                      className: "nav-dropdown-link",
                      children: ind
                    },
                    ind
                  )) }) })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "div",
              {
                className: "nav-dropdown-wrapper",
                onMouseEnter: () => handleDropdownEnter("solutions"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.NavLink,
                    {
                      to: "/solutions/",
                      className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                      children: "Solutions"
                    }
                  ),
                  openDropdown === "solutions" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown-inner", children: solutions.map((sol) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.Link,
                    {
                      to: `/solutions/?topic=${encodeURIComponent(sol)}`,
                      className: "nav-dropdown-link",
                      children: sol
                    },
                    sol
                  )) }) })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_react_router_dom.NavLink,
              {
                to: "/about/",
                className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                children: "About Us"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_react_router_dom.NavLink,
              {
                to: "/news/",
                className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                children: "News"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_react_router_dom.NavLink,
              {
                to: "/contact/",
                className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                children: "Contact"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          className: `menu-toggle ${menuOpen ? "is-open" : ""}`,
          onClick: () => setMenuOpen(!menuOpen),
          "aria-label": "Toggle menu",
          "aria-expanded": menuOpen,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {}),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {}),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {})
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `mobile-menu ${menuOpen ? "is-open" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "mobile-nav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mobile-nav-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mobile-nav-heading", children: "Products" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/products/", className: "mobile-nav-link mobile-nav-sub", children: "All Products" }),
        productCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_router_dom.Link,
          {
            to: `/products/?category=${encodeURIComponent(cat)}`,
            className: "mobile-nav-link mobile-nav-sub",
            children: cat
          },
          cat
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mobile-nav-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mobile-nav-heading", children: "Industries" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/industries/", className: "mobile-nav-link mobile-nav-sub", children: "All Industries" }),
        industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_router_dom.Link,
          {
            to: `/industries/?sector=${encodeURIComponent(ind)}`,
            className: "mobile-nav-link mobile-nav-sub",
            children: ind
          },
          ind
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mobile-nav-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mobile-nav-heading", children: "Solutions" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/solutions/", className: "mobile-nav-link mobile-nav-sub", children: "All Solutions" }),
        solutions.map((sol) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_router_dom.Link,
          {
            to: `/solutions/?topic=${encodeURIComponent(sol)}`,
            className: "mobile-nav-link mobile-nav-sub",
            children: sol
          },
          sol
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/about/", className: "mobile-nav-link", children: "About Us" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/news/", className: "mobile-nav-link", children: "News" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/contact/", className: "mobile-nav-link", children: "Contact" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/contact/", className: "mobile-cta", children: "Get a Quote" })
    ] }) })
  ] });
}

// src/components/Footer.tsx
var import_react_router_dom2 = require("react-router-dom");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "site-footer", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Logo, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "footer-desc", children: "Crafting premium packaging solutions for global luxury brands. From creative design to precision production \u2014 one partner, end to end." }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-badges", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "footer-badge", children: "Eco-Friendly Materials" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "footer-badge", children: "ISO 9001 Certified" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "footer-badge", children: "Global Shipping" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "footer-heading", children: "Navigate" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/", children: "Home" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products/", children: "Products" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/industries/", children: "Industries" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/solutions/", children: "Solutions" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/about/", children: "About Us" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/news/", children: "News" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/contact/", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "footer-heading", children: "Products" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products/?category=Pouches%20%26%20Bags", children: "Pouches & Bags" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products/?category=Boxes", children: "Boxes" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products/?category=Sets%20%26%20Complete%20Packaging", children: "Sets & Complete Packaging" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products/?category=Ribbons%20%26%20Accessories", children: "Ribbons & Accessories" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "footer-heading", children: "Contact" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "footer-contact", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "footer-label", children: "Phone" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "tel:+8618626352096", children: "+86 18626352096" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "footer-label", children: "Email" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "mailto:tina@elapack.com", children: "tina@elapack.com" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "footer-label", children: "WhatsApp" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: "https://wa.me/8618626352096", children: "+86 18626352096" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "footer-label", children: "Factory" }),
            "Wuxi, Jiangsu, China"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ELAPACK. All rights reserved. ELAPACK is a brand of Wuxi Magic Packaging Co., Ltd."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "footer-locale", children: "Serving Europe & North America \xB7 English" })
    ] })
  ] }) });
}

// src/hooks/useScrollReveal.ts
var import_react2 = require("react");
var import_react_router_dom3 = require("react-router-dom");
function useScrollReveal() {
  const { pathname, search } = (0, import_react_router_dom3.useLocation)();
  (0, import_react2.useEffect)(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0.15 made any block taller than ~6.5x the viewport
      // (article bodies are 4000-6000px) permanently stuck at opacity:0
      // on short windows — the reveal never fired and the page looked blank.
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, search]);
}

// src/hooks/useScrollToTop.ts
var import_react3 = require("react");
var import_react_router_dom4 = require("react-router-dom");
function useScrollToTop() {
  const { pathname } = (0, import_react_router_dom4.useLocation)();
  (0, import_react3.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

// src/lib/track.ts
function track(name, params = {}) {
  const w = window;
  w.gtag?.("event", name, params);
}

// src/components/Layout.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Layout({ children }) {
  useScrollReveal();
  useScrollToTop();
  (0, import_react4.useEffect)(() => {
    const onClick = (e) => {
      const anchor = e.target.closest?.("a");
      if (anchor && anchor.href.startsWith("https://wa.me/")) {
        track("whatsapp_click", { link: anchor.href });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "app", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("main", { className: "main-content", children: children ?? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom5.Outlet, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Footer, {})
  ] });
}

// src/pages/Home.tsx
var import_react5 = require("react");
var import_react_router_dom6 = require("react-router-dom");
var import_jsx_runtime5 = require("react/jsx-runtime");
var featuredSlugs = [
  { slug: "magnetic-closure-gift-box", tag: "Signature" },
  { slug: "black-leather-jewelry-box", tag: "Icon" },
  { slug: "luxury-gift-box-ribbon", tag: "Premium" },
  { slug: "custom-velvet-pouches", tag: "Bestseller" },
  { slug: "custom-cotton-pouches", tag: "Eco" },
  { slug: "kraft-paper-shopping-bag", tag: "Retail" },
  { slug: "custom-ring-boxes", tag: "Wedding" },
  { slug: "stackable-jewelry-tray", tag: "Display" }
];
var products2 = featuredSlugs.map(({ slug, tag }) => {
  const p = getProductBySlug(slug);
  return p ? { name: p.name, slug: p.slug, desc: p.shortDesc, image: p.image, tag } : null;
}).filter((p) => p !== null);
var stats = [
  { value: "10+", label: "Years of Craft" },
  { value: "200+", label: "Brand Partners" },
  { value: "30+", label: "Countries Served" },
  { value: "99.6%", label: "Quality Pass Rate" }
];
var popularSolutions = [
  {
    name: "Luxury Gift Boxes",
    category: "Boxes",
    desc: "Custom rigid boxes, magnetic closures, drawer styles, and luxury gift-ready packaging for premium brands and wholesale buyers.",
    image: "/popular-gift-boxes.webp"
  },
  {
    name: "Shopping Bags & Pouches",
    category: "Pouches & Bags",
    desc: "Brand-supporting paper bags, hang tags, and cards that complete your packaging system and improve consistency.",
    image: "/popular-shopping-bags.webp"
  },
  {
    name: "Custom Ribbons",
    category: "Ribbons & Accessories",
    desc: "Woven and printed ribbons in silk, satin, and grosgrain \u2014 branded to your exact color, width, and weave specifications.",
    image: "/popular-ribbons.webp"
  },
  {
    name: "Complete Packaging Sets",
    category: "Sets & Complete Packaging",
    desc: "Coordinated gift boxes, bags, ribbons, and tissue paper \u2014 designed as one cohesive brand system.",
    image: "/popular-packaging-sets.webp"
  }
];
var brandLogos = [
  { name: "Luxury Jewelry Houses", type: "text" },
  { name: "Heritage Pearl Brands", type: "text" },
  { name: "US Designer Labels", type: "text" },
  { name: "UK High-Street Retail", type: "text" },
  { name: "Global Fashion Groups", type: "text" }
];
var whyCards = [
  {
    title: "Custom Supply",
    desc: "Flexible sourcing and formulation cooperation for specific product requirements.",
    image: "/why-custom-supply.webp"
  },
  {
    title: "R&D Support",
    desc: "Technical review and product development support for target applications.",
    image: "/why-rd-support.webp"
  },
  {
    title: "Supply Chain",
    desc: "Packaging, warehousing, and export coordination for stable delivery.",
    image: "/why-supply-chain.webp"
  },
  {
    title: "Technical Service",
    desc: "Clear documents, responsive communication, and consistent order follow-up.",
    image: "/why-technical-service.webp"
  }
];
var caseStudies = [
  {
    client: "A UK High-Street Retailer",
    category: "Retail Packaging",
    solution: "Cost-Effective Luxury Packaging",
    image: "/images/carousel/kraft-bag.png",
    points: [
      "Budget-friendly without compromise",
      "Efficient design, lower production costs",
      "Bulk orders with better value"
    ]
  },
  {
    client: "A New York Jewelry House",
    category: "Jewelry Packaging",
    solution: "Luxury Jewelry Box Design",
    image: "/images/carousel/luxury-gift-box.png",
    points: [
      "Packaging that solidifies brand image",
      "Enhanced recognition and design sense",
      "Meets customer aesthetic preferences"
    ]
  },
  {
    client: "A Heritage Pearl Maison",
    category: "Heritage Packaging",
    solution: "Timeless Jewelry Boxes",
    image: "/images/carousel/black-leather-box.png",
    points: [
      "Classic packaging for heritage jewelry",
      "Marketing impact that grows steadily",
      "Presentation worthy of the brand"
    ]
  },
  {
    client: "A Global Fashion Group",
    category: "Cosmetic & Perfume",
    solution: "Fashion Retail Packaging",
    image: "/images/carousel/exec-d88bc44e-a36e-4f12-b991-f3f746e07e39.png",
    points: [
      "Enhanced brand image",
      "Consistent quality at volume",
      "Complemented high-fashion products"
    ]
  }
];
function Home() {
  const [activeSlide, setActiveSlide] = (0, import_react5.useState)(0);
  const introVideoRef = (0, import_react5.useRef)(null);
  const [introPaused, setIntroPaused] = (0, import_react5.useState)(false);
  const toggleIntroVideo = () => {
    const video = introVideoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setActiveSlide(
    (prev) => prev === 0 ? caseStudies.length - 1 : prev - 1
  );
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "hero", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "hero-image", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "img",
        {
          src: "/hero-poster-oem-odm.webp",
          alt: "OEM & ODM custom packaging by ELAPACK: gift boxes, shopping bags, pouches and jewelry packaging",
          width: 1942,
          height: 809
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/contact/", className: "hero-cta", children: "Get a Quote" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { className: "visually-hidden", children: "OEM & ODM Custom Packaging Solutions" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "hero-scroll", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Scroll" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "scroll-line" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section stats-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "stats-grid", children: stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: `stat-item reveal reveal-delay-${i + 1}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "stat-value", children: stat.value }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "stat-label", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section intro-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "intro-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "intro-image-wrap reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "intro-image-main", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "video",
            {
              ref: introVideoRef,
              autoPlay: true,
              muted: true,
              loop: true,
              playsInline: true,
              poster: "/factory-video-poster.webp",
              "aria-label": "ELAPACK premium packaging facility",
              onPlay: () => setIntroPaused(false),
              onPause: () => setIntroPaused(true),
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("source", { src: "/videos/factory-tour.mp4", type: "video/mp4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "button",
            {
              type: "button",
              className: "intro-video-toggle",
              onClick: toggleIntroVideo,
              "aria-pressed": introPaused,
              "aria-label": introPaused ? "Play the factory video" : "Pause the factory video",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                  "svg",
                  {
                    className: "intro-video-icon intro-video-icon-pause",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "7", y: "5", width: "3.6", height: "14", fill: "currentColor" }),
                      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                        "rect",
                        {
                          x: "13.4",
                          y: "5",
                          width: "3.6",
                          height: "14",
                          fill: "currentColor"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "svg",
                  {
                    className: "intro-video-icon intro-video-icon-play",
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M8 5 L19 12 L8 19 Z", fill: "currentColor" })
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "intro-image-badge", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "intro-badge-num", children: "10+" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "intro-badge-label", children: "Years of Craft" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "intro-right reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", children: "About ELAPACK" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "1rem" }, children: "A builder of packaging aesthetics for the world's finest brands." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "intro-text", children: "We are a trade-and-manufacturing integrated enterprise deeply rooted in the European and American markets. From exquisite gift boxes to luxury shopping bags, we provide one-stop packaging solutions for global high-end brands \u2014 covering creative design, custom materials, and lean production." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "intro-text", children: "Our product matrix spans premium gift boxes, luxury shopping bags, custom ribbons, textile fabric packaging, and complete brand collections \u2014 serving jewelry, eyewear, beauty, fragrance, gifting, and fashion brands with minimalist, sophisticated, and highly distinctive packaging." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "intro-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_router_dom6.Link, { to: "/about/", className: "text-link", children: [
            "Discover Our Story",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_router_dom6.Link, { to: "/video/", className: "text-link", children: [
            "Custom Solution",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section products-preview", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "section-header reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", children: "Our Craft" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Packaging That Defines Brands" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_router_dom6.Link, { to: "/products/", className: "text-link", children: [
          "View All Products",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "products-grid", children: products2.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        import_react_router_dom6.Link,
        {
          to: `/products/${product.slug}/`,
          className: `product-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "product-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: product.image, alt: product.name, loading: "lazy", width: 1254, height: 1254 }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "product-tag", children: product.tag })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "product-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "product-name", children: product.name }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "product-desc", children: product.desc }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "product-link", children: [
                "Explore ",
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "product-link-arrow", children: "\u2192" })
              ] })
            ] })
          ]
        },
        product.name
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section popular-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", children: "Most Requested" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Our Most Popular Packaging Solutions" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "section-subtitle", children: "Explore the packaging categories most requested by brands looking for presentation, protection, and stronger brand recognition." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "popular-grid", children: popularSolutions.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        import_react_router_dom6.Link,
        {
          to: `/products/?category=${encodeURIComponent(item.category)}`,
          className: `popular-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "popular-card-image", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: item.image, alt: item.name, loading: "lazy", width: 1254, height: 1254 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "popular-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "popular-name", children: item.name }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "popular-desc", children: item.desc }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "popular-link", children: [
                "Learn More ",
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "product-link-arrow", children: "\u2192" })
              ] })
            ] })
          ]
        },
        item.name
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "popular-cta reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "popular-cta-text", children: "Trusted by over 200 companies worldwide for our exceptional custom packaging services." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "popular-cta-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/contact/", className: "btn-primary", children: "Request a Quote" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/products/", className: "btn-outline", children: "View Catalogue" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section advantages-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", children: "Why ELAPACK" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Your Brand Strategy Partner" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "section-subtitle", children: "Flexible sourcing, technical review, export coordination, and responsive support from concept to delivery." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "advantages-grid", children: whyCards.map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "article",
        {
          className: `advantage-card reveal reveal-delay-${i + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "advantage-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: card.image, alt: card.title, loading: "lazy", width: 1536, height: 1024 }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "advantage-arrow", "aria-hidden": "true", children: "\u2197" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "advantage-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "advantage-title", children: card.title }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "advantage-desc", children: card.desc })
            ] })
          ]
        },
        card.title
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section custom-options-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "custom-options-banner reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", children: "Tailored to You" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "1rem" }, children: "Custom Packaging Options That Match Your Brand" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "custom-options-intro", children: "Choose the structure, insert, material, logo finish, color, and sustainability direction that fit your product and positioning. Whether you need a simple low-MOQ solution or a fully bespoke box, we help turn your idea into packaging that feels consistent with your brand." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/solutions/", className: "btn-primary", children: "Explore Custom Options" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "custom-options-hero-image reveal reveal-delay-2", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "img",
        {
          src: "/custom-options.webp",
          alt: "Custom packaging options showcase",
          loading: "lazy",
          width: 1408,
          height: 768
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section brands-logos-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", children: "Our Partners" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Trusted by Brands Worldwide" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "brands-logos-row reveal reveal-delay-2", children: brandLogos.map((brand) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "brand-logo-item", children: brand.name }, brand.name)) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section case-studies-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", children: "Case Studies" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Brands We've Elevated" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "section-subtitle", children: "From low-MOQ packaging upgrades to fully customized luxury box development, we help brands solve packaging challenges with practical, scalable solutions." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "case-carousel reveal reveal-delay-2", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "div",
        {
          className: "case-carousel-track",
          style: { transform: `translateX(-${activeSlide * 100}%)` },
          children: caseStudies.map((study) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "case-carousel-slide", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "case-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "case-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: study.image, alt: study.client, loading: "lazy", width: 1254, height: 1254 }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "case-category", children: study.category })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "case-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "case-client", children: [
                "Client: ",
                study.client
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "case-solution", children: study.solution }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "case-divider" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: "case-points", children: study.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { className: "case-point", children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "case-point-dot" }),
                point
              ] }, point)) })
            ] })
          ] }) }, study.client))
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "case-carousel-controls reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            className: "carousel-btn carousel-prev",
            onClick: prevSlide,
            "aria-label": "Previous case study",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "\u2039" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "carousel-dots", children: caseStudies.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            className: `carousel-dot ${i === activeSlide ? "is-active" : ""}`,
            onClick: () => setActiveSlide(i),
            "aria-label": `Go to case study ${i + 1}`
          },
          i
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            className: "carousel-btn carousel-next",
            onClick: nextSlide,
            "aria-label": "Next case study",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "\u203A" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section philosophy-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "philosophy-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "philosophy-image reveal", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "img",
        {
          src: "/about-craft.webp",
          alt: "Artisan crafting premium packaging",
          loading: "lazy",
          width: 1408,
          height: 768
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "philosophy-content reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "eyebrow", style: { fontSize: "30px" }, children: "Our Philosophy" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "section-title", style: { marginTop: "1rem", fontSize: "26px" }, children: "Simplicity. Sophistication. Luxury." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "philosophy-text", children: "We believe truly premium packaging does not rely on excess decoration. It communicates value through detail, touch, structure, and brand consistency." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "philosophy-text", children: "Our design language is restrained yet refined \u2014 pursuing the balance between clean lines, elegant proportions, delicate materials, and impeccable craftsmanship. Every element serves the brand it carries." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "philosophy-values", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "value-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "value-dot" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Minimalist Aesthetic" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "value-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "value-dot" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Tactile Quality" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "value-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "value-dot" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Brand Consistency" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "value-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "value-dot" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Sustainable Materials" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "section cta-section", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "cta-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h2", { className: "section-title-lg", style: { color: "#fff" }, children: [
        "Let's craft something",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
        "extraordinary together."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "cta-text", children: "Tell us about your brand. We'll bring the craft, materials, and vision to make it unforgettable." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/contact/", className: "btn-primary", children: "Start Your Project" })
    ] }) }) })
  ] });
}

// src/pages/Products.tsx
var import_react6 = require("react");
var import_react_router_dom7 = require("react-router-dom");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Products() {
  const [searchParams, setSearchParams] = (0, import_react_router_dom7.useSearchParams)();
  const categoryParam = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = (0, import_react6.useState)(categoryParam);
  (0, import_react6.useEffect)(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "eyebrow reveal", children: "Our Products" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "A Complete Packaging",
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("br", {}),
        "Ecosystem"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: "From single pieces to full brand systems \u2014 every product is engineered for luxury, designed for consistency, and produced for scale." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "section", style: { paddingBottom: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "values-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_router_dom7.Link, { to: "/pouches-bags/", className: "value-card reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "value-title", children: "Custom Fabric Pouches & Bags" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "value-desc", children: "Velvet, suede, cotton, muslin, satin, linen \u2014 your size, closure and branding. MOQ from 200 pieces." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_router_dom7.Link, { to: "/boxes/", className: "value-card reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "value-title", children: "Custom Boxes" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "value-desc", children: "Rigid, folding and magnetic closure boxes with inserts and Pantone-matched finishes. MOQ from 200 pieces." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_router_dom7.Link, { to: "/sets/", className: "value-card reveal reveal-delay-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "value-title", children: "Packaging Sets" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "value-desc", children: "Pouch, box, insert and card designed together as one colour-matched set." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "filter-bar-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "filter-bar reveal", children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        className: `filter-chip ${activeCategory === cat ? "is-active" : ""}`,
        onClick: () => handleCategoryChange(cat),
        children: cat
      },
      cat
    )) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "section products-section", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "catalog-grid", children: filtered.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        import_react_router_dom7.Link,
        {
          to: `/products/${product.slug}/`,
          className: `catalog-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "catalog-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "img",
                {
                  src: product.image,
                  alt: product.name,
                  loading: "lazy",
                  width: 1254,
                  height: 1254
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "catalog-category", children: product.category })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "catalog-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "catalog-name", children: product.name }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "catalog-desc", children: product.shortDesc }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "catalog-meta", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "meta-item", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "meta-label", children: "Materials" }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "meta-value", children: product.materials })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "meta-item", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "meta-label", children: "MOQ" }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "meta-value", children: product.moq })
                ] })
              ] })
            ] })
          ]
        },
        product.slug
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "products-cta reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: "Don't see exactly what you need? Every product is fully customizable \u2014 from dimensions and materials to finishes and structural design." }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_router_dom7.Link, { to: "/contact/", className: "btn-outline", children: "Request Custom Quote" })
      ] })
    ] }) })
  ] });
}

// src/pages/ProductDetail.tsx
var import_react7 = require("react");
var import_react_router_dom8 = require("react-router-dom");

// src/data/articles.ts
var articles = [
  {
    "slug": "custom-rigid-boxes-guide",
    "datePublished": "2026-10-10",
    "title": "Custom Rigid Boxes: Board Grades, Structures and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/custom-rigid-boxes-guide.webp",
    "imageAlt": "Guide cover card: custom rigid boxes \u2014 greyboard grades, wrap and lining layers, box structures and the search demand behind the cluster",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The rigid box from the board outward: greyboard grades and cost shares, the three-layer build, twelve structures, mailer formats and US search demand for the cluster.",
    "metaDescription": "Custom rigid boxes explained: greyboard grades 1.5\u20133.0 mm with cost shares, wrap and lining layers, box structures, rigid mailers and enquiry checklists.",
    "body": "*Construction descriptions are industry references as published by packaging suppliers (sources named inline); greyboard grades, cost shares and the twelve-structure list are ELAPACK's published production references. Order terms \u2014 MOQ 200 pieces, 15\u201320 day production, custom sample USD 25 plus USD 20 shipping, cutting-die tooling USD 50\u2013100 \u2014 are ELAPACK's confirmed trade terms.*\n\n> **Quick answer:** a rigid box is a three-layer build \u2014 wrap paper, greyboard core, lining paper \u2014 and the greyboard grade is the decision that carries everything else: 1.5 mm for small light boxes, 2.0 mm as the standard premium grade, 2.5\u20133.0 mm for large and heavy formats. Fix the grade with the structure, not after it.\n\n## Key facts at a glance\n\n| Item | Figure | Source |\n|---|---|---|\n| Minimum order | 200 pieces per design | ELAPACK confirmed terms |\n| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |\n| Custom sample | USD 25 plus USD 20 shipping, 3\u20135 days | ELAPACK confirmed terms |\n| Cutting-die tooling | USD 50\u2013100 where a new die is required | ELAPACK confirmed terms |\n| Greyboard grades | 1.5 / 2.0 / 2.5 / 3.0 mm tiers | ELAPACK published references |\n| Board share of box cost | \u2248 8\u201314% at 1.5 mm rising to 16\u201325% at 3.0 mm | ELAPACK published figures, reference basis |\n\n## How buyers name rigid boxes\n\n![Rigid box cross-section: greyboard core, wrapped cover, glued cavity and magnet positions](/charts/rigid-box-construction.svg)\n\nEnquiries that use the trade names \u2014 *rigid box manufacturers*, *rigid box packaging supplier*, *rigid mailers* \u2014 get quoted faster, because the words already specify the construction: a greyboard base, a wrapped cover and a glued cavity, built in one piece rather than folded from sheet. This guide uses those names throughout; the cross-section above shows the build they refer to. The structure decision this guide covers is the layer beneath the finishes compared in the [surface finishes guide](https://elapack.com/news/surface-finishes-compared-guide/) \u2014 finishes sit on this build.\n\n**Rigid boxes are ordered by construction, not by occasion \u2014 name the build in the enquiry, not the gift.**\n\n## The three-layer build\n\nEvery rigid box is a sandwich. The greyboard core \u2014 also called chipboard, a dense layered material pressed from recycled fibres \u2014 gives the box its non-bending body (construction as published on zenpack.us and xactz.com); the wrap paper carries print, colour and finish; the lining paper closes the inside. Supplier references put typical box-body board at 1.2\u20133.0 mm (as published on thebestpriceboxes.com), with MDF board used by some factories as a premium alternative core (as published on blog.opack.com) \u2014 ELAPACK's range is built on greyboard tiers, published as follows.\n\n| Grade | Typical application | Share of box cost (reference) |\n|---|---|---|\n| 1.5 mm | Small boxes, light items \u2014 jewellery cards, sample kits | \u2248 8\u201314% |\n| 2.0 mm | Standard premium boxes \u2014 skincare, fragrance sets | \u2248 10\u201318% |\n| 2.5 mm | Medium-to-large gift boxes, press kits | \u2248 13\u201322% |\n| 3.0 mm | Large boxes, heavy contents, maximum presence | \u2248 16\u201325% |\n\n*Cost shares are ELAPACK published figures, for reference only, based on similar box size, structure and standard finishing.*\n\n**The grade sets depth, closure weight and cost in one line \u2014 choose it with the structure, never after the artwork.**\n\n## Twelve structures, three everyday heroes\n\nThe published structure list runs to twelve: magnetic flip-top, lid-and-base, drawer, two-door, handle, folding, cylinder, window, display, advent, mailer and card box. In luxury gifting three carry most programmes: the [magnetic flip-top](https://elapack.com/products/magnetic-closure-gift-box/) for one-hand opening, the [ribbon-tie box](https://elapack.com/products/luxury-gift-box-ribbon/) for occasion presentation, and lid-and-base for sets \u2014 the magnetic structure has its own deep-dive in the [magnetic gift boxes guide](https://elapack.com/news/magnetic-gift-boxes-guide/). Category formats follow their products: the [ring box](https://elapack.com/products/custom-ring-boxes/) and the [eyelash box](https://elapack.com/products/custom-eyelash-packaging-boxes/) are grade-1.5\u20132.0 formats, while display and advent builds lean on 2.5 mm and above.\n\n## Rigid mailers\n\nA rigid mailer is the same build in a slim one-piece format \u2014 a presentation-grade unboxing that survives the parcel network, unlike a folding carton that only looks the part. For e-commerce sets, pair the mailer with the insert decision covered in the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/).\n\n**Mailer demand is rigid demand in shipping clothes \u2014 answer it with the structure, not a separate format chase.**\n\n## Wrap, lining and what drives cost\n\nThree cost levers sit above the board: the wrap (art paper, specialty paper, textile), the finish set on it (lamination, foil, emboss \u2014 compared in the finishes guide), and the lining. The published cost shares above cover the board layer only; wrap and finish stack on top by grade. Assembly matters as much as material: the six-station QC chain that gates a rigid run includes assembly fit \u2014 a box that measures right but closes wrong fails at the same station. Structures and stock formats across the range sit on the [boxes collection](https://elapack.com/products/?category=Boxes) and the [custom gift boxes](https://elapack.com/custom-gift-boxes/) page.\n\n## What to put in your enquiry\n\nA rigid enquiry a factory can quote first time carries: the structure (from the twelve, or a drawing); the greyboard grade \u2014 or the product and weight and let the factory propose; wrap and finish choices; internal layout, cross-referenced to the insert specification; quantity against the 200-piece minimum; vector artwork; and the sample route. Where a new cutting die is required it is quoted at USD 50\u2013100 \u2014 the dieline itself is drawn free to confirmed product dimensions, covered in the [die cutting and dielines guide](https://elapack.com/news/die-cutting-and-dielines-guide/).\n\n## The bottom line\n\nPick the grade for the weight, the structure for the opening, and let wrap and finish carry the brand. [Contact ELAPACK](https://elapack.com/contact/) with the product, structure and quantity, and the quotation will state board grade, wrap, tooling and terms that apply."
  },
  {
    "slug": "packaging-inserts-guide",
    "datePublished": "2026-10-10",
    "title": "Packaging Inserts: Materials, Trade-Offs and Specification Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/packaging-inserts-guide.webp",
    "imageAlt": "Guide cover card: packaging inserts \u2014 paper, foam, pulp and layered systems compared on protection, cost and presentation",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Insert materials compared \u2014 paper systems, EVA/PET/PE foams, moulded pulp and layered board \u2014 with the weight/fragility rule, cost trade-offs and search demand for the cluster.",
    "metaDescription": "Custom packaging inserts compared: paper systems, EVA/PET/PE foam, moulded pulp and layered board \u2014 protection, cost, presentation and the spec fields suppliers quote.",
    "body": `*Material classifications and trade-offs are industry references as published by packaging suppliers (sources named inline); the three insert systems and the layered-board cost figure are ELAPACK's published production references. Order terms \u2014 MOQ 200 pieces, 15\u201320 day production \u2014 are ELAPACK's confirmed trade terms.*

> **Quick answer:** inserts trade protection against presentation and cost. Paper systems are the recyclable default for light pieces, EVA/PET/PE foams hold heavy or fragile items in sculpted cavities, and layered A-grade board saves up to 40% of space and cost where a sculpted look is wanted without foam. Specify by product weight, fragility and how the piece is lifted out.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Minimum order | 200 pieces per design | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |
| Insert systems (ELAPACK) | Recyclable paper line; EVA/PET/PE foam line; layered 2 mm A-grade board | ELAPACK published references |
| Layered-board saving | Up to 40% of space and cost vs sculpted alternatives | ELAPACK published figure |

## Fitments and insert cards: one enquiry, two line items

![Insert systems compared: die-cut EVA foam, recyclable paper cavities, layered board and printed insert cards \u2014 positioning and cost](/charts/insert-systems-compared.svg)

Buyers arrive with two different needs that share one keyword family: structural fitments that hold the product, and printed insert cards (care cards, message cards) that ride along. Specifying them together keeps the unboxing one coherent object \u2014 the fitment carries the product, the card carries the words, and both are cut to the same cavity drawing. The box they sit in has its own guide in [custom rigid boxes](https://elapack.com/news/custom-rigid-boxes-guide/).

**Spec the fitment and the card against one cavity drawing \u2014 they share the box interior whether ordered together or not.**

## The material systems side by side

Industry references converge on five fitment families: paperboard, corrugated or fluted, moulded pulp, thermoformed, and foam (classification as published on wynalda.com), with foam subdivided into EVA, PU, EPE and PE grades (as published on dauxin.com and customboxmakers.com). ELAPACK's published range organises the same landscape into three systems.

| System | What it is | Best at | Watch-out |
|---|---|---|---|
| Recyclable paper line | Die-cut paperboard cavities and platforms | Light pieces, sets, recyclable programmes | Needs design for heavy items |
| EVA / PET / PE foam line | Sculpted cavities, custom-cut to the piece | Heavy, fragile or high-value pieces | Higher cost; sculpt per product |
| Layered 2 mm A-grade board | Stacked board build-up in place of sculpted foam | Sculpted look at up to 40% space/cost saving | Confirm fit on sample, as with any cavity |
| Moulded pulp (as published) | Pressed fibre forms | Jar-shaped goods at volume | Tooling needs quantity |
| Thermoformed (as published) | Formed plastic trays | Clarity, sealed hygiene formats | Presentation mismatch in luxury sets |

*Systems one to three are ELAPACK published ranges; pulp and thermoformed rows are published industry options included for completeness.*

**Three systems cover luxury work \u2014 pulp and thermoform belong to other industries' toolkits.**

## The rule that decides: weight, fragility, lift

A published comparison gives the cleanest dividing line in the category: cardboard fitments run lower-cost and suit products under roughly two pounds with basic separation needs; foam runs higher-cost and protects fragile, heavy or high-value items (as published on printonpapers.com). Add the third axis luxury packaging adds: how the piece is lifted out. A cavity that protects in transit but fights the customer at the counter has the wrong draft angle, not the wrong material \u2014 which is why the sample review loads the actual product and lifts it, in the [sample process](https://elapack.com/news/custom-packaging-samples-guide/). Format examples across the range: a [watch box](https://elapack.com/products/custom-watch-boxes/) with a sculpted pillow, an [eyelash box](https://elapack.com/products/custom-eyelash-packaging-boxes/) with a die-cut platform, a [magnetic gift box](https://elapack.com/products/magnetic-closure-gift-box/) with a layered-board fitment.

**Choose by weight, fragility and lift \u2014 in that order \u2014 and prove the lift on the loaded sample.**

## Insert cards: the quiet second intent

"Packaging insert cards" names its own line item: care cards, warranty cards, gift messages. They are specified like any printed component \u2014 board weight, size against the fitment's slot, artwork, Pantones \u2014 and they fail in one predictable way: ordered at a size that does not slot into the final fitment. Specify the card with the fitment, not after it. For colour approvals across card and fitment, the four-step control chain in the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/) applies to both.

## Worked examples in the range

The candle programme in the [candle boxes guide](https://elapack.com/news/custom-candle-boxes-guide/) maps all five published fitment types to jar, pillar and votive formats. Complete presentations \u2014 box, fitment, pouch, card \u2014 sit in the [sets collection](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging), and the softest layer of the stack, wrapping tissue, has its own guide in [custom tissue paper](https://elapack.com/news/custom-tissue-paper-guide/).

## What to put in your enquiry

An insert enquiry a factory can quote first time carries: the product's dimensions and weight; fragility notes (glass, plating, scratch-sensitive faces); the box it goes into; the lift requirement \u2014 how the piece is removed and by whom; the material system or a request for proposals across two; card slot requirements if insert cards ride along; and quantity against the 200-piece minimum. Sculpted foam cavities are cut to the confirmed product drawing, so product drawings come before insert quotations.

## The bottom line

Paper for light and recyclable, foam for heavy and fragile, layered board for the sculpted look at lower cost \u2014 and specify the card with the cavity. [Contact ELAPACK](https://elapack.com/contact/) with the product drawing, weight and box format, and the quotation will state the insert system, cavity layout and terms that apply.`
  },
  {
    "slug": "custom-tissue-paper-guide",
    "datePublished": "2026-10-10",
    "title": "Custom Tissue Paper: Weights, Printing and Specification Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-tissue-paper-guide.webp",
    "imageAlt": "Guide cover card: custom tissue paper \u2014 gsm weight bands from 12 to 33, one-colour versus full-colour printing, and the specification fields to request",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The largest untapped keyword cluster in the set \u2014 \u22487,030 US searches a month at KD 14\u201323 \u2014 mapped to the decisions that matter: gsm band, print capability, sheet sizing and how tissue rides with the box.",
    "metaDescription": "Custom tissue paper explained: gsm weight bands from 12 to 33, one-colour versus full-colour printing by weight, sheet sizing logic and enquiry checklists for branded wrapping.",
    "body": `*Weight bands, printing capability by weight and use-case mapping are as published by specialist tissue suppliers (tissuemotif.com, checked October 2026). ELAPACK supplies printed tissue as a component of its gift-box programmes \u2014 specifications are confirmed per project; the trade terms quoted are its confirmed order terms for boxes (MOQ 200 pieces, 15\u201320 day production).*

> **Quick answer:** the gsm band decides everything \u2014 17 gsm is the classic branded wrap for one-colour logos at everyday cost, 28 gsm is the premium band that carries full-colour artwork, and 12\u201314 gsm wraps delicate jewellery while 30\u201333 gsm lines rigid boxes. Size the sheet to the box interior, and specify tissue with the box, not as an afterthought.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Everyday weight | 17 gsm \u2014 one-colour printing, branded wrapping at value cost | As published, tissuemotif.com |
| Premium weight | 28 gsm \u2014 one-colour or full-colour printing | As published, tissuemotif.com |
| Band edges | 12\u201314 gsm delicate wrap; 30\u201333 gsm heavy lining for rigid boxes | As published, tissuemotif.com |
| Box programme terms | MOQ 200 pieces, 15\u201320 day production | ELAPACK confirmed terms |

## What "custom tissue paper" covers

![Tissue weight bands mapped to print capability and use](/charts/tissue-weight-uses.svg)

Custom tissue in practice means one of three jobs: a printed wrap that carries the logo, a plain void-fill that protects the product, or a folded liner that finishes the unboxing. Weight decides which job a sheet can do \u2014 light sheets drape and print finely, heavier sheets carry structure \u2014 so the enquiry starts with the weight band, not the artwork. In ELAPACK programmes tissue is specified with the [rigid box](https://elapack.com/news/custom-rigid-boxes-guide/) it lines and the [insert](https://elapack.com/news/packaging-inserts-guide/) it softens.

**Name the weight band first; the artwork can only be as fine as the sheet that carries it.**

## The gsm ladder, rung by rung

Weight \u2014 grams per square metre \u2014 is the specification axis for tissue, and the published ladder maps cleanly to use: lower gsm is lighter, softer, more translucent; higher gsm feels fuller, firmer, gives greater coverage (as published on tissuemotif.com). The bands that matter to a packaging buyer:

| Band | Character | Published use |
|---|---|---|
| 12\u201314 gsm | Very lightweight, delicate | Jewellery, small gifts, decorative wrapping |
| 17 gsm | Classic lightweight, best value | Apparel, retail, accessories, e-commerce; one-colour print |
| 20\u201322 gsm | Medium-light | Beauty, boutique, gifts |
| 24\u201325 gsm | Medium weight | Gift boxes, cosmetics, retail |
| 28 gsm | Premium, full-colour capable | Premium gifts, fashion, beauty, branding |
| 30\u201333 gsm | Heavy tissue | Rigid-box lining, luxury, specialty presentation |

*Band definitions and use mapping as published by tissuemotif.com; ELAPACK quotes weights per project on the confirmed specification.*

**Pick the rung before the artwork \u2014 the weight decides what printing is even possible.**

## Printing: capability splits at 17 and 28

The capability line is published and sharp: 17 gsm supports one-colour printing \u2014 simple logos, repeating patterns, clean branded designs; 28 gsm supports one-colour or full-colour, at a higher cost for full colour (as published on tissuemotif.com). Between them sits the practical reality of branded wrapping: most logo tissue is one-colour on 17 gsm, and most brands that upgrade to 28 gsm do it for the paper's feel as much as the print range. Artwork follows print-shop norms across the industry: vector logos, confirmed before production, with a final proof issued before the run (workflow as published by ecoenclose.com and inkablelabel.com).

**One colour on 17 gsm is the workhorse; 28 gsm full-colour is the statement \u2014 decide which job the tissue does.**

## Sizing and how tissue rides with the box

Sheet sizes vary by print shop \u2014 one stock range offers four sizes at multiple densities (as published on overnightprints.com) \u2014 so the buyer's rule is not a stock chart but a fit rule: size the sheet to the box interior and the fold style, and confirm the sheet list on the quotation. In ELAPACK programmes tissue is specified as a component: it wraps the product inside the fitment of a [magnetic gift box](https://elapack.com/products/magnetic-closure-gift-box/) or [ring box](https://elapack.com/products/custom-ring-boxes/), fills the dead space of an [eyelash box](https://elapack.com/products/custom-eyelash-packaging-boxes/), and finishes complete presentations in the [sets collection](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging). Specified this way, the unboxing reads as one object: box, fitment, tissue, card.

## What to put in your enquiry

A tissue enquiry a factory can quote first time carries: the gsm band (or the use case and a request for proposals at two weights); the print scope \u2014 one-colour or full-colour, and at which weight that is possible; the sheet size needed against the box interior and fold style; the logo artwork in vector with the print colour reference; the quantity against the box programme's 200-piece minimum; and the need-by date so tissue and box land together. Tissue-specific unit pricing and availability are confirmed per project on the written quotation.

## The bottom line

Weight band, print scope, sheet fit \u2014 three decisions, in that order, and the tissue stops being packaging filler and starts being the brand layer it already is on the shelf. [Contact ELAPACK](https://elapack.com/contact/) with the box programme and the tissue scope, and the quotation will state the weight, print and sheet specification that ride with it.`
  },
  {
    "slug": "custom-jewelry-packaging-guide",
    "datePublished": "2026-10-10",
    "title": "Custom Jewelry Packaging: The Buyer's Overview with Search Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-jewelry-packaging-guide.webp",
    "imageAlt": "Guide cover card: custom jewellery packaging overview \u2014 the component stack from box to pouch to card, ordering sequence and search demand for the cluster",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "One overview for the whole jewellery packaging programme: the component stack in buying order \u2014 box, pouch, card, set, display \u2014 each linked to its deep-dive guide, with the cluster's search data.",
    "metaDescription": "Custom jewelry packaging overview: search demand for the cluster, the component stack in buying order \u2014 box, pouch, insert, card, set, display \u2014 and how to sequence a jewellery packaging programme.",
    "body": `*Component descriptions summarise ELAPACK's published product ranges and its confirmed order terms (MOQ 200 pieces, 15\u201320 day production, custom sample USD 25 plus USD 20 shipping). Each component named here has its own deep-dive guide, linked where it appears.*

> **Quick answer:** buy the stack in this order \u2014 box structure, insert, pouch, card, display \u2014 because each choice constrains the next. The box takes the longest and carries the tooling; the pouch and card ride its dimensions; the display mirrors the box's layout. One supplier quoting the stack as a set beats five quotes for five parts.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Minimum order | 200 pieces per design, all lines | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |
| Custom sample | USD 25 plus USD 20 shipping, 3\u20135 days | ELAPACK confirmed terms |

## What "jewelry packaging" covers

![The jewelry packaging system: box, pouch, tray and card as one programme](/charts/jewelry-packaging-system.svg)

"Jewelry packaging" spans four component families \u2014 boxes, pouches, trays and cards \u2014 and buyers usually need a coordinated set rather than one piece: the box that sells, the pouch that travels, the tray that displays, the card that brands. Each component has its own guide below; this page is the map that keeps them to one specification language. The product catalogue side lives on the [jewellery packaging page](https://elapack.com/custom-jewelry-packaging/); this guide is the decision layer above it.

**Order the components as one programme \u2014 one specification language across box, pouch, tray and card \u2014 and they arrive as one unboxing.**

Buyers arrive at this page from three starting points, and the map serves all three differently. The brand launching a first line usually arrives from the box side, having already chosen a box style, and needs to see what that choice has already decided for the pouch and card. The buyer fixing a coordination failure arrives from the other end \u2014 a set that arrived mismatched \u2014 and needs to see which layer was specified late or not at all. The scaling buyer, adding formats to an existing line, needs to know which earlier decisions reopen when a new format enters the programme. In all three cases the same map applies; only the entry point moves.

## The stack, in buying order

### 1. The box

Structure, board grade and finish set everything downstream \u2014 dimensions, tooling, unboxing. The full decision path is the [custom jewellery boxes guide](https://elapack.com/news/how-to-choose-custom-jewelry-boxes/); the construction layer beneath (greyboard, three-ply build, twelve structures) is the [rigid boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/). Ring programmes narrow further into the [ring box guide](https://elapack.com/news/custom-ring-boxes-guide/) with sizing and insert data.

The box goes first for two structural reasons, not just convention. It is the only layer that carries tooling \u2014 change the box after the programme is underway and the die, the cavity and the insert all reopen \u2014 and it is the layer whose dimensions every other component inherits: the insert is cut to the cavity, the card is sized to the insert's slot, and the pouch programme's branded moments are planned around what the box already provides. A programme that buys the pouch first, because pouches feel like the easy starting order, locks colours and logo methods into soft goods before the box's Pantone references exist, and then pays twice to reconcile them.

### 2. The insert

What holds the piece: paper systems, EVA/PET/PE foams, or layered board at up to 40% space-and-cost saving \u2014 the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/) compares them on weight, fragility and lift. The insert is specified with the box, not after it.

Specified with, because the insert is where the jewellery programme's physics lives. The piece's weight and fragility choose the material system; the cavity chooses the cavity's own dimensions; and the reveal the brand wants \u2014 lifted on a tray, nested in a die-cut, resting on a cushioned pad \u2014 is a design decision the insert executes, not an afterthought the factory improvises. When the insert is left to the factory's default, the programme gets a technically adequate fit and a generic reveal, which is the quiet difference between packaging that protects and packaging that sells.

### 3. The pouch

The soft layer that travels with the piece: velvet, satin, muslin, cotton, microfiber \u2014 compared in the [jewellery pouch guide](https://elapack.com/news/how-to-choose-a-custom-jewelry-pouch/) and the [material comparison](https://elapack.com/news/velvet-satin-muslin-pouches-compared/). The logo method on it has its own guide in [logo on custom pouches](https://elapack.com/news/custom-logo-pouches-guide/).

The pouch is the layer the customer keeps, which changes its specification logic. The box is opened once and usually discarded or shelved; the pouch travels with the piece \u2014 to the gift recipient, into the travel case, back out for years. Durability in the hand, how the drawstring behaves after a hundred pulls, how the logo method survives being carried: these matter for the pouch in a way no other layer experiences. The pouch is also the cheapest place to signal tier, because a fabric upgrade on a small soft good moves the perceived value of the whole set without touching the tooling budget.

### 4. The card

Care cards, message cards, gift cards \u2014 specified with the insert's slot, printed to the same colour discipline as the box. The colour review process that keeps box, pouch and card reading as one set is the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/).

Cards fail coordination more often than any other layer, for a schedule reason: they are the last layer to be specified, they are usually printed by whoever is available at the end of the programme, and by then the box's approved colour standard has drifted into everyone's memory of it. The discipline is mechanical \u2014 the card enters the drawing set with the insert's slot dimensions and the box's Pantone references attached \u2014 and the payoff is the set that photographs as one object: box, insert, pouch and card reading as a single programme rather than four purchases in similar colours.

### 5. The set, and the display

Complete presentations \u2014 box, fitment, pouch, card quoted as one object \u2014 sit in the [sets collection](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging); the counter-and-drawer side is the [display and storage guide](https://elapack.com/news/jewelry-display-trays-guide/). Display mirrors the box layout: what sits in the tray should sit in the box the same way.

The mirroring rule is the display layer's whole contribution to the programme. A retail counter tray that presents a ring at a different angle, under different lighting, than the box's insert does gives the customer two different products between the counter and the unboxing at home. Specified together, the tray and the box share cavity logic and orientation, and the promise made at the counter is the promise kept in the box \u2014 which is also why the display belongs to the programme's specification rather than to the shopfitting budget where it traditionally lands.

**Each layer constrains the next \u2014 sequence the programme and the quotes reconcile; buy out of order and every later choice reopens an earlier one.**

## What a one-supplier brief looks like

A stack brief a factory can quote as a set carries: the piece list with dimensions and weights; the box structure and grade per format; insert system per format; pouch material and logo method; card scope; the quantities per line against the 200-piece minimum; artwork in vector with Pantone references; and the delivery window. The quotation fields that make offers comparable across suppliers are catalogued in the [specification sheet guide](https://elapack.com/news/how-to-read-a-packaging-specification-sheet/). For small brands starting the stack, the MOQ and sampling economics \u2014 what a first 200-piece order actually buys \u2014 are worked in the [MOQ, sample and lead-time guide](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/).

The one-supplier brief earns its name in the reconciliation column, not the price column. Five suppliers quoting five parts each quote against their own assumptions about the four parts they cannot see \u2014 and each assumption is a future fit, colour or schedule fault. One supplier quoting the set quotes against a single drawing, and the faults that would have appeared at assembly appear instead as questions at quotation, where they cost a reply rather than a reprint. That is also why the brief's order of information matters: piece list before structure, structure before insert, insert before pouch and card \u2014 the factory reads it in buying order and can flag the first contradiction in the sequence rather than the last.

## The bottom line

Buy box \u2192 insert \u2192 pouch \u2192 card \u2192 display, quote the stack as one object, and approve colour across every layer at once. Start on the [jewellery packaging catalogue](https://elapack.com/custom-jewelry-packaging/), then [contact ELAPACK](https://elapack.com/contact/) with the piece list and quantities \u2014 the quotation will cover the stack as a programme, not as parts.
`
  },
  {
    "slug": "magnetic-gift-boxes-guide",
    "datePublished": "2026-10-10",
    "title": "Magnetic Gift Boxes: Construction, Magnet Systems and Buying Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/magnetic-gift-boxes-guide.webp",
    "imageAlt": "Guide cover card: magnetic gift boxes \u2014 jacket and tray construction, magnet and iron-plate systems, rigid versus foldable formats and buying data",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "For buyers who have chosen magnetic closure: the construction anatomy \u2014 jacket, tray, magnet-and-plate sets \u2014 the rigid-versus-foldable decision, board and strength matching, and the cluster's search data.",
    "metaDescription": "Magnetic gift box construction explained: jacket and tray anatomy, magnet-and-iron-plate systems, rigid vs foldable formats, strength and board matching, plus US search demand.",
    "body": "*Construction anatomy and assembly references are as published by packaging manufacturers (sources named inline, checked October 2026). Order terms \u2014 MOQ 200 pieces, 15\u201320 day production, custom sample USD 25 plus USD 20 shipping \u2014 are ELAPACK's confirmed trade terms. This guide is the structure deep-dive; if you are still choosing between closure types, start with the [magnetic versus ribbon-tie comparison](https://elapack.com/news/magnetic-closure-vs-ribbon-tie-gift-boxes/).*\n\n> **Quick answer:** a magnetic box is a jacket and a tray held shut by two to three magnet-and-iron-plate sets buried in the wrapped board. The two decisions that matter: rigid (ships assembled, always premium) versus foldable (ships flat, assembles at destination), and magnet strength matched to box size and board weight \u2014 verified as closing feel on the loaded sample, not on paper.\n\n## Key facts at a glance\n\n| Item | Figure | Source |\n|---|---|---|\n| Minimum order | 200 pieces per design | ELAPACK confirmed terms |\n| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |\n| Custom sample | USD 25 plus USD 20 shipping, 3\u20135 days | ELAPACK confirmed terms |\n| Anatomy | Jacket + tray; 2\u20133 magnet-and-plate sets; 4\u20136 structural holes per box | As published, chiefcolor.com |\n\n## What buyers call a magnetic box\n\n![Magnetic closure structures: flip-top jacket, lid-and-base and collapsible builds, with where the magnets catch](/charts/magnetic-closure-types.svg)\n\nThe trade names matter here because the magnet placement is the spec: *magnetic lid gift box* means the magnet catches in the lid rim; *collapsible gift box with magnetic closure* means the walls fold and the magnets hold the fold. Christmas gift boxes register as their own seasonal line \u2014 buyers re-order on season, and factories run them as seasonal production. The [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) is the product anchor for the line.\n\n**The magnet is a placement decision, not a feature tick \u2014 name where it catches, and the factory quotes the right build.**\n\n## Anatomy: jacket, tray, and what holds it shut\n\nA magnetic box is two working parts: the jacket \u2014 the wrapped outer shell with the closing flap \u2014 and the tray that slides or sits inside. The closure is a pairing of magnets and iron plates (thin ferrous discs) set into the structure: a typical foldable magnetic box carries two to three sets, which means four to six holes engineered into the board, and large formats more (a published example runs to fourteen holes on an oversized storage box). The magnets go in after the jacket is wrapped, and are fixed with glue dots so they cannot drop out in handling; the industry has moved from hand-placement to semi-automatic magnet-applying machines that fill up to three holes per pass (anatomy and assembly as published on blog.chiefcolor.com).\n\n| Component | Role | Buyer's specification angle |\n|---|---|---|\n| Jacket | Wrapped outer shell, carries the flap | Wrap, finish, print \u2014 the brand layer |\n| Tray | Inner carrier for product and insert | Depth, insert fit, product clearance |\n| Magnet + iron plate sets | Closure pairs, 2\u20133 per box typical | Closing feel, hold when loaded |\n| Structural holes | Housing for each magnet/plate | Count and position follow the flap design |\n\n**Every magnet set is engineered structure \u2014 flap design changes hole count, and hole count is a tooling conversation, not a decoration one.**\n\n## Rigid or foldable\n\nThe two formats split on one variable: what state the box travels in. A rigid magnetic box ships fully assembled and keeps its shape \u2014 the premium unboxing, at shipping volume. A foldable (collapsible) magnetic box ships flat and assembles at destination \u2014 the freight-efficient format for e-commerce and events, with the same closure once built (formats compared as published on richpkg.com and packagingoftheworld.com). The decision rule is logistics-driven: assembled boxes cube out containers and closets; flat boxes trade a fold-and-tuck step for a fraction of the freight. Board grade follows either path \u2014 the [rigid boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/) covers greyboard tiers and the three-layer build beneath this closure.\n\n**Let the freight and the fulfilment step decide \u2014 premium shelf presence is rigid, mail-heavy programmes earn back the fold.**\n\n## Strength, board and the closing feel\n\nMagnet strength is matched to the box, not maximised: the working rule published by manufacturers is that strength follows the cumulative weight of lid and board, with heavier boards and larger flaps taking stronger magnets, and magnet grades stepping from N35 to N52 on the neodymium scale (references as published on packshion.com and insights.made-in-china.com). Two specification consequences follow. First, strength is verified physically: the sample review closes the loaded box \u2014 with product and insert in place \u2014 and checks the flap seats without drift, the same loaded-sample discipline the finishes guide applies to colour. Second, a magnet that is too strong fights the recipient; the target is a hold, not a snap. Specific magnet grades and positions are confirmed per project on the quotation.\n\n**Specify a closing feel, not a magnet grade \u2014 and approve it loaded, with the insert in.**\n\n## Where the format travels\n\nMagnetic closure carries across the range: the flagship [magnetic gift box](https://elapack.com/products/magnetic-closure-gift-box/), [watch boxes](https://elapack.com/products/custom-watch-boxes/) and [eyelash boxes](https://elapack.com/products/custom-eyelash-packaging-boxes/) in smaller formats, and full presentations in the [sets collection](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging). The ribbon alternative \u2014 where a tied bow is the presentation rather than the closure \u2014 is the [ribbon gift box](https://elapack.com/products/luxury-gift-box-ribbon/); the two closures also combine, covered in the [comparison guide](https://elapack.com/news/magnetic-closure-vs-ribbon-tie-gift-boxes/). Q4 programmes should read the ordering-maths section of the [gift card boxes guide](https://elapack.com/news/custom-gift-card-boxes-guide/) \u2014 the holiday clock applies to this format as much as any.\n\n## What to put in your enquiry\n\nA magnetic-box enquiry a factory can quote first time carries: format \u2014 rigid or foldable; box structure and greyboard grade; the flap design (which sets the magnet count and position); the closing-feel requirement in words \u2014 soft hold, firm hold \u2014 rather than a magnet grade; wrap and finish; insert scope from the [inserts guide](https://elapack.com/news/packaging-inserts-guide/); quantity against the 200-piece minimum; and the shipping state \u2014 assembled or flat \u2014 so freight can be planned with production.\n\n## The bottom line\n\nJacket, tray, two-to-three magnet sets: choose rigid or foldable by logistics, match strength to board, and approve the closing feel on the loaded sample. [Contact ELAPACK](https://elapack.com/contact/) with the format, flap design and quantity, and the quotation will state the construction, magnet specification and terms that apply."
  },
  {
    "slug": "velvet-satin-muslin-pouches-compared",
    "datePublished": "2026-10-09",
    "title": "Velvet vs Satin vs Muslin Pouches: Which Material Fits Your Jewellery Brand?",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/velvet-satin-muslin-pouches-compared.webp",
    "imageAlt": "Guide cover card: velvet, satin and muslin jewellery pouches compared on protection, presentation, print fit and cost positioning",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The three pouch materials luxury brands actually choose between, compared on protection, presentation, print fit and cost \u2014 with US search demand and the specification fields that make quotes comparable.",
    "metaDescription": "Compare velvet, satin and muslin jewellery pouches: protection, presentation, logo fit, cost positioning and US search demand, plus the spec fields to request from suppliers.",
    "body": `*Material descriptions are industry references as published by packaging suppliers and textile encyclopaedias (sources named inline). Order terms \u2014 MOQ 200 pieces, 15\u201320 day production, custom sample at USD 25 plus USD 20 shipping \u2014 are ELAPACK's confirmed trade terms. Fibre compositions and fabric weights are supplier-specific: ELAPACK's confirmed ranges are quoted where stated, everything else is a decision framework, not a specification.*

> **Quick answer:** velvet when the pouch is part of the luxury presentation and pieces need cushioning; satin for a sleek, lightweight sheen at lower cost; muslin for a soft, matte, natural-cotton look at the accessible end. None of the three names specifies fibre content or weight \u2014 request the fabric reference and composition for each before comparing quotes.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Minimum order | 200 pieces per design, all pouch lines | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |
| Custom sample | USD 25 plus USD 20 shipping, built in 3\u20135 days | ELAPACK confirmed terms |

## Buyers compare materials, not products

![Velvet, satin and muslin compared on hand feel and drape: velvet's pile, satin's sheen weave and muslin's plain weave, with laundering behaviour and best-fit product for each.](/charts/pouch-material-handfeel.svg)

Pouch buyers rarely search a single material \u2014 they search the comparison itself: *muslin vs linen*, *cotton vs muslin*. The comparison is the right instinct, because the three materials divide on drape, hand feel and how they survive laundering, and the product inside decides which axis wins.

**Choose by the product's weight and the laundering it must survive \u2014 the material follows, not the other way round.**
## What the three names actually specify \u2014 and what they don't

A material name is a construction or finish description, not a specification. As packaging references point out, pouches sold as "velvet" may be woven from polyester, rayon, cotton or blends, and "satin" may be silk or polyester \u2014 the trade name does not guarantee the fibre (as published on packgenio.com, checked October 2026). Muslin is a plain-weave cotton cloth: the weave is the definition, the yarn and weight still vary. That is why the first line of any pouch brief is the fabric reference and composition, not the trade name.

**Treat velvet, satin and muslin as starting positions \u2014 approve the fabric reference, not the word.**

## Velvet: the presentation and protection choice

Velvet's cut pile is what reads as luxury: a deep, light-absorbing surface that cushions metal and keeps pieces from sliding. Industry guides recommend it where the pouch itself is part of the gift presentation and where hard pieces would otherwise knock against each other in transit or storage (as published on bagwalas.com and gemsondisplay.com). The same pile is its constraint \u2014 direct printing on velvet holds less detail than on flat weaves, which pushes premium programmes towards sewn labels or foil rather than screen ink (as published on drawstringpouchbag.com). ELAPACK lists a [velvet jewellery pouch](https://elapack.com/products/custom-velvet-pouches/) in its standard range.

**Choose velvet when the pouch will be kept, touched and photographed \u2014 and plan the logo method around the pile.**

## Satin: the sheen at a lower cost tier

Satin is the sleek option: a smooth, reflective face, lighter hand and a drape that suits ribbon-tied presentations. Published supplier comparisons place satin meaningfully below velvet on cost \u2014 one specialist supplier states satin runs 15\u201325% less than velvet while retaining most of the visual appeal (as published on richpkg.com) \u2014 with the trade-off that the smooth weave snags and frays more readily under repeated opening and closing (as published on drawstringpouchbag.com). For gift programmes where the pouch is opened once and presented, that durability gap rarely decides the purchase; for pouches handled daily it should. ELAPACK's range includes a [satin pouch](https://elapack.com/products/custom-satin-pouches/).

**Satin buys the shine at a tier below velvet \u2014 accept it for one-touch presentations, question it for daily handling.**

## Muslin: the natural-cotton workhorse

Muslin is plain-woven cotton: matte, soft, unstructured and the most accessible of the three on cost. It takes screen printing well (flat weave, cotton fibre), which is why branded muslin drawstring bags are a standard entry product for retail and event programmes \u2014 ELAPACK lists a [custom muslin drawstring pouch](https://elapack.com/products/custom-muslin-drawstring-pouch/) and covers weights and sizes in a [dedicated muslin guide](https://elapack.com/news/custom-muslin-bags-guide/). What muslin does not offer is structure or cushioning: it protects against dust and scratching, not against impact. Fabric weights in the trade run roughly 100\u2013145 gsm and above (as published on bagsgeek-type retail references; ELAPACK's confirmed weight options are quoted per project).

**Muslin is the right answer for breathable, print-friendly, everyday branding \u2014 not for impact protection.**

## The three-way comparison

| Decision axis | Velvet | Satin | Muslin |
|---|---|---|---|
| Surface | Cut pile, deep matte lustre | Smooth, reflective sheen | Plain weave, soft matte |
| Cushioning | Highest of the three | Light | Light, unstructured |
| Typical positioning | Kept luxury packaging | Gift presentation, one-touch | Everyday branded storage |
| Logo fit | Sewn label or foil preferred over direct print | Print and label both viable | Screen print friendly |
| Cost tier | Highest of the three (satin cited 15\u201325% below it) | Mid | Most accessible |
| Specification to request | Pile fibre and composition, lining | Weave fibre, face vs reverse | Yarn, weight (gsm), wash finish |

*Editorial comparison of published material behaviour, not a test ranking. Column entries are positioning statements \u2014 the specification rows are what make quotes comparable.*

## Compare samples, not names

Run the review the same way for all three: same jewellery piece, same handling routine, logo at actual size. Record where cords, seams and closures touch the piece, and check the loaded pouch inside the intended box and insert \u2014 a [complete packaging set](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging) is approved as an assembly, not as separate empty parts. If appearance decides, compare both finalists under your presentation lighting before signing off. The [cotton pouch](https://elapack.com/products/custom-cotton-pouches/) and [microfiber pouch](https://elapack.com/products/custom-microfiber-pouches/) pages cover the adjacent flat-weave options if neither pile nor satin fits the brief.

## What to put in your enquiry

For each material under consideration: the fabric reference and fibre composition; the weight or construction unit the supplier quotes (gsm for muslin and cotton, pile description for velvet, weave for satin); usable internal dimensions with the closure drawn \u2014 the sizing question is real \u2014 drawstring bag dimensions deserve their own line in the brief; the logo method and its artwork requirements; quantity against the 200-piece minimum; and the sample route (custom sample USD 25 plus USD 20 shipping, 3\u20135 days). Browse the full [pouches and bags collection](https://elapack.com/products/?category=Pouches%20%26%20Bags) or the [jewellery pouch line](https://elapack.com/custom-jewelry-pouches/) to anchor the styles before you brief.

## The bottom line

Velvet for kept luxury and cushioning, satin for sheen at the tier below, muslin for print-friendly natural cotton \u2014 and in every case, the fabric reference beats the trade name. [Contact ELAPACK](https://elapack.com/contact/) with the material shortlist, sizes, logo artwork and quantity, and the quotation will state the fabric, logo method and terms that apply to your [jewellery packaging](https://elapack.com/custom-jewelry-packaging/) programme.`
  },
  {
    "slug": "custom-candle-boxes-guide",
    "datePublished": "2026-10-09",
    "title": "Custom Candle Boxes: Sizes, Inserts and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/custom-candle-boxes-guide.webp",
    "imageAlt": "Guide cover card: custom candle boxes \u2014 jar measurement rules, insert types, structures and the search demand behind the cluster",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Candle box sizing from the jar outward: measurement rules, the five insert systems, structure trade-offs and US search demand for the custom candle box cluster.",
    "metaDescription": "Custom candle boxes explained: measure the jar, choose inserts (corrugated, foam, pulp, platform, divider), pick structure and board \u2014 with search demand and enquiry checklists.",
    "body": `*Candle-box sizing, insert and structure descriptions are industry references as published by packaging suppliers (sources named inline). Order terms \u2014 MOQ 200 pieces, 15\u201320 day production, custom sample at USD 25 plus USD 20 shipping, cutting-die tooling at USD 50\u2013100 where required \u2014 are ELAPACK's confirmed trade terms.*

> **Quick answer:** size the box from the measured candle, not from an ounce chart \u2014 outside diameter, height with the lid on, filled weight \u2014 then add clearance and choose the insert for the shipping route. Glass jars moving through parcel networks need an insert; the box alone is not the protection.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Minimum order | 200 pieces per design, all box lines | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |
| Custom sample | USD 25 plus USD 20 shipping, built in 3\u20135 days | ELAPACK confirmed terms |
| Cutting-die tooling | USD 50\u2013100 where a new die is required | ELAPACK confirmed terms |

## How candle buyers specify boxes

![From jar to box: measured diameter and height plus clearance set the interior, then the insert](/charts/jar-to-box-sizing.svg)

Candle-box enquiries arrive in three spec flavours: the retail box sized to the vessel, the insert that holds the jar, and the wholesale pack that ships multiples. Buyers who name all three in one brief get one dieline set; buyers who split them across suppliers get a carton that fits a box that almost fits the jar. This guide covers the one-off and retail candle box programme; if you pack a recurring monthly programme, see the [candle subscription box guide](https://elapack.com/news/candle-subscription-box-packaging/) for the repeat-order structure.

**Size the box to the jar, the insert to the box and the carton to the box \u2014 in that order, on one drawing.**

## Measure the candle before anything else

Published sizing guides converge on the same rule: measure the actual filled candle, then add clearance. The measurements that matter are the outside diameter (or width and depth), the total height with the lid on, and the filled weight \u2014 weight because it drives board grade, not just footprint (as published on briskpackaging.com, August 2026). For clearance, supplier guides recommend adding roughly 0.25\u20130.5 inches per side between vessel and box wall (as published on thecustomizeboxes.com). As a worked reference, one supplier's published interior for an 8 oz round lidded jar is 3-7/8 \xD7 3-7/8 \xD7 4-3/8 inches (98 \xD7 98 \xD7 110 mm), with 4, 8 and 12 oz jars the most common volumes (as published on personalizedcandlebox.com and customboxdepot.com).

| Jar volume | Box planning basis | Source basis |
|---|---|---|
| 4 oz | Measure jar, add 0.25\u20130.5" per side | Published clearance rule |
| 8 oz | e.g. 98 \xD7 98 \xD7 110 mm interior for a round lidded jar | As published, personalizedcandlebox.com |
| 12 oz | Measure jar, add clearance; check weight for board grade | Published rule, customboxdepot.com |
| Pillar / taper | Diameter and burn-line height; platform insert | briskpackaging.com |
| Votive / tealight sets | Unit count \xD7 cavity size; divider insert | briskpackaging.com |

**An ounce chart is a starting point \u2014 the order-relevant dimensions come off your own filled vessel.**

## Choose the insert for the shipping route

The insert is what stops a glass jar becoming a claim. Published comparisons break the options into five systems: a corrugated cavity insert, cost-effective and recyclable, holding heavy vessels well for direct-to-parcel shipping; a foam insert, highest protection for fragile or irregular vessels at a higher unit cost; moulded pulp for eco-positioned brands, which needs volume to amortise tooling; a paperboard platform for pillars and tapers, keeping wax off the box walls; and multi-cavity dividers for votive and tealight multipacks, preventing unit-to-unit contact (as published on briskpackaging.com). The same source states the principle bluntly: a candle that cannot move cannot build momentum against the box wall.

| Insert system | Best for | Cost position |
|---|---|---|
| Corrugated cavity | Heavy jars, direct parcel shipping | Cost-effective, recyclable |
| Foam | Fragile or irregular vessels | Highest protection, higher unit cost |
| Moulded pulp | Eco-positioned jar programmes | Needs volume for tooling |
| Paperboard platform | Pillars and tapers | Light, simple |
| Multi-cavity divider | Votive and tealight sets | Scales by cavity count |

**Decide the insert by what happens after the tape gun \u2014 the parcel network, not the shelf, breaks candles.**

## Structure: two-piece, rigid or folding

Three structures cover the range. A two-piece lid-and-base lets the candle lift straight out without tipping, which protects glass rims, at a higher unit cost than cartons. A rigid box \u2014 chipboard core wrapped in printed paper \u2014 is the presentation choice and does not fold flat, with higher tooling and unit cost. Folding cartons ship and store flat and run efficiently at volume, but on their own they are not enough for heavy glass through parcel networks (structures compared as published on briskpackaging.com). Window cutouts show wax colour and vessel shape, at the cost of panel strength and an extra film step \u2014 published guidance keeps windows away from load-bearing corners and stacking faces. For presentation-grade candle gift sets, the [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) and the [ribbon gift box](https://elapack.com/products/luxury-gift-box-ribbon/) are the two most-used formats; box structures across the range are on the [boxes collection](https://elapack.com/products/?category=Boxes) and [gift boxes page](https://elapack.com/custom-gift-boxes/).

## Board, finish and the brief

Board options follow the contents: SBS white paperboard as the full-colour default, kraft for muted one-to-two-colour looks, E-flute corrugated where crush resistance matters, and rigid greyboard for keepsake boxes \u2014 with greyboard tiers from 1.5 to 3.0 mm carrying rising cost and presence (ELAPACK published reference ranges; grades at 2.5 mm suit medium-to-large gift boxes). Finishes run the same set as the rest of the luxury range \u2014 lamination, foil, emboss, spot UV \u2014 compared in the [surface finishes guide](https://elapack.com/news/surface-finishes-compared-guide/). A quotable brief carries: measured vessel dimensions and weight, box structure, insert system, board and finish, artwork with Pantone references, quantity against the 200-piece minimum, and the destination shipping route so the insert choice can be checked against it.

## The bottom line

Measure the filled candle, size the box with real clearance, match the insert to the parcel route, and let structure and finish follow the brand position. [Contact ELAPACK](https://elapack.com/contact/) with the jar dimensions, order quantity and delivery route, and the quotation will state structure, insert, board grade and tooling that apply.`
  },
  {
    "slug": "jewelry-display-trays-guide",
    "datePublished": "2026-10-09",
    "title": "Jewellery Display and Storage: Trays, Inserts and Sizing Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/jewelry-display-trays-guide.webp",
    "imageAlt": "Guide cover card: jewellery display and storage \u2014 the standard tray footprint, compartment layouts, lining choices and anti-tarnish questions to ask",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The trade-standard tray footprint, compartment layouts by jewellery type, lining and anti-tarnish choices, and the sizing rule that keeps counters and drawers workable \u2014 with search demand data.",
    "metaDescription": "Jewellery display trays explained: the 370 \xD7 210 mm standard footprint, compartment layouts by piece type, velvet and anti-tarnish linings, sizing rules and enquiry checklists.",
    "body": `*Tray sizing, layout and lining descriptions are industry references as published by display and packaging suppliers (sources named inline); the market-size figure is Fact.MR data as cited by a published supplier guide. Order terms \u2014 MOQ 200 pieces, 15\u201320 day production \u2014 are ELAPACK's confirmed trade terms.*

> **Quick answer:** the trade-standard tray footprint is about 370 \xD7 210 mm with 30\u201350 mm walls \u2014 choose the smallest footprint that lets a customer lift one piece without disturbing its neighbours, and ask any supplier claiming "anti-tarnish" lining which compound it actually treats.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Standard tray footprint | \u2248 370 \xD7 210 mm (\u2248 14.5 \xD7 8.25 in) | As published, grainmarkleather.com |
| Standard wall height | 30\u201350 mm | As published, grainmarkleather.com |
| Display-stand market | USD 651.6M (2025) \u2192 685.0M (2026), 5.1% CAGR to 2036 | Fact.MR, as cited by grainmarkleather.com |
| Minimum order | 200 pieces per design | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |

## What a display programme covers

![Tray layout patterns by piece type: ring rows, bracelet channels, necklace lengthways](/charts/tray-layout-patterns.svg)

Display is a range decision, not a page decision: a counter programme mixes tray footprints, lining materials and piece-specific layouts \u2014 ring rows, bracelet channels, necklace pegs \u2014 and it is specified as a set so the counter reads as one system. The product side sits on the [display and storage range](https://elapack.com/custom-jewelry-packaging/).

**Specify the tray set against the counter plan, not piece by piece \u2014 the footprint and lining must repeat across every tray.**

## The standard footprint, and when to leave it

The trade standard is a tray footprint of roughly 370 \xD7 210 mm with 30\u201350 mm walls, sized to fit drawer units, travel cases and vendor showcase systems (as published on grainmarkleather.com). Standardising on that footprint is what makes trays stackable and interchangeable across fixtures. The published sizing rule for deviating from it: choose the smallest footprint that lets a customer or collector lift one item without disturbing its neighbours \u2014 oversized trays create dead space and awkward reaching, and several small modular trays usually outperform one oversized decorative tray (same source). Wall height is the sightline trade-off: low walls preserve the view across a counter; taller walls secure pieces in transport but can hide small items.

**Footprint is a system decision \u2014 one standard size keeps drawers, cases and counters interchangeable.**

## Compartment layouts by piece type

Published display guides assign structure by handling pattern: rings in shallow individual slots or narrow channels; earrings in paired positions that keep mates together; bracelets on lengths that stop sliding into neighbouring pieces; necklaces in open lengthwise space that separates chains from clasps (as published on grainmarkleather.com and gemsondisplay.com). The general rule reads: more structure for small pieces, more open space for long or irregular items, with removable inserts for changing stock and fixed dividers for stable collections. ELAPACK's display range covers the four working formats: the [velvet necklace display](https://elapack.com/products/velvet-necklace-display/), the [acrylic earring display](https://elapack.com/products/acrylic-earring-display/), the [stackable jewellery tray](https://elapack.com/products/stackable-jewelry-tray/) and the [velvet jewellery display set](https://elapack.com/products/velvet-jewelry-display-set/).

| Piece type | Layout that works | Watch-out |
|---|---|---|
| Rings | Shallow slots or narrow channels | Depth vs glove-and-go access |
| Earrings | Paired positions | Losing mates across compartments |
| Bracelets | Anti-slide lengths | Pieces migrating into neighbours |
| Necklaces | Open lengthwise channels | Chain\u2013clasp tangle at the ends |
| Mixed stock | Removable inserts | Fixed dividers lock the layout early |

## Linings and the anti-tarnish question

Shell materials run from wood and leather-wrapped to acrylic and metal; linings are where protection actually lives. Ordinary velvet and felt cushion pieces but do nothing about oxidation; treated polyester suede is designed to neutralise tarnish-related compounds; PEVA barriers work by excluding moisture and pollutants in enclosed cases (as published on grainmarkleather.com). The question that separates a specification from a marketing phrase: "anti-tarnish velvet" is a product description, not a specification \u2014 ask whether the treatment addresses sulfur compounds, moisture, or both, and ask for the treatment's basis in writing before accepting it as an order requirement. Published retail guidance adds that velvet tray liners are the most popular display choice because the soft pile holds pieces in place and prevents scratching (gemsondisplay.com).

**Cushioning is standard; chemistry is optional \u2014 make the supplier state which one the lining actually provides.**

## Test the layout before you order 200

The published handling test is worth copying exactly: load the tray as it will be used, close the drawer or case, then remove the most-worn piece \u2014 if the other items shift, redesign for access. Measure the destination interior dimensions plus lifting clearance before ordering, and sort jewellery by handling pattern rather than by collection. For storage-adjacent programmes, the [black leather jewellery box](https://elapack.com/products/black-leather-jewelry-box/) and the [jewellery boxes guide](https://elapack.com/news/how-to-choose-custom-jewelry-boxes/) cover the kept-piece side; complete presentations sit in the [sets collection](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging).

## The bottom line

Standardise the footprint, assign compartments by handling pattern, and pin the lining claim to a stated chemistry. [Contact ELAPACK](https://elapack.com/contact/) with your fixture dimensions and piece mix, and the quotation will state tray footprint, layout and lining options that fit your counter and drawer system.`
  },
  {
    "slug": "custom-logo-pouches-guide",
    "datePublished": "2026-10-09",
    "title": "Logo on Custom Pouches: Compare Print, Transfer and Sewn Labels",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-logo-pouches-guide.webp",
    "imageAlt": "Guide cover card: logo methods on custom pouches \u2014 screen print, heat transfer and woven labels compared on durability, fabric fit and cost structure",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Compare logo methods for custom pouches. Review the actual fabric, print or label construction, sample evidence and artwork before approving your order.",
    "metaDescription": "Compare logo methods for custom pouches. Review the actual fabric, print or label construction, sample evidence and artwork before approving your order.",
    "body": "Choose the logo method after deciding which pouch fabric and construction you want to approve. A clean logo on one substrate does not establish the result on another. This guide compares the questions worth asking about direct printing, heat-applied graphics and sewn labels, without treating any method as permanently damage-proof.\n\n\n## Compare the proposed result, not a universal winner\n\nAvery Dennison presents woven labels, printed fabric labels and heat-transfer branding as different options. Its range is a useful reminder that \u201Cfabric label\u201D is not one construction and that a logo can be produced and attached in several ways. It does not establish that any option is suitable for every pouch. [Avery Dennison branding options](https://www.averydennison.com/na/en/industries/apparel/products/branding-packaging/permanent-branding)\n\nUse this table to structure sample enquiries. These are purchasing checks, not measured performance rankings.\n\n|Proposed method|Question to resolve|Sample detail worth recording|\n|---|---|---|\n|Direct screen print|Can the artwork reproduce on this fabric and color?|Small lettering, edges and appearance on the folded pouch|\n|Heat-applied graphic|Is this transfer system appropriate for the actual substrate?|Surface change, adhesion and color behavior|\n|Woven label|Does the woven interpretation preserve the necessary detail?|Legibility, label dimensions and placement|\n|Printed fabric label|Does the proposed label and attachment suit the design?|Print clarity, edge treatment and stitching position|\n\nThe cheapest option cannot be identified from this list alone. For a useful comparison, hold the pouch specification and order scope constant, then ask what changes with each logo route. A price for one logo size and one fabric should not be compared as though it covers every alternative.\n\nBrowse [custom jewelry pouches](https://elapack.com/custom-jewelry-pouches/) alongside [drawstring bags](https://elapack.com/custom-drawstring-bags/) before fixing the logo placement. If the intended product is a [cotton pouch](https://elapack.com/products/custom-cotton-pouches/), request a sample on the proposed cotton specification, not simply a sample bearing the right logo on a different material. Our recommendation is to make substrate, artwork and method one approval decision. For adjacent formats, the [custom cosmetic bags guide](https://elapack.com/news/custom-cosmetic-bags-guide/) and the [glasses cases and pouches guide](https://elapack.com/news/custom-glasses-cases-pouches-guide/) apply the same logo questions to bag-style and eyewear products.\n\n## Ask what can change on the selected fabric\n\nSTAHLS' dye-migration handbook describes a problem in decorated polyester garments: color from the fabric can migrate into the applied graphic, and the result may not be immediately apparent. The source concerns garment decoration. It is relevant as a risk to discuss for a polyester pouch, not evidence that all pouches suffer the problem or that a particular transfer system has passed testing. [STAHLS dye-migration handbook](https://assets.stahls.com/stahls/content/pdf/ebooks/Stahls-Dye-Migration-Handbook.pdf)\n\nIf a heat-applied method is proposed, ask the supplier to assess the actual substrate and color. A sample on a different fabric may help discuss the design, but it leaves material-specific questions open. We do not prescribe a temperature, dwell time or wash test here because no exact transfer system and pouch fabric have been specified.\n\nFor a sewn label, inspect the label and its attachment as separate details. Check how the label sits when the pouch is filled or closed, where the stitching appears and whether the placement matches the approved drawing. A woven logo should not be described as impossible to damage merely because its design is woven rather than printed.\n\nKeep comparisons relevant to the intended use. If the pouch will be washed, request an appropriate care specification and evidence for the proposed construction. If washing is not part of its intended use, do not invent a wash-resistance selling point. The same discipline applies to terms such as \u201Cpermanent\u201D and \u201Cfade-proof\u201D: ask what conditions and evidence support them before using them in product copy.\n\n## Approve the complete logo specification\n\n![Logo pouch approval sequence: fix fabric and construction, then match the logo method, then approve the full specification](/charts/logo-pouch-approval-sequence.svg)\n\nFor the artwork brief, identify the logo version, intended finished size and position on the pouch. Supply the editable artwork you have and ask which file format the proposed method requires. Do not assume every process has identical artwork rules, or that a small raster preview is enough to approve production detail.\n\nOur recommended approval record includes the fabric specification and color, pouch dimensions and construction, logo method, artwork revision, label or print position, and the sample reference. Record any substitute material used in an early sample so that a partial design check is not mistaken for complete approval.\n\nFor quotations, list quantities by version and identify changes in fabric, logo or dimensions. Ask how those changes affect the proposal rather than assuming that one total quantity makes all versions identical in production. If you are ordering a coordinated [jewelry packaging set](https://elapack.com/custom-jewelry-packaging/), include the other components as separate lines and clarify any assembly requested.\n\nThe final decision should be based on the sample and the agreed specification, not on a claim that one method is always the cheapest or most durable. Standard orders start at 200 pieces with a 15\u201320 day production window after sample approval. [Send ELAPACK your pouch reference and logo artwork](https://elapack.com/contact/) to request the applicable options and sample terms. Where evidence is still missing, leave the claim out of the product description until it has been resolved; a restrained, accurate description is more useful than a promise the order cannot substantiate."
  },
  {
    "slug": "custom-gift-card-boxes-guide",
    "datePublished": "2026-10-09",
    "title": "Custom Gift Card Boxes: Styles, Sizes and Q4 Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/custom-gift-card-boxes-guide.webp",
    "imageAlt": "Guide cover card: custom gift card boxes \u2014 five styles, the standard card size, published box dimensions and the Q4 ordering window worked backwards",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Gift card box styles compared \u2014 pop-up, folder, slider, lid-and-base, ribbon-tie \u2014 with the standard card size, published box dimensions, search demand and the Q4 timeline that decides when to order.",
    "metaDescription": "Custom gift card boxes: pop-up, slider, folder and ribbon-tie styles, standard card sizing, published dimensions, US search demand and the Q4 ordering timeline for holiday programmes.",
    "body": "*Style and dimension references are as published by US packaging suppliers (Mid-Atlantic Packaging, Superior Gift Wrap, Creative Carding, ActionPKG, Alya Packaging, BoxIt, NAPCO \u2014 checked October 2026); they describe those suppliers' stock ranges and are quoted for orientation, not as ELAPACK specifications. Order terms \u2014 MOQ 200 pieces, 15\u201320 day production, custom sample USD 25 plus USD 20 shipping in 3\u20135 days, cutting-die tooling USD 50\u2013100 where required \u2014 are ELAPACK's confirmed trade terms.*\n\n> **Quick answer:** the card is the standard (3-3/8 \xD7 2-1/8 in, the credit-card size), so every style decision is about the unboxing \u2014 pop-up for theatre, slider or folder for slim retail, lid-and-base or ribbon-tie for gifting. For holiday programmes, work the Q4 maths backwards from your shelf date: production is 15\u201320 days plus transit.\n\n## Key facts at a glance\n\n| Item | Figure | Source |\n|---|---|---|\n| Minimum order | 200 pieces per design, all box lines | ELAPACK confirmed terms |\n| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |\n| Custom sample | USD 25 plus USD 20 shipping, 3\u20135 days | ELAPACK confirmed terms |\n| Cutting-die tooling | USD 50\u2013100 where a new die is required | ELAPACK confirmed terms |\n| Standard card size | 3-3/8 \xD7 2-1/8 in (credit-card standard) | As published, Mid-Atlantic Packaging |\n\n## Sleeve, envelope, holder, box\n\n![Gift card formats compared: sleeve, envelope, holder and box constructions](/charts/gift-card-box-styles.svg)\n\nGift-card buyers name the format they need \u2014 *sleeve*, *envelope*, *holder* or *box* \u2014 and they are separate line items in one brief, bought in different quantities and materials. Christmas runs register as their own seasonal line and are ordered months ahead. The flat-carrier side of the family \u2014 sleeves, envelopes and folders compared by occasion and channel \u2014 is covered separately in the [custom gift card holders guide](https://elapack.com/news/custom-gift-card-holders-guide/). The occasion set is broad \u2014 birthdays, weddings, graduations, employee appreciation (as published on midatlanticpackaging.com).\n\n**The format is the line item \u2014 sleeve, envelope, holder and box belong on one brief, not one order.**\n\n## Start from the card: one standard, every style\n\nEvery style fits the same card: 3-3/8 \xD7 2-1/8 inches, the credit-card (ISO/IEC 7810 ID-1) standard, which also covers business cards of the same cut. Published closed dimensions around that standard: a pop-up gift card folder at 5 \xD7 3-3/8 \xD7 3/16 in closed (midatlanticpackaging.com), and a pop-up gift card box at 4-5/8 \xD7 3-3/8 \xD7 5/8 in holding up to six cards (superiorgiftwrap.com). Those are stock-product references \u2014 your own programme sizes from the card outward, adding insert thickness and the number of cards per box to the closed height.\n\n| Style | Published structure | What it is bought for |\n|---|---|---|\n| Pop-up | Built-in insert lifts the card as the box opens (midatlanticpackaging.com); To/From/Amount fields printed on inserts (creativecarding.com) | Unboxing theatre at POS and gifting |\n| Folder / sleeve | Slim flat closure, e.g. 5 \xD7 3-3/8 \xD7 3/16 in closed | Slim retail, mailers, card sleeves |\n| Slider | Sliding-lid drawer construction (alyapackaging.com) | Reusable keepsake slider |\n| Lid-and-base / magnetic | Lift-off and magnetic-lid variants with card or foam inserts (alyapackaging.com) | Premium gifting and sets |\n| Ribbon-tie | Tied bow as the closure and presentation, 50-count packs as published (midatlanticpackaging.com) | Wedding and occasion gifting |\n| Pull-ribbon | Ribbon-pull opening format (napco.com) | Novelty reveal |\n\n*Structure rows are published observations of US suppliers' stock ranges; ELAPACK quotes gift card box constructions to order \u2014 style feasibility and insert details are confirmed on the quotation, and unconfirmed construction details are deliberately not promised here.*\n\n**Pick the moment, not the box: the opening experience the recipient has is the entire style decision.**\n\n## Inserts: what holds the card\n\nPublished insert options run from the built-in pop-up platform, through die-cut card slots, to foam padding that stops cards sliding in transit (boxitpackages.com, actionpkg.com, midatlanticpackaging.com). Card capacity is a real specification \u2014 one supplier's pop-up box holds up to six cards (superiorgiftwrap.com) \u2014 so state cards-per-box in the brief if the pack is a multi-card set. Printing belongs on the insert as much as the wrap: To/From/Amount fields are a published standard feature of pop-up inserts (creativecarding.com), and they turn the box into the greeting card. Finish options on the box itself are the luxury set \u2014 foil stamping for logo and metallics, with the full finish comparison in the [surface finishes guide](https://elapack.com/news/surface-finishes-compared-guide/).\n\n## The Q4 timeline, worked backwards\n\nHoliday gift-card programmes fail on dates, not design. With production at 15\u201320 days once artwork and the pre-production sample are approved, a shelf date in the first week of December needs the order placed with artwork ready by early-to-mid November \u2014 earlier if sea freight is involved, later for air. The sample route (custom sample USD 25 plus USD 20 shipping, 3\u20135 days) is the place to lock the pop-up action and insert fit before tooling; where a new cutting die is required it is quoted at USD 50\u2013100. The same backwards maths, with seasonal wording swapped, runs the Valentine's window \u2014 see the [Valentine's packaging timeline](https://elapack.com/news/valentines-day-packaging-timeline/) for that worked calendar.\n\n**Set the shelf date first and let it set the order date \u2014 Q4 lead times do not bend for late artwork.**\n\n## What to put in your enquiry\n\nA gift card box brief a factory can quote first time carries: the style and construction (or a reference to the table above as a starting point); cards-per-box and card size confirmation; the insert type \u2014 pop-up platform, die-cut slot or cushioned; printed fields on the insert if wanted; quantity against the 200-piece minimum; artwork in vector with Pantone references; and the need-by date so production and freight can be planned to it. Adjacent formats for the same programme: the [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) for premium sets, the [ribbon gift box](https://elapack.com/products/luxury-gift-box-ribbon/) for occasion gifting, and the parent [custom gift boxes](https://elapack.com/custom-gift-boxes/) and [boxes collection](https://elapack.com/products/?category=Boxes) pages for the wider range. Specification-sheet fields are covered in the [spec sheet guide](https://elapack.com/news/how-to-read-a-packaging-specification-sheet/).\n\n## The bottom line\n\nOne card standard, six working styles, and a Q4 clock: choose the opening moment, size from the card outward, and order against the holiday maths. [Contact ELAPACK](https://elapack.com/contact/) with the style, quantity, artwork and need-by date, and the quotation will state the construction, insert and tooling that apply to your gift card programme."
  },
  {
    "slug": "surface-finishes-compared-guide",
    "datePublished": "2026-10-07",
    "title": "Surface Finishes for Custom Boxes Compared: Embossing, Foil, Lamination and Spot UV",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/surface-finishes-compared-guide.webp",
    "imageAlt": "Guide cover card: the finish is the first touch \u2014 emboss and deboss, foil stamping, lamination and spot UV compared",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The four luxury-box finishes compared with sourcing data: US search demand, tooling differences, colour control and the board grades that carry each finish.",
    "metaDescription": "Compare embossing, debossing, foil stamping, lamination and spot UV for custom boxes: search demand data, tooling, colour control and enquiry checklists.",
    "body": `*Technical descriptions of each finish are industry references as published by printing and packaging authorities (sources named inline). Board grades, colour-control steps and QC stations are ELAPACK's published production references; order terms are its confirmed trade terms.*

The finish is what the customer touches first: a logo pressed into the board, a foil that catches the light, a matte lamination that changes how the same Pantone reads. Embossing and debossing, foil stamping, lamination and spot UV are the four finishes a luxury-box buyer actually chooses between, with the tooling implications, the colour-control process behind them and the specification list that makes quotations comparable.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Minimum order | 200 pieces per design, all product lines | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |
| Custom sample | USD 25 plus USD 20 shipping, built in 3\u20135 days | ELAPACK confirmed terms |
| Greyboard grades | 1.5 / 2.0 / 2.5 / 3.0 mm tiers | ELAPACK published reference ranges |
| Insert systems | Recyclable paper line, EVA/foam line, layered A-grade board | ELAPACK published production ranges |
| Colour control | Four steps: artwork review, material test, press control, sample approval | ELAPACK published process |
| Cutting-die tooling | Quoted at USD 50\u2013100 where a new die is required | ELAPACK confirmed terms |

## Choosing a finish starts with the logo

![Finish decision tree: from the logo artwork to emboss, foil, spot UV or lamination](/charts/finish-decision-tree.svg)

Finish enquiries split into three definitional questions \u2014 what the logo is pressed into (emboss, deboss), what carries the shine (foil, spot UV) and what protects the wrap (lamination). Buyers who arrive with a logo file can be walked down this tree in one reply; buyers who arrive with "make it luxurious" need the tree first.

**Start from the logo artwork, not the finish catalogue \u2014 the artwork decides which finishes are even possible.**

## The four finishes at a glance

| Finish | What it does | Tooling | Typical use on a luxury box |
|---|---|---|---|
| Emboss / deboss | Raises or presses the design into the board | Male and female die pair | Logos and patterns, with or without foil |
| Foil stamping | Transfers metallic or pigment foil under heat and pressure | Single heated die | Logos, borders, lettering |
| Lamination | Bonds a film (matte, gloss, soft-touch) over the printed wrap | No die; film and adhesive | Full-wrap finish that sets the hand feel |
| Spot UV | Cures a high-gloss coating in selected areas | Plate per artwork area | Contrast accents over a matte surface |

## Embossing and debossing

Embossing presses a raised image into the sheet; debossing presses the image down. Industry references are consistent on the mechanics: a metal die and counter-die work as a pair, and a \u201Cblind\u201D emboss or deboss uses no ink or foil at all (as published on printindustry.com and packlim.com, checked October 2026). Two consequences matter to a buyer. First, the die pair is artwork-specific \u2014 change the logo and the tooling is remade, which is why finish decisions belong at the sampling stage, not after production is booked. Second, on textured wraps the depth reads differently than on smooth paper, so the effect is approved on the sample built on the actual wrap.

**Emboss and deboss are approved by touch on the real wrap \u2014 never by the die drawing alone.**

## Foil stamping

Foil stamping transfers a thin metallic or pigment foil where a heated die contacts the surface, which is what gives logos the chrome, gold or brushed reflectivity that ink cannot reach (as published on tealpackaging.com). Because the die is single and the foil is consumed per unit, set-up is lighter than an emboss pair but the material cost runs through the whole run \u2014 a trade-off printing authorities describe as emboss costing more to set up and less per unit on long runs, foil the reverse (as published on cnlipack.com). Artwork must be vector (AI, PDF or EPS): dies are engraved from paths, and a raster logo cannot make a die. Specific foil colours and plate fees are quoted per project \u2014 confirm them on the written quotation rather than from any catalogue.

**Send vector artwork at the enquiry stage; foil and plate costs are quotation items, not catalogue numbers.**

## Lamination and spot UV

Lamination is the full-surface decision: matte, gloss or soft-touch film over the printed wrap, setting the hand feel and the scuff resistance of the whole box. Spot UV is the accent decision \u2014 a high-gloss cured coating in chosen areas, most often over matte lamination so the logo lifts from the background. The interaction to understand is colour: the same Pantone reads differently under matte film, gloss film or bare paper, which is why material and surface tests sit early in the colour-control chain below. Soft-touch lamination is often asked for by name \u2014 buyers who have felt it specify it directly, because the hand feel is the selling point.

**Choose the lamination first, then the accents \u2014 spot UV only reads against a contrasting full-wrap finish.**

## Combining finishes

The luxury standard is a combination: a foil-stamped logo registered over a debossed area (\u201Cfoil deboss\u201D), or spot UV accents on a matte-laminated wrap. Combination work carries the highest set-up cost and the tightest registration tolerance, which printing references flag explicitly (as published on ipacku.com). Practically, combinations are approved on the custom sample \u2014 USD 25 plus USD 20 shipping and a 3\u20135 day build at ELAPACK \u2014 with every layer present, because registration that looks fine as separate proofs can drift when the layers meet.

**Approve combinations once, assembled, on the custom sample \u2014 separate approvals prove nothing about registration.**

## How colour is actually controlled

Finish choices change colour, so the control process matters as much as the finish itself. ELAPACK's published four-step chain runs: artwork and Pantone review; material and surface testing (paper texture, coating and lamination are tested for their effect on the final colour); press-side colour control on Heidelberg presses; then sample approval before bulk, with QC gates at incoming material, pre-production sample, in-process, assembly fit, appearance and final packing. The published caveat belongs in every brand's brief: the final colour may vary slightly depending on material, coating, lamination and printing method.

| Step | What happens | What a buyer sends |
|---|---|---|
| 1. Artwork & Pantone review | Target colour fixed from the artwork | Vector logo plus Pantone references |
| 2. Material & surface test | Wrap, coating and lamination tested for colour shift | The chosen finish combination |
| 3. Press control | Colour held on press during the run | \u2014 |
| 4. Sample approval & bulk QC | Custom sample signed off; six QC stations gate the run | Approval on the assembled sample |

**Fix the Pantone at step one and approve at step four \u2014 colour disputes almost always come from skipping the middle.**

## Board grade: the layer under the finish

Finishes sit on a three-layer build \u2014 surface wrap, greyboard, inner lining \u2014 and the board decides how the finish reads. ELAPACK's published reference tiers: 1.5 mm for small and light items such as jewellery cards and sample kits; 2.0 mm as the standard premium grade for skincare and fragrance sets; 2.5 mm for medium-to-large gift boxes and press kits; 3.0 mm for large boxes, heavier contents and maximum presence. Board represents roughly 8\u201314% of cost at 1.5 mm rising to 16\u201325% at 3.0 mm (ELAPACK published figures, for reference only, based on similar box size, structure and standard finishing). Deeper embossing in particular asks more of the board, which is one more reason the grade is chosen before the die is cut.

| Grade | Typical application | Share of box cost (reference) |
|---|---|---|
| 1.5 mm | Small boxes, jewellery cards, sample kits | \u2248 8\u201314% |
| 2.0 mm | Standard premium boxes, skincare and fragrance sets | \u2248 10\u201318% |
| 2.5 mm | Medium-to-large gift boxes, press kits | \u2248 13\u201322% |
| 3.0 mm | Large boxes, heavy contents, maximum presence | \u2248 16\u201325% |

**Pick the board grade with the finish, not after it \u2014 depth, closure weight and cost all hang off that one line of the specification.**

## What to put in your enquiry

A finish enquiry a factory can quote first time carries: the box format from the twelve standard structures (magnetic flip-top, lid-and-base, drawer, two-door, handle, folding, cylinder, window, display, advent, mailer, card box) or a bespoke drawing; the board grade; the wrap; the finish combination with the logo marked for each; vector artwork; Pantone references; the quantity against the 200-piece minimum; and the sample route. Where a new cutting die is required, tooling is quoted at USD 50\u2013100 depending on the product.

## The bottom line

Choose the lamination that sets the hand feel, put foil or a blind deboss where the eye should land, use spot UV only against contrast, and approve everything once on the assembled custom sample. For boxes that carry these finishes as standard, see the [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) and the [custom jewellery boxes](https://elapack.com/custom-jewelry-boxes/) collection. [Contact ELAPACK](https://elapack.com/contact/) with the format, finish combination and quantity, and the quotation will state the board grade, finishes and tooling that apply.`
  },
  {
    "slug": "custom-printed-ribbon-guide",
    "datePublished": "2026-10-07",
    "title": "Custom Printed Ribbon: Artwork, Repeat Spacing and Box Assembly",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-printed-ribbon-guide.webp",
    "imageAlt": "Guide cover card: specify ribbon like a part \u2014 material, role on the box, and the specification list for printed ribbon",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Specify custom printed ribbon width, artwork repeat and assembled placement. Use a published template example to prepare your own sample and quotation brief.",
    "metaDescription": "Specify custom printed ribbon width, artwork repeat and assembled placement. Use a published template example to prepare your own sample and quotation brief.",
    "body": "When ordering printed ribbon, \u201Clogo on a ribbon\u201D is not a complete brief. The print must fit across the width, repeat along the length and sit where you want it after the ribbon is tied or attached. Resolve those three views together before approving a roll from a flat artwork proof.\n\n\n## Separate ribbon width from printable width\n\n![Printed ribbon specification: printable width inside the ribbon width, repeat along the length, approval on an assembled sample](/charts/ribbon-print-repeat-anatomy.svg)\n\nA published noissue template for 16 mm satin ribbon specifies a 3 mm safe margin from each ribbon edge. Within that particular template, 16 \u2212 3 \u2212 3 leaves a 10 mm safe artwork width. This is a worked reading example, not an ELAPACK print limit. The same template specifies minimum strokes and gaps of 0.2 mm. [noissue satin ribbon artwork template](https://assets.ctfassets.net/5gvckmvm9289/5tqllPvgOfkN8V0kVWTl3r/f27da2b1b0c47ebf49506f1bc03a56c1/custom_satin_ribbon-91m_x_16mm-template-noissue.pdf)\n\n|Template field|Published value|What it helps the buyer distinguish|\n|---|---|---|\n|Ribbon width|16 mm|Physical width of that ribbon|\n|Edge safety margin|3 mm per edge|Space excluded from the safe artwork area|\n|Safe artwork width|10 mm, calculated|Width remaining after those margins|\n|Minimum stroke/gap|0.2 mm|A process-specific artwork constraint|\n\nDo not transfer these limits to another width, material or printing method without confirmation. Instead, request the template for the actual quoted ribbon and review the logo at its intended size. If a wordmark becomes unreadable, simplifying it or selecting a different width may be more useful than repeatedly shrinking the original artwork.\n\nFor a coordinated pack, compare the ribbon against the [gift-box format](https://elapack.com/custom-gift-boxes/) and other [ribbons and accessories](https://elapack.com/ribbons-accessories/). A ribbon shown across an empty lid is not yet an assembled presentation. Our recommendation is to include a top view of the completed package in the approval brief, so the supplier knows which part of the printed design should remain visible.\n\n## Check the repeat on an assembled sample\n\nThe same noissue template specifies a 12-inch plate repeat and artwork spacing of 0.5 inch. These are separate template fields, not interchangeable descriptions of the length used on each gift box. A repeating print pattern and a cut length answer different questions. [Published ribbon template](https://assets.ctfassets.net/5gvckmvm9289/5tqllPvgOfkN8V0kVWTl3r/f27da2b1b0c47ebf49506f1bc03a56c1/custom_satin_ribbon-91m_x_16mm-template-noissue.pdf)\n\nFor your project, ask for a repeat drawing showing the artwork and blank space along the ribbon. Then review a tied or attached sample on the actual package. Identify which section faces the customer, where the knot or attachment sits, and whether you need a particular logo orientation. Those are design decisions to communicate, not assumptions to leave to the person assembling the order.\n\nIf the ribbon is part of a pull tab, handle or another functional component, state that purpose separately. When the ribbon is itself the closure, the [magnetic closure versus ribbon tie comparison](https://elapack.com/news/magnetic-closure-vs-ribbon-tie-gift-boxes/) compares the two routes for gift-box lids. Do not approve a decorative sample as evidence that the assembled component can perform a load-bearing job. Ask the supplier what construction and assessment are appropriate for the intended use; this guide provides no load rating.\n\nFor a bow or wrap, our suggestion is to document the approved assembly with a photograph and a measured cut length. If the box size changes, review the arrangement again. A flat logo proof remains useful for artwork, but it does not resolve the appearance of the knot, tails or final visible section. The [gift-box ribbon product page](https://elapack.com/products/luxury-gift-box-ribbon/) can serve as a starting point for that discussion.\n\n## Specify the ordering unit and the approval boundary\n\nA quotation should say whether you are buying rolls, cut pieces, completed bows or an assembled packaging component. These scopes should not be compared as though they contain the same work. We suggest listing the ribbon material and width, color reference, printing method proposed by the supplier, printed side or sides, artwork revision, repeat layout and supply format.\n\nWhere you need cut pieces, provide the approved length and quantity by version. Ask the supplier to explain any production allowance in the quotation rather than applying a generic waste percentage from a blog. No consumption rate has been measured for your packing process, so this article does not invent one.\n\nColor approval also needs a clear reference. If the ribbon is intended to coordinate with a box or pouch, supply those references together and ask how the proposed sample will be compared. Avoid treating a screen image as the completed material approval. Keep the intended combination visible in your [packaging set brief](https://elapack.com/sets/), including any versions with different artwork or dimensions.\n\nStandard orders start at 200 pieces with a 15\u201320 day production window after sample approval. When you are ready to enquire, [send ELAPACK the box dimensions, ribbon role and artwork](https://elapack.com/contact/). Request the applicable production template and sample scope. That lets the next discussion focus on the unresolved width, repeat or assembly decision, instead of relying on a general promise that a logo can be printed somewhere on the ribbon."
  },
  {
    "slug": "custom-muslin-bags-guide",
    "datePublished": "2026-10-07",
    "title": "Custom Muslin Bags: Weights, Sizes and Sourcing Data for Brands",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-muslin-bags-guide.webp",
    "imageAlt": "Guide cover card: muslin is the natural register \u2014 cloth, drawstring build and logo options for custom muslin bags",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Muslin drawstring bags sourced with data: where muslin sits in the cotton-drawstring demand band, weight and size conventions, and how it compares to velvet and satin.",
    "metaDescription": "Source custom muslin bags with data: cotton drawstring demand figures, GSM weight bands, stock size ranges, logo options and a full enquiry checklist for brands.",
    "body": "*Weight and size conventions are third-party references as published by the named bag suppliers (checked October 2026). Order terms are ELAPACK's confirmed trade terms; ELAPACK's own muslin weight is to be confirmed per project.*\n\nA muslin bag is the plainest thing a brand can put its logo on \u2014 plain-weave cotton, a drawstring channel, nothing else \u2014 and it sits inside the wider cotton drawstring family \u2014 the same production line at a different weave. This guide positions muslin honestly inside that family: what the material is, the weight and size conventions suppliers publish, when muslin beats velvet or satin, and the specification list that gets a comparable quotation.\n\n## Key facts at a glance\n\n| Item | Figure | Source |\n|---|---|---|\n| Material | Plain-weave cotton; natural unbleached or bleached | as published on cusmytrims.com |\n| Typical published weight | Natural muslin at 145 GSM; band \u2248 90\u2013150 GSM | as published on bagsgeek.com |\n| Stock size range | 2\xD73 in to 24\xD734 in (stock programmes) | as published on bagsgeek.com |\n| Closure | Single or double drawstring channel | as published on custombagsupplies.com |\n| Logo options | Printing or embroidery | as published on cusmytrims.com |\n| Minimum order | 200 pieces per design, all product lines | ELAPACK confirmed terms |\n| Custom sample | USD 25 plus USD 20 shipping, 3\u20135 day build | ELAPACK confirmed terms |\n\n## Where muslin sits among cotton drawstring bags\n\n![Muslin versus standard cotton drawstring: weave, weight, hand feel and print surface](/charts/muslin-vs-cotton-drawstring.svg)\n\nMuslin is the plainest member of a wide cotton family: some buyers want the generic product type (*cotton drawstring bags*), others name muslin specifically for the plain weave, the soft hand and the fine print surface it gives. Both run on the same production line \u2014 the difference is the weave and the weight, which the enquiry should state. A buyer searching \u201Ccustom muslin bags\u201D and a buyer searching \u201Ccotton drawstring pouch\u201D are often specifying the same product; brands that brief \u201Cplain-weave cotton drawstring, natural\u201D reach both.\n\n**Say whether the drawstring bag is muslin or standard cotton \u2014 the weave changes the print surface and the hand, not just the name.**\n\n## What muslin actually is\n\nMuslin is a plain-weave cotton cloth, sold natural (unbleached) or bleached, with organic options in some stock programmes (as published on cusmytrims.com and gallantintl.com). Published weights cluster at about 145 GSM for natural bags, within a broader 90\u2013150 GSM band where lighter weights suit jewellery and favour bags and heavier weights give a more durable, premium feel (as published on bagsgeek.com). Weave openness matters more than the number: looser weaves breathe and drape but show print coverage less evenly, which is one reason logo method is chosen after the cloth. ELAPACK's own muslin weight is confirmed per project \u2014 state the feel you want and let the quotation fix the grade.\n\n## Construction and sizes\n\nThe closure is a sewn drawstring channel \u2014 single or double drawstring, the double giving a flatter cinch at the top (as published on custombagsupplies.com). Stock programmes publish size runs from 2\xD73 inches up to 24\xD734 (bagsgeek.com) or 20\xD724 (custombagsupplies.com), but the working method at factory level is the object, not the chart: the [custom muslin pouch](https://elapack.com/products/custom-muslin-drawstring-pouch/) is built to the product it holds \u2014 a candle diameter plus wick clearance, a bracelet laid flat, a favour soap stacked. Sewn textile bags are cut to confirmed dimensions, so the size decision is the product's dimensions plus ease, taken once and held on the specification.\n\n| Size decision | Base it on |\n|---|---|\n| Bag length | Product height + cinch allowance |\n| Bag width | Product diameter or laid-flat width + ease |\n| Drawstring | Single (simple cinch) or double (flat, even closure) |\n| Cord | Length to tie a bow at the chosen size |\n\n## Muslin against velvet and satin\n\n| | Muslin | Velvet | Satin |\n|---|---|---|---|\n| Feel | Natural, matte, soft | Plush, deep pile | Smooth, lustrous |\n| Brand register | Rustic, natural, craft | Luxury, jewellery, gift | Elegant, fragrance, fashion |\n| Protection | Light dust and scratch cover | Padded, presentation-grade | Smooth cover, low abrasion |\n| Cost position | The economical textile option | Premium | Mid-to-premium |\n\nThe comparison is about register, not ranking: the same jewellery brand may run muslin for favour bags and [velvet pouches](https://elapack.com/products/custom-velvet-pouches/) for its main line. When the bag is one component of a set, the same material logic applies to the whole pack \u2014 the [drawstring bags collection](https://elapack.com/custom-drawstring-bags/) shows the constructions across materials.\n\n**Choose the material for the register the brand speaks in \u2014 muslin and velvet are answers to different briefs, not tiers of the same one.**\n\n## Logo options\n\nPublished options are printing or embroidery (as published on cusmytrims.com), with screen print and heat transfer the standard print routes on cotton. On natural unbleached cloth, a single-colour print in a dark ink is the reliable starting point; fine gradients and pale inks on natural weave are sample-first decisions. The logo test happens the same way as every other decision in this guide: on the custom sample \u2014 USD 25 plus USD 20 shipping, built in 3\u20135 days \u2014 printed on the confirmed cloth, not on a proof of the artwork alone.\n\n**Approve the logo on the actual cloth \u2014 natural weave changes how every ink reads.**\n\n## What to put in your enquiry\n\nOne page makes muslin quotations comparable: the product the bag holds and its dimensions; natural or bleached cloth (organic where the programme requires it, confirmed per project); the weight band or the feel description if the grade is unconfirmed; single or double drawstring and cord preference; logo method (print or embroidery), size and placement; Pantone references for cloth and print; artwork as vector files; and the quantity against the 200-piece minimum, with the 15\u201320 day production window and any in-warehouse date the shipment must meet.\n\n## The bottom line\n\nMuslin is the natural-register, economical end of the drawstring family, specified by construction rather than by keyword: cloth, weight feel, drawstring type, logo method, dimensions from the product itself. Start from the [custom muslin pouch](https://elapack.com/products/custom-muslin-drawstring-pouch/), compare against velvet and satin for register, and [contact ELAPACK](https://elapack.com/contact/) with the product dimensions and quantity for a first quotation."
  },
  {
    "slug": "custom-ring-boxes-guide",
    "datePublished": "2026-10-07",
    "title": "Custom Ring Boxes: How to Match the Insert to Your Collection",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-ring-boxes-guide.webp",
    "imageAlt": "Guide cover card: order the box to the ring \u2014 specify, insert and order terms for custom ring boxes",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Plan custom ring boxes around your collection. Separate box and insert dimensions, review product variants and prepare a clear sample approval brief.",
    "metaDescription": "Plan custom ring boxes around your collection. Separate box and insert dimensions, review product variants and prepare a clear sample approval brief.",
    "body": "A ring box should be selected around the rings you actually sell. The outer dimensions alone do not describe the slot, the space above the setting or the way the customer removes the ring. For a collection with several settings, a sample plan is more useful than choosing one box from a photograph and assuming the rest will fit.\n\n\n## Read box and insert dimensions as a matched specification\n\n![Ring box matched specification: outer box dimensions and insert slot spec quoted as one pair](/charts/ring-box-matched-spec.svg)\n\nWestpack's catalog provides a useful example of why dimensions need context. One extra ring-box insert measures 44 \xD7 44 \xD7 15 mm and is listed for particular 50 \xD7 50 \xD7 32 mm box models. Its page also identifies a thinner insert for shallower models. These are documented product combinations, not an industry-wide clearance rule. [Westpack foam insert listing](https://www.westpack.com/usd_us_eng/eco-foam-extra-insert-for-ring-box-00272004100.html)\n\n|Published catalog example|Insert dimensions|Scope of the example|\n|---|---|---|\n|Foam insert SKU 00272004100|44 \xD7 44 \xD7 15 mm|Listed with particular 50 \xD7 50 \xD7 32 mm boxes|\n|Paperboard insert SKU 30282000100|44 \xD7 44 \xD7 7 mm|A separate catalog construction, not a drop-in equivalent|\n\nThe second row comes from a separate [Westpack paperboard insert listing](https://www.westpack.com/usd_us_eng/fscrcertified-insert-for-ring-30282000100.html). Neither row is an ELAPACK stock specification. The table illustrates a reading habit: identify what each measurement belongs to before comparing dimensions across quotations.\n\nFor a custom project, ask for the proposed box dimensions, usable internal space and insert dimensions as separate fields. Add the product dimensions and orientation. A setting held upright and a ring laid flat are different design briefs, even when the ring itself is unchanged.\n\nStart with [custom jewelry boxes](https://elapack.com/custom-jewelry-boxes/) and the [custom ring box product page](https://elapack.com/products/custom-ring-boxes/) to discuss the intended format. Our recommendation is to approve a combination of ring, insert and box. Approving only the empty exterior leaves the most important interaction unresolved.\n\n## Use the collection to decide which samples to review\n\nDo not choose a representative ring only because it sells most often. Our suggested sample set includes the tallest setting, widest band and any unusually shaped piece within the range intended to share the package. These are selection criteria, not a fixed number of samples or a guarantee that the extremes cover every design.\n\nFor each version, record the insertion position, how the ring is retained, what touches the setting and how it is removed. Close the actual lid during the review; do not assess headroom from the open box alone. Where you cannot establish a fit from the available measurements, flag that version for physical review rather than declaring it compatible.\n\nGIA recommends jewelry storage with appropriate separation, including padded individual slots, to help avoid pieces contacting one another. That supports careful attention to contact and separation, but it is not a standard for a custom ring insert or proof of shipping performance. [GIA jewelry-care guidance](https://www.gia.edu/gia-news-research-Tips-Caring-Jewelry)\n\nIf one insert does not suit the full collection, consider quoting separate insert versions within the proposed box family. For lids that should open one-handed, the [magnetic closure versus ribbon tie comparison](https://elapack.com/news/magnetic-closure-vs-ribbon-tie-gift-boxes/) weighs two closure routes used on small rigid boxes. Compare that option with separate box formats before deciding. The goal is not to force the fewest components; it is to make the differences visible and manageable. Review the broader [jewelry packaging options](https://elapack.com/custom-jewelry-packaging/) if a pouch or another component will also be included, because the complete presentation should be considered alongside the ring-box decision.\n\n## Keep product versions visible in the order brief\n\nA useful enquiry identifies the rings each packaging version must accept. We suggest a compact schedule containing the ring reference, product dimensions, proposed box, proposed insert, logo revision and quantity. Mark untested pairings explicitly. This gives a supplier something more precise to assess than a total quantity and a photograph of the collection.\n\nAsk the quotation to distinguish the box from any additional pouch, bag or other component. If you are comparing a full [packaging set](https://elapack.com/sets/), state whether packing and assembly are requested; do not assume they are included. Similarly, ask for the applicable sample scope and charges rather than treating a sample policy for another product as the terms for this project. Standard ELAPACK orders start at 200 pieces with a 15\u201320 day production window after sample approval.\n\nAt approval, retain the product-to-insert record with the sample reference. If the setting, insert material or slot construction changes, review the affected combination again. This is a suggested change-control practice, not a claim that a particular sample has already passed an ELAPACK test.\n\nWe have deliberately not supplied a universal ring-box size or clearance figure. The catalog examples above demonstrate the importance of matched specifications, while your product dimensions determine the question to put to the designer. [Send ELAPACK your ring range and packaging quantities](https://elapack.com/contact/) to request a proposal. Include the versions you hope to share so that the response can explain where common packaging is feasible and where a separate sample is needed."
  },
  {
    "slug": "die-cutting-and-dielines-guide",
    "datePublished": "2026-10-07",
    "title": "Die Cutting and Dielines for Custom Boxes: A Buyer's Guide",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/die-cutting-and-dielines-guide.webp",
    "imageAlt": "Guide cover card: every custom box starts flat \u2014 dieline drawn free, approval checks and cutting-die tooling for custom boxes",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "What a dieline is, where the file comes from and what to check before approving one \u2014 with the search data and published market practice behind each step.",
    "metaDescription": "What die cutting and dielines mean for custom boxes: where dieline files come from, what to check before approving one, and the published market practice.",
    "body": "*Supplier dieline practices are as published on the named companies' websites, checked October 2026. ELAPACK's own figures are its confirmed trade terms; where a practice varies across the market, this guide says so instead of quoting a single rule.*\n\nEvery custom box begins as a flat drawing. Before a sheet of greyboard is cut, wrapped or printed, someone has decided where it cuts, where it folds and how the panels meet \u2014 and that decision, the dieline, is the one-time structural choice that every later artwork revision inherits. Get it right once and the box becomes a proven structure that artwork updates alone can refresh; get it wrong and every reorder repeats the correction. This guide covers what die cutting and the dieline are, what the search demand looks like, where dieline files come from and what to check before approving one.\n\n## Key facts at a glance\n\n| Item | Figure or fact | Source |\n|---|---|---|\n| What a dieline is | A flat layout marking cut lines, crease lines and panels | Published industry definition (uprinting FAQ) |\n| Free template libraries | Pacdora 3,000+ box templates; Packlane dielines on request | As published, October 2026 |\n| ELAPACK custom sample | USD 25 plus USD 20 shipping, built to your dieline in 3\u20135 days | ELAPACK confirmed terms |\n| Minimum order | 200 pieces, all product lines | ELAPACK confirmed terms |\n| Production | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |\n| Rigid box board | Greyboard 800\u20131,600 g, typically 1,200 g | ELAPACK commonly produced ranges |\n\n## Die cutting and the dieline, in plain words\n\nDie cutting is the process that turns a flat sheet into a box blank: a steel rule die presses through the sheet to cut the outline, and blunt rules crease the fold lines without cutting through. The dieline is the technical drawing that die is made from \u2014 as one printer's FAQ defines it, a file showing the flat layout of the box, marking where the design's elements sit on each panel. Cut lines and crease lines are different things and do different jobs: a cut separates material, a crease prepares a fold. Reading a dieline means knowing which is which, because artwork that crosses a cut line gets trimmed and artwork that sits on a crease cracks at the fold.\n\n## Two questions, one process\n\n![From dieline to die-cut box: the flat dieline drawing becomes a steel-rule cutting die, which presses cut and crease lines into the sheet before the box is folded into its final form.](/charts/dieline-to-die-flow.svg)\n\nDie-cutting enquiries divide in two: definitional \u2014 what a dieline is, what a cutting die costs \u2014 and practical \u2014 how to use both on a specific box. This guide answers both in order, and ends where the practical question always ends: at the factory's quotation stage.\n\n**The dieline is the buyer's document and the die is the factory's tool \u2014 the quotation is where they meet.**\n## Where dieline files come from\n\n| Route | How it works | As published by |\n|---|---|---|\n| Request from the supplier | State the size you need; the dieline is emailed for design work | Packlane (free, within 24 hours) |\n| Self-serve generator | Pick a box style, set dimensions, download a print-ready file | Pacdora (3,000+ templates; PDF, DXF, AI) |\n| Factory-drawn to your product | The factory draws the dieline to the confirmed product dimensions | ELAPACK practice |\n\nWhich stage the file is released at \u2014 quotation, sampling or order \u2014 varies across the market: some suppliers bundle a custom dieline with a quote request, others issue templates freely and reserve custom drawings for production. ELAPACK's terms are confirmed: the dieline is drawn to your confirmed product dimensions free of charge at the quotation stage; the custom sample \u2014 USD 25 plus USD 20 shipping, built in 3\u20135 days \u2014 is made to that dieline; files are supplied as PDF, AI or DXF; customer-supplied vector dielines are accepted and verified with the die-making team before production; and cutting-die tooling, where a new die is required, is quoted at USD 50\u2013100 depending on the product.\n\n**Secure the dieline before the artwork. Designing first and asking the box to fit later is the expensive order of operations, and artwork placed against a changing structure has to be redone.**\n\n## What to check before approving a dieline\n\n| Check | What you are verifying |\n|---|---|\n| Finished size | Internal dimensions against the product's outer size, with the board caliper accounted for |\n| Panel orientation | Artwork sits upright on every panel once the box is folded |\n| Safe zone | Design elements clear of crease and cut lines |\n| Bleed | Print runs past the trim wherever colour reaches an edge |\n| Board allowance | Dimensions carry the greyboard caliper (commonly produced 800\u20131,600 g) |\n| Revision rounds | How many dieline revisions are included, stated in writing |\n\nWork the checklist on the flat drawing and again on the made sample \u2014 a dieline can be correct as a drawing and still need a revision once the wrapped board and the real product meet. Each revision round is a question to settle before the production tooling is cut, not after.\n\n## Die-cut choices that shape the box\n\nThe dieline is also where the decorative structure is decided: a window cut in the lid, a shaped outer silhouette, or an internal tray cut to the product's footprint. These are ordinary die-cutting decisions, but they are one-time ones \u2014 a window moves with the tooling, not with the artwork, so the format should be confirmed at the sample stage alongside the size.\n\n## The bottom line\n\nApproach the dieline in five lines: the product's outer dimensions; the box structure; the route the dieline will come by; the checklist above signed off on the drawing and the sample; and the order quantity against the 200-piece floor. Start from [custom gift boxes](https://elapack.com/custom-gift-boxes/) or the [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) as structure references, and [contact ELAPACK](https://elapack.com/contact/) with the product dimensions to have the dieline drawn and the terms stated in writing."
  },
  {
    "slug": "magnetic-closure-vs-ribbon-tie-gift-boxes",
    "datePublished": "2026-10-06",
    "dateModified": "2026-10-07",
    "title": "Magnetic Closure vs Ribbon-Tie Gift Boxes: A Buyer\u2019s Comparison",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "5 min read",
    "image": "/magnetic-vs-ribbon-gift-box-checklist.png",
    "imageAlt": "Magnetic closure vs ribbon tie gift boxes buyer sample checklist",
    "imageWidth": 1080,
    "imageHeight": 1080,
    "fontFamily": "Arial",
    "excerpt": "Compare magnetic and ribbon-tie boxes through the same loaded-fit, packing and quotation checks before choosing a closure.",
    "metaDescription": "Compare magnetic closure and ribbon-tie gift boxes through sample checks for opening, packing work, loaded fit and quotation scope before choosing a design.",
    "body": "If you are deciding between a magnetic closure and a ribbon-tie gift box, review how the pack will be assembled, opened and closed. Ask for comparable samples before choosing by appearance alone. The comparison below is a buying checklist, not a claim that one closure is universally stronger or less expensive.\n\n## Define the two constructions you are comparing\n\nELAPACK lists a [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) and a [ribbon gift box](https://elapack.com/products/luxury-gift-box-ribbon/). Use those references to identify the proposed structure, then confirm whether the ribbon closes the box, decorates it or works alongside another closure. A visible ribbon does not answer that question by itself.\n\nKeep the intended product, internal space and presentation requirements consistent where possible. If the proposed boxes differ in structure as well as closure, record both differences before attributing an observation to the magnet or ribbon.\n\n## A ribbon does not necessarily replace a magnetic closure\n\nA public [Cardboard Boxes NI product listing](https://cardboardboxesni.com/product/coloured-magnetic-gift-boxes/) describes boxes combining magnetic closure with ribbon; it distinguishes an A6 shallow variant that has a small ribbon loop tab instead. That is a useful counterexample to treating \u201Cmagnetic\u201D and \u201Cribbon\u201D as mutually exclusive box types. The listing concerns that supplier's range, not ELAPACK stock.\n\n| Construction described in the brief | What the buyer should establish |\n|---|---|\n| Magnetic box with a ribbon tie | Whether the ribbon is required for closure or presentation |\n| Magnetic box with a pull tab | How the tab is used to open the lid |\n| Ribbon-tie box without a magnet | How the tied ribbon retains the intended closing arrangement |\n\nOnly the cited supplier's combined construction and loop-tab variant are source observations. The third row is a comparison option to specify, not an assertion about that supplier's range. Ask for a demonstration of the proposed opening method before deciding which samples to compare.\n\n## Observe the actual packing sequence\n\n![Magnetic closure versus ribbon tie compared on the packing and opening sequence each construction creates](/charts/magnetic-vs-ribbon-packing-flow.svg)\n\n### Choose by the job the closure must perform\n\nSeparate retaining the lid, opening the lid and decorating the package in your brief. The cited combined box and loop-tab variant show why the presence of a ribbon alone does not identify its role.\n\n| Your requirement | Candidate to request | Condition before selecting it |\n|---|---|---|\n| The recipient should not need to untie a bow | Magnetic sample without a required ribbon tie | Demonstrate opening and closing with the intended contents |\n| A tied bow is part of the gift presentation | Ribbon-tie sample, with any other closure identified | Approve the tie arrangement and who will complete it |\n| A ribbon is intended only to help open the lid | Sample with an opening tab | Confirm that the tab and the retaining closure are separate features |\n| Both a magnetic close and a tied presentation are required | Combined construction | Include both features and any tying work in the quotation |\n\n*Editorial selection conditions derived from the functional distinctions above, not a strength, speed or durability test.*\n\nAsk the person who will pack the order to review each sample. For a ribbon-tie option, specify the desired tie arrangement and ask whether it will arrive tied or require work at the packing stage. For a magnetic option, review the actual lid movement after the product and insert are loaded.\n\n| Decision point | Magnetic sample review | Ribbon-tie sample review |\n|---|---|---|\n| Opening | Check how the intended recipient opens the lid | Check how the recipient releases the tie |\n| Closing | Review lid alignment with the contents loaded | Review tie position and the intended closing method |\n| Packing work | Record the steps for the proposed construction | Record threading, tying or adjustment where required |\n| Presentation | Inspect the closed box and its contact points | Inspect ribbon placement alongside the logo |\n| Quotation | Confirm structure, insert and assembly scope | Confirm ribbon specification and assembly scope |\n\nIf packing time matters, observe your team using both samples and document the same task for each. Do not use an invented speed comparison or assume that one sample represents every version of that closure.\n\n## Review the package around the closure\n\nCheck the filled box, insert and any pouch together. If this is a [complete packaging set](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging), include all intended components in the review. Ask separately about the outer shipping pack and any validation required for your delivery conditions; a presentation sample alone should not be treated as shipping-test evidence.\n\nFor additional options, compare the [custom box category](https://elapack.com/products/?category=Boxes) and [ribbons and accessories](https://elapack.com/products/?category=Ribbons%20%26%20Accessories). Request a written specification for the particular combination rather than mixing features from different catalog images.\n\n## Keep the price comparison like for like\n\nRequest the same quantity and delivery scope for each proposal. Ask suppliers to separate changes in the box construction, insert, finish, ribbon and packing work. If one option is quoted flat and another assembled, have that difference explained before comparing totals.\n\nChoose the version that meets the project\u2019s agreed requirements. If the ribbon arrangement is important to the design, approve it on the assembled sample. If repeated opening matters, agree on the review method for the actual sample rather than making an unsupported durability claim.\n\n## Prepare the comparison request\n\nFor a [gift packaging application](https://elapack.com/industries/?sector=Gift), send the product dimensions, desired presentation, order quantity and packing arrangements. [Contact ELAPACK](https://elapack.com/contact/) with the two constructions you want to compare and identify any requirement that needs sample or test evidence."
  },
  {
    "slug": "compare-multi-component-gift-set-packaging-quotes",
    "datePublished": "2026-10-06",
    "dateModified": "2026-10-07",
    "title": "How to Compare Packaging Quotes for a Multi-Component Gift Set",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "5 min read",
    "image": "/gift-set-packaging-quote-checklist.png",
    "imageAlt": "Gift set packaging quote checklist for components quantities assembly and exclusions",
    "imageWidth": 1080,
    "imageHeight": 1080,
    "fontFamily": "Arial",
    "excerpt": "Compare gift-set quotations component by component, with quantities, assembly responsibilities and exclusions kept visible.",
    "metaDescription": "Build a component-by-component gift-set quote comparison. Check quantities, assembly responsibilities, sample revisions and exclusions before approving an order.",
    "body": "Before comparing prices for a gift set, write down exactly what one finished set contains. Ask each supplier to quote that same component list and identify any exceptions. This guide focuses on coordinating the parts of a set, not on a monthly subscription-box budget or a published price range.\n\n## Build a bill of materials\n\n![Gift set quoting structure: bill of materials, counted versions and named assembly responsibilities](/charts/gift-set-bill-of-materials.svg)\n\nUse a bill of materials, which lists the required components and quantities, to describe the pack. Include the presentation box, insert, pouch, ribbon, card and outer packing only where your project needs them. Mark anything you will supply yourself.\n\nUse [complete packaging sets](https://elapack.com/products/?category=Sets%20%26%20Complete%20Packaging) as a starting point, then specify individual [custom boxes](https://elapack.com/products/?category=Boxes) and [pouches and bags](https://elapack.com/products/?category=Pouches%20%26%20Bags). Do not treat every object in a product photograph as included in one quoted unit.\n\n## Count what goes into each version\n\nIf your gift range has several versions, create a separate column or row for each. Ask suppliers to state how their quoted quantities are split by size, color and artwork. Do not assume that a combined total meets every component\u2019s order requirement.\n\n| Worksheet field | What to enter |\n|---|---|\n| Component and version | A unique name for the part, size and design |\n| Units per finished set | The number required for that version |\n| Finished-set quantity | The intended number of that version |\n| Component quantity | Units per set \xD7 finished-set quantity, plus separately agreed spares |\n| Supply responsibility | Your company, this supplier or another supplier |\n| Approval reference | Specification and sample revision to be quoted |\n\nKeep spare components in their own line rather than hiding them inside the set count. If a quotation supplies different quantities of boxes and pouches, ask how many complete sets those quantities produce and what remains unassembled. The worksheet is an arithmetic tool, not a recommendation to order a fixed overage.\n\n## Name the assembly responsibilities\n\n[Assemblies Unlimited's gift-set service](https://www.assemblies.com/gift-set-assembly/) lists material sourcing and kit assembly as part of its offering. This is a supplier example of the work that can sit around the components themselves, not a statement that ELAPACK includes those services. Use it to distinguish buying the parts from buying a completed assembly.\n\nSpecify who will insert the product, attach tags, tie ribbons and pack the finished sets. If the goods will be assembled at your warehouse, request the shipping arrangement for the loose components. If a supplier will assemble them, ask what work and materials the quoted assembly line includes.\n\nFor example, a [ribbon gift box](https://elapack.com/products/luxury-gift-box-ribbon/) can be a reference for a discussion about the ribbon arrangement. Confirm the actual ribbon, tie, insert and assembly details in your proposal rather than assuming the catalog reference settles them.\n\n## Distinguish component costs from shipment costs\n\nAsk for a packing list alongside the component quotation: cartons, contents per carton, outside dimensions and gross weights. State whether these figures describe loose parts or completed sets, so the shipment being quoted matches the assembly responsibility you agreed.\n\n| Quote field | Required basis |\n|---|---|\n| Component production | Quantity and specification per part |\n| Assembly | Operations and supplied materials included |\n| Shipment | Carton contents, dimensions, weights and quoted service |\n| Complete-set count | Components required per set, excluding separately listed spares |\n\nKeep component, assembly and delivery totals separate until each scope is confirmed. A quotation for loose components and one for assembled sets need that reconciliation before their totals are useful for a purchasing decision.\n\n## Put inclusions and exclusions side by side\n\nPlace setup, sampling, production, assembly and delivery in separate rows. Ask each supplier to mark \u201Cincluded,\u201D \u201Cseparately charged\u201D or \u201Cnot supplied.\u201D An empty row should remain a question until answered, not become a zero in your budget.\n\nIf you request a lower-cost alternative, ask which component or operation changes. Review whether it still fits the rest of the set before accepting the revised total. Keep the original and revised quotation identifiers so the chosen version is unambiguous.\n\n## Approve the set as an assembly\n\nRequest a review of the complete proposed assembly, with any unavailable customer-supplied item clearly identified. Record the loaded fit, placement of printed items and the closing arrangement. If one component is changed afterwards, decide whether another assembly review is needed.\n\nRetain the final component list with the approved sample references. For a future reorder, start from that version and list only the requested changes; ask the supplier to confirm any other proposed substitutions.\n\n## Send the component list with your enquiry\n\nFor a [gift packaging project](https://elapack.com/industries/?sector=Gift), [contact ELAPACK](https://elapack.com/contact/) with the list of components, quantities by version, product dimensions and delivery destination. Identify who will perform assembly and which items are still undecided so the quotation can address those gaps."
  },
  {
    "slug": "how-to-choose-a-custom-jewelry-pouch",
    "datePublished": "2026-09-27",
    "title": "How to Choose a Custom Jewelry Pouch: Fabric, Size, Closure and Branding",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/covers/how-to-choose-a-custom-jewelry-pouch.webp",
    "imageAlt": "Guide cover card: the pouch is the jewellery's first room \u2014 fabric, closure and branding for custom jewellery pouches",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A pouch chosen by look alone is a guess. Map your piece and brand bar to fabric, size, closure and branding before you compare quotes.",
    "metaDescription": "Learn how to choose a custom jewelry pouch by fabric, size, closure and branding \u2014 and prepare the specs to send for a quote.",
    "body": "*Fabric, print and sizing guidance in this guide is generic industry knowledge. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at jewelry labels who want custom pouches \u2014 for rings, necklaces, earrings, bracelets or small gift pieces \u2014 and need to choose them before they request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A pouch chosen by look alone is a guess; the fabric, size, closure and branding have to fit the piece and the print.** Work through the four decisions below and you will finish with a pouch shortlist and the spec list to send for a quote.\n\n## Why pouches picked by look alone go wrong\n\nA custom pouch has four jobs: it has to hold the piece safely, survive the presentation, carry your branding well, and feel right in the hand. Each job maps to a decision \u2014 fabric, size, closure, branding \u2014 and when a pouch is picked by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a jewelry brand adds branded pouches to their line.\n2. They order pouches chosen by look, then find the fabric pills, the size does not fit the piece, or the logo prints poorly.\n3. **Without mapping the piece and the brand bar to the pouch specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong pouch means re-sampling, re-ordering, or an unboxing that misses the brand bar.\n5. The rework can delay a launch or leave stock that does not match the brand.\n6. The task on this page is to map the piece and brand to fabric, size, closure and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for the pouch you actually need.\n\n## Four decisions that choose your pouch\n\n![Four decisions that choose a jewelry pouch: fabric, size, print and closure, in the order a supplier can quote against](/charts/jewelry-pouch-four-decisions.svg)\n\n**Map the piece and the brand bar to the fabric, size, closure and branding before you compare quotes.** Each decision below ends with the question your piece has to answer.\n\n### Fabric\n\nThe first decision is the material. The main families are: [velvet](https://elapack.com/products/custom-velvet-pouches/) and suede, which read plush and premium and suit rings and pendants presented as gifts; cotton, [muslin](https://elapack.com/products/custom-muslin-drawstring-pouch/) and linen, which read natural and understated and take print crisply; [satin](https://elapack.com/products/custom-satin-pouches/), which reads smooth and dressy against fine jewellery; and non-woven or microfiber, which read practical and economical for volume or retail use. The question from your side is which hand-feel and durability your brand needs, and how the fabric takes your print \u2014 a delicate logo needs a smooth, tight-weave surface, while a deep emboss or foil needs a fabric that holds the treatment. A supplier that works across this full range \u2014 velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, plus custom developments \u2014 lets you match the material to the piece instead of forcing the piece into one house fabric.\n\n### Size\n\nThe second decision is the fit. A pouch that is too small distorts the piece and the closure; one that is too large lets the piece rattle and looks sloppy at unboxing. Measure the piece and choose a pouch size with a little room \u2014 and remember the size also affects cost and the minimum order, so settle the size range before you ask for pricing. As a working reference, jewellery pouches commonly land in three bands: 7\xD79 and 8\xD710 cm for rings, stud earrings and slim pendants; 10\xD712 cm for larger pendants, bracelets and small gift pieces; and 12\xD715 cm upward when a piece ships with a box, a card or extra presentation. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec, not by eye from a product photo.\n\n### Closure\n\nThe third decision is how the pouch closes. A drawstring is classic and easy to open; a zipper is more secure and suits repeat use; a flap, tuck or button closure is minimal and clean for presentation. The question is what the piece needs and what you want the unboxing to feel like \u2014 a heavy piece that will be carried needs a secure closure, while a presentation piece may favour a clean drawstring. Most suppliers offer several closure options and can combine a closure with a specific fabric, so list the closure you want rather than leaving it to the supplier's default.\n\n### Branding\n\nThe fourth decision is how the brand appears. Options include a woven label sewn in, a printed logo, a deboss or foil stamp, embroidery, or a transfer print \u2014 and each suits different fabrics and order sizes. A woven label reads premium and durable; a printed logo is flexible for colour and placement; foil and deboss add a tactile, gift-like finish; embroidery reads heritage and bespoke. The question is what your brand bar requires \u2014 a logo that must be exact and consistent needs a method the fabric can hold across the run \u2014 so confirm the print method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A pouch can pass on fabric and size and still fail on closure or branding, so decide all four before you compare quotes.\n\n## When a pouch that looks right is still wrong\n\n**A fabric or print that looks right in a photo can still pill, shrink or print poorly in production.** Three boundaries keep this page honest:\n\n- A photo does not show hand-feel, weight or how the fabric behaves over time. Ask for a physical swatch or sample of the actual fabric before you commit to a large run.\n- Print and branding behave differently on different fabrics. A logo that is crisp on a smooth cotton can blur on a textured velvet, so confirm the method on the actual material.\n- Size in the product photo is hard to judge. Confirm the finished size in the spec, not by eye from a picture, and check it against your piece.\n\n## Prepare the pouch spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the pouch spec list for your quote request from the piece, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The piece: what it is, its size and weight, and how it will be presented or shipped.\n2. The fabric: velvet, suede, cotton, muslin, satin, linen, microfiber, non-woven or another material, with any colour reference.\n3. The size: the finished pouch size in centimetres that fits the piece with a little room \u2014 from 7\xD79 / 8\xD710 / 10\xD712 cm for most jewellery up to custom sizes.\n4. The closure: drawstring, zipper, flap, tuck, button or another option.\n5. The branding: the logo treatment (woven, printed, deboss, foil, embroidery or transfer), the colour match (for example a Pantone reference), and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two pouches that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "how-to-choose-custom-drawstring-bags",
    "datePublished": "2026-09-27",
    "title": "How to Choose Custom Drawstring Bags: Fabric, Size, Closure and Print",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/covers/how-to-choose-custom-drawstring-bags.webp",
    "imageAlt": "Guide cover card: one closure, many fabrics \u2014 fabric, size and logo choices for custom drawstring bags",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A bag chosen by look alone is a guess. Map your piece and brand bar to fabric, size, closure and print before you compare quotes.",
    "metaDescription": "Learn how to choose custom drawstring or muslin bags by fabric, size, closure and print \u2014 and prepare the specs to send for a quote.",
    "body": "*Fabric, print and sizing guidance in this guide is generic industry knowledge. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at fragrance, gift and retail labels who want custom drawstring or muslin bags \u2014 for perfumes, candles, soaps, small gifts and retail products \u2014 and need to choose them before they request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A bag chosen by look alone is a guess; the fabric, size, closure and print have to fit the product and the print.** Work through the four decisions below and you will finish with a bag shortlist and the spec list to send for a quote.\n\n## Why bags picked by look alone go wrong\n\nA custom bag has four jobs: it has to hold the product safely, survive the presentation, carry your branding well, and feel right in the hand. Each job maps to a decision \u2014 fabric, size, closure, branding \u2014 and when a bag is picked by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a fragrance, gift or retail brand adds branded bags to their line.\n2. They order bags chosen by look, then find the fabric pills, the size does not fit the product, or the logo prints poorly.\n3. **Without mapping the product and the brand bar to the bag specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong bag means re-sampling, re-ordering, or an unboxing that misses the brand bar.\n5. The rework can delay a launch or leave stock that does not match the brand.\n6. The task on this page is to map the product and brand to fabric, size, closure and print, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for the bag you actually need.\n\n## Four decisions that choose your bag\n\n![Drawstring bag brief: fabric and weight, cord channel, closed size and print placement as one construction](/charts/drawstring-bag-anatomy.svg)\n\n**Map the product and the brand bar to the fabric, size, closure and print before you compare quotes.** Each decision below ends with the question your piece has to answer.\n\n### Fabric\n\nThe first decision is the material. The main families are: velvet and suede, which read plush and premium and suit candles, soaps and gift pieces presented as treats; cotton, muslin and linen, which read natural and understated and take print crisply \u2014 [muslin](https://elapack.com/products/custom-muslin-drawstring-pouch/) is the classic drawstring-bag fabric; satin, which reads smooth and dressy for beauty and fragrance gifting; and non-woven or microfiber, which read practical and economical for retail or volume use. The question from your side is which hand-feel and durability your brand needs, and how the fabric takes your print \u2014 a delicate logo needs a smooth, tight-weave surface, while a deep emboss or foil needs a fabric that holds the treatment. A supplier that works across this full range \u2014 velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, plus custom developments \u2014 lets you match the material to the product instead of forcing the product into one house fabric.\n\n### Size\n\nThe second decision is the fit. A bag that is too small distorts the product and the closure; one that is too large lets the product rattle and looks sloppy at unboxing. Measure the product and choose a bag size with a little room \u2014 and remember the size also affects cost and the minimum order, so settle the size range before you ask for pricing. As a working reference, drawstring and muslin bags commonly land in three bands: 7\xD79 and 8\xD710 cm for samples, small soap bars and compact gift items; 10\xD712 and 12\xD715 cm for candles, standard soap bars and mid-size products; and 15\xD720 cm and up for gift sets or products that ship with extra presentation. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec, not by eye from a product photo.\n\n### Closure\n\nThe third decision is how the bag closes. A drawstring is the classic and most common option \u2014 easy to open, soft when gathered \u2014 and can be finished with a cord, a ribbon or a stopper; a zipper is more secure and suits repeat use; a flap, tuck or button closure is minimal and clean for presentation. The question is what the product needs and what you want the unboxing to feel like \u2014 a heavy set that will be carried needs a secure closure, while a presentation piece may favour a clean drawstring. Most suppliers offer several closure options and can pair the closure with the fabric and the cord finish, so name the closure and any cord detail in your spec rather than leaving it to the supplier's default.\n\n### Branding\n\nThe fourth decision is how the brand appears. Options include a woven label sewn in, a printed logo, a deboss or foil stamp, embroidery, or a transfer print \u2014 and each suits different fabrics and order sizes. A printed logo is the most common on muslin and [cotton](https://elapack.com/products/custom-cotton-pouches/); a woven label reads premium and durable; foil and deboss add a tactile, gift-like finish on velvet and suede; embroidery reads heritage and bespoke. The question is what your brand bar requires \u2014 a logo that must be exact and consistent needs a method the fabric can hold across the run \u2014 so confirm the print method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A bag can pass on fabric and size and still fail on closure or branding, so decide all four before you compare quotes.\n\n## When a bag that looks right is still wrong\n\n**A fabric or print that looks right in a photo can still pill, shrink or print poorly in production.** Three boundaries keep this page honest:\n\n- A photo does not show hand-feel, weight or how the fabric behaves over time. Ask for a physical swatch or sample of the actual fabric before you commit to a large run.\n- Print and branding behave differently on different fabrics. A logo that is crisp on a smooth cotton can blur on a textured velvet, so confirm the method on the actual material.\n- Size in the product photo is hard to judge. Confirm the finished size in the spec, not by eye from a picture, and check it against your piece.\n\n## Prepare the bag spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the bag spec list for your quote request from the product, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: what it is, its size and weight, and how it will be presented or shipped.\n2. The fabric: velvet, suede, cotton, muslin, satin, linen, microfiber, non-woven or another material, with any colour reference.\n3. The size: the finished bag size in centimetres that fits the product with a little room \u2014 from 7\xD79 / 8\xD710 cm for small items up through 10\xD712 / 12\xD715 / 15\xD720 cm for standard and gift-size products, to custom sizes.\n4. The closure: drawstring (with cord or ribbon finish), zipper, flap, tuck, button or another option.\n5. The branding: the logo treatment (woven, printed, deboss, foil, embroidery or transfer), the colour match (for example a Pantone reference), and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two bags that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "custom-hair-extension-packaging-guide",
    "datePublished": "2026-09-27",
    "title": "Custom Hair Extension Packaging: How to Choose Bags, Boxes and Bundle Formats",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-hair-extension-packaging-guide.webp",
    "imageAlt": "Guide cover card: show the length, protect the bundle \u2014 formats, materials and sets for hair extension packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Hair packaging chosen by look alone is a guess. Map your hair product and brand bar to format, material, size and branding before you order.",
    "metaDescription": "Learn how to choose custom hair extension and wig packaging by format, material, size and branding \u2014 and prepare the specs for a quote.",
    "body": "*Material, sizing and transit guidance in this guide is generic industry knowledge. Confirm the specifics for your hair product with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at hair, beauty and wig brands who sell [extensions](https://elapack.com/products/custom-hair-extension-boxes/), closures, bundles or full wigs and need custom packaging that protects the hair and carries the brand. It covers choosing the format, material, size and branding before you request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Hair packaging chosen by look alone is a guess; the format, material, size and branding have to fit the product and survive transit.** Work through the four decisions below and you will finish with a packaging shortlist and the spec list to send for a quote.\n\n## Why hair packaging picked by look alone fails\n\nHair products are not all the same to package: a bundle of loose extensions, a weft, a closure and a [full wig](https://elapack.com/products/custom-satin-wig-bag/) each have different shapes, weights and fragility, and each needs packaging that keeps the hair from shifting, tangling or crushing while it also presents the brand. When packaging is chosen by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a hair, beauty or wig brand adds custom packaging to an extensions or wig line.\n2. They order packaging chosen by look, then the hair shifts in transit, the box is the wrong size, or the branding does not hold.\n3. **Without mapping the hair product and the brand bar to the packaging specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong package means re-ordering, damaged returns, or packaging that does not protect the hair or present the brand.\n5. The rework can delay a launch or leave stock that does not match the brand or survive shipping.\n6. The task on this page is to map the hair product and brand to format, material, size and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for packaging that actually protects and presents your product.\n\n## Four decisions that choose your hair packaging\n\n![Hair extension packaging formats: retail box or sleeve, header-card pouch and shipping outer as three separate decisions](/charts/hair-extension-packaging-formats.svg)\n\n**Map the hair product and the brand bar to the format, material, size and branding before you compare quotes.** Each decision below ends with the question your product has to answer.\n\n### Format\n\nThe first decision is the packaging format. A bundle or weft often suits a box or a sleeve with the hair laid flat; a single unit may suit a pouch; a full wig usually needs a sturdier box or a large fabric bag with a support so the cap keeps its shape. Fabric bags are a real option for hair: a wide, tall drawstring pouch holds a wig with room for the cap to keep its shape while still reading soft-touch, and is lighter and less bulky to ship than a rigid box. The question from your side is which format holds your product's shape without crushing it, and fits how your customers will receive and store it.\n\n### Material\n\nThe second decision is the material. A fabric pouch or bag (velvet, cotton, muslin, satin, linen, non-woven, microfiber or a soft synthetic) suits a lower-cost, soft-touch presentation; a rigid box or a paperboard sleeve suits a more premium, protective presentation. The question is what your product needs \u2014 a wig cap that must keep its shape needs structure, while a bundle that sits flat may be fine in a padded pouch \u2014 and what your brand bar expects from the hand-feel. For a full wig in a bag, the fabric has to be strong enough to hold the weight without stretching out of shape, so confirm the material and construction for the finished size before you commit.\n\n### Size\n\nThe third decision is the fit. Hair that is packed too tightly can tangle or crease; a box or bag that is too large lets a wig shift and lose its shape. Measure the product in its selling form \u2014 a wig on a stand or folded, a bundle coiled \u2014 and choose a size that holds it without crushing, remembering that size also drives cost and minimum order. As a working reference, hair packaging commonly lands in three bands: 7\xD79 and 8\xD710 cm for small accessories like closures and combs; 12\xD715 and 15\xD720 cm for bundles and wefts laid flat; and 16\xD723, 20\xD730 and 30\xD740 cm for full wigs or sets that need height and room. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec against your actual product.\n\n### Branding\n\nThe fourth decision is how the brand appears. Woven labels, printed logos, foils, deboss, embroidery and transfer prints each read differently on fabric versus board, and each has different minimums and cost. On a fabric bag, a woven label or a printed logo are the common choices; foil and deboss add a premium finish on velvet and suede. The question is what your brand bar requires and which surface your chosen format gives you to carry it, so confirm the print or label method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A format can look right and still fail on material or size, so decide all four before you compare quotes.\n\n## When packaging that looks premium is still wrong\n\n**Packaging that looks premium in a photo can still let hair shift in transit or fail the branding if the material is wrong.** Three boundaries keep this page honest:\n\n- A photo does not show how the product sits inside, how the material behaves, or whether the packaging survives shipping. Ask for a physical sample with your actual product before a large run.\n- Wigs and bundles need different protection. A package that works for a flat bundle can crush a wig cap, so test the format with the real product, not a generic assumption.\n- Branding behaves differently on fabric versus board. Confirm the label or print method on the actual material, and check the finished size against the product, not by eye.\n\n## Prepare the packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the packaging spec list for your quote request from the product, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: extensions, a closure, a bundle or a full wig \u2014 its size, how it is sold and how it ships.\n2. The format: box, sleeve, pouch or bag, and whether the product needs a support or insert.\n3. The material: fabric (velvet, cotton, muslin, satin, linen, non-woven, microfiber) or board, with any colour reference.\n4. The size: the finished package size in centimetres that holds the product without crushing or shifting \u2014 from 7\xD79 / 8\xD710 cm for accessories up through 16\xD723 / 20\xD730 / 30\xD740 cm for wigs and sets.\n5. The branding: the label or print method (woven, printed, deboss, foil, embroidery or transfer), the colour match, and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two packaging options that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "custom-clothing-apparel-packaging-guide",
    "datePublished": "2026-09-27",
    "dateModified": "2026-10-17",
    "title": "Custom Clothing & Apparel Packaging: Bags and Boxes for Fashion Brands",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-clothing-apparel-packaging-guide.webp",
    "imageAlt": "Guide cover card: packaging is the unboxing \u2014 carrier, branding and sets for clothing and apparel packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Clothing packaging chosen by look alone is a guess. Map your garment and brand bar to format, material, size and branding before you order.",
    "metaDescription": "Learn how to choose custom clothing and apparel packaging by format, material, size and branding \u2014 and prepare the specs for a quote.",
    "body": "*Material, sizing and transit guidance in this guide is generic industry knowledge. Confirm the specifics for your garment with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at fashion, apparel and clothing brands who sell shirts, dresses, knitwear, accessories or other garments and need custom packaging that protects the piece and carries the brand. It covers choosing the format, material, size and branding before you request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Clothing packaging chosen by look alone is a guess; the format, material, size and branding have to fit the garment and survive transit.** Work through the four decisions below and you will finish with a packaging shortlist and the spec list to send for a quote.\n\n## Why clothing packaging picked by look alone fails\n\nGarments are not all the same to package: a folded shirt, a dress that needs to keep its shape on a hanger, a delicate knit and a small accessory each have different needs, and each package has to keep the piece from creasing, crushing or shifting while it also presents the brand. When packaging is chosen by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a fashion or apparel brand adds custom packaging to a [clothing line](https://elapack.com/news/apparel-gift-boxes-guide/).\n2. They order packaging chosen by look, then the garment creases in transit, the bag is the wrong size, or the branding does not hold.\n3. **Without mapping the garment and the brand bar to the packaging specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong package means re-ordering, damaged or creased returns, or packaging that does not present the garment.\n5. The rework can delay a launch or leave stock that does not match the brand or survive shipping.\n6. The task on this page is to map the garment and brand to format, material, size and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for packaging that actually protects and presents your product.\n\n## Four decisions that choose your clothing packaging\n\n![Apparel packaging formats: muslin or cotton bag, kraft mailer and folded shirt box chosen by what the garment must survive](/charts/apparel-packaging-formats.svg)\n\n**Map the garment and the brand bar to the format, material, size and branding before you compare quotes.** Each decision below ends with the question your product has to answer.\n\n### Format\n\nThe first decision is the packaging format. A folded shirt or a knit often suits a box or a mailer with the garment folded and supported; a dress or a piece that must keep its shape may need a garment bag or a box with tissue and a hanger cut-out; accessories suit smaller pouches or rigid boxes. The question from your side is which format holds your product without creasing or crushing it, and fits how your customers receive and store it.\n\n### Material\n\nThe second decision is the material. A fabric bag (velvet, cotton, muslin, satin, linen, non-woven, microfiber or a soft synthetic) reads casual and soft-touch; a rigid box or a paperboard mailer reads more premium and protective. The question is what your garment needs \u2014 a heavy or structured piece needs more support, while a soft knit may be fine in a padded fabric bag \u2014 and what your brand bar expects from the hand-feel. A supplier that works across the full fabric range plus boxes lets you pair the hand-feel with the piece instead of settling for a one-size packaging house.\n\n### Size\n\nThe third decision is the fit. A garment packed too tightly creases; a box or bag that is too large lets the piece shift and wrinkle. Measure the garment in its selling form \u2014 a shirt folded to its retail size, a dress on a hanger, an accessory in its pouch \u2014 and choose a size that holds it without crushing, remembering that size also drives cost and minimum order. As a working reference, accessories packaging commonly lands in three bands: 7\xD79 and 8\xD710 cm for small accessories such as scarves, belts and jewellery cases; 12\xD715 and 15\xD720 cm for mid-size accessories and folded knitwear; and 16\xD723 cm and up for larger pieces, garment bags or pieces that ship with a hanger or extra presentation. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec against the garment.\n\nOne cost the size decision quietly sets is freight, and it belongs in the spec list. Soft formats \u2014 bags and mailers \u2014 ship compressed, so volumetric weight is rarely the driver on this side of the line. The moment a programme adds boxes for gifting or retail floors, the arithmetic changes: garment boxes are among the largest footprints in gift packaging, and set-up rigid boxes ship mostly air on volumetric-rated lanes, while flat-fold and collapsible structures buy that volume back. The [apparel gift boxes guide](https://elapack.com/news/apparel-gift-boxes-guide/) works those numbers \u2014 published size tiers, stock pricing and the CBM math \u2014 so read it before locking a box format into a garment spec.\n\n### Branding\n\nThe fourth decision is how the brand appears. Woven labels, printed logos, foils, deboss, embroidery and transfer prints each read differently on fabric versus board, and each has different minimums and cost. On a fabric bag, a woven label or a printed logo are the common choices; foil and deboss add a premium finish on velvet and suede. The question is what your brand bar requires and which surface your chosen format gives you to carry it, so confirm the print or label method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A format can look right and still fail on material or size, so decide all four before you compare quotes.\n\n## When packaging that looks premium is still wrong\n\n**Packaging that looks premium in a photo can still crease or damage the garment if the material or size is wrong.** Three boundaries keep this page honest:\n\n- A photo does not show how the garment sits inside, how the material behaves, or whether the packaging survives shipping. Ask for a physical sample with your actual garment before a large run.\n- Garments need different support. A package that works for a folded tee can crush a structured dress, so test the format with the real product, not a generic assumption.\n- Branding behaves differently on fabric versus board. Confirm the label or print method on the actual material, and check the finished size against the garment, not by eye.\n\n## Prepare the packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the packaging spec list for your quote request from the garment, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: a folded shirt, a dress on a hanger, an accessory \u2014 its size, how it is sold and how it ships.\n2. The format: box, mailer, garment bag or pouch, and whether the piece needs tissue, a support or an [insert](https://elapack.com/news/packaging-inserts-guide/).\n3. The material: fabric (velvet, cotton, muslin, satin, linen, non-woven, microfiber) or board, with any colour reference.\n4. The size: the finished package size in centimetres that holds the garment without creasing or shifting \u2014 from 7\xD79 / 8\xD710 cm for small accessories up through 15\xD720 / 16\xD723 cm and larger for garment bags.\n5. The branding: the label or print method (woven, printed, deboss, foil, embroidery or transfer), the colour match, and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two packaging options that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "custom-gift-packaging-guide",
    "datePublished": "2026-09-27",
    "title": "Custom Gift Packaging: Bags, Boxes and Gift Sets",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-gift-packaging-guide.webp",
    "imageAlt": "Guide cover card: a gift set is a system \u2014 components, materials and order terms for custom gift packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Gift packaging chosen by look alone is a guess. Map your gift and brand bar to format, material, size and branding before you order.",
    "metaDescription": "Learn how to choose custom gift packaging by format, material, size and branding \u2014 and prepare the specs for a quote.",
    "body": "*Material, sizing and transit guidance in this guide is generic industry knowledge. Confirm the specifics for your gift with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners who create gift packaging \u2014 for beauty, fragrance, jewelry or keepsake products \u2014 and need custom packaging that presents the gift and carries the brand. It covers choosing the format, material, size and branding before you request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Gift packaging chosen by look alone is a guess; the format, material, size and branding have to fit the gift and the brand.** Work through the four decisions below and you will finish with a packaging shortlist and the spec list to send for a quote.\n\n## Why gift packaging picked by look alone fails\n\nGift products are not all the same to package: a beauty set, a fragrance in a bottle, a piece of jewelry and a small keepsake each have different needs, and each package has to hold the gift securely and present it well while it also carries the brand. When packaging is chosen by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a brand adds custom packaging to a gift range.\n2. They order packaging chosen by look, then the gift shifts in transit, the box is the wrong size, or the branding does not hold.\n3. **Without mapping the gift and the brand bar to the packaging specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong package means re-ordering, damaged returns, or packaging that does not present the gift.\n5. The rework can delay a launch or leave stock that does not match the brand or survive shipping.\n6. The task on this page is to map the gift and brand to format, material, size and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for packaging that actually protects and presents your gift.\n\n## Four decisions that choose your gift packaging\n\n![Gift packaging as three layered decisions: outer structure, insert and protection, finish layer](/charts/gift-packaging-layers.svg)\n\n**Map the gift and the brand bar to the format, material, size and branding before you compare quotes.** Each decision below ends with the question your product has to answer.\n\n### Format\n\nThe first decision is the packaging format. A beauty set or a fragrance often suits a rigid or folding box with a custom insert that holds each piece; a [magnetic-closure box](https://elapack.com/products/magnetic-closure-gift-box/) adds a premium, keepsake unboxing; a single item may suit a pouch or a small box with tissue; a keepsake or jewellery piece suits a smaller rigid box or pouch; and a fabric bag \u2014 drawstring or otherwise \u2014 can wrap a gift that does not need structure. The question from your side is which format holds your product without creasing or crushing it, and fits how your customers receive and store it \u2014 and whether a bag, a box or a bag-in-box combination best matches the price point of the gift.\n\n### Material\n\nThe second decision is the material. A fabric bag (velvet, cotton, muslin, satin, linen, non-woven, microfiber or a soft synthetic) reads casual and soft-touch; a rigid box, a magnetic box or a paperboard mailer reads more premium and protective; a rigid or folding box can carry an [interior insert](https://elapack.com/news/packaging-inserts-guide/) to hold a bottle or a set. The question is what your gift needs \u2014 a fragile bottle needs a protective insert, while a soft textile item may be fine in a fabric pouch \u2014 and what your brand bar expects from the hand-feel.\n\n### Size\n\nThe third decision is the fit. A gift packed too tightly can crush or distort; a box or bag that is too large lets the piece shift and look sloppy at unboxing. Measure the gift in its selling form \u2014 a set assembled, a bottle with its insert, a keepsake in its pouch \u2014 and choose a size that holds it securely, remembering that size also drives cost and minimum order. As a working reference, gift packaging commonly lands in three bands: 7\xD79 and 8\xD710 cm for small keepsakes and jewellery; 12\xD715 and 15\xD720 cm for standard gifts, single candles and beauty items; and 16\xD723, 20\xD730 and 30\xD740 cm for gift sets, larger fragrances or items that ship with multiple pieces. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec.\n\n### Branding\n\nThe fourth decision is how the brand appears. Woven labels, printed logos, foils, deboss, embroidery and transfer prints each read differently on fabric versus board \u2014 and foil and deboss are common on rigid and magnetic boxes to lift the brand \u2014 and each has different minimums and cost. The question is what your brand bar requires and which surface your chosen format gives you to carry it, so confirm the print or label method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A format can look right and still fail on material or size, so decide all four before you compare quotes.\n\n## When packaging that looks premium is still wrong\n\n**Packaging that looks premium in a photo can still fail to protect the gift or present the brand if the material or size is wrong.** Three boundaries keep this page honest:\n\n- A photo does not show how the gift sits inside, how the material behaves, or whether the packaging survives shipping. Ask for a physical sample with your actual gift before a large run.\n- Gifts need different support. A package that works for a small item can leave a fragile bottle loose, so test the format with the real product, not a generic assumption.\n- Branding behaves differently on fabric versus board. Confirm the label or print method on the actual material, and check the finished size against the gift, not by eye.\n\n## Prepare the packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the packaging spec list for your quote request from the gift, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: a beauty set, a fragrance or a keepsake \u2014 its size, how it is sold and how it ships.\n2. The format: box (rigid, folding or magnetic), mailer, bag or pouch, and whether the gift needs an insert, tissue or a divider.\n3. The material: fabric (velvet, cotton, muslin, satin, linen, non-woven, microfiber) or board, with any colour reference.\n4. The size: the finished package size in centimetres that holds the gift securely without shifting \u2014 from 7\xD79 / 8\xD710 cm for small keepsakes up through 15\xD720 / 20\xD730 / 30\xD740 cm for gift sets.\n5. The branding: the label or print method (woven, printed, deboss, foil, embroidery or transfer), the colour match, and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two packaging options that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  }
].concat([
  {
    "slug": "how-to-read-a-packaging-specification-sheet",
    "datePublished": "2026-09-27",
    "title": "How to Read a Custom Packaging Specification Sheet: The Specs That Decide Fit",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "7 min read",
    "image": "/images/covers/how-to-read-a-packaging-specification-sheet.webp",
    "imageAlt": "Guide cover card: the spec sheet decides the price \u2014 fields, units and sign-off on a packaging specification",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A packaging specification is a statement about conditions, not a fixed promise. Learn which four specification groups decide fit and where to stop when a condition is missing.",
    "metaDescription": "Learn to read a custom packaging specification sheet in product-and-brand context \u2014 structure, board, finish and compliance \u2014 and complete a local fit check before you compare quotes.",
    "body": "*Example figures and product scenarios in this guide are illustrative, not a promise about any supplier's capability. Confirm every specification against the current sheet from the supplier you are evaluating.*\n\nThis guide shows packaging buyers and brand managers how to read a custom packaging specification sheet, so they can tell whether a construction fits their product and brand before they compare quotes. It is for premium jewelry, fragrance & gift, and hair (wig) brands selling in the US or Europe. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A spec on paper cannot prove the package will protect the product or meet the brand bar; it can only show you what to check and what still has to be confirmed.** Finish the five-line check below and you will have a one-page fit boundary plus the open specifications to raise with your supplier.\n\n## Why the same specification can fit one launch and miss another\n\nA packaging specification is a statement about the conditions a construction was built for, not a fixed fact that holds for every product. When the condition behind a number is missing from your reading, the spec stops telling you whether it fits your launch.\n\n1. A packaging buyer or brand manager receives a custom specification sheet for a new launch or a line extension.\n2. The sheet names the structure, board, finish and material, but it does not state the product weight, the brand-colour tolerance or the unboxing it was built for.\n3. Without those conditions, **the buyer cannot tell whether the specification was built for a product and brand requirement like theirs**.\n4. **A choice made on the finished look alone can require extra sampling rounds, artwork or structural rework, or a production run that misses the brand bar.**\n5. The rework can delay a seasonal or limited launch, which raises the cost of a wrong read.\n6. The task on this page is to map your product and brand requirements to the specification columns and stop at the first specification you cannot confirm.\n\nThe point is not to make the spec sheet look hostile. It is that the reading step, done in the right order, is what separates a quote you can compare from a paper comparison that says nothing about your launch.\n\n## Four specification groups to read in context before you compare quotes\n\n![Packaging spec sheet divided into four groups: materials, structure, print and finish, logistics](/charts/spec-sheet-four-groups.svg)\n\n**Match the spec columns to your product and brand before you compare quotes.** A construction can look right on paper and still sit outside your product weight, your colour tolerance or your compliance requirement. Work down these four groups in order; each one ends with the question your launch has to answer.\n\n### Structure and how the package opens\n\nThe group states the construction family \u2014 a [rigid or set-up box](https://elapack.com/news/custom-rigid-boxes-guide/), a folding carton, a [shopping bag](https://elapack.com/products/kraft-paper-shopping-bag/), a ribbon or textile closure \u2014 and how the package is meant to open and hold its content. The question from your side is whether the structure carries the product and delivers the unboxing your brand wants: a heavy flacon needs a different cavity and base than a light blister card, and a rigid lid that hinges changes the production line as much as the look.\n\n### Board, lining and the hand-feel bar\n\nThe group states the board type and weight (for example, grams per square metre), the lining and the paper sourcing. The question is whether the substrate holds the product's weight and takes the finish you want without losing the hand-feel your brand needs: a heavier board is not automatically better \u2014 it has to suit the size, the closure and the finishing process on the sheet.\n\n### Finish, decoration and colour\n\nThe group states the surface finish (matte, gloss, soft-touch lamination), the decoration (foil, embossing or debossing) and the colour reference the print is matched to. The question is whether the finish and the brand colour are specified with a tolerance the supplier commits to hold across the whole run, because a colour that drifts between batches can break a tightly art-directed launch even when the structure is right.\n\n### Materials and destination compliance\n\nThe group states the material content and any compliance claims the sheet carries \u2014 recycled content, certified paper, inks and coatings \u2014 and the destination rules they are meant to satisfy. The question is which claims your brand or your destination market requires to be verifiable with certificates or documentation, rather than stated on the sheet alone.\n\nRead the four groups together. A construction can pass on structure and board and still fail on colour tolerance or compliance, and that is exactly where the sheet stops talking and your product and brand data has to start.\n\n## Where reading the specification is not enough\n\n**A spec on paper is not a proven package.** Three boundaries keep this page honest:\n\n- The sheet does not cover every production variable. Colour across a full run, the difference between a paper swatch and the produced material, and how the package survives transit can all drift from the page; each needs the supplier to confirm a condition, not a promise printed on the sheet.\n- A construction can also be a genuine mismatch for the launch. If a required specification column is missing and the supplier cannot confirm it, treat that option as not yet evaluated for your product, not as a workable choice.\n- Reading the sheet never replaces sampling. Material and colour approval and a pre-production sample still decide whether the construction holds the brand bar before the run \u2014 this page only narrows the field before those steps.\n\n## Run the five-line fit check before you brief a supplier\n\nNothing on this page collects your data or sends anything. Copy the five lines below into your own note and answer them for the launch you are planning:\n\n1. What is the product \u2014 its size, weight and fragility \u2014 and the launch or quantity window you are planning?\n2. Which structure and unboxing does the product need: a rigid box, a folding carton, a bag, a ribbon or textile closure?\n3. Which brand cues must stay consistent \u2014 the colour reference, the finish, the logo treatment \u2014 and what tolerance is acceptable?\n4. Which material or compliance requirements apply \u2014 recycled content, certified paper, coatings \u2014 and which must be verifiable, not just printed?\n5. Which specification is still open \u2014 the one the sheet does not state and you cannot confirm yourself?\n\nWhen line 5 has an answer, you have finished the reading task this page owns: a completed fit boundary and one open specification to confirm. Keep the note local, and raise that open specification with your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified.\n\nYour next step, once the reading is done, is the comparison task: putting two constructions that both pass your fit check side by side on the same dimensions. That is a separate page for a separate decision, and it starts from the specification columns you have now filled in."
  },
  {
    "slug": "packaging-colour-tolerance-explained",
    "datePublished": "2026-09-27",
    "dateModified": "2026-10-07",
    "title": "How to Review Colour Across Boxes, Pouches and Ribbons",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "5 min read",
    "image": "/packaging-colour-matching-checklist.png",
    "imageAlt": "Packaging colour matching workflow for boxes pouches and ribbons",
    "imageWidth": 1080,
    "imageHeight": 1080,
    "fontFamily": "Arial",
    "excerpt": "Review colour across boxes, pouches and ribbons using identified references, agreed viewing conditions and component-level approvals.",
    "metaDescription": "Agree on colour references, viewing conditions and component approvals for boxes, pouches and ribbons without assuming one universal tolerance.",
    "body": "If a box, pouch and ribbon are meant to work as one packaging set, agree on the colour relationship before approving the components. Decide whether they should closely match, form a tonal group or deliberately contrast. Then record the references and review conditions for that decision.\n\n## Give each component an identifiable reference\n\n![Colour mismatch judged in order: identifiable references, agreed lighting, comparison as a set, written acceptance](/charts/colour-tolerance-judge-flow.svg)\n\nPrepare a short colour brief for the [box](https://elapack.com/products/?category=Boxes), [pouch](https://elapack.com/products/?category=Pouches%20%26%20Bags) and [ribbon or accessory](https://elapack.com/products/?category=Ribbons%20%26%20Accessories). Name the proposed material and finish, attach the design reference and identify the physical sample to be reviewed when available.\n\nIf your brief begins with a colour code or digital artwork, ask what sample will represent the finished component for approval. Keep the reference, supplier sample and final decision linked by an identifier; avoid approving an unnamed photograph that cannot later be tied to a specific sample.\n\n## Agree on lighting before judging a mismatch\n\nDatacolor explains that two samples may match under one light source and differ under another. This is called metamerism. Its guidance also distinguishes controlled visual assessment from instrument measurement; both have a role in a colour workflow. See [Datacolor\u2019s guide to light sources and colour evaluation](https://www.datacolor.com/business-solutions/blog/what-you-need-to-know-about-light-sources-and-color-evaluation/).\n\nFor your project, agree on the principal viewing conditions and any additional environment that matters to the intended presentation. Ask the supplier to describe how it will carry out the comparison. If the proposed review conditions cannot be reproduced by both sides, resolve that limitation before using the review as an acceptance requirement.\n\n## Separate a lighting change from a sample mismatch\n\n[Datacolor distinguishes two observations](https://www.datacolor.com/business-solutions/blog/what-you-need-to-know-about-light-sources-and-color-evaluation/): flare is a single material's appearance changing under different lights; metamerism is two samples matching under one light but not another. The distinction makes feedback more specific.\n\n| Observation | What to record |\n|---|---|\n| One material changes appearance between lights | Its reference and both defined light sources |\n| Two materials match in one light but not another | Both sample IDs and the two light sources |\n| Samples differ under the agreed primary light | The reference, material and observed difference before diagnosing a cause |\n\nThe last row is a suggested review step, not a diagnosis. Do not label every visible difference \u201Cmetamerism,\u201D and do not invent a numerical tolerance from a photograph.\n\n## Compare the finished components as a set\n\nOnce individual samples are ready, place the proposed box, pouch and ribbon together in their intended arrangement. Compare each component to its own reference, then review the overall relationship. Record whether you are accepting a close match, a tonal difference or an intentional contrast.\n\nA [ribbon gift box](https://elapack.com/products/luxury-gift-box-ribbon/) can serve as a format reference when discussing where the ribbon sits against the box. It is not evidence that every proposed material combination will match. Ask to review the actual materials selected for your order.\n\n## Write down what \u201Cacceptable\u201D means\n\nDo not insert a universal numerical colour tolerance into the order without agreement. If instrumental measurements are part of acceptance, ask a qualified supplier or colour specialist to specify the method, settings, reference and limits suitable for the proposed components. Do not compare figures without knowing how they were obtained.\n\n| Approval record | What to keep |\n|---|---|\n| Component | Part name, proposed material and finish |\n| Reference | Identifiable physical standard or agreed reference |\n| Viewing conditions | Lighting and review arrangements agreed by both sides |\n| Measurement, if required | Method, settings and acceptance limits agreed for the project |\n| Visual decision | Match, tonal relationship or contrast accepted |\n| Exceptions | The specific difference accepted, or the revision required |\n| Version | Sample identifier, decision date and approver |\n\nTreat an approved exception as applying to that recorded version. If the material, finish or component supplier changes, ask whether the colour review needs to be repeated instead of carrying the previous approval forward without checking.\n\n## Make feedback actionable\n\n### Reopen approval when the reference conditions change\n\n[Datacolor's guidance on digital colour communication](https://www.datacolor.com/business-solutions/blog/keys-reliable-digital-color-communication/) explains why a clear standard and reliable measurement conditions matter when colour data moves between suppliers. A numerical result needs its reference and method; an isolated value is not an approval record.\n\nFor your project, use the following change log to decide what to review again. These are proposed approval steps, not a claim about ELAPACK equipment or a mandatory industry tolerance.\n\n| Proposed change | Approval item to revisit |\n|---|---|\n| Paper, fabric or ribbon reference changes | The finished component against its agreed reference |\n| Coating or finish changes | The component's appearance under the agreed lighting |\n| Measurement method or settings change | Whether the new result can be compared with the recorded result |\n| One component changes after set approval | Its relationship with the other approved components |\n\nIf a sample is unsuitable, identify the component, reference and viewing conditions in the feedback. Describe the difference you observed and request a revised sample. Avoid a vague instruction such as \u201Cmake it more premium,\u201D which does not state the intended colour change.\n\nTo discuss coordinated packaging, [contact ELAPACK](https://elapack.com/contact/) with the component list, colour references and intended [gift presentation](https://elapack.com/industries/?sector=Gift). Indicate which samples or review conditions still need to be agreed before production approval."
  },
  {
    "slug": "how-to-customize-eyelash-boxes",
    "datePublished": "2026-10-01",
    "title": "How to Customize Your Eyelash Boxes: Formats, Inserts, Print and Quantity",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/how-to-customize-eyelash-boxes.webp",
    "imageAlt": "Guide cover card: small box, many formats \u2014 formats, inserts and order terms for custom eyelash boxes",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A lash box copied from a photo is a guess. Customize from the tray outward \u2014 format, structure, insert, print, quantity \u2014 before you brief a supplier.",
    "metaDescription": "Learn how to customize eyelash boxes step by step \u2014 tray format, box structure, inserts, print finishes and MOQ planning \u2014 before you request a quote.",
    "body": "*Format, print and sizing guidance in this guide is generic industry knowledge. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for lash brand owners, salon buyers and wholesalers who are customizing eyelash boxes \u2014 a first run, a rebrand or a wholesale pack \u2014 and need to brief a supplier without wasting sampling rounds. It covers the five decisions that define a custom lash box: the tray format, the box structure, the insert, the print program and the quantity plan. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A lash box customized from a photo reference is a guess; the box has to be built around the tray, the shelf and the brand, in that order.** Work through the five decisions below and you will finish with a customization brief ready to send for samples and quotes.\n\n## Why lash boxes customized from a photo disappoint\n\nA [custom eyelash box](https://elapack.com/products/custom-eyelash-packaging-boxes/) does a double job: it holds the lash tray securely in transit and on the shelf, and it sells the shade and style system at first sight. When the box is copied from a photo instead of built from your tray, one of those jobs usually fails.\n\n1. A lash brand orders boxes customized to match a competitor photo or a marketplace template.\n2. The boxes arrive and the trays rattle, the lid presses on the lashes, or the printed layout sits over the wrong row.\n3. **Without mapping your trays and your retail context to the box specs, the customization is guesswork and quotes are not comparable.**\n4. A wrong box means re-sampling, re-cutting the insert, or retail stock that cannot go on shelf.\n5. The rework can delay a launch or a wholesale commitment, which raises the cost of a wrong brief.\n6. The task on this page is to map your trays and brand to structure, insert, print and quantity, and prepare the brief for a quote.\n\nThe fix is not a better photo. It is a brief that starts from the tray and works outward.\n\n## Five decisions that customize your lash box\n\n![Five decisions that customize an eyelash box: format, tray, size, print and order quantity](/charts/lash-box-five-decisions.svg)\n\n**Customize from the tray outward \u2014 format, structure, insert, print, quantity \u2014 before you compare quotes.** Each decision below ends with the question your line has to answer.\n\n### Start from the tray format\n\nThe tray decides the box, not the other way round. Measure the lash tray or pair card exactly \u2014 length, width and the height of the tray with lashes seated \u2014 and count how many trays one box must hold. As a working reference, stock lash formats commonly land near 14\xD710\xD76 cm for single-tray retail boxes, 15\xD715\xD75 cm for square multi-pair formats and 20\xD718\xD78 cm for wholesale display packs; anything outside those bands is fully custom. The question your line has to answer: how many trays per box, and does the box also carry accessories \u2014 glue, tweezers, an applicator \u2014 that need their own wells?\n\n### Choose the box structure\n\nThe structure follows the selling moment. A sleeve suits single-pair direct-to-consumer mailers; a tray-and-lid or flip-top box suits retail counters where the box is handled; a magnetic flip-top adds the premium open-close ritual for flagship lines; a tall display pack suits wholesale. The question: where does the box live \u2014 in a mailer, on a shelf, or in a display \u2014 and how often is it opened before purchase?\n\n### Specify the insert\n\nThe insert is what actually holds the lashes. [Fitted inserts](https://elapack.com/news/packaging-inserts-guide/) cut to the tray profile keep trays seated in transit and stop the rattle that reads as cheap; looser universal pockets cost less but let trays shift. Decide glued-in or loose, and whether accessory wells are part of the same insert tooling. The question: what happens to the box when it is dropped, and is that acceptable at your price point?\n\n### Plan the print and finish\n\nThe wrap carries the brand. Full-colour offset print covers the shade system and artwork edge to edge; foil stamping lifts a logo; embossing adds quiet relief; spot UV accents a pattern under shop light; inside-lid printing carries instructions or a brand line at the opening moment. The question: which two techniques carry the brand \u2014 and does the finish survive handling at retail, not just the photo?\n\n### Plan quantity and the run\n\nCustomization is priced per run, so quantity planning is part of the brief. Printing plates and cutting dies are set up once per design, which is why minimums exist; a low-MOQ supplier lets a first run act as a market test before the reorder. Check whether the minimum is per design or per SKU \u2014 one structure printed for several shade variants usually shares tooling but not always the minimum \u2014 and plan the first order around your fastest-moving shades. The question: how many pieces does the test need to be meaningful, and which variants earn the first run?\n\n## When customization cannot fix the problem\n\n**Some failures are decided before the box is ever customized.** Three boundaries keep this page honest:\n\n- A photo cannot tell you the internal clearance. The tray-to-lid gap has to be confirmed from a physical tray and sample, not from a product image.\n- Print proofs drift. A colour approved on screen can sit differently on the produced wrap; confirm the colour match on a printed sample of the actual board before the run.\n- Inserts are cut to a tolerance. A tray that measures fine on paper can sit loose if the insert is cut to a generic profile rather than yours; the sample should be checked with the real tray inside.\n\n## Prepare the customization brief\n\nNothing on this page collects your data or sends anything. Copy the six lines below into your own note and fill them for the line you are launching:\n\n1. The tray: dimensions, trays per box, and the accessories that ride along.\n2. The structure: sleeve, tray-and-lid, flip-top, magnetic or display pack \u2014 and where the box lives.\n3. The insert: fitted to the tray profile or universal, glued or loose, with or without accessory wells.\n4. The print: artwork coverage, the one or two finishes that carry the brand, and inside-lid printing if wanted.\n5. The quantity: first-run size, per design or per SKU, and the variants that earn the first run.\n6. The open spec: the one line above you cannot answer yet \u2014 that is the question for your supplier.\n\nKeep the note local, and send the brief to your supplier through your existing approved contact process. Your next step, once the brief is filled, is the sampling decision \u2014 approving a printed sample against the wrap and the real tray before the run \u2014 which is a separate step for a separate day."
  },
  {
    "slug": "hair-extension-packaging-ideas",
    "datePublished": "2026-10-01",
    "title": "Hair Extension Packaging Ideas: Formats and Materials for Bundles, Wefts and Wigs",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/hair-extension-packaging-ideas.webp",
    "imageAlt": "Guide cover card: package the transformation \u2014 bundles, wefts and set formats for hair extension packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Packaging ideas only count when they fit the format you sell \u2014 bundle, weft, closure or full wig \u2014 and survive transit. Eight ideas that scale.",
    "metaDescription": "Hair extension packaging ideas by product format \u2014 sleeve, drawer and magnetic boxes for bundles, satin wig bags, cotton envelope pouches and complete programs.",
    "body": "*Format and material guidance in this guide is generic industry knowledge. Confirm the specifics for your hair product with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at hair, beauty and wig brands who are looking for hair extension packaging ideas \u2014 and need ones that fit the format they actually sell, not ones that merely photograph well. It groups eight proven ideas by the job they do, and ends with the spec list that turns a shortlist into a quote. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **An idea is only worth adopting if it fits the format you sell \u2014 bundle, weft, closure or full wig \u2014 and survives transit.** Read the ideas against your own line and you will finish with a shortlist and the specs to send.\n\n## Why idea lists mislead\n\nHair products punish generic packaging. A bundle lies flat, a closure is small and stiff, a weft hangs, and a wig has a cap that must keep its shape \u2014 yet most packaging galleries show the same flat-lay box regardless of what is inside.\n\n1. A hair brand picks a packaging idea from a gallery or a competitor feed.\n2. The order arrives and bundles shift in the box, the wig cap crushes, or the length-shade system is invisible at retail.\n3. **Without matching the idea to the product format and the selling context, the choice is decoration, not packaging.**\n4. A wrong format means re-ordering, damaged returns, or a shelf presentation that hides the system buyers shop by.\n5. The rework can delay a seasonal launch or a salon rollout, which raises the cost of a pretty picture.\n6. The task on this page is to filter the ideas against your format, your channel and your brand bar, and prepare the specs for a quote.\n\nThe fix is not more scrolling. It is running every idea through three filters: the format, the channel, the brand bar.\n\n## Eight ideas that fit how hair is actually sold\n\n![Eight hair packaging formats grouped by their job: presentation, protection and replenishment](/charts/hair-packaging-eight-formats.svg)\n\n**Grouped by job: boxes for the retail moment, fabric for the after-sale, and programs that tie them together.** Each idea ends with what to confirm.\n\n### Ideas 1\u20133: box formats for bundles and sets\n\n1. **The sleeve box for single bundles.** A printed sleeve over a fitted inner keeps one bundle flat and presents the length and shade on the face \u2014 the workhorse format for [extension lines](https://elapack.com/products/custom-hair-extension-boxes/) sold per bundle. Confirm the inner support: a sleeve alone can crush; with a tray it holds.\n2. **The drawer box for multi-bundle sets.** A drawer layers three to six bundles in separate bays, each held so hair cannot tangle across bundles \u2014 the format for curated sets and gifting. Confirm the drawer pull and the bay count against your bundle widths.\n3. **The magnetic flip-top for flagship programs.** The slow-close lid adds ceremony to premium lines and re-closes for storage after the first use. Confirm the insert: hair needs holding without pressing \u2014 soft or satin-lined bays, not hard edges.\n\n### Ideas 4\u20136: fabric carriers for the after-sale\n\n4. **The [satin drawstring wig bag](https://elapack.com/products/custom-satin-wig-bag/).** Smooth satin lets fibers slide instead of snagging, and a wide, tall cut \u2014 30\xD740 cm is the working standard \u2014 gives the cap room to keep its shape. The default after-sale carrier for wig lines. Confirm the fabric is strong enough at your size to hold the weight without stretching.\n5. **The cotton envelope pouch.** A structured cotton carrier with a flap-and-snap closure gifts beautifully and carries bundles, accessories and after-care kits alike. Confirm the style: flap-snap envelopes, open flat pockets and zip-envelope versions serve different uses.\n6. **The zip envelope for travel and salon use.** The zippered cotton format secures a folded wig or a bundle kit for travel \u2014 the format salon professional lines run as their everyday carrier. Confirm the zipper quality; it is the part that wears first.\n\n### Ideas 7\u20138: program-level ideas\n\n7. **The length-shade print program.** One structure across the line, with the wrap printed to your length and shade system \u2014 inch ladders, shade families, care icons \u2014 so the shelf reads as one system. Confirm how the system extends when you add a length.\n8. **The bag-in-box complete program.** Box for the retail moment, satin or cotton bag for the after-sale, matched in colour and branding and quoted as one program \u2014 the format that turns two purchases into one. Confirm both pieces share the same Pantone references and label placement.\n\n## When an idea that photographs well still fails\n\n**A flat-lay photo hides the three failures that decide the reorder.** Three boundaries keep this page honest:\n\n- A photo does not show what happens in transit. Hair shifts, caps crush and drawers pop; test the format with the real product, packed as it ships.\n- A photo does not show the fabric in hand. Satin weight and cotton weave decide whether the bag reads premium or disposable; ask for a physical sample.\n- A photo does not show the system at retail. The length-shade presentation has to be legible from a distance and consistent across every SKU on the shelf.\n\n## Turn the shortlist into a spec list\n\nNothing on this page collects your data or sends anything. Copy the five lines below into your own note and fill them for your line:\n\n1. The format: bundle, weft, closure or full wig \u2014 and how it is packed when it ships.\n2. The idea shortlist: which box format, which fabric carrier, and whether they run as one program.\n3. The material and colour: board or fabric spec, and the Pantone references both pieces share.\n4. The branding: print, foil, woven label or embroidery \u2014 and where each sits.\n5. The open spec: the line above you cannot answer yet \u2014 that is the question for your supplier.\n\nKeep the note local, and send the specs through your existing approved contact process. Your next step, once the shortlist is a spec list, is the sampling decision \u2014 testing the format with the real product inside \u2014 which is a separate step for a separate day."
  },
  {
    "slug": "custom-packaging-moq-oem-odm-logo-guide",
    "datePublished": "2026-10-01",
    "title": "Custom Packaging MOQs, OEM vs ODM and Logo Techniques Explained",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-packaging-moq-oem-odm-logo-guide.webp",
    "imageAlt": "Guide cover card: MOQ, OEM, ODM in plain words \u2014 minimums, working modes and logo techniques explained",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Three terms decide what you can order, who owns the design, and whether your logo survives the run. Read them before your first quote.",
    "metaDescription": "Custom packaging MOQs explained \u2014 why minimums exist, how 200-piece runs work \u2014 plus OEM vs ODM vs white label and logo techniques by surface.",
    "body": "*MOQ, OEM/ODM and logo-technique explanations in this guide are generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm every term with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at small and mid-size brands who keep hitting the same three terms in every custom packaging conversation \u2014 the MOQ, the OEM/ODM choice, and the logo technique \u2014 and need to read all three before the first quote. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **These three terms decide what you can order, who owns the design, and whether your logo survives the run.** Read the three sections below and you will finish with a one-line answer to each, ready for the quote conversation.\n\n## What an MOQ is and why it exists\n\nA minimum order quantity is the quantity at which a production run makes economic sense for the factory \u2014 not a negotiation anchor. Custom packaging carries setup work that happens once per design regardless of quantity: printing plates and press makeready for boxes, cutting dies for inserts, dyeing lots for fabric, sewing-line setup for pouches. The MOQ is where that fixed setup amortizes enough that the unit price works on both sides.\n\nThree practical consequences follow:\n\n- **Unit price falls with quantity, and the first tier is the steepest.** The gap between a 200-piece and a 500-piece price is proportionally larger than the gap between 2,000 and 5,000; the setup cost is being spread over fewer pieces.\n- **A low MOQ changes what packaging is for.** When the minimum is high \u2014 1,000 pieces and up is common on boxes \u2014 packaging is a stocking decision made once per season. When it is low, packaging becomes a testing decision: launch a line, read sell-through, reorder the winner and retool the loser. As a confirmed trade term of ours, ELAPACK runs MOQ from 200 pieces on bags and boxes alike, with 15\u201320 day production \u2014 the model this section describes.\n- **The number that matters is per what.** Confirm whether the MOQ is per design, per SKU or per colour variant. One structure printed across three shades may share tooling and minimum, or may not; this single line changes what a multi-variant launch actually costs, more than the headline number does.\n\n## OEM vs ODM vs white label\n\n![OEM, ODM and white label compared by who owns the design and what can be changed](/charts/oem-odm-white-label.svg)\n\nThe three cooperation models differ in who owns the design and what each side owes the other.\n\n- **OEM \u2014 you own the design.** You bring the [dieline](https://elapack.com/news/die-cutting-and-dielines-guide/), the structure, the artwork; the factory manufactures to it. You get exactly the package you specified and you keep the design; in exchange, you owe precise, complete specifications, and the sampling rounds are where your spec gets proven.\n- **ODM \u2014 the factory owns the design, you customize it.** The factory's existing structure is adapted to your size, colour and logo placement. Setup is faster and cheaper because the design work exists; the trade-off is that the structure is not exclusively yours \u2014 check what exclusivity, if any, your volume buys, and what happens to your customizations if you leave.\n- **White label \u2014 no design at all.** A stock product with your logo applied. The lowest barrier and the least differentiation; the brand lives only in the mark.\n\nWhat to confirm regardless of model: who owns the dielines and artwork produced during the project, whether your customized version can be sold to anyone else, and what the re-order terms are once tooling exists. These questions are cheaper to ask before the first PO than after it.\n\n## Logo techniques by surface\n\nThe logo technique is chosen by the surface before the brand book. The same mark reads \u2014 and holds \u2014 differently on fabric and on board.\n\n**On fabric pouches and bags:**\n\n- **Silkscreen print** \u2014 crisp and economical; the default on cotton, [muslin](https://elapack.com/products/custom-muslin-drawstring-pouch/) and satin, single to multi-colour against a colour reference.\n- **Heat transfer** \u2014 full-colour coverage where the artwork needs gradients or photography.\n- **Woven label** \u2014 the premium, durable option; reads as garment-grade branding stitched in.\n- **Embroidery** \u2014 heritage and bespoke; sits especially well on textured weaves.\n- **Foil stamping** \u2014 the metallic lift on velvet and suede that reads luxury at first touch.\n\n**On rigid and folding boxes:**\n\n- **Foil stamping** \u2014 gold or metallic logos on lid and base; the classic premium mark.\n- **Blind emboss and deboss** \u2014 relief without colour; quiet and tactile.\n- **Spot UV** \u2014 a gloss pattern over matte lamination that catches shop light.\n- **Inside-lid printing** \u2014 the brand line that lands at the opening moment.\n- **Matte or gloss lamination** \u2014 the base finish that sets how every technique above reads.\n\nTwo confirmations close the decision: the technique must hold across the run, so approve it on a printed sample of the actual material \u2014 a proof on screen or on a different substrate proves nothing \u2014 and the colour match should carry a reference (a Pantone number is the working standard) so close-enough has something to be measured against.\n\n## When the terms on paper are not enough\n\n**A quoted MOQ, model and technique still need one physical proof each.** Three boundaries keep this page honest:\n\n- An MOQ stated without its unit \u2014 per design, per SKU, per colour \u2014 is not yet a number you can plan a launch on. Ask until the unit is named.\n- An OEM/ODM ownership term that lives in a conversation, not a document, does not exist. Get the design-ownership and exclusivity lines in writing with the quote.\n- A logo technique approved off-spec is a colour risk. The swatch or printed sample on the actual material is the only approval that transfers to the run.\n\n## The three-line readiness check\n\nNothing on this page collects your data or sends anything. Copy the three lines below into your own note and fill them for your launch:\n\n1. The MOQ line: your quantity window, the minimum that applies, and its unit \u2014 per design, per SKU or per colour.\n2. The model line: OEM, ODM or white label \u2014 and who owns the design, in writing.\n3. The logo line: technique, surface and colour reference \u2014 approved on a sample of the actual material.\n\nKeep the note local, and raise the open lines with your supplier through your existing approved contact process. With the three lines filled, your first quote conversation starts from decisions made rather than terms decoded \u2014 and the comparison between quotes becomes a real choice."
  },
  {
    "slug": "how-to-choose-custom-jewelry-boxes",
    "datePublished": "2026-10-01",
    "title": "How to Choose Custom Jewelry Boxes: Structure, Insert, Finish and Size",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/how-to-choose-custom-jewelry-boxes.webp",
    "imageAlt": "Guide cover card: structure, insert, finish \u2014 the three decisions in order for custom jewellery boxes",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A jewelry box chosen from a photo is a guess. Match structure, insert, size and finish to the piece and the brand before you compare quotes.",
    "metaDescription": "How to choose custom jewelry boxes \u2014 match structure, insert, size and finish to your pieces and brand, and prepare the spec list to send for a quote.",
    "body": "*Structure, insert and finish guidance in this guide is generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for jewelry brand owners and packaging buyers at jewelry labels who are ordering [custom jewelry boxes](https://elapack.com/products/custom-white-jewelry-box/) \u2014 ring, earring, pendant, bracelet or complete set programs \u2014 and need to brief a factory without burning sampling rounds. It covers the five decisions that define a custom jewelry box: the piece and its insert, the structure, the size, the wrap and finish, and the quantity and sampling plan. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A jewelry box chosen from a photo is a guess; the structure, insert and finish have to fit the piece and the brand before quotes mean anything.** Work through the five decisions below and you will finish with a box spec list ready to send for samples and quotes.\n\n## Why boxes chosen from a photo disappoint\n\nA custom jewelry box does three jobs at once: it holds the piece still in transit, it presents the piece at the counter or in the unboxing, and it carries the brand mark without apology. When the box is copied from a reference photo instead of built from the piece, one of those jobs usually fails.\n\n1. A brand owner or packaging buyer orders boxes customized to match a photo from another label or a marketplace listing.\n2. The boxes arrive and the ring slot swallows the ring, the pendant shifts inside the insert, or the foil logo sits off-centre on the textured wrap.\n3. **Without mapping the piece and the brand bar to structure, insert and finish, the order is guesswork and quotes are not comparable.**\n4. A wrong box means re-cutting inserts, re-wrapping lids, or retail stock that cannot go on the counter.\n5. The rework can delay a launch or leave stock that does not match the brand, which raises the cost of a wrong brief.\n6. The task on this page is to map your pieces and brand to the five decisions, and prepare the spec list for a quote.\n\nThe fix is not a better reference photo. It is a brief that starts from the piece and works outward.\n\n## Five decisions that choose your box\n\n![Five decisions that choose a jewelry box: size, insert, lid style, finish and branding](/charts/jewelry-box-five-decisions.svg)\n\n**Start from the piece \u2014 insert, structure, size, finish, quantity \u2014 before you compare quotes.** Each decision ends with the question your line has to answer.\n\n### Start from the piece and its insert\n\nThe piece decides the box, not the other way round. A [ring](https://elapack.com/products/custom-ring-boxes/) needs single or double slots on a velvet or foam cushion; earrings and pendants need fitted inserts that hold pairs and chains without tangling; bracelets and small gifts run in compact footprints; a complete program pairs the box with a pouch and insert designed together. The insert families to know: EVA, contoured for a precise fit on each piece; sponge, soft cushioning under a velvet or satin covering; molded pulp, the economical structure with a natural look; flocked and velvet, the velvet-touch finish for premium lines. The question your line has to answer: what does each piece weigh, how does it move in transit, and which insert tier matches the price point of the line?\n\n### Choose the structure\n\nThe structure follows the selling moment. A rigid lift-off lid \u2014 full-height lid over a rigid base \u2014 is the premium, gift-ready structure for presentation pieces. A magnetic flip-top hides the closure in the base and gives a clean exterior with a slow, deliberate close. A ribbon tie makes the satin closure part of the unboxing ritual. A [faux leather wrap](https://elapack.com/products/black-leather-jewelry-box/) gives a textured surface that takes embossed branding for jewelry and gift programs. The question: where does the box meet the customer \u2014 counter, unboxing, or both \u2014 and what should that moment feel like?\n\n### Set the size from the piece seated\n\nSize is not a style choice; it is a fit measurement. Seat the piece in its insert, measure the length, width and seated height, and specify the internal dimensions of the box with clearance for the lid to close without pressing the piece. A box that is tight distorts the insert; one that is loose lets the piece shift. Custom sizes are a normal part of a box program, not an exception \u2014 confirm the finished internal dimensions in centimetres in the spec, not by eye from a photo.\n\n### Decide the wrap, finish and branding\n\nThe wrap colour and the finish carry the brand. A Pantone-matched wrap holds the colour system of the line across runs, with interior lid printing for the note the customer reads first. Foil stamping puts gold or metallic logos on lid and base; embossing and debossing give blind relief marks that read premium without colour; spot UV over matte or gloss lamination adds controlled contrast. The question your brand has to answer: which marks must stay exact across the run \u2014 and on which surface? A foil that is crisp on smooth wrap can soften on textured faux leather, so confirm the finish on the actual wrap material before the run.\n\n### Plan quantity and samples before you compare quotes\n\nQuantity decides which factories can take the order at all. As a working reference, ELAPACK's own confirmed terms for custom jewelry boxes: a 200-piece minimum with custom sizes included, 15\u201320 day production, a free stock sample plus USD 20 shipping, and a USD 25 custom sample plus USD 20 shipping. Typical wholesale box programs elsewhere start at 500\u20131,000 pieces, so a 200-piece entry changes which lines can launch at all. The question: how many pieces does the launch actually need, and what will you learn from a sample before committing the run?\n\n## When a box that looks right is still wrong\n\n**A photo cannot show board grade, wrap hand-feel, insert tolerances or print registration.** Three boundaries keep this page honest:\n\n- A photo does not show the greyboard grade or the wrap weight. Ask for a physical sample of the actual box before a large run.\n- Print and finishes behave differently on different wraps. Confirm foil, emboss and spot UV on the actual material, not on a proofing sheet.\n- Insert fit lives inside tolerances the photo flattens. Seat the actual piece in the sample insert before the run.\n\n## Prepare the jewelry box spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the spec list from the piece, the brand and the quantity.** Copy the lines below into your own note:\n\n1. The piece: what it is, its seated size and weight, and how it will be sold \u2014 counter, unboxing, shipping.\n2. The structure: rigid lift-off lid, magnetic flip-top, ribbon tie or faux leather wrap.\n3. The size: finished internal dimensions in centimetres, with lid clearance for the seated piece.\n4. The insert: EVA, sponge, molded pulp, or flocked and velvet \u2014 with the slot or well layout each piece needs.\n5. The wrap and finish: wrap colour with Pantone reference, and the branding set \u2014 foil, emboss or deboss, spot UV and lamination, interior lid printing.\n6. The quantity: launch quantity, and whether the sample should be stock or custom.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process. With the list filled, the quotes you collect compare like with like, and the next decision \u2014 putting two samples side by side on the same dimensions \u2014 is a real choice instead of a guess."
  },
  {
    "slug": "custom-cosmetic-packaging-guide",
    "datePublished": "2026-10-01",
    "title": "Custom Cosmetic Packaging: Boxes, Pouches and Sets for Beauty Brands",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-cosmetic-packaging-guide.webp",
    "imageAlt": "Guide cover card: beauty packaging carries the brand \u2014 boxes, pouches and coordinated sets for cosmetic brands",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Cosmetic packaging fails when the pack is chosen before the product. Map box, pouch and set to the line before you compare quotes.",
    "metaDescription": "How to plan custom cosmetic packaging \u2014 rigid boxes for lash, nail and fragrance lines, fabric and PVC pouches, and the spec list to send for a quote.",
    "body": "*Format, structure and print guidance in this guide is generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for beauty brand owners, salon line builders and wholesalers who are packaging color cosmetics and beauty tools \u2014 [lash lines](https://elapack.com/products/custom-eyelash-packaging-boxes/), [press-on nails](https://elapack.com/news/press-on-nail-packaging-guide/), fragrance and the sets around them \u2014 and need to plan the packaging before they request samples or quotes. It covers the four decisions that define a cosmetic packaging program: what the pack holds, whether those contents call for a box or a pouch, the structure and size, and the branding across both materials. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Cosmetic packaging goes wrong when the pack is chosen before the product; the format has to follow the contents.** Work through the four decisions below and you will finish with a spec list ready to send for a quote.\n\n## Why pack-first planning fails\n\nA cosmetic pack does two jobs: it protects the product through shipping and the shelf, and it teaches the customer the brand at first sight. When the format is picked from a competitor's photo instead of the contents, one of those jobs fails.\n\n1. A beauty brand picks a box format because a competitor's looked premium, before mapping what the line actually contains.\n2. The packaging arrives and the lash trays press against the lid, the nail set rattles, or the pouch fabric pills against the tools it holds.\n3. **Without mapping the contents to the format, the program is guesswork and quotes are not comparable.**\n4. The wrong format means re-sampling, split orders across two suppliers, or a launch where the box and the pouch do not match.\n5. The rework delays the launch and thins the margin the line was built on.\n6. The task on this page is to map the line to box, pouch and set, and prepare the specs for a quote.\n\nThe fix is not a better reference photo. It is a program that starts from the contents and works outward.\n\n## Start from the product\n\n![Cosmetic packaging decided from the product outward: product constants, box pouch or set, one spec baseline](/charts/cosmetic-packaging-decision-path.svg)\n\nThe product names the format. Lash lines run on tray formats \u2014 as a working reference, stock lash trays commonly land near 14\xD710\xD76 cm for single-tray retail boxes, 15\xD715\xD75 cm for square multi-pair formats and 20\xD718\xD78 cm for wholesale display packs, with glue and tweezers needing their own wells. Press-on nail sets pack as organized rows that must not shift. Fragrance packs around the bottle \u2014 the structure follows the bottle's height and base, not a standard footprint. Tools and applicators run in soft goods. The question your line has to answer: what exactly ships in the pack, in what quantity, and what must not move?\n\n## Box, pouch or set\n\nMost cosmetic lines need both formats, and they are different trades. The box side is rigid work: lift-off lid boxes for gift-ready presentation, drawer boxes for layered reveals, magnetic flip-tops for a clean exterior and a slow close. The pouch side is sewn work: drawstring, flap, envelope and zipper styles in cotton, satin, velvet or canvas \u2014 for retail attach, travel and refill programs \u2014 plus [clear PVC zip bags](https://elapack.com/products/custom-pvc-bags/) where the product should stay visible. A set program designs the two together: box, pouch and insert as one system, matched in colour and closure. The question: where does each product meet the customer \u2014 shelf, unboxing, travel \u2014 and which format carries that moment?\n\n## Structure and size that survive shipping and the shelf\n\nRigid structures protect; internal wells organize. Size follows the contents with a little room, settled before pricing because size moves both cost and minimums. Confirm the finished internal dimensions in centimetres in the spec \u2014 a pack that is tight presses the product, one that is loose lets it shift and look untidy at unboxing. For anything that ships to a retail counter, the structure also has to arrive true: corners square, lid seated, print undamaged.\n\n## Branding across two materials\n\nBoard and fabric do not take branding the same way, and a program that ignores this splits in the customer's hand. On boxes: foil stamping, emboss and deboss, spot UV and lamination, with wrap colour matched to a Pantone reference. On pouches: a woven label sewn in, a printed logo, embroidery, or a deboss on velvet. The same Pantone reference can read differently on coated board than on cotton or satin, so confirm the colour on the actual material of each format before the run \u2014 this is the most common place a box-and-pouch program stops matching.\n\n## Quantities, samples and one spec baseline\n\nAs a working reference, ELAPACK's own confirmed terms: a 200-piece minimum across custom boxes and pouches with custom sizes included, 15\u201320 day production, a free stock sample plus USD 20 shipping, and a USD 25 custom sample plus USD 20 shipping. Typical wholesale programs elsewhere start at 500\u20131,000 pieces, so a 200-piece entry changes which lines can launch at all. One further practical point: a factory that makes both the box and the sewn pouch gives the program one spec baseline \u2014 one sample round, one colour reference, one production calendar \u2014 where most carton printers stop at the box and leave the pouch to a second supplier.\n\n## Prepare the cosmetic packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the spec list from the line, the brand and the quantity.** Copy the lines below into your own note:\n\n1. The contents: each product in the line, its size and weight, and what must not move in transit.\n2. The format split: which products run in rigid boxes (lift-off lid, drawer, magnetic flip-top), which in pouches (drawstring, flap, envelope, zipper \u2014 cotton, satin, velvet, canvas, or clear PVC zip), and which ship as a designed set.\n3. The size: finished internal dimensions in centimetres per format, with clearance for the contents.\n4. The branding: the finish set per format, with the Pantone reference and where each mark sits.\n5. The quantity: launch quantity per format, and whether samples should be stock or custom.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process. With the list filled, the quotes compare like with like \u2014 and the box and the pouch arrive as one program instead of two orders."
  },
  {
    "slug": "custom-perfume-packaging-guide",
    "datePublished": "2026-10-02",
    "title": "Custom Perfume Packaging: Gift Boxes, Sample Cards and Pouches",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-perfume-packaging-guide.webp",
    "imageAlt": "Guide cover card: fragrance packaging sets the ritual \u2014 boxes, paper sample cards and satin pouches for perfume",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A perfume box ordered from a template is a guess. Build from the bottle: structure, insert, and the box\u2013card\u2013pouch split.",
    "metaDescription": "How to plan custom perfume packaging \u2014 rigid gift boxes built from the bottle, mail-flat sample cards and satin pouches, with the spec list to send for a quote.",
    "body": "*Structure, insert and format guidance in this guide is generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for fragrance brand owners, boutique line builders and wholesalers who are planning custom perfume packaging \u2014 a flagship gift box, a discovery sampling program, or both \u2014 and need to brief a factory without wasting sampling rounds. It covers the five decisions that define a perfume packaging program: the bottle, the structure, the insert, the format split between box, sample card and pouch, and the branding and quantity plan. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Perfume packaging is built around the bottle, not bought off a template; the structure follows the glass.** Work through the five decisions below and you will finish with a spec list ready to send for a quote.\n\n## Why template boxes fail fragrance\n\nA [perfume box](https://elapack.com/products/custom-perfume-boxes/) does three jobs: it holds a glass bottle still, it survives the post and the retail counter, and it sets the tone of the scent before the cap comes off. When the box is ordered from a catalogue template instead of built from the bottle, one of those jobs fails.\n\n1. A fragrance brand orders a stock-size box because the template looked right, without sending the bottle dimensions.\n2. The boxes arrive and the bottle rattles in the insert, the lid presses on the cap, or the flacon sits off-centre under the window.\n3. **Without the bottle's dimensions in the brief, the structure is guesswork and quotes are not comparable.**\n4. A wrong box means re-cutting inserts, re-running wraps, or glass that arrives chipped and a launch that slips.\n5. Freight on re-sampling a fragrance program costs more than the sampling itself, because the first round set no dimensions.\n6. The task on this page is to map your bottle and your program to structure, insert and format, and prepare the spec list for a quote.\n\nThe fix is not a better template. It is a brief that starts from the bottle and works outward.\n\n## Five decisions that build the program\n\n![Perfume box formats: folding carton, rigid shoulder box and two-piece set box chosen around the bottle](/charts/perfume-box-formats.svg)\n\n**Start from the bottle \u2014 structure, insert, format, branding, quantity \u2014 before you compare quotes.** Each decision ends with the question your line has to answer.\n\n### Start from the bottle\n\nMeasure the bottle, not the old box: length, width and height with the cap on, and the weight full. A travel spray, a flagship flacon and a multi-bottle gift set are three different briefs \u2014 a box that suits one will strangle or swamp another. The question: which bottles ship in this program, and how many per box?\n\n### Choose the structure\n\nThree core structures cover fragrance. A two-piece lift-off lid \u2014 a full-height lid over a rigid base \u2014 is the gift moment for a flagship. A drawer format layers the bottle and the story card into a reveal that suits discovery sets. A magnetic flip-top gives a clean exterior and a slow, deliberate close for the retail counter. The question: what should the opening ritual feel like, and where does it happen \u2014 gifting, counter or unboxing?\n\n### Specify the insert\n\nGlass decides the insert. EVA or molded inserts cut to the bottle profile hold the flacon firmly from the factory to the vanity; a generic cavity lets the glass shift, and glass that shifts arrives chipped. The question: how far does this box travel, and what happens if the bottle moves inside it?\n\n### Split the program: box, sample card, pouch\n\nFragrance rarely sells in one format, and the three formats do different work. The rigid box carries the purchase. The sample card carries the try-me moment: a [fully printed paper card](https://elapack.com/products/custom-perfume-sample-card-boxes/) with vials or sachets mounted on it, sized to your sample count from a single vial through multi-scent discovery sets, and built mail-flat so it posts at standard letter weights \u2014 one card system for sampling campaigns, subscription inserts, boutique handouts and press mailers. A [satin pouch](https://elapack.com/products/custom-satin-pouches/) carries the gift-wrap and refill moment around the bottle itself. Run as one matched program, the three reinforce each other; ordered separately, they drift apart in colour and finish. The question: which moments does your line actually sell \u2014 discovery, purchase or gifting \u2014 and does each have its format?\n\n### Set the branding and the quantity\n\nThe wrap carries the brand: offset print with foil stamping, embossing and spot UV, and inside-lid printing for the line the customer reads at the opening. As a working reference, ELAPACK's own confirmed terms: a 200-piece minimum across rigid perfume boxes and printed sample cards with custom sizes included, 15\u201320 day production, a free stock sample plus USD 20 shipping, and a USD 25 custom sample plus USD 20 shipping. Typical wholesale box programs elsewhere start at 500\u20131,000 pieces, so a 200-piece entry lets a fragrance line launch before it commits depth. The question: how many pieces does the launch need per format, and what should the sample round prove before you commit the run?\n\n## When a box that looks right is still wrong\n\n**A rendering cannot show glass fit, board grade or insert tolerances.** Three boundaries keep this page honest:\n\n- A rendering does not show whether the bottle actually seats. Ask for a physical sample built with your bottle dimensions applied.\n- Print on a textured or curved wrap reads differently than on a flat proof. Approve finishes on the actual wrap material, not on screen.\n- Mail-flat claims live inside postal size and weight bands. Confirm the packed sample card against the postal standard you will post it at, not by eye.\n\n## Prepare the perfume packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the spec list from the bottle, the program and the quantity.** Copy the lines below into your own note:\n\n1. The bottle: dimensions with the cap on (L\xD7W\xD7H in cm), weight full, and count per box.\n2. The structure: two-piece lift-off lid, drawer, or magnetic flip-top.\n3. The insert: EVA or molded, cut to the bottle profile.\n4. The format split: rigid gift boxes, printed sample cards (sample count and vial format), satin pouches \u2014 and which formats the launch actually needs.\n5. The branding: print program with Pantone reference, foil or emboss, spot UV, inside-lid printing.\n6. The quantity: launch quantity per format, and whether samples should be stock or custom.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process. With the bottle dimensions in the brief, the quotes you collect compare like with like \u2014 and the first sample round proves the program instead of starting it over."
  },
  {
    "slug": "press-on-nail-packaging-guide",
    "datePublished": "2026-10-02",
    "title": "Custom Press-on Nail Packaging: Boxes, Inserts and Set Formats",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/press-on-nail-packaging-guide.webp",
    "imageAlt": "Guide cover card: nails need a display and a home \u2014 formats, inserts and set organisation for press-on nail packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Press-on packaging is sold by the shade system it shows. Map set format, tray insert and channel before you compare quotes.",
    "metaDescription": "How to plan custom press-on nail packaging \u2014 set formats, fitted tray inserts, shade-forward print and channel structures, with the brief to send for a quote.",
    "body": "*Structure, insert and sizing guidance in this guide is generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for nail brand owners selling press-on sets direct, at retail or both, who are ordering [custom press-on nail packaging](https://elapack.com/products/custom-press-on-nail-boxes/) \u2014 a first run, a rebrand or a wholesale pack \u2014 and need to brief a supplier without wasting sampling rounds. It covers the five decisions that define a press-on nail box: the set format, the tray and insert, the shade-forward branding, the channel structure, and the quantity and sampling plan. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A press-on box is sold by the shade and size system it shows; the packaging has to present the set, not just contain it.** Work through the five decisions below and you will finish with a brief ready to send for samples and quotes.\n\n## Why press-on boxes fail in the customer's hand\n\nA press-on set is a system: shades, sizes, an applicator, sometimes glue. The box does three jobs: it holds every tray in its place, it shows the shade and size system at first sight, and it survives both a mailer and a retail shelf. When the box is ordered by unit price alone, one of those jobs fails.\n\n1. A nail brand orders the cheapest box that fits the tray, without planning the set layout.\n2. The boxes arrive and the trays slide, sizes mix, decorations catch on the insert, and the shade the customer ordered reads differently under retail light.\n3. **Without mapping the set \u2014 trays, sizes, accessories \u2014 to the box layout, the order is guesswork and quotes are not comparable.**\n4. A wrong box means scratched finishes, mixed sizes at unboxing, and returns that cost more than the packaging saved.\n5. The rework delays the restock the line was counting on.\n6. The task on this page is to map your set and channel to format, insert, branding and quantity, and prepare the brief for a quote.\n\nThe fix is not a cheaper box. It is a brief that starts from the set and works outward.\n\n## Five decisions that build the box\n\n![Press-on nail box formats: clamshell tray, sleeve and tray, box with size grid](/charts/press-on-nail-box-formats.svg)\n\n**Start from the set \u2014 format, insert, branding, channel, quantity \u2014 before you compare quotes.** Each decision ends with the question your line has to answer.\n\n### Start from the set format\n\nThe set decides the box. Single-set sleeves run slim for direct-to-customer mailers. Multi-size kits hold a full size range plus accessories, and need a layout that keeps every size visible and in order. Wholesale display packs carry multiple sets for the counter. The question: what exactly is in one sellable set \u2014 trays, size range, glue, file, applicator \u2014 and how many sets per box?\n\n### Specify the tray insert\n\nPress-on contents are light but fragile: finishes scratch, and sizes mix the moment a tray can move. [Fitted inserts](https://elapack.com/news/packaging-inserts-guide/) cut to the tray profile hold trays, tips and accessories each in their own well, in transit and on the shelf. Nails that present in size order sell; nails that arrive mixed get returned. The question: which contents must never move, and what cushioning does a decorated finish need?\n\n### Plan shade-forward branding\n\nThe customer buys a shade. Full-colour print on the wrap should show the shade system accurately \u2014 under retail light, not just on a screen \u2014 with foil or emboss carrying the brand mark above it. Because the shade is the product, colour accuracy on the box is not a cosmetic detail; it is the claim. Approve print against a colour reference on the actual wrap material before the run. The question: which shades anchor the line, and does the box show them true?\n\n### Match the structure to the channel\n\nA box that goes into an e-commerce mailer needs different things from one that sits on a shelf: the mailer box protects through the post and presents at unboxing; the retail box faces the customer under shop light, stacked and handled. Many lines need both behaviours from one structure \u2014 so confirm which channel leads before the dieline is cut. The question: where does this box live \u2014 mailer, shelf, or both \u2014 and which one leads?\n\n### Plan quantity and samples before you compare quotes\n\nAs a working reference, ELAPACK's own confirmed terms for custom press-on nail boxes: a 200-piece minimum with custom sizes included, 15\u201320 day production, a free stock sample plus USD 20 shipping, and a USD 25 custom sample plus USD 20 shipping. A 200-piece entry lets a line test shades and set formats before committing depth. The question: how many pieces does the launch need, and what should a sample prove before the run?\n\n## When a box that looks right is still wrong\n\n**A mockup cannot show tray fit, shade accuracy or mailer survival.** Three boundaries keep this page honest:\n\n- A mockup does not show whether the tray actually seats. Ask for a physical sample built with your tray dimensions applied.\n- Shade accuracy lives on the printed wrap, not on the screen. Approve colour on the actual material against a reference.\n- A structure that looks sturdy can still rattle in a mailer. Test the packed box, not the empty one.\n\n## Prepare the press-on nail packaging brief for your quote\n\nNothing on this page collects your data or sends anything. **Fill the brief from the set, the channel and the quantity.** Copy the lines below into your own note:\n\n1. The set: tray count and dimensions, size range, accessories (glue, file, applicator) and their wells.\n2. The format: single-set sleeve, multi-size kit, or wholesale display pack \u2014 and sets per box.\n3. The insert: fitted insert cut to the tray profile, with a well per accessory.\n4. The branding: full-colour print with the anchor shades, foil or emboss for the mark, approved on the actual wrap.\n5. The channel: mailer, retail shelf, or both \u2014 and which leads.\n6. The quantity: launch quantity, and whether the sample should be stock or custom.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process. With the brief filled, the quotes compare like with like \u2014 and the box that arrives shows the shade system the way the customer bought it."
  },
  {
    "slug": "custom-wig-packaging-guide",
    "datePublished": "2026-10-03",
    "title": "Custom Wig Packaging: Satin Bags, Boxes and Branded Sets",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-wig-packaging-guide.webp",
    "imageAlt": "Guide cover card: a wig travels in satin \u2014 satin bag, presentation box and branded sets for wig packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A wig has two packaging jobs \u2014 fibre protection in transit and presentation at retail. Map the bag, the box and the set before you compare quotes.",
    "metaDescription": "How to plan custom wig packaging \u2014 satin drawstring bags, rigid boxes and branded sets \u2014 with sizing, branding and the spec list to send for a quote.",
    "body": "*Structure, fabric and sizing guidance in this guide is generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for wig brand owners, wig retailers and salon-line builders who are ordering custom wig packaging \u2014 a [satin bag](https://elapack.com/products/custom-satin-wig-bag/), a retail box, or a matched set \u2014 and need to brief a supplier without wasting sampling rounds. It covers the five decisions that define wig packaging: the bag that protects the fibre, the box that presents the hair, the set that pairs them, the sizing to the hair, and the branding on satin. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A wig has two packaging jobs \u2014 protect the fibre in transit and storage, present the hair at retail \u2014 and they are usually two products, not one.** Work through the five decisions below and you will finish with a spec list ready to send for a quote.\n\n## Why one bag ordered for both jobs fails\n\nA wig travels folded, hangs stored, and is first seen styled. One package asked to do all three jobs usually fails one of them.\n\n1. A wig brand orders a single bag for shipping, storage and display, chosen by unit price.\n2. The wigs arrive with fibres snagged at the closure, curl patterns crushed by tight packing, and nothing in the parcel that presents the hair to the customer.\n3. **Without separating the protection job from the presentation job, the order is guesswork and quotes are not comparable.**\n4. A wrong bag means tangling and snagged fibres \u2014 returns and reviews that mention condition before they mention the hair.\n5. The rework means re-sampling and a restock that slips for a line that sells on condition.\n6. The task on this page is to map the fibre, the channel and the set to bag, box and branding, and prepare the spec list for a quote.\n\nThe fix is not a better single bag. It is to buy the two jobs on purpose: a bag that protects, a box that presents.\n\n## Five decisions that build the program\n\n![Wig packaging as two specified jobs: branded retail bag for storage and opaque shipping outer](/charts/wig-bag-two-jobs.svg)\n\n**Start from the fibre \u2014 bag, box, set, sizing, branding \u2014 before you compare quotes.** Each decision ends with the question your line has to answer.\n\n### Choose the bag that protects the fibre\n\nThe bag is the wig's day-to-day home: the fibre meets its interior more than any other surface, in transit and between wears. Satin drawstring bags are the standard here for a reason \u2014 a smooth, low-friction interior lets the fibre glide instead of snagging, the drawstring closes without hardware that can catch, and the fabric reads premium against the hair. As a working reference, ELAPACK's own confirmed terms: a 30\xD740 cm satin drawstring wig bag as the standard size, a 200-piece minimum, and custom sizes at the same minimum. The question: which lengths and cap sizes does the bag carry, and does its interior protect the fibre or snag it?\n\n### Choose the box that presents the hair\n\nWhere the bag protects, the box presents \u2014 at the retail counter, in gift wrap, at the unboxing. A rigid upright box holds the wig in shape and photographs clean on a shelf; a magnetic flip-top gives a plain exterior and a slow, deliberate close; a sleeve-and-drawer format layers the wig with a care card or accessories into a reveal. The question: where does the customer first meet this wig \u2014 shelf, gift or parcel \u2014 and what should that opening feel like?\n\n### Pair them into a set\n\nThe strongest programs run both formats as one set: the satin sleeve folded inside the [rigid box](https://elapack.com/news/custom-rigid-boxes-guide/) carries protection and presentation into a single unboxing, and the bag keeps working long after the box is discarded. Briefed as one matched set, the colours and finishes reinforce each other; ordered separately from two suppliers, they drift apart in shade and weight. The question: does your line sell protection, presentation or both \u2014 and if both, are they briefed to one supplier as one set?\n\n### Size to the hair, not to the photo\n\nSizing is where quiet failures start. A 30\xD740 cm bag suits most mid-length wigs; longer lengths and fuller volumes need more room, and a bag sized by eye from a photo is how curl patterns arrive crushed. Custom sizes sit at the same 200-piece minimum in ELAPACK's confirmed terms, so the size range does not have to be a compromise \u2014 but the finished size has to be stated in centimetres in the spec, not judged from a picture. The question: what is the longest wig in the line, folded the way it actually ships, and does every size in the range have a bag that fits it?\n\n### Brand the satin deliberately\n\nSatin takes branding differently from paper or cotton, and the sheen changes how a mark reads. The standard methods are silkscreen print, a woven label sewn in, and heat-transfer print \u2014 in ELAPACK's confirmed terms, placeable inside or outside the bag, with the satin colour itself matched to a Pantone reference. The question: what should the customer see when the drawstring opens, and does the chosen method hold its edge on satin?\n\n## When a bag that looks right is still wrong\n\n**A photo cannot show interior friction, seam construction or how the fibre behaves against the fabric.** Three boundaries keep this page honest:\n\n- The interior does the protecting, and product photos show the outside. Ask for a sample and check the interior against your own hair fibre before the run.\n- A drawstring channel that looks fine lying flat can snag where the cord gathers. Work the closure on the sample, not in the photo.\n- Print on satin reads with the sheen \u2014 a logo that is crisp on cotton can shift or blur on satin. Approve the method on the actual satin, against your colour reference.\n\n## Prepare the wig packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the spec list from the hair, the channel and the quantity.** Copy the lines below into your own note:\n\n1. The hair: lengths, cap sizes and volumes in the line, and how each ships \u2014 folded, hung or boxed.\n2. The bag: satin drawstring, 30\xD740 cm standard or custom sizes, with the interior finish stated.\n3. The box: rigid upright, magnetic flip-top, or sleeve-and-drawer \u2014 and whether the satin bag sits inside it as a set.\n4. The branding: silkscreen, woven label or heat transfer, inside or outside, with a Pantone reference for the satin.\n5. The quantity: launch quantity per format \u2014 ELAPACK's confirmed minimum is 200 pieces, custom sizes included.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process. With protection and presentation bought on purpose, the quotes you collect compare like with like \u2014 and the wig that arrives reads as new, not as shipped."
  },
  {
    "slug": "custom-packaging-samples-guide",
    "datePublished": "2026-10-03",
    "title": "Custom Packaging Samples: What to Expect, What They Cost, How Long They Take",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-packaging-samples-guide.webp",
    "imageAlt": "Guide cover card: sample first, then scale \u2014 stock sample free, custom sample USD 25, approve on the assembled piece",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A sample tests three separate things \u2014 the material, the print and the supplier's process. Decide which one your round is testing before you pay the fee.",
    "metaDescription": "Custom packaging samples explained: stock vs custom, what they cost, how long they take, what to check on arrival, and the terms to get in writing first.",
    "body": `*Scheduling, cost and checking guidance in this guide is generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm terms with the supplier you are evaluating.*

This guide is for brand owners and packaging buyers planning a first custom packaging run \u2014 a pouch, a box, a set \u2014 who are about to ask a factory for a sample and want the round to prove something. It covers the five decisions that define a sample round: which kind of sample to ask for, what it should cost and how long it takes, what to check when it arrives, how the round fits the production calendar, and which terms to get in writing before paying. If your question is which supplier to choose, stop here: this page does not select a supplier, price a production quote, or approve a run. **A sample tests three separate things \u2014 the material, the print and the supplier's process \u2014 and a round that has not decided which one it is testing wastes money either way.** Work through the five decisions below and you will finish with a written sample request instead of a vague email.

## Why sample rounds waste money

A sample is the cheapest mistake in packaging \u2014 when it is used as one. Ordered as a formality, it approves nothing:

1. A buyer asks a factory for "a sample" without saying which kind or what it must prove.
2. Either a stock sample arrives \u2014 the factory's standard, someone else's print \u2014 and gets judged for not showing the buyer's design, or a custom sample is paid for before the specs are settled and approves a design that changes a week later.
3. **Without deciding what the round is testing \u2014 material, print or process \u2014 the sample arrives to no checklist, and the production quotes stay incomparable.**
4. The run goes ahead on an unproven print or an untested structure, and the failure surfaces at production quantity instead of on one sample.
5. The rework \u2014 a second sample round, a delayed launch \u2014 costs more than the first round saved.
6. The task on this page is to decide the sample type, its checklist, its cost and its calendar before any fee is paid.

The fix is not more samples. It is one round, ordered on purpose, with the checks written before the parcel ships.

## Five decisions that define the sample round

![Sample round defined before payment: purpose, scope, written checks and a decision rule set in advance](/charts/sample-round-flow.svg)

**Decide type, cost, checklist, calendar and terms \u2014 before you pay the fee.** Each decision ends with the question your round has to answer.

### Decide stock or custom first

A stock sample is an existing product pulled from production. It proves the factory's material, construction standard and finish \u2014 not your design \u2014 and it is the right tool when you are qualifying a supplier's baseline. A custom sample is built to your brief: your [dieline](https://elapack.com/news/die-cutting-and-dielines-guide/), your material, your print. It proves your design as built, and it is the right tool once the design is settled. Ordering the custom round before the specs are final, or judging a stock sample for not carrying your logo, are the two ways rounds get wasted. The question: what must this round prove \u2014 the factory's standard, or your design as built?

### Know the cost and the clock before you pay

As a working reference, ELAPACK's own confirmed terms: stock samples are free with USD 20 shipping and are dispatched in 2\u20133 days, with courier transit of 4\u20137 days; custom samples are USD 25 plus USD 20 shipping and are built in 3\u20135 days. Across the wider industry, custom packaging samples commonly run USD 50\u2013200 depending on structure and print, and dispatch times vary far more \u2014 which is why the fee, the shipping and the dispatch time belong in writing before the fee is paid. The question: what does this round cost in total and land on what date \u2014 counted as fee plus shipping, and build plus transit?

### Check the sample against a written checklist

A sample that arrives to no checklist approves nothing. Write the checks before it ships: seams and construction, worked by hand; the closure \u2014 drawstring, magnet, drawer \u2014 actuated a dozen times; print adhesion and edge sharpness on the actual material, rubbed with a finger; colour against the Pantone reference in daylight, not under a desk lamp; and insert fit with the real product inside \u2014 a sample tested empty approves an empty box. The question: which five checks does this sample have to pass, and who signs them off?

### Put the round in the production calendar

The sample round is not the pause before the timeline \u2014 it is the first item on it. In ELAPACK's confirmed terms, production runs [15\u201320 days after sample approval](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/), so the honest launch count is: courier transit in, review and any revision round, 15\u201320 days of production, then outbound shipping \u2014 counted backwards from the launch date. A revision round planned as a maybe is a launch date that slips; planned as a line item, it is absorbed. The question: what is the real goods-in-hand date, counting one revision round?

### Ask the crediting question before you pay

Many factories credit the custom sample fee against the first production order \u2014 but this is an industry pattern to ask about, not a term to assume, and policies differ everywhere. Ask the question in writing before paying the fee, and treat the answer as part of comparing suppliers: a factory's sample terms are an early, cheap signal of how it will handle production terms. The question: is the sample fee credited on the first order \u2014 and is that in the quotation, not in a chat reply?

## When a sample that passes can still be wrong

**A sample that passes on the desk can still fail at quantity.** Three boundaries keep this page honest:

- A custom sample is often built with closer attention than a 200-piece run. Ask what changes between sample and production \u2014 tolerances, finish, print \u2014 and where the sample is more generous than the run will be.
- One sample proves one colourway and one print. Variations \u2014 a different satin colour, a second print position \u2014 may behave differently; confirm in writing which variations the sample covers.
- A sample approved from photos is not approved. Colour, hand-feel and closure action exist only in hand \u2014 schedule the review day before you need to sign off.

## Prepare the sample request before you pay

Nothing on this page collects your data or sends anything. **Fill the request from the run you are planning.** Copy the lines below into your own note:

1. The type: stock sample (material and standard) or custom sample (your dieline, material, print).
2. The product: what it holds, its dimensions in cm, and the closure or structure.
3. The branding: print method, placement and Pantone reference \u2014 and which colourways or variations the sample must cover.
4. The terms in writing: sample fee, shipping fee, dispatch time for stock, build time for custom, and whether the fee is credited on the first order.
5. The calendar: transit in, review day, one revision round, 15\u201320 days production, outbound shipping \u2014 counted back from launch.

Keep the note local, and send it to your supplier through your existing approved contact process. A round planned this way does what a sample is for: it finds the mistake at one piece, so the run that follows needs no excuse.`
  },
  {
    "slug": "custom-packaging-moq-sample-lead-times-2026",
    "datePublished": "2026-10-05",
    "title": "Custom Packaging MOQ, Sample Times and Lead Times: 2026 Factory Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "5 min read",
    "image": "/images/covers/custom-packaging-moq-sample-lead-times-2026.webp",
    "imageAlt": "Factory data cover card: the order terms on one page \u2014 MOQ 200, sample terms and lead time tiers, 2026",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The numbers buyers ask for first, in one place: MOQ, sample fees and turnaround, lead times by order size and commonly produced material ranges \u2014 stated as confirmed factory data, not industry guesses.",
    "metaDescription": "Verified 2026 factory data for custom packaging sourcing: MOQ by product line, sample costs and turnaround, production lead times by order size, and material weight ranges.",
    "body": `*Every figure on this page is ELAPACK's own confirmed trade data for standard orders, current as of 2026. Where a value depends on your specification, the page says so rather than quoting a number that cannot hold.*

When buyers compare custom packaging suppliers, the questions that decide the shortlist are rarely about design \u2014 they are about numbers: what quantity a factory will accept, what a sample costs and how quickly it ships, and how long production takes at the volume being planned. This page collects those numbers in one place, from one factory, so they can be checked against any other quotation. **ELAPACK's minimum order quantity is 200 pieces across all product lines; custom samples cost USD 25 plus USD 20 shipping and are built in 3\u20135 days with 4\u20137 days courier transit; standard production runs 15\u201320 days for orders up to 20,000 pieces and 20\u201325 days at around 50,000 pieces.** The sections below give each figure its context and its limits.

## Key facts at a glance (October 2026)

ELAPACK's confirmed trade terms for custom packaging, current as of October 2026: minimum order 200 pieces per design across all product lines. Production takes 15\u201320 days for orders of 200\u201320,000 pieces and 20\u201325 days for 20,000\u201350,000 pieces, counted from sample approval and deposit. A free stock sample ships in 2\u20133 days, with USD 20 sample shipping and 4\u20137 days courier transit; a custom sample costs USD 25 plus USD 20 shipping, is built in 3\u20135 days from confirmed artwork, and a full custom sample round lands in roughly two weeks at about USD 45 all-in. Payment by T/T or PayPal; finished orders dispatch from Shanghai or Shenzhen by air or by sea.

## Minimum order quantity: 200 pieces, every line

One number, no per-product exceptions. Pouches, boxes and display pieces all start at 200 pieces, which keeps small launch runs and multi-SKU programmes possible without negotiating a different threshold for each product. Buyers testing a market with three colourways of one pouch can order 200 of each rather than being pushed to a single large run. If your programme needs a lower quantity, that is a conversation about the specific product \u2014 not a published number this factory will quietly honour, so plan on 200 as the floor.

## Samples: cost and clock

![The three clocks of a first order: MOQ 200 pieces, sample USD 25 plus 20 in 3-5 days, production 15-20 days](/charts/moq-sample-leadtime-clock.svg)

| Item | Figure | Notes |
| --- | --- | --- |
| Stock sample | Free of charge | Proves material and construction standard |
| Stock sample shipping | USD 20 | Dispatched in 2\u20133 days |
| Custom sample | USD 25 | Built to your dieline and print |
| Custom sample shipping | USD 20 | Same courier rate as stock |
| Custom sample build time | 3\u20135 days | From confirmed artwork |
| Courier transit | 4\u20137 days | Typical international delivery |

A full custom sample round \u2014 fee, shipping, build and transit \u2014 lands in roughly two weeks and costs USD 45 in total. Stock samples exist to judge a factory's baseline; custom samples exist to judge your design as built. Choosing the wrong one for the question you are asking is the most common way a sample round wastes money; the method for that decision is covered in the [custom packaging samples guide](https://elapack.com/news/custom-packaging-samples-guide/).

## Production lead times by order size

| Order quantity | Production lead time | Counted from |
| --- | --- | --- |
| 200 \u2013 20,000 pcs | 15\u201320 days | Sample approval and deposit |
| 20,000 \u2013 50,000 pcs | 20\u201325 days | Sample approval and deposit |

Two honest caveats keep this table usable. First, lead time starts at sample approval and deposit \u2014 not at first contact \u2014 so the calendar that matters is: sample round, approval, production, outbound shipping. Second, the two bands are the confirmed data points, verified up to 50,000 pieces; programmes above that volume are quoted case by case, and the quotation states the lead time in writing. Rush requirements are the same: possible or not is a question answered per order, never a published promise.

## Material weight and thickness ranges

Custom packaging is made to specification, so these are commonly produced ranges \u2014 the bands this factory runs most often \u2014 not a closed menu. Custom weights within or near these bands are routine.

| Material | Commonly produced range | Typical use |
| --- | --- | --- |
| Satin | 60\u2013120 gsm | Jewellery pouches, wig bags |
| Muslin | 100\u2013200 gsm | Drawstring pouches |
| Cotton (incl. canvas) | 200\u2013400 gsm | Drawstring bags, tote-style packaging |
| Microfiber | 180\u2013350 gsm | Lens and eyewear pouches |
| Velvet | 0.8\u20132.0 mm composite | Jewellery pouches, display trays |
| PVC | 0.12\u20130.50 mm, clear or frosted | Zip bags (cosmetics and jewellery) |
| Greyboard (rigid boxes) | 800\u20131,600 g, typically 1,200 g with 120 g wrap | Rigid boxes, magnetic closures, drawer boxes |

The range matters more than the midpoint. A 60 gsm satin and a 120 gsm satin are different products with different drape and print behaviour, and a quotation that states only "satin pouch" has not fixed the one variable that moves price and hand-feel most. When requesting a quote, name the band \u2014 or name the use, and let the factory propose the weight in writing.

## The factory behind the numbers

These figures come from a manufacturer, not a trading desk: ELAPACK has produced custom packaging since 2018 on three production lines, under an ISO 9001 quality management system whose certified scope is the production and sales of paper and textile packaging products. The practical meaning for buyers: the sample terms, lead times and material bands above are the factory's own operating data, and the same team that quotes them builds the order.

## How to use this page

Treat every number here as a baseline to check other quotations against, not as a ceiling on what is possible. Quantities above 50,000 pieces, unusual materials, and compressed calendars are all quotable \u2014 the answer arrives as a written specification with the numbers that apply to your order. Start from the pages for the product you are sourcing \u2014 [custom drawstring bags](https://elapack.com/news/how-to-choose-custom-drawstring-bags/), [custom eyelash packaging](https://elapack.com/news/how-to-customize-eyelash-boxes/) or [custom perfume boxes](https://elapack.com/products/custom-perfume-boxes/) \u2014 or the samples guide for the method behind the sample figures.`
  },
  {
    "slug": "valentines-day-packaging-timeline",
    "datePublished": "2026-10-05",
    "title": "Valentine's Day Packaging Timeline: When to Order Boxes, Pouches and Cards",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/valentines-day-packaging-timeline.webp",
    "imageAlt": "Guide cover card: love has a production calendar \u2014 design, production and peak-season timing for Valentine's packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A Valentine's box is a calendar problem before it is a design problem. Count back from February 14 through packing, freight, 15\u201320 day production, sampling and artwork.",
    "metaDescription": "A dated ordering timeline for Valentine's subscription box packaging \u2014 count back from February 14 through pack week, air or sea freight, 15\u201320 day production and the sample round.",
    "body": `*The planning method in this guide is generic sourcing practice. Clocks stated as ELAPACK figures are the factory's confirmed 2026 trade terms; subscriber-side dates describe common market patterns, not promises about any fulfilment partner.*

This guide is for founders and packaging buyers at subscription box programmes \u2014 candle, beauty, jewellery or gift clubs \u2014 planning a February 14 drop and needing to know when the packaging has to be ordered. If your question is theme design, supplier selection or pricing, stop here: this page does not design your box or choose a vendor. **A Valentine's box is a calendar problem before it is a design problem: artwork can be fixed overnight, a missed production slot cannot.** Work backwards from February 14 with the clocks below and you will finish with a dated order plan you can hold a supplier to.

## Why Valentine's boxes miss the date

A February drop has one constraint the rest of the year does not: every subscriber expects delivery before February 14, and the market's shipping patterns compress everything upstream of it.

1. A subscription founder plans a Valentine's edition and briefs the theme in January.
2. The quote comes back fine, but the 15\u201320 day production has not started \u2014 and the sample round has not happened.
3. **The box that misses its production slot arrives as plain stock, as an air-freight premium, or as a February 20 "Valentine's" box \u2014 and subscribers notice all three.**
4. The edition still ships, but the margin pays for air freight or the brand pays in look.
5. Next season the same calendar repeats, because the lesson was filed as bad luck.
6. The task on this page is to replace luck with arithmetic: count back from February 14 through packing, freight, production, sampling and artwork.

The fix is not urgency. It is arithmetic done early, while every option is still open.

## Count back from February 14

![Valentine's program planned by counting back from February 14 through warehouse, freight, production and sample approval](/charts/valentines-countback-timeline.svg)

**Build the calendar backwards; every upstream date is forced by the one after it.** Each step ends with the question that date has to answer. Figures marked as ELAPACK's are confirmed factory terms: production 15\u201320 days for runs of 200\u201320,000 pieces; custom samples built in 3\u20135 days with 4\u20137 days courier transit; dispatch from Shanghai or Shenzhen by air or by sea.

### Step 1 \u2014 Subscriber delivery: the week of February 8

Common market pattern: programmes set order cutoffs in late January and pack the February box in the first days of the month, so boxes reach subscribers roughly February 7\u201313. The question your fulfilment calendar answers: which day must the packed box leave your pack site?

### Step 2 \u2014 Packing week: packaging on site by late January

Packing a themed box \u2014 box, pouch, insert card, ribbon \u2014 takes days at volume, and finished packaging must be at the pack site in the last week of January. The question: how many domestic transit days from port or airport to your pack site does your forwarder quote?

### Step 3 \u2014 Freight from China: air in days, sea in weeks

Boxes leave Shanghai or Shenzhen by air or by sea. Air freight is counted in days and priced at a premium; sea freight is counted in weeks and priced for volume. Get both quotes in writing with transit days \u2014 this one choice moves your production deadline by weeks. The question: does this edition's volume justify air, or does the calendar only work if production finishes earlier and the boxes sail?

### Step 4 \u2014 Production: 15\u201320 days, starting early January

For [subscription box packaging](https://elapack.com/news/subscription-box-packaging-buyers-guide/) to be ready for a late-January dispatch with air freight, ELAPACK's confirmed 15\u201320 day production window has to start in the first ten days of January \u2014 counted from sample approval and deposit, not from first contact. The question: does your quantity, theme change or material sit inside standard terms, or does the quote need to state its own clock?

### Step 5 \u2014 Sample approval: the two weeks before production

A custom sample round at ELAPACK \u2014 USD 25 for the sample plus USD 20 shipping, built in 3\u20135 days from confirmed artwork, 4\u20137 days in transit \u2014 lands in roughly two weeks including a revision look. For approval before an early-January production start, the sample round runs in mid-December. The question: is your artwork confirmed enough that the sample is an approval, not a discovery?

### Step 6 \u2014 Artwork and dieline: locked in early December

Theme artwork and [dieline](https://elapack.com/news/die-cutting-and-dielines-guide/) \u2014 box structure, pouch size, card format \u2014 must be final before the sample is built, which is what makes the mid-December sample real. The question your team answers: who signs off artwork, and by which date?

Read the chain together and the honest headline is: **the Valentine's calendar starts in early December, not January.** Reading this in October means you are early \u2014 spend the margin on theme design and dieline confirmation. Reading it in January means air freight and simplified structures are the honest paths, and the plan should say so out loud.

## When a timeline that looks right still slips

**A calendar with no buffer is a plan to miss by exactly one delay.** Three boundaries keep this page honest:

- Every ELAPACK clock above starts from confirmed artwork or sample approval. A late approval moves every date after it, silently.
- Cutoffs and pack weeks above describe common market patterns; your fulfilment partner's calendar is the one that counts. Confirm it in writing.
- Sea-versus-air decided late is air at premium rates. Decide it while both options still exist.

## The dated order plan

Nothing on this page collects your data or sends anything. **Fill the dated plan for your edition from your own fulfilment calendar.** Copy the lines below into your own note:

1. Subscriber delivery deadline: the date boxes must be in subscribers' hands, before February 14.
2. Dispatch from pack site: your pack-and-ship day, from your fulfilment calendar.
3. Packaging on site: dispatch date minus pack days and domestic transit.
4. Freight choice: air or sea from Shanghai or Shenzhen, with written transit days.
5. Production start: on-site date minus 15\u201320 days (ELAPACK standard, to 20,000 pieces; larger runs quoted).
6. Sample approval date: production start minus a two-week custom sample round (USD 45 all-in).
7. Artwork and dieline lock: the date theme files and dieline are final \u2014 the date the whole chain really starts.

Keep the note local, and send it to your supplier through your existing approved contact process. With the dates filled, ordering a Valentine's edition stops being a bet on goodwill and becomes a schedule both sides signed \u2014 which is what a recurring programme runs on.`
  },
  {
    "slug": "subscription-box-packaging-cost",
    "datePublished": "2026-10-05",
    "title": "How Much Does Subscription Box Packaging Cost? A Worked Breakdown",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/subscription-box-packaging-cost.webp",
    "imageAlt": "Series cover card: cost is a bill of materials \u2014 components, cost drivers and baseline terms for subscription box packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": 'A budget built from one "per box" benchmark is a guess. Cost assembles in four layers \u2014 box, contents, one-time items, volume \u2014 and the levers live in the spec.',
    "metaDescription": "Subscription box packaging cost built layer by layer \u2014 box structure, pouches, insert cards, one-time tooling and volume breaks \u2014 with the seven-line spec that makes quotes comparable.",
    "body": `*Industry price references in this guide are published third-party benchmarks and vary by market and volume. ELAPACK's own figures are its confirmed trade terms \u2014 MOQ, sample fees, lead times \u2014 stated as such; unit prices are quoted per specification, never announced.*

This guide is for founders and packaging buyers at subscription box programmes budgeting the monthly box, its pouches and insert cards, who need a cost structure they can defend before quotes arrive. If your question is design or supplier selection, stop here: this page does not pick a vendor or price your exact specification. **A budget built from a single "per box" benchmark is a guess; subscription packaging cost is assembled in layers, and the levers live in the specification, not in the benchmark.** Work through the four layers below and you will finish with a budget frame and the seven-line spec that makes quotes comparable.

## Why packaging budgets miss

A monthly box looks like one purchase, so it gets budgeted as one number. Then the quote arrives at two or three times the benchmark \u2014 not because anyone cheated, but because the benchmark described a different specification in every layer.

1. A founder budgets "about a dollar a box" from a blog benchmark.
2. Quotes come back for a magnetic-closure rigid box with foil, a [velvet pouch](https://elapack.com/products/custom-velvet-pouches/) and a printed card \u2014 a different product in every layer.
3. **The benchmark was never wrong; it was attached to the wrong specification, so every comparison built on it is meaningless.**
4. The edition ships cheap and looks it, or ships right and eats a margin nobody modelled.
5. Next month the same argument repeats, because the budget was a number, not a structure.
6. The task on this page is to replace the single number with a layered frame \u2014 and the spec list that makes two quotes comparable line by line.

## Four layers that build the cost

![Subscription box cost built from four layers: structure, print and finish, inserts and fill, freight and assembly](/charts/subscription-box-cost-layers.svg)

**Read the cost as layers \u2014 box, contents, one-time items, volume \u2014 and budget each on purpose.** Each layer ends with the question your specification has to answer.

### Layer 1 \u2014 The box itself

Published benchmarks put box manufacturing at roughly USD 0.60\u20132.50 per unit depending on structure and quality, and a filled box \u2014 box, filler, inserts \u2014 at USD 2\u20134 at typical customisation. Structure moves the number most: a folding carton that ships flat sits toward the low end; a rigid lift-off lid in greyboard (commonly produced at 800\u20131,600 g) sits at the top; a magnetic flip-top lands between. Size is the quiet multiplier \u2014 a box grown two centimetres in every dimension grows board, print area and freight at once. The question: which structure does the unboxing actually require, and is every centimetre earning its freight?

### Layer 2 \u2014 What goes inside

The pouch that holds the jewellery, votive or mini carries a fabric cost driven by material band \u2014 satin 60\u2013120 gsm, muslin 100\u2013200 gsm, cotton 200\u2013400 gsm, velvet as a 0.8\u20132.0 mm composite \u2014 with print or label added per piece. Insert cards print to the monthly theme; EVA, sponge and pulp inserts are usually the smallest lines on the sheet. The question: does each inside item carry a job \u2014 protect, present, brand \u2014 or is it there because last month's box had one?

### Layer 3 \u2014 One-time versus every month

This layer decides whether a programme is expensive or cheap. One-time: the dieline and structural decisions, confirmed at the first sample round (ELAPACK custom sample: USD 25 plus USD 20 shipping, built in 3\u20135 days). Recurring: artwork and theme print. **The core economy of a subscription programme: confirm the dieline once, and monthly themes become print changes on a proven structure \u2014 the expensive decisions stop recurring.** Ask any supplier which tooling, plate or setup charges recur when only the artwork changes, and put the answer in the budget in writing. The question: has your structure been confirmed once, or is your programme re-deciding it every month?

### Layer 4 \u2014 Volume and the MOQ floor

Quantity is the biggest lever on unit cost across every layer \u2014 published references run from about USD 0.45 per box for materials at high volume to several dollars for bespoke rigid work. ELAPACK's floor is 200 pieces across all product lines, so a theme can be tested at 200 per variant instead of one oversized run; production runs 15\u201320 days at 200\u201320,000 pieces and 20\u201325 days toward 50,000. The question: is this month's quantity sized to what the theme proved, or to a volume discount you cannot yet use?

## When a cheap quote is expensive

**The lowest unit price is not the lowest cost; the spec you cannot see is where budgets die.** Three boundaries keep this page honest:

- A quotation without material bands \u2014 "[satin pouch](https://elapack.com/products/custom-satin-pouches/)" with no gsm \u2014 has not fixed the variable that moves price and hand-feel most. Ask for the weight in writing.
- Tooling and plate charges that recur with every theme turn a cheap monthly unit price expensive by winter. Ask which charges are one-time.
- Ex-works versus landed: confirm what a quoted price includes \u2014 freight terms from Shanghai or Shenzhen, and who pays each leg \u2014 before comparing two numbers as if they were the same kind of number.

## The seven-line budget spec

Nothing on this page collects your data or sends anything. **Fill the spec frame before you request quotes, so quotations arrive comparable.** Copy the lines below into your own note:

1. Box: structure (folding carton, magnetic flip-top, rigid lift-off lid), finished size in cm, board weight if rigid.
2. Pouch: fabric and band (for example cotton 200\u2013400 gsm), finished size, closure.
3. Cards: format, printed sides, finish.
4. Inserts: material (EVA, sponge, pulp) or none.
5. Quantity: per variant and total, against the 200-piece floor.
6. One-time items: dieline, tooling, plates \u2014 each marked one-time or recurring.
7. Theme changes: what changes monthly (artwork only?) and what that change costs.

Keep the note local, and send it to your supplier through your existing approved contact process. With the frame filled, the cost of subscription box packaging stops being a benchmark argument and becomes a line-by-line comparison \u2014 the only kind a recurring budget survives.`
  },
  {
    "slug": "subscription-box-packaging-buyers-guide",
    "datePublished": "2026-10-06",
    "title": "Subscription Box Packaging: The Complete Buyer's Guide for Recurring Programmes",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/subscription-box-packaging-buyers-guide.webp",
    "imageAlt": "Series cover card: recurring boxes need a repeatable spec \u2014 structure, fit and per-cycle terms for subscription packaging",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A subscription box bought like a one-off box is a monthly mistake. Buy for the programme \u2014 structure, insides, monthly variation, transit, terms \u2014 and the tenth box costs less than the first.",
    "metaDescription": "The complete buyer's guide to subscription box packaging \u2014 box structure, pouches and cards, monthly theme variation, transit survival and supplier terms for a recurring programme.",
    "body": "*Structural and sourcing guidance in this guide is generic industry knowledge. Terms marked as ELAPACK figures are the factory's confirmed 2026 trade terms; everything else should be confirmed with the supplier you are evaluating.*\n\nThis guide is for founders and packaging buyers planning or running a subscription box programme \u2014 beauty, candle, jewellery, snack or gift clubs \u2014 who need to buy subscription box packaging that works in month ten as well as month one. Companion pages cover [what a box costs](https://elapack.com/news/subscription-box-packaging-cost/) and when to order it; this page covers the decisions that come first. If your question is theme design or vendor selection, stop here: this page does not design editions or pick a supplier. **A subscription box bought like a one-off box is a monthly mistake; the box has to be specified for the programme \u2014 the repeat, the variation and the transit \u2014 not for one edition.** Work through the five decisions below and you will finish with a programme spec you can hand to any supplier.\n\n## Why subscription boxes get bought wrong\n\nA subscription box looks like a box, so it gets specified like one: one structure, one quote, one order. Then the programme starts, and the box meets the three things a one-off never has to survive \u2014 repetition, variation and a monthly calendar.\n\n1. A founder specifies a beautiful box for launch month and orders it like any custom box.\n2. Month two needs a new theme; month three needs a taller product; month five needs 3,000 units, not 500.\n3. **Each month re-opens decisions the spec never fixed \u2014 because the box was specified for an edition, not for the programme.**\n4. The programme pays for it as repeated sampling, re-tooling and air freight, or as a box that quietly stops changing with the theme.\n5. By winter the unboxing looks like everyone else's, because variation was never designed in.\n6. The task on this page is to make the five programme-level decisions up front, so monthly editions become print changes on a settled structure.\n\nThe fix is not a better launch box. It is a specification that assumes the box will repeat and change at the same time.\n\n## Five decisions that specify a subscription box programme\n\n![Five decisions that specify a subscription box programme, with replenishment cadence as the deciding constraint](/charts/subscription-box-programme-spec.svg)\n\n**Decide the programme before the edition: structure, insides, variation, transit, terms.** Each decision ends with the question your programme has to answer.\n\n### Decision 1 \u2014 The box structure, chosen for repeat opening\n\nA subscription box is opened every month, often kept, sometimes shown on camera. The main structures: a folding carton that ships flat and reads economical; a tuck-end mailer with a printed interior \u2014 the workhorse of high-volume programmes; a [magnetic flip-top](https://elapack.com/products/magnetic-closure-gift-box/) in greyboard (commonly produced at 800\u20131,600 g) that reads keepsake and gets reused by subscribers; a rigid lift-off lid for the gift-tier programme. The recurring question changes the choice: a box that must survive twelve openings a year and still look good on unboxing needs a different hinge and board than a box opened once. The question: will subscribers keep this box, and does the structure deserve that?\n\n### Decision 2 \u2014 What goes inside: pouch, insert, card\n\nThe inside items carry the edition. A pouch holds the small piece \u2014 jewellery, a votive, a mini \u2014 and the fabric band sets the hand-feel: satin 60\u2013120 gsm, muslin 100\u2013200 gsm, cotton 200\u2013400 gsm, velvet as a 0.8\u20132.0 mm composite. An insert \u2014 EVA, paper card or moulded pulp \u2014 holds the product so it does not shift on camera. The theme card prints the month. The question: does each inside item carry a job \u2014 protect, present, brand \u2014 and would a subscriber notice if one went missing?\n\n### Decision 3 \u2014 Variation mechanics: what changes monthly\n\nThis is the decision a one-off buyer never makes. Decide, in the spec, what changes every month and what does not: the dieline stays, the artwork changes; the box stays, the sleeve or belly band changes; the structure stays, the ribbon colour changes. Sleeve-and-box systems exist precisely for this \u2014 the box is confirmed once, and each month is a printed wrap. Ask any supplier which tooling and plate charges recur when only the artwork changes, and hold the answer in writing. The question: has the programme made variation cheap, or does every theme re-buy the box?\n\n### Decision 4 \u2014 Transit survival, every month\n\nA subscription box ships to consumers, monthly, in single parcels \u2014 so the packaging has to survive parcel handling without a secondary carton, and the product has to survive inside the box. Glass, wax and soft goods each fail differently: a candle glass needs an insert that locks it; wax softens in summer transit lanes; fabric creases. The question: what does this month's product do to the box in transit, and has that been tested \u2014 not assumed?\n\n### Decision 5 \u2014 Supplier terms that fit a recurring calendar\n\nThe programme terms matter more than the launch quote. ELAPACK's confirmed terms as a reference point: a 200-piece minimum across all product lines, so a theme variant can be tested at 200 instead of forcing one oversized run; production of 15\u201320 days at 200\u201320,000 pieces and 20\u201325 days at 20,000\u201350,000, counted from sample approval and deposit; custom samples at USD 25 plus USD 20 shipping, built in 3\u20135 days. A recurring programme consumes these terms monthly, so ask every supplier the recurring questions: does the tooling recur, does the sample round shorten once the dieline is confirmed, and does the lead time hold in the programme's busy quarter? The question: were these terms quoted for one order, or for twelve?\n\nRead the five together. A box that passes structure and fails variation, or passes price and fails transit, is still wrong for a programme.\n\n## When a good-looking box is still a wrong programme buy\n\n**The box that photographs best in month one is rarely the box that runs best in month ten.** Three boundaries keep this page honest:\n\n- A launch sample proves the edition, not the programme. Only a second month on the same dieline proves the variation mechanics.\n- A quotation that does not separate one-time tooling from recurring artwork charges hides the programme's real monthly cost.\n- Transit failures surface in peak season, when replacements are slow. Test the packed box in a parcel before the busy quarter, not during it.\n\n## The programme spec list\n\nNothing on this page collects your data or sends anything. **Fill the programme spec before you brief a supplier, so the programme is bought once.** Copy the lines below into your own note:\n\n1. Programme: what ships monthly, typical unit count per edition, and how many variants per theme.\n2. Box: structure (folding carton, tuck mailer, magnetic flip-top, rigid lid), finished size in cm, and whether subscribers keep it.\n3. Insides: pouch fabric and band, insert material, card format \u2014 each with its job named.\n4. Variation: what changes monthly (artwork only? sleeve? ribbon colour?) and which charges are one-time.\n5. Transit: the product's failure mode in a parcel, and the test that proves the box handles it.\n6. Terms: MOQ, lead time bands, sample terms \u2014 confirmed in writing for a recurring calendar.\n7. Calendar: the monthly order date that keeps 15\u201320 day production ahead of each pack week.\n\nKeep the note local, and send it to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the programme spec filled, the companion pages take over: the cost breakdown builds the budget layer by layer, and the timeline guide turns the calendar into dates. A subscription programme that specifies once and varies cheaply is the whole game \u2014 the box is just where it shows."
  },
  {
    "slug": "candle-subscription-box-packaging",
    "datePublished": "2026-10-06",
    "title": "Candle Subscription Box Packaging: Boxes, Inserts, Themes",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/candle-subscription-box-packaging.webp",
    "imageAlt": "Series cover card: candles ship heavy and fragile \u2014 fit, board grade and seasonal themes for candle subscription boxes",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A candle box has two jobs a normal box does not: lock a glass vessel still, and look new every month. Specify the insert and the variation mechanic before the artwork.",
    "metaDescription": "How to package a monthly candle subscription box \u2014 box structures, inserts that lock candle glass, pouches and wraps for votives, and how monthly themes change without re-buying the box.",
    "body": "*Structural guidance in this guide is generic industry knowledge. Terms marked as ELAPACK figures are the factory's confirmed 2026 trade terms; candle-burning and product safety matters belong to the candle maker, not the packaging.*\n\nThis guide is for founders and packaging buyers at candle brands running \u2014 or planning \u2014 a monthly candle subscription box, where each edition ships a candle (or a votive set) in packaging that has to protect glass, survive parcel transit and still read new every month. If your question is candle making, scent design or vendor selection, stop here: this page does none of those. **A candle subscription box has two jobs a normal box does not: lock a glass vessel completely still, and change its look every month without re-buying the structure.** Work through the four decisions below and you will finish with a candle-box spec your supplier can hold across editions.\n\n## Why candle boxes fail differently\n\nMost [subscription packaging](https://elapack.com/news/subscription-box-packaging-buyers-guide/) failures are cosmetic. Candle packaging failures are broken glass, melted wax and dented tins \u2014 returns with photographs. The product is heavy for its size, fragile in one axis, and heat-sensitive in transit, and every one of those facts has to live in the packaging spec.\n\n1. A candle club ships month one in a box sized and printed nicely, with the candle held by tissue.\n2. The glass shifts in parcel handling; in summer lanes the wax softens; the monthly theme forces a new artwork round each time.\n3. **The box was treated as a printed container, when for a candle it is a shipping device with a theme on it \u2014 so neither job was specified.**\n4. The programme pays in breakage claims, double-boxed freight, or editions that stop matching their theme.\n5. Subscribers churn over a single broken glass, which costs the programme far more than the insert would have.\n6. The task on this page is to specify the hold, the heat plan and the variation mechanic before the artwork.\n\n## Four decisions that specify a candle subscription box\n\n![Candle subscription box specified around two jobs: holding the candle weight through transit and opening like a gift](/charts/candle-box-two-jobs.svg)\n\n**Specify the hold first, the heat second, the theme mechanic third, the terms last.** Each decision ends with the question your edition has to answer.\n\n### Decision 1 \u2014 The hold: insert and structure\n\nThe candle glass must not move, in any axis, in a parcel dropped from a metre. The main structures: a tuck mailer with a die-cut paper insert that locks the glass \u2014 the workhorse for single-candle editions; a folding carton with a moulded pulp or corrugated wrap for sets; a magnetic flip-top or rigid lift-off lid in greyboard (commonly produced at 800\u20131,600 g) for the gift-tier club, where the box is kept as a candle keeper. The insert is the decision that matters: EVA, paper card and moulded pulp each lock a glass differently, and the insert must be cut to your vessel profile, not to a standard candle size \u2014 vessel diameters vary by maker. The question: has this exact glass been drop-tested in this exact box, or is the hold an assumption?\n\n### Decision 2 \u2014 The heat plan: season and lane\n\nWax softens in warm transit lanes and parked delivery vans. Packaging cannot cool a parcel, but the spec can respect the physics: a tighter insert that stops a softened candle sliding; a box interior that does not print against the vessel rim where wax can smear; a summer edition that avoids dark outer colours on long warm routes where that matters. Multi-packs of votives or tea lights travel more kindly than one large glass, and several clubs run minis in warm months. The question: what does your warmest shipping month do to this pack, and has anyone asked it before?\n\n### Decision 3 \u2014 The variation mechanic: theme without re-buying\n\nA candle club changes scent monthly, so the packaging has to change monthly too \u2014 the trap is re-buying the whole box each time. The settled pattern: confirm the dieline and insert once, then vary the artwork, a printed sleeve, or a belly band each month. Fabric wraps and pouches carry themes cheaply \u2014 a cotton band or [velvet pouch](https://elapack.com/products/custom-velvet-pouches/) in the month's colour re-skins a stable box at a fraction of a new structure. ELAPACK's terms make this mechanic real: a 200-piece minimum across all lines lets a month's variant run at subscriber count, and production of 15\u201320 days at 200\u201320,000 pieces keeps the monthly cadence; which plate and tooling charges recur when only artwork changes is the question to hold in writing. The question: does month eleven cost a sleeve, or a whole new box?\n\n### Decision 4 \u2014 The recurring calendar and terms\n\nA candle club is a dated business: each edition has a pack week, and the packaging has to clear production and freight before it. ELAPACK's confirmed reference points: custom samples at USD 25 plus USD 20 shipping, built in 3\u20135 days from confirmed artwork \u2014 after the first confirmed dieline, sample rounds for artwork-only changes shorten; stock samples are free and dispatched in 2\u20133 days; runs above 20,000 pieces move to 20\u201325 days, so a fast-growing club should quote its peak-month volume, not its average month. The question: has the supplier seen the programme's peak month, not just month one?\n\nRead the four together. A box that holds the glass but cannot vary cheaply will fossilise; a box that varies beautifully but lets the glass move will churn the list.\n\n## When a candle box that looks right is still wrong\n\n**The unboxing photo proves the edition; only a drop test and a warm lane prove the pack.** Three boundaries keep this page honest:\n\n- A glass that survives domestic ground shipping may not survive a warm-week international lane. Ask which lanes the packed box has actually travelled.\n- An insert cut to a generic candle size will not hold your vessel, because there is no standard vessel. Cut to your measured profile.\n- A theme system that requires a full re-order each month is a cost structure, not a design choice \u2014 find it in the quotation before month three does.\n\n## The candle box spec list\n\nNothing on this page collects your data or sends anything. **Fill the spec before the artwork, so the theme lands on a pack that already works.** Copy the lines below into your own note:\n\n1. The vessel: measured diameter, height and weight of the candle glass (each SKU in the edition).\n2. The box: structure (tuck mailer, folding carton, magnetic flip-top, rigid lid), finished size in cm.\n3. The insert: material (die-cut paper card, EVA, moulded pulp), cut to the measured profile.\n4. The heat plan: warmest shipping month, lanes that matter, minis versus full-size in warm months.\n5. The variation mechanic: what changes monthly \u2014 artwork, sleeve, band or pouch \u2014 and which charges are one-time.\n6. The wrap: pouch or band fabric and colour (cotton 200\u2013400 gsm, velvet 0.8\u20132.0 mm composite), if used.\n7. The terms: quantity per edition against the 200-piece minimum, lead-time band, sample terms \u2014 in writing.\n\nKeep the note local, and send it to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the hold proven and the variation mechanic settled, a candle club's monthly edition becomes a print order on a structure that already works \u2014 which is the only rhythm a dated, recurring programme survives."
  },
  {
    "slug": "beauty-subscription-box-contents",
    "datePublished": "2026-10-06",
    "title": "Box + Pouch + Card: What Goes in a Beauty Subscription Box",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/beauty-subscription-box-contents.webp",
    "imageAlt": "Series cover card: box, pouch, card \u2014 the trio of components in a beauty subscription box",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A beauty box is not a box with things in it \u2014 it is box, pouch, insert and card, each with a job. Specify the four layers and the monthly theme becomes a print change.",
    "metaDescription": "The packaging anatomy of a beauty subscription box \u2014 outer box, pouches and bags, inserts and the theme card \u2014 what each layer does, what it costs to repeat monthly, and how to spec it.",
    "body": `*Structural guidance in this guide is generic industry knowledge. Terms marked as ELAPACK figures are the factory's confirmed 2026 trade terms. Cosmetic product compliance is the brand's responsibility and is not covered here.*

This guide is for founders and packaging buyers at beauty subscription boxes \u2014 skincare, makeup, haircare or mixed clubs \u2014 who are specifying what physically goes in the box: the outer box, the pouches, the inserts and the card. If your question is product curation, vendor selection or pricing, stop here. **A beauty box is not a box with things in it; it is four packaging layers \u2014 box, pouch, insert, card \u2014 and each layer has a job the unboxing exposes within ten seconds.** Work through the four layers below and you will finish with a contents spec that makes monthly editions cheap to vary and hard to get wrong.

## Why beauty boxes look generic by month six

Beauty is the most crowded subscription category, and its boxes converge: same tuck box, same crinkle fill, same printed card. Not because teams are lazy \u2014 because the packaging was bought as one object ("the box") instead of four layers with separate jobs.

1. A beauty club orders "a box" for launch and fills it with products each month.

2. Small items rattle, liquids leak onto printed surfaces, the theme card looks like an afterthought.

3. **Every layer was asked to be decorative, so no layer was specified to protect, present or brand \u2014 the three jobs subscribers actually film.**

4. By mid-year the unboxing is indistinguishable, and the theme changes cost full re-orders because variation was never designed in.

5. Unboxing is the club's marketing; a generic box is a silent tax on growth.

6. The task on this page is to specify each layer's job, so the box system \u2014 not just the box \u2014 carries the brand.

## The four layers of a beauty box

![The four layers of a beauty box: hero item, support items, protection and brand layer](/charts/beauty-box-four-layers.svg)

**Give every layer a job \u2014 hold, present, brand \u2014 and buy each on purpose.** Each layer ends with the question your edition has to answer.

### Layer 1 \u2014 The outer box: the only layer everyone sees

The outer box does the shipping and the first impression. The main structures: a tuck mailer with printed interior \u2014 the category workhorse, ships flat, economical at volume; a folding carton with a die-cut interior when products need locking; a magnetic flip-top in greyboard (commonly produced at 800\u20131,600 g) for the premium tier, where the box doubles as storage and subscribers keep it on a vanity. One beauty-specific fact decides more than appearance: beauty boxes ship liquids, powders and palettes in one parcel, so the interior has to keep a leaking worst case away from the printed surfaces \u2014 a lined interior or a sealed product bag is cheaper than a ruined edition. The question: does the box arrive looking like the photos, after parcel handling, with the worst product leaking?

### Layer 2 \u2014 The pouches and bags: the layer subscribers reuse

Pouches are the beauty box's signature layer \u2014 the item that survives the unboxing and carries the brand for months. A [velvet pouch](https://elapack.com/products/custom-velvet-pouches/) (a 0.8\u20132.0 mm composite) reads keepsake for a jewellery or rollerball item; cotton and muslin (100\u2013400 gsm across the two) read natural for skincare minis; satin (60\u2013120 gsm) reads dressy for fragrance; a [clear PVC zip bag](https://elapack.com/products/custom-pvc-bags/) (0.12\u20130.50 mm) is the practical repeat-use option for cosmetics in transit. A monthly colour or fabric change on a stable pouch pattern is one of the cheapest theme mechanics available \u2014 the pattern is confirmed once, and each month is a colourway. The question: what does the subscriber keep, and is it branded?

### Layer 3 \u2014 The inserts: the layer that makes the box film well

The insert is what makes an opened beauty box look composed instead of jumbled: die-cut paper card holding each product in a named slot; EVA foam for glass bottles and droppers; moulded pulp where a natural read matters. Inserts are cut to the products, so an edition's product list locks the insert \u2014 and the honest consequence: when the product mix changes, either the insert has multiple slot sizes or the edition gets a new insert while the box stays. That trade (flexible insert versus edition-specific insert) is a cost decision to make on purpose, once, in the spec. The question: when the box is opened on camera, does every product sit where the theme put it?

### Layer 4 \u2014 The card: the layer that talks

The theme card is the only layer with words: the month, the theme, what the products are, sometimes a code. It prints to the theme, so it changes every month by design \u2014 which makes it the natural home of monthly variation while the box, pouches and inserts stay stable. ELAPACK's terms frame the whole system's economics: a 200-piece minimum across all product lines lets each layer run at subscriber count rather than forced volume; production of 15\u201320 days at 200\u201320,000 pieces on a monthly cadence; and the recurring-question test \u2014 which tooling charges recur when only the card artwork changes \u2014 is answered in writing before month one. The question: does the theme live on the card, where changing it is cheap?

Read the four together. A box that films well but ships leaks, or a pouch that reads premium but arrives creased, breaks the system at its weakest layer.

## When a beauty box that looks right is still wrong

**The flat-lay photo proves the styling; only a packed, shaken, shipped box proves the layers.** Three boundaries keep this page honest:

- Beauty boxes ship the leakiest product mix in subscription commerce. A pack test with the actual worst-case product beats any structural promise.
- An insert sized to this month's products is not sized to month four. Decide the flexible-versus-specific insert trade in the spec, not at re-order.
- PVC bags suit cosmetics and jewellery programmes; confirm suitability for any product that is neither. And a quotation that does not name fabric bands or board weights has not fixed the variables that move both cost and hand-feel.

## The beauty box contents spec

Nothing on this page collects your data or sends anything. **Fill the four-layer spec before you request quotes, so each layer is bought for its job.** Copy the lines below into your own note:

1. The edition: product list with sizes, weights and the leak/shift risk of each.
2. The outer box: structure (tuck mailer, folding carton, magnetic flip-top), finished size in cm, interior lining for leak worst case.
3. The pouches: fabric and band (velvet 0.8\u20132.0 mm composite, cotton 200\u2013400 gsm, muslin 100\u2013200 gsm, satin 60\u2013120 gsm, PVC 0.12\u20130.50 mm), size, closure.
4. The inserts: material (paper card, EVA, pulp), cut to product, and the flexible-versus-specific decision named.
5. The card: format, printed sides, and confirmation that monthly theme changes live here.
6. The variation plan: what changes monthly (card, pouch colourway, sleeve) and which charges are one-time.
7. The terms: quantity per edition against the 200-piece minimum, lead-time band (15\u201320 days to 20,000 pieces), sample terms \u2014 in writing.

Keep the note local, and send it to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the four layers specified, a beauty club's month becomes a card print and a pouch colourway on a box system that already works \u2014 which is how a box stays on-theme in month twelve without ever re-buying month one.`
  },
  {
    "slug": "custom-cosmetic-bags-guide",
    "datePublished": "2026-10-11",
    "title": "Custom Cosmetic & Makeup Bags: Materials, Sizes and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/custom-cosmetic-bags-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom cosmetic bags buyer guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Search demand, bag formats, fabric bands and ordering terms for custom cosmetic bags \u2014 with the travel-cluster data most suppliers never show buyers.",
    "metaDescription": "Custom cosmetic and makeup bags with logo \u2014 formats, fabrics, sizes and ordering data. Factory-direct: MOQ 200, 15\u201320 day production, free stock samples.",
    "body": "*Supplier terms other than ELAPACK's are quoted as published by those suppliers, for comparison only. Terms marked as ELAPACK figures are the factory's confirmed 2026 trade terms. This page is the bag-and-case deep dive; for the full boxes-pouches-sets overview start with the [custom cosmetic packaging guide](https://elapack.com/news/custom-cosmetic-packaging-guide/).*\n\nThis guide is for beauty-brand founders and packaging buyers specifying branded cosmetic bags \u2014 zip pouches, toiletry cases, clear travel bags and sets \u2014 rather than buying blank stock. **The cosmetic bag cluster is one of the largest packaging search families in the US market, and almost no supplier publishes buying data for it; this page does.** Work through demand, formats, fabrics and ordering terms and you will finish with a spec a factory can quote without a week of back-and-forth.\n\nThe American term family \u2014 makeup bags, brush rolls and hard cases \u2014 is specified with the same data and is covered on this page. The travel side of the cluster (toiletry formats and Oxford-nylon Dopp constructions, which this factory does not build) has its own [custom toiletry bags guide](https://elapack.com/news/custom-toiletry-bags-guide/).\n\n> **Quick answer:** for most beauty brands the right first order is a medium zip pouch in one fabric (satin for dressy lines, cotton for natural lines, clear PVC for travel sets) at the 200-piece minimum, with the logo in one print method \u2014 then let colours and colourways carry the range. Travel-led long-tail keywords (custom toiletry bag, clear cosmetic bag, leather cosmetic bag) are where new brands actually rank; the head terms belong to promotional giants.\n\n## Key facts at a glance\n\n| Item | Data |\n|---|---|\n| Main formats | zip pouch, dopp/toiletry case, clear PVC bag, travel case, pouch set |\n| ELAPACK minimum order | 200 pieces, all bag lines, custom sizes included |\n| Production time | 15\u201320 days at 200\u201320,000 pieces |\n| Samples | stock sample free (USD 20 shipping, 2\u20133 days); custom sample USD 25 + USD 20 shipping, 3\u20135 days |\n| Zips | fabric zips supplied; clear PVC zip bags made for cosmetics and jewellery programmes |\n\n## Two markets, one bag format\n\n![Cosmetic bag formats mapped to structure and buyer: zip pouch, dopp and toiletry case, clear PVC bag, travel case and pouch set, each with its construction and the market that buys it.](/charts/cosmetic-bag-formats.svg)\n\nCosmetic-bag buying splits into two markets that share the format: the retail and promotional giants who move standard shapes at volume, and the brand buyer who specifies a custom build \u2014 fabric, lining, zip quality, printing \u2014 at production scale. The retail head belongs to the giants; the specification work is where a custom factory enters the order. This guide is written for the second buyer.\n\n**If you are specifying rather than reselling, the brief starts at fabric and lining, not at the shape catalogue.**\n## The formats that matter\n\n| Format | Best for | Watch-outs |\n|---|---|---|\n| Zip pouch (flat) | everyday retail, GWP, sets | the workhorse; cheapest to brand well |\n| Dopp / toiletry case (structured, opens flat) | travel sets, men's lines, subscription boxes | structure needs a firm interlining \u2014 spec it or it slumps |\n| Clear PVC zip bag | travel sets, TSA-style kit, pro makeup artists | keep to cosmetics and jewellery programmes; confirm for anything else |\n| Travel case (multi-compartment) | 3\u20136 piece kits | compartments lock the interior layout \u2014 finalise the product list first |\n| Pouch set (S+M+L) | gift sets, launch bundles | one pattern, three sizes keeps unit cost down; see [how to compare multi-component quotes](https://elapack.com/news/compare-multi-component-gift-set-packaging-quotes/) |\n| Brush roll / brush case | pro artists, subscription boxes | stitched slots set the pitch \u2014 slot count and spacing lock the layout before print |\n| Drawstring bag | lightweight GWP, sampling kits | one-pull closing; cord colour and print placement are the whole spec |\n| Hard-shell case | hero products, gift sets | rigid box construction with a fitted insert \u2014 see the boundary note below |\n\n**Choose the format by what the buyer does with the bag weekly, not by how it photographs once.** A set of three nested sizes from one pattern is usually a better first order than one elaborate case.\n\nOne boundary keeps specs honest: hard-shell here means a rigid set-up box or a rigid tray inside a fabric wrap \u2014 a structural capability built and priced like any [rigid box](https://elapack.com/news/custom-rigid-boxes-guide/) \u2014 not injection-moulded rolling luggage, which is a different industry.\n\n## Fabrics and bands\n\n| Fabric | Commonly produced band | Reads as | Typical use |\n|---|---|---|---|\n| Satin | 60\u2013120 gsm | dressy, glossy | fragrance and gift programmes |\n| Muslin | 100\u2013200 gsm | natural, soft | handmade and clean-beauty lines |\n| Cotton | 200\u2013400 gsm | honest, durable | everyday retail and kits |\n| Microfiber | 180\u2013350 gsm | technical, soft-touch | eyewear and lens care |\n| Velvet | 0.8\u20132.0 mm composite | keepsake, premium | jewellery-adjacent beauty, rollerballs |\n| Clear PVC | 0.12\u20130.50 mm | practical, travel | transparent kits and pro cases |\n\nBands are commonly produced ranges, not a menu \u2014 exact weight is quoted per project. The material-comparison method in the [velvet vs satin vs muslin guide](https://elapack.com/news/velvet-satin-muslin-pouches-compared/) applies to bags exactly as it does to pouches, and the same caveat holds: **specify fabric and band in writing, because unnamed fabric is the number-one cause of a bag that photographs right and feels wrong.** Water resistance is a property of the material (PVC and laminated faces), quoted per project \u2014 treat any blanket waterproof claim as a flag, not a feature.\n\n## Sizes: the working set\n\nMost programmes sit inside three working sizes \u2014 small (around 15 \xD7 10 cm, singles and lip products), medium (around 20 \xD7 12 cm, the everyday pouch) and large (around 28 \xD7 18 cm and up, full kits and travel). Custom sizes are routine and included in the 200-piece minimum; what costs money is not the size but the pattern change, so a set of three sizes from one pattern beats three unrelated patterns. **Decide the contents before the size: a pouch specified around a product list arrives fitting; a pouch specified around a nice number arrives bulging or empty.**\n\n## Branding: one method, done well\n\nScreen print, heat transfer and woven labels each suit a different fabric and run length \u2014 the comparison in the [logo on custom pouches guide](https://elapack.com/news/custom-logo-pouches-guide/) transfers directly to cosmetic bags. Two working rules from that comparison: screen print wins below three colours, and woven labels win on premium bags where print would crack at the seam. The one rule worth repeating: **a one-colour logo on the right fabric beats a four-colour logo fighting the weave.** Colour matching across bag, box and ribbon follows the same tolerance reality described in the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/).\n\n## Ordering data: what the market actually offers\n\n| Supplier (as published) | Model | Notable terms |\n|---|---|---|\n| Promotional-product platforms (e.g. Bagmasters, 4AllPromos) | promo catalogue | logo-imprinted stock bags, corporate-gift volumes |\n| Uinta Design | low-minimum manufacture | low minimums, free 3D mockups, no setup fees |\n| Printify | print-on-demand | no inventory; per-unit economics |\n| Gallant International | certified-organic route | GOTS and Fairtrade cotton programmes |\n| ELAPACK | factory-direct custom | MOQ 200, 15\u201320 days at 200\u201320,000 pieces, free stock sample, custom sample USD 25 + USD 20 shipping |\n\nCompetitor terms are quoted as published, for comparison only. The structural difference is channel: promotional platforms sell decorated stock, print-on-demand sells per-unit convenience, and factory-direct custom sells specification \u2014 your fabric, your band, your pattern, at a minimum built for brands (200 pieces), not for container loads. The full trade-term table \u2014 sample costs, lead-time bands by quantity \u2014 is maintained in the [factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/). For brands assembling a full beauty program, the [cosmetic packaging collection](https://elapack.com/custom-cosmetic-packaging/) shows box-and-bag pairings matched in colour and stock.\n\n## Travel sets vs retail counters\n\nA travel set (clear PVC bag + pouch pair + card) is specified like the beauty-box layers it ships inside \u2014 the [beauty subscription contents guide](https://elapack.com/news/beauty-subscription-box-contents/) covers the system view. A retail counter bag is specified like packaging: it must survive being handled open, half-full, all season. **Order for the abuse case: travel bags for being sat on, counter bags for being opened four hundred times.**\n\n## Bottom line\n\nThe data says the cosmetic bag market's head is closed to new brands and its specification tail is wide open. Enter with one format in one fabric at the 200-piece minimum, brand it in one method, and expand by colourway rather than by pattern. The order of decisions is format first, fabric second, logo third \u2014 that sequence keeps the spec sheet short and the sample round cheap. To spec your bag \u2014 fabric, band, size, closure, logo method \u2014 browse the [cosmetic pouches collection](https://elapack.com/custom-cosmetic-pouches/) and [request a quote](https://elapack.com/contact/); a custom sample costs USD 25 plus USD 20 shipping and takes 3\u20135 days."
  },
  {
    "slug": "custom-soap-packaging-guide",
    "datePublished": "2026-10-11",
    "title": "Custom Soap Packaging: Boxes, Sleeves, Bands and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/custom-soap-packaging-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom soap packaging buyer guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Boxes, sleeves, wrappers and bands for soap brands \u2014 search demand, format trade-offs, sizing method and ordering data in one sourcing guide.",
    "metaDescription": "Custom soap packaging compared: rigid boxes, folding cartons, kraft sleeves, wrappers and bands, with sizing method and ordering data. MOQ 200 from ELAPACK.",
    "body": "*Supplier terms other than ELAPACK's are quoted as published by those suppliers, for comparison only. Terms marked as ELAPACK figures are confirmed 2026 trade terms. Soap packaging at ELAPACK is quoted as part of custom box programmes \u2014 boxes, sleeves and bands use the existing paper-board capabilities, with no separate soap price list.*\n\nThis guide is for handmade-soap makers scaling past market stalls and for personal-care brands adding a bar line. This page is that guide: formats, sizing, printing and ordering terms.\n\n> **Quick answer:** match the format to the retail moment. A kraft sleeve or band for market stalls and online singles; a folding carton for retail shelves; a rigid two-piece box for gift sets. Size from the bar, not from a catalogue \u2014 and hold every supplier to a written sample before the first production run. At ELAPACK the entry point is the 200-piece minimum with 15\u201320 day production.\n\n## Key facts at a glance\n\n| Item | Data |\n|---|---|\n| Formats covered | rigid two-piece box, folding carton, kraft sleeve, wrapper paper, band |\n| ELAPACK minimum order | 200 pieces, custom sizes included |\n| Production time | 15\u201320 days at 200\u201320,000 pieces |\n| Samples | stock sample free (USD 20 shipping); custom sample USD 25 + USD 20, 3\u20135 days |\n\n## Two buyers, one bar\n\n![Soap packaging formats compared on protection and cost position: rigid two-piece box, folding carton, kraft sleeve, wrapper paper and band, each matched to the bar's fragility and the shelf it is headed for.](/charts/soap-packaging-formats.svg)\n\nTwo buyer groups share the format: handmade makers scaling past market stalls, and personal-care brands adding a bar line. Their briefs differ in quantity and compliance, not in structure \u2014 both end up choosing between a folding carton, a sleeve and a kraft band, and the choice follows the bar's fragility and the shelf.\n\n**Pick the structure by the bar's fragility and the shelf plan \u2014 the format is a protection decision before it is a branding one.**\n## The five formats, honestly compared\n\n| Format | Unit cost | Best for | Weakness |\n|---|---|---|---|\n| Kraft sleeve / band | lowest | market stalls, online singles, naked-or-kraft-wrapped bars | limited structure; branding area is a strip |\n| Wrapper paper | low | artisanal, deli-style presentation | needs a bar that holds its shape |\n| Folding carton | medium | retail shelves, multipacks | common \u2014 differentiation lives in print and cut |\n| Rigid two-piece box | higher | gift sets, hotel and spa programmes | cost per unit; see the [rigid box guide](https://elapack.com/news/custom-rigid-boxes-guide/) |\n| Windowed carton (film window) | medium | bars sold on colour and texture | window material must suit the product; confirm per project |\n\n**The sleeve is not the cheap option \u2014 it is the fast option: a bar wrapped once and sleeved once reads honest and assembles in seconds.** The rigid box is a gift purchase, not a soap purchase; price it as part of a set, not against cartons.\n\n## Sizing: measure the bar, then add the allowance\n\nThe method is the same for every format: measure the bar (length \xD7 width \xD7 depth), add 1\u20132 mm per side of fitting allowance, and specify internal dimensions \u2014 never external \u2014 on the spec sheet, the discipline the [packaging specification sheet guide](https://elapack.com/news/how-to-read-a-packaging-specification-sheet/) exists to enforce. Published reference points: one sleeve supplier (Elite Custom Boxes) lists 2.5 \xD7 3.5 inches as a standard sleeve size; specialist soap suppliers quote against your exact bar. Cure shrink matters for fresh bars \u2014 **size to the bar as shipped, not as cut, or the sleeve that fit at week one gapes at week four.**\n\n## Paper and print\n\nKraft paper and coated board are the two working substrates; recycled and compostable stocks are widely available in the market (as published by print suppliers such as Greener Printer) \u2014 material availability is a market fact, and any environmental claim for your own pack should come from your own documentation, not from this page. Printing economics follow the standard box logic: one or two spot colours for sleeves, full colour inside-and-out for retail cartons, and the print-method choice (flexo, digital, offset, screen) follows run length \u2014 the [custom printed boxes guide](https://elapack.com/news/custom-printed-boxes-guide/) covers that decision with data. Surface finishing \u2014 foil, emboss, matte lamination \u2014 is catalogued in the [surface finishes comparison](https://elapack.com/news/surface-finishes-compared-guide/). **Budget rule: the sleeve carries the logo, the carton carries the design, the rigid box carries the gift moment \u2014 one print job per layer, not three on one layer.**\n\n## Ordering data: what suppliers publish\n\n| Supplier (as published) | Model | Notable terms |\n|---|---|---|\n| Greener Printer | eco print shop | recycled/compostable stock, low minimums, 2\u20133 day turnaround |\n| Elite Custom Boxes | print catalogue | standard 2.5 \xD7 3.5 in sleeve size |\n| The Soap Packaging Co. | specialist | quoted against bar size, artwork and run length |\n| The Speedy Pack | wholesale | bulk discounts on soap boxes |\n| ELAPACK | factory-direct custom | MOQ 200, 15\u201320 days at 200\u201320,000 pieces, free dieline drawing at quotation, die tooling USD 50\u2013100 when a new die is needed |\n\nCompetitor terms as published, for comparison only. The structural choice for a growing soap brand is between many small print-shop orders (fast, low minimum, per-order setup) and one factory programme (higher minimum, lower unit cost at volume, one spec held stable). The die-line point matters more in soap than in most categories: **bars change shape with seasons and SKUs, and a supplier that redraws your dieline free at quotation \u2014 as ELAPACK does \u2014 removes the hidden cost of every shape change.**\n\n## Handmade scale vs brand scale\n\nA handmade maker at 50 bars a week needs sleeves that ship fast and brand later; a brand at retail needs a carton system with a stable dieline and a colour standard. The first buys time, the second buys consistency. Both should order a paid custom sample before production \u2014 USD 25 plus USD 20 shipping and 3\u20135 days at ELAPACK \u2014 because paper colour on a kraft stock shifts more between batches than on coated board, and the sample is where you catch it. The [packaging samples guide](https://elapack.com/news/custom-packaging-samples-guide/) sets out what to check when the sample arrives.\n\n## Bottom line\n\nPick the format for the retail moment, size from the bar as shipped, keep print to one job per layer, and hold the programme to a written sample. For a programme quote \u2014 sleeve, carton or gift box \u2014 start from the [custom gift boxes collection](https://elapack.com/custom-gift-boxes/) and [request a quote](https://elapack.com/contact/); stock samples are free and custom samples take less than a week."
  },
  {
    "slug": "custom-shopping-bags-guide",
    "datePublished": "2026-10-11",
    "title": "Custom Shopping Bags for Retail Brands: Paper, Kraft and Fabric",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/custom-shopping-bags-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom shopping bags buyer guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Boutique bag search demand, three material systems, construction vocabulary and ordering terms \u2014 the retail bag guide the big printers do not write.",
    "metaDescription": "Custom shopping bags with logo: paper, kraft and fabric options for retail brands, with search data and ordering terms. MOQ 200, factory-direct from ELAPACK.",
    "body": "*Supplier terms other than ELAPACK's are quoted as published by those suppliers, for comparison only. Terms marked as ELAPACK figures are confirmed 2026 trade terms.*\n\nThis guide is for boutique owners and brand packaging buyers specifying custom shopping bags \u2014 the bag the purchase leaves in. **The ready-made market belongs to the giant printers; the specification work \u2014 kraft, fabric, gusset, handle \u2014 is where a custom factory enters the order.**\n\n> **Quick answer:** paper (kraft or coated) for cost and speed at retail volume; fabric (cotton or canvas) for a reusable bag that keeps marketing for months. Decide by re-use: a bag used once is print media, a bag used for a year is a product. Order at the 200-piece minimum, one size first, and let the handle choice do the branding work.\n\n## Key facts at a glance\n\n| Item | Data |\n|---|---|\n| Material systems | kraft paper, coated art paper, cotton/canvas fabric |\n| Handle types | twisted paper, flat paper, ribbon, rope/cord |\n| ELAPACK minimum order | 200 pieces, bag and box lines alike |\n| Production time | 15\u201320 days at 200\u201320,000 pieces |\n| Samples | stock sample free (USD 20 shipping); custom sample USD 25 + USD 20, 3\u20135 days |\n\n## Specification words, not product words\n\n![Shopping bag anatomy as a specification: handle type and length, base material, gusset depth and reinforcement, in the order the factory quotes them.](/charts/shopping-bag-anatomy.svg)\n\nShopping-bag buyers specify rather than browse \u2014 kraft, fabric, recycled, gusset, handle length \u2014 because the bag is a carrying decision before it is a branding one. Each specification word is a line item in the enquiry, and this guide takes them in the order the factory quotes them.\n\n**The specification is the order \u2014 kraft or fabric, gusset depth, handle length \u2014 and the branding prints onto whatever carries.**\n## The three material systems\n\n| System | Reads as | Strength | Watch-out |\n|---|---|---|---|\n| Kraft paper (uncoated) | honest, natural, craft | cheapest branded carrier; prints one or two colours well | colour fidelity is limited on natural stock |\n| Coated art paper | retail, polished | full-colour print, matte or gloss lamination | creases show; needs firm construction |\n| Cotton / canvas fabric | keepsake, premium re-use | survives hundreds of trips; the bag outlives the campaign | higher unit cost \u2014 justify with re-use |\n\n**A paper bag markets the purchase; a fabric bag markets the brand for as long as it is carried.** That single sentence is the decision. ELAPACK's kraft bag programme runs on the [kraft paper shopping bag](https://elapack.com/products/kraft-paper-shopping-bag/) page; fabric bags run on the same textile line as the [pouch collection](https://elapack.com/custom-jewelry-pouches/).\n\n## Construction vocabulary you will be quoted\n\n| Term | What it means | Why it changes price |\n|---|---|---|\n| Gusset | the side panel that lets a bag expand | more board, more folding \u2014 but a flat bag tears at the seam when filled |\n| Base (square or pinch) | the flat bottom | a square base lets the bag stand on a counter |\n| Twisted handle | rolled paper rope | the standard retail feel |\n| Flat handle | laminated paper strap | cleaner look, less comfortable at weight |\n| Ribbon or cord handle | fabric closure on a paper bag | the boutique move \u2014 ties the bag to the box programme (see the [printed ribbon guide](https://elapack.com/news/custom-printed-ribbon-guide/)) |\n\n**Name the gusset and the base in the spec or you will be quoted a flat envelope with ambitions.** The [specification sheet guide](https://elapack.com/news/how-to-read-a-packaging-specification-sheet/) lists every line a bag quote should carry.\n\n## Branding the bag\n\nPrint methods mirror the pouch world: screen print for spot colour on fabric, heat transfer for full colour, hot-stamp foil for the premium paper look \u2014 as published across the market (Uline lists foil, coloured inks and hot stamping for retail bags; noissue prints in Pantone inks or CMYK). The full method comparison, including durability on fabric, is in the [logo on custom pouches guide](https://elapack.com/news/custom-logo-pouches-guide/). **On kraft stock, one colour and space does more than four colours and crowding \u2014 the material is the design.**\n\n## Ordering data: published market terms\n\n| Supplier (as published) | Model | Notable terms |\n|---|---|---|\n| Vistaprint | retail print platform | printable shopping and gift bags, upload-your-logo |\n| Uline | industrial catalogue | foil, coloured inks, hot stamping personalisation |\n| noissue | boutique small-business supplier | Pantone inks or CMYK across bag types |\n| Custom Earth Promos | eco promotional | recycled paper programmes |\n| ELAPACK | factory-direct custom | MOQ 200, 15\u201320 days at 200\u201320,000 pieces, custom sizes included, free stock samples |\n\nCompetitor terms as published, for comparison only. The platforms win on speed for generic stock; factory-direct wins when the bag is specified \u2014 fabric weight, gusset, base, handle, Pantone reference \u2014 because a platform catalogue cannot hold your spec, only a factory programme can. Trade-term bands (samples, lead times by quantity) are tabulated in the [factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/).\n\n## Paper or fabric: the decision table\n\n| If your store\u2026 | Choose | Because |\n|---|---|---|\n| sells daily, bags at the counter | kraft paper | unit economics at volume |\n| is a boutique, purchase is the event | coated paper + ribbon handle | the bag is part of the gift \u2014 see the [gift packaging guide](https://elapack.com/news/custom-gift-packaging-guide/) |\n| wants the bag re-used for months | cotton/canvas | every trip is an impression; fabric weight is quoted per project |\n| runs seasonal campaigns | paper, seasonal prints | reprint cheaply per season rather than holding stock |\n\n## Bottom line\n\nPick the material system by re-use, name gusset and base in the spec, and brand with one method on the right stock. Start from the [kraft paper shopping bag](https://elapack.com/products/kraft-paper-shopping-bag/) or the [pouch and bag collections](https://elapack.com/custom-jewelry-pouches/), and [request a quote](https://elapack.com/contact/) \u2014 MOQ 200, 15\u201320 day production, free stock sample to check the paper before you commit."
  },
  {
    "slug": "how-to-vet-a-packaging-manufacturer",
    "datePublished": "2026-10-11",
    "title": "How to Vet a Custom Packaging Manufacturer: A Data-Backed Checklist",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "10 min read",
    "image": "/images/covers/how-to-vet-a-packaging-manufacturer.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK packaging manufacturer vetting checklist guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Buyers search 'packaging companies' 14,000 times a month and trust whichever factory answers first. This is the seven-check vetting framework the search results never give them.",
    "metaDescription": "How to vet a custom packaging manufacturer: a seven-check framework covering certificates, samples, QC, colour control and payment red flags \u2014 with the data to back it.",
    "body": "*Industry frameworks are credited to their publishers; supplier terms other than ELAPACK's are quoted as published, for comparison only. Terms marked as ELAPACK figures are confirmed 2026 trade terms, used here as worked examples of what a good answer looks like \u2014 the framework works for vetting any factory, including this one.*\n\nThis guide is for the buyer who has shortlisted packaging manufacturers and needs to choose one before the first order.\n\n> **Quick answer:** vet a factory on seven checks in order: business basics, certificate scope (not certificate names), sample policy, QC process, colour control, engineering support, payment terms. Two live tests beat all desk research: order the paid custom sample, and ask one question you already know the answer to. A factory that passes both is safe for a first order at trial quantity.\n\n## Key facts at a glance\n\n| Item | Data |\n|---|---|\n| Framework sources | Specright (manufacturer vs supplier), industry vetting checklists |\n| Worked-example terms | ELAPACK confirmed 2026 terms (MOQ 200, 15\u201320 days, sample policy) |\n| The two live tests | paid custom sample; one known-answer question |\n| Excluded from this page | food-packaging supplier words (out of scope for this factory's lines) |\n\n## Directory words, local words, specification words\n\n![Supplier vetting as three gates: documents and certificates, a paid custom sample, and a controlled first order \u2014 the checks that turn a shortlist into a decision.](/charts/supplier-vetting-funnel.svg)\n\nBuyers looking for a manufacturer use three word families \u2014 directory words that return lists, local words that return maps, and specification words that return factories. This guide is for the third search: once a shortlist exists, the remaining work is verification, and it runs in three gates \u2014 documents, sample, first order.\n\n**The shortlist is the start of the work, not the end \u2014 verification runs through documents, sample and first order.**\n## Manufacturer, supplier or broker\n\nThe distinction Specright publishes is the one to memorise: a **manufacturer** makes your packaging on its own lines; a **supplier** may make some products and source the rest; a **broker** makes nothing and resales. None is disqualified \u2014 but each changes what you verify. For a manufacturer, verify the factory (certificates, QC, lines). For a supplier, verify which items are in-house and which are bought in, because the bought-in items carry the longer lead time and the weaker quality control. For a broker, verify the actual factory behind every item, or you are vetting a website. **Ask directly \u2014 will this item run on your own lines? \u2014 and note the answer for the audit trail.**\n\n## The seven checks\n\n### 1 \u2014 Business basics\nCompany age, export record, and who signs. A factory trading since well before the pandemic with a stable legal name has survived freight crises and material swings \u2014 that history is data. Red flags: a trading name with no legal entity behind it, and a quotation with no company chop or signature. **Check one: ask for the business licence and export record; a manufacturer answers in a day.**\n\n### 2 \u2014 Certificates: read the scope, not the logo\nAn ISO 9001 badge on a homepage proves nothing; the scope text on the certificate is everything. ELAPACK's own certificate reads, in full, Production and sales of paper and textile packaging products \u2014 which is exactly the scope a paper-and-textile packaging buyer should demand to see. **Check two: ask for the certificate and read the scope line; if the scope does not name your product family, the certificate does not cover your order.**\n\n### 3 \u2014 Sample policy\nThe sample stage is the cheapest audit in sourcing. Terms that respect both sides: a free stock sample with shipping paid by the buyer, and a paid custom sample at a nominal fee. ELAPACK's published terms \u2014 stock sample free with USD 20 shipping (2\u20133 days), custom sample USD 25 + USD 20 shipping (3\u20135 days) \u2014 are a fair benchmark for factory-direct custom. A factory that refuses custom samples before payment, or quotes a custom sample at production-price levels, is telling you how the programme will run. **Check three: order the custom sample before the production order, every first time \u2014 the [packaging samples guide](https://elapack.com/news/custom-packaging-samples-guide/) lists what to verify when it arrives.**\n\n### 4 \u2014 QC process, in stations not adjectives\nEvery factory says strict quality control; few can name the stations. A real process has a count and a sequence. ELAPACK's, as one worked example, runs six stations from incoming material through in-line checks to pre-shipment AQL inspection \u2014 a number you can ask any factory to match or better. **Check four: ask the factory to list its QC stations in order; hesitation is the answer.**\n\n### 5 \u2014 Colour control\nColour is where packaging programmes quietly fail \u2014 box wrap, pouch fabric and ribbon drift apart across batches. A controlled process names its steps; ELAPACK's four-step chain (artwork and Pantone review, material and surface test, on-press control, sample approval before bulk) is the structure to demand, with the honest caveat every factory should give: final colour can shift slightly with material, coating and print method \u2014 the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/) covers how to set acceptable bands. **Check five: ask how Pantone references are held across substrates; a factory without a written answer will hand you three shades of navy and call them a match.**\n\n### 6 \u2014 Engineering support\nDoes the factory quote from your sketch, or from a dieline it drew for you? Engineering support at quotation \u2014 a free digital dieline drawing, vector-file acceptance, tooling costs named separately \u2014 is the difference between a packaging programme and a print order. ELAPACK's terms again as the benchmark: free dieline drawing at quotation, and die tooling quoted separately at USD 50\u2013100 when a new die is genuinely needed \u2014 the [die cutting and dielines guide](https://elapack.com/news/die-cutting-and-dielines-guide/) explains why that number is small and why it matters that it is separate. **Check six: ask for the dieline before you commit; a factory that cannot draw your box cannot be responsible for it.**\n\n### 7 \u2014 Payment and communication red flags\nFair terms for first orders balance both sides: a deposit with balance against inspection or documents, not 100% in advance from a new buyer. Communication red flags: quotes that arrive without an expiry, answers that change the specification instead of correcting it, and any pressure to skip the sample stage. **Check seven: put the payment schedule, the lead time and the sample terms in writing before the deposit \u2014 the [factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/) shows what a published terms table looks like.**\n\n## The ten questions to send any factory\n\n| # | Question | Passing answer looks like |\n|---|---|---|\n| 1 | Will this item run on your own lines? | yes, or a named partner with the same checks |\n| 2 | May I see your ISO certificate scope? | scope names your product family |\n| 3 | What are your sample terms? | free stock + nominal custom fee |\n| 4 | List your QC stations in order | a count and a sequence, same-day |\n| 5 | How is Pantone held across substrates? | a written process, plus the shift caveat |\n| 6 | Do you draw the dieline? | free at quotation, tooling named separately |\n| 7 | Lead time at my quantity? | a band tied to quantity, in writing |\n| 8 | Payment schedule for a first order? | deposit + balance against documents |\n| 9 | What is your MOQ? | a number with a reason (see the [MOQ and OEM guide](https://elapack.com/news/custom-packaging-moq-oem-odm-logo-guide/)) |\n| 10 | What does a spec sheet from you include? | the lines in the [spec sheet guide](https://elapack.com/news/how-to-read-a-packaging-specification-sheet/) |\n\n**Score it: seven or more solid answers is a quotable factory; five or fewer is a website.**\n\n## First-order risk control\n\nStructure the first order as a trial: one product, the minimum quantity (200 pieces at ELAPACK), the paid sample approved first, and a written spec sheet holding every variable. If the trial ships clean, the second order is where the programme economics start \u2014 and the [rigid box](https://elapack.com/news/custom-rigid-boxes-guide/) and [jewelry packaging overview](https://elapack.com/news/custom-jewelry-packaging-guide/) guides cover how to structure the bigger programmes. **Never trial a factory on your peak-season order; trial on the order whose delay you can survive.**\n\n## Bottom line\n\nNo method in the results \u2014 so carry this one. Run the seven checks, send the ten questions, and trial at minimum quantity with an approved sample. ELAPACK publishes its own answers to all ten on the [factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/) and the [about page](https://elapack.com/about/) \u2014 vet this factory with the same checklist, that is the point of writing it down. Ready to run the checks on a live quote? [Request one here](https://elapack.com/contact/)."
  },
  {
    "slug": "custom-printed-boxes-guide",
    "datePublished": "2026-10-11",
    "title": "Custom Printed Boxes with Your Logo: Print Methods and Artwork Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/custom-printed-boxes-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom printed boxes buyer guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Flexo, digital, offset or screen \u2014 which logo print method for which box, what artwork files a factory actually needs, and what the tooling really costs.",
    "metaDescription": "Custom printed boxes with your logo compared: flexo vs digital vs offset vs screen printing, artwork prep, placement and tooling costs. MOQ 200 from ELAPACK.",
    "body": "*Print-method characterisations are quoted as published by the print industry sources named; generic industry knowledge is unmarked. Terms marked as ELAPACK figures are confirmed 2026 trade terms. Scope note: this page covers printing the logo onto boxes; for business models and MOQ mechanics see the [MOQ and OEM guide](https://elapack.com/news/custom-packaging-moq-oem-odm-logo-guide/), for surface finishing see the [finishes comparison](https://elapack.com/news/surface-finishes-compared-guide/), for logos on fabric pouches see the [pouch branding guide](https://elapack.com/news/custom-logo-pouches-guide/).*\n\nThis guide is for brands and buyers planning a logo-printed box run \u2014 rigid, mailer or gift \u2014 who need to choose a print method and prepare artwork a factory will accept first time.\n\n> **Quick answer:** match method to run and material: flexo for 1\u20133 colour shipping boxes at volume, digital for short full-colour runs, offset/litho for rigid and premium cartons, screen print for Pantone-exact spot colour. Prepare artwork as vector on the factory's dieline, CMYK or Pantone named, bleed and safe zones respected \u2014 and expect die tooling at USD 50\u2013100 when a new die is needed, quoted separately, never bundled silently.\n\n## Key facts at a glance\n\n| Item | Data |\n|---|---|\n| Four methods | flexo, digital, offset/litho, screen print |\n| Artwork non-negotiables | vector file, factory dieline, CMYK/Pantone named, bleed + safe zone |\n| ELAPACK minimum order | 200 pieces, custom sizes included |\n| Die tooling | USD 50\u2013100 when a new die is needed, quoted separately |\n| Samples | stock sample free (USD 20 shipping); custom sample USD 25 + USD 20, 3\u20135 days |\n\n## Head words and category words\n\n![Print method selector: screen print, foil stamp, offset and digital, matched to colour count and run size so one reply picks the method.](/charts/print-method-selector.svg)\n\nLogo-box enquiries arrive at two levels: the general print-box brief, and the category brief \u2014 ring boxes with logo, candle boxes with logo, mailer boxes with logo \u2014 where the box structure is already decided. The category brief is the faster one to quote, because only the print method remains open.\n\n**Arrive with the box decided and only the print open \u2014 the artwork and the run size then pick the method in one reply.**\n## The four print methods\n\n| Method | Best at | Colour capability | As published |\n|---|---|---|---|\n| Flexography (flexo) | shipping boxes, volume runs | 1\u20133 colours, simple graphics and logos | CustomBoxesNow: a basic form of box printing, 1\u20133 colours, ideal for simple logos |\n| Digital | short runs, proofs, full colour | full CMYK without plates | industry standard for short full-colour work |\n| Offset / lithography (litho-lamination) | rigid boxes, premium cartons | high-resolution, full colour, sharp detail | Brown Packaging: the most popular method for rigid boxes |\n| Screen print (silk-screen) | spot colour, Pantone-exact, textures | one colour per screen, exact Pantone | the standard for spot-colour logo work |\n\n**The rule the table hides: method follows substrate and run length more than quality \u2014 a flexo logo on a kraft mailer is correct printing, not cheap printing.** For rigid boxes the wrap prints offset then laminates to greyboard \u2014 the construction detail the [rigid box guide](https://elapack.com/news/custom-rigid-boxes-guide/) unpacks.\n\n## Artwork: what a factory actually needs\n\nThe four-step file flow published by Packaging Studio is the industry baseline: obtain the dieline template, design the artwork, position it on the dieline, export print-ready files. The failure modes BrillPack catalogues are the ones factories see daily: missing bleed, artwork outside safe zones, wrong colour mode. In practice:\n\n| Requirement | Why | Common failure |\n|---|---|---|\n| Vector artwork (AI/PDF/EPS) | logo scales without edge softness | JPG logo pulled from a website |\n| Factory's dieline as the base | print areas map to the real cut | artwork laid out on a guessed template |\n| CMYK or named Pantone | colour is reproducible | RGB file with implied conversion |\n| Bleed + safe zone honoured | die-cut tolerance does not clip the logo | logo 2 mm from the crease |\n\n**Send vector on the factory's dieline and 90% of print problems disappear before the press.** ELAPACK draws the digital dieline free at quotation and accepts buyer-supplied vector files \u2014 the terms are set out in the [die cutting and dielines guide](https://elapack.com/news/die-cutting-and-dielines-guide/).\n\n## Logo placement and size decisions\n\n| Placement | Reads as | Constraints |\n|---|---|---|\n| Lid centre | formal, retail-front | the classic; keep clear of magnets and closures |\n| Lid corner | quiet, premium | needs colour discipline across the run |\n| Front face (mailer) | logistics-honest | competes with labels \u2014 plan the shipping label zone |\n| Inside lid | the unboxing reveal | costs the same ink, buys the surprise \u2014 see the [magnetic gift box guide](https://elapack.com/news/magnetic-gift-boxes-guide/) |\n| Base or spine | archive-grade, subtle | suits sets that stack or shelve |\n\n**One placement done large beats five placements done small \u2014 a logo is an identity mark, not wallpaper.** Size follows the box's viewing distance: a mailer read at arm's length carries a smaller mark than a gift box opened on camera.\n\n## Print plus finish: where the budget goes\n\nPrinting puts the logo on; finishing changes how light hits it. Foil and emboss are finish decisions, not print decisions \u2014 the full comparison (embossing, foil, lamination, spot UV) with cost characterisations lives in the [surface finishes comparison](https://elapack.com/news/surface-finishes-compared-guide/). The budget structure that works: one print method, at most one signature finish, both named in the quote. **A quote that lists printing and finishing but no dieline or tooling line has not finished pricing your job.**\n\n## Tooling arithmetic\n\n| Cost item | ELAPACK figure | When it applies |\n|---|---|---|\n| Digital dieline drawing | free | every quotation |\n| Die tooling | USD 50\u2013100, quoted separately | only when a new die is genuinely needed |\n| Setup for repeat orders | per quotation | reprints of a confirmed die are cheaper |\n\n**Tooling quoted separately and small is a feature, not an upsell \u2014 it means the factory prices the die honestly instead of hiding it in unit price across every re-order.** The same logic governs minimums: at 200 pieces the setup amortises over a brand-sized run, which is the entire point of a brand-friendly MOQ.\n\n## Per-box-type practice\n\n- **Rigid boxes** \u2014 offset wrap, logo foiled or screened on the lid; construction first: [rigid box guide](https://elapack.com/news/custom-rigid-boxes-guide/).\n- **Mailers** \u2014 flexo or digital on E-flute, logo front-face, label zone planned; the mailer section of the rigid guide covers the decision.\n- **Gift boxes with closures** \u2014 print to the closure system; magnetic builds in the [magnetic guide](https://elapack.com/news/magnetic-gift-boxes-guide/), ribbon-tie programmes in the [ribbon guide](https://elapack.com/news/custom-printed-ribbon-guide/).\n- **Category boxes** \u2014 ring boxes ([sizes and inserts](https://elapack.com/news/custom-ring-boxes-guide/)), candle boxes ([ordering data](https://elapack.com/news/custom-candle-boxes-guide/)) \u2014 the category level is where a custom factory competes.\n\n## Bottom line\n\nChoose the method by substrate and run, prepare vector artwork on the factory's dieline, place the logo once and large, and read every quote for the tooling line. Start a printed-box programme from the [custom gift boxes collection](https://elapack.com/custom-gift-boxes/) or the [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) \u2014 free dieline at quotation, MOQ 200, and a custom sample in 3\u20135 days at USD 25 + USD 20 shipping via the [quote request](https://elapack.com/contact/)."
  },
  {
    "slug": "luxury-candle-boxes-guide",
    "datePublished": "2026-10-11",
    "title": "Luxury Candle Boxes: Rigid Builds, Finishes and Wholesale Terms",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/luxury-candle-boxes-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK luxury candle boxes sourcing guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Luxury candle box demand clears 900 US searches a month and its fastest words sit at KD 4-14 - yet the results are supplier pages. This is the luxury-tier buying guide: rigid builds, finishes, vessel sizing and wholesale terms.",
    "metaDescription": "Luxury candle boxes: rigid greyboard builds, finishes, vessel sizing with clearance, insert coordination and wholesale ordering from 200 pieces - with the search data behind each decision.",
    "body": "*Supplier frameworks are credited to their publishers; ELAPACK terms are confirmed 2026 trade terms used as worked examples. Competitor pages were reviewed for structure, not copied.*\n\nLuxury candles sell an unboxing before they sell a scent \u2014 and the specification stack is what delivers it: wrap, finish, insert and overcarton on one drawing. This page is the guide those results are missing.\n\n> **Quick answer:** a luxury candle box is a rigid greyboard build (1.5\u20133 mm board wrapped in printed or textile cover), sized to the vessel plus 6\u201313 mm of clearance per side, with an insert that immobilises the jar. Order it the way luxury packaging is actually bought: approved custom sample first, wholesale tier from 200 pieces, colour held to Pantone references. The companion [custom candle boxes guide](https://elapack.com/news/custom-candle-boxes-guide/) covers the standard purchasing data; this page covers the luxury tier specifically.\n\n## Key facts at a glance\n\n| Item | Data |\n|---|---|\n| Standard vessel sizes | 4 / 8 / 12 oz jars are the most common capacity steps (customboxdepot, as published) |\n| Worked example MOQ | 200 pieces, 15\u201320 days at 200\u201320,000 units (ELAPACK confirmed 2026 terms) |\n\n## What luxury buyers specify\n\n![The luxury candle box as a specification stack: rigid greyboard wrap, foil or blind-emboss logo, fitted insert and shipping overcarton, ordered together on one drawing.](/charts/luxury-spec-layers.svg)\n\nLuxury candle buyers use packaging and boxes language interchangeably, and what they are naming is a specification stack: rigid wrap, foil or blind-emboss logo, fitted insert and a shipping overcarton. The stack is ordered as one drawing, because luxury reads as one object in the hand.\n\n**Luxury is a stack, not a box \u2014 wrap, finish, insert and overcarton specified together or not at all.**\n\n## What makes a candle box luxury\n\n### Board and build\nLuxury tier means rigid construction: greyboard of 1.5\u20133 mm, wrapped rather than folded, so the box does not collapse flat. The three builds to know \u2014 two-piece (lid and base, vertical lift-out that protects the jar rim), hinged rigid with a magnetic closure (the gifting default; see the [magnetic closure vs ribbon tie comparison](https://elapack.com/news/magnetic-closure-vs-ribbon-tie-gift-boxes/)), and drawer builds for candle-and-accessory sets. Third-party suppliers publish the same hierarchy: rigid costs more and does not fold; folding cartons ship flat and suit volume programmes but need support for heavy glass (briskpackaging, as published 2026).\n\nWhich of the three builds fits a given programme is a positioning question before it is a cost question. Two-piece builds read as classic retail \u2014 the lid lifts straight up, the jar rim is protected by the base walls, and the reveal is a single vertical motion. Hinged rigid boxes read as gifting: the lid stays attached, the opening resistance is part of the experience, and the magnetic closure gives a soft close that buyers register as quality even before they see the candle. Drawer builds earn their extra tooling when the set contains more than the candle \u2014 a snuffer, a wick trimmer, a matchbox \u2014 because the drawer turns accessories into a second reveal instead of loose items rattling in an oversized cavity.\n\n### Finishes\nThe luxury vocabulary is [foil stamping, embossing, soft-touch lamination and screen or digital print on textured wraps](https://elapack.com/news/surface-finishes-compared-guide/). One rule keeps the tier honest: two coordinated finishes beat five competing ones.\n\nCoordination is the operative word. A blind emboss on the lid plus foil on the logo reads as one design language because the two finishes sit on separate planes \u2014 the emboss gives shadow, the foil gives light, and the eye reads the pair as intentional. Stack a third and fourth finish onto the same faces and the hierarchy collapses: every element now competes for first touch, and the box reads as a sample book rather than a product. The discipline that keeps luxury legible is subtraction \u2014 decide which single surface the customer touches first, spend there, and let the remaining faces go quiet.\n\nTextured wraps deserve their own decision, because texture is felt before print is read. A linen-finish or fine-paper wrap changes how the box sounds and how it slides in the hand, and it tolerates a plainer print treatment than smooth board does. Wraps also age differently: a wrapped cover hides board edges and keeps corners crisp through handling that would scuff a direct-printed carton, which is why wrapped rigid builds dominate the refill-and-reuse segment of the luxury candle market.\n\n### Sizing to the vessel\nMeasure the filled vessel \u2014 outer diameter, height with lid, gross weight \u2014 then add 6\u201313 mm (0.25\u20130.5 inch) of clearance per side (thecustomizeboxes and briskpackaging, as published). For the common 8 oz jar, one supplier publishes an interior of roughly 98 \xD7 98 \xD7 110 mm as the reference fit (personalizedcandlebox, as published). The [candle box inserts comparison](https://elapack.com/news/candle-box-inserts-guide/) covers what holds the jar inside that clearance.\n\nClearance behaves differently at the luxury tier than at the volume tier. In a folding-carton programme, clearance is a cushion allowance \u2014 enough room for the insert to do its work. In a rigid luxury build, clearance is also choreography: too little and the jar is difficult to lift out without touching the wrap; too much and the vessel swims, and every tilt of the shipped box is a visible fault in the unboxing. Weight belongs in the measurement set for the same reason \u2014 a heavy glass vessel with a tall wick well changes the insert's load path, and gross weight is what the shipping test and the drawer-slide behaviour both key off.\n\n## The unboxing sequence, specified backwards\n\nLuxury boxes are engineered backwards from the film the brand hopes the customer shoots: the outer carton opens, the box is lifted out whole, the closure gives way at a deliberate resistance, and the jar appears centred in its insert with the label facing up. Each beat of that sequence is a specification. The overcarton decides whether the box arrives scuffed or pristine. The closure decides the opening resistance. The insert decides whether the label faces the customer or the floor of the box. Specifying the sequence backwards \u2014 from the reveal, through the closure, to the shipping layer \u2014 is what keeps the finished programme from optimising one beat and losing the next.\n\nTwo failure modes recur. One is the beautiful box that arrives damaged because the shipping carton was treated as an afterthought rather than a layer of the same drawing; the other is the pristine box that opens to a crooked jar because the insert cavity was cut to the vessel's catalogue diameter instead of a measured one. Both are stack failures, not component failures, which is the practical argument for ordering the stack as one drawing.\n\n## Wholesale ordering, step by step\n\n| Step | Action | What good looks like |\n|---|---|---|\n| 1 | Send vessel measurements + reference images | factory returns a dieline, not just a quote |\n| 2 | Approve a custom sample | paid sample at nominal cost (USD 25 + USD 20 shipping, 3\u20135 days at ELAPACK) |\n| 3 | Lock colour by Pantone reference | a written four-step control chain, see the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/) |\n| 4 | Confirm tooling in writing | free dieline drawing; new die tooling quoted separately at USD 50\u2013100 |\n| 5 | Place the wholesale order | from 200 pieces, 15\u201320 days, QC stations named in order |\n\nThe sample step carries more weight at the luxury tier than anywhere else in packaging, because luxury faults are felt rather than measured. A wrap seam that sits a millimetre off-centre, a magnetic closure that snaps instead of easing closed, an emboss with soft shoulders \u2014 none of these fail a datasheet, and all of them fail the customer's hand. Approving the custom sample is therefore not a formality ahead of the wholesale run; it is the only point in the sequence where the opening resistance, the wrap texture and the finish registration can be experienced exactly as the end customer will experience them. Photograph the sample next to the Pantone references and keep both with the order file, so the production run is approved against evidence rather than memory.\n\n## Luxury builds that transfer budget correctly\n\nSpend on the surfaces the customer touches first: the lid, the wrap texture, the opening resistance. Save on the invisible: a plain inner board with a well-fitted [insert](https://elapack.com/news/packaging-inserts-guide/) outperforms a lined interior with a loose jar every time. For gifting programmes that pair boxes with closures, the [printed ribbon guide](https://elapack.com/news/custom-printed-ribbon-guide/) covers the coordination rules.\n\nThe invisible list is longer than most first-time luxury buyers expect, and it is where the tier becomes affordable. The inner surfaces of a two-piece build are seen for a second during the reveal and never again; the base of the box is felt only by the shelf; the inside of the overcarton is seen by nobody. Budget transferred from those surfaces to the wrap, the closure and the insert cavity is budget the customer actually experiences. The reverse transfer \u2014 a silk-lined interior holding a jar that rattles \u2014 is the signature of a box designed for photographs rather than hands, and it is the most common way luxury programmes overspend and underdeliver at the same time.\n\n## Bottom line\n\nThe luxury candle box cluster is a rare shape: steady demand, almost no guide content, and its longest words are its easiest. Specify rigid greyboard, size to the vessel plus clearance, hold colour to Pantone, and order against an approved sample. ELAPACK runs these programmes from 200 pieces with free dielines and named QC stations \u2014 [request a quote](https://elapack.com/contact/) with your vessel measurements and the box style from this page.\n"
  },
  {
    "slug": "candle-box-inserts-guide",
    "datePublished": "2026-10-11",
    "title": "Candle Box Inserts Compared: Corrugated, Foam, Pulp and Board",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/candle-box-inserts-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK candle box inserts comparison guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The insert decides whether a candle arrives as a product or an insurance claim. The three insert words sit at KD 0-4 - and this material-by-material comparison gives the decision framework the factory pages do not.",
    "metaDescription": "Candle box inserts compared: corrugated, foam, moulded pulp, board platforms and multi-cell dividers - protection, cost, eco trade-offs and supplier minimums, with a two-question chooser.",
    "body": `*Supplier comparisons are credited to their publishers as-published and re-organised here; ELAPACK terms are confirmed 2026 trade terms used as worked examples.*

A candle that moves cannot be protected by a box wall \u2014 every insert supplier repeats the physics, and few explain how to choose between the formats. The ranking pages list insert types; almost none compare them decision by decision. This page does.

> **Quick answer:** corrugated cavities are the default (cheapest, recyclable, load-bearing); foam protects fragile or irregular vessels best but costs more and carries eco trade-offs; moulded pulp buys a sustainability position if volume amortises the mould; board platforms suit pillars and tapers; multi-cell dividers are for votive and tealight sets. Choose by vessel weight and fragility, then by unit economics at your quantity. For the general insert framework across product categories, see the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/); for box sizing data, the [custom candle boxes guide](https://elapack.com/news/custom-candle-boxes-guide/).

## Key facts at a glance

| Item | Data |
|---|---|
| Materials compared | corrugated E/B-flute, EVA-type foam, moulded pulp, board platform, multi-cell divider |
| Worked example | insert + box programmes from 200 pieces, 15\u201320 days (ELAPACK confirmed 2026 terms) |

## Buyers who name the insert

![Candle box insert trade-offs: die-cut cardboard, EVA-type foam and moulded pulp compared on hold, protection and cost position, matched to jar weight and glass finish.](/charts/insert-tradeoffs.svg)

Buyers who know they need an insert search for it by name \u2014 candle box insert, candle divider, box filler \u2014 because the insert is a physics decision: a candle that moves cannot be protected by a box wall. The named formats are die-cut cardboard, EVA foam and moulded pulp, and the choice follows the jar's weight and finish.

**The insert is the physics of the box \u2014 jar weight and glass finish pick the material, not the catalogue photo.**

## The four jobs an insert must do

Before comparing materials, it helps to separate what you are actually buying. An insert performs up to four jobs, and which ones your product needs determines the material shortlist:

1. **Immobilise.** The vessel must not shift inside the box in transit. Every insert format does this; the difference is how much clearance the cavity can absorb before the hold fails. A cavity cut to nominal dimensions with no clearance allowance will rattle; one cut loose will not hold at all.
2. **Cushion.** Absorb shock from drops and vibration. This is where corrugated and foam diverge: flute walls carry load but transmit more shock to the vessel; foam deforms and absorbs, but deforms permanently past its limit.
3. **Separate.** Prevent jar-to-jar contact in multi-packs. This is a divider job \u2014 a single-cell insert for a gift set still needs cells, not one oversized cavity.
4. **Present.** Hold the vessel in position for the unboxing moment \u2014 the lid comes off and the candle sits level, label forward. Presentation tolerances are tighter than shipping tolerances, which is why premium programmes often specify a presentation cavity in foam or pulp even when shipping alone would allow corrugated.

Most buyers need all four at some weight. Write down which two matter most before reading the next section \u2014 the material table only makes sense against that list.

## The five insert types, compared

| Insert | Best at | Trade-off | Watch out for |
|---|---|---|---|
| Corrugated cavity (E/B-flute) | direct-to-consumer shipping; heavy jars | cheapest and recyclable; least soft cushioning | needs correct flute direction to carry load (oxopackaging, as published) |
| Foam (EVA-type, custom-cut) | fragile, irregular, premium glass | best shock absorption; highest cost; weaker eco profile | custom shapes carry supplier minimums of 500\u20132,000 units (premierrigidboxes/printkk, as published) |
| Moulded pulp | sustainability-positioned brands | renewable look; protection near foam | custom mould = upfront tooling, amortised by volume (printkk, as published) |
| Board platform | pillars and tapers | keeps wax off walls at low cost | not for heavy jars alone |
| Multi-cell divider | votive and tealight sets | prevents jar-to-jar contact | adds height; check closure fit |

**Corrugated cavities.** The workhorse. E-flute and B-flute die-cut cavities carry heavy jars well because the flute acts as a column \u2014 but only when the flute runs in the load direction, which is the trap the as-published warning above flags. Corrugated suits rectangular and round jars, recycles with the box in most kerbside streams, and tooling is the same die-cutting path as the box itself, so one supplier can make both.

**Foam.** The choice when the vessel is fragile, irregular, or premium. EVA-type foam can be cut to follow a three-wick jar's shoulders or a faceted glass precisely, which no flat die-cut can match. The costs are on two lines: unit price (highest of the five) and eco position \u2014 most foams are not kerbside-recyclable, which matters if your brand language leads with sustainability. The supplier minimums published for custom-cut foam mean it rewards running programmes, not one-off orders.

**Moulded pulp.** Protection close to foam with a renewable story, at the price of an upfront mould. The decision is arithmetic, not taste: a custom mould is a fixed tooling cost that divides across your volume, so the same insert is expensive at small quantities and cheap at large ones. If your programme is a single seasonal run, pulp usually loses that arithmetic; if the vessel shape is stable across years, pulp is the format that gets cheaper every reorder.

**Board platforms.** A plain board with cut holes or slots \u2014 the honest, low-cost answer for pillar candles and tapers, where the product is robust and the only real threat is wax contact with the box wall. It is not a shipping cushion for heavy glass, but pairing a board platform with a snug box for retail-handled pillars is often the most economical correct answer.

**Multi-cell dividers.** For sets \u2014 votives, tealights, mini-jar collections. The engineering constraint is vertical: a divider adds height inside the box, so the closure style and lid depth must be checked against the assembled stack, not the jar height alone.

## How to choose in two questions

**1 \u2014 What breaks it: impact or contact?** Impact risk (heavy glass, long shipping lanes) pushes toward foam or pulp; contact risk only (retail handling, gift sets) is solved by corrugated or dividers. **2 \u2014 What does your volume justify?** Below a few hundred units, die-cut corrugated and board dominate on economics; foam custom-cut and moulded pulp reward programmes running thousands of units \u2014 that is why their supplier minimums cluster at 500\u20132,000 (as published above).

## Matching the insert to your vessel type

The two questions compress further when you start from the vessel, because candle formats cluster into recognisable risk groups:

- **Single-wick glass jars (mid-weight):** the largest group. Corrugated cavity as default; upgrade to foam when the glass is thin, faceted, or the brand is premium and the unboxing matters.
- **Heavy glass jars and three-wick formats:** impact risk dominates. Foam or moulded pulp; corrugated only with verified flute direction and a transit test on the assembled set.
- **Pillars and tapers:** wax contact, not shock. Board platform, possibly with a simple sleeve.
- **Votive and tealight sets:** multi-cell dividers; check stacked height against the closure.
- **Irregular vessels (sculptural glass, concrete or ceramic containers):** these break the die-cut logic \u2014 the cavity cannot follow the shape without foam or pulp. Quote both before deciding; irregular vessels are where the foam minimums bite hardest.

If your vessel sits between groups \u2014 a mid-weight jar with an unusually long shipping lane, say \u2014 decide on the dominant threat, not the average of both.

## Specifying the insert with your box supplier

The insert is specified together with the box, not after it: interior clearance (vessel + 6\u201313 mm per side), insert material and thickness, cavity shape, and \u2014 the step most buyers miss \u2014 a shipping test on the assembled set. Send the vessel's filled weight and dimensions with your [rigid box](https://elapack.com/news/custom-rigid-boxes-guide/) enquiry; the dieline and the insert cavity must come from the same drawing, which is why ELAPACK draws dielines free at quotation and quotes die tooling separately at USD 50\u2013100 only when a new die is genuinely needed.

Three specification habits separate smooth programmes from re-runs:

**Give the filled weight, not the empty vessel.** A jar, wax, wick and lid can weigh meaningfully more than the glass alone, and load ratings are set against the real shipping weight.

**Spec the closure against the assembled stack.** Lid depth, magnet closure or telescoping shoulder must clear vessel plus insert plus any divider \u2014 measured on the assembled sample, not summed from drawings.

**Ask which transit test the assembled set passes.** A supplier confident in the combination will tell you what drop or vibration regime the box-and-insert set has survived; "the insert fits" and "the set survives shipping" are different claims, and only the second one protects the order.

## The sustainability trade-off, honestly

The eco ranking of inserts is not the same as the protection ranking. Corrugated and board recycle with the box; moulded pulp reads renewable and is often the centrepiece of a sustainability story; foam sits last on disposal even when it wins on protection. If your brand leads on eco claims, the workable combinations are corrugated (default), pulp (when volume pays for the mould), or foam restricted to fragile formats where the protection genuinely requires it \u2014 with the trade-off stated rather than hidden. Buyers who hide the foam inside an eco-branded box tend to meet the question in the first retail audit anyway.

## Bottom line

The insert decides whether your candle arrives as a product or an insurance claim. Match material to threat (impact vs contact), match process to volume, and specify insert and box from one drawing. From 200 pieces with free dielines and a six-station QC chain, ELAPACK quotes [candle box programmes](https://elapack.com/contact/) with the insert comparison from this page attached.
`
  },
  {
    "slug": "candle-packaging-guide",
    "datePublished": "2026-10-11",
    "title": "Candle Packaging: Boxes, Inserts, Shipping and Ordering",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "10 min read",
    "image": "/images/covers/candle-packaging-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK candle packaging system guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Candle packaging is a system - retail box, insert, label surface and shipping carton - and the system word runs 720 searches a month while the shipping layer goes unguided. The four-layer plan, in one checklist.",
    "metaDescription": "Candle packaging as a four-layer system: retail box, insert, label substrate and shipping carton - sizing rules, the 260-search shipping layer nobody covers, and a five-step ordering checklist.",
    "body": `*Supplier data points are credited to their publishers as-published; ELAPACK terms are confirmed 2026 trade terms used as worked examples. This page is the cluster overview: box data lives in the [custom candle boxes guide](https://elapack.com/news/custom-candle-boxes-guide/), insert comparison in the [candle box inserts guide](https://elapack.com/news/candle-box-inserts-guide/), luxury tier in the [luxury candle boxes guide](https://elapack.com/news/luxury-candle-boxes-guide/).*

Candle packaging is a system, not a box \u2014 and the system word is where the guidance is thinnest. Buyers searching packaging (not boxes) are planning the whole line: retail box, insert, label surface, and the shipping carton. This page plans it with them.

> **Quick answer:** a candle packaging system has four layers \u2014 retail box (rigid or folding, sized to vessel + 6\u201313 mm clearance), insert (corrugated default, foam or pulp by fragility), label substrate (specified with the box so materials coordinate), and outer shipping carton (tested with the assembled set). Order all four from one specification, sample first, wholesale from 200 pieces.

## Key facts at a glance

| Item | Data |
|---|---|
| Worked example | MOQ 200 pieces, 15\u201320 days, free dieline, custom sample USD 25 + USD 20 shipping (ELAPACK confirmed 2026 terms) |

## Packaging language, shipping language, boxes language

![The candle packaging system as four layers on one drawing: retail box, fitted insert, label substrate and outer shipping carton, ordered as one specification.](/charts/candle-packaging-system.svg)

Candle buyers use three word families that name three different orders: packaging language (the system around the candle), boxes language (the retail box itself) and shipping language (the outer carton). This page owns the system \u2014 box, insert, label and carton on one drawing \u2014 and links to the box and shipping pages for their own decisions.

**The system is four layers on one drawing \u2014 retail box, insert, label substrate, outer carton \u2014 and the drawing is what you order.**

The word families are worth telling apart because they arrive at a factory as different briefs, and a brief written in the wrong family produces the wrong quote. A boxes-language brief asks for a retail box and stops; the factory quotes a box, and the buyer discovers the insert, label and carton decisions later, one at a time, each reopening the last. A packaging-language brief sends the whole drawing set at once \u2014 vessel, box, insert cavity, label position, carton test \u2014 and gets back one quote in which the layers are reconciled before any tooling is cut. A shipping-language brief is the mirror failure: it optimises the outer carton and treats the retail experience as someone else's problem. Buyers who notice which family their own brief is written in can usually predict which failure mode they are heading for.

## Layer one and two: box and insert

The build decision is rigid versus folding, and it is a positioning decision before it is a cost decision: rigid greyboard for gifting and premium retail, folding carton for volume retail and direct shipping \u2014 the trade-offs are tabulated in the [candle boxes guide](https://elapack.com/news/custom-candle-boxes-guide/). Inside the box, the insert material decision runs on threat and volume; the five-material comparison lives in the [inserts guide](https://elapack.com/news/candle-box-inserts-guide/). Vessel sizing reference points: 4 / 8 / 12 oz as the common jar steps, roughly 98 \xD7 98 \xD7 110 mm interior for an 8 oz jar with lid (suppliers as published), 6\u201313 mm clearance per side.

What the system view adds to these two decisions is the order of operations between them. The box sets the cavity; the insert fills it; and the pair must be specified together because each one's tolerance eats the other's clearance. A box cut to the catalogue vessel dimension plus minimum clearance leaves the insert no room to do cushioning work; a generous cavity with a thin insert leaves the vessel migrating across the box in transit. Factories that quote box and insert from one dieline can see this collision on paper; factories quoting the box alone cannot, which is the quiet argument for the one-drawing order even when the buyer intends to start with a single layer.

Mixed programmes are common and the system absorbs them: a line can run rigid two-piece for the gift tier and folding carton for the everyday tier off the same vessel measurements, with the insert system switching between the two. What does not transfer is the clearance assumption \u2014 each build carries the insert differently, so the cavity is specified per build, not once for the line.

## Layer three: the label surface

The candle label is printed by the candle maker, but its substrate is a packaging decision: it must read against the box interior or wrap colour, survive the same humidity as the candle storage, and \u2014 for boxed retail \u2014 coordinate with the box finish. Specify label dimensions in the same drawing set as the box dieline; material and surface interactions are covered in the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/), because label drift against box colour is the most common coordination failure in candle lines.

Label coordination fails in two directions, and both are system failures rather than print failures. The first is contrast drift: a warm interior chosen to flatter the glass turns a crisp white label grey by comparison, or a wrap tone that looked neutral on a swamp of samples reads yellow beside the label stock. The second is humidity mismatch: candles ship and store in the same conditions the wax does, and a label substrate that tolerates the candle maker's cool workshop may curl inside a sealed retail box in a humid warehouse. Both are prevented the same way \u2014 the label enters the drawing set as a named substrate with dimensions, not as "label to follow," and the box interior is approved against the actual label stock rather than a proxy.

## Layer four: the shipping carton

Candle shipping boxes is a 260-search word for a reason: glass plus wax plus couriers equals claims. Three rules: the shipping test runs on the assembled set (box + insert + vessel), not the carton alone; heavy glass needs the insert doing the cushioning and the carton doing the separation; and bulk cartons follow the same clearance logic (6\u201313 mm) one layer out. The [kraft paper shopping bag](https://elapack.com/products/kraft-paper-shopping-bag/) and carton programmes share this specification discipline.

The assembled-set rule deserves its emphasis, because it is the one most often skipped under deadline. A carton certified empty, or packed with a dummy load, tells the shipper nothing about the failure chain that actually produces candle claims: the vessel works loose from the insert, the insert migrates inside the retail box, the retail box shifts inside the carton, and the glass meets glass or the carton wall. Testing the assembled set closes the whole chain at once, and the failures it surfaces are usually cheap fixes at the insert or clearance level rather than carton redesigns. Heavy glass inverts the usual division of labour \u2014 the carton separates packs from each other and from the outside world, while the insert, not the carton's void fill, does the cushioning \u2014 and bulk cartons inherit the same clearance arithmetic one layer out, so the retail box is not rattling inside its shipping layer either.

## The ordering checklist

| Step | What to send | What to receive |
|---|---|---|
| 1 | Vessel measurements (filled weight, with-lid height, diameter) | Dieline with insert cavity, free at quotation |
| 2 | Box style + finish references | Quote with tooling (if any) named separately, USD 50\u2013100 |
| 3 | Pantone references for box, wrap and label | Four-step colour control confirmation |
| 4 | Approved custom sample | USD 25 + USD 20 shipping, 3\u20135 days |
| 5 | Wholesale order | From 200 pieces, 15\u201320 days, six QC stations |

Read as a system, the checklist has a spine: steps one to three lock the drawing, step four proves it in the hand, step five manufactures it. The common shortcut \u2014 asking for the quote first and the measurements later \u2014 inverts the spine, and the quote that comes back is a price against a guess. The checklist also makes the multi-supplier temptation visible: because every input in the left column is a system input, splitting the layers across suppliers means each one quotes against a partial drawing, and the reconciliation work the buyer skips comes back at assembly time as fit and colour faults nobody owns.

For subscription programmes (monthly kitting rather than a fixed line), the planning model differs \u2014 see the [candle subscription box guide](https://elapack.com/news/candle-subscription-box-packaging/) \u2014 and for choosing the factory itself, the [manufacturer vetting checklist](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/) applies to candle programmes unchanged.

## Bottom line

Plan the four layers as one drawing, not four purchases. ELAPACK specifies box, insert and carton from one dieline set from 200 pieces \u2014 [send your vessel measurements](https://elapack.com/contact/) to start layer one.
`
  },
  {
    "slug": "ppwr-packaging-regulation-guide",
    "datePublished": "2026-10-11",
    "title": "The EU PPWR Explained for Packaging Buyers: Dates, Duties, Evidence",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "10 min read",
    "image": "/images/covers/ppwr-packaging-regulation-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK PPWR buyer guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Regulation (EU) 2025/40 is law: in force since February 2025, applying from August 2026. The SERP answers with law firms - this is the procurement version: four dates, four duties, one document flow.",
    "metaDescription": "The EU PPWR (Regulation 2025/40) for packaging buyers: official dates from the Commission and EUR-Lex, the 2030/2038 recyclability grades, the 50% empty-space cap, and the supplier questions to ask now.",
    "body": "*Regulatory facts below are anchored to official European Union sources \u2014 the European Commission packaging waste page and Regulation (EU) 2025/40 on EUR-Lex \u2014 read on 11 October 2026; items marked as-published are competitor or compliance-service readings shown for comparison and are not official text. This page is a procurement-side reading, not legal advice.*\n\nThe EU's Packaging and Packaging Waste Regulation is now law, it reaches every brand that ships boxed goods into the EU regardless of size, and the buyer-side question is practical and immediate: what the law requires of the next box order \u2014 yet the ranking results are law firms and compliance services, not packaging procurement guidance. This page is the buyer's version.\n\n> **Quick answer:** Regulation (EU) 2025/40 entered into force on 11 February 2025 and applies from 12 August 2026, replacing the 1994 Packaging Directive. For a packaging buyer it sets four dates that change specifications: recyclability grading from 1 January 2030 (minimum grade B from 2038), a 50% empty-space cap on grouped, transport and e-commerce packaging, recycled-content targets for plastic packaging, and evidence duties that shift document requests onto your supplier. Nothing in it requires you to stop buying custom packaging; all of it requires you to start asking your supplier different questions.\n\n## Key facts at a glance\n\n| Item | Data |\n|---|---|\n| Official name | Regulation (EU) 2025/40 (PPWR) |\n| In force / applies | 11 February 2025 / 12 August 2026 (European Commission, official page) |\n| Replaces | Directive 94/62/EC, generally repealed 12 August 2026 |\n\n## The words buyers use for PPWR\n\n![PPWR milestones a buyer plans against: in force February 2025, applying from August 2026, with empty-space ratio and recyclability duties phasing in toward 2030.](/charts/ppwr-timeline.svg)\n\nBuyers tracking the regulation use two word families: the statute name (PPWR, Regulation (EU) 2025/40) and the deadline-and-duty words \u2014 what changes, when, what a brand must do. The procurement angle \u2014 what the duties mean for box specification \u2014 is what this guide serves.\n\n**The deadlines are procurement dates: empty-space ratios and recyclability grades change box specifications, so they belong in the buying calendar.**\n## The timeline a buyer plans against\n\n| Date | What changes | Official anchor |\n|---|---|---|\n| 11 Feb 2025 | Regulation in force; reuse-format rules for new reusable packaging begin | Commission page |\n| 12 Aug 2026 | General application; Directive 94/62/EC generally repealed | Commission page |\n| 1 Jan 2030 | Packaging must be recyclable per design-for-recycling grades A/B/C; empty-space ratio capped at 50% for grouped, transport and e-commerce packaging | EUR-Lex, recitals 28 and 84 |\n| 2035 | Recycled-at-scale criterion added to the grading | EUR-Lex, recital 28 |\n| 1 Jan 2038 | Minimum grade B to stay on the market | EUR-Lex, recital 28 |\n\nGrades A, B and C correspond to roughly 95%, 80% and 70% recyclable-by-weight thresholds under the regulation's grading methodology, as consistently reported by compliance analyses of the official text.\n\n## What the PPWR actually asks a buyer to do\n\n**1 \u2014 Right-size your boxes.** The 50% empty-space cap (EUR-Lex recital 84) turns box sizing from a cost preference into a compliance matter for e-commerce and transport packaging. Sizing to the product plus clearance \u2014 the 6\u201313 mm discipline in the [candle boxes guide](https://elapack.com/news/custom-candle-boxes-guide/) \u2014 is already the compliant habit.\n\n**2 \u2014 Ask recyclability questions at quotation.** From 2030 the grade attaches to the packaging you place on the market. Single-material paper constructions (kraft, SBS, corrugated \u2014 see the [rigid boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/)) have the clearest grading path; mixed-material builds need their supplier to state material composition. The deep-dive on grades is the [PPWR recyclability grades guide](https://elapack.com/news/ppwr-recyclability-grades-guide/).\n\n**3 \u2014 Collect evidence from your supplier.** Compliance services reading the regulation describe a Declaration of Conformity duty for packaging placed on the market (Article 39 / Annex VIII, as reported by compliance analyses) and technical-file retention duties \u2014 which in practice means your purchase orders should request material composition and conformity documents, the way the [manufacturer vetting checklist](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/) already recommends requesting certificate scopes.\n\n**4 \u2014 Mind the per-country layer.** The PPWR harmonises design rules but extended producer responsibility registration remains country-by-country in practice (as published by EPR compliance services) \u2014 an obligation on the brand, not the box factory, and one to raise with your own compliance adviser.\n\n## What it does not change\n\nThe PPWR does not ban custom packaging, rigid boxes, printed wraps or luxury formats; it grades their recyclability and caps empty space on the logistics layer. Substance restrictions with PFAS thresholds apply to food-contact packaging \u2014 a scope this site's products do not cover \u2014 and heavy-metal concentration limits continue from the prior regime (figures as-published by compliance analyses). For non-food custom packaging buyers, the practical centre of gravity is the three dates above plus evidence flow.\n\n## Bottom line\n\n12 August 2026 is the switch-on date; 2030 and 2038 are the specification dates. Between now and then, the buyers who fare best will have sized boxes properly, chosen materials with a grading path, and put document requests into their purchase process. ELAPACK quotes [custom packaging programmes](https://elapack.com/contact/) with material composition stated and free dielines \u2014 the two supplier behaviours the PPWR era rewards."
  },
  {
    "slug": "ppwr-recyclability-grades-guide",
    "datePublished": "2026-10-11",
    "title": "PPWR Recyclability Grades A, B and C: What Custom Box Buyers Do",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/ppwr-recyclability-grades-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK PPWR recyclability grades guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "From 2030 packaging below grade C leaves the EU market; from 2038 the floor is grade B. What the A/B/C ladder means for rigid boxes, laminations, foils and window films - one line item on your next purchase order.",
    "metaDescription": "PPWR recyclability grades explained for custom box buyers: A/B/C thresholds, the 2030 and 2038 market floors, which build elements grade cleanest, and the composition questions to put in writing.",
    "body": `*Grading facts below are anchored to Regulation (EU) 2025/40 on EUR-Lex (recital 28: design-for-recycling grading from 1 January 2030, recycled-at-scale from 2035, minimum grade B from 1 January 2038) and the European Commission's packaging waste page, read 11 October 2026. Percentage thresholds for grades A/B/C are the regulation's grading methodology as consistently reported by compliance analyses of the official text, and are labelled as such. This page is a procurement reading, not legal advice.*

From 1 January 2030, recyclability stops being a marketing word and becomes a graded market condition \u2014 **packaging below grade C cannot stay on the EU market, and from 2038 the floor rises to grade B** (EUR-Lex, recital 28). For custom-box buyers that makes material composition a specification line item, starting now. The companion [PPWR buyer's guide](https://elapack.com/news/ppwr-packaging-regulation-guide/) covers the full regulation timeline; this page goes deep on the one mechanism that changes box specifications.

> **Quick answer:** the PPWR grades packaging A, B or C against design-for-recycling criteria, with minimum grade C required from 1 January 2030 and minimum grade B from 1 January 2038, plus a recycled-at-scale test added from 2035. For custom boxes: single-material paper constructions grade cleanest; every added material layer (laminations, foils, window films, textiles) is a variable to ask about. The buyer's action is one line in the purchase order: state the material composition and the design-for-recycling position of this build.

## The grades at a glance

![PPWR recyclability grade thresholds](/charts/ppwr-recyclability-grades.svg)

| Grade | Recyclable-by-weight threshold (as reported from the grading methodology) | Market meaning |
|---|---|---|
| A | around 95% | top tier |
| B | around 80% | minimum to market from 1 January 2038 |
| C | around 70% | minimum to market from 1 January 2030 |

Dates from EUR-Lex recital 28: grading compliance starts 2030-01-01; the recycled-at-scale criterion joins 2035; grade B becomes the floor 2038-01-01. The Commission frames the headline goal as all packaging recyclable in an economically viable way by 2030.

## How the grade is actually computed

Understanding the mechanism \u2014 not just the letters \u2014 is what lets you argue with a supplier about a specification instead of accepting a shrug.

**Design-for-recycling criteria.** The grade is awarded against design-for-recycling criteria that the Commission will set out in delegated acts. Until those land, the material logic is knowable even where the formal test is not: a package grades well when, in the recycling stream it is most likely to enter, the largest possible share of its mass comes out as usable recovered material. The criteria are expected to be drafted per packaging format, so a folding carton and a rigid presentation box will not be judged against an identical checklist.

**The by-weight principle.** The thresholds in the table above are shares of package mass. This is why two boxes that look equally "premium" to a customer can land in different grades: what matters is not how luxurious the finish appears but how many grams of non-recyclable material sit in the total. A foil-stamped logo covering a few square centimetres is a rounding error; a full lamination film wrapping every panel is a mass deduction. Buyers who internalise the by-weight principle start asking a better question \u2014 not "is this material allowed?" but "what share of the total weight is it?"

**The recycled-at-scale layer.** From 2035 a second test joins: the packaging must not only be designed for recycling, it must be recyclable at scale \u2014 meaning the collection, sorting and reprocessing infrastructure actually exists for that format at that volume. For buyers this is a reminder that a grade on paper is a claim about the real European recycling system, which is why evidence and documentation, not adjectives, are the currency after 2030.

## What drives a custom box up or down the scale

These are design considerations, not legal classifications \u2014 the formal criteria arrive via Commission delegated acts \u2014 but the material logic is already knowable:

| Build element | Grading consideration | Buyer question |
|---|---|---|
| Single-material paperboard (kraft, SBS, corrugated) | cleanest recycling path | is the box one fibre stream? |
| Greyboard + paper wrap (rigid) | same fibre family; adhesives are the variable | what adhesive, how much? |
| Lamination / soft-touch film | polymer layer on a fibre box | is a non-laminated finish available? |
| Foil stamping | small-area decoration; negligible mass | \u2014 |
| Window film (PET/APET) | mixed-material separation problem | can the window be reduced or dropped? |
| Textile wraps and ribbons | non-fibre attachments | are they separable? |

**Single-material paperboard.** Kraft, SBS and corrugated constructions are the cleanest case because the whole box enters one fibre stream: no separation step, no residual waste to account for. When your product allows a folding carton or corrugated shipper instead of a multi-material build, that choice removes the entire grading conversation rather than managing it.

**Greyboard with paper wrap.** Rigid boxes remain in the fibre family \u2014 greyboard and art-paper wrap are both paper \u2014 so the binding question is the adhesive: how much is used, where, and in what pattern. A supplier who can describe their glue laydown (lines rather than full-surface coating, for instance) is describing a grade-conscious build; one who has never been asked is telling you the question is new to their process.

**Lamination and soft-touch films.** A full-coverage polymer film is the single most consequential add-on on this list, because it converts a large share of surface mass from fibre to mixed waste. The honest alternatives are finish-level: matte varnish coatings, soft-touch coatings engineered as coatings rather than laminated films, or going unlaminated and letting embossing and debossing carry the tactile story. The [surface finishes comparison](https://elapack.com/news/surface-finishes-compared-guide/) shows embossing and foil as tactile luxury with minimal material addition, while full-coverage films carry the bigger grading question.

**Foil stamping.** Foil is small-area by nature \u2014 a logo, a border, a title. At negligible mass it barely moves a by-weight calculation, which makes it the decoration to keep when films go. Hot foil also reads as luxury at retail, so the grading pressure and the branding pressure point the same way here.

**Window films.** A PET or APET window is a genuine mixed-material separation problem: the film must detach from the fibre during repulping or it drags mass out of the recovered stream. Two mitigations exist short of elimination \u2014 reduce the window to the minimum viewing area, and ask whether the design can work with a die-cut open window or a printed "window" illusion instead. A dropped window costs a merchandising behaviour, so the decision belongs to your retail format, not to the box maker.

**Textile wraps and ribbons.** Wrapped leatherette, silk linings, satin ribbons are non-fibre attachments, and they are the reason "separable" is the buyer's word. If the end customer can plausibly remove the ribbon before disposal, the packaging design is doing part of the sorting work itself. The same logic runs through inserts \u2014 the corrugated-versus-foam choice in the [inserts guide](https://elapack.com/news/packaging-inserts-guide/) is now also a grading consideration, and PVC-window questions follow the [PVC bags](https://elapack.com/products/custom-pvc-bags/) material boundary your supplier states.

## The paperwork to collect before 2030

The regulation's compliance machinery turns recyclability into documents, and the documents are collectible today \u2014 years before any grade is enforceable. Three items cover most of it:

**1. Material composition statement.** A per-SKU statement of what the package is made of, by component: board grade, wrap, adhesive family, finish, attachments, with mass shares where the supplier can give them. This is the input every later claim is computed from; without it, no grade position can even be argued. Ask for it on every quote, not just new designs.

**2. Design-for-recycling position.** A written statement of how the build relates to the grading logic: single fibre stream or not, which attachments are separable, which finishes are coatings versus films, what the known weak point is. It does not need to predict a letter grade before the delegated acts exist \u2014 it needs to show the factory has looked at its own construction through the grading lens.

**3. Declaration pathway.** Compliance analyses of the regulation describe declaration-of-conformity duties that make this paperwork part of the sale either way. Confirm now that your supplier will be the party providing conformity documentation for the packaging they manufacture, and note who signs it. A factory that answers "we will provide it" in 2026 is a safe counterpart in 2029; one that answers "what is a declaration of conformity" is a supply risk on a calendar.

## Grading versus cost: making the trade-off explicit

Single-material builds are not automatically cheaper \u2014 the honest trade-off runs in both directions.

Going up the grade ladder saves money in the places buyers often forget: fewer lamination passes, no window-film die and lamination step, simpler sorting of production waste on the factory floor. A one-fibre-stream folding carton can be the cheapest structurally honest packaging a simple product needs.

Going down costs money in other ways: soft-touch lamination, full wraps and textile linings are precisely what a luxury unboxing is made of, and a rigid magnetic-closure box wrapped in fine paper is a grading compromise many premium brands will keep making well past 2030, paying for it in redesign effort or positioning inside the grade-B window rather than the top tier. The discipline is to spend mixed material only where the customer feels it \u2014 a ribbon and a foil logo that survive the by-weight math, rather than a lamination film that is felt nowhere except the calculation.

The practical method for any new project: price two builds. One single-fibre-stream construction, one with the finishes the brand wants. Look at the delta and decide consciously. What you are buying with that comparison is not a grade \u2014 it is the knowledge of what your packaging actually consists of, which is what every downstream obligation will ask you for.

## The 2026\u20132030 buying sequence

**Now:** get material composition statements on every quote \u2014 a supplier who cannot state composition today cannot evidence a grade in 2029. **At each redesign:** prefer one fibre stream, minimise films and non-paper attachments, right-size (the PPWR's 50% empty-space cap on transport packaging rewards the same habit). **Before 2030:** request the design-for-recycling position in writing; compliance analyses of the regulation describe declaration-of-conformity duties that make this paperwork part of the sale either way.

This is also a vetting signal: factories that answer composition questions precisely \u2014 the [manufacturer vetting checklist](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/) tests exactly this kind of specificity \u2014 are the ones that will carry you across the 2030 line without a redesign scramble.

## Bottom line

The grade ladder is long (2030 for C, 2038 for B) but the specification habit starts at your next order: one fibre stream where possible, attachments minimised, composition in writing. ELAPACK states material composition at quotation and builds rigid and folding paper programmes to specification \u2014 [start a quote](https://elapack.com/contact/) with the grading questions from this page attached.
`
  },
  {
    "slug": "magnetic-gift-boxes-wholesale-guide",
    "datePublished": "2026-10-12",
    "title": "Magnetic Gift Boxes Wholesale: Bulk MOQ Tiers and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/magnetic-gift-boxes-wholesale-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK magnetic gift boxes wholesale",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Wholesale magnetic gift box buying, in numbers: the KD-0 wholesale anchor in a 3,100-search cluster, four-layer cost structure, the 200/1,000/5,000 tier map and six lines to put in writing on a first bulk order.",
    "metaDescription": "Magnetic gift boxes wholesale: search data, MOQ tiers from 200 pieces, 15-20 day production bands, cutting die and sample costs, and the paperwork for a first bulk order.",
    "body": "*MOQ, lead-time, sample and tooling terms are this factory's published trading terms; freight notes are market logic, not quotations.*\n\nThe magnetic-closure box is the workhorse of commercial gift packaging \u2014 boutiques, e-commerce brands and corporate-gifting programs all land on the same construction. This page is deliberately the third cut of the same cluster: the [magnetic gift box structure guide](https://elapack.com/news/magnetic-gift-boxes-guide/) explains how the box is built and graded, and the [closure comparison](https://elapack.com/news/magnetic-closure-vs-ribbon-tie-gift-boxes/) settles the magnetic-versus-ribbon decision. Neither covers what a wholesale buyer actually does between shortlisting a supplier and loading a container. That gap is this page: tier logic, one-off costs, the sample path, and the paperwork of a first bulk order.\n\n> **Quick answer:** wholesale magnetic gift boxes start at a 200-piece MOQ per design. Production runs 15-20 working days for 200-20,000 pieces and 20-25 days for 20,000-50,000, counted from sample approval and deposit. Two costs do not repeat with quantity \u2014 the cutting die at USD 50-100 and your sample round \u2014 so the cheapest verifiable path is a USD 25 custom sample plus USD 20 shipping, then one bulk order at the tier your sell-through supports.\n\n## Structure words and wholesale words\n\nThe structure words (magnetic gift box, magnetic lid gift box) and the wholesale words (magnetic gift boxes wholesale, custom gift boxes wholesale) name the same product at two stages of buying \u2014 specification and procurement. Buyers who type *wholesale* arrive with a budget and a purchase order; the quotation meets them with tier pricing and MOQ anchors.\n\n![Wholesale tier structure: unit price steps down across quantity bands, with MOQ and one-off cost anchors](/charts/wholesale-tier-structure.svg)\n\n**The wholesale brief is a pricing document \u2014 quantity bands, MOQ and tooling on one quote, so tiers can be compared rather than guessed.**\n\n## How bulk pricing is actually structured\n\nBox quotations are not one price; they are a stack of four cost layers, and only one of them scales smoothly with quantity:\n\n| Cost layer | How it behaves | At this factory |\n|---|---|---|\n| Unit box cost (board, wrap, magnets, labour) | Falls stepwise with quantity \u2014 sheet utilisation and make-ready amortise | quoted per tier |\n| Cutting die | One-off, does not repeat on reorders of the same design | USD 50-100, dieline drawn free |\n| Sampling | One-off per design decision | custom sample USD 25 + USD 20 shipping, 3-5 days |\n| Freight | Steps with volume and pack format | air or sea from Shanghai or Shenzhen |\n\nTwo structural choices move the freight line more than any negotiation. A magnetic box shipped *set-up* (assembled) fills a container with air; the same construction engineered to *fold-flat* \u2014 creased walls, detachable or hinged magnetic flap \u2014 multiplies units per carton and is the standard choice for 5,000-piece-plus programs. The trade is a slightly heavier board spec to survive folding, which your supplier should quote side by side. Greyboard grade and magnet specification belong to the structure decision and are covered in the [structure guide](https://elapack.com/news/magnetic-gift-boxes-guide/); ask for them in writing on the same tier quote.\n\n## The tier map a wholesale buyer should request\n\n| Quantity band | Production lead time | What the band is for |\n|---|---|---|\n| 200-1,000 | 15-20 working days | market tests, product launches, first branded run |\n| 1,000-20,000 | 15-20 working days | core replenishment; per-unit cost steps down |\n| 20,000-50,000 | 20-25 working days | retail programs; sea freight and fold-flat engineering pay off |\n\nLead times are counted from sample approval and deposit, which is why the sample round \u2014 not the production window \u2014 is where most first orders actually lose time. A free stock sample ships in 2-3 days (plus USD 20 courier) and settles board feel and wrap quality before any custom artwork exists; the custom sample then proves print, colour and magnet placement on your dieline. If colour precision is part of the brand requirement, the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/) explains the four-step control loop to hold across a tiered program.\n\n## What to put in writing on a first bulk order\n\n1. Tiered unit prices at 200 / 1,000 / 5,000, same dieline, so reorders re-quote themselves.\n2. Board grade and thickness, wrap material, magnet count per box \u2014 per the [structure guide](https://elapack.com/news/magnetic-gift-boxes-guide/) specification language.\n3. Cutting die as a named one-off line (USD 50-100 here), ownership of the die, and that reorders do not re-pay it.\n4. Sample approval as the lead-time start event, with the custom sample cost (USD 25 + USD 20 shipping) stated.\n5. Pack format \u2014 set-up or fold-flat \u2014 with carton dimensions, so your freight forwarder can quote before production ends.\n6. Payment terms (T/T or PayPal here) and Incoterms for air or sea from Shanghai or Shenzhen.\n\n## Bottom line\n\nWholesale is not a discount you negotiate; it is a ladder you read \u2014 and a 200-piece MOQ with a free dieline keeps the first rung low. Bring the six lines above to any supplier \u2014 including us \u2014 and the quote you get back will be comparable with the next one.\n\n**Ready to price a tiered magnetic box program?** Send your size and artwork brief through the [contact page](https://elapack.com/contact/) \u2014 dielines are drawn free, and quotes come back tiered at 200 / 1,000 / 5,000 by default. For the wider capability set, see [magnetic closure gift boxes](https://elapack.com/products/magnetic-closure-gift-box/) and the [custom gift box collection](https://elapack.com/custom-gift-boxes/)."
  },
  {
    "slug": "custom-packaging-small-business-guide",
    "datePublished": "2026-10-12",
    "title": "Custom Packaging for Small Business: MOQs, First Orders and Budget Logic",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/custom-packaging-small-business-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom packaging for small business",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "A first-order walkthrough for small brands: the published MOQ landscape from no-MOQ print to 5,000-plus minimums, what to order first, the sample path, and budget arithmetic that keeps the first bet at 200 pieces.",
    "metaDescription": "Custom packaging for small business: first-order sequence, sample path and budget logic, with the published MOQ landscape and a 200-piece minimum across every category.",
    "body": `*Competitor MOQ figures are as published on supplier pages read 12 October 2026 (Vispronet, Packola, UCanPack, PackAura, Box Agency), with one buyer-reported range from Reddit r/smallbusiness \u2014 each labelled as published, not audited. This factory's own terms are listed as our published trading terms.*

Small brands do not under-order custom packaging because they love plain mailers; they under-order because the market's headline numbers scare them. The published landscape runs from no-MOQ digital print on one end to five-figure minimums on the other, and almost none of it explains which tier a first order should sit in. This page is that walkthrough: what to order first, in what sequence, with the sample path and the budget arithmetic \u2014 written for the brand placing its first branded packaging order, not for the procurement team scaling its fiftieth SKU. For the mechanism-level explainers, see the [MOQ, OEM/ODM and logo techniques guide](https://elapack.com/news/custom-packaging-moq-oem-odm-logo-guide/) and the [2026 factory data on MOQs, samples and lead times](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/).

> **Quick answer:** order the product-touching piece first (box or pouch), verify it with a USD 25 custom sample, and set the first run at 200 pieces \u2014 the MOQ this factory publishes for every category. Treat no-MOQ print shops as artwork testers, not suppliers; treat 1,000-plus minimums as a sign you are being quoted a print-farm workflow. Budget = unit price x quantity + one-off tooling (USD 50-100 cutting die where needed) + freight.

## Head phrases and category phrases

Small brands search two ways: the head phrase (custom packaging for small business) that returns generic marketplaces, and the category phrases (cosmetic packaging for small business, soap packaging for small business) that return suppliers who run the product. The category phrase is the realistic route \u2014 it names the product line, and the supplier quotes against a real structure. For EU-bound brands the category brief also meets regulation: the [PPWR guide](https://elapack.com/news/ppwr-packaging-regulation-guide/) is the starting point for what the rules require of the next order.

![The first-order path: sample, first run, re-order \u2014 and what each stage locks in](/charts/first-order-path.svg)

**Search and order by your category, not by "small business packaging" \u2014 the category names the structure the factory can actually quote.**

## The published MOQ landscape

| Program type | Published minimum | As published by |
|---|---|---|
| No-MOQ digital print boxes | order of one sample box possible | Vispronet, Packola, Arka pages, read 12 Oct 2026 |
| Low-MOQ short runs | 25-100 units | UCanPack (from 25), Box Agency (25-100), read 12 Oct 2026 |
| Startup-focused programs | under 500 units vs typical 5,000+ | PackAura page, read 12 Oct 2026 |
| Buyer-reported custom flexible packaging | 5,000-20,000 units | Reddit r/smallbusiness thread, read 12 Oct 2026 |
| This factory, every category | 200 pieces per design | our published terms |

Read the landscape as three different machines: digital print shops sell impressions (no plate, high unit cost, fine at 25 boxes); flexo and offset print farms sell plates and make-ready (hence 1,000-plus); a factory line like ours sits between \u2014 200 pieces per design, with the tooling (a USD 50-100 cutting die, drawn free as a dieline) as the only one-off that does not repeat.

## What to order first: the sequence

| Order | Piece | Why first | Typical pairing |
|---|---|---|---|
| 1 | The box or pouch your product is seen in | unboxing is the brand moment; everything else decorates it | [custom gift boxes](https://elapack.com/custom-gift-boxes/), [jewellery pouches](https://elapack.com/custom-jewelry-pouches/) |
| 2 | The carry-out layer | shopping bag or ribbon converts the box into a gift | [kraft shopping bag](https://elapack.com/news/custom-shopping-bags-guide/), [printed ribbon](https://elapack.com/news/custom-printed-ribbon-guide/) |
| 3 | The filler | tissue and inserts raise perceived value for pennies | [custom tissue paper](https://elapack.com/news/custom-tissue-paper-guide/) |

The sequence exists because each layer's sample can reuse the previous layer's approved artwork \u2014 one design round, three products.

## The sample path, timed

1. Stock sample (free, ships 2-3 days, USD 20 courier): settles board feel, fabric hand, print quality before artwork exists.
2. Custom sample (USD 25 + USD 20 shipping, built 3-5 days from confirmed artwork): proves print, colour and construction on your dieline.
3. Production (15-20 working days from sample approval and deposit for 200-20,000 pieces).

Colour matters most on the first order because it is what customers see before they touch anything \u2014 the [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/) documents the four-step control loop we run, and it is the page to attach to your enquiry if brand colour precision is the requirement.

## Budget logic for a first order

First-order cost is three lines, and only the first scales with ambition:

- **Units:** 200 x unit price \u2014 ask for tiered quotes at 200 / 1,000 / 5,000 so reorders re-quote themselves.
- **One-offs:** cutting die USD 50-100 (category-dependent), custom sample USD 25 + USD 20 shipping \u2014 none of it repeats on a reorder of the same design.
- **Freight:** air for the first run (speed over cost), sea once the run exceeds roughly a pallet \u2014 the crossover is a quote question, not a rule.

The vetting checklist in [how to vet a packaging manufacturer](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/) covers the trust side \u2014 ISO scope language, QC stations, colour control \u2014 before the deposit moves.

## Bottom line

A small brand's first packaging order is a bet on sell-through, and the structure above keeps the bet small: 200 pieces, one sample round, one non-repeating tooling fee, artwork reused across three layers. The brands that scale cleanly are the ones whose first order was verifiable, not the ones whose first order was big.

**Starting a first order?** Send product dimensions and artwork status through the [contact page](https://elapack.com/contact/) \u2014 stock samples ship in 2-3 days, and quotes come back tiered by default.`
  },
  {
    "slug": "apparel-gift-boxes-guide",
    "datePublished": "2026-10-12",
    "dateModified": "2026-10-17",
    "title": "Apparel Gift Boxes: Structures, Sizes and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/apparel-gift-boxes-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK apparel gift boxes",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The box side of fashion packaging: four structures compared, sizing from the folded garment (the 14.5 x 9.5 x 2 in US standard), seasonal demand shape and ordering data from 200 pieces.",
    "metaDescription": "Apparel gift boxes compared: two-piece rigid, foldable, shirt-box flat-fold and magnetic structures, folded-garment sizing, and ordering data from a 200-piece MOQ.",
    "body": `*The standard US shirt-box size (14.5 x 9.5 x 2 in) and bulk pricing examples are as published in US retail supply listings (Amazon, Paper Mart, read 12 October 2026; Nashville Wraps, Store Supply Warehouse, TheProductBoxes, OXO Packaging, Mid Atlantic Packaging, read 17 October 2026). This factory's ordering terms are its published trading terms.*

*This is the box side of fashion packaging. The bag side \u2014 garment bags, retail carry bags, poly alternatives \u2014 has its own page: [custom clothing and apparel packaging](https://elapack.com/news/custom-clothing-apparel-packaging-guide/). The two link up at the checkout counter: box inside, bag outside.*

> **Quick answer:** apparel gift boxes come in four structures \u2014 two-piece rigid, one-piece foldable, shirt-box flat-fold and magnetic closure \u2014 and the structural choice is mostly a freight and unboxing decision, not a strength decision. Standard US shirt-box footprint runs 14.5 x 9.5 x 2 in as listed in bulk retail supply; custom footprints start from your folded garment. Orders run from a 200-piece MOQ in 15-20 working days.

## Holiday-shaped, wholesale-flavoured

Apparel box demand runs on the retail calendar \u2014 Christmas registers as its own line \u2014 and on wholesale re-ordering: boutiques and fashion e-commerce buy on season, not on launch. The buying guide that survives both cycles is the one that fixes structure and garment measurement rules once.

![Apparel box structures: what each format carries and how the folded garment sets the footprint](/charts/apparel-box-structures.svg)

**Fix the structure and the garment measurement rule once, then re-order on season \u2014 the box outlives the campaign.**

## Structures: what each format is for

| Structure | How it opens | Best for | Freight reality |
|---|---|---|---|
| Two-piece rigid (lid and base) | lift-off lid | premium single garments, gifting | ships set-up or nested; volumetric weight is the cost driver |
| One-piece foldable, hinged lid | folds out | retail counter, shirt service | ships flat, assembles in-store in seconds |
| Shirt-box flat-fold | slide or tuck | high-volume seasonal programs | the classic trade: maximum units per carton |
| Magnetic closure | flip-lid with magnet catch | flagship SKUs, subscription boxes | fold-flat engineering available; see the [wholesale guide](https://elapack.com/news/magnetic-gift-boxes-wholesale-guide/) |

The engineering trade-offs (board grades, wrap, corner construction) are common to all rigid boxes and are covered in the [rigid box guide](https://elapack.com/news/custom-rigid-boxes-guide/) and the [magnetic structure guide](https://elapack.com/news/magnetic-gift-boxes-guide/); the apparel-specific decision is footprint and pack format.

## Sizing: start from the folded garment

The one published anchor is the US standard shirt box footprint \u2014 and it is worth knowing that two footprints coexist in print: 14.5 x 9.5 x 2 in as listed in retail supply packs (Amazon and Paper Mart listings, read 12 October 2026) and 15 x 9.5 x 2 in as published by three further suppliers (Nashville Wraps, Store Supply Warehouse, and OXO Packaging, read 17 October 2026 \u2014 OXO names it the most commonly ordered custom size). Both exist because a folded dress shirt defines them; treat either as the reference family and specify your own footprint from your own folded garment. The published size ladder, read garment-to-box across suppliers (Nashville Wraps and Store Supply Warehouse, as published):

| Industry format | Finished size (in) | Best-fit garment | Fold rule and clearance |
|---|---|---|---|
| Accessory | 10 x 7 x 1.5 | scarves, ties, lingerie, gloves | flat fold; 1.5 in depth is the shallow tier |
| Apparel / small | 11.5 x 8.5 x 1.5-1.625 | childrenswear, swimwear, lightweight shirts | tight retail fold; watch the 1.5 vs 1.625 in depth split between suppliers |
| Shirt (US standard) | 15 x 9.5 x 2 (or 14.5 x 9.5 x 2) | folded dress shirts, polos, light knits | standard retail fold; the reference footprint |
| Sweater / deep | 17 x 11 x 2.5 | heavy knits, hoodies, denim trousers | 2.5-3 in depth prevents crush; anti-crush board for stacked freight |
| Robe / jacket | 19 x 12 x 3 | light outerwear, robes, two-piece sets | multi-item presentation; one fold per item |
| Coat / large | 24 x 14 x 4 | heavy winter coats, tailored suits, blankets | rigid or heavy-duty folding; the volumetric outlier \u2014 see freight below |

| Garment | Measurement rule | Box implication |
|---|---|---|
| Shirts | folded to retail fold standard | standard footprint, 2 in depth |
| Knitwear | folded, not hung | deeper base, 3-4 in, anti-crush board |
| Jeans | tri-fold or flat roll | long shallow box; rigid keeps the stack shape |
| Accessories sets | garment + card + pouch | insert tray; see [packaging inserts](https://elapack.com/news/packaging-inserts-guide/) |

The rule: send the supplier your garment's folded dimensions (or the garment), and the box and insert get built around them \u2014 the same principle that governs our [eyewear boxes](https://elapack.com/eyewear-packaging/), where folded frames set the footprint.

## The stock tier, priced

Before the custom conversation starts, it pays to know what the US retail-supply tier actually charges, because it sets the floor any custom run is measured against. The published picture is consistent across suppliers: kraft two-piece apparel boxes sold in 100-packs at well under a dollar each. One supplier lists its best-selling 15 x 9.5 x 2 in brown kraft pinstripe two-piece at USD 37.00 per 100-pack \u2014 37 cents a box \u2014 on 0.018 in board, 100% recycled, made in USA (Nashville Wraps, as published, read 17 October 2026). Recycled kraft two-piece boxes run from USD 49.50 per 100-pack and high-gloss two-piece from USD 67.50 at another (Paper Mart, as published), with matte white from USD 73.04 and flat tuck-top kraft from USD 18.47 per 100. A third publishes case prices from roughly USD 50 to 120 across its white and kraft range, sold and shipped flat by the case (Store Supply Warehouse, as published), and a fourth runs a style ladder from USD 53.38 kraft pinstripe up to USD 253.97 for two-piece folding set-up boxes, with out-of-stock colours quoted at a 4-6 week special-order lead time (Mid Atlantic Packaging, as published).

Read as a tier, three facts fall out. The stock kraft two-piece is cheap, fast and unbranded \u2014 no logo, fixed footprints, and colour choice limited to what the warehouse holds. Custom printing exists at this tier but through a side door: one supplier prints on single-size cartons only and excludes assortments, handled by a separate custom-print department by phone (Nashville Wraps, as published). And the eco claim is real but generic \u2014 "100% recycled" describes the board, not your programme; it appears on every SKU in the catalogue, which is exactly why it does not differentiate a brand.

**The stock tier is the benchmark, not the answer: it prices the floor (37-75 cents a box at 100-packs) and shows precisely what it cannot do \u2014 your logo, your footprint, your colour.**

## Where custom printing actually enters

Custom enters at three doors, and knowing which door you are standing at prevents the most common mis-quote. The first door is the retail supplier's print add-on: a logo added to a stock catalogue box, single sizes only, priced by phone \u2014 the fastest route to "a box with our name on it" and the lowest ceiling on what the printing can be. The second door is the custom-print factory tier: custom box printers publish starting prices around USD 0.50 per box from 100-piece quantities, on 10pt to 28pt paper stocks, with turnarounds published at 4-6 business days at one and 10-12 working days at another, minimums quoted at 50-100 pieces depending on the run (TheProductBoxes and OXO Packaging, as published, read 17 October 2026 \u2014 note the latter's quote form claims "no minimum" while its own FAQ states 50-100; treat published minimums as indicative and confirm in writing). The third door is this factory: printing specified to Pantone references on board chosen for the garment, structures from flat-fold to rigid, from 200 pieces per design in 15-20 working days.

The doors differ in what they guard. The retail add-on guards speed and low commitment \u2014 right for a first market test, wrong for a brand programme. The custom-print tier guards per-unit price at modest volumes \u2014 right for a one-off promotion, and its published turnarounds are genuinely fast. The 200-piece factory run guards the things neither cheaper door sells: colour held across re-orders, a footprint drawn around your folded garment rather than the nearest catalogue size, and one specification covering box, insert and closure together. A practical rule that falls out of the published numbers: below a few hundred pieces and with no colour-matching requirement, the cheaper doors win on arithmetic; from a repeating branded programme upward, the per-unit gap narrows while the specification control is only available at the factory door.

## The freight and storage penalty of garment boxes

Apparel boxes are the largest footprints in gift packaging, and the penalty is arithmetic, not opinion. A 24 x 14 x 4 in coat box occupies roughly 0.022 cubic metres on its own; two hundred of them, shipped set-up as rigid boxes, stack to about 4.4 CBM \u2014 and almost all of that volume is air you are paying to freight. On volumetric-rated lanes the freight on set-up garment boxes can run to a multiple of the box cost itself, which is a decision variable no supplier listing puts on the product page.

This is why the retail tier ships everything flat. The case-priced suppliers above sell and ship flat by the case (Store Supply Warehouse, as published) and the two-piece "folding set-up" style at the top of the price ladder exists precisely to buy back storage and freight volume at the cost of assembly labour (Mid Atlantic Packaging, as published). The same logic structures the custom tier: flat-fold and one-piece foldable formats maximise units per carton for high-volume seasonal programmes, while the premium formats that must ship set-up \u2014 two-piece rigid, magnetic flip-lid \u2014 pay the volumetric penalty unless they are engineered collapsible. Collapsible magnetic rigid builds fold flat for freight and storage and assemble at destination, cutting shipped volume by roughly three-quarters against the same box sent set-up \u2014 which is why they anchor subscription and flagship programmes rather than counter trade. The [magnetic wholesale guide](https://elapack.com/news/magnetic-gift-boxes-wholesale-guide/) carries the full fold-flat economics.

The storage side of the same coin: a flat-fold stock programme stores in a fraction of the warehouse footprint of the same units set-up, which is what lets boutiques buy one seasonal run instead of four. If your programme is judged on landed cost rather than per-box price, the structure decision \u2014 set-up, flat-fold or collapsible \u2014 is worth more than the printing decision.

## Finishing the box: what goes inside and around it

An apparel box rarely travels alone. The commercial pairing is tissue plus ribbon: [custom tissue paper](https://elapack.com/news/custom-tissue-paper-guide/) (weights and print data) folded over the garment, and [printed ribbon](https://elapack.com/news/custom-printed-ribbon-guide/) as the bow closure on lid-and-base boxes. Window films on display boxes are a compliance variable for EU-bound programs \u2014 the [PPWR guide](https://elapack.com/news/ppwr-packaging-regulation-guide/) explains which build elements grade cleanest.

## Ordering data

| Line item | Terms |
|---|---|
| MOQ | 200 pieces per design, structures and sizes included |
| Production | 15-20 working days (200-20,000), 20-25 days (20,000-50,000), from sample approval and deposit |
| Stock sample | free, ships 2-3 days, plus USD 20 courier |
| Custom sample | USD 25 + USD 20 shipping, 3-5 days from confirmed artwork |
| Cutting die | USD 50-100 one-off per design; dieline drawn free |
| Payment and freight | T/T or PayPal; air or sea from Shanghai or Shenzhen |

Seasonal note: christmas-flavoured demand means Q4 production windows compress \u2014 the counter-seasonal move is ordering holiday structures in Q1-Q2 at the same MOQ, which is also when freight is cheapest.

## Bottom line

Pick the structure by where the box is opened (counter vs unboxing vs shipping), size it from the folded garment, and let the flat-fold formats carry the high-volume seasons. The wholesale-tier logic \u2014 how quantity, tooling and freight interact \u2014 is laid out in the [magnetic wholesale guide](https://elapack.com/news/magnetic-gift-boxes-wholesale-guide/) and applies line for line to apparel.

**Spec an apparel box program:** send folded garment dimensions and target quantity through the [contact page](https://elapack.com/contact/). Pair with the bag side via the [apparel packaging guide](https://elapack.com/news/custom-clothing-apparel-packaging-guide/), or browse the [custom gift box collection](https://elapack.com/custom-gift-boxes/) for starting structures.`
  },
  {
    "slug": "custom-glasses-cases-pouches-guide",
    "datePublished": "2026-10-12",
    "title": "Custom Glasses Cases and Pouches: Formats, Materials and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/custom-glasses-cases-pouches-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom glasses cases and pouches",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The eyewear carrier map, honestly drawn: hard shells are a different industry, and the KD 0-9 word family rewards the supplier that says so. Formats, pouch fabrics, frame-driven box sizing and ordering terms.",
    "metaDescription": "Custom glasses cases and pouches: formats from hard shell to soft microfiber, US search data at KD 0-9, personalisation intent, and ordering terms from 200 pieces.",
    "body": `*Ordering terms are as published on our [eyewear packaging](https://elapack.com/eyewear-packaging/) page.*

Eyewear is our longest-standing category, and it splits cleanly in two: the hard-shell trade we do not work in, and the fabric-and-box programme we do. This page covers that second side properly \u2014 formats compared honestly (including the one we do not make), and the ordering terms.

> **Quick answer:** custom glasses carriers split into hard shells (injection-moulded, a specialist industry), semi-hard cases, soft pouches in velvet, cotton or microfiber, and printed boxes with fitted inserts. We make the pouch and box sides \u2014 from 200 pieces per design, 15-20 working days \u2014 and the honest spec decision is which side of that line your product actually needs.

## Custom words and personalised words

The custom words (custom glasses case, custom eyeglass case) and the personalised words (personalised spectacle case, personalised eyeglass case) arrive with two intents: optical-industry supply, and gifting or branding. Both land on the same format decision \u2014 hard shell, soft pouch or flip lid \u2014 and the protection level the glasses need picks it. The soft-case phrases are native demand in this family, not an upsell: buyers ask for the fabric side by name.

![Glasses case formats: soft pouch, flip-lid box, hard shell \u2014 and the protection each one gives](/charts/glasses-case-formats.svg)

**"Custom" and "personalised" name the intent; hard shell, pouch or flip lid names the product \u2014 the enquiry needs both.**

## Formats: the honest map

| Format | Construction | Who makes it | What it is for |
|---|---|---|---|
| Hard shell | injection-moulded or metal, hinge or spring | hard-case specialists \u2014 not us | everyday carry, optical retail |
| Semi-hard | fabric over structured shell | case specialists | carry with some protection |
| Soft pouch | velvet, cotton or microfiber, open or drawstring | us \u2014 [velvet](https://elapack.com/products/custom-velvet-pouches/), [cotton](https://elapack.com/products/custom-cotton-pouches/), [microfiber](https://elapack.com/products/custom-microfiber-pouches/) | in-box protection, lens cleaning, GWP |
| Printed box with fitted insert | rigid or magnetic box, EVA or moulded insert | us \u2014 [eyewear packaging](https://elapack.com/eyewear-packaging/) | retail presentation, gift sets, e-commerce |
| Fold-flat box | engineered creases, ships flat | us | subscription and volume programs |

Stating the boundary plainly: if the product needs a hinged hard shell, that is a different factory's catalogue, and pretending otherwise wastes your sampling budget. What pairs with every frame line is the fabric-plus-box program \u2014 the pouch that keeps the frames safe after the sale, and the printed box that presents them at it.

## The pouch decision

The [jewellery pouch guide](https://elapack.com/news/how-to-choose-a-custom-jewelry-pouch/) covers fabric, size and closure logic that transfers directly to eyewear: velvet for premium presentation, cotton for printed GWP programs, microfiber when the pouch doubles as the cleaning cloth. Logo economics \u2014 screen print versus heat transfer versus woven labels \u2014 are broken out in the [pouch logo guide](https://elapack.com/news/custom-logo-pouches-guide/); the one-line version is screen print under three colours, woven labels on velvet and satin.

Personalisation carries the gifting intent in this family: the personalised variants (personalised spectacle case, personalised eyeglass case) are monogram-style single-decoration runs, which suit a 200-piece MOQ program per design.

## The box decision: frames set the footprint

A folded pair of glasses defines the box interior \u2014 share the folded frame dimensions and the box and insert get built around them, the same rule our eyewear collection page publishes. Standard decisions:

| Decision | Options | Notes |
|---|---|---|
| Construction | rigid two-piece, magnetic flip-lid, fold-flat | magnetic pairs with the [magnetic gift box guide](https://elapack.com/news/magnetic-gift-boxes-guide/) |
| Insert | moulded EVA, die-cut board, fabric-wrapped tray | insert materials compared in [packaging inserts](https://elapack.com/news/packaging-inserts-guide/) |
| Program | single-frame box, two-frame gift set, box + pouch + card | sets mirror the [jewellery packaging](https://elapack.com/news/custom-jewelry-packaging-guide/) playbook |

## Ordering data

| Line item | Terms |
|---|---|
| MOQ | 200 pieces per design \u2014 printed glasses boxes, fabric pouches and fitted inserts included, custom sizes included |
| Production | 15-20 working days (200-20,000), 20-25 days (20,000-50,000), from sample approval and deposit |
| Stock sample | free, ships 2-3 days (USD 20 courier) |
| Custom sample | USD 25 + USD 20 shipping, built 3-5 days from confirmed artwork; a full custom round lands in roughly two weeks at about USD 45 all-in |
| Payment and freight | T/T or PayPal; air or sea from Shanghai or Shenzhen |

## Bottom line

The honest spec read for eyewear is the boundary: which side of the hard-shell line the product actually needs. On the supply side, order the box and the pouch as one program so colour and branding match across both.

**Spec an eyewear packaging program:** send folded frame dimensions and artwork status through the [contact page](https://elapack.com/contact/), or start from the [eyewear packaging collection](https://elapack.com/eyewear-packaging/). For the wider trust checklist before a deposit, see [how to vet a packaging manufacturer](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/). For the soft side of the programme in depth, the [custom sunglasses pouches guide](https://elapack.com/news/custom-sunglasses-pouches-guide/) covers fabric, closure and print on pouches, and the [custom microfiber cloths guide](https://elapack.com/news/custom-microfiber-cloths-guide/) covers the lens cloths that pair with them.`
  },
  {
    "slug": "perfume-sample-cards-guide",
    "datePublished": "2026-10-13",
    "title": "Perfume Sample Cards: Formats, Blotters and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/perfume-sample-cards-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK perfume sample cards",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Perfume sample cards from the buyer side: the four card formats, what to settle at artwork, the three sourcing paths and quote-sheet terms from a 200-piece MOQ.",
    "metaDescription": "Custom and wholesale perfume sample cards: four formats, sourcing paths and ordering terms (MOQ 200, free dieline, sample USD 25).",
    "body": `*Ordering terms below are ELAPACK quote-sheet terms; supplier practices are described as published by the packaging industry. We print and supply custom perfume sample cards, so read this as a manufacturer's data sheet rather than a neutral review. For the bottle, cap and gift-box side of fragrance packaging, see the [custom perfume packaging guide](https://elapack.com/news/custom-perfume-packaging-guide/); this page stays on the sample-card carriers.*

> **Quick answer.** Perfume sample cards are printed card carriers for scent \u2014 blotter strips, vials or sachets mounted on a branded card. Brands order them for counter programmes, press mailers, boutique handouts and subscription inserts: the card fixes the sample in place, posts mail-flat, and carries the brand face, scent story and instruction on one printed piece. This guide covers the four formats, what to settle at artwork stage, the three sourcing paths, shipping practice, and the ordering terms for a run \u2014 MOQ 200 per design, free dieline at quotation, custom sample USD 25 plus USD 20 shipping, 15\u201320 day production.

## What a sample-card programme covers

Three buyer groups order these cards. Fine-fragrance brands run counter programmes and press mailers. Home-fragrance brands \u2014 candle and diffuser \u2014 put scent cards into catalogue mailings and subscription boxes, so the customer smells the fragrance before buying the candle. Subscription curators add them as monthly inserts alongside the box and void fill.

The card earns its place over a loose vial in four ways. It fixes the sample in position for transit. It posts mail-flat, so a programme ships without parcel packaging. It prints \u2014 brand face, scent story and instruction on one piece, edge to edge. And it standardises the handout: one card per scent, same size, same fold, whether the run is 200 pieces or 20,000.

The brief that reaches a printer specifies three things \u2014 sample count, vial format and card size. That triplet drives the dieline, and the formats below are the four ways it gets answered.

![Four sample-card formats and their typical programmes](/charts/perfume-sample-cards-formats.svg)

*Fig. 1 \u2014 Format-to-programme mapping: the four card formats and where each one runs.*

## Four formats: blotters, cards, wallet size, vial-on-card

**Table 1 \u2014 The four formats at a glance.**

| Format | Stock and size (as published) | Typical programme |
|---|---|---|
| Blotter strips | absorbent blotter board; marketplace listings commonly 300\u2013400 gsm | counter blocks, single-scent tests |
| Standard cards | folded or flat card, cut to sample count and vial format | discovery sets, mailers |
| Wallet-size cards | 85.60 \xD7 53.98 mm, ISO/IEC 7810 ID-1 | catalogues, envelopes, counter stacks |
| Vial-on-card | printed card with mounted vial | press mailers, GWP counters |

The weight band is quoted as published by supplier listings \u2014 Alibaba blotter-card listings run 300, 350 and 400 gsm, and specialist suppliers such as maxi-mise describe heavy absorbent board for fragrance evaluation. ELAPACK house stock is confirmed at quotation, with the sample.

**Blotter strips.** The perfumery standard: narrow absorbent paper, dipped or sprayed, handed over a counter or mailed in blocks. Fine-fragrance suppliers also call them mouillettes. One strip carries one scent; blocks run into the hundreds for a launch or a counter programme.

**Standard sample cards.** A folded or flat printed card carrying one vial or a row of them. Layouts run from single-scent cards to multi-scent discovery sets \u2014 the card is cut to your sample count and vial format, with artwork printed edge to edge. This is the format most "custom perfume sample cards" buyers are describing.

**Wallet-size cards.** The credit-card format \u2014 85.60 \xD7 53.98 mm, the ISO/IEC 7810 ID-1 size \u2014 fits envelopes, counter stacks and wallets. It is the one format the customer can pocket, which makes the size itself worth naming in the artwork brief.

**Vial-on-card.** A vial mounted on a printed card: the format for press mailers and GWP counters where the customer keeps the card and uses the sample.

One boundary line for this page: the four formats above are card carriers. Standalone sample vials sold retail \u2014 decants of existing fragrances \u2014 are a consumer market with its own suppliers and price logic; nothing here covers buying 2 ml of a scent you already know.

## Printing and branding the card

The card is a brand surface before it is a scent carrier. Production artwork usually carries three blocks: the brand face (logo and colour), the scent story (name, notes, one line), and the handling instruction for the vial or sachet. Artwork prints edge to edge, so the blocks live on the card itself rather than on an added label.

Logo application across our custom packaging \u2014 position, colour build, method selection \u2014 is covered in the [MOQ/OEM logo guide](https://elapack.com/news/custom-packaging-moq-oem-odm-logo-guide/); the same decision list applies to card faces.

Ink odour is one variable the print industry already manages. It is driven by the solvent base of the ink, and low-odour / low-migration ink classes exist for scent-sensitive print work \u2014 both facts as published in technical sources developed mainly for food-contact packaging (Daihei Ink technical notes; low-migration ink literature). When the print sits on a scent carrier, naming the ink class in the specification is the buyer-side control.

What print cannot fix is layout. The vial position, the fold line and the scent zone have to work as one dieline, which is why the dieline is drawn at quotation (free of charge) and the artwork develops against it: sample count and card size first, then the drawing, then final print files.

## The candle crossover

Candle and home-fragrance brands buy the same product for a different job. They use scent cards where perfume counters use blotters: in catalogue mailings, order inserts, counter displays and subscription boxes, so the customer smells the wax fragrance before buying the candle.

The card system is identical. What changes is the fragrance application, and that gets settled at the sampling stage rather than in the artwork. Candle brands already ordering boxes for jars and tins can plan the card inside the same programme \u2014 the container side is covered in our [candle packaging guide](https://elapack.com/news/candle-packaging-guide/) and the custom candle boxes guide; for the insert side of a monthly box, the subscription packaging collection lists the structures that pair with a scent card.

## Where brands actually source sample cards

Three sourcing paths cover the market:

**Marketplace blanks.** Amazon and Etsy listings hold the visible results for ready-made white sample cards \u2014 small quantities, no branding, shipped from stock. Fits tests and one-off mailings; does not fit a branded programme.

**Factory blanks.** The middle path is unprinted cards bought in bulk from a printer, with fragrance applied in-house. You gain quantity pricing and keep application control; you give up the print.

**Custom-printed factory cards.** The third path is buyers approaching factories directly: your artwork, your vial layout, one dieline. This is the path this page quotes for.

Wholesale-where questions recur on Reddit and in trade communities \u2014 which is where a manufacturer's answer page earns its place.

Quantity and branding decide the path: unbranded tests at marketplace scale, branded runs from 200 pieces per design with custom print.

## Shipping and protecting the sample

Shipping questions in this family cluster around the vial, not the card: community threads recur on how to mail mini perfume bottles without leaks or breakage. The card answers part of that by construction. The vial mounts on the printed card, the piece stays mail-flat, and a sampling programme posts without parcel packaging \u2014 the programmes already running on this card system are sampling programmes, subscription inserts, boutique handouts and press mailers.

For the outer side of a mailing \u2014 box, insert, void fill \u2014 the subscription packaging collection covers the structures that ship alongside a scent card.

## Ordering data

**Table 2 \u2014 quote-sheet terms, custom perfume sample cards.**

| Item | Term |
|---|---|
| MOQ | 200 pieces per design |
| Dieline | Free, drawn at quotation |
| Cutting die | USD 50\u2013100, one-time |
| Custom sample | USD 25 + USD 20 shipping, 3\u20135 days |
| Stock sample | Free + USD 20 shipping, 2\u20133 days |
| Lead time, 200\u201320,000 pcs | 15\u201320 days |
| Payment | T/T or PayPal |

Sample cards are die-cut products, so the cutting-die line applies to every format above \u2014 it is a one-time cost at first order. To plan a run: confirm sample count and card size, receive the dieline at quotation, approve a sample, then production.

## Bottom line

Four formats cover the demand: blotters for counter blocks, standard cards for discovery sets and mailers, wallet size for catalogues, vial-on-card for press mailers. Candle and home-fragrance programmes run on the same card system. Branded runs start at 200 pieces per design, dieline free at quotation, custom sample USD 25 plus USD 20 shipping, 15\u201320 day production.`
  },
  {
    "slug": "custom-watch-boxes-guide",
    "datePublished": "2026-10-14",
    "title": "Custom Watch Boxes: Personalisation, Structures and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-watch-boxes-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom watch boxes guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Custom watch boxes from the buyer side: three structures, fitted pillow inserts sized from the watch itself, personalisation routes on the print-and-board line, and quote-sheet terms from a 200-piece MOQ.",
    "metaDescription": "Custom and personalised watch boxes: three structures, fitted pillow inserts, monogram and branding routes, and ordering terms (MOQ 200, sample USD 25, 15\u201320 days).",
    "body": `*Ordering terms below are ELAPACK quote-sheet terms. Supplier practices and comparator terms are described as published by the named suppliers, read 14 October 2026. Community sentiment is summarised from public watch-community discussions, read 14 October 2026. We make and supply custom watch boxes, so read this as a manufacturer's data sheet rather than a neutral review.*

For the jewellery-box family across ring, necklace and gift formats, see the [custom jewellery boxes guide](https://elapack.com/news/how-to-choose-custom-jewelry-boxes/); this page stays on the watch programme.

> **Quick answer.** A custom watch box is a rigid presentation box with a fitted pillow that holds the watch upright and still \u2014 single-watch presentation pieces through multi-bay boxes for sets and collectors. Three structures cover the demand: two-piece lift-off, drawer and magnetic flip-top, in art-paper, textured or faux-leather wraps. Personalisation on this line runs in foil, embossing or print; engraved wooden boxes are a different industry. Branded runs start at 200 pieces per design, dieline free at quotation, custom sample USD 25 plus USD 20 shipping, 15\u201320 day production.

### 1. What a branded watch box programme covers

Three buyer groups order these boxes. Watch brands and microbrands box the watch itself \u2014 counter presentation, e-commerce parcels, the box-and-papers that follow a piece at resale. Strap makers box straps and strap-and-watch sets. Gift and corporate programmes order monogrammed presentation boxes for retirement, graduation and wedding-party gifting \u2014 this is where the personalised and monogrammed demand lands when it arrives as a business order rather than a one-off retail purchase.

The watch-buying community holds a settled opinion worth reading before the budget line. Across recurring microbrand threads, buyers argue that large, high-cost boxes waste money that belongs in the watch, and favour low-profile boxes that keep shipping prices down \u2014 "big into low profile boxes that keep shipping prices down and costs put into the watches" is the recurring phrasing. The counterpoint, that original box and papers matter at resale, is the reason the box survives as a programme at all. Both positions land on the same specification: keep the profile low and the presentation intact.

What the box then does is fixed: present the piece at the counter, hold it upright and still in transit, protect it through gifting and shipping, and carry the brand face on every surface.

**Takeaway:** the community that buys watches asks for low profile first \u2014 the presentation has to earn its height.

### 2. Three structures: lift-off lid, drawer, magnetic flip-top

**Table 1 \u2014 the three structures at a glance.**

| Structure | How it works | Works hardest at |
|---|---|---|
| Two-piece lift-off | lid lifts clear of a base | counter presentation, gifting |
| Drawer | tray slides from a sleeve | strap-and-watch sets, premium unboxing |
| Magnetic flip-top | hinged lid closes flat | e-commerce retail, parcel post |

The lift-off is the classic single-watch presentation piece: the lid comes clear away, the base carries the pillow, and the unboxing is a two-hand moment built for counters and gifting. The drawer suits sets \u2014 the tray carries the fitted pillow while the sleeve carries the finish, so a watch-plus-strap programme presents as one piece. The magnetic flip-top closes flat and opens one-handed at a counter, and the closure holds through parcel handling; the construction logic behind magnetic lids is covered in the [magnetic gift boxes guide](https://elapack.com/news/magnetic-gift-boxes-guide/).

Layouts run from one-watch presentation boxes to multi-watch boxes with individually pillowed bays. For size class, stock comparators as published by Westpack (read 14 October 2026): single lacquered watch gift boxes at 9 \xD7 9 \xD7 8.5 cm, watch-and-bracelet combinations at 13 \xD7 13 \xD7 10.5 cm \u2014 a single-watch box is a small object, and the structure list above decides how that small object opens, not how big it gets.

**Takeaway:** structure follows where the box works hardest \u2014 counter, unboxing or parcel.

### 3. The insert: watch pillows and bays

The pillow is the part that fits the watch. Fitted pillows, velvet or satin covered, hold each timepiece upright and still \u2014 the same insert craft that runs in our ring boxes, with pillow materials and colours specified to the programme. A watch laid loose in a lined box rolls in transit and presents at an angle; the pillow fixes head and strap so the piece sits the way it is worn.

Multi-watch boxes get individually pillowed bays, so a two-watch gift pair or a six-watch collector set holds each piece independently \u2014 one bay per watch, each cut to the same specification.

The specification inputs are the watch's own numbers: case dimensions, strap, and piece count per box. Those three settle the pillow cut and the bay spacing at dieline stage, which is why a watch-box quotation starts from watch dimensions rather than box dimensions. For the wider insert logic across box families \u2014 foam, moulded pulp, board and textile \u2014 the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/) compares the materials.

**Takeaway:** the pillow is the fit decision \u2014 quote from the watch's dimensions, not the box's.

![Three watch-box structures and where each works hardest](/charts/custom-watch-boxes-structures.svg)

*Fig. 1 \u2014 Structure-to-context mapping: the three structures and the multi-bay layout, and where each one works.*

### 4. Wraps, finishes and personalisation

The wrap is the brand surface. Three wrap families spec to the programme: matte art paper for full-print branding, textured wraps for a tactile finish under foil, and faux leather for the gift and counter end. Board construction is the same craft as our jewellery boxes \u2014 greyboard at 1.5 mm through 3.0 mm by box size, board cost running roughly 8\u201325 % of the box depending on size, structure and finishing (ELAPACK process data, for reference only). Surface finishes layer on top: matte or gloss lamination, foil stamping, embossing and spot UV \u2014 the [surface finishes comparison](https://elapack.com/news/surface-finishes-compared-guide/) breaks down the cost and appearance trade-offs.

Personalisation on this line runs in three routes. A foil monogram \u2014 initials stamped in foil on the wrap \u2014 is the gifting route for corporate and wedding-party programmes. An embossed or debossed brand mark reads blind, without colour, and carries the jewellery-counter register. Full print turns the whole wrap into the brand face, edge to edge.

One boundary line: the retail monogrammed-watch-box market runs on engraved wood and leather, and that supply is a different industry \u2014 joinery and leather goods, not print-and-board packaging. A monogram does not require engraving. Foil initials on a matte wrap are the standard route when the order is a branded run rather than a one-off retail gift, and this page stays on the print-and-board side of that line.

After the box opens, matched velvet pouches carry the watch through storage and travel \u2014 the after-sale programme runs on the same colour and logo specification.

**Takeaway:** monograms on this line run in foil, emboss or print \u2014 engraved wood is another industry.

### 5. Sizing the box to the watch \u2014 and the parcel

Sizing starts at quotation, and the inputs are the watch's numbers plus the piece count. The dieline is drawn free at quotation to the confirmed sizes: bay width follows case diameter plus strap, and box height follows pillow depth plus lid clearance. Nothing in that chain needs a standard box size, because the watch is the standard.

The parcel is the second number. Couriers bill by the greater of actual and volumetric weight \u2014 standard published practice across carriers \u2014 so box height converts directly into freight cost per piece. This is the arithmetic behind the community's low-profile preference: a single-watch lift-off at single-figure centimetres of height ships as a small parcel, and a tall lacquered chest does not. For gifting programmes on a calendar, the [packaging timeline guide](https://elapack.com/news/valentines-day-packaging-timeline/) works back from the giving date to order and production dates.

**Takeaway:** two numbers size the box \u2014 the watch, and the parcel it ships in.

### 6. Ordering data

**Table 2 \u2014 quote-sheet terms, custom watch boxes.**

| Item | Term |
|---|---|
| MOQ | 200 pieces per design |
| Dieline | Free, drawn at quotation |
| Cutting die | USD 50\u2013100, one-time |
| Custom sample | USD 25 + USD 20 shipping, 3\u20135 days |
| Stock sample | Free + USD 20 shipping, 2\u20133 days |
| Lead time, 200\u201320,000 pcs | 15\u201320 days |
| Payment | T/T or PayPal |

Watch boxes are die-cut rigid products, so the cutting-die line applies to a first order as a one-time cost. Supplier photography for this line is still in progress \u2014 a stock sample (free plus USD 20 shipping, 2\u20133 days) judges the board and wrap in hand before any artwork decision, and a custom sample (USD 25 plus USD 20 shipping, 3\u20135 days) settles wrap, colour and personalisation before the run. What a packaging sample should show, and what it costs across formats, is covered in the [packaging samples guide](https://elapack.com/news/custom-packaging-samples-guide/).

**Table 3 \u2014 comparator terms, as published by each supplier (read 14 October 2026).**

| Supplier | Published term |
|---|---|
| Westpack | logo-customised watch boxes from MOQ 250 (single styles) / 300 (watch-and-bracelet combos); stock boxes no MOQ |
| Allure Pack | logo plate fees from USD 75; box-and-pouch sets from USD 89 |

These are each supplier's own published terms, quoted for comparison only; ELAPACK terms are Table 2 and run from 200 pieces per design. To request a quote: watch dimensions, piece count and bay count, wrap family, personalisation artwork, and the target ship date.

**Takeaway:** 200 pieces per design is the entry point; the dieline and a USD 25 sample settle the spec before the run.

**Bottom line.** Three structures carry the demand \u2014 lift-off lids for counters and gifting, drawers for sets, magnetic flip-tops for parcels \u2014 with fitted pillows sizing from the watch itself and wraps from art paper to faux leather. Personalisation on the print-and-board line runs in foil, emboss and print; engraved wooden boxes belong to a different industry. Branded runs start at 200 pieces per design, dieline free at quotation, custom sample USD 25 plus USD 20 shipping, 15\u201320 day production.`
  },
  {
    "slug": "ppwr-empty-space-rules-guide",
    "datePublished": "2026-10-14",
    "title": "PPWR Packaging Minimisation and Empty Space Rules: The 50% Cap Explained",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/ppwr-empty-space-rules-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK PPWR empty-space rules guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The PPWR empty-space rule read from the official text: the 50% cap from 2030, the 40% confusion cleared up, how to measure the ratio, and the right-sizing habit that satisfies it and cuts freight.",
    "metaDescription": "The PPWR caps empty space at 50% for grouped, transport and e-commerce packaging from 2030. What the rule says, how to measure the ratio, and what to change at your next box order. Orders from 200 pieces.",
    "body": `*Regulatory facts below are anchored to the European Commission's packaging waste page and the EUR-Lex official summary of Regulation (EU) 2025/40, read on 14 October 2026; items marked as-published are compliance-service readings, not official text. This page is a procurement reading, not legal advice, and its regulatory readings are rechecked weekly against the official sources.*

The PPWR reaches box specifications through two levers: what the box is made of and how big it is. The material lever \u2014 recyclability grading from 2030 \u2014 has its own page in the [PPWR recyclability grades guide](https://elapack.com/news/ppwr-recyclability-grades-guide/); the volume lever is this one. The full timeline, from entry into force on 11 February 2025 to application on 12 August 2026, is in the [PPWR buyer's guide](https://elapack.com/news/ppwr-packaging-regulation-guide/).

> **Quick answer:** from 2030, the grouped, transport and e-commerce packaging you fill must not exceed 50% empty space, and filler counts as empty space in compliance readings of the rule. Sales packaging must minimise empty space while staying functional, and double walls or false bottoms used to inflate perceived volume are prohibited unless the shape is protected by design rights or trademarks. The "40% by August 2026" figure circulating in advisories is a different duty \u2014 the reusable-transport target. The buyer's move is one habit: size to the product plus a fixed clearance, on a dieline drawn from your product dimensions.

## What the rule actually says

Four sentences in the official summary carry the whole rule for box buyers.

| Official fact | What it says | Anchor |
|---|---|---|
| Empty-space cap | by 2030, grouped, transport and e-commerce packaging must not exceed 50% empty space | EUR-Lex summary |
| Sales packaging | must minimise empty space while maintaining functionality | EUR-Lex summary |
| Weight and volume | must be minimised; marketing requirements and consumer acceptance do not justify more packaging | EUR-Lex summary |
| Perceived volume | double walls and false bottoms prohibited unless protected by design rights or trademarks | EUR-Lex summary |
| Governing article | Article 24 | as-published by compliance analyses |

The first row is the number that made the rule famous. The other three matter just as much to a custom-box programme: the sales-packaging duty means the gift box itself is in scope for minimisation, the weight-and-volume sentence removes "but it looks premium bigger" as a defence, and the perceived-volume clause names the luxury trade's two oldest tricks directly. A double-wall build or a false-bottom insert used to make a box feel fuller is the exact construction the regulation lists \u2014 from 2030 it survives only where the shape itself is protected by design rights or trademarks.

**Takeaway:** one hard cap (50%, transport layer, 2030) plus three minimisation duties that reach the retail box itself.

## Where the 40% number comes from

Two figures circulate in packaging advisories: a 50% empty-space cap and a 40% requirement with an August 2026 date attached. The second is a different duty wearing a similar hat. The official summary's 40% is the reusable-transport target \u2014 by 2030, 40% of transport packaging must be reusable \u2014 and some advisories compress the two into a single rule stamped with the regulation's general application date. A buyer who plans against a 40% cap in August 2026 is fixing the wrong number at the wrong time: the empty-space duty is 50%, and its date is 2030. What actually switched on on 12 August 2026 is the documentation machinery \u2014 declarations, technical files, supplier information duties \u2014 covered further down this page.

**Takeaway:** if an advisor quotes 40% and August 2026 in one breath, they are describing the reuse target, not the sizing cap.

## How the ratio works and how to measure it

The regulation does not put a tape measure in your hand, so the method below follows compliance-service explanations of the rule (as-published), not official text. The ratio compares what your products occupy with the internal volume of the packaging around them \u2014 and in those readings, filler is not exempt: paper, air pillows and shredded void fill all count as empty space, because the rule is written to stop shipping air.

Measurement is three numbers and a division:

1. Internal volume of the filled box, in centimetres: length \xD7 width \xD7 depth.
2. Volume of the product as it sits in the box, including any fixed tray it stands in.
3. Ratio = (box volume \u2212 product volume) \xF7 box volume.

![The empty-space ratio, measured](/charts/ppwr-empty-space-rules.svg)

*Fig. 1 \u2014 The same 7,200 cm\xB3 product in two shippers: 60% empty fails the 2030 cap, 27% passes.*

| Illustrative build | Internal volume | Product volume | Empty-space ratio | From 2030 |
|---|---|---|---|---|
| Oversized shipper, 40 \xD7 30 \xD7 15 cm | 18,000 cm\xB3 | 7,200 cm\xB3 | 60% | fails the cap |
| Right-sized shipper, 33 \xD7 25 \xD7 12 cm | 9,900 cm\xB3 | 7,200 cm\xB3 | 27% | passes |

The numbers are illustrative, not regulation text \u2014 but the gap between the two rows is the entire project. No material change, no grade calculation: the same product in a smaller box is compliant.

**Takeaway:** the ratio is arithmetic, not chemistry \u2014 a tape measure and the internal dimensions settle it before any supplier is contacted.

## Which packages the cap actually touches

The cap covers three layers: grouped packaging (a shrink-banded multipack of sales units), transport packaging (the shipper carton) and e-commerce packaging (the box the online customer receives). For a custom-box buyer the mapping is direct: a rigid gift box travelling inside a shipper is sales packaging within transport packaging, and the 50% cap applies to the shipper you fill. The gift box carries the other duties \u2014 minimisation, and the perceived-volume clause above.

This is where the regulation and the luxury format meet honestly. Where a tall build is functional \u2014 a candle box sized to a fixed-height vessel, a watch box whose pillow sets the depth \u2014 the functionality language is the defence. Where the height is theatre \u2014 a deep lid over a shallow product, a false floor lifting a ring into "presentation position" \u2014 the construction is named. The build mechanics of the boxes themselves are covered in the [rigid boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/) and the [gift box collection](https://elapack.com/custom-gift-boxes/); the compliance question is always whether the volume works for the product or for the shelf.

**Takeaway:** the cap bites the shipping layer; the retail box answers the minimisation and perceived-volume clauses instead.

## The sizing habit that satisfies it \u2014 and cuts freight

A 50% empty-space cap rewards the same habit freight bills already reward, because air ships at billed weight. Volumetric pricing charges for the space a carton occupies, so every avoidable centimetre is paid for twice: once in board, once in freight. Four working rules:

| Decision | Effect on the ratio | Effect on freight |
|---|---|---|
| Size to product plus fixed clearance | ratio drops directly | volumetric weight drops |
| Fitted insert instead of loose filler | box drops a size without transit damage | fewer void-fill purchases, denser cartons |
| Low-profile structure where the product allows | depth is the multiplier that inflates ratios most | shallow boxes stack |
| Flat-fold or one-piece formats | transport layer ships flat before filling | maximum units per container |

The clearance figure matters more than it looks: the 6\u201313 mm product-to-wall allowance documented in the [candle boxes guide](https://elapack.com/news/custom-candle-boxes-guide/) is tight enough to keep ratios low and loose enough to protect corners in transit. Inserts do the rest \u2014 a fitted tray holds the product at the box wall so filler is not needed at all, and the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/) compares the materials. The artefact that ties it together is the dieline: drawn from your product dimensions before any board is cut, it is simultaneously the sizing document, the compliance evidence and the freight calculation. Ours are drawn free at quotation.

**Takeaway:** right-sizing is the rare compliance duty that pays for itself \u2014 the cap, the board cost and the freight bill all move on the same centimetre.

## What to ask for at quotation

The PPWR's evidence duties are already live \u2014 the regulation applied from 12 August 2026 \u2014 and the official summary states two of them plainly: manufacturers must carry out conformity assessment and draw up an EU declaration of conformity, keeping the technical documentation for five years, and suppliers must provide manufacturers with the information that documentation requires. For a buyer, three lines on a purchase order capture the practical side:

| Ask | What it proves |
|---|---|
| Internal dimensions as built | the ratio can be computed on receipt, not estimated |
| Material composition statement | feeds the recyclability grade file in the [grades guide](https://elapack.com/news/ppwr-recyclability-grades-guide/) |
| Declaration-of-conformity status | the five-year paper trail exists before the order does |

Suppliers who answer those three precisely are the ones the [manufacturer vetting checklist](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/) is designed to find \u2014 specificity about dimensions, materials and documents is the same competence at every scale. The sample stage verifies the rest: a stock sample settles board and build quality, a custom sample settles the final dimensions before the run, and the [samples guide](https://elapack.com/news/custom-packaging-samples-guide/) lists the costs and timings. Order terms themselves \u2014 200-piece minimums, 15\u201320 day runs, tooling \u2014 are set out in the [2026 factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/).

**Takeaway:** dimensions, composition, declaration \u2014 three asks, one order, file complete.

## The 2026\u20132030 sequence

Live since 12 August 2026: the documentation machinery \u2014 conformity assessment, declarations, five-year technical files, supplier information duties, and the country-by-country EPR layer described in the [buyer's guide](https://elapack.com/news/ppwr-packaging-regulation-guide/). Arriving on 1 January 2030: the specification wall \u2014 the 50% empty-space cap, recyclability grades, the Annex V format prohibitions, and the 40% reusable-transport target from the confusion above. Between the two dates, every redesign is a compliance event: size it to the product, state its composition, file its documents. A box right-sized in 2027 for freight reasons meets the 2030 cap without a second project \u2014 the buyer's advantage of starting the habit inside the current order cycle rather than the regulatory one.

**Takeaway:** the paperwork started in August 2026; the dimensions are judged in 2030; the habit is worth starting on the next order.

## Bottom line

The 50% cap is a 2030 date with a 2026 habit attached. It will trouble buyers whose boxes were sized for shelf theatre; it will not register with buyers already sizing to product-plus-clearance and shipping denser cartons. ELAPACK draws dielines free from your product dimensions and states material composition at quotation \u2014 the two supplier behaviours the empty-space era rewards. [Start a quote](https://elapack.com/contact/) with your product dimensions and target quantities.`
  },
  {
    "slug": "custom-toiletry-bags-guide",
    "datePublished": "2026-10-14",
    "title": "Custom Toiletry Bags: Formats, Materials and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/custom-toiletry-bags-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom toiletry bags guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Custom toiletry bags from the buyer side: the three size bands, the cotton and clear-PVC material tracks, the honest Oxford-nylon boundary with named suppliers, and ordering data from 200 pieces.",
    "metaDescription": "Custom toiletry bags in cotton and clear PVC zip formats, sized from item bags to full travel kits. Formats, materials, supplier terms and ordering data from 200 pieces.",
    "body": "*Product facts and ordering terms below are this factory's published trade terms. Supplier terms in the comparison table are as published on supplier pages read 14 October 2026 and are quoted for comparison only. No environmental claims are made on this page.*\n\nThe beauty side of small custom bags \u2014 cosmetic bags for retail and storage \u2014 has its own page in the [custom cosmetic bags guide](https://elapack.com/news/custom-cosmetic-bags-guide/). This page is the travel side: toiletry bags that live in suitcases, grooming kits, hotel amenity programmes and gift sets. The search results for these products are dominated by promotional-product suppliers and nylon-bag factories; what is missing is the buyer's spec sheet \u2014 which format family, which material track, what sizes, and what the ordering terms actually are. That is this page.\n\n> **Quick answer:** custom toiletry bags run in two format families from this factory \u2014 cotton pouches (drawstring, flap, envelope and zip styles, unbleached or dyed, printed or woven-labelled) and clear PVC zip bags in toiletry sizes \u2014 both from 200 pieces per design in 15\u201320 working days. Hard-sided Oxford nylon Dopp kits are a different trade, supplied by the factories listed below as-published. For a travel programme, the bag is the carrier layer: box, tissue and ribbon complete the set, and one artwork runs across all of them.\n\n## What the travel format actually holds\n\nA toiletry bag is specified around what stands upright inside it. Bottles and pumps set the depth; caps and sprays set the closure clearance; the count of items sets the footprint. Three size bands cover nearly every brief:\n\n| Band | Typical contents | Format that carries it |\n|---|---|---|\n| Item bag | lipsticks, minis, a single fragrance | small cotton drawstring or small PVC zip |\n| Standard toiletry | daily grooming set, 6\u201310 pieces | flap or zip cotton pouch, mid PVC zip |\n| Full travel kit | shave, hair, skin, fragrance together | envelope pouch with flat pocket, large PVC zip |\n\n![Toiletry formats by size band](/charts/custom-toiletry-bags-formats.svg)\n\n*Fig. 1 \u2014 The three size bands and the formats that carry them; the dashed boundary marks the Oxford-nylon trade this line does not serve.*\n\nThe cotton families are documented on the [custom cotton pouches](https://elapack.com/products/custom-cotton-pouches/) page \u2014 drawstring, flap, envelope and zipper styles, any size from item bags up \u2014 and the [cotton envelope pouch](https://elapack.com/products/custom-cotton-envelope-pouches/) adds the flat-pocket and flap-snap constructions that suit grooming kits. Clear formats run on the [custom PVC zip bags](https://elapack.com/products/custom-pvc-bags/) line, sized from item bags to full toiletry formats, where seeing the contents is the point \u2014 hotel amenity and press-on-nail programmes use them for exactly that.\n\n**Takeaway:** specify from the tallest bottle downwards; depth is the dimension that decides the format.\n\n## Two material tracks, one honest boundary\n\nThe cotton track is the natural-fibre option: unbleached cotton with a soft hand feel, printed in water-based inks or carrying a woven label, in any size. It gifts well, packs flat, and suits artisan, beauty and travel programmes alike.\n\nThe clear track is functional: transparent zip bags let the traveller or the hotel guest see every item without opening anything, and the format is a proven retail carrier for cosmetics and skincare.\n\nThe boundary: hard-sided Oxford-nylon Dopp kits \u2014 the 300D/600D waterproof construction the search results are full of \u2014 are not this factory's product. We build sewn pouches and clear zip formats. Buyers who need the Oxford construction are served by the factories named in the table below, as-published. Buyers who need cotton or clear formats at factory-direct terms are served here, and the two trades rarely compete on the same brief.\n\n**Takeaway:** cotton for the gift feel, clear for utility \u2014 and an honest no on Oxford, with the factories that do build it listed by name.\n\n## The published market, read from the supplier pages\n\n| Supplier tier | Published terms | As published by |\n|---|---|---|\n| Promotional products | custom toiletry bags from USD 1.44, minimum 200, free setup | Totally Promotional page, read 14 Oct 2026 |\n| Oxford-nylon factories | BSCI-certified production, 300D/600D waterproof Oxford, tech-pack quotes | Eland Manufacturing page, read 14 Oct 2026 |\n| Blank and custom dopp kits | blank or logo'd dopp kits and travel pouches | BagzDepot page, read 14 Oct 2026 |\n| This factory, cotton and clear | 200 pieces per design, 15\u201320 working days, factory-direct | our published terms |\n\nThe promotional tier sells decorated blanks \u2014 low entry price, catalogue formats, setup often bundled. The Oxford factories sell sewn hard-sided nylon to tech packs \u2014 a serious trade for the grooming-kit market, and not ours. This factory's line sits on the third rail: sewn cotton and clear-zip formats, made to your sizes, at factory-direct pricing from 200 pieces \u2014 the same order-of-magnitude entry as the promotional tier with construction made to measure rather than chosen from a catalogue.\n\n**Takeaway:** three tiers, three different machines \u2014 the buyer's question is which construction the brief actually needs before comparing prices.\n\n## Sizing a toiletry programme\n\nThe measuring rule is the same one that governs every sewn format on this site: send the item list with dimensions, and the bag is drawn around it. For travel sets, the bag is only the carrier layer \u2014 a full programme usually runs three pieces with one artwork:\n\n| Layer | Piece | Guide |\n|---|---|---|\n| Carrier | the toiletry bag itself | this page |\n| Gift structure | a box for the folded set | [custom shopping bags guide](https://elapack.com/news/custom-shopping-bags-guide/) for the carry-out layer |\n| Finish | tissue and ribbon | [custom tissue paper](https://elapack.com/news/custom-tissue-paper-guide/) and [printed ribbon](https://elapack.com/news/custom-printed-ribbon-guide/) |\n\nOne design round covers all three: the logo artwork approved for the bag reappears on the tissue fold and the ribbon bow. The economics of running layers in sequence \u2014 what to order first, sample paths, budget arithmetic \u2014 are laid out for first orders in the [small business packaging guide](https://elapack.com/news/custom-packaging-small-business-guide/).\n\n**Takeaway:** order the carrier first, reuse the artwork across the set, and let one supplier carry all three layers so colour matches across materials.\n\n## Ordering data\n\n| Line item | Terms |\n|---|---|\n| Minimum order | 200 pieces per design, any format family |\n| Production | 15\u201320 working days (200\u201320,000 pieces) |\n| Stock sample | free, ships 2\u20133 days, plus USD 20 courier |\n| Custom sample | USD 25 + USD 20 shipping, 3\u20135 days from artwork |\n| Print | water-based ink for cotton; logo print on clear face for PVC |\n| Payment | T/T or PayPal |\n\nThe sample sequence matters more for bags than for boxes, because hand feel is the spec: a stock sample settles the fabric and zip action before artwork exists, a custom sample settles print and construction. The full path, with costs, is in the [packaging samples guide](https://elapack.com/news/custom-packaging-samples-guide/), and volume terms \u2014 tiered quotes, tooling, freight \u2014 are documented in the [2026 factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/).\n\n## Men's grooming, hotel and gift programmes\n\nThe men's side of the search demand is real and underserved \u2014 the grooming kit is now a standard corporate gift and hotel amenity, and the formats above are specified the same way: item list, tallest bottle, closure clearance. Monogram-style personalisation runs through the woven-label and print options on the cotton line. For hotel amenity programmes, the clear zip format does the daily work while a printed cotton pouch carries the brand; for corporate gifting, the envelope pouch with flap-snap gifts best of the cotton families. In every case the vetting questions are the ones in the [manufacturer vetting checklist](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/) \u2014 fabric specifics, print method, colour control \u2014 asked before the deposit moves.\n\n## Bottom line\n\nSpecify from the tallest bottle, pick the material track the brief needs \u2014 cotton for gift feel, clear for utility \u2014 and treat Oxford Dopp as a different purchase with named suppliers. ELAPACK builds both sewn cotton and clear-zip toiletry formats to your sizes from 200 pieces, with stock samples shipping in 2\u20133 days. [Send the item list](https://elapack.com/contact/) and the format recommendation comes back with the quote."
  },
  {
    "slug": "custom-hair-extension-boxes-guide",
    "datePublished": "2026-10-14",
    "title": "Custom Hair Extension Boxes: Bundle Formats, Inserts and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-hair-extension-boxes-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom hair extension boxes guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Custom hair extension boxes from the buyer side: sleeve, drawer and magnetic formats, inserts that hold bundles without crushing, the length-shade system, and ordering data from 200 pieces.",
    "metaDescription": "Sleeve, drawer and magnetic boxes for hair extension bundles and wefts, with inserts that hold hair without crushing. Formats, bundle sizing and ordering data from 200 pieces.",
    "body": "*Product facts and ordering terms below are this factory's published trade terms for its hair extension box line. Supplier terms in the comparison table are as published on supplier pages read 14 October 2026 and are quoted for comparison only.*\n\nThe wig side of hair packaging \u2014 satin bags, presentation sets, full wig programmes \u2014 has its own page in the [custom wig packaging guide](https://elapack.com/news/custom-wig-packaging-guide/). Extensions are a different product with a different box problem: a wig is one presented object, while an extension line is a system of bundles and wefts organised by length and shade, sold in multiples, and judged in the salon by how legible that system looks on the shelf. The search results are all supplier product pages; the buyer's spec view is what follows.\n\n> **Quick answer:** hair extension boxes run in three formats from this factory \u2014 sleeve boxes for single bundles, drawer boxes for multi-bundle sets, and magnetic flip-tops for flagship programmes \u2014 each built to your bundle dimensions, with inserts that hold hair in place without crushing it, from 200 pieces per design. Logo prints, foils or embosses on the wrap. Send bundle dimensions for a quote; a stock sample settles board and print in hand first.\n\n## Two jobs the box has to do\n\nAn extension box is working packaging, not just presentation. The first job is protection with order: bundles and wefts must arrive tied, flat and uncrushed, and stay that way through storage and retail handling \u2014 which is an insert question before it is a wrap question. The second job is the length-shade system: an extension brand's range lives or dies on the buyer finding 18-inch #613 next to 20-inch #1B without opening anything, so the box carries numbering, shade panels or window placement as part of its structure. A box that protects but hides the system fails the salon; a box that displays but crushes the hair fails the customer. The format choice below is where those two jobs get balanced.\n\n**Takeaway:** inserts solve protection, wrap design solves the length-shade legibility \u2014 the format decides how much of each you get.\n\n## Three formats, three programme levels\n\n| Format | Built for | Typical use | Working level |\n|---|---|---|---|\n| Sleeve box | single bundle | per-length retail units, salon restock | entry programmes, high counts |\n| Drawer box | multi-bundle set | length-shade kits, gifting sets | mid-line and subscription-style sets |\n| Magnetic flip-top | flagship programme | premium launches, presentation at counter | top of range |\n\n![Three formats, three programme levels](/charts/hair-extension-box-formats.svg)\n\n*Fig. 1 \u2014 Sleeve, drawer and magnetic formats against the programme level each one carries.*\n\nThe sleeve is the volume format: one bundle, one slide, minimal board, maximum units per shipping carton. The drawer turns the set into a ritual \u2014 the slide action suits a graduated length run laid out in order. The magnetic flip-top is the counter piece, the format a flagship shade line deserves; the closure mechanics and build trade-offs of magnetic construction are covered in the [magnetic gift boxes guide](https://elapack.com/news/magnetic-gift-boxes-guide/). All three share the same wrap options \u2014 art paper, textured wraps, printed, foiled or embossed logos \u2014 and the board-and-wrap engineering common to the [rigid boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/).\n\n**Takeaway:** most extension brands run sleeve for volume and one drawer or magnetic format for the top of the range \u2014 two formats, one artwork family.\n\n## Inserts and the length-shade system\n\nThe insert is the component that touches the hair, and it does two things at once: it holds the bundle in place without crushing it \u2014 flat-lying channels rather than compression \u2014 and it sets the geometry the shade system prints against. Multi-bundle drawers rely on the insert to keep lengths separated and ordered; the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/) compares the material families and their feel grades. On the wrap side, the system needs space: length numbers, shade references or a shade panel are layout items, not afterthoughts, and they belong in the dieline round \u2014 which is why the dieline is drawn from your bundle dimensions before anything else, free at quotation.\n\n**Takeaway:** send the bundle and the shade-card together; the insert geometry and the panel layout are one drawing.\n\n## The published supplier pages, read as-published\n\n| Supplier | Published terms | Read |\n|---|---|---|\n| Custom Boxes Market | cardstock 60\u2013400 lb, no die or plate charges claimed, free shipping | 14 Oct 2026 |\n| Luxury-Paper-Box (KALI) | wholesale manufacturer for extensions, wigs, closures, hair spray and hair oil | 14 Oct 2026 |\n| OXO Packaging | custom sizes and designs, eco-friendly material options listed | 14 Oct 2026 |\n| This factory | sleeve/drawer/magnetic to bundle dimensions, 200 pieces per design, 15\u201320 working days | our published terms |\n\nRead these the way the [small business packaging guide](https://elapack.com/news/custom-packaging-small-business-guide/) reads the whole market: no-charge come-ons belong to print-farm workflows where the unit price carries everything; a factory line quotes tooling honestly (a cutting die at USD 50\u2013100 only when a new die is genuinely needed) and builds to your dimensions. For a salon brand, the difference shows up at the insert \u2014 catalogue sizes crush bundles that were never catalogue-shaped.\n\n**Takeaway:** compare on insert fit and format honesty first; free-die claims price the die into the run somewhere.\n\n## Boxes as one branded system\n\nThe extension box rarely travels alone in a programme. Satin wig bags carry the wig side of the same brand \u2014 the [custom satin wig bag](https://elapack.com/products/custom-satin-wig-bag/) pairs with the box line as one system \u2014 and the [cotton envelope pouch](https://elapack.com/products/custom-cotton-envelope-pouches/) covers the travel and aftercare layer for hair and beauty lines. One artwork family across box, bag and pouch is what makes a two-product line read as a brand; the bag side of that pairing is laid out in the wig guide linked above.\n\n## Ordering data\n\n| Line item | Terms |\n|---|---|\n| Minimum order | 200 pieces per design, formats included |\n| Formats | sleeve (single bundle) / drawer (multi-bundle) / magnetic flip-top (flagship) |\n| Built to | your bundle dimensions; dieline drawn free at quotation |\n| Production | 15\u201320 working days (200\u201320,000 pieces) |\n| Stock sample | free, ships 2\u20133 days, plus USD 20 courier |\n| Custom sample | USD 25 + USD 20 shipping, 3\u20135 days from artwork |\n| Payment | T/T or PayPal |\n\nProduct photography for this line is still in progress, so the sample path matters more than usual: a stock sample settles board, wrap and print feel before artwork, a custom sample settles the insert fit on your actual bundles. The [samples guide](https://elapack.com/news/custom-packaging-samples-guide/) has the costs and timings, and volume terms are in the [2026 factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/).\n\n## Bottom line\n\nPick sleeve for volume, drawer or magnetic for the top of the range, and spend the design round on the insert and the length-shade panel \u2014 that is where extension packaging wins or loses. ELAPACK builds all three formats to your bundle dimensions from 200 pieces; [send bundle dimensions and shade-card artwork status](https://elapack.com/contact/) and the dieline comes back with the quote."
  },
  {
    "slug": "wholesale-perfume-boxes-guide",
    "datePublished": "2026-10-14",
    "title": "Wholesale Perfume Boxes: Structures, Inserts and Bulk Terms",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "8 min read",
    "image": "/images/covers/wholesale-perfume-boxes-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK wholesale perfume boxes guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Wholesale perfume boxes read from the buyer side: three structures, inserts cut to the bottle profile, what quantity does to price at 200 / 1,000 / 5,000, and the supplier ladder as published.",
    "metaDescription": "Wholesale perfume boxes built around your bottle \u2014 two-piece, drawer and magnetic structures with EVA, paper card or moulded pulp inserts. Bulk terms, tiers and ordering data from 200 pieces.",
    "body": `*Product facts and ordering terms below are this factory's published trade terms. Supplier terms in the comparison table are as published on supplier pages read 14 October 2026 and are quoted for comparison only. Community questions are quoted from public Reddit threads, read 12 October 2026.*

Fragrance packaging on this site is covered twice already: the [custom perfume packaging guide](https://elapack.com/news/custom-perfume-packaging-guide/) walks the whole programme, and the [perfume sample cards guide](https://elapack.com/news/perfume-sample-cards-guide/) goes deep on trial formats. This third page is about the box itself, bought wholesale: which structure, which insert for which bottle, what quantity does to price, and what the supplier pages actually offer. It exists because the buying end of the fragrance community keeps asking aloud \u2014 "start a small fragrance brand: hardest part of packaging and sourcing?" is a recurring thread subject (community questions, read 12 October 2026) \u2014 and the ranking results are supplier catalogues, not a buyer's spec view.

> **Quick answer:** wholesale perfume boxes run in three structures from this factory \u2014 two-piece lift-off lids for flagship gifting, drawer formats that layer bottle and story card, and magnetic flip-tops for the retail counter \u2014 each built to your bottle dimensions, with inserts cut to the bottle profile in EVA foam, paper card or moulded pulp. Orders run from 200 pieces per design in 15\u201320 working days; ask for tiered quotes at 200 / 1,000 / 5,000. Glass bottles and closures are the glass trade's product, not ours \u2014 the box is.

## Three structures, three jobs

| Structure | How it opens | Where it sits |
|---|---|---|
| Two-piece lift-off (lid and base) | lift the lid | flagship gifting, the presentation moment |
| Drawer | slides out | bottle plus story card, layer by layer |
| Magnetic flip-top | one-handed catch | retail counter, repeat-handled lines |

![Three structures, one bottle](/charts/wholesale-perfume-boxes-structures.svg)

*Fig. 1 \u2014 The three structures around the same bottle, with the insert cut to the bottle profile.*

The choice is mostly about where the box is opened. A gift-boxed flagship is opened once, slowly \u2014 the lift-off lid earns its theatre. A drawer suits a line with a story to tell alongside the bottle: card on top, glass beneath. The magnetic flip-top is the workhorse of the counter \u2014 one-handed, closes itself, survives handling; the closure mechanics and build trade-offs are covered in the [magnetic gift boxes guide](https://elapack.com/news/magnetic-gift-boxes-guide/). All three share the wrap options \u2014 full-colour print, foil or embossed branding \u2014 and the board-and-wrap engineering common to every format in the [rigid boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/).

**Takeaway:** pick the structure by where the box is opened, not by how it photographs.

## The insert is the glass question

A perfume box is a box around a bottle, and the insert decides whether the glass rides safely from factory to vanity. Three insert materials cover the range:

| Insert | Character | Best for |
|---|---|---|
| EVA foam | precise die-cut cradle | flagship formats, heavy glass |
| Paper card | flat, printable, fibre-only | lighter bottles, grade-clean builds |
| Moulded pulp | formed nest, fibre-only | transit-heavy lines, eco-honest programmes |

Each is cut or formed to the bottle profile you supply \u2014 travel sprays to full flagship formats and multi-bottle gift sets \u2014 so the specification starts with bottle dimensions, not box dimensions. The material families and their feel grades are compared in the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/); for EU-bound programmes the insert choice is also a grading variable, since fibre-only builds grade cleanest under the [PPWR recyclability grades guide](https://elapack.com/news/ppwr-recyclability-grades-guide/).

**Takeaway:** send the bottle first; the insert is drawn to the glass and the box is drawn to the insert.

## What wholesale changes

The economics of a wholesale box order are three lines, and only the first scales with ambition:

| Line | Behaviour | Buyer's move |
|---|---|---|
| Unit price | falls in quantity steps at print-run thresholds | quote 200 / 1,000 / 5,000 on one sheet |
| One-off tooling | cutting die USD 50\u2013100 where a new die is needed; never repeats on the same design | pay once, keep the dieline on file |
| Freight | air for first runs; the pallet is where sea overtakes | plan the reorder before launch, not after |

None of this is fragrance-specific \u2014 it is the arithmetic documented in the [2026 factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/) applied to fragrance volumes. What is fragrance-specific is the failure mode: brands that buy the launch quantity twice because the first run was sized to optimism. The tier sheet exists to prevent that.

**Takeaway:** the quantity decision is a tier decision \u2014 let the sell-through forecast pick the run, not the launch-day mood.

## The published supplier pages

| Supplier | Published terms | Read |
|---|---|---|
| Packamor | fragrance packaging from 70-unit orders to 10,000+; bottles, boxes, labels bundled | 14 Oct 2026 |
| Urgent Boxes | custom perfume boxes, no minimum order, free US shipping | 14 Oct 2026 |
| Jinglin Packaging | FSC-certified factory-direct, MOQ 500; magnetic, lid-and-base, drawer, tube; flocked EVA inserts | 14 Oct 2026 |
| Large-scale tier | Quadpack, Smurfit Kappa, WestRock and peers, as listed in a trade roundup | 14 Oct 2026 |
| This factory | boxes and inserts only, 200 pieces per design, 15\u201320 working days, factory-direct | our published terms |

Four machines, honestly read. The no-minimum pages are print farms \u2014 prototypes at entry prices, unit economics for nothing bigger. The 70-unit bundler sells first-launch convenience, bottles included, one catalogue. The MOQ-500 FSC line is this factory's machine with a higher door. The large-scale tier belongs to brands whose volumes have outgrown this conversation. A 200-piece, sample-first, factory-direct line sits one rung up from the bundlers and two rungs below the majors \u2014 which is exactly where a fragrance line with one proven SKU should be standing.

**Takeaway:** the market is a ladder of minimums \u2014 pick the rung your realistic reorder can stand on.

## Glass, and the rest of the programme

Bottles, pumps, sprayers and collars are the glass trade's product. A packaging factory that implies otherwise is reselling someone else's line with a margin on it; the bundling suppliers above show the honest version of the combined offer, and it is a real convenience \u2014 priced in catalogue choices. The workable split for a small brand: glass from the glass trade, boxes from the box trade, both held to sample approval before the first bulk run. The rest of the fragrance programme \u2014 trial cards at multiples of retail volume, pouches with gift sets \u2014 is covered where it belongs: the [programme guide](https://elapack.com/news/custom-perfume-packaging-guide/) and the [sample cards guide](https://elapack.com/news/perfume-sample-cards-guide/). The box is this page; the rest links from here.

**Takeaway:** buy the bottle where bottles are made and the box where boxes are made; the samples make the introduction.

## Ordering data

| Line item | Terms |
|---|---|
| Minimum order | 200 pieces per design |
| Structures | two-piece lift-off / drawer / magnetic flip-top |
| Built to | your bottle dimensions; dieline drawn free at quotation |
| Inserts | EVA foam, paper card or moulded pulp, cut to bottle profile |
| Production | 15\u201320 working days (200\u201320,000), from sample approval and deposit |
| Stock sample | free, ships 2\u20133 days, plus USD 20 courier |
| Custom sample | USD 25 + USD 20 shipping, 3\u20135 days from artwork |
| Payment / freight | T/T or PayPal; air or sea from Shanghai or Shenzhen |

The calendar note that matters: a line that wants shelf-ready boxes for the Q4 gift season needs samples approved by early Q3 \u2014 the 15\u201320 day production window sits behind the sample round and in front of the freight window. What a sample should prove, and what it costs, is the [packaging samples guide](https://elapack.com/news/custom-packaging-samples-guide/); the questions to ask any factory before the deposit moves are in the [manufacturer vetting checklist](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/); and first-order structure \u2014 what to order first, in what sequence \u2014 is the [small business packaging guide](https://elapack.com/news/custom-packaging-small-business-guide/)'s subject.

## Bottom line

Specify the structure by where the box opens, the insert by the bottle, and the quantity by the reorder forecast \u2014 then hold the supplier to a dieline, a sample and a stated composition. ELAPACK builds all three structures to your bottle dimensions from 200 pieces, inserts cut to profile, dielines free at quotation. [Start the quote](https://elapack.com/contact/) with bottle dimensions, structure preference and target volumes. For the supplier side of the whole programme \u2014 where to buy what, and which rung of the ladder suits a first launch \u2014 see the [perfume packaging sourcing guide](https://elapack.com/news/perfume-packaging-sourcing-guide/).`
  },
  {
    "slug": "custom-earring-cards-guide",
    "datePublished": "2026-10-15",
    "title": "Custom Earring Cards: Sizing, Slots and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-earring-cards-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom earring cards guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Earring cards from the buyer side: slot styles by earring type, the sizing arithmetic (card height from drop length), cardstock bands and ordering data from 200 pieces.",
    "metaDescription": "Custom earring cards with your logo \u2014 printed display cards sized to studs, drops and hoops, with slot and punch formats for jewelry brands. MOQ 200, free stock samples.",
    "body": `*Product facts and ordering terms below are this factory's published trade terms. Competitor specs in the comparison sections are as published on supplier and marketplace pages read 15 October 2026, quoted for comparison only. The sizing method is geometry \u2014 card height from drop length, width from pair spacing \u2014 and needs no supplier claim to check. No environmental claims are made on this page.*

Earring cards are the cheapest square centimetres in a jewelry programme and the easiest to get wrong: a card cut too short turns a pair of drop earrings into a crowded tangle, and a slot punched for studs will not hold a fishhook. This guide stays on the card itself \u2014 formats, slot styles, the sizing arithmetic, the cardstock bands the market prints on, and what ordering at each supplier tier actually costs. It sits beside the [jewelry display and storage guide](https://elapack.com/news/jewelry-display-trays-guide/) (trays and showcases) and the [jewelry packaging overview](https://elapack.com/news/custom-jewelry-packaging-guide/) (boxes, pouches and sets), and shares its paper-and-print logic with the [perfume sample cards guide](https://elapack.com/news/perfume-sample-cards-guide/).

> **Quick answer:** specify the slot style by earring type first, then let the earring set the card size \u2014 height from drop length plus a brand band, width from pair spacing \u2014 and choose cardstock in the market's standard 14\u201318 pt cover band. Printed and die-cut cards from this factory run from 200 pieces per design in 15\u201320 working days; a USD 25 custom sample plus USD 20 shipping proofs the card, slot and print before the run.

## What the card has to decide

A card does two jobs in one piece of cardstock: it presents the pair at retail \u2014 price, name, brand \u2014 and it holds the earrings securely enough to survive being picked up, turned over and slid across a counter. The two jobs pull in opposite directions. Presentation wants clean space and a quiet logo; holding wants slots, punches and notches exactly where the earring needs them.

That tension is why a card specified "same as last time but for hoops" fails. The slot system is the structure of the card, the way a lid is the structure of a box, and it changes with the earring type. Everything else \u2014 stock, finish, print \u2014 decorates that structure.

The card is also the layer buyers see first in a marketplace listing. A pair photographed on a sized, branded card reads as a product line; the same pair on a generic card reads as craft output. For brands running both retail and online channels, one card artwork serves both, which is why the spec is worth getting right before the first print run rather than after the second reorder.

## Slot and punch styles by earring type

| Earring type | Holding feature | What it must fit | Spec decisions |
|---|---|---|---|
| Studs | Paired horizontal slots | post length + butterfly back | slot length vs post gauge, pair spacing |
| Fishhook / drops | Top punch or hook slot | hook wire curve | punch position vs drop length, card height |
| Hoops | Double notch or through-slits | hoop diameter when carded flat | notch pitch, card width for large hoops |
| Huggies / clips | Snap-frame slit | closure bulk | slit reinforcement for heavier pairs |

Two practical notes from the carding action itself. Butterfly backs go on behind the card, so slot length must clear the post with the back attached \u2014 the most common sizing miss on stud cards. And fishhook styles hang from the top band of the card, which means the hook punch and the brand mark compete for the same centimetres; decide which sits higher before artwork, not after.

For pairs that ship flat but hang at retail, a hanging punch (the round hole at the card top) is a separate feature from the earring slots below it \u2014 specify both positions in the dieline so the hung card does not tilt.


![Earring card slot styles mapped to earring types](/charts/earring-card-slot-styles.svg)

*Fig. 1 \u2014 Slot and punch styles mapped to the earring type each one holds.*

## Sizing the card correctly

Community questions from jewelry makers keep returning to one problem \u2014 how to size earring cards and necklace display cards correctly (questions read 15 October 2026) \u2014 because most sellers inherit a card size instead of deriving it. The derivation is short:

**Card height = drop length + holding allowance + brand band.** Measure the earring hanging as it will card (hook engaged or post through), add room for the back or a second finding, and leave the band at the top for logo and price. A 4 cm drop with findings and a 2 cm band lands near a 7 cm card \u2014 the market's 2"\xD74" earring card format (Gold Image Printing, as published, read 15 Oct 2026) covers exactly this arithmetic for typical drops.

**Card width = pair spacing + margins.** Studs sit closer than hoops; a wide pair on a narrow card collides at the slots. When the same artwork must cover several earring types, size the card to the largest pair in the line and let smaller pairs sit with more air \u2014 cards look empty, earrings never look comfortable squeezed.

Necklace display cards follow the same logic with one change: the chain, not a finding, sets the length, so the slit position and card height come from the chain's hanging length. The market runs these from 2.25" squares up to 3.5" squares with short, standard and high slits (as published, read 15 October 2026) \u2014 pick the slit height by where you want the chain's curve to sit, not by stock availability.

## Cardstock and finishes

The market prints jewelry cards on cover-weight board from 14 to 18 pt, with the finish doing the branding work: semi-gloss and matte as the workhorses, linen and felt weaves for artisan lines, soft-touch lamination at the top of the band (Gold Image Printing's published card menu, read 15 October 2026). What changes across that band is stiffness and edge behaviour \u2014 a 14 pt card flexes when handled, an 18 pt card reads as part of the product.

From this factory's side, the card is a printed-and-die-cut paper product: CMYK print, foil stamping, embossing and debossing on the confirmed process list, with slots and punches cut to the dieline \u2014 the [die cutting and dielines guide](https://elapack.com/news/die-cutting-and-dielines-guide/) describes how the cutting form prices and what a new form costs (USD 50\u2013100 when a new die is needed).

## Ordering data: marketplace packs vs factory runs

| Tier | What you get | Published terms |
|---|---|---|
| Marketplace small packs | generic shapes, template print, ship fast | Etsy listings from about USD 14.85 per 100 cards (read 15 Oct 2026) |
| Domestic print shops | full print menu, standard sizes | Gold Image Printing: 50\u20135,000 piece tiers, 3-business-day turnaround (read 15 Oct 2026) |
| This factory | custom dieline, print and finish, made with the rest of the programme | 200 pieces per design, 15\u201320 working days, stock sample free + USD 20 shipping, custom sample USD 25 + USD 20 in 3\u20135 days |

The three tiers are not really competitors. The marketplace tier sells convenience at retail-per-card pricing; the print-shop tier sells a full finish menu in domestic volumes; a factory run sells the card as part of the packaging programme \u2014 same dieline logic as the box, same print colour control, and the option to match card stock and pouch fabric to one Pantone reference. For a brand already ordering [custom jewelry pouches](https://elapack.com/custom-jewelry-pouches/) or boxes, adding the card to the same production calendar is the difference between a matched line and a matched-after-the-fact one. First-order budgeting for the full set \u2014 what to order first when the budget is tight \u2014 is walked through in the [small business packaging guide](https://elapack.com/news/custom-packaging-small-business-guide/).

## Cards as part of the jewellery programme

The card is the presentation layer that travels: box or pouch carries the pair, card presents it, display holds it at the counter. Programmes that run all three from one supplier keep one colour system across paper, fabric and acrylic \u2014 the same reason the [jewelry packaging collection](https://elapack.com/custom-jewelry-packaging/) groups boxes, pouches and display as one system. At the counter, [acrylic earring displays](https://elapack.com/products/acrylic-earring-display/) and [velvet necklace displays](https://elapack.com/products/velvet-necklace-display/) hold carded pairs upright; the card's hanging punch, specified back in the sizing section, is what makes them compatible.

**Spec a card programme:** send the earring list with drop lengths and finding types through the [contact page](https://elapack.com/contact/), and the slot map and card sizes come back with the quote. Or read the adjacent decisions first \u2014 the [pouch logo guide](https://elapack.com/news/custom-logo-pouches-guide/) for print-method economics, the [samples guide](https://elapack.com/news/custom-packaging-samples-guide/) for what a USD 25 card sample proves.`
  },
  {
    "slug": "clear-cosmetic-bags-guide",
    "datePublished": "2026-10-15",
    "title": "Clear Cosmetic Bags: Formats, Materials and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/clear-cosmetic-bags-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK clear cosmetic bags guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Clear cosmetic bags from the buyer side: the format set, clear PVC and TPU thickness bands, the TSA travel sizing rule, branding on transparent faces and ordering data.",
    "metaDescription": "Custom clear cosmetic bags with logo \u2014 TSA-size travel bags, pro makeup cases and vinyl pouches in clear PVC/TPU, with thickness bands and ordering data. MOQ 200, free stock samples.",
    "body": `*Product facts and ordering terms below are this factory's published trade terms. Competitor terms in the comparison table are as published on supplier pages read 15 October 2026, quoted for comparison only. The air-travel wording is quoted from the US TSA's published liquids rule, read the same day. No environmental claims are made on this page.*

Clear bags are the only cosmetic-bag format specified by a rule as often as by a brand: airport security, retail visibility and pro-artist kits all pull toward transparent, and each pulls a different size. This page is the transparent-format deep dive \u2014 material and thickness, size bands, printing on clear film, and the ordering terms at each supplier tier. The full bag-and-case picture across fabrics sits in the [custom cosmetic & makeup bags guide](https://elapack.com/news/custom-cosmetic-bags-guide/), and the travel-grooming side of clear formats (the Oxford-nylon boundary included) in the [custom toiletry bags guide](https://elapack.com/news/custom-toiletry-bags-guide/).

> **Quick answer:** specify a clear bag in three decisions \u2014 size band first, material thickness second, branding third. Transparent zip formats from this factory run in clear PVC across the published 0.12\u20130.50 mm band, made to your sizes from 200 pieces in 15\u201320 working days, for cosmetics and jewellery programmes. A USD 25 custom sample plus USD 20 shipping proves zip action and print on film before the run.

## What clear formats are asked to do

Four jobs cover nearly every clear-bag brief. The airport job: the US TSA's liquids rule allows "a quart-sized bag of liquids, aerosols, gels, creams and pastes" with "travel-sized containers that are 3.4 ounces (100 millilitres) or less per item" (TSA.gov, read 15 October 2026) \u2014 the transparent quart-format is a security constant, and beauty brands build travel minis around it. The retail job: a clear bag shows the shade range without unzipping anything, which is why press-on-nail and skincare-display programmes run transparent formats. The professional job: makeup artists and salon lines check contents at a glance across a full kit. And the organizing job: hotel amenity sets and subscription boxes use clear zips as the visible layer inside a printed outer.

None of these jobs cares about the brand mark as much as a fabric bag does \u2014 clarity is the feature. That inverts the spec sheet: material and size come first, branding lands last and light.

## The format set

| Format | The job it serves | Construction note | Spec decisions |
|---|---|---|---|
| Flat zip pouch | minis, samplers, GWP | two layers, edge-welded zip | band thickness, zip style |
| Gusseted zip bag | stands upright in kit or drawer | side gussets give a base | base footprint vs tallest bottle |
| Clear tote | retail carry, show kits | welded handles | handle reinforcement at 0.30 mm+ |
| Small item pouch | single-product retail | top zip, minimal seam count | seam width for small radii |

The gusseted format is the one worth specifying carefully: a flat pouch stores flat but slumps when opened, while a gusseted bag stands and turns a drawer or kit into a display. The trade is a larger welding pattern, which at small sizes with tight corner radii is where quality shows \u2014 a bag specified with generous corner radii welds cleaner than one drawn with sharp corners.


![Clear cosmetic bag formats and thickness bands](/charts/clear-cosmetic-bags-formats.svg)

*Fig. 1 \u2014 The clear format set and the thickness band each format commonly runs.*

## Clear material and what thickness numbers mean

This factory's published clear line runs in PVC across a 0.12\u20130.50 mm band \u2014 the same band published for the clear rows of the cosmetic-bag format table. What the numbers do: at the thin end a bag feels like film, folds into a pocket and suits minis and samplers; mid-band it starts to hold shape; at the top of the band it stands when gusseted and carries welded handles without distortion. Thickness is quoted per project because the format sets it \u2014 a hanging retail format and a pocket quart-bag should not share a number.

Buyers comparing transparent materials will meet TPU and EVA films in the market as softer and more cold-flexible alternatives; this factory's published clear programme is PVC, quoted for cosmetics and jewellery \u2014 the scope stated on the [clear PVC zip bag](https://elapack.com/products/custom-pvc-bags/) page. Programmes outside that scope are better served by the fabric tracks in the guides above.

## Sizing: the travel rule and the working size bands

The TSA rule fixes a format, not a factory dimension \u2014 the published wording says quart-sized and 100 ml containers and stops there (read 15 October 2026). Factories translate it into working bands:

| Band | Contents | Format that carries it |
|---|---|---|
| Item bag | single mini, lipstick, sampler | small flat zip |
| Travel quart-format | the security-carry set | flat or gusseted zip in the quart footprint |
| Full kit | daily routine, brushes, minis together | gusseted zip, tote for retail |

Sizing follows the tallest item, not the count: a 100 ml bottle sets the closed height plus zip clearance, and everything else shares the footprint. For gift programmes, the clear bag is the inner layer \u2014 the [cosmetic pouches collection](https://elapack.com/custom-cosmetic-pouches/) shows the fabric-and-clear pairings, and the outer box decision follows the same made-to-size logic in the [rigid boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/).

## Branding on a transparent bag

Print on clear film does not behave like print on fabric. Ink sits on the surface and the unprinted artwork stays transparent, so a logo designed as a solid block reads as a window with edges; reversed-out and outline marks read better on film. One colour is the working rule \u2014 the same conclusion the [pouch logo guide](https://elapack.com/news/custom-logo-pouches-guide/) reaches for fabric \u2014 and on clear it is closer to a hard rule, because register tolerance on film shows at the second colour.

The sample proves it: print adhesion, colour over transparency and zip action are all visible in one USD 25 custom sample (plus USD 20 shipping, 3\u20135 days from artwork) \u2014 the cheapest decision in the programme and the one that settles the artwork direction.

## Ordering data: catalogue tier vs made-to-size

| Tier | Model | Published terms |
|---|---|---|
| Promotional products | decorated catalogue stock | Totally Promotional: clear cosmetic bag from USD 4.44, minimum 100, free setup (read 15 Oct 2026) |
| Marketplaces | bulk generic packs | Amazon bulk listings, per-unit pricing, no custom sizes |
| This factory | made-to-size clear PVC | 200 pieces per design, 15\u201320 working days, stock sample free + USD 20 shipping, custom sample USD 25 + USD 20 in 3\u20135 days |

The catalogue tier sells a stock shape with a logo on it, at an entry of 100 pieces \u2014 the right buy when any standard shape will do. The factory tier sells the dimension set: your tallest bottle, your shade count, your quart-format footprint, welded and printed to the drawing. The two structures suit different briefs, and the comparison that matters is not price per unit but which one fits the product list. Volume economics \u2014 tiered quotes and freight \u2014 are documented in the [2026 factory data page](https://elapack.com/news/custom-packaging-moq-sample-lead-times-2026/).

## Bottom line

Order the size band from the tallest item, the thickness from the format, and the branding in one colour reversed out of the film. ELAPACK builds clear zip and tote formats in PVC to your sizes from 200 pieces, quoted for cosmetics and jewellery programmes. [Send the item list](https://elapack.com/contact/) and the size recommendation comes back with the quote; first-order sequencing is covered in the [small business packaging guide](https://elapack.com/news/custom-packaging-small-business-guide/).`
  },
  {
    "slug": "custom-leather-cosmetic-bags-guide",
    "datePublished": "2026-10-15",
    "title": "Custom Leather Cosmetic Bags: PU Builds, Finishes and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-leather-cosmetic-bags-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK custom leather cosmetic bags guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Leather-look cosmetic bags in PU over microfiber: four builds, faces and linings, foil and deboss branding, the PU-versus-genuine trade-off, and ordering data from 200 pieces.",
    "metaDescription": "Custom leather cosmetic bags in PU over a microfiber base \u2014 zip, boxed, envelope and tray-in-wrap builds with foil and deboss branding. PU/faux only. MOQ 200, free stock samples.",
    "body": `*Product facts in this guide are ELAPACK's confirmed 2026 trade terms; material longevity comparisons are quoted as published by the cited leather-trade sources, for comparison only.*

Leather cosmetic bags are a specification buy, not a catalogue buy: the front page of results is factory landing pages and promotional catalogues, none of which will tell you what "leather" actually means on a quote sheet. This page does, starting with the boundary that matters most.

> **Quick answer:** we build leather-look cosmetic bags in PU over a microfiber base \u2014 pebbled, smooth or suede-touch faces \u2014 from a 200-piece minimum in 15\u201320 working days. Genuine (animal-hide) leather is a different trade and a different audit chain, and we do not quote it; if a supplier offers you "leather" without saying which, that silence is the first spec you should pin down. A USD 25 custom sample plus USD 20 shipping settles face, lining and branding before the run.

## What "leather" means on a cosmetic-bag quote

The word covers at least four different purchases: genuine animal-hide leather, bonded leather (hide fibres reconstituted with binder), PU leather (a polyurethane coat over a fabric base) and PVC leather (polyvinyl coat over the same). Factories that serve brand programmes overwhelmingly work in PU and faux \u2014 it takes colour consistently, embosses cleanly, and costs a fraction of hide \u2014 while genuine-leather bags come from a leather-goods trade with its own tannery sourcing and audit chain.

For a cosmetic bag specifically, the honest trade-off runs in PU's favour more than most categories. A bag that lives in a bathroom drawer faces moisture and product spillage, and the failure mode of PU there is documented: polyurethane coatings break down by hydrolysis over several years, and users report cracking or peeling anywhere from months into heavy use, while genuine leather lasts decades with regular conditioning but needs that care. Neither is wrong \u2014 the decision is whether the bag is a keepsake you maintain or a branded programme piece you replace on a cycle. As-published sources put ordinary fabric-based PU at roughly three to five years before hydrolysis takes it; a microfiber base \u2014 what we run \u2014 sits in the more durable tier of faux leather, and we quote no specific year figure for it because real lifespan depends on the use cycle, not the datasheet. The buyer's use case, not our preference, should decide.

**Spec the face and the base separately on the quote sheet** \u2014 "PU leather" without a base fabric and thickness is exactly as vague as "cardboard" without a gram weight.

## Structures: the four builds that carry the leather look

| Build | Construction | Reads as | Watch-out |
|---|---|---|---|
| Flat zip pouch | PU face, fabric interlining, zip or slider | everyday retail, men's lines | interlining omitted \u2192 face creases permanently |
| Boxed (gusseted) pouch | stitched gussets, flat base | structured kit bag | corner stress needs reinforced stitching |
| Envelope / flap pouch | structured flap, snap closure | jewellery-adjacent, gifting | flap spring comes from the interlining, not the PU |
| Tray-in-wrap | rigid tray inside a PU wrap | premium sets, display | priced as rigid-box construction, see below |

The fourth build is a boundary worth naming: a structured PU wrap around a rigid tray is rigid-box craft with a leather-look skin, and we build it like any [rigid box](https://elapack.com/news/custom-rigid-boxes-guide/) rather than like a sewn bag. The same construction already runs in our [leather envelope pouch](https://elapack.com/products/leather-envelope-pouch/) programme \u2014 pebbled faux leather, suede-touch interior, foil on the flap \u2014 which is the reference sample most leather-look cosmetic enquiries start from. Sewn soft bags and rigid tray-in-wrap share the face material and nothing else; quote them separately.


![Four leather-look bag builds against structure complexity](/charts/leather-cosmetic-bag-builds.svg)

*Fig. 1 \u2014 The four PU builds, from flat zip pouch to tray-in-wrap.*

## Faces, linings and the finish set

| Layer | Options we run | Decision driver |
|---|---|---|
| Face | pebbled, smooth, suede-touch PU | pebble hides handling marks; smooth takes foil best |
| Base fabric | microfiber base under the PU coat (our standard) | microfiber sets tear strength and hydrolysis resistance above ordinary woven bases |
| Lining | suede-touch, satin, plain cotton | suede-touch reads premium; satin wipes clean |
| Edge | turned, bound or painted edges | painted edges are the premium tell |
| Colour | matched through the four-step control chain | match face, lining and thread together |

The men's side of this family runs almost exclusively black or brown pebble with a one-colour mark, which is the cheapest branding that still reads deliberate. **Decide face texture before branding method: foil and emboss sit differently on pebble than on smooth, and a mark sized for one shows up wrongly on the other.**

## Branding on a leather-look face

Foil stamping and debossed logos are the two methods that belong on PU \u2014 a gold foil on a flap is the reference look for a reason, and a blind deboss reads as quietly expensive in exactly the way screen print does not on this face. Heat transfer works for multi-colour marks on smooth faces. The general economics of run length versus technique are laid out in the [MOQ and logo techniques guide](https://elapack.com/news/custom-packaging-moq-oem-odm-logo-guide/); the leather-specific rule is simpler: **one mark, one method, positioned on the flap or the corner \u2014 the face is the design, and the logo competes with it if oversized.**

## Ordering data

| Line item | Terms |
|---|---|
| MOQ | 200 pieces per design, PU builds included |
| Production | 15\u201320 working days (200\u201320,000), from sample approval and deposit |
| Stock sample | free, ships 2\u20133 days, plus USD 20 courier |
| Custom sample | USD 25 + USD 20 shipping, built 3\u20135 days from confirmed artwork |
| Payment and freight | T/T or PayPal; air or sea from Shanghai or Shenzhen |

For the bag-versus-case decision across the whole cosmetic line \u2014 fabric bags, clear travel formats, toiletry kits \u2014 the [custom cosmetic bags guide](https://elapack.com/news/custom-cosmetic-bags-guide/) carries the format map; this page stays on the leather-look builds. Brands running a matched programme will find the jewellery-side leather pieces in the same construction language on the [jewelry pouches collection](https://elapack.com/custom-jewelry-pouches/).

## Bottom line

Write "PU, base fabric, thickness, lining" on the quote sheet before you write the logo \u2014 that one line eliminates most of the disappointment in leather-look orders, because the peeling and cracking complaints trace back to unspecified faces, not to PU itself. A 200-piece first run in one face and one mark, sampled at USD 25, tells you more about the look than any catalogue photo.

**Spec a leather-look cosmetic bag:** send sizes, face reference and target quantity through the [contact page](https://elapack.com/contact/). Or settle the adjacent decisions first \u2014 the [cosmetic bags guide](https://elapack.com/news/custom-cosmetic-bags-guide/) for the wider format map, the [logo techniques guide](https://elapack.com/news/custom-logo-pouches-guide/) for print-method economics.`
  },
  {
    "slug": "custom-sunglasses-pouches-guide",
    "datePublished": "2026-10-15",
    "title": "Custom Sunglasses Pouches: Fabric, Closure and Print Choices Compared",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-sunglasses-pouches-guide.webp",
    "imageAlt": "Custom sunglasses pouch builds compared \u2014 drawstring, zip and flat fold",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Fabric by positioning, closure by retail context, print by colour count: the three decisions that spec an eyewear pouch, from the 200-piece band promotional catalogues do not serve.",
    "metaDescription": "Custom sunglasses and eyewear pouches compared by fabric, closure and print method \u2014 microfiber, velvet and cotton builds, drawstring vs zip vs flat fold, MOQ 200, samples in 3-5 days.",
    "body": `
*Product facts and ordering terms below are this factory's published trade terms. Competitor prices are quoted as published on their pages, read 15 October 2026, for comparison only.*

A sunglasses pouch looks like the simplest item in an eyewear programme \u2014 until the specification sheet arrives. Fabric, closure, size, print method: each choice moves the unit price, the lead time and the way the pouch feels in a customer's hand. The promotional catalogues show none of this; they list a grey microfiber drawstring at one price and a full-colour print at another, and leave the brand to guess which specification fits which product line. This guide lays the choices out side by side, from a factory that sews these pouches at branded-run volumes.

> **Quick answer:** for eyewear, microfiber is the working fabric (it cleans as well as protects), the closure follows the retail context \u2014 drawstring for giveaway and travel, zip for premium lines, flat fold for mailers \u2014 and print runs from one-colour screen at the lowest setup to full heat-transfer colour at the highest. MOQ 200 pieces per design; custom samples in 3\u20135 days.

## Why microfiber owns the eyewear pouch

Three fabrics carry most of the market. Microfiber \u2014 the same polyester-polyamide knit used for lens cloths \u2014 is the default because a pouch sewn from it doubles as a cleaner: the customer pulls the sunglasses out and wipes the lenses with the bag. The blend ratio works here exactly as it does on the cloths: 80/20 polyester-polyamide is the industry-standard balance most clients choose, 100% polyamide the premium tier with the softest hand, both stocked at 180\u2013230 GSM with custom blends on request. That dual function is why the microfiber variants dominate search demand across both the sunglasses and eyeglass word families, and why promotional suppliers build their catalogues around it. Velvet is the counter-choice for display and gifting contexts, where the pouch sits open in a box and touch sells. Cotton and muslin carry natural-fibre branding for eco lines at a slightly firmer hand. All three are stocked; the decision is positioning, not availability.


![The three eyewear pouch builds \u2014 drawstring, zip and flat fold](/charts/sunglasses-pouch-closures.svg)

*Fig. 1 \u2014 The three eyewear pouch builds \u2014 drawstring, zip and flat fold.*

## Closures: drawstring, zip, flat fold

The closure decides how the pouch is used more than how it looks. A drawstring closes in one pull, costs the least to sew, and suits high-volume giveaways, event merch and travel retail \u2014 it is the build behind nearly every promotional catalogue listing. A zip adds a secure close for premium lines and heavier contents (a sunglasses pouch that also carries a cloth and a small care card), at a modest sewing premium; fabric zips are stocked, metal pulls add a branding surface. The flat fold \u2014 an envelope with a tuck flap and no hardware at all \u2014 is the lightest and cheapest to ship, made for mailer programmes where the pouch arrives flat with the glasses. Between them these three builds cover the eyewear market; anything else is a bespoke pattern.

## Print methods and what each costs in setup

Screen printing prices per colour \u2014 one colour in one position is the promotional standard \u2014 and holds up at volume for simple logos. Heat transfer reproduces full-colour artwork, gradients and photographic marks, at a higher per-piece cost that falls with quantity. Woven-in or jacquard construction puts the logo into the fabric itself for premium microfiber builds, at the highest minimum. The specification question to answer first is not "which print" but "how many colours does the mark actually need" \u2014 most eyewear logos are one or two, which is why screen remains the volume default. A print method should be chosen on the artwork, not the catalogue page.

## Sizing to the glasses, not the shelf

Pouches are cut to contents, and eyewear spans a wide span: slim optical frames fold to 130\u2013140 mm, fashion sunglasses run to 160 mm and above, and oversized or wraparound styles need a bespoke pattern. A pouch with 10\u201315 mm of clearance closes easily and stops the glasses sliding; a pouch sized "generously" lets them rattle \u2014 the failure mode behind most re-order requests. The specification that matters is the folded length and width of the actual frame, measured hinge to hinge and across the widest lens point, sent with the quote.

## What a first run looks like

| Line item | Terms |
|---|---|
| Minimum | 200 pieces per design |
| Production | 15\u201320 working days (200\u201320,000) |
| Samples | stock free + USD 20 shipping (2\u20133 days); custom USD 25 + USD 20 (3\u20135 days) |
| Fabrics | microfiber, velvet, cotton, satin \u2014 stocked |
| Payment and freight | T/T or PayPal; air or sea from Shanghai or Shenzhen |

Between the promotional 100-piece run and the 1,200-piece factory order sits the band most young eyewear brands actually buy in \u2014 200 to 500 pieces, one or two designs, custom fabric and full specification. That band is what this factory serves. Pair the pouch with a [branded microfiber cloth](https://elapack.com/news/custom-microfiber-cloths-guide/) from the same production line and the same freight; the cloth guide covers its specification separately. For the full eyewear packaging programme \u2014 boxes, inserts, pouches \u2014 the [eyewear packaging guide](https://elapack.com/news/custom-glasses-cases-pouches-guide/) maps the components.

## Bottom line

Specify the pouch like the product it is: fabric by positioning, closure by retail context, print by the artwork's colour count, size by the folded frame. [Start the quote](https://elapack.com/contact/) with frame dimensions and target volume; the pattern and sample follow.
`
  },
  {
    "slug": "custom-microfiber-cloths-guide",
    "datePublished": "2026-10-15",
    "title": "Custom Microfiber Cleaning Cloths for Glasses: GSM, Sizes and Print Methods",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/custom-microfiber-cloths-guide.webp",
    "imageAlt": "Custom microfiber glasses cleaning cloth specification \u2014 composition, GSM and print methods",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "The blend ratio sets the tier, the weight sets the use: how to specify a branded microfiber lens cloth that cleans well, survives washing and keeps the print intact.",
    "metaDescription": "Custom microfiber cleaning cloths for glasses and eyewear \u2014 GSM weight bands, standard sizes, print methods compared, care instructions that keep branding intact. MOQ 200, samples in 3-5 days.",
    "body": `
*Product facts and ordering terms below are this factory's published trade terms. Competitor prices are quoted as published on their pages, read 15 October 2026, for comparison only.*

A branded cleaning cloth is the cheapest piece of brand real estate in eyewear: it travels in every case, gets used daily, and carries a logo for the life of the glasses. Yet most of what a buyer finds online is a price list \u2014 a no-minimum print shop at one end, a promotional catalogue in the middle, a factory price-per-thousand at the other \u2014 and almost nothing on the specification that decides whether the cloth cleans well, survives washing, and keeps the print intact. This guide covers that specification: weight, size, print, and care.

> **Quick answer:** "microfiber" means a polyester-polyamide knit, and the blend ratio sets the tier \u2014 80/20 is the industry standard most clients choose, 100% polyamide the premium tier for streak-free lens wiping; this factory stocks both at 180\u2013230 GSM, custom blends on request. Standard sizes run 15\xD715 cm down to 10\xD710 cm for compact cases; print is screen, heat transfer, jacquard-woven or embossed; and a custom run starts at 200 pieces with samples in 3\u20135 days. Pair with a microfiber pouch from the same line for one freight, one programme.

## Composition and weight: the two spec decisions

"Microfiber" names the fibre fineness, not a single recipe: every microfiber cloth is a knit of polyester and polyamide, and the ratio sets the tier. Polyester provides the mechanical cleaning bite \u2014 its fibres grab oil and grit; polyamide provides absorbency and softness. 80% polyester / 20% polyamide is the ratio the industry treats as the standard, and it is what most clients of this factory choose: the best balance of wipe, durability and cost, which is why the market runs on it. 100% polyamide is the premium tier \u2014 maximum absorbency and the softest, streak-free finish on coated and AR lenses, at a higher fibre cost \u2014 the pick of premium eyewear and camera brands. Both are stocked here at 180\u2013230 GSM, with custom blends on request.

Weight then does the rest of the work within the tier, and the band for optics runs roughly 120 to 280 GSM. Below the stocked band the cloth turns filmy \u2014 factory listings cluster there because it is cheapest, not because it wipes well; above 250 GSM it feels premium for retail kits at a cost in fold bulk. The buyer's rule: pick the blend for the brand tier, then the weight for where the cloth lives \u2014 case insert, standalone accessory, or gift kit \u2014 not the highest number on a quote.


![Microfiber cloth specification \u2014 GSM bands and the four print methods](/charts/microfiber-cloth-spec.svg)

*Fig. 1 \u2014 Microfiber cloth specification \u2014 GSM bands and the four print methods.*

## Sizes and edge finishes

Optical cloths mostly follow a small set of cut sizes: 15\xD715 cm and 18\xD718 cm as standalone accessories, 14\xD714 cm and 10\xD710 cm folded into cases, and custom cuts for oversized sunglasses or boxed kits. Two edge finishes dominate: laser-cut edges, which seal the knit against fraying at no sewing cost and suit promotional volume, and sewn-overlock edges for a finished look on heavier weights in retail kits. The specification worth writing down is the folded size \u2014 the size the cloth must collapse to inside the customer's case \u2014 because that, not the open cut, is what returns to the factory as a re-order problem when it is wrong.

## Print methods and cleaning performance

The print choice interacts with the cloth's function in a way catalogues never mention: ink covers microfiber. Screen printing one or two colours leaves most of the surface open and cleans best \u2014 the standard for optics. Heat transfer reproduces full colour but lays a larger coated zone that cleans less well where the artwork sits, acceptable when the logo is compact. Jacquard weaves the logo into the knit itself \u2014 nothing sits on the surface, cleaning is unaffected, and the minimum is highest; it is the premium default for eyewear and camera brands. Embossing presses the mark into the pile with heat and pressure instead of ink \u2014 a tonal, blind-stamped logo that reads as texture rather than print, leaves the wiping surface fully functional, and suits minimal monogram marks on premium cloths. The decision sequence: artwork colour count first, then how much of the cloth the mark may cover, then budget.

## Keeping a branded cloth clean

The most-searched questions in this cloth family are care questions \u2014 how to wash a microfiber eyeglass cloth \u2014 and the answer matters doubly for branded cloths, because the wash cycle is where a cheap print fails. Lukewarm water, mild detergent, no fabric softener (it coats the fibres and kills the cleaning action), air dry, and the print method above decides whether the logo survives the fiftieth wash. For a brand, publishing these instructions with the product cuts support questions and quietly demonstrates that the cloth was specified to last.

## What a first run looks like

| Line item | Terms |
|---|---|
| Minimum | 200 pieces per design |
| Fabric | 80/20 polyester-polyamide or 100% polyamide, 180\u2013230 GSM (custom blends on request) |
| Production | 15\u201320 working days (200\u201320,000) |
| Samples | stock free + USD 20 shipping (2\u20133 days); custom USD 25 + USD 20 (3\u20135 days) |
| Print | screen / heat transfer / jacquard-woven / embossed |
| Payment and freight | T/T or PayPal; air or sea from Shanghai or Shenzhen |

Cloth is the lightest freight in any eyewear programme, which makes it the natural companion order: a run of cloths pairs with a run of [custom sunglasses pouches](https://elapack.com/news/custom-sunglasses-pouches-guide/) from the same production line, shipping together at one freight cost. Sprays and lens solutions are a separate chemical trade this factory does not supply \u2014 cloths, pouches and print are the line here.

## Bottom line

Specify on function: weight by where the cloth lives, size by the folded case, print by colour count and how much surface it may cover. [Start the quote](https://elapack.com/contact/) with size, target weight and artwork; a sample follows in 3\u20135 days.
`
  },
  {
    "slug": "top-china-jewelry-packaging-suppliers",
    "datePublished": "2026-10-16",
    "title": "Top 10 China Jewelry Packaging Suppliers (2026)",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "9 min read",
    "image": "/images/covers/top-china-jewelry-packaging-suppliers.webp",
    "imageAlt": "Map and comparison of ten China jewelry packaging suppliers \u2014 locations, product focus and published MOQs",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Ten verified China jewelry packaging suppliers with locations, product focus, MOQs and policies taken only from each company's own website \u2014 plus Semrush visibility checks and a buyer-type shortcut. ELAPACK is entry #10, disclosed.",
    "metaDescription": "A verified shortlist of 10 China jewelry packaging suppliers \u2014 locations, product focus, MOQs and sample policies from each company's own site, plus a vetting checklist. ELAPACK included and disclosed.",
    "body": `*Last updated 16 October 2026. Every supplier entry below is built only from what the company publishes on its own website (locations, product focus, MOQ and policy wording), read October 2026, plus domain visibility data we pulled from a logged-in Semrush US mirror on 16 October 2026. Ordering terms in the ELAPACK entry are this factory's confirmed trade terms. No third-party market statistics are quoted \u2014 figures that could not be traced to an original source were dropped.*

Sourcing jewelry packaging from China is rarely a supply problem \u2014 it is a filtering problem. A search for suppliers returns hundreds of factories, and most of them can genuinely make a box. The harder questions come after: which of them actually specialise in jewelry rather than general gift boxes, what their real minimum order quantities are, and whether the sample policy fits your launch timeline before you commit to a production run.

> **Quick answer:** ten suppliers made this list, and one disclosure comes first \u2014 ELAPACK, the publisher of this article, is entry #10. Every entry, ours included, is described using only what the company's own website states; where a number is not published we write "confirm on inquiry" instead of guessing. The two decisions that most differentiate these factories: published custom MOQs run from 200 to 500 pieces, and materials depth ranges from paper-only to wood, leatherette and documented-recycled options.

## How this list was built

Four filters, applied in order:

1. **Product fit and customization depth** \u2014 the supplier must run jewelry packaging as a stated product line (structures, inserts, logo application), not just "gift boxes" in general.
2. **An auditable official website** \u2014 each entry's location, product focus and policies come from the company's own site. Two candidates were dropped because their sites publish no verifiable company information worth quoting.
3. **Independent visibility and logistics check** \u2014 we ran each domain through a Semrush US mirror for organic traffic, and weighed export experience (overseas stock, multi-country plants) from the company's own disclosures. A supplier whose site ranks for nothing is not disqualified \u2014 many good factories are poor at SEO \u2014 but it tells you they will be found through directories and referrals, not search.
4. **Buyer-side scoring dimensions** \u2014 across all entries we compared MOQ flexibility, material compliance and certification, customization depth, sample-to-production speed, and export logistics. 5. **Disclosure** \u2014 ELAPACK is in this list, under the same evidence rules as everyone else: only what we publish on our own site. Inclusion reflects verifiable scope, not advertising spend; this is not a sponsored ranking.

One thing this list deliberately does not do: repeat client rosters. Several suppliers advertise famous brand names on their sites. We stick to certifications and product facts instead, because a logo wall is the easiest thing to inherit from a single old project and the hardest thing for you to verify.

## The ten suppliers at a glance

| # | Supplier | Location (own site) | Product focus | MOQ (own site) | Best for |
|---|---|---|---|---|---|
| 1 | Richpack | Fuzhou; plants CN/VN/TH, US warehouse | Luxury boxes, pouches, displays | 500 custom / 100 US stock | Luxury finishes at volume, multi-country capacity |
| 2 | Haosung | Qingdao, since 2008 | Jewelry boxes, pouches, child-resistant | "from 1 piece" (site claim) | Certification-sensitive buyers (FSC, Sedex SMETA, Disney ILS) |
| 3 | Jialan | Yiwu, est. 2014, 6,000 m\xB2 | Paper gift boxes, bags, jewelry sets | Confirm on inquiry | Small-batch paper packaging |
| 4 | ITIS | Shenzhen (Bao'an) | Custom paper jewelry boxes, velvet pouches | Confirm on inquiry | One-stop design-to-delivery paper boxes |
| 5 | Pakoro | Shenzhen | Rigid boxes, mailers, folding cartons | "Flexible MOQ" (site wording) | Box + e-commerce mailer in one program |
| 6 | Huaisheng | Guangzhou (Zengcheng) | Foldable and magnetic-closure boxes | Confirm on inquiry | Magnetic and foldable structures |
| 7 | Winnerpak | Since 1990 | Paper, leatherette, wood, LED, velvet boxes | 500 custom / 100 display items | Long-history materials-range specialist |
| 8 | Ecoicolor | Dongguan (Fenggang) | Rigid boxes, pouches, recycled materials | Confirm on inquiry | Sustainability-documented projects (FSC/GRS docs) |
| 9 | Annaigee | Huizhou (Zhongkai zone), 20+ yrs | Luxury boxes, storage, travel, watch boxes | Confirm on inquiry | High-end presentation and storage |
| 10 | ELAPACK (that's us) | Wuxi | Jewelry boxes, pouches, eyewear packaging | 200 per design | Low-MOQ custom work with fast samples |


![Map of the ten China jewelry packaging suppliers by location, with published custom MOQs](/charts/top-china-jewelry-packaging-suppliers.svg)

*Fig. 1 \u2014 Where the ten suppliers sit: six cluster in Guangdong; the outliers are Qingdao, Yiwu, Wuxi and Fuzhou.*

## The entries

### 1. Richpack \u2014 the volume luxury specialist

Richpack (Fuzhou, since 2008) is the strongest online presence in this group \u2014 real organic traffic, a keyword footprint in the thousands \u2014 and the only entry with a multi-country footprint: factories in China, Vietnam and Thailand plus US warehousing. The site positions them in luxury jewelry boxes, pouches, bags and display solutions, with a published MOQ of 500 for full customisation and 100 for selected US stock styles shipped in 5\u20137 days. If you sell into the US, the stock program shortens replenishment; if you customise heavily, the Vietnam and Thailand capacity matters for hedging tariff and lead-time risk across countries.

### 2. Haosung \u2014 certifications on paper, not just promises

Qingdao-based and operating since 2008, Haosung's distinguishing feature is documented compliance: FSC (C180570), Sedex SMETA and Disney ILS audits are stated on the site, alongside child-resistant packaging \u2014 rare among jewelry packaging makers. They claim low MOQ from 1 piece with free in-house design; treat any sub-factory-floor number as a starting point for negotiation, not a promise. If your retail chain or marketplace requires audited suppliers, this is the shortest verification path on the list.

### 3. Jialan \u2014 Yiwu paper packaging, small-batch friendly

Jialan Package (Yiwu, Zhejiang, established 2014, 6,000 m\xB2) focuses on paper gift boxes, bags and jewelry packaging sets, with separate wholesale and custom sites. Being Yiwu-based puts them inside the largest small-goods trading ecosystem in China \u2014 practical if you combine packaging with sourcing trips. MOQ is not published; confirm on inquiry.

### 4. ITIS \u2014 Shenzhen one-stop paper box maker

Shenzhen ITIS Packaging (Bao'an district) describes 20+ years in custom jewelry boxes with a design-to-delivery service across paper gift boxes, jewelry boxes, paper bags and velvet drawstring pouches. The range skews paper-centred; if your program needs leatherette or wood, check capability per item. No published MOQ.

### 5. Pakoro \u2014 rigid boxes and mailers together

Shenzhen Pakoro Packaging makes custom rigid boxes, corrugated mailers, folding cartons and paper bags \u2014 a combination that suits jewelry brands shipping direct-to-consumer, where the gift box and the shipping box usually come from different suppliers. The site advertises "flexible MOQ" without a number; get your exact quantity quoted explicitly.

### 6. Huaisheng \u2014 foldable and magnetic formats

Guangzhou Huaisheng Packaging (Zengcheng district) builds its range around box construction: foldable, magnetic-closure, sliding and collapsible structures across gift and jewelry categories, with the founder's 23 years in paper packaging printing. If your priority is a specific structure \u2014 a magnetic lid that survives shipping, a foldable that saves freight \u2014 this construction-first focus is the relevant lens. No published MOQ.

### 7. Winnerpak \u2014 three decades of jewelry boxes

Winnerpak traces its history to 1990 and covers an unusually wide materials range for jewelry boxes: paper, leatherette, wood, LED-lit, flocked and velvet, plus watch boxes and displays. Published MOQ: 500 for custom boxes, bags and pouches, 100 for display items \u2014 the higher end of this list for custom work. Their eco line uses FSC-certified paper.

### 8. Ecoicolor \u2014 sustainability with documents

Dongguan Ecoicolor targets beauty, fragrance and jewelry brands with rigid boxes, pouches and inserts, and is the most explicit here about material-level sustainability: recycled paper, vegan leathers, plant-based fibres, with FSC- and GRS-document-supported options \u2014 and a candid note that certificates apply per project scope, which is exactly the right caveat. Buyers with ESG requirements should ask for the certificate matching their substrate.

### 9. Annaigee \u2014 high-end presentation focus

Annaigee (Huizhou, Zhongkai High-Tech Zone) positions itself in custom luxury jewelry packaging with 20+ years of experience: jewelry boxes, storage organizers in leather, wood and acrylic, travel cases and watch boxes. The depth in storage and travel \u2014 not just presentation boxes \u2014 is the differentiator if your line extends beyond the box itself.

### 10. ELAPACK \u2014 that's us

ELAPACK (Wuxi, ISO 9001 certified, three production lines) makes custom [jewelry boxes](https://elapack.com/news/custom-rigid-boxes-guide/), [jewelry pouches](https://elapack.com/news/how-to-choose-a-custom-jewelry-pouch/) and [eyewear packaging](https://elapack.com/news/custom-glasses-cases-pouches-guide/) for export, focused on small and mid-size brands. What we publish and stand behind: MOQ 200 per design; custom samples at USD 25 plus USD 20 shipping, built in 3\u20135 days; free stock samples shipped in 2\u20133 days; 15\u201320 day production for 200\u201320,000 pieces. Being in a list we wrote is exactly the kind of thing you should verify \u2014 so check our claims against the quote and sample you receive, same as you would with any entry above.

## What actually differs between them

Three differences matter more than the rest:

**MOQ structure.** Published minimums range from Winnerpak's 500 (custom) down to 200 per design at ELAPACK, with several suppliers not publishing at all. Treat "low MOQ" marketing claims as unverified until a specific quantity appears in a written quote \u2014 this is the single most common gap between a packaging website and reality.

**Materials depth.** Paper-centred makers (ITIS, Jialan, Pakoro, Huaisheng) overlap heavily on rigid and folding cartons but differ in textile capability \u2014 velvet pouches, leatherette wraps. Winnerpak and Annaigee cover wood and leatherette; Haosung adds child-resistant structures; Ecoicolor adds documented recycled and vegan materials. Match the supplier to the material your product actually needs, not to their best-known category.

**Geography and logistics.** Six entries cluster in Guangdong \u2014 convenient for combined factory visits. The outliers: Jialan in Yiwu (Zhejiang), Haosung in Qingdao (Shandong), Richpack in Fuzhou with Vietnam, Thailand and US stock, ELAPACK in Wuxi (Jiangsu). Factory location mainly changes your shipping lane; overseas stock changes your replenishment speed.

What does not differ much: nobody on this list publishes unit prices, and we will not either \u2014 box pricing moves with size, materials, print method and quantity, so per-spec quotations are the only honest format.

## How to choose, by buyer type

- **Small brand, first custom order** \u2014 ELAPACK (MOQ 200, samples in 3\u20135 days) or Jialan for paper-heavy programs.
- **Audited supply chain required** \u2014 Haosung or Ecoicolor.
- **Luxury finishes at volume, multi-country capacity** \u2014 Richpack.
- **Wide materials range including wood and leatherette** \u2014 Winnerpak or Annaigee.
- **Box + mailer in one program** \u2014 Pakoro.

Whichever you shortlist, run the same three checks: a written MOQ for your quantity, a paid sample before production, and a production timeline in the proforma invoice. A supplier who answers those three cleanly \u2014 including us \u2014 has earned the order on merit, not on a listicle. The full checklist lives in our [supplier vetting guide](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/).

## FAQ

**How do I verify a jewelry packaging supplier in China before paying?**
Ask for a business licence match, a scheduled live video factory walkthrough (not a polished clip), and paid custom samples. On quality control specifically: request a pre-production sample approved in writing, plus in-line inspection photos during cutting and assembly \u2014 not just a final inspection report after everything is boxed. For fabric-based or hybrid packaging, check stitching consistency, material grain matching and insert fit separately; these are the failure points a generic QC checklist misses. The full step-by-step is in our [supplier vetting guide](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/).

**What MOQ should I expect from Chinese jewelry packaging suppliers?**
Among these ten, published custom MOQs run from 200 to 500 per design; several do not publish. Low-volume programs are realistic, but below roughly 200 units, unit costs and setup fees rise sharply. Always get your exact quantity quoted in writing.

**How long do sampling and production take?**
Typical custom sampling runs about 3\u20135 days; mass production 15\u201320 days for mid-size runs, extending toward 20\u201325 days for large runs. Suppliers with overseas stock can ship replenishment faster. Ask for a phase-by-phase schedule \u2014 sample development, tooling, cutting, assembly, QC, packing \u2014 rather than one combined number, so a delay in one stage cannot silently push back the whole order. Build sampling plus one revision round into your launch timeline.

**What should I prepare to get an accurate quote?**
Box dimensions (internal), material and finish, insert type, print method, logo process, quantity tiers (for example 200 / 500 / 1,000), and destination for freight. Quotes built on a reference image alone are guesses.

**Is sourcing from China actually cheaper for jewelry packaging?**
For custom work at moderate volumes, generally yes \u2014 the advantage comes from tooling, materials supply chains and labour concentration in packaging clusters. At very small quantities, domestic stock suppliers can beat Chinese factory MOQs once freight and duties are counted.

**Can I get certified sustainable jewelry packaging from China?**
Yes \u2014 several suppliers here hold FSC documentation (Haosung, Winnerpak's eco line, Ecoicolor's document-supported options). The caveat that matters: certificates apply per material and scope, so require the certificate that matches your specific substrate, not a company-level logo.

## Put ELAPACK through the same checks

If you want to run us through the three checks above: send box dimensions, material reference and target quantity through the [contact page](https://elapack.com/contact/) \u2014 or start with a custom sample at USD 25 + 20 shipping, built in 3\u20135 days. The adjacent decisions are covered in the [jewelry boxes guide](https://elapack.com/news/custom-rigid-boxes-guide/), the [jewelry pouches comparison](https://elapack.com/news/velvet-satin-muslin-pouches-compared/) and the [small-business first-order walkthrough](https://elapack.com/news/custom-packaging-small-business-guide/).
`
  },
  {
    "slug": "perfume-packaging-sourcing-guide",
    "datePublished": "2026-10-17",
    "title": "Perfume Packaging Sourcing: Where Small Fragrance Brands Find Suppliers",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/perfume-packaging-sourcing-guide.webp",
    "imageAlt": "Editorial info-card cover for the ELAPACK perfume packaging sourcing guide",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Perfume packaging sourcing for small fragrance brands: the four-rung supplier ladder, the glass-versus-print split, sample-first discipline and community-asked questions answered. MOQ 200.",
    "metaDescription": "Perfume packaging sourcing for small fragrance brands \u2014 the supplier ladder from marketplaces to factory-direct, MOQ reality, sample-first practice and community-asked questions answered. MOQ 200.",
    "body": `*Product facts and ordering terms below are this factory's published trade terms. Supplier terms are quoted as published on supplier pages and public community threads, read 15 October 2026, for comparison only. Community sentiment is summarised from public Reddit discussions, read 15 October 2026.*

Small fragrance brands keep asking the same question in public, in the same words: where do you actually buy perfume packaging? The threads recur across r/DIYfragrance and r/Packaging \u2014 bottles, boxes, minimums, shipping \u2014 and the answers that come back are fragments: try Alibaba, shipping costs more than the boxes, one bundler's name. What the community does not have is the map: how many kinds of supplier there are, which one sells which half of a fragrance programme, and what each one is good and bad at. This page is that map, from a factory that sits on one rung of it.

> **Quick answer:** a fragrance programme splits into two purchases \u2014 glass (bottles, pumps, sprayers) from the glass trade, and everything printed or textile (boxes, sample cards, pouches) from the packaging trade \u2014 and the supplier ladder has four rungs: marketplaces for tests, bundlers for first-launch convenience, print farms for no-minimum prototypes, and factory-direct for branded runs from around 200 pieces. Buy each half where it is made, and hold both to sample approval before the first bulk run.

## What the community actually asks

The recurring threads, read 15 October 2026: bottles-and-packaging sourced together on Alibaba at "very good prices, even for orders of 100 bottles or boxes, but the shipping cost is often higher than" the goods; a founder asking about custom bottles with atomizers and branded packaging for a small DIY line; a packaging supplier describing how small brands approach bottle manufacturers; a box-buying thread reporting "surprisingly good luck with Alibaba" \u2014 manufacturers with low minimums exist, at higher unit costs.

Three needs sit under all of them. First, small quantities without punitive economics. Second, one place that sells the whole programme, because a founder sourcing bottles, boxes and labels separately is doing three jobs. Third, some way to trust a supplier they cannot visit. Every rung of the ladder below answers a different two of those three.

## The four rungs of the supplier ladder

| Rung | What it is | Strength | Cost of that strength |
|---|---|---|---|
| Marketplace (Alibaba, marketplaces) | many factories, listed | low minimums, price discovery | shipping can outrun goods; vetting is on you |
| Bundler (e.g. Packamor, as published) | bottles, boxes, labels from one catalogue | one PO for the whole launch | catalogue choices; less specification |
| Print farm (no-minimum customisers) | print-on-demand boxes | prototypes at entry prices | unit economics do not scale |
| Factory-direct (this factory's rung) | your dieline, your materials | specification at branded-run volumes | minimums around 200 pieces |

The bundler rung deserves its popularity: Packamor publishes orders from 70 units to 10,000+ with bottles, boxes, labels and decoration in one place (as published, read 15 October 2026). What it sells is convenience, priced in catalogue sizes and stock components. The print-farm rung is the mirror image \u2014 your artwork, their stock, no minimum, and a unit price that never improves. Factory-direct is where a brand lands once one SKU has proven it can sell: specification, a dieline drawn to your bottle, materials chosen rather than accepted.

**The ladder is climbed in one direction \u2014 test on the low rungs, but move the branded run up as soon as a SKU repeats.**

## The split that saves the most grief: glass and print

The single most useful boundary in fragrance sourcing is also the least documented: bottles, pumps, sprayers and collars are the glass trade's product; boxes, sample cards and pouches are the print-and-textile trade's. A packaging factory that implies it makes your bottles is reselling someone else's line with a margin on it. A bundler sells the combination honestly \u2014 that is its business \u2014 but a brand that wants its own bottle spec buys glass where glass is made.

The community's Alibaba experience lands exactly on this line. The marketplace lists both trades side by side, which is why a 100-bottle order is possible and why the shipping line hurts: glass is dense, factories are far, and a split programme ships twice. The workable sequence for a small brand is the one the [wholesale perfume boxes guide](https://elapack.com/news/wholesale-perfume-boxes-guide/) details \u2014 glass first, box drawn to the confirmed bottle, inserts cut to the bottle profile \u2014 and the trial side of the programme runs on [sample cards](https://elapack.com/news/perfume-sample-cards-guide/) at a fraction of the glass cost.

## Sample-first, at every rung

The discipline that transfers across the whole ladder is sample approval before bulk, and it costs less than most founders assume. At this factory: a stock sample ships free in 2\u20133 days plus USD 20 courier; a custom sample is USD 25 plus USD 20 shipping, built 3\u20135 days from confirmed artwork. What a sample should prove \u2014 board, print, fit, colour \u2014 is the [packaging samples guide](https://elapack.com/news/custom-packaging-samples-guide/)'s subject, and the questions that separate a factory from a listing are in the [manufacturer vetting checklist](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/). The community threads skip this step out of hurry; the re-order threads that follow usually trace back to it.

## What a first branded run looks like

| Line item | Terms |
|---|---|
| Boxes, cards, pouches | from this factory, MOQ 200 pieces per design |
| Production | 15\u201320 working days (200\u201320,000), from sample approval and deposit |
| Samples | stock free + USD 20 shipping (2\u20133 days); custom USD 25 + USD 20 (3\u20135 days) |
| Glass | from the glass trade \u2014 specified separately, approved on its own samples |
| Payment and freight | T/T or PayPal; air or sea from Shanghai or Shenzhen |

A first branded run pairs one bottle with one box structure and one sample card \u2014 the programme map is the [custom perfume packaging guide](https://elapack.com/news/custom-perfume-packaging-guide/)'s subject \u2014 and the calendar arithmetic (samples approved early, production 15\u201320 days, freight behind both) is what turns a launch date into an achievable one.

## Bottom line

Climb the ladder deliberately: marketplaces and bundlers for proof of concept, factory-direct for the branded run \u2014 and split glass from print from the first order, because the two trades are different and pretending otherwise is how small brands pay twice. [Start the quote](https://elapack.com/contact/) with bottle dimensions and target volumes; the dieline comes back with it.`
  },
  {
    "slug": "custom-gift-card-holders-guide",
    "datePublished": "2026-10-17",
    "title": "Custom Gift Card Holders: Sleeves, Envelopes and Folders Compared",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/custom-gift-card-holders-guide.webp",
    "imageAlt": "Guide cover card: custom gift card holders \u2014 sleeve, envelope and folder carriers compared by occasion and channel, around the standard CR80 card size",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Custom gift card holders compared \u2014 sleeve, envelope and folder carriers by occasion and channel, with CR80 sizing, print methods and the ordering ladder from 25-piece online runs to 200-piece factory runs.",
    "metaDescription": "Custom gift card holders explained \u2014 sleeve, envelope, folder and box-style carriers compared by occasion, channel and protection, with CR80 sizing, print methods and ordering terms from 200 pieces.",
    "body": "*Style, dimension and minimum-order references are as published by US print suppliers (Company Folders, BD Print, Packaging Xpert, Oh My Print Solutions, VistaPrint, E-Card Systems \u2014 read 17 October 2026); they describe those suppliers' ranges and are quoted for comparison only. Ordering terms in this guide are this factory's confirmed trade terms.*\n\nA gift card is the most-sold gift in retail, and also the flattest object a brand ever has to present. The card itself is a standard rectangle \u2014 the same size as a bank card \u2014 so everything a brand adds around it is a choice about occasion and channel, not about fit. Yet the market answers that choice with three different words that few buyers can separate: the sleeve, the envelope and the holder. US print suppliers list all three side by side; community threads confirm the instinct \u2014 a sleeve reads casual, an envelope reads formal, a folder or holder adds protection and perceived value.\n\n> **Quick answer:** pick the carrier by occasion and channel, not by looks. Sleeves for counters, events and volume programmes; envelopes for formal and seasonal gifting; folders and box-style holders when the card is the whole gift and has to stand alone. All three are printed card-stock carriers built around the standard card size, and all three are custom-printed from 200 pieces per design at this factory.\n\n## Three carriers, three jobs\n\n![Custom gift card carriers compared: sleeve, envelope and folder built around the CR80 card](/charts/gift-card-carrier-spectrum.svg)\n\n| Carrier | What it is | Where it wins | Where it is wrong |\n|---|---|---|---|\n| Sleeve | open-ended slip, card slides in | counters, events, volume mailers | no closure; card can slide out |\n| Envelope | folded card stock with a flap | formal and seasonal gifting | slower to assemble by hand at volume |\n| Folder | scored sheet that folds around the card | corporate programmes, the card as the gift | more board per unit than a sleeve |\n\nThe sleeve is the workhorse. It is one piece of card stock, cut and glued into an open-ended slip, and it is the cheapest carrier to print and the fastest to pack \u2014 which is why promotional programmes and retail counters run on it. The envelope trades a little assembly speed for formality: a flap, a seal, sometimes a coloured lining, and the card becomes something that can be handed over at a dinner or slid into an invitation. The folder is the presentation tier of the flat carriers \u2014 a scored sheet that folds around the card, sometimes with a die-cut window or a printed To/From panel \u2014 and it is the right answer when the card is the entire gift and must carry the brand alone. The [gift card boxes guide](https://elapack.com/news/custom-gift-card-boxes-guide/) covers the tier above these: pop-up and slider structures for when the card needs a box, not a fold.\n\n**Choose by where the card changes hands, not by which sample photo looks best.**\n\n## One standard size, every carrier\n\nEvery carrier in this family is built around one number: the CR80 bank-card format, 3-3/8 \xD7 2-1/8 inches (85.6 \xD7 54 mm). US suppliers publish their stock carriers at a fraction over it \u2014 VistaPrint lists sleeves at 3.5 \xD7 2.25 inches, which is the card plus print bleed and a working slip tolerance (as published, read 17 October 2026). Two practical consequences follow. First, the inner dimension is the spec that matters: too tight and the card catches, too loose and it slides out of an open-ended sleeve. Second, one dieline family covers the whole programme \u2014 sleeve, envelope and folder are different fold-and-glue decisions on the same cut, which is why a brand can run mixed carriers from one supplier without three tooling conversations. Confirm the finished inner size in the spec, in millimetres, against the actual card you will load \u2014 including any magnetic stripe or embossed area that adds thickness.\n\n## Print methods and what they signal\n\nCard stock is a small surface, so the print method does outsized brand work. One or two Pantone spot colours on a coloured paper is the classic formal-envelope look \u2014 one US gift-card printer publishes exactly that construction: one or two spot colours, twelve paper colours, at a listed USD 0.39 per sleeve with about two to three weeks of production (as published, read 17 October 2026). Full digital print is the volume default for sleeves, where the artwork is a logo and a colour field. Foil and deboss lift a folder into gift territory on the same board. The method also prices the programme: spot colour means plates and a cleaner unit cost at volume; digital means no plates and a flat cost curve that favours first runs. State the method, the paper colour and the Pantone references in the enquiry, and ask for a printed proof on the actual stock \u2014 card-stock colour shifts are small in absolute terms and very visible on a 3.5-inch canvas.\n\n## When not to use a flat carrier at all\n\nTwo situations push past this family. When the card is mailed on its own, a flat carrier still needs an outer mailing envelope \u2014 a bare sleeve in a postal stream arrives scuffed, and the community's recurring complaint about over-packaging cuts the other way too: restraint is only honest when the carrier survives the trip. And when the card anchors a physical gift set \u2014 a bottle, a candle, a piece of jewellery \u2014 it belongs inside the box with the product, as an insert or a card slot, not in a standalone carrier. The [custom gift card boxes guide](https://elapack.com/news/custom-gift-card-boxes-guide/) covers the box-tier structures, and the [packaging inserts guide](https://elapack.com/news/packaging-inserts-guide/) covers holding a card inside a larger set.\n\n## Ordering: the ladder you actually face\n\n| Rung | Typical published terms | Fit |\n|---|---|---|\n| Online printer | from 25 pieces (one lists 25\u20135,000, 100# coated stock) | first tests, domestic speed |\n| US print trade | folders and sleeves from USD 0.21 each at 50\u2013150 piece minimums (one publishes a per-type price table); spot-colour sleeves at a listed USD 0.39 each, ~2\u20133 weeks | formal programmes, mid volume |\n| US offset / volume tier | offset from 500 pieces; a listed curve that falls from USD 1.96 at 100 to 15.8 cents at 10,000 | large domestic runs |\n| This factory | 200 pieces per design \xB7 15\u201320 working days \xB7 custom sample USD 25 + USD 20 shipping, 3\u20135 days | branded runs, mixed carrier programmes |\n\nA first branded carrier programme usually mixes rungs: a domestic print run to prove the artwork, then a factory run once the design is stable and the quantities repeat. Bring the card (or its exact dimensions), the carrier split \u2014 how many sleeves, how many envelopes, how many folders \u2014 and the print method and paper colour. T/T or PayPal, air or sea freight from Shanghai or Shenzhen, and the sea-freight arithmetic is why the calendar in the [gift card boxes guide](https://elapack.com/news/custom-gift-card-boxes-guide/), worked backwards from a Q4 shelf date, applies to flat carriers exactly as it does to boxes.\n\n## The bottom line\n\nOne card standard, three flat carriers, and a ladder from 25-piece online tests to 200-piece factory runs: pick the carrier by where the card changes hands, spec the inner dimension in millimetres against the real card, and move to a factory run when the design is stable and the quantities repeat. [Start the enquiry](https://elapack.com/contact/) with the card dimensions, the carrier split and the print method; the quotation comes back with the dieline family that covers all three."
  },
  {
    "slug": "jewelry-box-inserts-guide",
    "datePublished": "2026-10-18",
    "title": "Jewelry Box Inserts: Anti-Tarnish Linings, Cavity Layouts and Spec Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/covers/jewelry-box-inserts-guide.webp",
    "imageAlt": "Guide cover card: jewelry box inserts \u2014 the four stacked layers (covering fabric, foam core, cavity layout, anti-tarnish lining) and the spec fields that follow the metal",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Jewelry box inserts broken into their four layers \u2014 covering fabric, foam core, cavity layout and the optional anti-tarnish lining \u2014 with the metal-first rule, cavity specs and the enquiry fields a factory can quote first time.",
    "metaDescription": "Jewelry box inserts explained: covering fabric, foam core and cavity layout, anti-tarnish linings quoted per enquiry, and the spec fields \u2014 product, layout, metal, material, quantity \u2014 from 200 pieces.",
    "body": `*Insert construction, cavity and lining descriptions below are industry references as published by jewelry-packaging and jewellery-care suppliers (sources named inline). Anti-tarnish lining is an optional technique confirmed per enquiry, not a default capability, and no lining provides permanent protection. Order terms \u2014 MOQ 200 pieces, 15\u201320 day production, custom sample USD 25 plus USD 20 shipping, cutting-die tooling USD 50\u2013100 \u2014 are ELAPACK's confirmed trade terms.*

A jewelry box insert is the part of the box that does the actual work: it holds the piece in place, keeps polished surfaces from touching each other, and \u2014 when the brief calls for it \u2014 slows tarnish. This page is about box inserts (the in-box liner and cavity tray), not retail display trays. If you are fitting a showcase or countertop presentation, that is the [jewelry display trays guide](https://elapack.com/news/jewelry-display-trays-guide/) instead; this page covers the insert that ships inside a closed box.

> **Quick answer:** an insert is four stacked decisions \u2014 covering fabric, core, cavity layout and (optionally) an anti-tarnish lining. Specify the product first: rings need a slot, necklaces need chain control, bracelets need length. ELAPACK supplies the covering, core and cavity from 200 pieces in 15\u201320 days; the anti-tarnish layer is quoted per enquiry because it is not a standard feature.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Minimum order | 200 pieces per design | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |
| Custom sample | USD 25 plus USD 20 shipping, 3\u20135 days | ELAPACK confirmed terms |
| Cutting-die tooling | USD 50\u2013100 where a new die is required | ELAPACK confirmed terms |
| Standard insert build | Velvet or satin covering over foam | ELAPACK published references |
| Anti-tarnish lining | Optional, quoted per enquiry \u2014 not a default | ELAPACK confirmed terms |

![Cross-section of a jewelry box insert: covering fabric over a foam core, cavities cut into the core, and the optional anti-tarnish treatment carried by the covering](/charts/jewelry-box-insert-anatomy.svg)

## What a jewelry box insert actually does

The insert carries three jobs at once: hold, scratch protection and tarnish control. The hold job is the one buyers underestimate \u2014 a ring that rotates in a loose slot photographs badly and can scratch its own setting. The scratch job is the reason a soft covering is non-negotiable: metal on bare foam or bare board abrades polished surfaces. The tarnish job only applies to silver and other sulfur-sensitive metals, and it is the one most often oversold in supplier copy.

This order matters for the enquiry. If a buyer asks for "an insert" without naming the metal and the piece dimensions, the factory has to guess at the slot, the covering and the depth. Naming the metal first \u2014 silver, gold-filled, stainless, plated \u2014 tells the supplier whether the tarnish layer is even relevant, because gold and stainless do not need it.

**Takeaway:** hold and scratch protection are always required; tarnish control is conditional on the metal, and it is quoted separately.

## Anti-tarnish: a mechanism that follows the metal

Tarnish is a chemical reaction between a metal and airborne compounds, primarily sulfur \u2014 the description used in Element 79's [anti-tarnish jewelry box guide](https://www.element79jewelry.com/blogs/element-79s-jewelry-blog/7-best-anti-tarnish-jewelry-box-picks-for-your-pie/). An anti-tarnish lining is fabric infused with compounds that absorb or neutralize those sulfur gases before they reach the metal. The common covering materials \u2014 flannel, velvet and suede \u2014 can carry this treatment; a mid-range option is treated polyester suede.

Two honest limits apply, and both matter to a buyer. First, the lining is not permanent: it saturates with the pollutants it absorbs over time and loses effectiveness. Element 79 describes the useful life as "several years" with no exact expiration date, and the practical signal is the one the buyer can see \u2014 when silver starts to tarnish inside the box, the lining has done its work and needs replacing. Second, a treated lining is a specified add-on, not a default. A plain velvet insert does not absorb sulfur; only a lining that has been treated for it does.

As a supplementary measure, anti-tarnish strips placed in the compartment absorb moisture and airborne sulfur and are replaced about every six months \u2014 the practice Fire Mountain Gems documents in its [anti-tarnish strip instructions](https://www.firemountaingems.com/learn/categories/essential-resources/how-tos/A905-video-tutorial-with-instructions.html). A strip extends the working window of an existing insert; it does not make a plain lining anti-tarnish.

ELAPACK's standard insert build is a plain velvet or satin covering over foam. A treated anti-tarnish lining is quoted on enquiry \u2014 named as an option, never implied as the default, and never sold as permanent protection. Buyers holding silver inventory should say so in the enquiry so the lining question is answered up front rather than discovered at the sample stage.

**Takeaway:** state the metal; the tarnish layer is an optional, saturating, replaceable add-on \u2014 not a permanent feature.

## Cavity layout: ring slots, chain tabs and mixed trays

The cavity is cut to the product, not chosen from a template. Rings take single or double slots; necklaces take chain tabs so the chain does not loop back on itself; earrings take a pad or hole; bracelets take a longer insert. A mixed tray \u2014 ring slot, chain tab and earring pad in one board \u2014 is standard when one box carries a set, and it is the layout that most often needs a custom die.

The reading habit to carry into quotations is the one Westpack's catalog demonstrates: identify what each measurement belongs to before comparing dimensions. A single insert listed at 44 \xD7 44 \xD7 15 mm is a documented combination for particular 50 \xD7 50 \xD7 32 mm ring boxes, not an industry-wide clearance rule \u2014 the [foam insert listing](https://www.westpack.com/usd_us_eng/eco-foam-extra-insert-for-ring-box-00272004100.html) names its box models, and a [paperboard insert](https://www.westpack.com/usd_us_eng/fscrcertified-insert-for-ring-30282000100.html) of 44 \xD7 44 \xD7 7 mm is a separate construction, not a drop-in equivalent. Ask for box dimensions, usable internal space and insert dimensions as three separate fields, then add the product dimensions and orientation.

For necklaces and bracelets the same source's rule is direct: "chain tabs for necklaces, longer inserts for bracelets and cushions for watches," on its [jewelry boxes page](https://www.westpack.com/usd_us_eng/jewelry-boxes.html). A ring laid flat and a pendant held upright are different briefs even when the piece is the same size.

**Takeaway:** quote box, insert and product as three matched fields \u2014 a slot depth that fits someone else's ring is not a spec for yours.

## Materials: velvet, foam, leatherette and the foam-cover bond

Four covering choices cover nearly every brief. Velvet is the soft-touch default for jewelry; leatherette (faux leather) gives a firmer, more durable surface and is what ELAPACK's [black leather jewelry box](https://elapack.com/products/black-leather-jewelry-box/) pairs with a velvet interior; flannel and suede are softer alternatives. The core under the covering is foam \u2014 EVA cut to the product footprint \u2014 and the load-bearing detail is the bond between the two.

Bare foam abrades metal, so the covering is not cosmetic: it is the scratch-control layer. ELAPACK's [custom ring boxes](https://elapack.com/products/custom-ring-boxes/) state the construction directly \u2014 velvet exterior with a foam insert under velvet covering \u2014 and that "foam insert with velvet covering" wording is the point. A quotation that says only "foam insert" without naming the covering should be questioned, because uncovered foam is the version that damages polished surfaces.

For a lighter, thinner insert, a [custom white jewelry box](https://elapack.com/products/custom-white-jewelry-box/) shows the same principle in a compact format: a rigid shell with a velvet-lined cushion, sized from single-bracelet minis to multi-piece formats.

**Takeaway:** the covering is the scratch-control layer, not the decoration \u2014 always confirm it is named in the insert spec, not just "foam."

## Specifying an insert: what to put in the enquiry

The enquiry that avoids a wasted sample round lists five things: the product (ring, necklace, earring or bracelet, with dimensions and orientation), the cavity layout (single slot, chain tabs, mixed tray), the metal (to settle whether a tarnish layer is relevant), the covering material, and the quantity. ELAPACK's minimum is 200 pieces per design.

The dimensions settle the die. When the product dimensions are not yet final, the first step is a free dieline drawn to the product dimensions \u2014 there is no downloadable template to copy, the dieline is drawn for the actual piece. Where a new cutting die is genuinely needed it is quoted separately at USD 50\u2013100; the custom sample that follows is USD 25 plus USD 20 shipping in 3\u20135 days, and production runs 15\u201320 days after sample approval.

The sample is the moment the fit is decided. A stock sample settles the covering and the core; a custom sample settles the cavity \u2014 whether the ring seats without rotating, whether the chain folds once and stays put, whether the mixed tray holds every piece without contact. [Send the product list and quantities](https://elapack.com/contact/) and the insert recommendation comes back with the quote.`
  },
  {
    "slug": "necklace-bracelet-packaging-guide",
    "datePublished": "2026-10-18",
    "title": "Necklace and Bracelet Packaging: Formats, Chain Control and Ordering Data",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/covers/necklace-bracelet-packaging-guide.webp",
    "imageAlt": "Guide cover card: necklace and bracelet packaging \u2014 pendant, necklace box and bracelet box formats, chain control and ordering data",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Necklace and bracelet boxes chosen after the chain: pendant squares, necklace boxes with chain tabs, bracelet boxes with interior length \u2014 plus materials, the sample route and ordering terms from 200 pieces.",
    "metaDescription": "Necklace and bracelet packaging explained \u2014 pendant, necklace box and bracelet box formats, chain tabs to stop tangling, interior inserts, and ordering terms from 200 pieces in 15\u201320 days.",
    "body": `*Format and dimension descriptions below are as published on supplier pages read 18 October 2026 (sources named inline) and are quoted for comparison, not as ELAPACK stock specifications. Order terms \u2014 MOQ 200 pieces, 15\u201320 day production, custom sample USD 25 plus USD 20 shipping, cutting-die tooling USD 50\u2013100 \u2014 are ELAPACK's confirmed trade terms.*

Necklaces and bracelets are the two jewelry formats that punish a generic box most visibly \u2014 one tangles, the other slides. This page covers single-item boxes for necklaces and bracelets specifically. The ring side has its own page in the [custom ring boxes guide](https://elapack.com/news/custom-ring-boxes-guide/), earring cards in the [custom earring cards guide](https://elapack.com/news/custom-earring-cards-guide/), and the wider box family in [how to choose custom jewelry boxes](https://elapack.com/news/how-to-choose-custom-jewelry-boxes/). This page is the sourcing detail for the two chain-and-cuff formats those pages do not dig into.

> **Quick answer:** choose the box after the chain. A pendant folds into a small square box, a long necklace needs chain tabs to stop it tangling, and a bracelet needs interior length and support. ELAPACK supplies all three from 200 pieces in 15\u201320 days, with the box and insert cut to the piece in one dieline.

## Key facts at a glance

| Item | Figure | Source |
|---|---|---|
| Minimum order | 200 pieces per design | ELAPACK confirmed terms |
| Production lead time | 15\u201320 days at 200\u201320,000 pieces | ELAPACK confirmed terms |
| Custom sample | USD 25 plus USD 20 shipping, 3\u20135 days | ELAPACK confirmed terms |
| Cutting-die tooling | USD 50\u2013100 where a new die is required | ELAPACK confirmed terms |
| Reference formats | Pendant 64\xD764\xD739 mm \xB7 necklace 160\xD7160\xD734 mm \xB7 bracelet 219\xD755\xD741 mm | Westpack, as published \u2014 for comparison |
| Chain control | Chain tabs that hold the chain at both ends | Westpack, as published \u2014 for comparison |

![Three necklace and bracelet box formats: pendant square, long necklace with chain tabs, and narrow bracelet box](/charts/necklace-bracelet-box-formats.svg)

## The three formats that carry necklaces and bracelets

The format follows the length of the piece, not the brand. A pendant or short chain fits a small square box \u2014 Westpack's Oslo earring/small-pendant format runs 64 \xD7 64 \xD7 39 mm in one catalog listing. A long necklace needs a larger square or wide box \u2014 the Oslo necklace format is 160 \xD7 160 \xD7 34 mm. A bracelet or bangle needs a narrow, long box \u2014 the Madrid bracelet format is 219 \xD7 55 \xD7 41 mm. A watch or wide bangle takes a larger cushion box at 100 \xD7 100 \xD7 74 mm. These are Westpack catalog values on its [jewelry boxes page](https://www.westpack.com/usd_us_eng/jewelry-boxes.html), quoted as reference proportions, not as ELAPACK stock sizes.

The ordering logic is the useful part: measure the piece first, then pick the format, then specify the interior. A buyer who starts from "a nice box" and works backward to the chain usually ends up with a box that is either too tight to close over the fold or too roomy to hold the piece still.

**Takeaway:** pendant \u2192 small square; long chain \u2192 square with chain control; bracelet \u2192 narrow with length.

## Chain control: why necklaces tangle and how the box stops it

A necklace tangles because the chain moves freely inside an open cavity. The fix is structure that keeps the chain in one plane: chain tabs that hold the chain at both ends so it cannot loop back on itself. Westpack states the rule directly \u2014 "necklaces and pendants need chain control" \u2014 and pairs "chain tabs for necklaces" with "longer inserts for bracelets and cushions for watches" on its [jewelry boxes page](https://www.westpack.com/usd_us_eng/jewelry-boxes.html).

This is the structural difference between a single-item necklace box and a generic box. A generic box protects the piece from outside impact but does nothing about the chain's own movement; a necklace box adds the tabs so the chain arrives flat and the clasp is reachable. For a bracelet, the equivalent is interior length and support \u2014 the piece is held along its length rather than left to slide to one end.

Three measurements decide a necklace box, and only one of them is the length printed on the necklace card. The total lay-flat chain length \u2014 clasp to clasp, with the chain laid out straight \u2014 sets the interior length the box needs; a chain whose laid-flat length exceeds its hanging length will not fold into a box sized from the worn figure. The pendant's diameter or drop sets the recess or the padding beneath it. The depth the chain stacks to once coiled sets the cavity height. Send all three, because the length on a necklace card describes how the piece is worn, not how it packs.

**Takeaway:** the chain-control element is what makes it a necklace box; ask for it by name, not as "a nice interior."

## Bracelet boxes: interior length, support and the bangle fit

The bracelet box is specified around interior length and insert support, because a bangle or cuff has no chain to tangle but does slide and knock against the ends. Two measurements carry that brief: the bracelet's laid-out length, measured on the inside of the curve, and the height the piece rises above its insert. A flat chain bracelet and a wide cuff can share an interior length and still need different cavity heights \u2014 which is why length alone is not a complete bracelet spec. Half Price Packaging's [bracelet boxes page](https://www.halfpricepackaging.com/jewelry/bracelet-boxes) lists the materials as rigid buxboard, cardboard and Kraft paperboard, with paper thicknesses from 8 pt to 28 pt and rigid construction where the box must carry weight.

The entry terms on that page are a useful comparison anchor: a 50-unit minimum for standard styles, 100 or more for specialty rigid styles, and production from about 7 business days \u2014 all as-published, read 18 October 2026. ELAPACK's entry is 200 pieces per design in 15\u201320 days. The comparison is not about who is cheaper; it is about what each minimum buys: a catalog-format supplier with a low entry point versus made-to-measure construction where the box, insert and chain control are cut to the piece in one dieline.

**Takeaway:** quote the interior length against the actual bracelet; the low-minimum catalogs and the made-to-measure trade serve different briefs.

## Materials and finishes for presentation-grade boxes

Presentation grade comes from the pairing of surface and interior. Westpack's listings run matte-black cardboard with a black foam insert at the entry end, and black leatherette with a black velour interior at the presentation end, plus soft-touch finishes. The construction logic is the same as the insert page: the outer surface carries the brand, the interior covering carries the scratch control, and the two should be named in the same quotation.

ELAPACK's necklace-and-bracelet path runs on the same materials the [custom jewelry boxes collection](https://elapack.com/custom-jewelry-boxes/) documents \u2014 velvet interiors over foam, or a faux-leather wrap \u2014 with the insert cut to the piece. A magnetic closure is a presentation add-on for a box that should open one-handed; it is a separate line item, not an assumption.

**Takeaway:** specify surface and interior as a pair; magnetic closure is an add-on, not a default.

## Ordering: dimensions, inserts and the sample route

The enquiry that avoids a re-draw lists: for a necklace, the total lay-flat chain length and the pendant diameter or drop; for a bracelet, the laid-out length and the rise above the insert; then the box format, the interior (a longer insert or a cushion), magnetic closure or not, and the quantity. ELAPACK's minimum is 200 pieces per design.

The dimensions settle the dieline. Where they are not final, the first step is a free dieline drawn to the product dimensions \u2014 there is no downloadable template, the drawing is made for the piece. A new cutting die, when genuinely needed, is quoted separately at USD 50\u2013100; the custom sample is USD 25 plus USD 20 shipping in 3\u20135 days, and production runs 15\u201320 days after sample approval.

The sample is where the two failure modes are tested: does the necklace fold once and stay flat with the clasp reachable, and does the bracelet sit along its insert without sliding to the end. [Send the necklace and bracelet dimensions and quantities](https://elapack.com/contact/) and the format recommendation comes back with the quote.`
  },
  {
    "slug": "drawstring-vs-zipper-jewelry-pouches",
    "datePublished": "2026-10-19",
    "title": "Drawstring vs Zipper Jewelry Pouches: Which Closure Fits the Job?",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "4 min read",
    "image": "/images/covers/drawstring-vs-zipper-jewelry-pouches.webp",
    "imageAlt": "Drawstring versus zipper jewelry pouches closure decision table",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Compare drawstring and zipper pouches by usable opening, loading routine and product contact before ordering custom jewelry packaging.",
    "metaDescription": "Compare drawstring and zipper pouches by usable opening, loading routine and product contact before ordering custom jewelry packaging.",
    "body": "Both closures can hold a small product, but they change how a packer loads it and how a customer removes it. The visible pouch size is only part of the specification: the usable opening, pull action and internal contact points may decide whether the pouch works. This article narrows the closure decision within the broader [custom jewelry pouch guide](https://elapack.com/news/how-to-choose-a-custom-jewelry-pouch/).\n\n## Measure the opening around the real product\n\nA drawstring pouch gathers fabric around the mouth. That can make the opening smaller than the flat pouch width. A zipper pouch has a defined zipper length and stops at both ends; the usable opening may also be shorter than the outer width. Measure the widest part of the item or the card it will be packed on, then try moving that item through the actual opening without bending it.\n\nFor a necklace, include the card, chain arrangement and any protective sleeve in the test. For a ring or small accessory, consider how the customer will find and lift the piece without digging into a deep pouch. A visual mock-up cannot settle this question. Ask for a physical sample of the chosen [custom pouch style](https://elapack.com/pouches-bags/) with the product inserted, removed and reinserted several times.\n\nNeither closure automatically prevents tangling, scratching or tarnish. Those outcomes depend on the product, fabric, internal separator and use conditions. A zipper can also create a contact point at the teeth or slider. YKK's [zipper handling guidance](https://lyncs.ykkfastening.com/shop/pages/about_products_08.aspx) describes how fabric can become caught near a slider. For jewelry, test the chosen construction with the actual item and any lining; YKK's guidance is not evidence about a specific ELAPACK product.\n\nThe drawstring decision also involves the gathered opening after closure. Check whether a small loose component could move through the remaining gap, and whether the cord stays in the intended position during ordinary handling. For a zipper style, inspect the inner edge, slider and any protective flap with the product in place. These checks reveal possible contact points; they do not establish that one closure is tamper-proof or universally better in transit.\n\n## Compare the packing routine and customer action\n\nHave a packer assemble a small trial with the same number of components that will ship. Record whether cords must be tied, whether a zipper pull snags a ribbon or tag, and whether a card corners the opening. Then give the closed sample to someone who has not seen the assembly. If they struggle to find the opening, the issue may be the design rather than the material.\n\n| Buyer question | Drawstring sample | Zipper sample |\n|---|---|---|\n| Can the full item pass through? | Test gathered mouth at intended cord tension | Test opening between zipper stops |\n| Can it be opened one-handed? | Try cord pull and knot | Try slider pull and edge grip |\n| Where can the item catch? | Cord channel and gathered seam | Teeth, slider and lining |\n| How will it be stored? | Observe loose cord and pouch shape | Observe zipper profile and pull tab |\n\nThe table is a sample-test plan, not a ranking of protection or durability. If a pouch is offered in several fabrics, repeat the test on the intended fabric because stiffness changes handling. ELAPACK's [muslin drawstring pouch](https://elapack.com/products/custom-muslin-drawstring-pouch/) and [leather envelope pouch](https://elapack.com/products/leather-envelope-pouch/) illustrate different closure approaches, but a project quote must specify the actual material and construction.\n\n## Put the closure details in the RFQ\n\nState finished pouch size, usable opening required, product dimensions, fabric, lining, cord or zipper colour, logo method, and units per artwork version. Ask what the sample will validate: appearance, opening fit, or both. If different products share one pouch size, give the supplier each item envelope and request a fit recommendation instead of assuming one sample covers every SKU.\n\nUse the [jewelry box category](https://elapack.com/custom-jewelry-boxes/) to check whether the pouch must fit inside a box, and use the [pouch category](https://elapack.com/pouches-bags/) for available styles. [Send the product dimensions and closure preference for a conditional quote](https://elapack.com/contact/). A no-cost sample request can be made, but confirm the exact sample scope, timing and shipping terms for the project."
  },
  {
    "slug": "paper-shopping-bag-handle-specification",
    "datePublished": "2026-10-19",
    "title": "Paper Shopping Bag Handles: What Should a Buyer Specify?",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "4 min read",
    "image": "/images/covers/paper-shopping-bag-handle-specification.webp",
    "imageAlt": "Paper shopping bag handles construction and load test checklist",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Specify paper bag handle type, attachment, product load and test conditions before buying custom retail shopping bags.",
    "metaDescription": "Specify paper bag handle type, attachment, product load and test conditions before buying custom retail shopping bags.",
    "body": "A shopper holds the handle, not the artwork. If the handle is uncomfortable or detaches under the intended load, the bag fails its practical job regardless of print quality. This guide focuses on handle attachment and buyer testing. For the wider material and branding choices, see the [custom shopping bags guide](https://elapack.com/news/custom-shopping-bags-guide/).\n\n## Define the carried load before choosing a handle\n\nList the heaviest realistic combination of products that could be placed in one bag. Include boxes, tissue or inserts if they are normally handed over together. Record whether the bag will be carried briefly in-store, across a shopping district, or reused. These are project inputs; no handle material alone determines safe capacity without the actual bag construction and test.\n\nPaper bag handles may be flat paper, twisted paper, rope or ribbon. Packhelp's [paper bag catalogue](https://packhelp.com/packaging/bags/paper-bags/) shows market examples of these options. Their catalogue is a competitor reference, not a statement that all variations are offered by ELAPACK. Ask the supplier to identify the attachment method, reinforcement patch, handle length and grip width for each proposed design.\n\nTreat the handle, punched opening, top fold, sidewall and base as one load path. A stronger cord does little if the paper tears where it is attached. If a proposed design uses an eyelet, internal patch or folded cuff, ask what problem that detail addresses and compare the complete sample under the same load. A material name alone is not a load rating, and a reinforced top does not eliminate the need to inspect the bag base.\n\nThe Paper Bag industry group's [quality guidelines](https://www.thepaperbag.org/for-high-quality) discuss bag quality and the connection between handle construction and performance. A standard or test method should be cited only if the actual offered bag has been tested to it. For a custom order, request the method, sample size, load and pass criterion in writing if a performance claim matters.\n\n## Test the assembled bag with the real contents\n\nFill a sample with the intended products and lift it by the handles. Repeat the action at the likely pace and distance, then inspect the handle joint, paper around its attachment, base folds and top edge. If the bag carries a rigid jewelry box, check whether corners press into the bag side while it hangs. A static photo of a loaded bag will not show how it feels to carry.\n\n| Sample observation | Record what happened |\n|---|---|\n| Handle pull | Did attachment or knot move? |\n| Grip | Was it comfortable with the full load? |\n| Bag body | Did the top edge, side or base distort? |\n| Print | Did handling scuff a critical area? |\n| Repeat | Did the same issue appear on other samples? |\n\nThis is a buyer's trial checklist, not a certified strength test. If formal capacity is required, agree on a recognized method and acceptance criteria with the supplier before ordering. One successful hand-carried sample cannot establish a guaranteed safe load for a production run.\n\n## Make the quotation compare like with like\n\nPut bag dimensions, paper specification, handle type, handle attachment, reinforcement, intended load, print area and packed quantity on one sheet. Ask for a physical sample of the exact configuration. A price comparison between rope handles and flat paper handles is incomplete if the papers, reinforcements or carton packing differ.\n\nUse the [paper shopping bag product page](https://elapack.com/products/kraft-paper-shopping-bag/) as a visual reference and the [pouches and bags category](https://elapack.com/pouches-bags/) for alternatives when a soft bag is more appropriate. [Send the loaded-product list and bag specification for a conditional quote](https://elapack.com/contact/). If a load claim is needed, ask what evidence supports that exact custom construction."
  },
  {
    "slug": "inspect-custom-packaging-delivery",
    "datePublished": "2026-10-19",
    "title": "How to Inspect a Custom Packaging Delivery Against the Approved Sample",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "4 min read",
    "image": "/images/covers/inspect-custom-packaging-delivery.webp",
    "imageAlt": "Incoming packaging inspection sequence and issue log",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Use an approved sample, purchase order and receiving checklist to inspect custom boxes and pouches when the shipment arrives.",
    "metaDescription": "Use an approved sample, purchase order and receiving checklist to inspect custom boxes and pouches when the shipment arrives.",
    "body": "Factory approval and warehouse acceptance are two different moments. A buyer still needs to check whether the shipment received matches the approved version, quantity and packing condition. This guide begins at delivery; the earlier [manufacturer vetting guide](https://elapack.com/news/how-to-vet-a-packaging-manufacturer/) addresses supplier selection before the order.\n\n## Assemble the reference set before opening cartons\n\nKeep the purchase order, approved physical sample, final artwork revision, component specification, carton labels and packing list together. If the approved sample was later changed, identify which revision governs the shipment. A photograph can help locate a sample, but it cannot always show colour, closure fit or surface defects reliably.\n\nCount received cartons and compare their labels with the packing list before mixing stock into storage. Note any damaged cartons, wet areas, crushing or broken seals, and photograph the condition before unpacking. This record helps identify whether a problem was visible on arrival or discovered inside. It does not by itself establish responsibility for damage; that depends on contract terms and shipment evidence.\n\nSelect units from different cartons and positions, including cartons that look intact. The [ASQ overview of attribute sampling](https://asq.org/quality-resources/sampling/attributes-variables-sampling) explains why a sampling plan must define the lot and acceptance rules. A buyer should not invent an \u201CAQL pass\u201D after seeing a few good boxes. If a formal acceptance plan is needed, agree on its standard, sample size, defect classes and disposition before production.\n\nThe label \u201CAQL 2.5\u201D is not a complete inspection instruction. A formal plan also needs a defined lot, inspection level, sampling type, defect classifications, and acceptance and rejection numbers under the selected standard. The current [ISO 2859-1 scheme](https://www.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/08/54/85464.html) concerns statistical lot acceptance; it does not supply a universal compression force, colour tolerance or moisture limit for every custom box. Put such product-specific criteria in the agreed specification if they matter.\n\n## Compare function and appearance separately\n\nFor a box, check dimensions, assembly, lid fit, insert position, printing and visible marks against the approved sample. For a pouch, check finished size, usable opening, seam condition, closure action and branding. If a gift set has several components, compare each component and then assemble a complete set. The [multi-component quote guide](https://elapack.com/news/compare-multi-component-gift-set-packaging-quotes/) explains why a component list matters; receiving confirms that the listed parts arrived together.\n\n| Check | Evidence to retain |\n|---|---|\n| Quantity and version | Carton label, count, artwork revision |\n| Physical fit | Product inside box or pouch, with photo |\n| Finish | Side-by-side sample in consistent light |\n| Defect | Close-up, unit and carton number |\n| Disposition | Segregated quantity and supplier response |\n\nThe table is an issue log, not a substitute for contract acceptance criteria. If an issue appears, isolate the affected stock and record how many units were inspected before sending the supplier a concise report. Avoid claiming that every unit in the lot is defective from one sample, or that the rest is safe from one good sample.\n\n## Close the loop before using the stock\n\nShare the issue log and request a disposition: use as-is, sort, rework, replace or another agreed option. Record who approves the decision and whether it affects a future order. If urgent stock must be used, preserve representative samples and written agreement so the decision remains auditable.\n\nFor a new project, an [approved jewelry box](https://elapack.com/custom-jewelry-boxes/) and a [pouch range](https://elapack.com/pouches-bags/) can be referenced in the incoming checklist. The [custom white jewelry box](https://elapack.com/products/custom-white-jewelry-box/) is one product-page example; its image is not an acceptance standard for a different order. [Send your specification and ask how sample approval and shipment documentation will be recorded](https://elapack.com/contact/)."
  },
  {
    "slug": "plan-split-packaging-shipments",
    "datePublished": "2026-10-19",
    "title": "Planning Split Packaging Shipments for a Product Launch",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "4 min read",
    "image": "/images/covers/plan-split-packaging-shipments.webp",
    "imageAlt": "Split packaging shipments launch and replenishment planning chart",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Specify quantities, delivery points and acceptance rules when one custom packaging order may need more than one shipment.",
    "metaDescription": "Specify quantities, delivery points and acceptance rules when one custom packaging order may need more than one shipment.",
    "body": "A launch may need a small first delivery for photography, retail setup or initial sales, followed by the balance later. That is a logistics request with cost and quality implications, not simply a note to \u201Csend some early.\u201D The buyer should define the split in the RFQ and ask the supplier whether it is feasible for the chosen packaging.\n\n## Separate production quantity from delivery quantity\n\nWrite one line for the total order and a separate line for each proposed delivery: units by SKU or artwork, destination, required date, transport mode and who receives it. If a gift set includes a box, pouch and card, say whether each partial shipment must contain complete sets or whether components may travel separately. The [multi-component gift set quote guide](https://elapack.com/news/compare-multi-component-gift-set-packaging-quotes/) provides the bill-of-materials starting point.\n\nSome packaging providers advertise split deliveries. PackMojo's [platform description](https://packmojo.com/platform/) mentions multiple destinations and different shipping methods as examples of its own service. That shows the question is commercially relevant; it does not prove ELAPACK offers the same arrangement, routes or pricing. Ask for an explicit written response for the actual project.\n\nIf the first delivery is needed for retail photography, ensure it uses the production-approved artwork and material. A prototype or pre-production sample may be useful for preparation, but it is not automatically equivalent to sellable bulk stock. Identify which item you need and which acceptance rules apply. If the initial shipment precedes the balance, ask whether it is drawn from the same production lot and how the remaining goods are stored.\n\n## Make the quote show the cost of each route\n\nCompare a single-shipment quote with a split-shipment quote using the same packaging specification and total quantity. Ask the supplier to show separate carton counts, packing, freight, handling and any destination-specific requirements. A faster first portion may cost more even when the box unit cost is unchanged. Do not assume a universal premium or savings rate; routes, volume and terms determine the result.\n\nSize the first release from actual launch demand: photography or seeding units, initial retail allocation, expected sales until replenishment, and a buffer chosen by the buyer. Subtract usable stock already on hand before asking how many finished sets must travel early. The resulting share may be quite different from a generic 10%/90% split. Confirm when goods are ready to leave the factory and obtain route-specific transit estimates; neither an air label nor a sea label by itself guarantees the arrival date.\n\n| RFQ field | First delivery | Balance delivery |\n|---|---|---|\n| SKU and quantity | State exact mix | State remaining mix |\n| Destination | Address and receiver | Address and receiver |\n| Date | Required arrival date | Required arrival date |\n| Evidence | Sample/inspection documents | Lot and carton records |\n| Cost | Freight and handling line | Freight and handling line |\n\nThis chart is a planning template, not a promise about transit time or delivery terms. If the two deliveries go to different countries, ask who handles labelling, customs paperwork and local receiving requirements. The final Incoterm and responsibilities should be explicit in the written quote.\n\n## Decide what can change between deliveries\n\nVersion drift is easy when a later delivery is held or produced separately. Record the approved artwork revision, colour reference, material and closure on both release instructions. If a change is requested after the first release, ask whether the balance can change and how the affected quantity will be identified. A revised version should never be silently mixed into cartons marked with the original specification.\n\nUse the [gift box category](https://elapack.com/custom-jewelry-boxes/) and [pouches and bags category](https://elapack.com/pouches-bags/) to define which components need to travel together; the [magnetic closure gift box](https://elapack.com/products/magnetic-closure-gift-box/) is a product-page reference for a box line. [Send the split-delivery table with the product specification for a conditional feasibility and cost response](https://elapack.com/contact/)."
  },
  {
    "slug": "reorder-custom-packaging-version-checklist",
    "datePublished": "2026-10-19",
    "title": "Reordering Custom Packaging: What Should Be Checked Before Approval?",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "4 min read",
    "image": "/images/covers/reorder-custom-packaging-version-checklist.webp",
    "imageAlt": "Reorder custom packaging approved specification and change log",
    "imageWidth": 2400,
    "imageHeight": 1350,
    "excerpt": "Prevent artwork, material and component changes from being missed when reordering custom boxes, bags or pouches.",
    "metaDescription": "Prevent artwork, material and component changes from being missed when reordering custom boxes, bags or pouches.",
    "body": "\u201CSame as last time\u201D is not a complete production instruction. Files, materials, decoration and shipping needs can change between orders, even when the product name remains the same. A repeat order works best when the buyer points to a specific approved version and lists every intended difference.\n\n## Recover the last approved baseline\n\nCollect the last purchase order, production artwork, dieline, physical approved sample, material description, finish, colour reference, insert or pouch details, and any approved deviation. Identify which documents actually governed the last shipment. An early sample may differ from the final bulk approval; using the wrong reference can recreate an old problem. PackMojo's [repeat-run guidance](https://packmojo.com/blog/ordering-custom-packaging-at-volume-how-to-choose-a-supplier-for-large-and-repeat-runs/) likewise calls for documenting changes in size, material, artwork and finish. This is a market practice example, not an ELAPACK process guarantee.\n\nBuild a simple comparison sheet with \u201Cprevious approved,\u201D \u201Cnew request\u201D and \u201Cchange owner\u201D columns. A logo update, new barcode, revised contact details or changed language should trigger artwork review. A new jewelry size may require a fit check even if the outer box remains the same. The [jewelry box category](https://elapack.com/custom-jewelry-boxes/) and [pouches and bags category](https://elapack.com/pouches-bags/) describe different component types; each component needs its own version line in a set.\n\nIf the supplier proposes an alternative paper, fabric or finish because the previous one is unavailable, ask for a physical comparison and written acceptance. Do not infer that a material with a similar name will look, feel or perform identically. ELAPACK's [colour tolerance guide](https://elapack.com/news/packaging-colour-tolerance-explained/) addresses the appearance side of a repeat run; the reorder checklist also covers fit, construction and component count.\n\nIf the original order used foil or another tooled decoration, ask whether the prior tool can be reused and whether the current art still matches it. Tool condition, storage and artwork changes may affect that decision; a fixed impression count is not a reliable replacement rule. Likewise, request the actual retained colour reference and sample-keeping arrangement for this order instead of assuming a universal archive period or guaranteed numerical colour match.\n\n## Recheck cost and sample assumptions\n\nA previous unit price may not apply to a new quantity, route or component mix. Put the current order quantity next to the previous quantity and state each colour, size and artwork version. Ask what setup, tooling, proof or sample steps are reused, and which need updating. Avoid assuming that \u201Creorder\u201D means no setup work or no sample.\n\n| Version-control item | Buyer question |\n|---|---|\n| Artwork | Is the exact production file revision named? |\n| Material | Is the same paper, fabric, finish and lining available? |\n| Structure | Are dimensions, closure and insert unchanged? |\n| Components | Does each set contain the same parts and counts? |\n| Approval | What changes require a new physical sample? |\n| Delivery | Have destination and packing instructions changed? |\n\nThis table is a procurement checklist. It does not guarantee that an unchanged file will produce an identical result. Printing and material batches may vary within agreed tolerances; the acceptance reference should be defined before the repeat run. If the set includes a [ring box product format](https://elapack.com/products/custom-ring-boxes/), validate the current item fit rather than relying only on the box name.\n\n## Issue one controlled reorder brief\n\nSend the supplier the baseline version, marked changes, current quantity by version, product samples if fit matters, and the required approval route. Ask them to return a revised specification for sign-off. If no changes are intended, explicitly say so and request confirmation that the quoted materials and process match the approved baseline. Keep the signed comparison sheet with the purchase order and sample record.\n\nThe [multi-component packaging quote guide](https://elapack.com/news/compare-multi-component-gift-set-packaging-quotes/) can help if the reorder includes several pieces, while the [product catalogue](https://elapack.com/products/) helps identify the current box or pouch family. [Send the previous approval record and the new quantity for a conditional reorder review](https://elapack.com/contact/). Any sample scope, mixed-version quote or delivery option should be confirmed for this order."
  }
]);
function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

// src/data/categoryCopy.ts
var boxesCopy = {
  noun: "boxes",
  importanceTitle: "The Importance of Custom Boxes in Your Brand Experience",
  importanceIntro: "A box is the first physical touch a customer has with your product, and a well-built rigid box does three jobs at once \u2014 quietly:",
  benefits: [
    {
      title: "An Unboxing Customers Remember",
      desc: "Weight, structure and finish are read in seconds. A considered box signals a considered product before it is even opened."
    },
    {
      title: "Protection and Preservation",
      desc: "Rigid board construction with tailored inserts keeps each piece stable in transit and in store \u2014 no shifting, no scratches, no damaged stock."
    },
    {
      title: "Subtle Branding Opportunity",
      desc: "Embossing, foil stamping and color-matched linings carry your identity without a word, and reinforce it every time the box is opened."
    }
  ],
  customizeTitle: "Customize Your Boxes",
  customizeParas: [
    "At ELAPACK, every element of a custom box is specified around your product: exterior material, interior lining, insert layout, closure and surface finish. If none of our standard configurations fits, we build the structure from scratch.",
    "You can always request a fully custom project in line with your brand: we will propose the right board, lining and printing method to match your product and your budget.",
    "Whether it is a specific Pantone tone, a foil accent, or an insert with exact cavity positions for your pieces, we are dedicated to crafting a box that reflects your brand \u2014 with your logo and graphics placed exactly where they belong."
  ],
  customizeCta: "Customize Your Boxes",
  faqMaterials: {
    q: "What materials are available for custom boxes?",
    a: "Exteriors in velvet, leatherette, satin, wood, MDF and genuine leather; interiors in velvet, satin, suede, microfiber or flocked fabric; inserts in foam, EVA, molded plastic or recycled paper. Finishes include matte, glossy, debossed, foil stamping and spot UV."
  },
  faqSizes: {
    q: "Can I customize the size and structure of the boxes?",
    a: "Absolutely. Boxes are built to your product dimensions \u2014 lid-and-base, flip-top, sleeve-drawer and bespoke structures. Insert cavities are cut to hold each piece exactly, and fully custom dimensions are welcome."
  },
  faqClosures: {
    q: "What closure types are available for the boxes?",
    a: "Magnetic flip-top, snap, tuck flap, ribbon tie and drawer constructions. Closures can be combined \u2014 for example a magnetic lid with a ribbon pull \u2014 and all hardware is color-matched to your brand."
  }
};
var pouchesCopy = {
  noun: "pouches and bags",
  importanceTitle: "The Importance of Custom Pouches and Bags in Your Brand Experience",
  importanceIntro: "In competitive retail, every detail contributes to the customer experience, and a well-made pouch or bag carries that experience beyond the store. Thoughtfully designed packaging offers several key benefits for brands:",
  benefits: [
    {
      title: "Elevating Customer Experience",
      desc: "When customers receive their purchase in a plush, well-finished pouch, it enhances the overall experience and makes them feel they are acquiring something truly special."
    },
    {
      title: "Protection and Preservation",
      desc: "Soft textile and durable paper constructions shield delicate and valuable pieces from scratches, dust and damage, keeping the product pristine until it reaches the customer's hands."
    },
    {
      title: "Subtle Branding Opportunity",
      desc: "A pouch or bag serves as a discreet branding tool. Your logo or design reinforces brand identity at every use and creates a lasting impression on customers."
    }
  ],
  customizeTitle: "Customize Your Bags & Pouches",
  customizeParas: [
    "At ELAPACK, we understand the importance of tailoring every detail to suit your unique style and preferences. If you don't find a compelling solution among the ones proposed, we also offer the possibility of 100% customized pouches and bags wholesale.",
    "You can always request a highly customized project in line with your style and wishes: we will be happy to find you the right solution to satisfy your needs and your customers' preferences.",
    "Whether it's a specific color, texture, or design, we're dedicated to crafting solutions that exceed your expectations and resonate with your customers' preferences. Moreover, you can add your logo and your graphics, creating packaging that totally reflects your brand and its characteristics."
  ],
  customizeCta: "Customize Your Pouches",
  faqMaterials: {
    q: "What materials are available for custom pouches?",
    a: "We offer high-quality silk, cotton, velvet, linen, and satin. Each material can be customized with various finishes such as matte, glossy, or textured to match your brand aesthetic."
  },
  faqSizes: {
    q: "Can I customize the size and shape of the pouches?",
    a: "Absolutely. We offer standard sizes like 6x8 inches and 4x6 inches, plus fully custom dimensions. Shapes include classic drawstring, flat bottom, zip-top, and bespoke structural designs."
  },
  faqClosures: {
    q: "What types of closures are available for the pouches?",
    a: "We offer drawstring cord, zip-top, magnetic snap, button closure, and ribbon tie closures. Cord materials include silk, cotton, satin, and leather, all color-matched to your brand."
  }
};
var setsCopy = {
  noun: "sets",
  importanceTitle: "The Importance of Coordinated Packaging Sets in Your Brand Experience",
  importanceIntro: "A collection of boxes, pouches and bags designed as one system tells customers the brand thinks in systems. Coordinated sets offer several key benefits:",
  benefits: [
    {
      title: "One Consistent Brand Voice",
      desc: "Matching materials, colors and finishes across every touchpoint \u2014 from retail display to gift wrap \u2014 so the brand reads the same everywhere it is met."
    },
    {
      title: "Retail-Ready Presentation",
      desc: "Display stands, boxes and pouches sized to work together present the collection as intended, in the showcase and in the unboxing alike."
    },
    {
      title: "One Supplier, One Standard",
      desc: "A complete set from a single production partner means one quality standard, one timeline and one point of contact for the whole collection."
    }
  ],
  customizeTitle: "Customize Your Packaging Set",
  customizeParas: [
    "At ELAPACK, a set is designed as one project: box, pouch, bag and display elements share a material and color story specified around your brand.",
    "You can request a fully coordinated collection \u2014 or start with one element and expand. We will propose the right combination of structures and textiles to match your products and budget.",
    "Whether it is a specific Pantone tone carried from rigid box to velvet pouch, or a logo placed consistently across every piece, the set is crafted to reflect your brand at each touchpoint."
  ],
  customizeCta: "Customize Your Set",
  faqMaterials: {
    q: "What materials are available for packaging sets?",
    a: "Sets combine our box and textile lines: rigid exteriors in velvet, leatherette, satin or MDF with velvet, satin or suede linings, paired with color-matched fabric pouches, bags and display pieces."
  },
  faqSizes: {
    q: "Can I customize the sizes across the set?",
    a: "Yes. Each element is sized to your product \u2014 box cavity, pouch dimensions and bag capacity are specified together so the collection works as one system."
  },
  faqClosures: {
    q: "What closure options are available across a set?",
    a: "Closures span both lines \u2014 magnetic flip-top or drawer boxes, drawstring or zip pouches, ribbon ties \u2014 coordinated so every opening gesture feels consistent."
  }
};
var neutralCopy = {
  noun: "products",
  importanceTitle: "The Importance of Custom Packaging in Your Brand Experience",
  importanceIntro: "Custom packaging is the first physical touch a customer has with your brand, and well-designed packaging works hard for it:",
  benefits: [
    {
      title: "Elevating Customer Experience",
      desc: "Packaging that fits the product and the brand makes every purchase feel considered and complete."
    },
    {
      title: "Protection and Preservation",
      desc: "The right material and structure shield the product from scratches, dust and damage until it reaches the customer's hands."
    },
    {
      title: "Subtle Branding Opportunity",
      desc: "Your logo and design, placed on packaging the customer keeps, reinforce brand identity long after the sale."
    }
  ],
  customizeTitle: "Customize Your Packaging",
  customizeParas: [
    "At ELAPACK, every element of your packaging is specified around your product and brand \u2014 materials, structure, finish and print.",
    "You can always request a fully custom project in line with your style and wishes: we will propose the right solution for your needs and budget.",
    "Whether it's a specific color, texture, or design, we're dedicated to crafting packaging that reflects your brand \u2014 with your logo and graphics placed exactly where they belong."
  ],
  customizeCta: "Customize Your Packaging",
  faqMaterials: {
    q: "What materials are available for custom packaging?",
    a: "Our lines cover rigid box exteriors with velvet, satin or suede linings, textile pouches in silk, cotton, velvet, linen and satin, and paper bags in recycled kraft \u2014 each customizable with matte, glossy or textured finishes."
  },
  faqSizes: {
    q: "Can I customize the size and shape of my packaging?",
    a: "Absolutely. Standard sizes and fully custom dimensions are both available, with structures and shapes built around your product."
  },
  faqClosures: {
    q: "What closure options are available?",
    a: "Drawstring cord, zip-top, magnetic flip-top, snap, button and ribbon tie closures \u2014 all color-matched to your brand."
  }
};
var categoryCopy = {
  Boxes: boxesCopy,
  "Pouches & Bags": pouchesCopy,
  "Sets & Complete Packaging": setsCopy
};
var ECO_FAQ_ANSWER = "We offer eco-friendly material options including recycled kraft paper, natural cotton, and linen. Certification documents are available on request.";
function faqsFor(category) {
  const c = categoryCopy[category] ?? neutralCopy;
  return [
    c.faqMaterials,
    c.faqSizes,
    c.faqClosures,
    {
      q: "Do I need to provide a dieline for custom packaging?",
      a: "No. We draw the dieline to your confirmed product dimensions free of charge at the quotation stage, and custom samples are built to it. Files are supplied as PDF, AI or DXF. If you already have a vector dieline, we accept it and verify it with our die-making team before production; cutting-die tooling, where a new die is required, is quoted at USD 50\u2013100 depending on the product."
    },
    { q: `Are the ${c.noun} eco-friendly?`, a: ECO_FAQ_ANSWER },
    {
      q: "How long does the production process take?",
      a: "Typical production time is 15\u201320 days after sample approval. Shipping is by air or by sea from Shanghai or Shenzhen."
    },
    {
      q: "Can I see a sample before placing a full order?",
      a: "Yes. Free stock samples ship in 2\u20133 days. Custom printed samples cost USD 25 plus USD 20 shipping (USD 45 total), are made in 3\u20135 days, and sample delivery takes 4\u20137 days."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept T/T (bank transfer) and PayPal."
    }
  ];
}

// src/pages/ProductDetail.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var trustBadges = [
  { icon: "M", label: "Custom Pantone Matching" },
  { icon: "C", label: "100% Customization" },
  { icon: "D", label: "Design & Samples" },
  { icon: "M", label: "Low MOQ From 200 pcs" }
];
var processSteps = [
  { step: "01", title: "Establish Contact" },
  { step: "02", title: "Communicate OEM & ODM Requirements" },
  { step: "03", title: "Quotation" },
  { step: "04", title: "Customized Samples" },
  { step: "05", title: "Printing & Surface Treatment" },
  { step: "06", title: "Confirm Order" },
  { step: "07", title: "Make Payment" },
  { step: "08", title: "Mass Production" },
  { step: "09", title: "Quality Inspection & Shipment" }
];
function ProductDetail() {
  const { slug } = (0, import_react_router_dom8.useParams)();
  const product = slug ? getProductBySlug(slug) : void 0;
  const [openFaq, setOpenFaq] = (0, import_react7.useState)(0);
  const [activeImg, setActiveImg] = (0, import_react7.useState)(0);
  const galleryImgs = product?.gallery?.length ? product.gallery : product ? [product.image] : [];
  if (!product) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "section",
      {
        className: "section",
        style: {
          textAlign: "center",
          paddingTop: "calc(var(--header-height) + 6rem)"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "section-title", children: "Product not found" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-soft", style: { margin: "1rem 0 2rem" }, children: "The product you're looking for doesn't exist or has been moved." }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/products/", className: "btn-primary", children: "Back to Products" })
        ] })
      }
    );
  }
  const quoteUrl = `/contact/?product=${encodeURIComponent(product.slug)}`;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const copy = categoryCopy[product.category] ?? neutralCopy;
  const faqs2 = faqsFor(product.category);
  const guides = (productGuides[product.slug] ?? []).map((s) => getArticleBySlug(s)).filter((a) => a !== void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "breadcrumb-bar", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("nav", { className: "breadcrumb", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "breadcrumb-sep", children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/products/", children: "Products" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "breadcrumb-sep", children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "breadcrumb-current", children: product.name })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "product-detail-hero", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-gallery reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-gallery-main", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: galleryImgs[activeImg] ?? product.image, alt: product.name, width: 1254, height: 1254 }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-detail-category", children: product.category })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-gallery-thumbs", children: galleryImgs.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            className: `product-gallery-thumb ${i === activeImg ? "is-active" : ""}`,
            onClick: () => setActiveImg(i),
            role: "button",
            "aria-label": `View photo ${i + 1}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: img, alt: ` view `, loading: "lazy", width: 1254, height: 1254 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-info reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "product-detail-title", children: product.name }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-detail-desc", children: product.description }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-quote", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "product-quote-title", children: "Get A Custom Quote:" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-quote-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: quoteUrl, className: "btn-primary", children: "Request a Quote" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: quoteUrl, className: "btn-outline", children: "Contact Us" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-trust-badges", children: trustBadges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-trust-badge", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-trust-icon", children: badge.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-trust-label", children: badge.label })
        ] }, badge.label)) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "detail-meta-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "detail-meta-label", children: "Materials" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "detail-meta-value", children: product.materials })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "detail-meta-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "detail-meta-label", children: "Minimum Order" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "detail-meta-value", children: product.moq })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "detail-meta-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "detail-meta-label", children: "Lead Time" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "detail-meta-value", children: product.leadTime })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-industries", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "detail-meta-label", children: "Industries" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "industry-tags", children: product.industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "industry-tag", children: ind }, ind)) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-specs-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-specs-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-specs-intro reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "Technical Details" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "1rem" }, children: "Specifications" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-specs-text", children: "Every dimension, material, and finish is fully customizable to your brand's exact requirements. Below are our standard configurations \u2014 contact us to discuss custom specifications." }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: quoteUrl, className: "btn-primary", children: "Discuss Your Project" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-specs-table reveal reveal-delay-2", children: product.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "spec-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "spec-label", children: spec.label }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "spec-value", children: spec.value })
      ] }, spec.label)) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-description-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-description-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "Product Description" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-description-text", style: { marginTop: "1rem" }, children: product.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-description-image reveal reveal-delay-2", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "img",
        {
          src: "/product-collection.webp",
          alt: `${product.name} showcase`,
          loading: "lazy",
          width: 1408,
          height: 768
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-importance-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: copy.importanceTitle }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-description-text", style: { maxWidth: "760px", margin: "1.5rem auto 0" }, children: copy.importanceIntro })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-benefits-grid", children: copy.benefits.map((benefit, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: `product-benefit-card reveal ${i === 1 ? "reveal-delay-2" : i === 2 ? "reveal-delay-3" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-benefit-num", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "product-benefit-title", children: benefit.title }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-benefit-desc", children: benefit.desc })
          ]
        },
        benefit.title
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-customize-bags-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-customize-bags-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-customize-bags-image reveal", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "img",
        {
          src: "/custom-options.webp",
          alt: `Customize your ${copy.noun}`,
          loading: "lazy",
          width: 1408,
          height: 768
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-customize-bags-content reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "100% Customization" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: copy.customizeTitle }),
        copy.customizeParas.map((para) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-description-text", children: para }, para.slice(0, 24))),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: quoteUrl, className: "btn-primary", style: { marginTop: "0.5rem" }, children: copy.customizeCta })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-features-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "Key Features" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Engineered for Excellence" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-features-grid", children: product.features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: `product-feature-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-feature-num", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "product-feature-title", children: feature.title }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-feature-desc", children: feature.desc })
          ]
        },
        feature.title
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-process-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "How We Work" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Customization Process" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "section-subtitle", children: "Our professional customization team meets 100% of customer needs \u2014 from initial contact to quality inspection before shipment." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-process-grid", children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: `product-process-step reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-process-num", children: step.step }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "product-process-title", children: step.title })
          ]
        },
        step.step
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-custom-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "Make It Yours" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Customization Options" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "section-subtitle", children: "Every element of this product can be tailored to your brand. Here are the most common customization paths." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "custom-options-chips reveal reveal-delay-2", children: product.customizationOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "custom-chip", children: opt }, opt)) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-faq-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "Questions & Answers" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "faq-list reveal reveal-delay-1", children: faqs2.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: `faq-item ${openFaq === i ? "is-open" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
              "button",
              {
                className: "faq-question",
                onClick: () => setOpenFaq(openFaq === i ? null : i),
                "aria-expanded": openFaq === i,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                    "Q: ",
                    faq.q
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "faq-toggle", "aria-hidden": "true", children: openFaq === i ? "\u2212" : "+" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "faq-answer", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: faq.a }) })
          ]
        },
        faq.q
      )) })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-related-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-header reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "Explore More" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Related Products" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_router_dom8.Link, { to: "/products/", className: "text-link", children: [
          "View All",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "related-grid", children: related.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        import_react_router_dom8.Link,
        {
          to: `/products/${item.slug}/`,
          className: `related-card reveal reveal-delay-${i % 3 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "related-card-image", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: item.image, alt: item.name, loading: "lazy", width: 1254, height: 1254 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "related-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "related-category", children: item.category }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "related-name", children: item.name }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "related-desc", children: item.shortDesc }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "related-link", children: [
                "View Details ",
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-link-arrow", children: "\u2192" })
              ] })
            ] })
          ]
        },
        item.slug
      )) })
    ] }) }),
    guides.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Sourcing guides" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "spec-list", children: guides.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "markets-note", style: { marginBottom: "0.5rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: `/news/${guide.slug}/`, className: "text-link", children: guide.title }),
        " \u2014 ",
        guide.excerpt
      ] }, guide.slug)) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section cta-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "cta-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h2", { className: "section-title-lg", style: { color: "#fff" }, children: [
        "Ready to customize",
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("br", {}),
        "this for your brand?"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "cta-text", children: "Share your specifications and we'll prepare a tailored proposal within one business day." }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: quoteUrl, className: "btn-primary", children: "Start Your Project" })
    ] }) }) })
  ] });
}

// src/pages/Industries.tsx
var import_react8 = require("react");
var import_react_router_dom9 = require("react-router-dom");
var import_jsx_runtime8 = require("react/jsx-runtime");
var industryContent = {
  Jewelry: {
    desc: "From ring boxes to necklace cases, we craft packaging that protects and presents fine jewelry with the luxury it deserves.",
    image: "/product-giftbox.webp",
    highlights: [
      "Ring, earring, necklace & bracelet boxes",
      "Velvet, suede & leatherette interiors",
      "Foil-stamped branding & embossing",
      "Low MOQ for independent jewelers"
    ]
  },
  "Eyewear & Sunglasses": {
    desc: "Slim, structured cases and pouches designed to protect eyewear while communicating brand quality at every touchpoint.",
    image: "/product-shoppingbag.webp",
    highlights: [
      "Rigid slide cases & folding cartons",
      "Microfiber pouches & cloths",
      "Custom-shaped foam inserts",
      "Retail display-ready packaging"
    ]
  },
  Fragrance: {
    desc: "Rigid gift boxes and drawer-style cases that turn fragrance unboxing into a ritual of discovery.",
    image: "/product-collection.webp",
    highlights: [
      "Drawer-style & magnetic closure boxes",
      "Flocked velvet & satin inserts",
      "Pantone-matched color systems",
      "Coordinated gift sets"
    ]
  },
  "Hair & Wig": {
    desc: "Breathable textile packaging and structured boxes designed to protect and present hair products with care.",
    image: "/product-textile.webp",
    highlights: [
      "Breathable cotton & linen pouches",
      "Structured display boxes",
      "Custom-sized for wig & extension products",
      "Branded woven labels & tags"
    ]
  },
  Beauty: {
    desc: "From cream jars to makeup palettes, we design packaging that elevates beauty brands on shelf and in hand.",
    image: "/product-giftbox.webp",
    highlights: [
      "Folding cartons & rigid boxes",
      "Soft-touch & matte lamination finishes",
      "Spot UV & foil stamp accents",
      "Sustainable material options"
    ]
  },
  Fashion: {
    desc: "Luxury shopping bags, garment packaging, and branded accessories that extend your brand beyond the product.",
    image: "/product-shoppingbag.webp",
    highlights: [
      "Heavyweight shopping bags with rope handles",
      "Garment bags & dust covers",
      "Branded ribbons & hang tags",
      "Complete retail packaging systems"
    ]
  },
  Gift: {
    desc: "Coordinated gift packaging systems that make every unboxing a memorable brand experience.",
    image: "/product-collection.webp",
    highlights: [
      "Complete gift set collections",
      "Seasonal & limited-edition packaging",
      "Custom tissue paper & ribbons",
      "Corporate gifting solutions"
    ]
  }
};
function Industries() {
  const [searchParams, setSearchParams] = (0, import_react_router_dom9.useSearchParams)();
  const activeSector = searchParams.get("sector") || null;
  const [selected, setSelected] = (0, import_react8.useState)(activeSector);
  (0, import_react8.useEffect)(() => {
    setSelected(activeSector);
  }, [activeSector]);
  const handleSelect = (ind) => {
    setSelected(ind);
    if (ind) {
      setSearchParams({ sector: ind });
    } else {
      setSearchParams({});
    }
  };
  const filteredProducts = selected ? products.filter(
    (p) => p.industries.some(
      (ind) => ind.toLowerCase() === selected.toLowerCase() || ind.toLowerCase().includes(selected.toLowerCase()) || selected.toLowerCase().includes(ind.toLowerCase())
    )
  ) : [];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "eyebrow reveal", children: "Industries" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "Packaging for",
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
        "Every Industry"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: "We serve brands across jewelry, beauty, fragrance, fashion, and more \u2014 with packaging tailored to each industry's unique demands." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "filter-bar-wrapper", "aria-label": "Browse industries", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "filter-bar", children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "button",
      {
        type: "button",
        className: `filter-chip ${selected === ind ? "is-active" : ""}`,
        onClick: () => handleSelect(selected === ind ? null : ind),
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: ind })
      },
      ind
    )) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "section industries-section", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industries-grid", children: industries.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "button",
        {
          className: `industry-card reveal reveal-delay-${i % 4 + 1} ${selected === ind ? "is-active" : ""}`,
          onClick: () => handleSelect(selected === ind ? null : ind),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industry-card-image", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "img",
              {
                src: industryContent[ind].image,
                alt: ind,
                loading: "lazy",
                width: 1408,
                height: 768
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "industry-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "industry-name", children: ind }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "industry-desc", children: industryContent[ind].desc })
            ] })
          ]
        },
        ind
      )) }),
      selected && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "industry-detail reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "industry-detail-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "eyebrow", children: selected }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: [
              "Packaging Solutions for ",
              selected
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              className: "btn-outline",
              onClick: () => handleSelect(null),
              children: "Show All Industries"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industry-highlights", children: industryContent[selected].highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "industry-highlight-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "case-point-dot" }),
          h
        ] }, h)) }),
        filteredProducts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "industry-products-title", children: "Recommended Products" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industry-products-grid", children: filteredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            import_react_router_dom9.Link,
            {
              to: `/products/${product.slug}/`,
              className: "industry-product-card",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industry-product-image", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "img",
                  {
                    src: product.image,
                    alt: product.name,
                    loading: "lazy",
                    width: 1254,
                    height: 1254
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "industry-product-body", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "industry-product-category", children: product.category }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "industry-product-name", children: product.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "industry-product-link", children: [
                    "View Product ",
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "product-link-arrow", children: "\u2192" })
                  ] })
                ] })
              ]
            },
            product.slug
          )) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industry-cta", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_router_dom9.Link, { to: "/contact/", className: "btn-primary", children: [
          "Request a Quote for ",
          selected
        ] }) })
      ] })
    ] }) })
  ] });
}

// src/pages/Solutions.tsx
var import_react9 = require("react");
var import_react_router_dom10 = require("react-router-dom");
var import_jsx_runtime9 = require("react/jsx-runtime");
var solutionContent = {
  "Custom Packaging": {
    title: "Custom Packaging",
    desc: "From structure and inserts to finish and branding, we turn your idea into packaging that feels consistent with your brand.",
    image: "/custom-options.webp",
    points: [
      {
        title: "Structure Design",
        desc: "Rigid boxes, folding cartons, drawer styles, magnetic closures, and custom structural designs engineered for your product."
      },
      {
        title: "Insert Engineering",
        desc: "EVA foam, velvet, satin, molded pulp, and custom-fit inserts designed to protect and present your product."
      },
      {
        title: "Logo & Finish",
        desc: "Hot foil stamping, embossing, debossing, spot UV, screen printing, and metallic finishes for premium brand expression."
      },
      {
        title: "Color Systems",
        desc: "Pantone-matched colors, custom gradients, monochrome palettes, and brand-specific color systems across all components."
      }
    ]
  },
  "Materials & Finishes": {
    title: "Materials & Finishes",
    desc: "Choose from premium materials and logo techniques that match your price point and brand image.",
    image: "/about-materials.webp",
    points: [
      {
        title: "Premium Papers & Board",
        desc: "Rigid board, art paper, textured paper, and kraft materials. Certification documents available on request."
      },
      {
        title: "Luxury Textiles",
        desc: "Leatherette, velvet, suede, linen, genuine leather, and recycled textiles for interior and exterior wrapping."
      },
      {
        title: "Surface Finishes",
        desc: "Matte/gloss lamination, soft-touch, spot UV, textured coatings, and specialty finishes for tactile distinction."
      },
      {
        title: "Branding Techniques",
        desc: "Hot foil stamping, embossing, debossing, screen printing, digital printing, and metallic foil applications."
      }
    ]
  },
  "How It Works": {
    title: "How It Works",
    desc: "A clear process that helps you move from idea to sample, then to production with fewer revisions.",
    image: "/about-factory.webp",
    points: [
      {
        title: "1. Consultation",
        desc: "Share your brand, product, and packaging goals. We assess needs, timeline, and budget parameters."
      },
      {
        title: "2. Design & Sampling",
        desc: "Our design studio creates structural and visual concepts. We produce physical samples for your approval."
      },
      {
        title: "3. Production",
        desc: "Once samples are approved, we move to mass production with rigorous QC protocols at every stage."
      },
      {
        title: "4. Delivery",
        desc: "Quality-checked products are packed and shipped with reliable lead times to Europe and North America."
      }
    ]
  },
  Sustainability: {
    title: "Sustainability",
    desc: "Sustainability should support your brand, not weaken it. We offer responsible packaging without losing presentation value.",
    image: "/news-eco.webp",
    points: [
      {
        title: "Eco-Friendly Materials",
        desc: "Recycled kraft paper, natural cotton, and linen options. Certification documents available on request."
      },
      {
        title: "Recyclable Structures",
        desc: "Packaging structures designed to be recyclable where local facilities allow."
      },
      {
        title: "Reusable Structures",
        desc: "Packaging designed to be kept and reused \u2014 from linen wraps to keepsake boxes that extend product lifecycle."
      },
      {
        title: "Responsible Sourcing",
        desc: "We work with suppliers who can provide material documentation and certifications upon request."
      }
    ]
  }
};
function Solutions() {
  const [searchParams, setSearchParams] = (0, import_react_router_dom10.useSearchParams)();
  const activeTopic = searchParams.get("topic") || null;
  const [selected, setSelected] = (0, import_react9.useState)(activeTopic);
  (0, import_react9.useEffect)(() => {
    setSelected(activeTopic);
  }, [activeTopic]);
  const handleSelect = (sol) => {
    setSelected(sol);
    if (sol) {
      setSearchParams({ topic: sol });
    } else {
      setSearchParams({});
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "eyebrow reveal", children: "Solutions" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "Packaging",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
        "Solutions"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: "From custom packaging design to sustainable materials \u2014 explore the services and capabilities that power your brand's packaging." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: "section solutions-section", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "solutions-grid", children: solutions.map((sol, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        "button",
        {
          className: `solution-card reveal reveal-delay-${i % 4 + 1} ${selected === sol ? "is-active" : ""}`,
          onClick: () => handleSelect(selected === sol ? null : sol),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "solution-card-image", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "img",
              {
                src: solutionContent[sol].image,
                alt: sol,
                loading: "lazy",
                width: 1408,
                height: 768
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "solution-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "solution-name", children: sol }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "solution-desc", children: solutionContent[sol].desc }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "solution-link", children: [
                selected === sol ? "Show All" : "Learn More",
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "product-link-arrow", children: "\u2192" })
              ] })
            ] })
          ]
        },
        sol
      )) }),
      selected && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "solution-detail reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "solution-detail-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "eyebrow", children: selected }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: solutionContent[selected].title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              className: "btn-outline",
              onClick: () => handleSelect(null),
              children: "Show All Solutions"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "solution-detail-image", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "img",
          {
            src: solutionContent[selected].image,
            alt: selected,
            loading: "lazy",
            width: 1408,
            height: 768
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "solution-points-grid", children: solutionContent[selected].points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "solution-point-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h4", { className: "solution-point-title", children: point.title }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "solution-point-desc", children: point.desc })
        ] }, point.title)) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "solution-cta", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_router_dom10.Link, { to: "/contact/", className: "btn-primary", children: "Get Started" }) })
      ] })
    ] }) })
  ] });
}

// src/pages/About.tsx
var import_react10 = require("react");
var import_react_router_dom11 = require("react-router-dom");
var import_jsx_runtime10 = require("react/jsx-runtime");
var milestones = [
  { year: "2018", title: "Founded", desc: "ELAPACK established as a custom packaging manufacturer for jewelry, eyewear, and gift brands." },
  { year: "Today", title: "3 Production Lines", desc: "Three dedicated production lines for textile bags, rigid boxes, and custom gift sets." },
  { year: "Today", title: "ISO 9001 Certified", desc: "Quality management system certified for the production and sales of paper and textile packaging products." },
  { year: "Today", title: "Serving EU & US Brands", desc: "Exporting to mid-to-high-end brands across Europe and North America, with air and sea freight delivery." }
];
var values = [
  {
    title: "Restraint",
    desc: "We design with intention, not excess. Every element earns its place."
  },
  {
    title: "Craft",
    desc: "We honor the hands that make. Precision is our baseline, not our ceiling."
  },
  {
    title: "Partnership",
    desc: "We invest in your brand as if it were our own. Your success is our measure."
  },
  {
    title: "Responsibility",
    desc: "We source ethically and design for longevity. Luxury should not cost the earth."
  }
];
var markets = [
  "Jewelry & Watches",
  "Eyewear",
  "Beauty & Cosmetics",
  "Fragrance",
  "Gifting",
  "Fashion & Apparel"
];
function About() {
  const videoRef = (0, import_react10.useRef)(null);
  const videoWrapperRef = (0, import_react10.useRef)(null);
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };
  const markPlaying = (playing) => {
    videoWrapperRef.current?.classList.toggle("is-playing", playing);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "page-header page-header-alt", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow reveal", children: "About Us" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "Packaging",
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
        "Aesthetics Builders"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: "A trade-and-manufacturing integrated enterprise, deeply rooted in the European and American markets \u2014 crafting packaging that elevates brands." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "section about-story", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "about-story-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "about-story-image reveal", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "img",
        {
          src: "/about-factory.webp",
          alt: "ELAPACK production facility",
          loading: "lazy",
          width: 1408,
          height: 768
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "about-story-text reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow", children: "Our Story" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "section-title", style: { marginTop: "1rem" }, children: "From workshop to global partner." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "Since 2018, ELAPACK has believed that packaging is not a container, but a brand's first handshake. We have grown into a full-service packaging partner for luxury brands across Europe and North America." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "Today, our integrated model spans creative design, precision manufacturing across three production lines, and global logistics \u2014 serving clients from independent ateliers to established brands. ELAPACK is operated by Wuxi Magic Packaging Co., Ltd (est. 2018), with our factory located in Wuxi, Jiangsu, China." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "We hold a rigorous quality management system and a sharp understanding of international markets. We are not just a producer \u2014 we are your brand strategy partner, committed to translating your design vision into tangible, market-ready art." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "section about-video-section", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        ref: videoWrapperRef,
        className: "about-video-wrapper reveal",
        onClick: togglePlay,
        role: "button",
        tabIndex: 0,
        "aria-label": "Play or pause the factory video",
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            togglePlay();
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "video",
            {
              ref: videoRef,
              className: "about-video-poster",
              poster: "/factory-video-poster.webp",
              preload: "none",
              playsInline: true,
              onPlay: () => markPlaying(true),
              onPause: () => markPlaying(false),
              onEnded: () => markPlaying(false),
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("source", { src: "/videos/factory-tour.mp4", type: "video/mp4" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "about-video-overlay" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "about-video-play", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", { viewBox: "0 0 80 80", className: "play-icon", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", { cx: "40", cy: "40", r: "39", fill: "none", stroke: "currentColor", strokeWidth: "1" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M32 26 L54 40 L32 54 Z", fill: "currentColor" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "about-video-caption", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow", style: { color: "rgba(255,255,255,0.7)" }, children: "Inside Our Factory" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "about-video-title", children: "See How Premium Packaging Is Made" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-video-subtitle", children: "Take a virtual tour of our production facility \u2014 from material selection to precision assembly." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "section about-values", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow", children: "What We Believe" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "The Principles Behind Every Piece" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "values-grid", children: values.map((val, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: `value-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "value-title", children: val.title }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "value-desc", children: val.desc })
          ]
        },
        val.title
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "section about-materials", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "materials-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "materials-content reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow", children: "Material Options" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "section-title", style: { marginTop: "1rem" }, children: "Sourced with intention." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "We work with a curated range of premium materials \u2014 velvet, suede, linen, cotton, satin, and rigid paperboard \u2014 and offer eco-friendly options such as recycled kraft and natural textiles. Certification documents are available on request." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "Because the world's finest brands demand materials that feel as good as they look \u2014 and perform as well as they promise." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "materials-image reveal reveal-delay-2", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "img",
        {
          src: "/about-materials.webp",
          alt: "Premium packaging materials",
          loading: "lazy",
          width: 1408,
          height: 768
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "section about-timeline", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow", children: "Our Journey" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Our Journey Since 2018" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "timeline", children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: `timeline-item reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "timeline-marker", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "timeline-year", children: m.year }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "timeline-dot" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "timeline-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "timeline-title", children: m.title }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "timeline-desc", children: m.desc })
            ] })
          ]
        },
        m.year
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "section about-markets", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow", children: "Who We Serve" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Industries We Elevate" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "markets-list", children: markets.map((market) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "market-tag", children: market }, market)) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "markets-note", children: "Our primary clients are mid-to-high-end brands and enterprises that value brand image, packaging quality, and supply chain stability \u2014 especially those serving European and American markets." }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom11.Link, { to: "/contact/", className: "btn-primary", children: "Partner With Us" })
    ] }) }) })
  ] });
}

// src/pages/News.tsx
var import_react_router_dom12 = require("react-router-dom");
var import_jsx_runtime11 = require("react/jsx-runtime");
var articles2 = [
  {
    title: "The Future of Eco-Luxury Packaging",
    excerpt: "How recycled kraft, natural cotton, and linen are redefining what premium packaging can be \u2014 without compromising on aesthetics.",
    image: "/news-eco.webp",
    date: "August 2026",
    category: "Sustainability",
    readTime: "5 min read"
  },
  {
    title: "Designing the Unboxing Experience",
    excerpt: "Why the first touch matters. We explore how structural design, material selection, and tactile finishes shape brand perception at the moment of opening.",
    image: "/news-luxury.webp",
    date: "July 2026",
    category: "Design",
    readTime: "7 min read"
  },
  {
    title: "2026 Packaging Trends for Luxury Brands",
    excerpt: "From minimalist monochrome to tactile maximalism \u2014 our design studio shares the five directions shaping luxury packaging this year.",
    image: "/news-trends.webp",
    date: "June 2026",
    category: "Trends",
    readTime: "6 min read"
  },
  {
    title: "Inside the Factory: How Your Custom Packaging Is Made",
    excerpt: "From dieline to sewing floor to box assembly \u2014 a walk through our three production lines shows what actually happens between approving a sample and receiving your order.",
    image: "/images/factory/elapack-03.jpg",
    date: "September 2026",
    category: "Manufacturing",
    readTime: "5 min read"
  },
  {
    title: "MOQ Explained: Ordering Custom Packaging as a Smaller Brand",
    excerpt: "Why minimums exist, how 200-piece pouch and box runs are priced, and the choices \u2014 stock materials, simpler structures, phased launches \u2014 that keep small-batch custom viable.",
    image: "/images/factory/elapack-08.jpg",
    date: "September 2026",
    category: "Sourcing Guide",
    readTime: "6 min read"
  }
];
function News() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "eyebrow reveal", children: "News & Insights" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "Ideas in",
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        "Craft & Material"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: "Perspectives on packaging design, sustainable materials, and the craft behind the world's most distinctive brands." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("section", { className: "section news-section", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "news-featured reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "news-featured-image", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: articles2[0].image, alt: articles2[0].title, width: 1600, height: 1e3 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-featured-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-category", children: articles2[0].category }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "news-featured-title", children: articles2[0].title }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "news-featured-excerpt", children: articles2[0].excerpt }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: articles2[0].date }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-meta-dot" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: articles2[0].readTime })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_router_dom12.Link, { to: "/news/", className: "text-link", children: [
            "Read Article",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "news-grid", children: articles2.slice(1).map((article, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "article",
        {
          className: `news-card reveal reveal-delay-${i + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: article.image, alt: article.title, loading: "lazy", width: 1600, height: 1e3 }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-category", children: article.category })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "news-card-title", children: article.title }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "news-card-excerpt", children: article.excerpt }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-meta", children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: article.date }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-meta-dot" }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: article.readTime })
              ] })
            ] })
          ]
        },
        article.title
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-guides-head reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "section-title", children: "Buyer Guides" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "page-subtitle", children: "Practical, supplier-neutral guides for choosing custom packaging \u2014 specs to prepare before you request a quote." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "news-grid", children: articles.map((article, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "article",
        {
          className: `news-card reveal reveal-delay-${i % 3 + 1}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_router_dom12.Link, { to: `/news/${article.slug}/`, className: "news-card-link", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: article.image, alt: article.imageAlt, loading: "lazy", width: 1600, height: 1e3 }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-category", children: article.category })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "news-card-title", children: article.title }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "news-card-excerpt", children: article.excerpt }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-meta", children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: article.date }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-meta-dot" }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: article.readTime })
              ] })
            ] })
          ] })
        },
        article.slug
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "newsletter-box reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "newsletter-title", children: "Stay informed on craft, material, and design." }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "newsletter-text", children: "Subscribe to receive occasional insights from our design studio \u2014 no noise, just substance." }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("form", { className: "newsletter-form", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "input",
            {
              type: "email",
              placeholder: "Your email address",
              className: "newsletter-input",
              "aria-label": "Email address"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "submit", className: "btn-primary", children: "Subscribe" })
        ] })
      ] })
    ] }) })
  ] });
}

// src/pages/Article.tsx
var import_react_router_dom13 = require("react-router-dom");
var import_jsx_runtime12 = require("react/jsx-runtime");
var RELATED = {
  "magnetic-gift-boxes-wholesale-guide": [
    "magnetic-closure-gift-box"
  ],
  "custom-earring-cards-guide": [
    "acrylic-earring-display",
    "velvet-necklace-display"
  ],
  "clear-cosmetic-bags-guide": [
    "custom-pvc-bags",
    "custom-cotton-pouches"
  ],
  "custom-leather-cosmetic-bags-guide": [
    "leather-envelope-pouch",
    "custom-satin-pouches"
  ],
  "perfume-packaging-sourcing-guide": [
    "custom-perfume-boxes",
    "custom-perfume-sample-card-boxes"
  ],
  "custom-sunglasses-pouches-guide": [
    "custom-microfiber-pouches",
    "custom-velvet-pouches"
  ],
  "custom-microfiber-cloths-guide": [
    "custom-microfiber-pouches",
    "custom-velvet-pouches"
  ],
  "top-china-jewelry-packaging-suppliers": [
    "black-leather-jewelry-box",
    "custom-velvet-pouches",
    "magnetic-closure-gift-box"
  ],
  "custom-packaging-small-business-guide": [
    "kraft-paper-shopping-bag",
    "custom-cotton-pouches"
  ],
  "apparel-gift-boxes-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon"
  ],
  "custom-glasses-cases-pouches-guide": [
    "custom-microfiber-pouches",
    "custom-velvet-pouches"
  ],
  "perfume-sample-cards-guide": [
    "custom-perfume-sample-card-boxes",
    "custom-perfume-boxes"
  ],
  "luxury-candle-boxes-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon"
  ],
  "candle-box-inserts-guide": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches"
  ],
  "candle-packaging-guide": [
    "kraft-paper-shopping-bag",
    "magnetic-closure-gift-box"
  ],
  "ppwr-packaging-regulation-guide": [
    "kraft-paper-shopping-bag",
    "magnetic-closure-gift-box"
  ],
  "ppwr-recyclability-grades-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes"
  ],
  "custom-cosmetic-bags-guide": [
    "custom-pvc-bags",
    "custom-velvet-pouches"
  ],
  "custom-soap-packaging-guide": [
    "kraft-paper-shopping-bag",
    "magnetic-closure-gift-box"
  ],
  "custom-shopping-bags-guide": [
    "kraft-paper-shopping-bag",
    "luxury-gift-box-ribbon"
  ],
  "how-to-vet-a-packaging-manufacturer": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box"
  ],
  "custom-printed-boxes-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes"
  ],
  "custom-rigid-boxes-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes"
  ],
  "packaging-inserts-guide": [
    "magnetic-closure-gift-box",
    "custom-watch-boxes"
  ],
  "custom-tissue-paper-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes"
  ],
  "custom-jewelry-packaging-guide": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box"
  ],
  "magnetic-gift-boxes-guide": [
    "magnetic-closure-gift-box",
    "custom-watch-boxes"
  ],
  "velvet-satin-muslin-pouches-compared": [
    "custom-velvet-pouches",
    "custom-satin-pouches",
    "custom-muslin-drawstring-pouch"
  ],
  "custom-candle-boxes-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon"
  ],
  "jewelry-display-trays-guide": [
    "stackable-jewelry-tray",
    "velvet-jewelry-display-set",
    "velvet-necklace-display"
  ],
  "custom-logo-pouches-guide": [
    "custom-cotton-pouches",
    "custom-velvet-pouches"
  ],
  "custom-gift-card-boxes-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon"
  ],
  "surface-finishes-compared-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes"
  ],
  "custom-printed-ribbon-guide": [
    "luxury-gift-box-ribbon",
    "magnetic-closure-gift-box"
  ],
  "custom-muslin-bags-guide": [
    "custom-muslin-drawstring-pouch",
    "custom-cotton-pouches"
  ],
  "custom-ring-boxes-guide": [
    "custom-ring-boxes",
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon"
  ],
  "die-cutting-and-dielines-guide": [
    "magnetic-closure-gift-box",
    "custom-perfume-boxes"
  ],
  "magnetic-closure-vs-ribbon-tie-gift-boxes": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon"
  ],
  "compare-multi-component-gift-set-packaging-quotes": [
    "magnetic-closure-gift-box",
    "custom-cotton-pouches",
    "luxury-gift-box-ribbon"
  ],
  "how-to-choose-a-custom-jewelry-pouch": [
    "custom-velvet-pouches",
    "custom-cotton-pouches",
    "leather-envelope-pouch"
  ],
  "how-to-choose-custom-drawstring-bags": [
    "custom-velvet-pouches",
    "custom-cotton-pouches"
  ],
  "custom-hair-extension-packaging-guide": [
    "custom-satin-wig-bag",
    "custom-velvet-pouches",
    "custom-cotton-envelope-pouches"
  ],
  "custom-clothing-apparel-packaging-guide": ["kraft-paper-shopping-bag", "luxury-gift-box-ribbon"],
  "custom-gift-packaging-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon",
    "velvet-jewelry-display-set"
  ],
  "how-to-read-a-packaging-specification-sheet": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches"
  ],
  "packaging-colour-tolerance-explained": [
    "luxury-gift-box-ribbon",
    "custom-velvet-pouches"
  ],
  "how-to-customize-eyelash-boxes": [
    "custom-eyelash-packaging-boxes",
    "custom-press-on-nail-boxes",
    "magnetic-closure-gift-box"
  ],
  "hair-extension-packaging-ideas": [
    "custom-hair-extension-boxes",
    "custom-satin-wig-bag",
    "custom-cotton-envelope-pouches"
  ],
  "custom-packaging-moq-oem-odm-logo-guide": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box",
    "custom-pvc-bags"
  ],
  "how-to-choose-custom-jewelry-boxes": [
    "custom-ring-boxes",
    "black-leather-jewelry-box",
    "custom-white-jewelry-box"
  ],
  "custom-cosmetic-packaging-guide": [
    "custom-eyelash-packaging-boxes",
    "custom-press-on-nail-boxes",
    "custom-perfume-boxes"
  ],
  "custom-perfume-packaging-guide": [
    "custom-perfume-boxes",
    "custom-perfume-sample-card-boxes",
    "custom-satin-pouches"
  ],
  "press-on-nail-packaging-guide": [
    "custom-press-on-nail-boxes",
    "custom-eyelash-packaging-boxes",
    "custom-pvc-bags"
  ],
  "custom-wig-packaging-guide": [
    "custom-satin-wig-bag",
    "custom-hair-extension-boxes",
    "custom-cotton-envelope-pouches"
  ],
  "custom-packaging-samples-guide": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box",
    "custom-eyelash-packaging-boxes"
  ],
  "valentines-day-packaging-timeline": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches",
    "luxury-gift-box-ribbon"
  ],
  "subscription-box-packaging-cost": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches",
    "custom-cotton-pouches"
  ],
  "subscription-box-packaging-buyers-guide": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches",
    "custom-muslin-drawstring-pouch"
  ],
  "candle-subscription-box-packaging": [
    "magnetic-closure-gift-box",
    "custom-cotton-pouches",
    "luxury-gift-box-ribbon"
  ],
  "beauty-subscription-box-contents": [
    "custom-velvet-pouches",
    "custom-pvc-bags",
    "custom-perfume-boxes"
  ],
  "jewelry-box-inserts-guide": [
    "custom-ring-boxes",
    "black-leather-jewelry-box",
    "custom-white-jewelry-box"
  ],
  "necklace-bracelet-packaging-guide": [
    "black-leather-jewelry-box",
    "custom-white-jewelry-box"
  ]
};
var ANCHORS = {
  "magnetic-gift-boxes-wholesale-guide": {
    "wholesale magnetic gift boxes": "magnetic-closure-gift-box",
    "magnetic box": "/custom-gift-boxes/"
  },
  "custom-packaging-small-business-guide": {
    "pouch": "custom-cotton-pouches"
  },
  "apparel-gift-boxes-guide": {
    "tissue plus ribbon": "luxury-gift-box-ribbon",
    "apparel box": "magnetic-closure-gift-box"
  },
  "custom-glasses-cases-pouches-guide": {
    "velvet for premium presentation": "custom-velvet-pouches",
    "cotton for printed GWP": "custom-cotton-pouches",
    "microfiber when the pouch": "custom-microfiber-pouches",
    "soft pouch": "/eyewear-packaging/"
  },
  "perfume-sample-cards-guide": {
    "custom perfume sample cards": "custom-perfume-sample-card-boxes",
    "subscription packaging collection": "/subscription-box-packaging/"
  },
  "surface-finishes-compared-guide": {
    "magnetic flip-top": "magnetic-closure-gift-box"
  },
  "custom-packaging-moq-sample-lead-times-2026": {
    "custom drawstring bags": "custom-muslin-drawstring-pouch",
    "custom eyelash packaging": "custom-eyelash-packaging-boxes",
    "custom perfume boxes": "custom-perfume-boxes",
    "Jewellery pouches": "custom-velvet-pouches"
  },
  "how-to-choose-a-custom-jewelry-pouch": {
    "velvet and suede": "custom-velvet-pouches",
    "cotton, muslin and linen": "custom-cotton-pouches"
  },
  "how-to-choose-custom-drawstring-bags": {
    "muslin bags": "custom-muslin-drawstring-pouch",
    "velvet and suede": "custom-velvet-pouches",
    "cotton, muslin and linen": "custom-cotton-pouches"
  },
  "custom-hair-extension-packaging-guide": {
    "drawstring pouch": "custom-satin-wig-bag",
    "velvet and suede": "custom-velvet-pouches"
  },
  "custom-clothing-apparel-packaging-guide": {
    "velvet and suede": "custom-velvet-pouches"
  },
  "how-to-read-a-packaging-specification-sheet": {
    "a shopping bag": "kraft-paper-shopping-bag",
    "a ribbon or textile closure": "luxury-gift-box-ribbon"
  },
  "how-to-customize-eyelash-boxes": {
    "eyelash boxes": "custom-eyelash-packaging-boxes",
    "magnetic flip-top": "magnetic-closure-gift-box"
  },
  "hair-extension-packaging-ideas": {
    "hair extension packaging": "custom-hair-extension-boxes"
  },
  "how-to-choose-custom-jewelry-boxes": {
    "magnetic flip-top": "magnetic-closure-gift-box",
    "ribbon tie": "luxury-gift-box-ribbon",
    "faux leather wrap": "black-leather-jewelry-box"
  },
  "custom-cosmetic-packaging-guide": {
    "clear PVC zip bags": "custom-pvc-bags",
    "magnetic flip-tops": "magnetic-closure-gift-box"
  },
  "custom-perfume-packaging-guide": {
    "rigid perfume boxes": "custom-perfume-boxes",
    "printed sample cards": "custom-perfume-sample-card-boxes",
    "satin pouch": "custom-satin-pouches"
  },
  "press-on-nail-packaging-guide": {
    "press-on nail box": "custom-press-on-nail-boxes"
  },
  "custom-wig-packaging-guide": {
    "satin drawstring wig bag": "custom-satin-wig-bag",
    "magnetic flip-top": "magnetic-closure-gift-box"
  },
  "valentines-day-packaging-timeline": {
    "subscription box packaging": "/subscription-box-packaging/"
  },
  "subscription-box-packaging-cost": {
    "subscription box packaging": "/subscription-box-packaging/"
  },
  "subscription-box-packaging-buyers-guide": {
    "subscription box packaging": "/subscription-box-packaging/",
    "magnetic flip-top": "magnetic-closure-gift-box",
    "cotton 200\u2013400 gsm": "custom-cotton-pouches"
  },
  "candle-subscription-box-packaging": {
    "candle subscription box": "/subscription-box-packaging/",
    "velvet pouch": "custom-velvet-pouches"
  },
  "beauty-subscription-box-contents": {
    "beauty subscription box": "/subscription-box-packaging/",
    "velvet pouch": "custom-velvet-pouches",
    "clear PVC zip bag": "custom-pvc-bags"
  }
};
function relatedProducts(slug) {
  if (!slug) return [];
  return (RELATED[slug] ?? []).map((s) => getProductBySlug(s)).filter((p) => p !== void 0);
}
function linkify(text, keyPrefix, ctx) {
  const hit = Object.entries(ctx.anchors).filter(([phrase2]) => !ctx.used.has(phrase2) && text.includes(phrase2)).sort((a, b) => text.indexOf(a[0]) - text.indexOf(b[0]) || b[0].length - a[0].length)[0];
  if (!hit) return [text];
  const [phrase, slug] = hit;
  const at = text.indexOf(phrase);
  ctx.used.add(phrase);
  return [
    ...at > 0 ? [text.slice(0, at)] : [],
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom13.Link, { to: slug.startsWith("/") ? slug : `/products/${slug}/`, className: "text-link", children: phrase }, `${keyPrefix}-a`),
    ...linkify(text.slice(at + phrase.length), `${keyPrefix}-r`, ctx)
  ];
}
function inline(text, keyPrefix, ctx) {
  const nodes = [];
  const push = (segment, key) => {
    if (ctx) nodes.push(...linkify(segment, key, ctx));
    else nodes.push(segment);
  };
  const re = /\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let m = null;
  let i = 0;
  while (m = re.exec(text)) {
    if (m.index > last) push(text.slice(last, m.index), `${keyPrefix}-t${i}`);
    if (m[1] !== void 0) nodes.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", { href: m[2], className: "text-link", children: m[1] }, `${keyPrefix}-a${i}`));
    else if (m[3] !== void 0) nodes.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: m[3] }, `${keyPrefix}-b${i}`));
    else nodes.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("em", { children: m[4] }, `${keyPrefix}-i${i}`));
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) push(text.slice(last), `${keyPrefix}-t`);
  return nodes;
}
var slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
function tocEntries(body) {
  return body.split("\n").filter((l) => l.startsWith("## ")).map((l) => {
    const text = l.slice(3).replace(/\*\*|\*/g, "");
    return { id: slugify(text), text };
  });
}
var isTableRow = (line) => /^\|.*\|$/.test(line.trim());
var isTableDivider = (line) => /^\|(\s*:?-{3,}:?\s*\|)+$/.test(line.trim());
var splitRow = (line) => line.trim().slice(1, -1).split("|").map((c) => c.trim());
function renderBody(body, anchors = {}) {
  const ctx = { anchors, used: /* @__PURE__ */ new Set() };
  const lines = body.split("\n");
  const out = [];
  let list = null;
  const flush = () => {
    if (!list) return;
    const Tag = list.ordered ? "ol" : "ul";
    out.push(
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Tag, { children: list.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: inline(item, `li${out.length}-${i}`) }, i)) }, `l${out.length}`)
    );
    list = null;
  };
  const flushTable = () => {
    const rows = tableRows.map(splitRow);
    tableRows = [];
    out.push(
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "article-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("table", { className: "article-table", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: rows[0].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { children: inline(h, `th${out.length}-${i}`) }, i)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tbody", { children: rows.slice(1).map((r, ri) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: r.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: inline(c, `td${out.length}-${ri}-${ci}`) }, ci)) }, ri)) })
      ] }) }, `tw${out.length}`)
    );
  };
  let tableRows = [];
  let quote = null;
  const flushQuote = () => {
    if (!quote) return;
    out.push(
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("blockquote", { className: "article-quote", children: quote.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: inline(q, `q${out.length}-${i}`) }, i)) }, `q${out.length}`)
    );
    quote = null;
  };
  lines.forEach((raw) => {
    const line = raw.trimEnd();
    if (isTableRow(line)) {
      if (tableRows.length === 1 && isTableDivider(line)) return;
      if (isTableDivider(line)) return;
      flushQuote();
      flush();
      tableRows.push(line);
      return;
    }
    if (tableRows.length) flushTable();
    if (!line.trim()) {
      flushQuote();
      flush();
      return;
    }
    const bq = line.match(/^>\s?(.*)$/);
    if (bq) {
      quote = quote ?? [];
      quote.push(bq[1]);
      return;
    }
    flushQuote();
    const ol = line.match(/^(\d+)\.\s+(.*)$/);
    const ul = line.match(/^-\s+(.*)$/);
    if (ol) {
      if (!list || !list.ordered) {
        flush();
        list = { ordered: true, items: [] };
      }
      list.items.push(ol[2]);
      return;
    }
    if (ul) {
      if (!list || list.ordered) {
        flush();
        list = { ordered: false, items: [] };
      }
      list.items.push(ul[1]);
      return;
    }
    flush();
    const figure = line.match(/^!\[([^\]]*)\]\((\/[^)\s]+)\)$/);
    if (figure) {
      out.push(
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("figure", { className: "article-figure", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: figure[2], alt: figure[1], width: 1200, height: 675, loading: "lazy" }),
          figure[1] ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("figcaption", { children: figure[1] }) : null
        ] }, `fig${out.length}`)
      );
    } else if (line.startsWith("### ")) out.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { id: slugify(line.slice(4).replace(/\*\*|\*/g, "")), children: inline(line.slice(4), `h3${out.length}`) }, out.length));
    else if (line.startsWith("## ")) out.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { id: slugify(line.slice(3).replace(/\*\*|\*/g, "")), children: inline(line.slice(3), `h2${out.length}`) }, out.length));
    else out.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: inline(line, `p${out.length}`, ctx) }, out.length));
  });
  if (tableRows.length) flushTable();
  flushQuote();
  flush();
  return out;
}
function Article() {
  const { slug } = (0, import_react_router_dom13.useParams)();
  const article = slug ? getArticleBySlug(slug) : void 0;
  const related = relatedProducts(slug);
  if (!article) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { className: "section", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "section-title", children: "Article not found" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_router_dom13.Link, { to: "/news/", className: "text-link", children: [
        "Back to News & Insights ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
      ] }) })
    ] }) });
  }
  const fontClass = article.fontFamily === "Arial" ? " article-font-arial" : "";
  const toc = tocEntries(article.body);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { className: `page-header${fontClass}`, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "eyebrow reveal", children: article.category }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "page-title reveal reveal-delay-1", children: article.title }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "news-meta reveal reveal-delay-2", style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { children: [
          "By ",
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom13.Link, { to: "/about/", className: "text-link", children: "Tina" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "news-meta-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: article.date }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "news-meta-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: article.readTime })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { className: `section article-section${fontClass}`, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "container article-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("figure", { className: "landing-hero", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: article.image, alt: article.imageAlt, width: article.imageWidth ?? 1600, height: article.imageHeight ?? 1e3 }) }),
      toc.length >= 3 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("nav", { className: "article-toc", "aria-label": "Table of contents", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "article-toc-title", children: "In this guide" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ol", { children: toc.map((t) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", { href: `#${t.id}`, className: "text-link", children: t.text }) }, t.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "article-body", children: renderBody(article.body, ANCHORS[article.slug]) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "article-cta reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "article-cta-facts", children: "MOQ 200 per design \xB7 free dieline at quotation \xB7 custom sample USD 25 + USD 20 shipping, 3-5 days" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom13.Link, { to: "/contact/", className: "btn-primary article-cta-btn", children: "Request a quote" })
      ] }),
      related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "article-related reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { children: "Related products" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "spec-list", children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_router_dom13.Link, { to: `/products/${p.slug}/`, className: "text-link", children: [
          p.name,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
        ] }) }, p.slug)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "article-back", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_router_dom13.Link, { to: "/news/", className: "text-link", children: [
        "Back to News & Insights ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
      ] }) })
    ] }) })
  ] });
}

// src/pages/Contact.tsx
var import_react11 = require("react");
var import_react_router_dom14 = require("react-router-dom");
var import_jsx_runtime13 = require("react/jsx-runtime");
var WEB3FORMS_KEY = "7532f731-6678-43dd-9553-7c18090e71d5";
var WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
var contactInfo = [
  {
    label: "Phone",
    value: "+86 186 2635 2096",
    href: "tel:+8618626352096",
    icon: "\u260E"
  },
  {
    label: "Email",
    value: "tina@elapack.com",
    href: "mailto:tina@elapack.com",
    icon: "\u2709"
  },
  {
    label: "WhatsApp",
    value: "+86 186 2635 2096",
    href: "https://wa.me/8618626352096",
    icon: "\u{1F4AC}"
  },
  {
    label: "Payment",
    value: "T/T \xB7 PayPal",
    href: null,
    icon: "\u25E0"
  },
  {
    label: "Factory",
    value: "Wuxi, Jiangsu, China",
    href: null,
    icon: "\u25C8"
  }
];
var projectTypes = [
  "Luxury Gift Boxes",
  "Shopping Bags",
  "Custom Ribbons",
  "Textile Packaging",
  "Full Brand Collection",
  "Other"
];
function Contact() {
  const [searchParams] = (0, import_react_router_dom14.useSearchParams)();
  const selectedProduct = getProductBySlug(searchParams.get("product") ?? "");
  const [submitted, setSubmitted] = (0, import_react11.useState)(false);
  const [sending, setSending] = (0, import_react11.useState)(false);
  const [failed, setFailed] = (0, import_react11.useState)(false);
  const [selectedType, setSelectedType] = (0, import_react11.useState)("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFailed(false);
    try {
      const data = new FormData(e.currentTarget);
      data.append("access_key", WEB3FORMS_KEY);
      data.append("subject", "New inquiry from elapack.com");
      data.append("from_name", "ELAPACK Website");
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: data });
      const json = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !json.success) throw new Error(json.message || "send failed");
      track("generate_lead", { form: "contact" });
      setSubmitted(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "eyebrow reveal", children: "Contact Us" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "Let's Begin a",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("br", {}),
        "Conversation"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: "Tell us about your brand and your packaging vision. We'll respond within one business day with next steps." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("section", { className: "section contact-section", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-info reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "contact-heading", children: "Get in Touch" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "contact-intro", children: "Whether you're an established luxury house or a growing brand, we'd love to hear from you. Reach us through any of the channels below." }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "contact-list", children: contactInfo.map((item) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-icon", children: item.icon }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-label", children: item.label }),
            item.href ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { href: item.href, className: "contact-value", children: item.value }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-value contact-value-text", children: item.value })
          ] })
        ] }, item.label)) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-market", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "contact-market-title", children: "Target Markets" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "market-tags-small", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "Europe" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "North America" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "United Kingdom" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "Scandinavia" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "contact-market-note", children: "Primary language: English. We serve mid-to-high-end brands and enterprise clients who value brand image, packaging quality, and supply chain stability." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "contact-form-wrap reveal reveal-delay-2", children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-success", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "success-icon", children: "\u2713" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "success-title", children: "Thank you." }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "success-text", children: "Your message has been received. A member of our team will reach out within one business day." }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "success-text", children: "While you wait, here are a few ways to move faster:" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-list", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-icon", children: "\u{1F4AC}" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-label", children: "Need an answer today?" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "a",
                {
                  href: "https://wa.me/8618626352096",
                  className: "contact-value",
                  children: "Message us on WhatsApp"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-icon", children: "\u25C8" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-label", children: "Preparing your brief?" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { href: "/products/", className: "contact-value", children: "Browse all products & materials" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-icon", children: "\u2709" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "contact-item-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "contact-label", children: "Have files to share?" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "a",
                {
                  href: "mailto:tina@elapack.com",
                  className: "contact-value",
                  children: "Email us directly with artwork or specs"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            className: "btn-outline",
            onClick: () => setSubmitted(false),
            children: "Send Another Message"
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("form", { className: "contact-form", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "contact-heading", children: "Request a Quote" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "contact-form-intro", children: "Share your project details and we'll prepare a tailored proposal for you." }),
        selectedProduct && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("p", { className: "contact-form-intro", children: [
          "Product: ",
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("strong", { children: selectedProduct.name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "input",
          {
            type: "checkbox",
            name: "botcheck",
            tabIndex: -1,
            autoComplete: "off",
            style: { display: "none" }
          }
        ),
        selectedProduct && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { type: "hidden", name: "product", value: selectedProduct.name }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "input",
          {
            type: "hidden",
            name: "project_type",
            value: selectedType || "Not specified"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "name", children: "Full Name *" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "input",
              {
                id: "name",
                name: "name",
                type: "text",
                required: true,
                placeholder: "Jane Doe"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "company", children: "Company / Brand" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "input",
              {
                id: "company",
                name: "company",
                type: "text",
                placeholder: "Your brand name"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "email", children: "Email *" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                required: true,
                placeholder: "jane@brand.com"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "phone", children: "Phone / WhatsApp" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "input",
              {
                id: "phone",
                name: "phone",
                type: "tel",
                placeholder: "+1 555 000 0000"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { children: "Project Type" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "chip-group", children: projectTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "button",
            {
              type: "button",
              className: `chip ${selectedType === type ? "is-selected" : ""}`,
              onClick: () => setSelectedType(type),
              children: type
            },
            type
          )) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "quantity", children: "Estimated Quantity" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "input",
            {
              id: "quantity",
              name: "quantity",
              type: "text",
              placeholder: "e.g. 5,000 pcs"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "message", children: "Project Details *" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "textarea",
            {
              id: "message",
              name: "message",
              required: true,
              rows: 5,
              placeholder: "Tell us about your brand, your packaging needs, timelines, and any specific materials or finishes you're considering."
            }
          )
        ] }),
        failed && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          "p",
          {
            className: "contact-form-error",
            style: { color: "#b3261e", margin: "0 0 1rem" },
            children: [
              "Something went wrong sending your message. Please email us directly at",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { href: "mailto:tina@elapack.com", children: "tina@elapack.com" }),
              "."
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            type: "submit",
            className: "btn-primary btn-full",
            disabled: sending,
            children: sending ? "Sending\u2026" : "Submit Request"
          }
        )
      ] }) })
    ] }) }) })
  ] });
}

// src/pages/Video.tsx
var import_react12 = require("react");
var import_react_router_dom15 = require("react-router-dom");
var import_jsx_runtime14 = require("react/jsx-runtime");
var processSteps2 = [
  {
    phase: "Early",
    title: "Requirements & Design",
    desc: "Detailed communication and free design \u2014 we listen to your brand, product, and goals, then translate them into structural and visual concepts.",
    image: "/about-materials.webp",
    points: [
      "Brand & product consultation",
      "Structural design concepts",
      "Material & finish recommendations",
      "Free design drafts"
    ]
  },
  {
    phase: "Middle",
    title: "Prototyping & Production",
    desc: "Free samples and fast production \u2014 we create physical prototypes for your approval, then move to manufacturing with precision at every stage.",
    image: "/about-factory.webp",
    points: [
      "Physical sample production",
      "Sample approval & refinement",
      "Mass production setup",
      "Rigorous QC protocols"
    ]
  },
  {
    phase: "Late",
    title: "Quality Testing & Delivery",
    desc: "High-standard quality inspection and reliable global delivery \u2014 every piece is checked before shipping to Europe and North America.",
    image: "/about-craft.webp",
    points: [
      "Multi-stage quality inspection",
      "Packaging & logistics management",
      "Reliable lead times",
      "Worldwide delivery"
    ]
  }
];
var successStories = [
  {
    client: "A UK High-Street Retailer",
    category: "Retail Packaging",
    solution: "Cost-Effective Luxury Packaging",
    image: "/images/carousel/kraft-bag.png",
    desc: "We designed a series of custom packaging for a UK high-street retailer, lowering packaging costs while enhancing shelf appeal."
  },
  {
    client: "A New York Jewelry House",
    category: "Jewelry Packaging",
    solution: "Luxury Jewelry Box Design",
    image: "/images/carousel/luxury-gift-box.png",
    desc: "We designed bespoke custom packaging boxes for a New York jewelry house, enhancing the brand's luxury appeal at the moment of unboxing."
  },
  {
    client: "A Heritage Pearl Maison",
    category: "Heritage Packaging",
    solution: "Timeless Jewelry Boxes",
    image: "/images/carousel/black-leather-box.png",
    desc: "Custom packaging for a heritage pearl maison reflects the brand's elegant temperament, combining timeless design with contemporary flair."
  },
  {
    client: "A Global Fashion Group",
    category: "Fashion Retail Packaging",
    solution: "Retail Packaging Program",
    image: "/images/carousel/exec-d88bc44e-a36e-4f12-b991-f3f746e07e39.png",
    desc: "We developed tailor-made packaging for a global fashion group that complements their high-fashion products with consistent quality at volume."
  }
];
var deliveryFeatures = [
  {
    title: "Reliable On-Time Delivery",
    desc: "Our global production capabilities and efficient logistics network ensure your custom packaging is delivered on time, every time."
  },
  {
    title: "Own Factory, 3 Production Lines",
    desc: "Our own facility runs three dedicated production lines for textile bags, rigid boxes, and gift sets \u2014 with direct air and sea freight to Europe and North America."
  },
  {
    title: "Competitive Global Reach",
    desc: "Our global reach enables us to offer competitive pricing and fast delivery, no matter where you are located."
  }
];
var faqs = [
  {
    q: "What types of products do you offer?",
    a: "We offer premium gift boxes, luxury shopping bags, custom ribbons, textile packaging, and complete brand packaging collections \u2014 all fully customizable to your specifications."
  },
  {
    q: "Can I customize packaging according to my specific needs?",
    a: "Absolutely. Every product we make is custom \u2014 from dimensions, materials, and structural design to finishes, colors, and branding. Share your vision and we'll bring it to life."
  },
  {
    q: "Do you provide eco-friendly packaging options?",
    a: "We offer eco-friendly options including recycled kraft paper, natural cotton, and linen, plus recyclable structures where local facilities allow. Certification documents are available on request."
  },
  {
    q: "What is the process for getting started with a custom project?",
    a: "It starts with a consultation to understand your brand and product. We then create design concepts, produce physical samples for approval, and move to production with QC at every stage."
  },
  {
    q: "How long does it take to complete a custom order?",
    a: "Typical lead times range from 15\u201330 days for production after sample approval, depending on complexity and quantity. We'll provide a precise timeline during consultation."
  },
  {
    q: "What is the minimum order quantity (MOQ) for custom packaging?",
    a: "MOQs vary by product \u2014 we support low-MOQ options for independent brands and scale up to high-volume production for global retail. Contact us for specifics on your project."
  },
  {
    q: "Where are your production facilities located?",
    a: "Our production facility is located in Wuxi, Jiangsu, China, with global logistics support ensuring reliable delivery to Europe, North America, and worldwide."
  },
  {
    q: "Can I see samples before placing a full order?",
    a: "Yes. We produce physical samples for your approval before mass production. Sample costs may apply and are often credited toward your final order."
  }
];
function Video() {
  const [openFaq, setOpenFaq] = (0, import_react12.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "page-header custom-solution-header", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "eyebrow reveal", children: "Custom Solutions" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "Packaging Tailored",
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
        "to Your Brand"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: "From exquisite jewelry boxes to elegant gift packaging and sustainable paper cosmetics solutions \u2014 we offer comprehensive custom packaging services that bring your brand vision to life." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "section", style: { paddingTop: "3rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "eyebrow", children: "Factory Tour" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Inside Our Factory" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "section-subtitle", children: "Three production lines in Wuxi, Jiangsu \u2014 textile bags, rigid boxes and gift sets, made to your spec." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "about-video-wrapper reveal", style: { maxWidth: "900px", margin: "0 auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "video",
        {
          className: "about-video-poster",
          poster: "/factory-video-poster.webp",
          preload: "none",
          controls: true,
          playsInline: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("source", { src: "/videos/factory-tour.mp4", type: "video/mp4" }),
            "Your browser does not support the video tag."
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "section custom-solution-intro-section", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "custom-solution-intro-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "section-title", style: { marginTop: 0 }, children: "Our Custom Services" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "custom-solution-text", children: "ELAPACK offers comprehensive custom packaging services tailored to your brand's needs. From exquisite jewelry boxes that showcase diamonds with museum-worthy presentations, to elegant gift boxes designed for luxury brand gifting, and sophisticated paper cosmetics packaging that balances sustainability with premium feel \u2014 we cover it all." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "custom-solution-text", children: "Our design team leverages creativity, cutting-edge design tools, and industry-leading technology to craft custom packaging solutions that resonate with your brand's vision. Whether you need custom jewelry packaging boxes or unique personalized packaging, we have the expertise to bring your vision to life." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "custom-solution-intro-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom15.Link, { to: "/products/", className: "btn-primary", children: "Explore Products" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom15.Link, { to: "/contact/", className: "btn-outline", children: "Request a Quote" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "custom-solution-intro-images reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "img",
          {
            src: "/product-giftbox.webp",
            alt: "Custom luxury gift box",
            loading: "lazy",
            width: 1408,
            height: 768
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "img",
          {
            src: "/product-collection.webp",
            alt: "Custom packaging collection",
            loading: "lazy",
            width: 1408,
            height: 768
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "section custom-solution-process-section", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "eyebrow", children: "How We Work" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Customization Process" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "section-subtitle", children: "Our custom packaging process is seamless and collaborative. From initial concept to prototype creation, we work closely with you to ensure every detail enhances your brand's value." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "process-steps-grid", children: processSteps2.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "div",
        {
          className: `process-step-card reveal reveal-delay-${i + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "process-step-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: step.image, alt: step.title, loading: "lazy", width: 1408, height: 768 }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "process-step-phase", children: step.phase })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "process-step-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "process-step-title", children: step.title }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "process-step-desc", children: step.desc }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { className: "process-step-points", children: step.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { className: "process-step-point", children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "case-point-dot" }),
                p
              ] }, p)) })
            ] })
          ]
        },
        step.title
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "section custom-solution-stories-section", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "eyebrow", children: "Our Success Stories" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Brands We've Transformed" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "section-subtitle", children: "Explore the success stories of brands we've helped transform through our custom packaging solutions. From high-end luxury packaging to innovative eco-friendly designs, see how we've partnered with leading brands to create packaging that truly stands out." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "success-stories-grid", children: successStories.map((story, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "div",
        {
          className: `success-story-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "success-story-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: story.image, alt: story.client, loading: "lazy", width: 1254, height: 1254 }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "success-story-category", children: story.category })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "success-story-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "success-story-client", children: story.client }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "success-story-title", children: story.solution }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "success-story-desc", children: story.desc })
            ] })
          ]
        },
        story.client
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "success-stories-cta reveal", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom15.Link, { to: "/contact/", className: "btn-primary", children: "Start Your Project" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "section custom-solution-delivery-section", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "eyebrow", children: "Global Reach" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Global Production & Delivery" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "delivery-features-grid", children: deliveryFeatures.map((feat, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "div",
        {
          className: `delivery-feature-card reveal reveal-delay-${i + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "delivery-feature-title", children: feat.title }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "delivery-feature-desc", children: feat.desc })
          ]
        },
        feat.title
      )) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "section custom-solution-faq-section", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "eyebrow", children: "Questions & Answers" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "faq-list reveal reveal-delay-1", children: faqs.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "div",
        {
          className: `faq-item ${openFaq === i ? "is-open" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
              "button",
              {
                className: "faq-question",
                onClick: () => setOpenFaq(openFaq === i ? null : i),
                "aria-expanded": openFaq === i,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { children: [
                    "Q: ",
                    faq.q
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "faq-toggle", "aria-hidden": "true", children: openFaq === i ? "\u2212" : "+" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "faq-answer", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: faq.a }) })
          ]
        },
        faq.q
      )) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "faq-cta reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: "Still have questions? We're here to help." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom15.Link, { to: "/contact/", className: "btn-outline", children: "Contact Us" })
      ] })
    ] }) })
  ] });
}

// src/pages/Landing.tsx
var import_react13 = require("react");

// src/data/landings.ts
var HOW_IT_WORKS_SHARED = [
  { title: "Send your spec", desc: "Share size, material, structure, branding and quantity." },
  { title: "Confirm", desc: "We confirm materials and Pantone match. Free stock samples ship in 2\u20133 days; custom printed samples in 3\u20135 days (USD 25 + USD 20 shipping)." },
  { title: "We make it", desc: "Your order, made to your spec, in 15\u201320 days production." },
  { title: "We ship it", desc: "By air or by sea from Shanghai or Shenzhen." }
];
var CERT_LINE = "ISO 9001 \u2014 production and sales of paper and textile packaging products";
var landings = [
  {
    slug: "pouches-bags",
    hero: { src: "/images/factory/elapack-09.jpg", alt: "Sewing custom suede pouches on ELAPACK's textile production line" },
    gallery: [
      { src: "/images/factory/elapack-08.jpg", alt: "Fabric library: velvet, suede, cotton and more \u2014 standard materials in stock" },
      { src: "/images/factory/elapack-04.jpg", alt: "Screen printing station for custom logo printing on textile packaging" },
      { src: "/images/factory/elapack-03.jpg", alt: "Sewing floor producing custom fabric pouches \u2014 one of ELAPACK's three production lines" }
    ],
    eyebrow: "Pouches & Bags",
    h1: "Custom Fabric Pouches & Bags \u2014 Made to Your Spec, from 200 Pieces",
    subhead: "Your size. Your fabric. Your closure. Your logo. Cut, sewn and finished together.",
    metaDescription: "Custom textile pouches and bags for jewellery, fragrance, beauty, hair and fashion brands \u2014 velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, in the size, closure and branding you specify. MOQ from 200 pieces.",
    intro: "ELAPACK makes custom fabric pouches and bags for brands selling in the US and Europe. We are a trade-and-manufacturing company founded in 2018 with three production lines, ISO 9001 certified for the production and sales of paper and textile packaging products, and we make each order to your specification \u2014 not from stock \u2014 so the pouch matches your product and your brand, not the other way round.",
    why: {
      heading: "Why ELAPACK",
      items: [
        { title: "Your size, not a stock size", desc: "Standard bands run from 7\xD79 cm jewellery pouches up to 30\xD740 cm wig bags, and any custom size in between." },
        { title: "Your fabric", desc: "Velvet, suede, cotton, muslin, satin, linen, microfiber or non-woven \u2014 plus custom developments on request." },
        { title: "Your closure and your branding", desc: "Drawstring, zipper, flap, tuck or button; screen print, foil, deboss, woven label, embroidery or transfer, with Pantone colour matching." },
        { title: "A low barrier to start", desc: "MOQ from 200 pieces, including custom sizes." }
      ]
    },
    tables: [
      {
        heading: "Standard sizes",
        note: "Any custom size made to your spec.",
        columns: ["Band", "Sizes", "Typical use"],
        rows: [
          ["Small", "7\xD79 \xB7 8\xD710 \xB7 10\xD712 cm", "Jewellery \u2014 rings, earrings, pendants, bracelets"],
          ["Medium", "12\xD715 \xB7 15\xD720 cm", "Fragrance & gift \u2014 candles, soaps, beauty items, gifts"],
          ["Large", "16\xD723 \xB7 20\xD730 \xB7 30\xD740 cm", "Hair & beauty \u2014 wigs, bundles, sets"]
        ]
      },
      {
        heading: "Fabrics",
        note: "Custom developments on request.",
        columns: ["Fabric", "Reads as"],
        rows: [
          ["Velvet / suede", "Plush, premium, gift-like"],
          ["Cotton / muslin / linen", "Natural, understated, prints crisply"],
          ["Satin", "Smooth, dressy"],
          ["Microfiber / non-woven", "Practical, economical"]
        ]
      }
    ],
    lists: [
      { heading: "Closures", items: ["Drawstring (cord or ribbon finish)", "Zipper", "Flap", "Tuck", "Button", "Custom"] },
      { heading: "Branding", items: ["Screen print", "Foil", "Deboss", "Woven label", "Embroidery", "Transfer \u2014 with Pantone colour matching"] }
    ],
    howItWorks: HOW_IT_WORKS_SHARED,
    moq: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" },
      { label: "Certifications", value: CERT_LINE }
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Small pouches for rings, earrings, pendants and eyewear." },
      { title: "Fragrance", desc: "Medium drawstring bags for candles, soaps and fragrance gifts." },
      { title: "Hair & beauty", desc: "Large bags for wigs, bundles and sets." },
      { title: "Fashion", desc: "Pouches and bags for accessories and garments." },
      { title: "Gift", desc: "Gift-ready pouches and bag-in-box combinations." }
    ],
    ctaTitle: "Request a quote for your custom pouch or bag"
  },
  {
    slug: "boxes",
    hero: { src: "/images/factory/elapack-01.jpg", alt: "Rigid box assembly line at ELAPACK \u2014 boxes made to order, not from stock" },
    gallery: [
      { src: "/images/factory/elapack-06.jpg", alt: "Automated box-making machine in ELAPACK's paper packaging workshop" }
    ],
    eyebrow: "Boxes",
    h1: "Custom Rigid, Folding & Magnetic Boxes \u2014 Made to Your Spec, from 200 Pieces",
    subhead: "Your size. Your structure. Your finish. Your logo. Built around your product.",
    metaDescription: "Custom packaging boxes \u2014 rigid, folding carton and magnetic closure boxes with optional EVA, sponge, pulp or flocked inserts, in your size, finish and branding. MOQ from 200 pieces.",
    intro: "ELAPACK makes custom boxes for brands selling in the US and Europe. We are a trade-and-manufacturing company founded in 2018 with three production lines, ISO 9001 certified for the production and sales of paper and textile packaging products, and we make each order to your specification \u2014 not from stock \u2014 so the box fits your product and carries your brand, not the other way round.",
    why: {
      heading: "Box styles",
      items: [
        { title: "Rigid boxes", desc: "Thick, non-collapsible board; the premium, gift-ready structure." },
        { title: "Folding cartons", desc: "Printed paperboard that ships flat; practical and economical." },
        { title: "Magnetic closure boxes", desc: "Rigid boxes with a built-in magnetic flap; an unboxing moment." },
        { title: "Corrugated mailer boxes", desc: "Printed corrugated mailers for e-commerce and subscription shipping \u2014 made to your spec, from 200 pieces." },
        { title: "Custom structures", desc: "Made to your spec on request \u2014 wrap colour matched to your Pantone reference, even for a single box style." }
      ]
    },
    tables: [
      {
        heading: "Inserts",
        note: "Boxes can include inserts to hold the product in place \u2014 custom inserts on request.",
        columns: ["Insert", "Best for"],
        rows: [
          ["EVA", "Contoured, precise fit"],
          ["Sponge", "Soft cushioning"],
          ["Molded pulp", "Economical, eco-friendly structure"],
          ["Flocked", "Velvet-touch luxury finish"]
        ]
      }
    ],
    lists: [
      { heading: "Sizes", items: ["Standard sizes: 8\xD78\xD73 cm \xB7 10\xD710\xD73 cm", "Any custom size made to your spec"] },
      {
        heading: "Finishes & branding",
        items: ["Matt lamination", "Glossy lamination", "Varnishing", "Stamping", "Embossing", "UV coating", "Gold foil \u2014 with Pantone colour matching", "Custom finishes on request"]
      }
    ],
    howItWorks: HOW_IT_WORKS_SHARED,
    moq: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" },
      { label: "Certifications", value: CERT_LINE }
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Small rigid boxes with fitted inserts." },
      { title: "Fragrance & gift", desc: "Magnetic and rigid boxes for candles, soaps and fragrance gifts." },
      { title: "Hair & beauty", desc: "Boxes for wig and bundle packaging sets." },
      { title: "Fashion", desc: "Folding cartons and rigid boxes for accessories and garments." }
    ],
    ctaTitle: "Request a quote for your custom box"
  },
  {
    slug: "sets",
    hero: { src: "/images/factory/elapack-02.jpg", alt: "ELAPACK design team preparing pouch and box dielines for a custom packaging set" },
    eyebrow: "Sets & Bundles",
    h1: "Custom Packaging Sets \u2014 Pouch, Box & More, Made to Work Together",
    subhead: "One spec. One supplier. Pouch, box and insert that match \u2014 piece to piece.",
    metaDescription: "Custom packaging sets for jewellery, fragrance, beauty, hair and fashion brands \u2014 pouches, boxes and inserts designed together as one coordinated set, colour-matched to your Pantone reference. MOQ from 200 pieces.",
    intro: "ELAPACK makes custom packaging sets for brands selling in the US and Europe. We are a trade-and-manufacturing company founded in 2018 with three production lines, ISO 9001 certified for the production and sales of paper and textile packaging products. Because pouches and boxes are made under one roof, the colour, material and branding match across every piece of the set \u2014 not roughly, but by spec.",
    why: {
      heading: "What a set can include",
      items: [
        { title: "Pouch + box", desc: "The classic pairing." },
        { title: "Box + insert + pouch", desc: "Retail-ready, piece to piece." },
        { title: "With a card", desc: "A thank-you card, company profile, slogan, design or product-showcase card, customised to match the set." },
        { title: "Custom combinations", desc: "Built around your product on request." }
      ]
    },
    tables: [],
    lists: [
      {
        heading: "How sets come together",
        items: [
          "Every piece is designed as one: unified design, colour-matched to your Pantone reference.",
          "You choose how it ships \u2014 packed and delivered as one set, or packed per piece, whichever suits your needs."
        ]
      }
    ],
    howItWorks: [
      { title: "Send your spec", desc: "What goes in the set, per-piece size, material, branding, quantity." },
      { title: "Confirm", desc: "We confirm materials and Pantone match. Free stock samples ship in 2\u20133 days; custom printed samples in 3\u20135 days (USD 25 + USD 20 shipping)." },
      { title: "We make it", desc: "Your order, made to your spec, in 15\u201320 days production." },
      { title: "We ship it", desc: "By air or by sea from Shanghai or Shenzhen, packed as one set or per piece." }
    ],
    moq: [
      { label: "MOQ", value: "200 pieces, whether the set includes a box or not" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" },
      { label: "Certifications", value: CERT_LINE }
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Pouch + box sets with fitted inserts." },
      { title: "Fragrance & gift", desc: "Candle and gift sets: box, pouch, and insert as one." },
      { title: "Hair & beauty", desc: "Wig and bundle sets for retail-ready presentation." },
      { title: "Fashion", desc: "Accessory and garment packaging sets." }
    ],
    ctaTitle: "Request a quote for your custom packaging set"
  }
];
var getLandingBySlug = (slug) => landings.find((l) => l.slug === slug);

// src/pages/Landing.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function Landing({ slug }) {
  const landing = getLandingBySlug(slug);
  (0, import_react13.useEffect)(() => {
    if (landing) document.title = `${landing.eyebrow} | ELAPACK`;
  }, [landing]);
  if (!landing) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "eyebrow reveal", children: landing.eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { className: "page-title reveal reveal-delay-1", children: landing.h1 }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: landing.subhead })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "section-header-center reveal", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "about-text", style: { maxWidth: "820px", margin: "0 auto" }, children: landing.intro }) }),
      landing.hero && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("figure", { className: "landing-hero reveal", style: { marginTop: "2.5rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: landing.hero.src, alt: landing.hero.alt, loading: "lazy", width: 1600, height: 1e3 }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "section-header-center reveal", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: landing.why.heading }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "values-grid", children: landing.why.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: `value-card reveal reveal-delay-${i % 4 + 1}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "value-title", children: item.title }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "value-desc", children: item.desc })
      ] }, item.title)) })
    ] }) }),
    landing.tables.map((table) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem", fontSize: "1.75rem" }, children: table.heading }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("table", { className: "spec-table", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: table.columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: col }, col)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tbody", { children: table.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: row.map((cell, ci) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: cell }, ci)) }, row[0])) })
      ] }) }),
      table.note && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "markets-note", style: { marginTop: "1rem" }, children: table.note })
    ] }) }) }, table.heading)),
    landing.lists.map((list) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem", fontSize: "1.75rem" }, children: list.heading }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "spec-list", children: list.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: item }, item)) })
    ] }) }) }, list.heading)),
    landing.gallery && landing.gallery.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "landing-gallery", children: landing.gallery.map((img) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("figure", { className: "landing-gallery-item reveal", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: img.src, alt: img.alt, loading: "lazy", width: 1600, height: 1e3 }) }, img.src)) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "section-header-center reveal", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "How it works" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "values-grid", children: landing.howItWorks.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: `value-card reveal reveal-delay-${i % 4 + 1}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "value-title", children: `${String(i + 1).padStart(2, "0")} \xB7 ${step.title}` }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "value-desc", children: step.desc })
      ] }, step.title)) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "MOQ & lead time" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "spec-list", children: landing.moq.map((row) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "markets-note", style: { marginBottom: "0.5rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("strong", { children: [
          row.label,
          ":"
        ] }),
        " ",
        row.value
      ] }, row.label)) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "section-header-center reveal", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Who it's for" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "values-grid", children: landing.audience.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: `value-card reveal reveal-delay-${i % 4 + 1}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "value-title", children: a.title }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "value-desc", children: a.desc })
      ] }, a.title)) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "markets-box reveal", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: landing.ctaTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "markets-note", children: [
        "Message Tina on WhatsApp or phone:",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("a", { href: "https://wa.me/8618626352096", children: "+86 186 2635 2096" }),
        " ",
        "\xB7 Email: ",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("a", { href: "mailto:tina@elapack.com", children: "tina@elapack.com" })
      ] })
    ] }) }) })
  ] });
}

// src/pages/Collection.tsx
var import_react14 = require("react");
var import_react_router_dom16 = require("react-router-dom");

// src/data/collections.ts
var collections = [
  {
    slug: "custom-jewelry-boxes",
    eyebrow: "Jewelry Boxes",
    h1: "Custom Jewelry Boxes with Logo",
    subhead: "Rigid, magnetic and wrapped boxes for rings, earrings, necklaces and bracelets \u2014 your size, structure, finish and logo.",
    metaDescription: "Custom jewelry boxes with your logo \u2014 rigid lift-off lids, magnetic flip-tops, ribbon-tie and faux leather boxes with EVA, velvet or pulp inserts. MOQ from 200 pieces, free stock samples.",
    intro: "ELAPACK makes custom jewelry boxes for brands selling in the US and Europe. Founded in 2018 and ISO 9001 certified for the production and sales of paper and textile packaging products, we make each order to your specification \u2014 box structure, wrap colour, interior insert and branding \u2014 so the box fits your jewelry and carries your brand.",
    sections: [
      {
        heading: "Box structures",
        items: [
          { title: "Rigid lift-off lid", desc: "Full-height lid over a rigid base \u2014 the premium, gift-ready structure." },
          { title: "Magnetic flip-top", desc: "Hidden magnets give a clean exterior and a satisfying slow close." },
          { title: "Ribbon tie", desc: "Satin ribbon closure that becomes part of the unboxing ritual." },
          { title: "Faux leather wrap", desc: "Textured wrap with embossed branding for jewelry and gift programs." }
        ]
      },
      {
        heading: "By jewelry type",
        items: [
          { title: "Ring boxes", desc: "Single and double ring slots with velvet or foam cushions." },
          { title: "Earring & pendant boxes", desc: "Fitted inserts that hold pairs and chains in place." },
          { title: "Bracelet & small gift boxes", desc: "Compact footprints for retail counter and gifting." },
          { title: "Complete jewelry sets", desc: "Box, pouch and insert designed together as one program." }
        ]
      },
      {
        heading: "Inserts & interiors",
        items: [
          { title: "EVA", desc: "Contoured, precise fit for each piece." },
          { title: "Sponge", desc: "Soft cushioning under velvet or satin covering." },
          { title: "Molded pulp", desc: "Economical structure with a natural look." },
          { title: "Flocked & velvet", desc: "Velvet-touch luxury finish for premium lines." }
        ]
      },
      {
        heading: "Branding & finishes",
        items: [
          { title: "Foil stamping", desc: "Gold or metallic foil logos on lid and base." },
          { title: "Embossing & debossing", desc: "Blind relief marks that read premium without colour." },
          { title: "Spot UV & lamination", desc: "Matte or gloss laminate with spot UV accents." },
          { title: "Pantone-matched wrap", desc: "Wrap colour matched to your Pantone reference, with interior lid printing." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "black-leather-jewelry-box",
      "custom-white-jewelry-box",
      "custom-ring-boxes",
      "luxury-gift-box-ribbon",
      "magnetic-closure-gift-box"
    ],
    ctaTitle: "Request a quote for your custom jewelry box",
    guideSlugs: [
      "how-to-choose-custom-jewelry-boxes",
      "jewelry-box-inserts-guide",
      "necklace-bracelet-packaging-guide",
      "custom-packaging-samples-guide",
      "custom-packaging-moq-sample-lead-times-2026"
    ]
  },
  {
    slug: "eyewear-packaging",
    eyebrow: "Eyewear Packaging",
    h1: "Custom Eyewear Packaging \u2014 Boxes & Pouches for Eyewear Brands",
    subhead: "Glasses boxes and fabric pouches that protect frames and carry your logo, made to your spec.",
    metaDescription: "Custom eyewear packaging \u2014 rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes and pouches from 200 pieces. Free stock samples.",
    factBlock: {
      updated: "October 2026",
      paragraph: "ELAPACK eyewear packaging \u2014 key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, covering printed glasses boxes, fabric pouches and fitted inserts, custom sizes included. Production takes 15\u201320 days for orders of 200\u201320,000 pieces and 20\u201325 days for 20,000\u201350,000 pieces, counted from sample approval and deposit. A free stock sample ships in 2\u20133 days (sample shipping USD 20, courier transit 4\u20137 days); a custom sample costs USD 25 plus USD 20 shipping, is built in 3\u20135 days from confirmed artwork, and a full custom sample round lands in roughly two weeks at about USD 45 all-in. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal."
    },
    intro: "Custom packaging for eyewear and sunglasses brands selling in the US and Europe. We make both sides of the program \u2014 printed boxes that present and protect the frames, and fabric pouches that keep them safe after the sale \u2014 matched in colour and branding. Folded glasses set the footprint: share your frame dimensions and we build the box and insert around them.",
    sections: [
      {
        heading: "Eyewear boxes",
        items: [
          { title: "Rigid boxes", desc: "Thick board with a premium feel for flagship frames." },
          { title: "Magnetic flip-top", desc: "A clean open-close ritual for retail and unboxing." },
          { title: "Folding cartons", desc: "Printed paperboard that ships flat \u2014 practical and economical." }
        ]
      },
      {
        heading: "Eyewear pouches & sleeves",
        items: [
          { title: "Velvet drawstring", desc: "Plush protection for finished frames and sunglasses." },
          { title: "Faux leather envelope", desc: "Structured snap-closure sleeve that mails flat." },
          { title: "Cotton & microfiber", desc: "Soft, gentle fabrics for everyday case-in-pocket use." }
        ]
      },
      {
        heading: "Branding",
        items: [
          { title: "Logo print & foil", desc: "Silkscreen, hot stamp or foil on box and pouch." },
          { title: "Woven labels & embroidery", desc: "Quiet brand marks stitched into fabric." },
          { title: "Pantone matching", desc: "Box wrap and pouch fabric aligned to your brand colour." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces \u2014 boxes and pouches alike, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "black-leather-jewelry-box",
      "custom-velvet-pouches",
      "custom-microfiber-pouches",
      "leather-envelope-pouch"
    ],
    ctaTitle: "Request a quote for your eyewear packaging",
    guideSlugs: [
      "custom-glasses-cases-pouches-guide",
      "custom-rigid-boxes-guide",
      "packaging-inserts-guide",
      "custom-logo-pouches-guide"
    ]
  },
  {
    slug: "custom-jewelry-pouches",
    eyebrow: "Jewelry Pouches",
    h1: "Custom Jewelry Pouches with Your Logo",
    subhead: "Velvet, cotton, satin and microfiber pouches \u2014 your fabric, closure, size and branding.",
    metaDescription: "Custom jewelry pouches with logo \u2014 velvet, suede, cotton, muslin, satin, linen and microfiber drawstring and flap pouches in your size and Pantone colour. MOQ from 200 pieces, free stock samples.",
    intro: "Fabric jewelry pouches for brands that want the packaging to feel like part of the piece. Choose the fabric, the closure and the branding; we make each pouch to your spec \u2014 from standard 7\xD79 cm jewelry sizes up to large gift bags. MOQ from 200 pieces, including custom sizes.",
    sections: [
      {
        heading: "Fabrics",
        items: [
          { title: "Velvet", desc: "Dense pile that cushions chains and stones." },
          { title: "Cotton", desc: "Natural, printable and gently protective." },
          { title: "Satin", desc: "A smooth, lustrous finish for gift programs." },
          { title: "Organza", desc: "Sheer, lightweight and gift-ready \u2014 organza pouches made to your size, from 200 pieces." },
          { title: "More fabrics", desc: "Suede, muslin, linen, microfiber and non-woven \u2014 plus custom developments on request." }
        ]
      },
      {
        heading: "Closures",
        items: [
          { title: "Drawstring", desc: "Cotton, satin or polyester cord, colour-matched." },
          { title: "Flap", desc: "Envelope silhouette with snap or tuck closure." },
          { title: "Zipper & button", desc: "Secure options for heavier or multi-piece sets." }
        ]
      },
      {
        heading: "Clear PVC zip pouches",
        items: [
          { title: "Clear jewelry pouches", desc: "See-through PVC zip bags that show the piece without opening \u2014 MOQ from 200 pieces." },
          { title: "Retail & travel uses", desc: "Counter display, travel protection and set organizing in one transparent format." }
        ]
      },
      {
        heading: "Branding",
        items: [
          { title: "Screen printing", desc: "Single to multi-colour prints with water-based inks." },
          { title: "Foil & deboss", desc: "Hot-stamped logos that read premium without noise." },
          { title: "Woven label & embroidery", desc: "Stitched marks inside or outside the pouch." },
          { title: "Pantone matching", desc: "Fabric and cord dyed to your brand colour." }
        ]
      },
      {
        heading: "Sizes",
        items: [
          { title: "Standard band", desc: "From 7\xD79 cm jewelry pouches up to 30\xD740 cm gift and wig bags." },
          { title: "Travel jewelry pouches", desc: "Closable formats that keep rings, chains and small pieces secure in transit and in luggage \u2014 drawstring, flap or zip, sized to your jewelry set." },
          { title: "Any custom size", desc: "Made to your product dimensions, MOQ unchanged." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "custom-velvet-pouches",
      "custom-cotton-pouches",
      "custom-cotton-envelope-pouches",
      "custom-satin-pouches",
      "custom-muslin-drawstring-pouch",
      "custom-microfiber-pouches",
      "leather-envelope-pouch",
      "custom-pvc-bags"
    ],
    ctaTitle: "Request a quote for your custom jewelry pouches",
    guideSlugs: [
      "how-to-choose-a-custom-jewelry-pouch",
      "packaging-colour-tolerance-explained"
    ]
  },
  {
    slug: "custom-wig-packaging",
    eyebrow: "Wig & Hair Packaging",
    h1: "Custom Wig Packaging \u2014 Satin Wig Bags & Boxes",
    subhead: "Satin wig bags in the standard 30\xD740 cm format, plus boxes and sets for wig and hair extension brands \u2014 your size, colour and logo.",
    metaDescription: "Custom wig packaging with your logo \u2014 satin drawstring wig bags in the standard 30\xD740 cm format, plus rigid and magnetic boxes for wigs and hair extensions. Bags from 200 pieces. Free stock samples.",
    intro: "Custom packaging for wig and hair extension brands selling in the US and Europe. We make the satin bags that carry and protect the hair \u2014 smooth interiors that keep fibers from tangling \u2014 and the boxes that present the program at retail, matched in colour and branding. Photography of our wig packaging is in progress; every fact on this page is our confirmed trade terms, and stock samples ship free so you can judge materials in hand.",
    sections: [
      {
        heading: "Wig bags",
        items: [
          { title: "Satin drawstring bag", desc: "The standard 30\xD740 cm carrier \u2014 smooth satin lets fibers slide instead of snagging." },
          { title: "Cotton envelope pouches", desc: "Structured cotton carriers in flap-snap, flat-pocket and zip-envelope styles \u2014 from 200 pieces." },
          { title: "Sized to your format", desc: "Any wig or extension length made to your dimensions, MOQ unchanged." },
          { title: "Travel & storage bags", desc: "Larger formats with cord or zipper closures for storage and travel programs." }
        ]
      },
      {
        heading: "Boxes & cases",
        items: [
          { title: "Rigid wig boxes", desc: "Structured boxes that present wigs and extensions upright at retail." },
          { title: "Hair extension boxes", desc: "Sleeve, drawer and magnetic boxes made to bundle formats \u2014 MOQ from 200 pieces." },
          { title: "Magnetic flip-top", desc: "A clean open-close ritual for premium hair programs." },
          { title: "Inserts & sleeves", desc: "Fitted inserts and satin sleeves that hold the presentation in place." }
        ]
      },
      {
        heading: "Branding",
        items: [
          { title: "Logo print & label", desc: "Silkscreen, heat transfer or woven label on bag and box." },
          { title: "Pantone matching", desc: "Satin and box wrap aligned to your brand colour." },
          { title: "Hang tags & cards", desc: "Care instructions and brand cards bundled with the bag." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces \u2014 bags, wig boxes and extension boxes alike" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "custom-satin-wig-bag",
      "custom-cotton-envelope-pouches",
      "custom-hair-extension-boxes",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon"
    ],
    ctaTitle: "Request a quote for your custom wig packaging",
    guideSlugs: [
      "custom-wig-packaging-guide",
      "custom-hair-extension-packaging-guide",
      "hair-extension-packaging-ideas"
    ]
  },
  {
    slug: "custom-jewelry-packaging",
    eyebrow: "Jewelry Packaging",
    h1: "Custom Jewelry Packaging \u2014 Boxes, Pouches & Display",
    subhead: "One manufacturer for the whole jewelry program \u2014 logo boxes, fabric pouches, display and sets, matched in colour and branding.",
    metaDescription: "Custom jewelry packaging from one manufacturer \u2014 logo jewelry boxes, velvet, satin and cotton pouches, display sets and complete box-plus-pouch programs. Boxes and pouches from 200 pieces. Free stock samples.",
    factBlock: {
      updated: "October 2026",
      paragraph: "ELAPACK jewelry packaging \u2014 key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, covering jewelry boxes, fabric pouches, display sets and complete box-plus-pouch programs, custom sizes included. Production takes 15\u201320 days for orders of 200\u201320,000 pieces and 20\u201325 days for 20,000\u201350,000 pieces, counted from sample approval and deposit. A free stock sample ships in 2\u20133 days (sample shipping USD 20, courier transit 4\u20137 days); a custom sample costs USD 25 plus USD 20 shipping, is built in 3\u20135 days from confirmed artwork, and a full custom sample round lands in roughly two weeks at about USD 45 all-in. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal."
    },
    intro: "Jewelry brands rarely need just a box. The retail moment needs a fitted box, the after-sale needs a pouch, the counter needs display \u2014 and they all read better when they match. ELAPACK makes all sides of the jewelry program in-house: rigid and magnetic boxes with your logo, fabric pouches in seven materials, and velvet display sets \u2014 colour-matched and branded as one system. Founded in 2018 and ISO 9001 certified for the production and sales of paper and textile packaging products.",
    sections: [
      {
        heading: "Jewelry boxes",
        items: [
          { title: "Rigid lift-off & magnetic", desc: "Gift-ready structures with fitted inserts for rings, earrings, necklaces and bracelets." },
          { title: "Ring & engagement boxes", desc: "Single or double slots with velvet cushions, made for the proposal moment." },
          { title: "Faux leather & wrapped", desc: "Textured wraps with embossed branding for premium lines." }
        ]
      },
      {
        heading: "Jewelry pouches",
        items: [
          { title: "Velvet & satin", desc: "Plush and lustrous gift pouches in your Pantone colour." },
          { title: "Cotton, muslin & linen", desc: "Natural weaves for artisan and everyday-carrier programs." },
          { title: "Microfiber", desc: "Pouches that clean as they carry \u2014 the after-sale companion." }
        ]
      },
      {
        heading: "Display & presentation",
        items: [
          { title: "Velvet display sets", desc: "Busts, T-bars, ring cones and cushions cut from one matched velvet." },
          { title: "Counter & showcase", desc: "Modular pieces that turn a counter into a coherent brand moment." }
        ]
      },
      {
        heading: "Complete programs",
        items: [
          { title: "Box + pouch sets", desc: "Both pieces designed together \u2014 same colour, same branding, one PO." },
          { title: "Retail to unboxing", desc: "Display at the counter, box at purchase, pouch after \u2014 one visual language." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces \u2014 boxes, pouches and display alike" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "black-leather-jewelry-box",
      "custom-white-jewelry-box",
      "custom-ring-boxes",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-velvet-pouches",
      "custom-cotton-pouches",
      "leather-envelope-pouch"
    ],
    ctaTitle: "Request a quote for your jewelry packaging program",
    guideSlugs: [
      "how-to-choose-custom-jewelry-boxes",
      "how-to-choose-a-custom-jewelry-pouch"
    ]
  },
  {
    slug: "custom-gift-boxes",
    eyebrow: "Gift Boxes",
    h1: "Custom Gift Boxes with Logo",
    subhead: "Magnetic, ribbon-tie and two-piece rigid gift boxes \u2014 plus candle-ready formats \u2014 your size, finish and logo.",
    metaDescription: "Custom gift boxes with your logo \u2014 magnetic closure, satin ribbon-tie and two-piece rigid boxes in any size and finish, including candle jar and tin formats. MOQ from 200 pieces, free stock samples.",
    factBlock: {
      updated: "October 2026",
      paragraph: "ELAPACK custom gift boxes \u2014 key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, covering magnetic flip-top, satin ribbon-tie, two-piece rigid and candle-format boxes, custom sizes included. Production takes 15\u201320 days for orders of 200\u201320,000 pieces and 20\u201325 days for 20,000\u201350,000 pieces, counted from sample approval and deposit. A free stock sample ships in 2\u20133 days (sample shipping USD 20, courier transit 4\u20137 days); a custom sample costs USD 25 plus USD 20 shipping, is built in 3\u20135 days from confirmed artwork, and a full custom sample round lands in roughly two weeks at about USD 45 all-in. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal."
    },
    intro: "Custom gift boxes for the occasions where the box is part of the gift. Corporate programs, candles, weddings, retail gifting and seasonal campaigns all start from the same place: a rigid structure that protects, a wrap that carries your brand, and a closure that makes opening feel like an event. Magnetic flip-tops, satin ribbon ties and two-piece rigid formats are all made to your size, Pantone colour and logo \u2014 MOQ from 200 pieces.",
    sections: [
      {
        heading: "Magnetic closure gift boxes",
        items: [
          { title: "Flip-top magnetic", desc: "Hidden magnets, clean exterior, a satisfying slow close \u2014 the corporate-gift standard." },
          { title: "Any footprint", desc: "From small jewelry and accessory sizes to large presentation formats." }
        ]
      },
      {
        heading: "Ribbon-tie luxury boxes",
        items: [
          { title: "Satin ribbon closure", desc: "Double-face satin that becomes part of the unboxing ritual." },
          { title: "Foil & embossing", desc: "Metallic foil and raised relief marks for premium programs." }
        ]
      },
      {
        heading: "Two-piece & structure options",
        items: [
          { title: "Two-piece rigid", desc: "Full-height lift-off lid over a rigid base \u2014 the premium gift structure." },
          { title: "Drawer & book-style", desc: "Structures made to your product and occasion, on request." }
        ]
      },
      {
        heading: "Candle gift boxes",
        items: [
          { title: "Jar & tin formats", desc: "Rigid boxes sized to your candle jars and travel tins, with inserts that hold glass steady." },
          { title: "Gifting-ready finish", desc: "Matte and soft-touch wraps that suit candle and home-scent programs." }
        ]
      },
      {
        heading: "Occasions",
        items: [
          { title: "Corporate gifting", desc: "Inserts, lids and ribbons that carry a logo quietly and well." },
          { title: "Weddings & events", desc: "Favor and gift formats across every size band." },
          { title: "Retail & shoe gifting", desc: "Gift shoe boxes and retail-ready formats made to your product." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-white-jewelry-box",
      "black-leather-jewelry-box"
    ],
    ctaTitle: "Request a quote for your custom gift boxes",
    guideSlugs: [
      "magnetic-gift-boxes-wholesale-guide",
      "apparel-gift-boxes-guide",
      "custom-gift-packaging-guide",
      "valentines-day-packaging-timeline",
      "custom-packaging-samples-guide"
    ]
  },
  {
    slug: "custom-candle-boxes",
    eyebrow: "Candle Packaging",
    h1: "Custom Candle Boxes \u2014 Rigid Formats and Inserts",
    subhead: "Rigid lift-off, magnetic and sleeve boxes sized to candle jars and travel tins, with inserts that hold glass steady \u2014 your size, wrap and logo.",
    metaDescription: "Custom candle boxes with logo \u2014 rigid, magnetic and sleeve formats sized to jars and tins, with steady-glass inserts. MOQ 200 pieces, free stock samples.",
    intro: "Custom candle boxes for candle and home-scent brands shipping to the US and Europe. ELAPACK makes the box side of the programme \u2014 rigid and magnetic structures built to your jar and tin dimensions, with inserts cut to hold glass steady in transit and on the shelf. We make the packaging, not the candles themselves: send your jar or tin measurements and the box is drawn around them, from single-jar retail formats to gift sets and monthly programmes. Photography of candle-specific runs is in progress; every fact on this page is our confirmed trade terms, and stock samples ship free so you can judge board and wrap in hand.",
    sections: [
      {
        heading: "Box structures",
        items: [
          { title: "Rigid lift-off lid", desc: "Full-height lid over a rigid base \u2014 the premium single-jar and gift-set structure." },
          { title: "Magnetic flip-top", desc: "Hidden magnets, clean exterior, a satisfying slow close for retail candle lines." },
          { title: "Sleeve & drawer", desc: "Inner tray sliding into a printed sleeve \u2014 the standard for multi-wick and votive sets." },
          { title: "Folding carton", desc: "Printed paperboard that ships and stores flat \u2014 practical for recurring runs." }
        ]
      },
      {
        heading: "Inserts for jars and tins",
        items: [
          { title: "Contoured EVA", desc: "Cut to the jar shoulder so glass cannot shift in transit." },
          { title: "Molded pulp", desc: "Economical structure with a natural look for eco-adjacent lines." },
          { title: "Segmented board", desc: "Dividers for votive sets, tealight trays and two-packs." },
          { title: "Sponge & velvet", desc: "Soft cushioning under a velvet-touch cover for premium gift formats." }
        ]
      },
      {
        heading: "Finishes & branding",
        items: [
          { title: "Matte & soft-touch wraps", desc: "The standard candle-box finish \u2014 quiet colour, fingerprint-resistant face." },
          { title: "Foil & embossing", desc: "Metallic logos and blind relief marks for premium home-scent programmes." },
          { title: "Full-print branding", desc: "Offset print, spot UV and lamination on every surface." },
          { title: "Pantone-matched wrap", desc: "Box wrap and insert fabric aligned to your brand colour." }
        ]
      },
      {
        heading: "Candle programmes",
        items: [
          { title: "Single-jar retail", desc: "One box format sized to your hero jar, ordered in runs alongside production." },
          { title: "Gift sets & two-packs", desc: "Larger footprints with segmented inserts that hold pairs and stacks." },
          { title: "Travel tins", desc: "Compact formats with insert depth matched to tin height." },
          { title: "Subscription monthly", desc: "Same structure, new printed theme each month \u2014 from 200 pieces per drop." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon"
    ],
    ctaTitle: "Request a quote for your custom candle boxes",
    factBlock: {
      updated: "October 2026",
      paragraph: "ELAPACK custom candle boxes \u2014 key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, covering rigid lift-off, magnetic flip-top, sleeve and folding-carton formats with fitted inserts, custom sizes included. Production takes 15\u201320 days for orders of 200\u201320,000 pieces and 20\u201325 days for 20,000\u201350,000 pieces, counted from sample approval and deposit. A free stock sample ships in 2\u20133 days (sample shipping USD 20, courier transit 4\u20137 days); a custom sample costs USD 25 plus USD 20 shipping, is built in 3\u20135 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal."
    },
    guideSlugs: [
      "custom-candle-boxes-guide",
      "candle-box-inserts-guide",
      "luxury-candle-boxes-guide",
      "candle-packaging-guide",
      "candle-subscription-box-packaging"
    ]
  },
  {
    slug: "custom-cosmetic-packaging",
    eyebrow: "Cosmetic & Beauty Packaging",
    h1: "Custom Cosmetic Packaging Boxes",
    subhead: "Boxes and pouches for beauty brands \u2014 eyelash packaging from 200 pieces, gift boxes and cosmetic pouches with your logo.",
    metaDescription: "Custom cosmetic packaging \u2014 eyelash boxes from 200 pieces, magnetic and rigid gift boxes for beauty brands, plus fabric and clear PVC-zip cosmetic pouches with your logo. One manufacturer, matched branding. Free stock samples.",
    intro: "Custom packaging for beauty and cosmetics brands selling into the US and Europe. ELAPACK makes both halves of the program in-house: printed boxes that present the product at retail \u2014 eyelash boxes from just 200 pieces \u2014 and the fabric and clear-zip pouches that carry cosmetics after the sale, matched in colour and branding. Every order is made to your specification, from structure and insert to print and finish.",
    sections: [
      {
        heading: "Eyelash packaging boxes",
        items: [
          { title: "From 200 pieces", desc: "Launch and test lash lines well below the typical wholesale 500." },
          { title: "Three stock formats", desc: "14\xD710\xD76, 15\xD715\xD75 and 20\xD718\xD78 cm \u2014 or fully custom sizes." },
          { title: "Fitted tray inserts", desc: "Inserts cut to strip lash trays and extension programs." }
        ]
      },
      {
        heading: "Beauty gift & retail boxes",
        items: [
          { title: "Magnetic & rigid gift boxes", desc: "Structures sized to cosmetic formats \u2014 from single items to curated sets." },
          { title: "Full-print branding", desc: "Offset print, foil, embossing and spot UV on every surface." }
        ]
      },
      {
        heading: "Cosmetic pouches & bags",
        items: [
          { title: "Fabric pouches", desc: "Cotton, satin and velvet pouches in drawstring, flap and zipper styles." },
          { title: "Clear PVC zip bags", desc: "Transparent zip bags for cosmetics \u2014 MOQ from 200 pieces." }
        ]
      },
      {
        heading: "Wig & hair extension packaging",
        items: [
          { title: "Satin wig bags & boxes", desc: "The standard 30\xD740 cm satin carrier plus retail boxes for hair programs." },
          { title: "Matched programs", desc: "Bags, boxes and inserts branded as one system." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces \u2014 boxes and pouches alike, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "custom-eyelash-packaging-boxes",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-cotton-pouches"
    ],
    ctaTitle: "Request a quote for your cosmetic packaging",
    guideSlugs: [
      "custom-cosmetic-bags-guide",
      "custom-cosmetic-packaging-guide",
      "how-to-customize-eyelash-boxes",
      "press-on-nail-packaging-guide",
      "beauty-subscription-box-contents"
    ]
  },
  {
    slug: "custom-drawstring-bags",
    eyebrow: "Drawstring Bags",
    h1: "Custom Drawstring Bags & Pouches",
    subhead: "Cotton, velvet, satin, muslin and linen drawstring bags \u2014 your fabric, size, cord and logo, from 200 pieces.",
    metaDescription: "Custom drawstring bags with your logo \u2014 cotton, velvet, satin, muslin and linen pouches in any size, plus handbag and shoe dust bag formats. MOQ from 200 pieces, free stock samples.",
    intro: "The drawstring closure is packaging's simplest ritual \u2014 one pull and the bag is closed. It is also our most-run pouch style, made in every fabric we carry: cotton first, the natural everyday carrier that prints beautifully, then velvet, satin, muslin and linen for gift and jewelry programs. Sizes run from 7\xD79 cm jewelry pouches to 30\xD740 cm wig bags and large dust bag formats, all made to your product and branded with print, label or embroidery. MOQ from 200 pieces, including custom sizes.",
    sections: [
      {
        heading: "Cotton drawstring bags",
        items: [
          { title: "The everyday workhorse", desc: "Natural cotton pouches that print beautifully \u2014 favors, beauty, jewelry and retail programs alike." },
          { title: "Any size, same MOQ", desc: "Small item pouches through large gift and dust bag formats, from 200 pieces." }
        ]
      },
      {
        heading: "Fabric options",
        items: [
          { title: "Cotton & muslin", desc: "Natural weaves with an honest, printable face \u2014 the volume formats." },
          { title: "Velvet & satin", desc: "Plush and lustrous carriers for gifting, jewelry and fragrance programs." },
          { title: "Linen & blends", desc: "Textured, matte natural fabrics for artisan and premium natural lines." }
        ]
      },
      {
        heading: "Dust bag applications",
        items: [
          { title: "Handbag dust bags", desc: "Cotton, satin, velvet and muslin drawstring dust bags that protect leather goods in storage and after-sale." },
          { title: "Shoe dust bags", desc: "Soft-fabric dust bags for footwear programs \u2014 branded and sized to the pair." }
        ]
      },
      {
        heading: "Gift & specialty bags",
        items: [
          { title: "Gift bag formats", desc: "Drawstring gift bags for weddings, events and product gifting \u2014 Pantone-matched to the program." },
          { title: "Wig & hair bags", desc: "Large formats up to 30\xD740 cm with smooth interiors that keep fibers tangle-free." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "custom-cotton-pouches",
      "custom-velvet-pouches",
      "custom-satin-pouches",
      "custom-muslin-drawstring-pouch",
      "custom-satin-wig-bag"
    ],
    ctaTitle: "Request a quote for your custom drawstring bags",
    guideSlugs: [
      "how-to-choose-custom-drawstring-bags",
      "custom-clothing-apparel-packaging-guide"
    ]
  },
  {
    slug: "ribbons-accessories",
    eyebrow: "Ribbons & Accessories",
    h1: "Custom Printed Ribbons & Packaging Accessories",
    subhead: "Ribbons, cords and finishing accessories that complete your box and pouch programs \u2014 matched to your brand.",
    metaDescription: "Custom printed ribbons and packaging accessories \u2014 satin ribbon closures, logo-printed ribbon programs, cotton cords and drawstrings matched to your ELAPACK box and pouch programs.",
    intro: "Boxes and pouches rarely ship alone. The ribbon on a gift box, the cord that closes a pouch and the finishing accessories around them are what make packaging read as one program. ELAPACK supplies ribbons, cords and accessories as part of your box and pouch programs \u2014 colour-matched to the packaging they finish, and quoted together with it. Founded in 2018, ISO 9001 certified for the production and sales of paper and textile packaging products.",
    sections: [
      {
        heading: "Ribbons",
        items: [
          { title: "Satin ribbon closures", desc: "Double-face satin ribbon ties for rigid and gift boxes \u2014 part of the unboxing ritual." },
          { title: "Custom printed ribbon", desc: "Logo printing on ribbon programs \u2014 quoted to your width, artwork and run length." },
          { title: "Colour matching", desc: "Ribbon colours aligned to your box wrap and Pantone reference." }
        ]
      },
      {
        heading: "Cords & drawstrings",
        items: [
          { title: "Cotton cords", desc: "The standard drawcord for cotton, muslin and linen pouches." },
          { title: "Satin ribbon & polyester cord", desc: "Alternative draw finishes matched to the pouch fabric." }
        ]
      },
      {
        heading: "As part of your program",
        items: [
          { title: "One supplier", desc: "Ribbon, cord, box and pouch quoted and made together \u2014 one brand system, not matched after the fact." },
          { title: "Standalone accessory orders", desc: "Ribbons and cords quoted by spec \u2014 MOQ to be confirmed per program." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "Quoted as part of your box or pouch program \u2014 standalone accessory MOQ to be confirmed" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "luxury-gift-box-ribbon",
      "magnetic-closure-gift-box",
      "custom-velvet-pouches"
    ],
    ctaTitle: "Request a quote for ribbons & accessories",
    guideSlugs: [
      "custom-printed-ribbon-guide",
      "magnetic-closure-vs-ribbon-tie-gift-boxes",
      "packaging-colour-tolerance-explained"
    ]
  },
  {
    slug: "custom-cosmetic-pouches",
    eyebrow: "Cosmetic Pouches",
    h1: "Custom Cosmetic Pouches & Makeup Bags",
    subhead: "Drawstring, flap, envelope and zipper styles in cotton, satin, velvet and canvas \u2014 plus clear PVC zip bags, from 200 pieces.",
    metaDescription: "Custom cosmetic pouches and makeup bags with your logo \u2014 drawstring, flap, envelope and zipper styles in cotton, satin, velvet and canvas, plus clear PVC zip bags. MOQ from 200 pieces, free stock samples.",
    intro: "Cosmetic packaging works twice: the pouch carries the product at retail and keeps it organized after the sale. Four styles cover the uses \u2014 drawstring, flap, envelope and the zippered makeup bag that beauty brands run as their everyday carrier \u2014 each made in cotton, satin, velvet or canvas, in your size and Pantone colour. Clear PVC zip bags complete the matrix where seeing the product is the point. MOQ from 200 pieces across the matrix, including custom sizes.",
    sections: [
      {
        heading: "Styles",
        items: [
          { title: "Zipper makeup bags", desc: "The secure everyday carrier \u2014 classic and flat formats in fabric or clear PVC." },
          { title: "Drawstring", desc: "One-pull closing for favors, sets and retail counters." },
          { title: "Envelope & flap", desc: "Structured envelope and snap-flap styles that gift beautifully." }
        ]
      },
      {
        heading: "Fabrics",
        items: [
          { title: "Cotton & canvas", desc: "Natural, printable carriers for everyday and artisan beauty lines." },
          { title: "Satin & velvet", desc: "Lustrous and plush finishes for gift and premium beauty programs." },
          { title: "Clear PVC", desc: "Transparent zip bags that show the product \u2014 MOQ from 200 pieces." }
        ]
      },
      {
        heading: "Clear PVC zip bags",
        items: [
          { title: "See-through format", desc: "Cosmetics, skincare and travel sizes visible without opening the bag." },
          { title: "Low MOQ differentiation", desc: "From 200 pieces \u2014 typically 500\u20131000 elsewhere on the same format." }
        ]
      },
      {
        heading: "Branding",
        items: [
          { title: "Print & label", desc: "Silkscreen, heat transfer and woven labels on every fabric." },
          { title: "Pantone matching", desc: "Fabric, cord and trim dyed to your brand colour." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces across fabric styles and clear PVC, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "custom-cotton-pouches",
      "custom-cotton-envelope-pouches",
      "custom-satin-pouches",
      "custom-velvet-pouches",
      "custom-pvc-bags"
    ],
    ctaTitle: "Request a quote for your cosmetic pouches",
    guideSlugs: [
      "custom-cosmetic-bags-guide",
      "custom-cosmetic-packaging-guide",
      "custom-perfume-packaging-guide"
    ]
  },
  {
    slug: "subscription-box-packaging",
    eyebrow: "Subscription Box Packaging",
    h1: "Custom Subscription Box Packaging: Boxes, Pouches & Insert Cards",
    subhead: "Monthly themed boxes, fabric pouches and insert cards for subscription programs \u2014 one manufacturer, matched branding, from 200 pieces.",
    metaDescription: "Custom subscription box packaging from one manufacturer \u2014 printed boxes, fabric pouches and insert cards for monthly themed programs. Pantone-matched, MOQ from 200 pieces, free stock samples.",
    intro: "ELAPACK makes subscription box packaging for box programs shipping to the US and Europe. Founded in 2018 and ISO 9001 certified for the production and sales of paper and textile packaging products, we make the three pieces of a monthly box in one place \u2014 the printed box, the fabric pouches that hold small items, and the insert cards that carry your theme \u2014 so colours and branding match across every drop.",
    sections: [
      {
        heading: "Monthly box structures",
        items: [
          { title: "Folding cartons", desc: "Printed paperboard that ships and stores flat \u2014 practical for recurring monthly runs." },
          { title: "Magnetic flip-top", desc: "A clean open-close ritual for premium tiers and annual gift editions." },
          { title: "Rigid lift-off lid", desc: "Thick board with a premium feel for flagship and collector boxes." },
          { title: "Custom structures", desc: "Your dieline built to your product dimensions and packing line." }
        ]
      },
      {
        heading: "Inside the box",
        items: [
          { title: "Fabric pouches", desc: "Velvet, cotton and muslin drawstring pouches for jewelry, minis and small goods." },
          { title: "Inserts", desc: "EVA, sponge, molded pulp and flocked interiors that hold items in place in transit." },
          { title: "Insert cards", desc: "Welcome cards, thank-you notes and story cards printed to the monthly theme." },
          { title: "Ribbon & trim", desc: "Satin ribbon closures and cords that carry the theme onto the box." }
        ]
      },
      {
        heading: "Built for recurring programs",
        items: [
          { title: "Same structure, new artwork", desc: "Keep one confirmed dieline and change only the printed theme each month." },
          { title: "Pantone-matched themes", desc: "Box wrap, pouch fabric and card colour matched to one reference." },
          { title: "Plan by season", desc: "Valentine's, spring, summer and winter editions ordered ahead on one production calendar." },
          { title: "MOQ that fits themes", desc: "From 200 pieces \u2014 small enough to test a theme, sized to scale a winner." }
        ]
      },
      {
        heading: "Branding & finishes",
        items: [
          { title: "Matt & gloss lamination", desc: "Laminate finishes that set the tone of the unboxing." },
          { title: "Foil stamping & gold foil", desc: "Metallic marks for premium monthly editions." },
          { title: "Embossing & UV coating", desc: "Blind relief and spot UV accents on lid and sleeve." },
          { title: "Pouch branding", desc: "Silkscreen and foil logos, woven labels and embroidery on every fabric." }
        ]
      }
    ],
    facts: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free \u2014 ships in 2\u20133 days (sample shipping USD 20, 4\u20137 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping \u2014 made in 3\u20135 days" },
      { label: "Production time", value: "15\u201320 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T \xB7 PayPal" }
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "custom-velvet-pouches",
      "custom-cotton-pouches",
      "custom-muslin-drawstring-pouch",
      "luxury-gift-box-ribbon"
    ],
    ctaTitle: "Request a quote for your subscription box program",
    factBlock: {
      updated: "October 2026",
      paragraph: "ELAPACK subscription box packaging \u2014 key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, custom sizes included, across printed boxes, fabric pouches and insert cards. Production takes 15\u201320 days for orders of 200\u201320,000 pieces and 20\u201325 days for 20,000\u201350,000 pieces, counted from sample approval and deposit. A free stock sample ships in 2\u20133 days (sample shipping USD 20, courier transit 4\u20137 days); a custom sample costs USD 25 plus USD 20 shipping, is built in 3\u20135 days from confirmed artwork, and a full custom sample round lands in roughly two weeks at about USD 45 all-in. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal."
    },
    guideSlugs: [
      "subscription-box-packaging-buyers-guide",
      "subscription-box-packaging-cost",
      "candle-subscription-box-packaging",
      "beauty-subscription-box-contents",
      "valentines-day-packaging-timeline",
      "custom-packaging-moq-sample-lead-times-2026"
    ]
  }
];
function getCollectionBySlug(slug) {
  return collections.find((c) => c.slug === slug);
}

// src/pages/Collection.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Collection({ slug }) {
  const collection = getCollectionBySlug(slug);
  (0, import_react14.useEffect)(() => {
    if (collection) document.title = `${collection.eyebrow} | ELAPACK`;
  }, [collection]);
  if (!collection) return null;
  const products3 = collection.productSlugs.map((s) => getProductBySlug(s)).filter((p) => p !== void 0);
  const guides = (collection.guideSlugs ?? []).map((s) => getArticleBySlug(s)).filter((a) => a !== void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "eyebrow reveal", children: collection.eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { className: "page-title reveal reveal-delay-1", children: collection.h1 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "page-subtitle reveal reveal-delay-2", children: collection.subhead })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "section", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "section-header-center reveal", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "about-text", style: { maxWidth: "820px", margin: "0 auto" }, children: collection.intro }) }) }) }),
    collection.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "section-header-center reveal", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: section.heading }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "values-grid", children: section.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: `value-card reveal reveal-delay-${i % 4 + 1}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "value-title", children: item.title }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "value-desc", children: item.desc })
      ] }, item.title)) })
    ] }) }, section.heading)),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "section-header-center reveal", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Explore the products" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "catalog-grid", children: products3.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        import_react_router_dom16.Link,
        {
          to: `/products/${product.slug}/`,
          className: `catalog-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "catalog-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: product.image, alt: product.name, loading: "lazy", width: 1254, height: 1254 }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "catalog-category", children: product.category })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "catalog-card-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "catalog-name", children: product.name }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "catalog-desc", children: product.shortDesc }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "catalog-meta", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "meta-item", children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "meta-label", children: "MOQ" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "meta-value", children: product.moq })
              ] }) })
            ] })
          ]
        },
        product.slug
      )) })
    ] }) }),
    guides.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Sourcing guides" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "spec-list", children: guides.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "markets-note", style: { marginBottom: "0.5rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom16.Link, { to: `/news/${guide.slug}/`, className: "text-link", children: guide.title }),
        " \u2014 ",
        guide.excerpt
      ] }, guide.slug)) })
    ] }) }) }),
    collection.factBlock && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: [
        "Key facts (",
        collection.factBlock.updated,
        ")"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "markets-note", style: { maxWidth: "820px" }, children: collection.factBlock.paragraph })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "markets-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "MOQ & lead time" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "spec-list", children: collection.facts.map((row) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "markets-note", style: { marginBottom: "0.5rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("strong", { children: [
          row.label,
          ":"
        ] }),
        " ",
        row.value
      ] }, row.label)) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "markets-box reveal", style: { textAlign: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: collection.ctaTitle }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "markets-note", children: [
        "Message Tina on WhatsApp or phone:",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "https://wa.me/8618626352096", children: "+86 186 2635 2096" }),
        " ",
        "\xB7 Email: ",
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "mailto:tina@elapack.com", children: "tina@elapack.com" })
      ] })
    ] }) }) })
  ] });
}

// src/App.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function AppRoutes() {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Routes, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react_router_dom17.Route, { element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Layout, {}), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Home, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/pouches-bags", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Landing, { slug: "pouches-bags" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/boxes", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Landing, { slug: "boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/sets", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Landing, { slug: "sets" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-jewelry-boxes", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-jewelry-boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/eyewear-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "eyewear-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-jewelry-pouches", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-jewelry-pouches" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-wig-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-wig-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-jewelry-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-jewelry-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-gift-boxes", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-gift-boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-candle-boxes", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-candle-boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-cosmetic-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-cosmetic-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-drawstring-bags", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-drawstring-bags" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/ribbons-accessories", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "ribbons-accessories" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/custom-cosmetic-pouches", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-cosmetic-pouches" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/subscription-box-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "subscription-box-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/products", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Products, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/products/:slug", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ProductDetail, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/industries", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Industries, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/solutions", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Solutions, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/about", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(About, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/news", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(News, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/news/:slug", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Article, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/contact", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Contact, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom17.Route, { path: "/video", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Video, {}) })
  ] }) });
}

// scripts/prerender.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var dist = import_node_path.default.resolve(__dirname, "../dist");
var indexPath = import_node_path.default.join(dist, "index.html");
var shell = import_node_fs.default.readFileSync(indexPath, "utf-8");
var ROUTES = [
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
    import_node_fs.default.readFileSync(import_node_path.default.resolve(__dirname, "prerender-products.json"), "utf-8")
  ).map((slug) => `/products/${slug}`),
  ...articles.map((a) => `/news/${a.slug}`)
];
var STATIC_TITLES = {
  "/": "ELAPACK \u2014 Custom Luxury Packaging for Global Brands",
  "/pouches-bags": "Custom Fabric Pouches & Bags from 200 pcs | ELAPACK",
  "/boxes": "Custom Rigid, Folding & Magnetic Boxes from 200 pcs | ELAPACK",
  "/sets": "Custom Packaging Sets \u2014 Pouch, Box & More | ELAPACK",
  "/custom-jewelry-boxes": "Custom Jewelry Boxes with Logo, from 200 pcs | ELAPACK",
  "/eyewear-packaging": "Custom Eyewear Packaging \u2014 Glasses Boxes & Pouches | ELAPACK",
  "/custom-jewelry-pouches": "Custom Jewelry Pouches with Logo, from 200 pcs | ELAPACK",
  "/custom-wig-packaging": "Custom Wig Packaging \u2014 Satin Wig Bags & Boxes | ELAPACK",
  "/custom-jewelry-packaging": "Custom Jewelry Packaging \u2014 Boxes, Pouches & Display | ELAPACK",
  "/custom-gift-boxes": "Custom Gift Boxes with Logo, from 200 pcs | ELAPACK",
  "/custom-candle-boxes": "Custom Candle Boxes with Logo, from 200 pcs | ELAPACK",
  "/custom-cosmetic-packaging": "Custom Cosmetic Packaging Boxes | ELAPACK",
  "/custom-drawstring-bags": "Custom Drawstring Bags & Pouches, from 200 pcs | ELAPACK",
  "/ribbons-accessories": "Custom Printed Ribbons & Packaging Accessories | ELAPACK",
  "/custom-cosmetic-pouches": "Custom Cosmetic Pouches & Makeup Bags with Logo | ELAPACK",
  "/subscription-box-packaging": "Subscription Box Packaging: Boxes, Pouches, Insert Cards from 200 pcs | ELAPACK",
  "/products": "Products \u2014 Boxes, Pouches & Gift Packaging | ELAPACK",
  "/industries": "Industries We Serve \u2014 Jewelry, Beauty & Luxury Retail | ELAPACK",
  "/solutions": "Packaging Solutions \u2014 Custom, Materials & Sustainability | ELAPACK",
  "/news": "News & Insights | ELAPACK",
  "/about": "About ELAPACK \u2014 From Workshop to Global Partner",
  "/contact": "Contact ELAPACK \u2014 Get a Custom Packaging Quote",
  "/video": "Inside ELAPACK \u2014 Factory & Craft Videos",
  ...Object.fromEntries(articles.map((a) => [`/news/${a.slug}`, `${a.title} | ELAPACK`]))
};
var STATIC_DESCRIPTIONS = {
  "/": "ELAPACK crafts premium packaging for luxury brands worldwide. Jewelry boxes, velvet pouches, retail bags and complete gift sets \u2014 one-stop custom packaging.",
  "/pouches-bags": "Custom textile pouches and bags \u2014 velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, in your size, closure and branding. MOQ from 200 pieces.",
  "/boxes": "Custom rigid, folding carton and magnetic closure boxes with EVA, sponge, pulp or flocked inserts, in your size, finish and branding. MOQ from 200 pieces.",
  "/sets": "Custom packaging sets \u2014 pouches, boxes and inserts designed together as one coordinated set, colour-matched to your Pantone reference.",
  "/custom-jewelry-boxes": "Custom jewelry boxes with your logo \u2014 rigid lift-off lids, magnetic flip-tops, ribbon-tie and faux leather boxes with EVA, velvet or pulp inserts. MOQ from 200 pieces, free stock samples.",
  "/eyewear-packaging": "Custom eyewear packaging \u2014 rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes and pouches from 200 pieces. Free stock samples.",
  "/custom-jewelry-pouches": "Custom jewelry pouches with logo \u2014 velvet, suede, cotton, muslin, satin, linen and microfiber drawstring and flap pouches in your size and Pantone colour. MOQ from 200 pieces, free stock samples.",
  "/custom-wig-packaging": "Custom wig packaging with your logo \u2014 satin drawstring wig bags in the standard 30\xD740 cm format, plus rigid and magnetic boxes for wigs and hair extensions. Bags from 200 pieces. Free stock samples.",
  "/custom-jewelry-packaging": "Custom jewelry packaging from one manufacturer \u2014 logo jewelry boxes, velvet, satin and cotton pouches, display sets and complete box-plus-pouch programs. Boxes and pouches from 200 pieces. Free stock samples.",
  "/custom-gift-boxes": "Custom gift boxes with your logo \u2014 magnetic closure, satin ribbon-tie and two-piece rigid boxes in any size and finish, including candle jar and tin formats. MOQ from 200 pieces, free stock samples.",
  "/custom-candle-boxes": "Custom candle boxes with logo \u2014 rigid, magnetic and sleeve formats sized to jars and tins, with steady-glass inserts. MOQ 200 pieces, free stock samples.",
  "/custom-cosmetic-packaging": "Custom cosmetic packaging \u2014 eyelash boxes from 200 pieces, magnetic and rigid gift boxes for beauty brands, plus fabric and clear PVC-zip cosmetic pouches with your logo. One manufacturer, matched branding. Free stock samples.",
  "/custom-drawstring-bags": "Custom drawstring bags with your logo \u2014 cotton, velvet, satin, muslin and linen pouches in any size, plus handbag and shoe dust bag formats. MOQ from 200 pieces, free stock samples.",
  "/ribbons-accessories": "Custom printed ribbons and packaging accessories \u2014 satin ribbon closures, logo-printed ribbon programs, cotton cords and drawstrings matched to your box and pouch programs.",
  "/custom-cosmetic-pouches": "Custom cosmetic pouches and makeup bags with your logo \u2014 drawstring, flap, envelope and zipper styles in cotton, satin, velvet and canvas, plus clear PVC zip bags. MOQ from 200 pieces, free stock samples.",
  "/subscription-box-packaging": "Custom subscription box packaging from one manufacturer \u2014 printed boxes, fabric pouches and insert cards for monthly themed programs. Pantone-matched, MOQ from 200 pieces, free stock samples.",
  "/products": "Browse ELAPACK's custom packaging catalog \u2014 rigid jewelry boxes, velvet and cotton pouches, retail bags, display systems and gift sets.",
  "/industries": "Custom packaging for jewelry, eyewear, fragrance, beauty, fashion and gifting brands \u2014 engineered for Europe and North America.",
  "/solutions": "Custom packaging solutions from ELAPACK \u2014 bespoke structures, premium materials and finishes, clear process, sustainable options.",
  "/news": "Packaging insights, material trends and sustainability notes from the ELAPACK team.",
  "/about": "ELAPACK began as a small workshop and grew into a full-service packaging partner for luxury brands across Europe and North America.",
  "/contact": "Talk to ELAPACK about your packaging project \u2014 quotes within one business day. Email, phone and WhatsApp available.",
  "/video": "See ELAPACK's production floor, craft details and quality process in video.",
  ...Object.fromEntries(articles.map((a) => [`/news/${a.slug}`, a.metaDescription]))
};
var SITE = "https://elapack.com";
var esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
var ld = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");
var pageImage = (image) => image.endsWith(".svg") ? `${SITE}/hero-packaging.webp` : `${SITE}${image}`;
var ok = 0;
for (const route of ROUTES) {
  try {
    const html = (0, import_server.renderToString)(
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_server2.StaticRouter, { location: route, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AppRoutes, {}) })
    );
    const productMatch = route.match(/^\/products\/([a-z0-9-]+)$/);
    const product = productMatch ? products.find((p) => p.slug === productMatch[1]) : void 0;
    const articleMatch = route.match(/^\/news\/([a-z0-9-]+)$/);
    const article = articleMatch ? articles.find((a) => a.slug === articleMatch[1]) : void 0;
    const pageTag = product ? `${product.name} | ELAPACK` : STATIC_TITLES[route] || "ELAPACK";
    const pageDesc = STATIC_DESCRIPTIONS[route] || (product ? `${product.shortDesc} ${product.name} by ELAPACK \u2014 materials, MOQ ${product.moq}, lead time ${product.leadTime}. Request a quote.` : void 0);
    const canonical = `${SITE}${route === "/" ? "/" : route + "/"}`;
    const ogImage = article ? pageImage(article.image) : product ? pageImage(product.image) : `${SITE}/hero-packaging.webp`;
    const crumbs = [
      { name: "Home", item: `${SITE}/` }
    ];
    if (article) {
      crumbs.push({ name: "News", item: `${SITE}/news/` });
      crumbs.push({ name: article.title });
    } else if (product) {
      crumbs.push({ name: "Products", item: `${SITE}/products/` });
      crumbs.push({ name: product.name });
    } else if (route !== "/") {
      crumbs.push({
        name: STATIC_TITLES[route]?.replace(" | ELAPACK", "") || "ELAPACK"
      });
    }
    const graph = [];
    graph.push({
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "ELAPACK",
      legalName: "Wuxi Magic Packaging Co., Ltd",
      url: `${SITE}/`,
      logo: `${SITE}/images/brand/elapack-logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wuxi",
        addressRegion: "Jiangsu",
        addressCountry: "CN"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+86-18626352096",
        email: "tina@elapack.com",
        contactType: "sales",
        availableLanguage: ["en"]
      }
    });
    if (crumbs.length > 1) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          ...c.item ? { item: c.item } : {}
        }))
      });
    }
    if (article) {
      graph.push({
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: article.title,
        description: article.metaDescription,
        image: [ogImage],
        ...article.datePublished ? {
          datePublished: article.datePublished,
          dateModified: article.dateModified ?? article.datePublished
        } : {},
        author: { "@type": "Person", name: "Tina", url: `${SITE}/about`, worksFor: { "@type": "Organization", name: "ELAPACK", url: `${SITE}/` } },
        publisher: {
          "@type": "Organization",
          name: "ELAPACK",
          legalName: "Wuxi Magic Packaging Co., Ltd",
          logo: {
            "@type": "ImageObject",
            url: `${SITE}/apple-touch-icon.png`,
            width: 180,
            height: 180
          }
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical }
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
        ["ELAPACK", "Wuxi"]
      ];
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
            address: { "@type": "PostalAddress", addressLocality: city, addressCountry: "CN" }
          }
        }))
      });
    }
    if (product) {
      graph.push({
        "@type": "Product",
        "@id": `${canonical}#product`,
        name: product.name,
        description: product.shortDesc,
        image: [ogImage],
        sku: product.slug,
        category: product.category,
        material: product.materials,
        brand: { "@type": "Brand", name: "ELAPACK" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Minimum Order Quantity", value: product.moq },
          { "@type": "PropertyValue", name: "Lead Time", value: product.leadTime }
        ],
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical }
      });
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqsFor(product.category).map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      });
    }
    const headExtras = [
      `<link rel="canonical" href="${canonical}" />`,
      ...graph.length ? [
        `<script type="application/ld+json">${ld({
          "@context": "https://schema.org",
          "@graph": graph
        })}</script>`
      ] : []
    ].join("\n    ");
    let out = shell.replace('<div id="root"></div>', `<div id="root">${html}</div>`).replace(/<title>[^<]*<\/title>/, `<title>${pageTag}</title>`);
    if (pageDesc) {
      out = out.replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/,
        `$1${pageDesc}$2`
      );
    }
    out = out.replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${esc(pageTag)}$2`
    ).replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${canonical}$2`
    ).replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/,
      `$1${ogImage}$2`
    ).replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${esc(pageTag)}$2`
    ).replace(
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
      out = out.replace(
        /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
        `$1${esc(pageDesc)}$2`
      ).replace(
        /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
        `$1${esc(pageDesc)}$2`
      );
    }
    out = out.replace("\n  </head>", `
    ${headExtras}
  </head>`);
    const dest = route === "/" ? indexPath : import_node_path.default.join(dist, route.replace(/^\//, ""), "index.html");
    import_node_fs.default.mkdirSync(import_node_path.default.dirname(dest), { recursive: true });
    import_node_fs.default.writeFileSync(dest, out);
    ok++;
    console.log("prerendered:", route);
  } catch (e) {
    console.error("FAILED:", route, e);
  }
}
console.log(`prerender complete: ${ok}/${ROUTES.length} routes`);
