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
var import_react_router_dom16 = require("react-router-dom");

// src/components/Layout.tsx
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
    description: "The black leather jewelry box is more than just storage \u2014 it is a timeless statement of sophistication. Crafted from smooth grain faux leather in a deep, matte black tone, this box offers an elevated unboxing experience that reflects your brand commitment to quality. Its sleek, fingerprint-resistant exterior enhances visual appeal while staying pristine even with daily use.",
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
    description: "A compact white jewelry box with a glossy rigid shell and velvet-lined cushion. Made for bracelets and small jewelry gifts, it pairs a clean minimalist look with durable protection, and carries your logo silkscreened or hot-stamped on the lid. Ideal for retail display and gifting occasions.",
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
      { label: "Closure Type", value: "Snap closure" }
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
    description: "Custom ring boxes made for the moment the box matters most. Single and double slot layouts hold rings securely for engagements and weddings, with plush velvet or foam cushions cut to your ring profile. The matte velvet exterior photographs beautifully in proposal scenes, and your logo is foil-stamped or printed on the lid. Made to your size and colour \u2014 MOQ from 200 pieces.",
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
    description: "A luxury gift box set with satin ribbon closure, designed for premium gifting occasions. The rigid box construction with matte finish and decorative ribbon creates an unforgettable unboxing experience. Perfect for corporate gifts, weddings, and high-end retail.",
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
      { label: "Surface Finish", value: "Matte / foil stamping / spot UV" }
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
    description: "A sleek magnetic closure gift box with flip-top design. The hidden magnetic mechanism provides a clean look while keeping the lid securely closed. Ideal for jewelry, eyewear, cosmetics, and small luxury items.",
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
      { label: "Surface Finish", value: "Matte / glossy" }
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
    description: "Custom eyelash packaging boxes for lash brands, salons and wholesalers. Built around your lash trays \u2014 strip lashes, volume trays or extension programs \u2014 with fitted inserts that hold each tray in place and a printed wrap that carries your brand at retail and in unboxing. Three stock formats cover the common tray sizes: 14\xD710\xD76, 15\xD715\xD75 and 20\xD718\xD78 cm, and any dimension can be made to spec. MOQ from 200 pieces with your logo printed, foil-stamped or embossed. Product photography is in progress; request a stock sample to judge the board and print quality in hand.",
    image: "/images/placeholder/product-coming-soon.svg",
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
    description: "Custom perfume packaging boxes made around the bottle, not the other way round. Share your bottle dimensions and we build the structure to fit \u2014 two-piece lift-off lids for the flagship gifting moment, magnetic flip-tops for the retail counter, and drawer formats that layer bottle and story card. The wrap carries your full print, foil or emboss program, and fitted inserts hold glass steady from factory to vanity. MOQ from 200 pieces with your branding. Product photography is in progress; request a stock sample to judge the board and finish in hand.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard with custom printed wrap, fitted bottle inserts",
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
      { label: "Insert", value: "EVA / molded pulp / sponge, cut to bottle profile" },
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
    description: "Custom velvet pouches for programs that want a plush, gift-ready feel at first touch. The dense velvet pile cushions jewelry, eyewear and small luxury goods, and the same pouch carries brands through retail, gifting and unboxing moments. Choose your closure \u2014 drawstring, flap, envelope or zipper \u2014 your Pantone-matched velvet colour, and your logo silkscreened, hot-stamped or woven into a label. Made to order in any size, from small gift pouches to large presentation bags.",
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
    description: "A velvet necklace display stand designed for retail showcases. The plush velvet surface holds necklaces securely in place while presenting them elegantly. Available in multiple colors to match your brand aesthetic.",
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
      { label: "Surface Finish", value: "Velvet covering" }
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
    description: "A modern acrylic earring display stand with transparent construction. Perfect for showcasing earrings in a clean, contemporary retail setting. The clear acrylic design lets the jewelry be the focal point.",
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
      { label: "Surface Finish", value: "Transparent glossy" }
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
    description: "A durable kraft paper shopping bag with twisted paper handles. Perfect for retail packaging, gift wrapping, and eco-conscious brands. Custom logo printing available on natural kraft background.",
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
      { label: "Eco-Friendly", value: "Recyclable" }
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
    description: "A stackable velvet jewelry tray with compartmental design for organized display. Perfect for retail showcases and drawer storage. The velvet surface protects jewelry while the stackable design maximizes space efficiency.",
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
      { label: "Surface Finish", value: "Velvet covering" }
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
    description: "A complete velvet display set that turns a counter into a coherent brand moment. The program pairs necklace busts in two heights with a two-tier T-bar bracelet stand, ring cones, earring stands and plush bracelet cushions \u2014 all cut from the same velvet over structured cores, so every touchpoint matches in color and texture. Designed for jewelry retailers and brands that want display, storage and gifting to speak one visual language.",
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
    description: "The envelope pouch is where a protective sleeve becomes part of the gift. Cut from pebbled faux leather with a structured flap and snap closure, it opens to reveal a suede-touch interior that cushions whatever it carries \u2014 jewelry, eyewear, cards or small leather goods. Gold foil stamping on the flap carries the brand quietly, the way luxury prefers it. A slim profile that mails flat and still feels substantial in the hand.",
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
    description: "An unbleached muslin pouch with a visible, honest weave. Muslin is breathable, which makes it a natural fit for items that should not sit in sealed plastic \u2014 and its hand-made look suits artisan, bridal favor and natural-positioned brands. Cut, sewn and printed to order in your size, with a cotton drawstring and your logo in water-based ink. Product photography is in progress; request a stock sample to see the weave.",
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
                      to: "/products",
                      className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                      children: "Products"
                    }
                  ),
                  openDropdown === "products" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown-inner", children: productCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.Link,
                    {
                      to: `/products?category=${encodeURIComponent(cat)}`,
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
                      to: "/industries",
                      className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                      children: "Industries"
                    }
                  ),
                  openDropdown === "industries" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown-inner", children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.Link,
                    {
                      to: `/industries?sector=${encodeURIComponent(ind)}`,
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
                      to: "/solutions",
                      className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                      children: "Solutions"
                    }
                  ),
                  openDropdown === "solutions" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nav-dropdown-inner", children: solutions.map((sol) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_react_router_dom.Link,
                    {
                      to: `/solutions?topic=${encodeURIComponent(sol)}`,
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
                to: "/about",
                className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                children: "About Us"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_react_router_dom.NavLink,
              {
                to: "/news",
                className: ({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`,
                children: "News"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_react_router_dom.NavLink,
              {
                to: "/contact",
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/products", className: "mobile-nav-link mobile-nav-sub", children: "All Products" }),
        productCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_router_dom.Link,
          {
            to: `/products?category=${encodeURIComponent(cat)}`,
            className: "mobile-nav-link mobile-nav-sub",
            children: cat
          },
          cat
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mobile-nav-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mobile-nav-heading", children: "Industries" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/industries", className: "mobile-nav-link mobile-nav-sub", children: "All Industries" }),
        industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_router_dom.Link,
          {
            to: `/industries?sector=${encodeURIComponent(ind)}`,
            className: "mobile-nav-link mobile-nav-sub",
            children: ind
          },
          ind
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mobile-nav-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mobile-nav-heading", children: "Solutions" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/solutions", className: "mobile-nav-link mobile-nav-sub", children: "All Solutions" }),
        solutions.map((sol) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_react_router_dom.Link,
          {
            to: `/solutions?topic=${encodeURIComponent(sol)}`,
            className: "mobile-nav-link mobile-nav-sub",
            children: sol
          },
          sol
        ))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/about", className: "mobile-nav-link", children: "About Us" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/news", className: "mobile-nav-link", children: "News" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/contact", className: "mobile-nav-link", children: "Contact" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom.Link, { to: "/contact", className: "mobile-cta", children: "Get a Quote" })
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products", children: "Products" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/industries", children: "Industries" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/solutions", children: "Solutions" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/about", children: "About Us" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/news", children: "News" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/contact", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "footer-heading", children: "Products" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products?category=Pouches%20%26%20Bags", children: "Pouches & Bags" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products?category=Boxes", children: "Boxes" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products?category=Sets%20%26%20Complete%20Packaging", children: "Sets & Complete Packaging" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom2.Link, { to: "/products?category=Ribbons%20%26%20Accessories", children: "Ribbons & Accessories" }) })
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
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ELAPACK. All rights reserved."
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
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

// src/components/Layout.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Layout({ children }) {
  useScrollReveal();
  useScrollToTop();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "app", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("main", { className: "main-content", children: children ?? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom5.Outlet, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Footer, {})
  ] });
}

// src/pages/Home.tsx
var import_react4 = require("react");
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
  const [activeSlide, setActiveSlide] = (0, import_react4.useState)(0);
  const introVideoRef = (0, import_react4.useRef)(null);
  const [introPaused, setIntroPaused] = (0, import_react4.useState)(false);
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
          alt: "OEM & ODM custom packaging by ELAPACK: gift boxes, shopping bags, pouches and jewelry packaging"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/contact", className: "hero-cta", children: "Get a Quote" }),
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
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_router_dom6.Link, { to: "/about", className: "text-link", children: [
            "Discover Our Story",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_router_dom6.Link, { to: "/video", className: "text-link", children: [
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_router_dom6.Link, { to: "/products", className: "text-link", children: [
          "View All Products",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "products-grid", children: products2.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        import_react_router_dom6.Link,
        {
          to: `/products/${product.slug}`,
          className: `product-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "product-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: product.image, alt: product.name, loading: "lazy" }),
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
          to: `/products?category=${encodeURIComponent(item.category)}`,
          className: `popular-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "popular-card-image", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: item.image, alt: item.name, loading: "lazy" }) }),
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
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/contact", className: "btn-primary", children: "Request a Quote" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/products", className: "btn-outline", children: "View Catalogue" })
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
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: card.image, alt: card.title, loading: "lazy" }),
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/solutions", className: "btn-primary", children: "Explore Custom Options" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "custom-options-hero-image reveal reveal-delay-2", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "img",
        {
          src: "/custom-options.webp",
          alt: "Custom packaging options showcase",
          loading: "lazy"
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
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: study.image, alt: study.client, loading: "lazy" }),
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
          loading: "lazy"
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
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_router_dom6.Link, { to: "/contact", className: "btn-primary", children: "Start Your Project" })
    ] }) }) })
  ] });
}

// src/pages/Products.tsx
var import_react5 = require("react");
var import_react_router_dom7 = require("react-router-dom");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Products() {
  const [searchParams, setSearchParams] = (0, import_react_router_dom7.useSearchParams)();
  const categoryParam = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = (0, import_react5.useState)(categoryParam);
  (0, import_react5.useEffect)(() => {
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
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_router_dom7.Link, { to: "/pouches-bags", className: "value-card reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "value-title", children: "Custom Fabric Pouches & Bags" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "value-desc", children: "Velvet, suede, cotton, muslin, satin, linen \u2014 your size, closure and branding. MOQ from 200 pieces." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_router_dom7.Link, { to: "/boxes", className: "value-card reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "value-title", children: "Custom Boxes" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "value-desc", children: "Rigid, folding and magnetic closure boxes with inserts and Pantone-matched finishes. MOQ from 200 pieces." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_router_dom7.Link, { to: "/sets", className: "value-card reveal reveal-delay-3", children: [
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
          to: `/products/${product.slug}`,
          className: `catalog-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "catalog-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "img",
                {
                  src: product.image,
                  alt: product.name,
                  loading: "lazy"
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_router_dom7.Link, { to: "/contact", className: "btn-outline", children: "Request Custom Quote" })
      ] })
    ] }) })
  ] });
}

// src/pages/ProductDetail.tsx
var import_react6 = require("react");
var import_react_router_dom8 = require("react-router-dom");
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
var productFaqs = [
  {
    q: "What materials are available for custom pouches?",
    a: "We offer high-quality silk, cotton, velvet, linen, and satin. Each material can be customized with various finishes such as matte, glossy, or textured to match your brand aesthetic."
  },
  {
    q: "Can I customize the size and shape of the pouches?",
    a: "Absolutely. We offer standard sizes like 6x8 inches and 4x6 inches, plus fully custom dimensions. Shapes include classic drawstring, flat bottom, zip-top, and bespoke structural designs."
  },
  {
    q: "Are the pouches eco-friendly?",
    a: "We offer eco-friendly material options including recycled kraft paper, natural cotton, and linen. Certification documents are available on request."
  },
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
  },
  {
    q: "What types of closures are available for the pouches?",
    a: "We offer drawstring cord, zip-top, magnetic snap, button closure, and ribbon tie closures. Cord materials include silk, cotton, satin, and leather, all color-matched to your brand."
  }
];
function ProductDetail() {
  const { slug } = (0, import_react_router_dom8.useParams)();
  const product = slug ? getProductBySlug(slug) : void 0;
  const [openFaq, setOpenFaq] = (0, import_react6.useState)(0);
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/products", className: "btn-primary", children: "Back to Products" })
        ] })
      }
    );
  }
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "breadcrumb-bar", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("nav", { className: "breadcrumb", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/", children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "breadcrumb-sep", children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/products", children: "Products" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "breadcrumb-sep", children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "breadcrumb-current", children: product.name })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "product-detail-hero", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-detail-gallery reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-gallery-main", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: product.image, alt: product.name }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-detail-category", children: product.category })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-gallery-thumbs", children: [product.image].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            className: `product-gallery-thumb ${i === 0 ? "is-active" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: img, alt: `${product.name} view ${i + 1}`, loading: "lazy" })
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
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/contact", className: "btn-primary", children: "Request a Quote" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/contact", className: "btn-outline", children: "Contact Us" })
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
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/contact", className: "btn-primary", children: "Discuss Your Project" })
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
          loading: "lazy"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-importance-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "section-header-center reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "The Importance of Luxury Jewelry Pouches in Your Jewelry Store" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-description-text", style: { maxWidth: "760px", margin: "1.5rem auto 0" }, children: "In the competitive world of jewelry, every detail contributes to the customer experience, and luxury jewelry pouches play a crucial role. These stylish and carefully designed pouches go beyond aesthetics, offering several key benefits for jewelry stores:" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-benefits-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-benefit-card reveal", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-benefit-num", children: "01" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "product-benefit-title", children: "Elevating Customer Experience" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-benefit-desc", children: "When customers receive their jewelry in a plush and luxurious pouch, it enhances the overall experience and makes them feel that they are acquiring something truly special." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-benefit-card reveal reveal-delay-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-benefit-num", children: "02" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "product-benefit-title", children: "Protection and Preservation" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-benefit-desc", children: "These pouches provide an added layer of protection. They shield delicate and valuable pieces from potential scratches, dust, and damage, ensuring that the jewelry remains in pristine condition until it reaches the customer's hands." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-benefit-card reveal reveal-delay-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "product-benefit-num", children: "03" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "product-benefit-title", children: "Subtle Branding Opportunity" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-benefit-desc", children: "Luxury jewelry pouches can serve as a discreet branding tool. By incorporating your jewelry store's logo or design on the pouch, you not only reinforce your brand's identity but also create a lasting impression on customers." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section product-customize-bags-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-customize-bags-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "product-customize-bags-image reveal", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "img",
        {
          src: "/custom-options.webp",
          alt: "Customize your jewelry bags",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "product-customize-bags-content reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "eyebrow", children: "100% Customization" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "section-title", style: { marginTop: "0.75rem" }, children: "Customize Your Jewelry Bags" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-description-text", children: "At ELAPACK, we understand the importance of tailoring every detail to suit your unique style and preferences. If you don't find a compelling solution among the ones proposed, we also offer the possibility of 100% customized jewelry pouches wholesale." }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-description-text", children: "You can always request a highly customized project in line with your style and wishes: we will be happy to find you the right solution to satisfy your needs and your customers' preferences." }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "product-description-text", children: "Whether it's a specific color, texture, or design, we're dedicated to crafting solutions that exceed your expectations and resonate with your customers' preferences. Moreover, you can add to your jewelry pouches your logo and your graphics, creating packaging that totally reflects your brand and its characteristics." }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/contact", className: "btn-primary", style: { marginTop: "0.5rem" }, children: "Customize Your Pouches" })
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
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "faq-list reveal reveal-delay-1", children: productFaqs.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_router_dom8.Link, { to: "/products", className: "text-link", children: [
          "View All",
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "related-grid", children: related.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        import_react_router_dom8.Link,
        {
          to: `/products/${item.slug}`,
          className: `related-card reveal reveal-delay-${i % 3 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "related-card-image", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: item.image, alt: item.name, loading: "lazy" }) }),
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
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "section cta-section", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "cta-box reveal", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h2", { className: "section-title-lg", style: { color: "#fff" }, children: [
        "Ready to customize",
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("br", {}),
        "this for your brand?"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "cta-text", children: "Share your specifications and we'll prepare a tailored proposal within one business day." }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom8.Link, { to: "/contact", className: "btn-primary", children: "Start Your Project" })
    ] }) }) })
  ] });
}

// src/pages/Industries.tsx
var import_react7 = require("react");
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
  const [selected, setSelected] = (0, import_react7.useState)(activeSector);
  (0, import_react7.useEffect)(() => {
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
                loading: "lazy"
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
              to: `/products/${product.slug}`,
              className: "industry-product-card",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industry-product-image", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "img",
                  {
                    src: product.image,
                    alt: product.name,
                    loading: "lazy"
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
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "industry-cta", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_router_dom9.Link, { to: "/contact", className: "btn-primary", children: [
          "Request a Quote for ",
          selected
        ] }) })
      ] })
    ] }) })
  ] });
}

// src/pages/Solutions.tsx
var import_react8 = require("react");
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
  const [selected, setSelected] = (0, import_react8.useState)(activeTopic);
  (0, import_react8.useEffect)(() => {
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
                loading: "lazy"
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
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "solution-points-grid", children: solutionContent[selected].points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "solution-point-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h4", { className: "solution-point-title", children: point.title }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "solution-point-desc", children: point.desc })
        ] }, point.title)) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "solution-cta", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_router_dom10.Link, { to: "/contact", className: "btn-primary", children: "Get Started" }) })
      ] })
    ] }) })
  ] });
}

// src/pages/About.tsx
var import_react9 = require("react");
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
  const videoRef = (0, import_react9.useRef)(null);
  const videoWrapperRef = (0, import_react9.useRef)(null);
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
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "about-story-text reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "eyebrow", children: "Our Story" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "section-title", style: { marginTop: "1rem" }, children: "From workshop to global partner." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "Since 2018, ELAPACK has believed that packaging is not a container, but a brand's first handshake. We have grown into a full-service packaging partner for luxury brands across Europe and North America." }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "Today, our integrated model spans creative design, precision manufacturing across three production lines, and global logistics \u2014 serving clients from independent ateliers to established brands. Our factory is located in Wuxi, Jiangsu, China." }),
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
          loading: "lazy"
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
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom11.Link, { to: "/contact", className: "btn-primary", children: "Partner With Us" })
    ] }) }) })
  ] });
}

// src/pages/News.tsx
var import_react_router_dom12 = require("react-router-dom");

// src/data/articles.ts
var articles = [
  {
    "slug": "how-to-choose-a-custom-jewelry-pouch",
    "title": "How to Choose a Custom Jewelry Pouch: Fabric, Size, Closure and Branding",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/factory/elapack-09.jpg",
    "imageAlt": "Custom suede jewelry pouches being sewn on a production line",
    "excerpt": "A pouch chosen by look alone is a guess. Map your piece and brand bar to fabric, size, closure and branding before you compare quotes.",
    "metaDescription": "Learn how to choose a custom jewelry pouch by fabric, size, closure and branding \u2014 and prepare the specs to send for a quote.",
    "body": "*Fabric, print and sizing guidance in this guide is generic industry knowledge. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at jewelry labels who want custom pouches \u2014 for rings, necklaces, earrings, bracelets or small gift pieces \u2014 and need to choose them before they request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A pouch chosen by look alone is a guess; the fabric, size, closure and branding have to fit the piece and the print.** Work through the four decisions below and you will finish with a pouch shortlist and the spec list to send for a quote.\n\n## Why pouches picked by look alone go wrong\n\nA custom pouch has four jobs: it has to hold the piece safely, survive the presentation, carry your branding well, and feel right in the hand. Each job maps to a decision \u2014 fabric, size, closure, branding \u2014 and when a pouch is picked by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a jewelry brand adds branded pouches to their line.\n2. They order pouches chosen by look, then find the fabric pills, the size does not fit the piece, or the logo prints poorly.\n3. **Without mapping the piece and the brand bar to the pouch specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong pouch means re-sampling, re-ordering, or an unboxing that misses the brand bar.\n5. The rework can delay a launch or leave stock that does not match the brand.\n6. The task on this page is to map the piece and brand to fabric, size, closure and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for the pouch you actually need.\n\n## Four decisions that choose your pouch\n\n**Map the piece and the brand bar to the fabric, size, closure and branding before you compare quotes.** Each decision below ends with the question your piece has to answer.\n\n### Fabric\n\nThe first decision is the material. The main families are: velvet and suede, which read plush and premium and suit rings and pendants presented as gifts; cotton, muslin and linen, which read natural and understated and take print crisply; satin, which reads smooth and dressy against fine jewellery; and non-woven or microfiber, which read practical and economical for volume or retail use. The question from your side is which hand-feel and durability your brand needs, and how the fabric takes your print \u2014 a delicate logo needs a smooth, tight-weave surface, while a deep emboss or foil needs a fabric that holds the treatment. A supplier that works across this full range \u2014 velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, plus custom developments \u2014 lets you match the material to the piece instead of forcing the piece into one house fabric.\n\n### Size\n\nThe second decision is the fit. A pouch that is too small distorts the piece and the closure; one that is too large lets the piece rattle and looks sloppy at unboxing. Measure the piece and choose a pouch size with a little room \u2014 and remember the size also affects cost and the minimum order, so settle the size range before you ask for pricing. As a working reference, jewellery pouches commonly land in three bands: 7\xD79 and 8\xD710 cm for rings, stud earrings and slim pendants; 10\xD712 cm for larger pendants, bracelets and small gift pieces; and 12\xD715 cm upward when a piece ships with a box, a card or extra presentation. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec, not by eye from a product photo.\n\n### Closure\n\nThe third decision is how the pouch closes. A drawstring is classic and easy to open; a zipper is more secure and suits repeat use; a flap, tuck or button closure is minimal and clean for presentation. The question is what the piece needs and what you want the unboxing to feel like \u2014 a heavy piece that will be carried needs a secure closure, while a presentation piece may favour a clean drawstring. Most suppliers offer several closure options and can combine a closure with a specific fabric, so list the closure you want rather than leaving it to the supplier's default.\n\n### Branding\n\nThe fourth decision is how the brand appears. Options include a woven label sewn in, a printed logo, a deboss or foil stamp, embroidery, or a transfer print \u2014 and each suits different fabrics and order sizes. A woven label reads premium and durable; a printed logo is flexible for colour and placement; foil and deboss add a tactile, gift-like finish; embroidery reads heritage and bespoke. The question is what your brand bar requires \u2014 a logo that must be exact and consistent needs a method the fabric can hold across the run \u2014 so confirm the print method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A pouch can pass on fabric and size and still fail on closure or branding, so decide all four before you compare quotes.\n\n## When a pouch that looks right is still wrong\n\n**A fabric or print that looks right in a photo can still pill, shrink or print poorly in production.** Three boundaries keep this page honest:\n\n- A photo does not show hand-feel, weight or how the fabric behaves over time. Ask for a physical swatch or sample of the actual fabric before you commit to a large run.\n- Print and branding behave differently on different fabrics. A logo that is crisp on a smooth cotton can blur on a textured velvet, so confirm the method on the actual material.\n- Size in the product photo is hard to judge. Confirm the finished size in the spec, not by eye from a picture, and check it against your piece.\n\n## Prepare the pouch spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the pouch spec list for your quote request from the piece, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The piece: what it is, its size and weight, and how it will be presented or shipped.\n2. The fabric: velvet, suede, cotton, muslin, satin, linen, microfiber, non-woven or another material, with any colour reference.\n3. The size: the finished pouch size in centimetres that fits the piece with a little room \u2014 from 7\xD79 / 8\xD710 / 10\xD712 cm for most jewellery up to custom sizes.\n4. The closure: drawstring, zipper, flap, tuck, button or another option.\n5. The branding: the logo treatment (woven, printed, deboss, foil, embroidery or transfer), the colour match (for example a Pantone reference), and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two pouches that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "how-to-choose-custom-drawstring-bags",
    "title": "How to Choose Custom Drawstring Bags: Fabric, Size, Closure and Print",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/factory/elapack-05.jpg",
    "imageAlt": "Close-up of drawstring bag stitching at a sewing station",
    "excerpt": "A bag chosen by look alone is a guess. Map your piece and brand bar to fabric, size, closure and print before you compare quotes.",
    "metaDescription": "Learn how to choose custom drawstring or muslin bags by fabric, size, closure and print \u2014 and prepare the specs to send for a quote.",
    "body": "*Fabric, print and sizing guidance in this guide is generic industry knowledge. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at fragrance, gift and retail labels who want custom drawstring or muslin bags \u2014 for perfumes, candles, soaps, small gifts and retail products \u2014 and need to choose them before they request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A bag chosen by look alone is a guess; the fabric, size, closure and print have to fit the product and the print.** Work through the four decisions below and you will finish with a bag shortlist and the spec list to send for a quote.\n\n## Why bags picked by look alone go wrong\n\nA custom bag has four jobs: it has to hold the product safely, survive the presentation, carry your branding well, and feel right in the hand. Each job maps to a decision \u2014 fabric, size, closure, branding \u2014 and when a bag is picked by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a fragrance, gift or retail brand adds branded bags to their line.\n2. They order bags chosen by look, then find the fabric pills, the size does not fit the product, or the logo prints poorly.\n3. **Without mapping the product and the brand bar to the bag specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong bag means re-sampling, re-ordering, or an unboxing that misses the brand bar.\n5. The rework can delay a launch or leave stock that does not match the brand.\n6. The task on this page is to map the product and brand to fabric, size, closure and print, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for the bag you actually need.\n\n## Four decisions that choose your bag\n\n**Map the product and the brand bar to the fabric, size, closure and print before you compare quotes.** Each decision below ends with the question your piece has to answer.\n\n### Fabric\n\nThe first decision is the material. The main families are: velvet and suede, which read plush and premium and suit candles, soaps and gift pieces presented as treats; cotton, muslin and linen, which read natural and understated and take print crisply \u2014 muslin is the classic drawstring-bag fabric; satin, which reads smooth and dressy for beauty and fragrance gifting; and non-woven or microfiber, which read practical and economical for retail or volume use. The question from your side is which hand-feel and durability your brand needs, and how the fabric takes your print \u2014 a delicate logo needs a smooth, tight-weave surface, while a deep emboss or foil needs a fabric that holds the treatment. A supplier that works across this full range \u2014 velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, plus custom developments \u2014 lets you match the material to the product instead of forcing the product into one house fabric.\n\n### Size\n\nThe second decision is the fit. A bag that is too small distorts the product and the closure; one that is too large lets the product rattle and looks sloppy at unboxing. Measure the product and choose a bag size with a little room \u2014 and remember the size also affects cost and the minimum order, so settle the size range before you ask for pricing. As a working reference, drawstring and muslin bags commonly land in three bands: 7\xD79 and 8\xD710 cm for samples, small soap bars and compact gift items; 10\xD712 and 12\xD715 cm for candles, standard soap bars and mid-size products; and 15\xD720 cm and up for gift sets or products that ship with extra presentation. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec, not by eye from a product photo.\n\n### Closure\n\nThe third decision is how the bag closes. A drawstring is the classic and most common option \u2014 easy to open, soft when gathered \u2014 and can be finished with a cord, a ribbon or a stopper; a zipper is more secure and suits repeat use; a flap, tuck or button closure is minimal and clean for presentation. The question is what the product needs and what you want the unboxing to feel like \u2014 a heavy set that will be carried needs a secure closure, while a presentation piece may favour a clean drawstring. Most suppliers offer several closure options and can pair the closure with the fabric and the cord finish, so name the closure and any cord detail in your spec rather than leaving it to the supplier's default.\n\n### Branding\n\nThe fourth decision is how the brand appears. Options include a woven label sewn in, a printed logo, a deboss or foil stamp, embroidery, or a transfer print \u2014 and each suits different fabrics and order sizes. A printed logo is the most common on muslin and cotton; a woven label reads premium and durable; foil and deboss add a tactile, gift-like finish on velvet and suede; embroidery reads heritage and bespoke. The question is what your brand bar requires \u2014 a logo that must be exact and consistent needs a method the fabric can hold across the run \u2014 so confirm the print method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A bag can pass on fabric and size and still fail on closure or branding, so decide all four before you compare quotes.\n\n## When a bag that looks right is still wrong\n\n**A fabric or print that looks right in a photo can still pill, shrink or print poorly in production.** Three boundaries keep this page honest:\n\n- A photo does not show hand-feel, weight or how the fabric behaves over time. Ask for a physical swatch or sample of the actual fabric before you commit to a large run.\n- Print and branding behave differently on different fabrics. A logo that is crisp on a smooth cotton can blur on a textured velvet, so confirm the method on the actual material.\n- Size in the product photo is hard to judge. Confirm the finished size in the spec, not by eye from a picture, and check it against your piece.\n\n## Prepare the bag spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the bag spec list for your quote request from the product, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: what it is, its size and weight, and how it will be presented or shipped.\n2. The fabric: velvet, suede, cotton, muslin, satin, linen, microfiber, non-woven or another material, with any colour reference.\n3. The size: the finished bag size in centimetres that fits the product with a little room \u2014 from 7\xD79 / 8\xD710 cm for small items up through 10\xD712 / 12\xD715 / 15\xD720 cm for standard and gift-size products, to custom sizes.\n4. The closure: drawstring (with cord or ribbon finish), zipper, flap, tuck, button or another option.\n5. The branding: the logo treatment (woven, printed, deboss, foil, embroidery or transfer), the colour match (for example a Pantone reference), and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two bags that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "custom-hair-extension-packaging-guide",
    "title": "Custom Hair Extension Packaging: How to Choose Bags, Boxes and Bundle Formats",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "7 min read",
    "image": "/images/factory/elapack-08.jpg",
    "imageAlt": "Fabric rolls in stock at a textile packaging factory",
    "excerpt": "Hair packaging chosen by look alone is a guess. Map your hair product and brand bar to format, material, size and branding before you order.",
    "metaDescription": "Learn how to choose custom hair extension and wig packaging by format, material, size and branding \u2014 and prepare the specs for a quote.",
    "body": "*Material, sizing and transit guidance in this guide is generic industry knowledge. Confirm the specifics for your hair product with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at hair, beauty and wig brands who sell extensions, closures, bundles or full wigs and need custom packaging that protects the hair and carries the brand. It covers choosing the format, material, size and branding before you request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Hair packaging chosen by look alone is a guess; the format, material, size and branding have to fit the product and survive transit.** Work through the four decisions below and you will finish with a packaging shortlist and the spec list to send for a quote.\n\n## Why hair packaging picked by look alone fails\n\nHair products are not all the same to package: a bundle of loose extensions, a weft, a closure and a full wig each have different shapes, weights and fragility, and each needs packaging that keeps the hair from shifting, tangling or crushing while it also presents the brand. When packaging is chosen by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a hair, beauty or wig brand adds custom packaging to an extensions or wig line.\n2. They order packaging chosen by look, then the hair shifts in transit, the box is the wrong size, or the branding does not hold.\n3. **Without mapping the hair product and the brand bar to the packaging specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong package means re-ordering, damaged returns, or packaging that does not protect the hair or present the brand.\n5. The rework can delay a launch or leave stock that does not match the brand or survive shipping.\n6. The task on this page is to map the hair product and brand to format, material, size and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for packaging that actually protects and presents your product.\n\n## Four decisions that choose your hair packaging\n\n**Map the hair product and the brand bar to the format, material, size and branding before you compare quotes.** Each decision below ends with the question your product has to answer.\n\n### Format\n\nThe first decision is the packaging format. A bundle or weft often suits a box or a sleeve with the hair laid flat; a single unit may suit a pouch; a full wig usually needs a sturdier box or a large fabric bag with a support so the cap keeps its shape. Fabric bags are a real option for hair: a wide, tall drawstring pouch holds a wig with room for the cap to keep its shape while still reading soft-touch, and is lighter and less bulky to ship than a rigid box. The question from your side is which format holds your product's shape without crushing it, and fits how your customers will receive and store it.\n\n### Material\n\nThe second decision is the material. A fabric pouch or bag (velvet, cotton, muslin, satin, linen, non-woven, microfiber or a soft synthetic) suits a lower-cost, soft-touch presentation; a rigid box or a paperboard sleeve suits a more premium, protective presentation. The question is what your product needs \u2014 a wig cap that must keep its shape needs structure, while a bundle that sits flat may be fine in a padded pouch \u2014 and what your brand bar expects from the hand-feel. For a full wig in a bag, the fabric has to be strong enough to hold the weight without stretching out of shape, so confirm the material and construction for the finished size before you commit.\n\n### Size\n\nThe third decision is the fit. Hair that is packed too tightly can tangle or crease; a box or bag that is too large lets a wig shift and lose its shape. Measure the product in its selling form \u2014 a wig on a stand or folded, a bundle coiled \u2014 and choose a size that holds it without crushing, remembering that size also drives cost and minimum order. As a working reference, hair packaging commonly lands in three bands: 7\xD79 and 8\xD710 cm for small accessories like closures and combs; 12\xD715 and 15\xD720 cm for bundles and wefts laid flat; and 16\xD723, 20\xD730 and 30\xD740 cm for full wigs or sets that need height and room. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec against your actual product.\n\n### Branding\n\nThe fourth decision is how the brand appears. Woven labels, printed logos, foils, deboss, embroidery and transfer prints each read differently on fabric versus board, and each has different minimums and cost. On a fabric bag, a woven label or a printed logo are the common choices; foil and deboss add a premium finish on velvet and suede. The question is what your brand bar requires and which surface your chosen format gives you to carry it, so confirm the print or label method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A format can look right and still fail on material or size, so decide all four before you compare quotes.\n\n## When packaging that looks premium is still wrong\n\n**Packaging that looks premium in a photo can still let hair shift in transit or fail the branding if the material is wrong.** Three boundaries keep this page honest:\n\n- A photo does not show how the product sits inside, how the material behaves, or whether the packaging survives shipping. Ask for a physical sample with your actual product before a large run.\n- Wigs and bundles need different protection. A package that works for a flat bundle can crush a wig cap, so test the format with the real product, not a generic assumption.\n- Branding behaves differently on fabric versus board. Confirm the label or print method on the actual material, and check the finished size against the product, not by eye.\n\n## Prepare the packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the packaging spec list for your quote request from the product, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: extensions, a closure, a bundle or a full wig \u2014 its size, how it is sold and how it ships.\n2. The format: box, sleeve, pouch or bag, and whether the product needs a support or insert.\n3. The material: fabric (velvet, cotton, muslin, satin, linen, non-woven, microfiber) or board, with any colour reference.\n4. The size: the finished package size in centimetres that holds the product without crushing or shifting \u2014 from 7\xD79 / 8\xD710 cm for accessories up through 16\xD723 / 20\xD730 / 30\xD740 cm for wigs and sets.\n5. The branding: the label or print method (woven, printed, deboss, foil, embroidery or transfer), the colour match, and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two packaging options that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "custom-clothing-apparel-packaging-guide",
    "title": "Custom Clothing & Apparel Packaging: Bags and Boxes for Fashion Brands",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/factory/elapack-03.jpg",
    "imageAlt": "Sewing floor producing custom textile packaging",
    "excerpt": "Clothing packaging chosen by look alone is a guess. Map your garment and brand bar to format, material, size and branding before you order.",
    "metaDescription": "Learn how to choose custom clothing and apparel packaging by format, material, size and branding \u2014 and prepare the specs for a quote.",
    "body": "*Material, sizing and transit guidance in this guide is generic industry knowledge. Confirm the specifics for your garment with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at fashion, apparel and clothing brands who sell shirts, dresses, knitwear, accessories or other garments and need custom packaging that protects the piece and carries the brand. It covers choosing the format, material, size and branding before you request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Clothing packaging chosen by look alone is a guess; the format, material, size and branding have to fit the garment and survive transit.** Work through the four decisions below and you will finish with a packaging shortlist and the spec list to send for a quote.\n\n## Why clothing packaging picked by look alone fails\n\nGarments are not all the same to package: a folded shirt, a dress that needs to keep its shape on a hanger, a delicate knit and a small accessory each have different needs, and each package has to keep the piece from creasing, crushing or shifting while it also presents the brand. When packaging is chosen by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a fashion or apparel brand adds custom packaging to a clothing line.\n2. They order packaging chosen by look, then the garment creases in transit, the bag is the wrong size, or the branding does not hold.\n3. **Without mapping the garment and the brand bar to the packaging specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong package means re-ordering, damaged or creased returns, or packaging that does not present the garment.\n5. The rework can delay a launch or leave stock that does not match the brand or survive shipping.\n6. The task on this page is to map the garment and brand to format, material, size and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for packaging that actually protects and presents your product.\n\n## Four decisions that choose your clothing packaging\n\n**Map the garment and the brand bar to the format, material, size and branding before you compare quotes.** Each decision below ends with the question your product has to answer.\n\n### Format\n\nThe first decision is the packaging format. A folded shirt or a knit often suits a box or a mailer with the garment folded and supported; a dress or a piece that must keep its shape may need a garment bag or a box with tissue and a hanger cut-out; accessories suit smaller pouches or rigid boxes. The question from your side is which format holds your product without creasing or crushing it, and fits how your customers receive and store it.\n\n### Material\n\nThe second decision is the material. A fabric bag (velvet, cotton, muslin, satin, linen, non-woven, microfiber or a soft synthetic) reads casual and soft-touch; a rigid box or a paperboard mailer reads more premium and protective. The question is what your garment needs \u2014 a heavy or structured piece needs more support, while a soft knit may be fine in a padded fabric bag \u2014 and what your brand bar expects from the hand-feel. A supplier that works across the full fabric range plus boxes lets you pair the hand-feel with the piece instead of settling for a one-size packaging house.\n\n### Size\n\nThe third decision is the fit. A garment packed too tightly creases; a box or bag that is too large lets the piece shift and wrinkle. Measure the garment in its selling form \u2014 a shirt folded to its retail size, a dress on a hanger, an accessory in its pouch \u2014 and choose a size that holds it without crushing, remembering that size also drives cost and minimum order. As a working reference, accessories packaging commonly lands in three bands: 7\xD79 and 8\xD710 cm for small accessories such as scarves, belts and jewellery cases; 12\xD715 and 15\xD720 cm for mid-size accessories and folded knitwear; and 16\xD723 cm and up for larger pieces, garment bags or pieces that ship with a hanger or extra presentation. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec against the garment.\n\n### Branding\n\nThe fourth decision is how the brand appears. Woven labels, printed logos, foils, deboss, embroidery and transfer prints each read differently on fabric versus board, and each has different minimums and cost. On a fabric bag, a woven label or a printed logo are the common choices; foil and deboss add a premium finish on velvet and suede. The question is what your brand bar requires and which surface your chosen format gives you to carry it, so confirm the print or label method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A format can look right and still fail on material or size, so decide all four before you compare quotes.\n\n## When packaging that looks premium is still wrong\n\n**Packaging that looks premium in a photo can still crease or damage the garment if the material or size is wrong.** Three boundaries keep this page honest:\n\n- A photo does not show how the garment sits inside, how the material behaves, or whether the packaging survives shipping. Ask for a physical sample with your actual garment before a large run.\n- Garments need different support. A package that works for a folded tee can crush a structured dress, so test the format with the real product, not a generic assumption.\n- Branding behaves differently on fabric versus board. Confirm the label or print method on the actual material, and check the finished size against the garment, not by eye.\n\n## Prepare the packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the packaging spec list for your quote request from the garment, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: a folded shirt, a dress on a hanger, an accessory \u2014 its size, how it is sold and how it ships.\n2. The format: box, mailer, garment bag or pouch, and whether the piece needs tissue, a support or an insert.\n3. The material: fabric (velvet, cotton, muslin, satin, linen, non-woven, microfiber) or board, with any colour reference.\n4. The size: the finished package size in centimetres that holds the garment without creasing or shifting \u2014 from 7\xD79 / 8\xD710 cm for small accessories up through 15\xD720 / 16\xD723 cm and larger for garment bags.\n5. The branding: the label or print method (woven, printed, deboss, foil, embroidery or transfer), the colour match, and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two packaging options that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  },
  {
    "slug": "custom-gift-packaging-guide",
    "title": "Custom Gift Packaging: Bags, Boxes and Gift Sets",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "6 min read",
    "image": "/images/factory/elapack-06.jpg",
    "imageAlt": "Box-making machine in a paper packaging workshop",
    "excerpt": "Gift packaging chosen by look alone is a guess. Map your gift and brand bar to format, material, size and branding before you order.",
    "metaDescription": "Learn how to choose custom gift packaging by format, material, size and branding \u2014 and prepare the specs for a quote.",
    "body": "*Material, sizing and transit guidance in this guide is generic industry knowledge. Confirm the specifics for your gift with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners who create gift packaging \u2014 for beauty, fragrance, jewelry or keepsake products \u2014 and need custom packaging that presents the gift and carries the brand. It covers choosing the format, material, size and branding before you request samples or quotes. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **Gift packaging chosen by look alone is a guess; the format, material, size and branding have to fit the gift and the brand.** Work through the four decisions below and you will finish with a packaging shortlist and the spec list to send for a quote.\n\n## Why gift packaging picked by look alone fails\n\nGift products are not all the same to package: a beauty set, a fragrance in a bottle, a piece of jewelry and a small keepsake each have different needs, and each package has to hold the gift securely and present it well while it also carries the brand. When packaging is chosen by photo alone, one of those jobs usually fails.\n\n1. A packaging buyer or brand owner at a brand adds custom packaging to a gift range.\n2. They order packaging chosen by look, then the gift shifts in transit, the box is the wrong size, or the branding does not hold.\n3. **Without mapping the gift and the brand bar to the packaging specs, the choice is guesswork and quotes are not comparable.**\n4. A wrong package means re-ordering, damaged returns, or packaging that does not present the gift.\n5. The rework can delay a launch or leave stock that does not match the brand or survive shipping.\n6. The task on this page is to map the gift and brand to format, material, size and branding, and prepare the specs for a quote.\n\nThe fix is not to look harder at photos. It is to decide the four specs on purpose, so the quote you request is for packaging that actually protects and presents your gift.\n\n## Four decisions that choose your gift packaging\n\n**Map the gift and the brand bar to the format, material, size and branding before you compare quotes.** Each decision below ends with the question your product has to answer.\n\n### Format\n\nThe first decision is the packaging format. A beauty set or a fragrance often suits a rigid or folding box with a custom insert that holds each piece; a magnetic-closure box adds a premium, keepsake unboxing; a single item may suit a pouch or a small box with tissue; a keepsake or jewellery piece suits a smaller rigid box or pouch; and a fabric bag \u2014 drawstring or otherwise \u2014 can wrap a gift that does not need structure. The question from your side is which format holds your product without creasing or crushing it, and fits how your customers receive and store it \u2014 and whether a bag, a box or a bag-in-box combination best matches the price point of the gift.\n\n### Material\n\nThe second decision is the material. A fabric bag (velvet, cotton, muslin, satin, linen, non-woven, microfiber or a soft synthetic) reads casual and soft-touch; a rigid box, a magnetic box or a paperboard mailer reads more premium and protective; a rigid or folding box can carry an interior insert to hold a bottle or a set. The question is what your gift needs \u2014 a fragile bottle needs a protective insert, while a soft textile item may be fine in a fabric pouch \u2014 and what your brand bar expects from the hand-feel.\n\n### Size\n\nThe third decision is the fit. A gift packed too tightly can crush or distort; a box or bag that is too large lets the piece shift and look sloppy at unboxing. Measure the gift in its selling form \u2014 a set assembled, a bottle with its insert, a keepsake in its pouch \u2014 and choose a size that holds it securely, remembering that size also drives cost and minimum order. As a working reference, gift packaging commonly lands in three bands: 7\xD79 and 8\xD710 cm for small keepsakes and jewellery; 12\xD715 and 15\xD720 cm for standard gifts, single candles and beauty items; and 16\xD723, 20\xD730 and 30\xD740 cm for gift sets, larger fragrances or items that ship with multiple pieces. Sizes outside those bands are usually custom, so confirm the finished size in centimetres in the spec.\n\n### Branding\n\nThe fourth decision is how the brand appears. Woven labels, printed logos, foils, deboss, embroidery and transfer prints each read differently on fabric versus board \u2014 and foil and deboss are common on rigid and magnetic boxes to lift the brand \u2014 and each has different minimums and cost. The question is what your brand bar requires and which surface your chosen format gives you to carry it, so confirm the print or label method and the colour match (for example a Pantone reference) on the actual material before you commit.\n\nRead the four together. A format can look right and still fail on material or size, so decide all four before you compare quotes.\n\n## When packaging that looks premium is still wrong\n\n**Packaging that looks premium in a photo can still fail to protect the gift or present the brand if the material or size is wrong.** Three boundaries keep this page honest:\n\n- A photo does not show how the gift sits inside, how the material behaves, or whether the packaging survives shipping. Ask for a physical sample with your actual gift before a large run.\n- Gifts need different support. A package that works for a small item can leave a fragile bottle loose, so test the format with the real product, not a generic assumption.\n- Branding behaves differently on fabric versus board. Confirm the label or print method on the actual material, and check the finished size against the gift, not by eye.\n\n## Prepare the packaging spec list for your quote\n\nNothing on this page collects your data or sends anything. **Fill the packaging spec list for your quote request from the gift, the branding and the quantity.** Copy the lines below into your own note:\n\n1. The product: a beauty set, a fragrance or a keepsake \u2014 its size, how it is sold and how it ships.\n2. The format: box (rigid, folding or magnetic), mailer, bag or pouch, and whether the gift needs an insert, tissue or a divider.\n3. The material: fabric (velvet, cotton, muslin, satin, linen, non-woven, microfiber) or board, with any colour reference.\n4. The size: the finished package size in centimetres that holds the gift securely without shifting \u2014 from 7\xD79 / 8\xD710 cm for small keepsakes up through 15\xD720 / 20\xD730 / 30\xD740 cm for gift sets.\n5. The branding: the label or print method (woven, printed, deboss, foil, embroidery or transfer), the colour match, and the placement.\n\nKeep the note local, and send these specs to your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified. With the list filled, you have finished the choosing task this page owns. Your next step is the comparison task \u2014 putting two packaging options that both pass your four specs side by side on the same dimensions \u2014 which is a separate page for a separate decision."
  }
].concat([
  {
    "slug": "how-to-read-a-packaging-specification-sheet",
    "title": "How to Read a Custom Packaging Specification Sheet: The Specs That Decide Fit",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "7 min read",
    "image": "/images/factory/elapack-01.jpg",
    "imageAlt": "Rigid boxes stacked on an assembly line at a packaging factory",
    "excerpt": "A packaging specification is a statement about conditions, not a fixed promise. Learn which four specification groups decide fit and where to stop when a condition is missing.",
    "metaDescription": "Learn to read a custom packaging specification sheet in product-and-brand context \u2014 structure, board, finish and compliance \u2014 and complete a local fit check before you compare quotes.",
    "body": "*Example figures and product scenarios in this guide are illustrative, not a promise about any supplier's capability. Confirm every specification against the current sheet from the supplier you are evaluating.*\n\nThis guide shows packaging buyers and brand managers how to read a custom packaging specification sheet, so they can tell whether a construction fits their product and brand before they compare quotes. It is for premium jewelry, fragrance & gift, and hair (wig) brands selling in the US or Europe. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A spec on paper cannot prove the package will protect the product or meet the brand bar; it can only show you what to check and what still has to be confirmed.** Finish the five-line check below and you will have a one-page fit boundary plus the open specifications to raise with your supplier.\n\n## Why the same specification can fit one launch and miss another\n\nA packaging specification is a statement about the conditions a construction was built for, not a fixed fact that holds for every product. When the condition behind a number is missing from your reading, the spec stops telling you whether it fits your launch.\n\n1. A packaging buyer or brand manager receives a custom specification sheet for a new launch or a line extension.\n2. The sheet names the structure, board, finish and material, but it does not state the product weight, the brand-colour tolerance or the unboxing it was built for.\n3. Without those conditions, **the buyer cannot tell whether the specification was built for a product and brand requirement like theirs**.\n4. **A choice made on the finished look alone can require extra sampling rounds, artwork or structural rework, or a production run that misses the brand bar.**\n5. The rework can delay a seasonal or limited launch, which raises the cost of a wrong read.\n6. The task on this page is to map your product and brand requirements to the specification columns and stop at the first specification you cannot confirm.\n\nThe point is not to make the spec sheet look hostile. It is that the reading step, done in the right order, is what separates a quote you can compare from a paper comparison that says nothing about your launch.\n\n## Four specification groups to read in context before you compare quotes\n\n**Match the spec columns to your product and brand before you compare quotes.** A construction can look right on paper and still sit outside your product weight, your colour tolerance or your compliance requirement. Work down these four groups in order; each one ends with the question your launch has to answer.\n\n### Structure and how the package opens\n\nThe group states the construction family \u2014 a rigid or set-up box, a folding carton, a shopping bag, a ribbon or textile closure \u2014 and how the package is meant to open and hold its content. The question from your side is whether the structure carries the product and delivers the unboxing your brand wants: a heavy flacon needs a different cavity and base than a light blister card, and a rigid lid that hinges changes the production line as much as the look.\n\n### Board, lining and the hand-feel bar\n\nThe group states the board type and weight (for example, grams per square metre), the lining and the paper sourcing. The question is whether the substrate holds the product's weight and takes the finish you want without losing the hand-feel your brand needs: a heavier board is not automatically better \u2014 it has to suit the size, the closure and the finishing process on the sheet.\n\n### Finish, decoration and colour\n\nThe group states the surface finish (matte, gloss, soft-touch lamination), the decoration (foil, embossing or debossing) and the colour reference the print is matched to. The question is whether the finish and the brand colour are specified with a tolerance the supplier commits to hold across the whole run, because a colour that drifts between batches can break a tightly art-directed launch even when the structure is right.\n\n### Materials and destination compliance\n\nThe group states the material content and any compliance claims the sheet carries \u2014 recycled content, certified paper, inks and coatings \u2014 and the destination rules they are meant to satisfy. The question is which claims your brand or your destination market requires to be verifiable with certificates or documentation, rather than stated on the sheet alone.\n\nRead the four groups together. A construction can pass on structure and board and still fail on colour tolerance or compliance, and that is exactly where the sheet stops talking and your product and brand data has to start.\n\n## Where reading the specification is not enough\n\n**A spec on paper is not a proven package.** Three boundaries keep this page honest:\n\n- The sheet does not cover every production variable. Colour across a full run, the difference between a paper swatch and the produced material, and how the package survives transit can all drift from the page; each needs the supplier to confirm a condition, not a promise printed on the sheet.\n- A construction can also be a genuine mismatch for the launch. If a required specification column is missing and the supplier cannot confirm it, treat that option as not yet evaluated for your product, not as a workable choice.\n- Reading the sheet never replaces sampling. Material and colour approval and a pre-production sample still decide whether the construction holds the brand bar before the run \u2014 this page only narrows the field before those steps.\n\n## Run the five-line fit check before you brief a supplier\n\nNothing on this page collects your data or sends anything. Copy the five lines below into your own note and answer them for the launch you are planning:\n\n1. What is the product \u2014 its size, weight and fragility \u2014 and the launch or quantity window you are planning?\n2. Which structure and unboxing does the product need: a rigid box, a folding carton, a bag, a ribbon or textile closure?\n3. Which brand cues must stay consistent \u2014 the colour reference, the finish, the logo treatment \u2014 and what tolerance is acceptable?\n4. Which material or compliance requirements apply \u2014 recycled content, certified paper, coatings \u2014 and which must be verifiable, not just printed?\n5. Which specification is still open \u2014 the one the sheet does not state and you cannot confirm yourself?\n\nWhen line 5 has an answer, you have finished the reading task this page owns: a completed fit boundary and one open specification to confirm. Keep the note local, and raise that open specification with your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified.\n\nYour next step, once the reading is done, is the comparison task: putting two constructions that both pass your fit check side by side on the same dimensions. That is a separate page for a separate decision, and it starts from the specification columns you have now filled in."
  },
  {
    "slug": "packaging-colour-tolerance-explained",
    "title": "Packaging Colour Tolerance: What an Acceptable Colour Difference Means on a Custom Spec",
    "category": "Sourcing Guide",
    "date": "September 2026",
    "readTime": "7 min read",
    "image": "/images/factory/elapack-04.jpg",
    "imageAlt": "Screen printing station for colour work on textile packaging",
    "excerpt": "A colour difference is only acceptable when the spec names a number and a measurement method. Learn what tolerance means, where drift comes from, and how to draft the clause.",
    "metaDescription": "Understand what colour tolerance means on a custom packaging spec, why colour drifts between sample and batch, and how to set an acceptable-difference bar before you order.",
    "body": `*Measurement terms and example values in this guide are generic industry explanations, not a promise about any supplier's instruments. Confirm the delta-E scale and measurement method with the supplier you are evaluating.*

This guide explains what colour tolerance means on a custom packaging specification, so you can tell \u2014 before you order or approve a run \u2014 whether a colour difference is inside an acceptable range or a real problem. It is for packaging buyers and brand managers at premium jewelry, fragrance & gift, and hair (wig) brands who approve packaging against a signed sample. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A colour difference is only 'acceptable' if the spec names a number and a measurement method; an eye is not a measurement.** Read the sections below and you will be able to draft an acceptable-difference clause for your next spec, and list the questions to put to your supplier.

## Why 'it looks different' is not a useful finding

A colour difference between a new batch and an approved sample is common in custom packaging \u2014 inks, board, coating and press conditions all shift slightly between runs. The problem is rarely the difference itself. It is that most specs never name an acceptable range, so every disagreement is argued case by case instead of measured against a bar.

1. A packaging buyer or brand manager approves a new batch of custom packaging against the signed sample.
2. The batch looks different, but the spec does not state an acceptable colour difference or a measurement method.
3. **Without a tolerance in the spec, the buyer cannot tell whether the difference is inside an acceptable range, so approval stalls.**
4. The buyer and supplier argue each batch by eye \u2014 rematching, re-running, holding a launch \u2014 because there is no agreed number to measure against.
5. The delay can push back a seasonal or limited launch, or leave stock that has to be reworked or written off.
6. The task on this page is to learn what tolerance means and draft an acceptable-difference clause before the next run.

The fix is not to demand a perfect match every time. It is to agree, in the spec, how close the colour has to be and how that closeness will be measured.

## What colour tolerance actually means

**Put a tolerance number and a measurement method in the spec before the run, not after the disagreement.** A tolerance is a stated acceptable difference between the produced colour and the reference \u2014 usually the signed sample or a measured colour value.

- The reference. Tolerance only means something against a fixed reference. That is normally the approved production sample you both sign, or a measured value taken from it. Without a shared reference, a tolerance number has nothing to attach to.
- The delta-E value. Colour difference is commonly expressed as delta-E (\u0394E), a single number that describes how far two colours sit apart. A lower number is a closer match. The exact scale and what each number looks like can vary by the method used, so the number only has meaning when the method is named.
- The measurement method and light. A tolerance is measured, not judged. That means naming the instrument, the lighting condition (a standard daylight source is the common habit) and the geometry, so both sides measure the same way.

A tolerance clause that names all three \u2014 reference, delta-E value, measurement method \u2014 turns "this looks different" into "this is inside / outside the agreed range".

## Where colour drift between sample and batch comes from

Understanding the common sources of drift helps you set a realistic bar. These are generic industry causes, and the specific mix for your supplier should be confirmed with them:

- Ink and coating. The same Pantone reference can print differently on different board, coating, or press conditions. Matte and soft-touch coatings change how a colour reads under light.
- Board and substrate. The base material's shade and absorbency affect the printed colour. A switch in board or a different lining can shift the result even with the same ink.
- Press and process setup. Colour is set up per run; humidity, speed and press wear all cause small shifts. This is why a retained sample from the approved run is a more reliable reference than a digital proof.
- Measurement conditions. The same piece can measure differently under warm store light, daylight, or a screen. Comparing under a controlled light and the same geometry removes this as a false alarm.

Drift is normal and bounded; the question your spec answers is how much drift is acceptable and how it is verified.

## When a tolerance on paper is not enough

**A tolerance on paper only holds if the supplier measures the same way and can show the result.** Three boundaries keep this page honest:

- A delta-E number without a named measurement method is not verifiable. Ask the supplier how they measure, under what light, and whether they can share the reading for a batch.
- A signed sample from the approved run is the most reliable reference. A digital proof or a photo is not the same as the physical sample under controlled light.
- Tolerance describes the finished piece against the reference. It does not replace sampling or approval \u2014 the tolerance is what you check against during approval, not a substitute for it.

## Draft the acceptable-difference clause for your next spec

**Draft the acceptable-difference clause for your next spec from the reference, the delta-E value and the lighting condition.** Nothing on this page collects your data or sends anything. Copy the four lines below into your own note and fill them from your launch:

1. The reference: which signed production sample or measured colour value is the master?
2. The delta-E value: what number is the acceptable difference \u2014 and is it stated per colour or for the whole design?
3. The measurement method: which instrument, which lighting condition, and which geometry do you and the supplier agree on?
4. The open question: which of these does the supplier need to confirm \u2014 their method, their retained sample, or the tolerance they can actually hold?

When line 4 has an answer, you have finished the task this page owns: an acceptable-difference clause you can put in the next spec, and the questions to raise. Keep the note local, and raise those questions with your supplier through your existing approved contact process \u2014 do not send it anywhere this page has not verified.

Your next step, once the tolerance is written, is the approval process \u2014 how to check a batch against that clause at incoming inspection. That is a separate page for a separate decision, and it starts from the number you have now put in the spec.`
  },
  {
    "slug": "how-to-customize-eyelash-boxes",
    "title": "How to Customize Your Eyelash Boxes: Formats, Inserts, Print and Quantity",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/factory/elapack-02.jpg",
    "imageAlt": "Dielines and structural drawings prepared for a custom box program",
    "excerpt": "A lash box copied from a photo is a guess. Customize from the tray outward \u2014 format, structure, insert, print, quantity \u2014 before you brief a supplier.",
    "metaDescription": "Learn how to customize eyelash boxes step by step \u2014 tray format, box structure, inserts, print finishes and MOQ planning \u2014 before you request a quote.",
    "body": "*Format, print and sizing guidance in this guide is generic industry knowledge. Confirm material and production specifics with the supplier you are evaluating.*\n\nThis guide is for lash brand owners, salon buyers and wholesalers who are customizing eyelash boxes \u2014 a first run, a rebrand or a wholesale pack \u2014 and need to brief a supplier without wasting sampling rounds. It covers the five decisions that define a custom lash box: the tray format, the box structure, the insert, the print program and the quantity plan. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **A lash box customized from a photo reference is a guess; the box has to be built around the tray, the shelf and the brand, in that order.** Work through the five decisions below and you will finish with a customization brief ready to send for samples and quotes.\n\n## Why lash boxes customized from a photo disappoint\n\nA custom eyelash box does a double job: it holds the lash tray securely in transit and on the shelf, and it sells the shade and style system at first sight. When the box is copied from a photo instead of built from your tray, one of those jobs usually fails.\n\n1. A lash brand orders boxes customized to match a competitor photo or a marketplace template.\n2. The boxes arrive and the trays rattle, the lid presses on the lashes, or the printed layout sits over the wrong row.\n3. **Without mapping your trays and your retail context to the box specs, the customization is guesswork and quotes are not comparable.**\n4. A wrong box means re-sampling, re-cutting the insert, or retail stock that cannot go on shelf.\n5. The rework can delay a launch or a wholesale commitment, which raises the cost of a wrong brief.\n6. The task on this page is to map your trays and brand to structure, insert, print and quantity, and prepare the brief for a quote.\n\nThe fix is not a better photo. It is a brief that starts from the tray and works outward.\n\n## Five decisions that customize your lash box\n\n**Customize from the tray outward \u2014 format, structure, insert, print, quantity \u2014 before you compare quotes.** Each decision below ends with the question your line has to answer.\n\n### Start from the tray format\n\nThe tray decides the box, not the other way round. Measure the lash tray or pair card exactly \u2014 length, width and the height of the tray with lashes seated \u2014 and count how many trays one box must hold. As a working reference, stock lash formats commonly land near 14\xD710\xD76 cm for single-tray retail boxes, 15\xD715\xD75 cm for square multi-pair formats and 20\xD718\xD78 cm for wholesale display packs; anything outside those bands is fully custom. The question your line has to answer: how many trays per box, and does the box also carry accessories \u2014 glue, tweezers, an applicator \u2014 that need their own wells?\n\n### Choose the box structure\n\nThe structure follows the selling moment. A sleeve suits single-pair direct-to-consumer mailers; a tray-and-lid or flip-top box suits retail counters where the box is handled; a magnetic flip-top adds the premium open-close ritual for flagship lines; a tall display pack suits wholesale. The question: where does the box live \u2014 in a mailer, on a shelf, or in a display \u2014 and how often is it opened before purchase?\n\n### Specify the insert\n\nThe insert is what actually holds the lashes. Fitted inserts cut to the tray profile keep trays seated in transit and stop the rattle that reads as cheap; looser universal pockets cost less but let trays shift. Decide glued-in or loose, and whether accessory wells are part of the same insert tooling. The question: what happens to the box when it is dropped, and is that acceptable at your price point?\n\n### Plan the print and finish\n\nThe wrap carries the brand. Full-colour offset print covers the shade system and artwork edge to edge; foil stamping lifts a logo; embossing adds quiet relief; spot UV accents a pattern under shop light; inside-lid printing carries instructions or a brand line at the opening moment. The question: which two techniques carry the brand \u2014 and does the finish survive handling at retail, not just the photo?\n\n### Plan quantity and the run\n\nCustomization is priced per run, so quantity planning is part of the brief. Printing plates and cutting dies are set up once per design, which is why minimums exist; a low-MOQ supplier lets a first run act as a market test before the reorder. Check whether the minimum is per design or per SKU \u2014 one structure printed for several shade variants usually shares tooling but not always the minimum \u2014 and plan the first order around your fastest-moving shades. The question: how many pieces does the test need to be meaningful, and which variants earn the first run?\n\n## When customization cannot fix the problem\n\n**Some failures are decided before the box is ever customized.** Three boundaries keep this page honest:\n\n- A photo cannot tell you the internal clearance. The tray-to-lid gap has to be confirmed from a physical tray and sample, not from a product image.\n- Print proofs drift. A colour approved on screen can sit differently on the produced wrap; confirm the colour match on a printed sample of the actual board before the run.\n- Inserts are cut to a tolerance. A tray that measures fine on paper can sit loose if the insert is cut to a generic profile rather than yours; the sample should be checked with the real tray inside.\n\n## Prepare the customization brief\n\nNothing on this page collects your data or sends anything. Copy the six lines below into your own note and fill them for the line you are launching:\n\n1. The tray: dimensions, trays per box, and the accessories that ride along.\n2. The structure: sleeve, tray-and-lid, flip-top, magnetic or display pack \u2014 and where the box lives.\n3. The insert: fitted to the tray profile or universal, glued or loose, with or without accessory wells.\n4. The print: artwork coverage, the one or two finishes that carry the brand, and inside-lid printing if wanted.\n5. The quantity: first-run size, per design or per SKU, and the variants that earn the first run.\n6. The open spec: the one line above you cannot answer yet \u2014 that is the question for your supplier.\n\nKeep the note local, and send the brief to your supplier through your existing approved contact process. Your next step, once the brief is filled, is the sampling decision \u2014 approving a printed sample against the wrap and the real tray before the run \u2014 which is a separate step for a separate day."
  },
  {
    "slug": "hair-extension-packaging-ideas",
    "title": "Hair Extension Packaging Ideas: Formats and Materials for Bundles, Wefts and Wigs",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "6 min read",
    "image": "/images/factory/elapack-09.jpg",
    "imageAlt": "Custom fabric pouches being sewn on a production line",
    "excerpt": "Packaging ideas only count when they fit the format you sell \u2014 bundle, weft, closure or full wig \u2014 and survive transit. Eight ideas that scale.",
    "metaDescription": "Hair extension packaging ideas by product format \u2014 sleeve, drawer and magnetic boxes for bundles, satin wig bags, cotton envelope pouches and complete programs.",
    "body": "*Format and material guidance in this guide is generic industry knowledge. Confirm the specifics for your hair product with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at hair, beauty and wig brands who are looking for hair extension packaging ideas \u2014 and need ones that fit the format they actually sell, not ones that merely photograph well. It groups eight proven ideas by the job they do, and ends with the spec list that turns a shortlist into a quote. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **An idea is only worth adopting if it fits the format you sell \u2014 bundle, weft, closure or full wig \u2014 and survives transit.** Read the ideas against your own line and you will finish with a shortlist and the specs to send.\n\n## Why idea lists mislead\n\nHair products punish generic packaging. A bundle lies flat, a closure is small and stiff, a weft hangs, and a wig has a cap that must keep its shape \u2014 yet most packaging galleries show the same flat-lay box regardless of what is inside.\n\n1. A hair brand picks a packaging idea from a gallery or a competitor feed.\n2. The order arrives and bundles shift in the box, the wig cap crushes, or the length-shade system is invisible at retail.\n3. **Without matching the idea to the product format and the selling context, the choice is decoration, not packaging.**\n4. A wrong format means re-ordering, damaged returns, or a shelf presentation that hides the system buyers shop by.\n5. The rework can delay a seasonal launch or a salon rollout, which raises the cost of a pretty picture.\n6. The task on this page is to filter the ideas against your format, your channel and your brand bar, and prepare the specs for a quote.\n\nThe fix is not more scrolling. It is running every idea through three filters: the format, the channel, the brand bar.\n\n## Eight ideas that fit how hair is actually sold\n\n**Grouped by job: boxes for the retail moment, fabric for the after-sale, and programs that tie them together.** Each idea ends with what to confirm.\n\n### Ideas 1\u20133: box formats for bundles and sets\n\n1. **The sleeve box for single bundles.** A printed sleeve over a fitted inner keeps one bundle flat and presents the length and shade on the face \u2014 the workhorse format for extension lines sold per bundle. Confirm the inner support: a sleeve alone can crush; with a tray it holds.\n2. **The drawer box for multi-bundle sets.** A drawer layers three to six bundles in separate bays, each held so hair cannot tangle across bundles \u2014 the format for curated sets and gifting. Confirm the drawer pull and the bay count against your bundle widths.\n3. **The magnetic flip-top for flagship programs.** The slow-close lid adds ceremony to premium lines and re-closes for storage after the first use. Confirm the insert: hair needs holding without pressing \u2014 soft or satin-lined bays, not hard edges.\n\n### Ideas 4\u20136: fabric carriers for the after-sale\n\n4. **The satin drawstring wig bag.** Smooth satin lets fibers slide instead of snagging, and a wide, tall cut \u2014 30\xD740 cm is the working standard \u2014 gives the cap room to keep its shape. The default after-sale carrier for wig lines. Confirm the fabric is strong enough at your size to hold the weight without stretching.\n5. **The cotton envelope pouch.** A structured cotton carrier with a flap-and-snap closure gifts beautifully and carries bundles, accessories and after-care kits alike. Confirm the style: flap-snap envelopes, open flat pockets and zip-envelope versions serve different uses.\n6. **The zip envelope for travel and salon use.** The zippered cotton format secures a folded wig or a bundle kit for travel \u2014 the format salon professional lines run as their everyday carrier. Confirm the zipper quality; it is the part that wears first.\n\n### Ideas 7\u20138: program-level ideas\n\n7. **The length-shade print program.** One structure across the line, with the wrap printed to your length and shade system \u2014 inch ladders, shade families, care icons \u2014 so the shelf reads as one system. Confirm how the system extends when you add a length.\n8. **The bag-in-box complete program.** Box for the retail moment, satin or cotton bag for the after-sale, matched in colour and branding and quoted as one program \u2014 the format that turns two purchases into one. Confirm both pieces share the same Pantone references and label placement.\n\n## When an idea that photographs well still fails\n\n**A flat-lay photo hides the three failures that decide the reorder.** Three boundaries keep this page honest:\n\n- A photo does not show what happens in transit. Hair shifts, caps crush and drawers pop; test the format with the real product, packed as it ships.\n- A photo does not show the fabric in hand. Satin weight and cotton weave decide whether the bag reads premium or disposable; ask for a physical sample.\n- A photo does not show the system at retail. The length-shade presentation has to be legible from a distance and consistent across every SKU on the shelf.\n\n## Turn the shortlist into a spec list\n\nNothing on this page collects your data or sends anything. Copy the five lines below into your own note and fill them for your line:\n\n1. The format: bundle, weft, closure or full wig \u2014 and how it is packed when it ships.\n2. The idea shortlist: which box format, which fabric carrier, and whether they run as one program.\n3. The material and colour: board or fabric spec, and the Pantone references both pieces share.\n4. The branding: print, foil, woven label or embroidery \u2014 and where each sits.\n5. The open spec: the line above you cannot answer yet \u2014 that is the question for your supplier.\n\nKeep the note local, and send the specs through your existing approved contact process. Your next step, once the shortlist is a spec list, is the sampling decision \u2014 testing the format with the real product inside \u2014 which is a separate step for a separate day."
  },
  {
    "slug": "custom-packaging-moq-oem-odm-logo-guide",
    "title": "Custom Packaging MOQs, OEM vs ODM and Logo Techniques Explained",
    "category": "Sourcing Guide",
    "date": "October 2026",
    "readTime": "7 min read",
    "image": "/images/factory/elapack-01.jpg",
    "imageAlt": "Rigid boxes stacked on an assembly line at a packaging factory",
    "excerpt": "Three terms decide what you can order, who owns the design, and whether your logo survives the run. Read them before your first quote.",
    "metaDescription": "Custom packaging MOQs explained \u2014 why minimums exist, how 200-piece runs work \u2014 plus OEM vs ODM vs white label and logo techniques by surface.",
    "body": "*MOQ, OEM/ODM and logo-technique explanations in this guide are generic industry knowledge, except where ELAPACK's own confirmed trade terms are stated as such. Confirm every term with the supplier you are evaluating.*\n\nThis guide is for packaging buyers and brand owners at small and mid-size brands who keep hitting the same three terms in every custom packaging conversation \u2014 the MOQ, the OEM/ODM choice, and the logo technique \u2014 and need to read all three before the first quote. If your question is which supplier to choose, what a quote costs, or how fast a factory ships, stop here: this page does not select a supplier, price a quote, or approve a production run. **These three terms decide what you can order, who owns the design, and whether your logo survives the run.** Read the three sections below and you will finish with a one-line answer to each, ready for the quote conversation.\n\n## What an MOQ is and why it exists\n\nA minimum order quantity is the quantity at which a production run makes economic sense for the factory \u2014 not a negotiation anchor. Custom packaging carries setup work that happens once per design regardless of quantity: printing plates and press makeready for boxes, cutting dies for inserts, dyeing lots for fabric, sewing-line setup for pouches. The MOQ is where that fixed setup amortizes enough that the unit price works on both sides.\n\nThree practical consequences follow:\n\n- **Unit price falls with quantity, and the first tier is the steepest.** The gap between a 200-piece and a 500-piece price is proportionally larger than the gap between 2,000 and 5,000; the setup cost is being spread over fewer pieces.\n- **A low MOQ changes what packaging is for.** When the minimum is high \u2014 1,000 pieces and up is common on boxes \u2014 packaging is a stocking decision made once per season. When it is low, packaging becomes a testing decision: launch a line, read sell-through, reorder the winner and retool the loser. As a confirmed trade term of ours, ELAPACK runs MOQ from 200 pieces on bags and boxes alike, with 15\u201320 day production \u2014 the model this section describes.\n- **The number that matters is per what.** Confirm whether the MOQ is per design, per SKU or per colour variant. One structure printed across three shades may share tooling and minimum, or may not; this single line changes what a multi-variant launch actually costs, more than the headline number does.\n\n## OEM vs ODM vs white label\n\nThe three cooperation models differ in who owns the design and what each side owes the other.\n\n- **OEM \u2014 you own the design.** You bring the dieline, the structure, the artwork; the factory manufactures to it. You get exactly the package you specified and you keep the design; in exchange, you owe precise, complete specifications, and the sampling rounds are where your spec gets proven.\n- **ODM \u2014 the factory owns the design, you customize it.** The factory's existing structure is adapted to your size, colour and logo placement. Setup is faster and cheaper because the design work exists; the trade-off is that the structure is not exclusively yours \u2014 check what exclusivity, if any, your volume buys, and what happens to your customizations if you leave.\n- **White label \u2014 no design at all.** A stock product with your logo applied. The lowest barrier and the least differentiation; the brand lives only in the mark.\n\nWhat to confirm regardless of model: who owns the dielines and artwork produced during the project, whether your customized version can be sold to anyone else, and what the re-order terms are once tooling exists. These questions are cheaper to ask before the first PO than after it.\n\n## Logo techniques by surface\n\nThe logo technique is chosen by the surface before the brand book. The same mark reads \u2014 and holds \u2014 differently on fabric and on board.\n\n**On fabric pouches and bags:**\n\n- **Silkscreen print** \u2014 crisp and economical; the default on cotton, muslin and satin, single to multi-colour against a colour reference.\n- **Heat transfer** \u2014 full-colour coverage where the artwork needs gradients or photography.\n- **Woven label** \u2014 the premium, durable option; reads as garment-grade branding stitched in.\n- **Embroidery** \u2014 heritage and bespoke; sits especially well on textured weaves.\n- **Foil stamping** \u2014 the metallic lift on velvet and suede that reads luxury at first touch.\n\n**On rigid and folding boxes:**\n\n- **Foil stamping** \u2014 gold or metallic logos on lid and base; the classic premium mark.\n- **Blind emboss and deboss** \u2014 relief without colour; quiet and tactile.\n- **Spot UV** \u2014 a gloss pattern over matte lamination that catches shop light.\n- **Inside-lid printing** \u2014 the brand line that lands at the opening moment.\n- **Matte or gloss lamination** \u2014 the base finish that sets how every technique above reads.\n\nTwo confirmations close the decision: the technique must hold across the run, so approve it on a printed sample of the actual material \u2014 a proof on screen or on a different substrate proves nothing \u2014 and the colour match should carry a reference (a Pantone number is the working standard) so close-enough has something to be measured against.\n\n## When the terms on paper are not enough\n\n**A quoted MOQ, model and technique still need one physical proof each.** Three boundaries keep this page honest:\n\n- An MOQ stated without its unit \u2014 per design, per SKU, per colour \u2014 is not yet a number you can plan a launch on. Ask until the unit is named.\n- An OEM/ODM ownership term that lives in a conversation, not a document, does not exist. Get the design-ownership and exclusivity lines in writing with the quote.\n- A logo technique approved off-spec is a colour risk. The swatch or printed sample on the actual material is the only approval that transfers to the run.\n\n## The three-line readiness check\n\nNothing on this page collects your data or sends anything. Copy the three lines below into your own note and fill them for your launch:\n\n1. The MOQ line: your quantity window, the minimum that applies, and its unit \u2014 per design, per SKU or per colour.\n2. The model line: OEM, ODM or white label \u2014 and who owns the design, in writing.\n3. The logo line: technique, surface and colour reference \u2014 approved on a sample of the actual material.\n\nKeep the note local, and raise the open lines with your supplier through your existing approved contact process. With the three lines filled, your first quote conversation starts from decisions made rather than terms decoded \u2014 and the comparison between quotes becomes a real choice."
  }
]);
function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

// src/pages/News.tsx
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
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "news-featured-image", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: articles2[0].image, alt: articles2[0].title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-featured-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-category", children: articles2[0].category }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "news-featured-title", children: articles2[0].title }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "news-featured-excerpt", children: articles2[0].excerpt }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: articles2[0].date }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "news-meta-dot" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: articles2[0].readTime })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_router_dom12.Link, { to: "/news", className: "text-link", children: [
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
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: article.image, alt: article.title, loading: "lazy" }),
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
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_react_router_dom12.Link, { to: `/news/${article.slug}`, className: "news-card-link", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "news-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: article.image, alt: article.imageAlt, loading: "lazy" }),
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
  ]
};
function relatedProducts(slug) {
  if (!slug) return [];
  return (RELATED[slug] ?? []).map((s) => getProductBySlug(s)).filter((p) => p !== void 0);
}
function inline(text, keyPrefix) {
  const nodes = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let m;
  let i = 0;
  while (m = re.exec(text)) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== void 0) nodes.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: m[1] }, `${keyPrefix}-b${i}`));
    else nodes.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("em", { children: m[2] }, `${keyPrefix}-i${i}`));
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
function renderBody(body) {
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
  lines.forEach((raw) => {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
      return;
    }
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
    if (line.startsWith("### ")) out.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { children: inline(line.slice(4), `h3${out.length}`) }, out.length));
    else if (line.startsWith("## ")) out.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { children: inline(line.slice(3), `h2${out.length}`) }, out.length));
    else out.push(/* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: inline(line, `p${out.length}`) }, out.length));
  });
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
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { style: { textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_router_dom13.Link, { to: "/news", className: "text-link", children: [
        "Back to News & Insights ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
      ] }) })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "eyebrow reveal", children: article.category }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "page-title reveal reveal-delay-1", children: article.title }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "news-meta reveal reveal-delay-2", style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: article.date }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "news-meta-dot" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: article.readTime })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { className: "section article-section", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "container article-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("figure", { className: "landing-hero reveal", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: article.image, alt: article.imageAlt, width: 1600, height: 1e3 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "article-body reveal", children: renderBody(article.body) }),
      related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "article-related reveal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { children: "Related products" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "spec-list", children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_router_dom13.Link, { to: `/products/${p.slug}`, className: "text-link", children: [
          p.name,
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
        ] }) }, p.slug)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "article-back", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_router_dom13.Link, { to: "/news", className: "text-link", children: [
        "Back to News & Insights ",
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-link-arrow", children: "\u2192" })
      ] }) })
    ] }) })
  ] });
}

// src/pages/Contact.tsx
var import_react10 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  const [submitted, setSubmitted] = (0, import_react10.useState)(false);
  const [selectedType, setSelectedType] = (0, import_react10.useState)("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("section", { className: "page-header", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "eyebrow reveal", children: "Contact Us" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h1", { className: "page-title reveal reveal-delay-1", children: [
        "Let's Begin a",
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
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "form-group", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: "name", children: "Full Name *" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "input",
              {
                id: "name",
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
              required: true,
              rows: 5,
              placeholder: "Tell us about your brand, your packaging needs, timelines, and any specific materials or finishes you're considering."
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { type: "submit", className: "btn-primary btn-full", children: "Submit Request" })
      ] }) })
    ] }) }) })
  ] });
}

// src/pages/Video.tsx
var import_react11 = require("react");
var import_react_router_dom14 = require("react-router-dom");
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
  const [openFaq, setOpenFaq] = (0, import_react11.useState)(0);
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
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom14.Link, { to: "/products", className: "btn-primary", children: "Explore Products" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom14.Link, { to: "/contact", className: "btn-outline", children: "Request a Quote" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "custom-solution-intro-images reveal reveal-delay-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "img",
          {
            src: "/product-giftbox.webp",
            alt: "Custom luxury gift box",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "img",
          {
            src: "/product-collection.webp",
            alt: "Custom packaging collection",
            loading: "lazy"
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
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: step.image, alt: step.title, loading: "lazy" }),
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
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: story.image, alt: story.client, loading: "lazy" }),
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
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "success-stories-cta reveal", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom14.Link, { to: "/contact", className: "btn-primary", children: "Start Your Project" }) })
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
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom14.Link, { to: "/contact", className: "btn-outline", children: "Contact Us" })
      ] })
    ] }) })
  ] });
}

// src/pages/Landing.tsx
var import_react12 = require("react");

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
  (0, import_react12.useEffect)(() => {
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
var import_react13 = require("react");
var import_react_router_dom15 = require("react-router-dom");

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
    ctaTitle: "Request a quote for your custom jewelry box"
  },
  {
    slug: "eyewear-packaging",
    eyebrow: "Eyewear Packaging",
    h1: "Custom Eyewear Packaging \u2014 Boxes & Pouches for Eyewear Brands",
    subhead: "Glasses boxes and fabric pouches that protect frames and carry your logo, made to your spec.",
    metaDescription: "Custom eyewear packaging \u2014 rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes and pouches from 200 pieces. Free stock samples.",
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
    ctaTitle: "Request a quote for your eyewear packaging"
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
    ctaTitle: "Request a quote for your custom jewelry pouches"
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
    ctaTitle: "Request a quote for your custom wig packaging"
  },
  {
    slug: "custom-jewelry-packaging",
    eyebrow: "Jewelry Packaging",
    h1: "Custom Jewelry Packaging \u2014 Boxes, Pouches & Display",
    subhead: "One manufacturer for the whole jewelry program \u2014 logo boxes, fabric pouches, display and sets, matched in colour and branding.",
    metaDescription: "Custom jewelry packaging from one manufacturer \u2014 logo jewelry boxes, velvet, satin and cotton pouches, display sets and complete box-plus-pouch programs. Boxes and pouches from 200 pieces. Free stock samples.",
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
    ctaTitle: "Request a quote for your jewelry packaging program"
  },
  {
    slug: "custom-gift-boxes",
    eyebrow: "Gift Boxes",
    h1: "Custom Gift Boxes with Logo",
    subhead: "Magnetic, ribbon-tie and two-piece rigid gift boxes \u2014 plus candle-ready formats \u2014 your size, finish and logo.",
    metaDescription: "Custom gift boxes with your logo \u2014 magnetic closure, satin ribbon-tie and two-piece rigid boxes in any size and finish, including candle jar and tin formats. MOQ from 200 pieces, free stock samples.",
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
    ctaTitle: "Request a quote for your custom gift boxes"
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
    ctaTitle: "Request a quote for your cosmetic packaging"
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
    ctaTitle: "Request a quote for your custom drawstring bags"
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
    ctaTitle: "Request a quote for ribbons & accessories"
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
    ctaTitle: "Request a quote for your cosmetic pouches"
  }
];
function getCollectionBySlug(slug) {
  return collections.find((c) => c.slug === slug);
}

// src/pages/Collection.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Collection({ slug }) {
  const collection = getCollectionBySlug(slug);
  (0, import_react13.useEffect)(() => {
    if (collection) document.title = `${collection.eyebrow} | ELAPACK`;
  }, [collection]);
  if (!collection) return null;
  const products3 = collection.productSlugs.map((s) => getProductBySlug(s)).filter((p) => p !== void 0);
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
        import_react_router_dom15.Link,
        {
          to: `/products/${product.slug}`,
          className: `catalog-card reveal reveal-delay-${i % 4 + 1}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "catalog-card-image", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { src: product.image, alt: product.name, loading: "lazy" }),
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Routes, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_react_router_dom16.Route, { element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Layout, {}), children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Home, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/pouches-bags", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Landing, { slug: "pouches-bags" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/boxes", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Landing, { slug: "boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/sets", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Landing, { slug: "sets" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-jewelry-boxes", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-jewelry-boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/eyewear-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "eyewear-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-jewelry-pouches", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-jewelry-pouches" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-wig-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-wig-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-jewelry-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-jewelry-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-gift-boxes", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-gift-boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-cosmetic-packaging", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-cosmetic-packaging" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-drawstring-bags", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-drawstring-bags" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/ribbons-accessories", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "ribbons-accessories" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/custom-cosmetic-pouches", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Collection, { slug: "custom-cosmetic-pouches" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/products", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Products, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/products/:slug", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ProductDetail, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/industries", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Industries, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/solutions", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Solutions, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/about", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(About, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/news", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(News, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/news/:slug", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Article, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/contact", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Contact, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom16.Route, { path: "/video", element: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Video, {}) })
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
  "/custom-cosmetic-packaging",
  "/custom-drawstring-bags",
  "/ribbons-accessories",
  "/custom-cosmetic-pouches",
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
  "/custom-cosmetic-packaging": "Custom Cosmetic Packaging Boxes | ELAPACK",
  "/custom-drawstring-bags": "Custom Drawstring Bags & Pouches, from 200 pcs | ELAPACK",
  "/ribbons-accessories": "Custom Printed Ribbons & Packaging Accessories | ELAPACK",
  "/custom-cosmetic-pouches": "Custom Cosmetic Pouches & Makeup Bags with Logo | ELAPACK",
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
  "/custom-cosmetic-packaging": "Custom cosmetic packaging \u2014 eyelash boxes from 200 pieces, magnetic and rigid gift boxes for beauty brands, plus fabric and clear PVC-zip cosmetic pouches with your logo. One manufacturer, matched branding. Free stock samples.",
  "/custom-drawstring-bags": "Custom drawstring bags with your logo \u2014 cotton, velvet, satin, muslin and linen pouches in any size, plus handbag and shoe dust bag formats. MOQ from 200 pieces, free stock samples.",
  "/ribbons-accessories": "Custom printed ribbons and packaging accessories \u2014 satin ribbon closures, logo-printed ribbon programs, cotton cords and drawstrings matched to your box and pouch programs.",
  "/custom-cosmetic-pouches": "Custom cosmetic pouches and makeup bags with your logo \u2014 drawstring, flap, envelope and zipper styles in cotton, satin, velvet and canvas, plus clear PVC zip bags. MOQ from 200 pieces, free stock samples.",
  "/products": "Browse ELAPACK's custom packaging catalog \u2014 rigid jewelry boxes, velvet and cotton pouches, retail bags, display systems and gift sets.",
  "/industries": "Custom packaging for jewelry, eyewear, fragrance, beauty, fashion and gifting brands \u2014 engineered for Europe and North America.",
  "/solutions": "Custom packaging solutions from ELAPACK \u2014 bespoke structures, premium materials and finishes, clear process, sustainable options.",
  "/news": "Packaging insights, material trends and sustainability notes from the ELAPACK team.",
  "/about": "ELAPACK began as a small workshop and grew into a full-service packaging partner for luxury brands across Europe and North America.",
  "/contact": "Talk to ELAPACK about your packaging project \u2014 quotes within one business day. Email, phone and WhatsApp available.",
  "/video": "See ELAPACK's production floor, craft details and quality process in video.",
  ...Object.fromEntries(articles.map((a) => [`/news/${a.slug}`, a.metaDescription]))
};
var ok = 0;
for (const route of ROUTES) {
  try {
    const html = (0, import_server.renderToString)(
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_server2.StaticRouter, { location: route, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AppRoutes, {}) })
    );
    const productMatch = route.match(/^\/products\/([a-z0-9-]+)$/);
    const product = productMatch ? products.find((p) => p.slug === productMatch[1]) : void 0;
    const pageTag = product ? `${product.name} | ELAPACK` : STATIC_TITLES[route] || "ELAPACK";
    const pageDesc = STATIC_DESCRIPTIONS[route] || (product ? `${product.shortDesc} ${product.name} by ELAPACK \u2014 materials, MOQ ${product.moq}, lead time ${product.leadTime}. Request a quote.` : void 0);
    let out = shell.replace('<div id="root"></div>', `<div id="root">${html}</div>`).replace(/<title>[^<]*<\/title>/, `<title>${pageTag}</title>`);
    if (pageDesc) {
      out = out.replace(
        /(<meta\s+name="description"\s+content=")[^"]*(")/,
        `$1${pageDesc}$2`
      );
    }
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
