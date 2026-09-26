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
var import_react_router_dom15 = require("react-router-dom");

// src/components/Layout.tsx
var import_react_router_dom5 = require("react-router-dom");

// src/components/Header.tsx
var import_react = require("react");
var import_react_router_dom = require("react-router-dom");

// src/components/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo", "aria-label": "ELAPACK", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "logo-name", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-letter", children: "E" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-letter", children: "L" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-letter logo-letter-accent", children: "A" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-letter", children: "P" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-letter logo-letter-accent", children: "A" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-letter", children: "C" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-letter", children: "K" })
  ] }) });
}

// src/data/products.ts
var products = [
  {
    slug: "black-leather-jewelry-box",
    name: "Black Leather Jewelry Box",
    category: "Boxes",
    shortDesc: "Faux leather rigid jewelry box with velvet interior, custom embossing and smart compartments.",
    description: "The black leather jewelry box is more than just storage \u2014 it is a timeless statement of sophistication. Crafted from smooth grain faux leather in a deep, matte black tone, this box offers an elevated unboxing experience that reflects your brand commitment to quality. Its sleek, fingerprint-resistant exterior enhances visual appeal while staying pristine even with daily use.",
    image: "/images/carousel/black-leather-box.png",
    materials: "Faux leather, velvet interior, cardboard core",
    moq: "500 pcs",
    leadTime: "15\u201325 days",
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
    slug: "pandora-jewelry-box-white",
    name: "Compact White Jewelry Box",
    category: "Boxes",
    shortDesc: "Compact white plastic jewelry box with velvet cushion \u2014 clean minimalist retail and gift packaging.",
    description: "A compact white plastic jewelry box inspired by Pandora-style packaging. Perfect for bracelets and small jewelry gifts, combining a clean minimalist look with durable protection. Ideal for retail display and gifting occasions.",
    image: "/images/carousel/pandora-box.png",
    materials: "Plastic exterior, velvet interior insert",
    moq: "500 pcs",
    leadTime: "15\u201325 days",
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
    slug: "double-ring-storage-box",
    name: "Double Ring Storage Box",
    category: "Boxes",
    shortDesc: "Slim black velvet double ring box for weddings and engagements, with magnetic closure.",
    description: "A slim black velvet double ring box designed for weddings and engagements. Holds two rings securely side by side with plush velvet lining. The elegant matte black exterior makes it perfect for proposal moments and retail presentation.",
    image: "/images/carousel/ring-box-black.png",
    materials: "Velvet exterior, foam insert with velvet covering",
    moq: "500 pcs",
    leadTime: "15\u201325 days",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Dual Ring Slots",
        desc: "Two precision-cut velvet slots hold rings side by side for proposal sets."
      },
      {
        title: "Slim Pocket Profile",
        desc: "Thin enough to slip into a jacket pocket for the big moment."
      },
      {
        title: "Matte Velvet Exterior",
        desc: "Deep matte black velvet that photographs beautifully in proposal scenes."
      },
      {
        title: "Magnetic Closure",
        desc: "Hidden magnets keep the lid securely shut with a satisfying snap."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '1-3/4" \xD7 2" \xD7 1-1/2"' },
      { label: "Closure Type", value: "Magnetic closure" },
      { label: "Surface Finish", value: "Matte velvet" }
    ],
    customizationOptions: [
      "Velvet color matching",
      "Interior message printing",
      "Custom ring slot layout"
    ]
  },
  {
    slug: "wooden-ring-box-wedding",
    name: "Engraved Wooden Ring Box",
    category: "Boxes",
    shortDesc: "Natural wood ring box with laser engraving and velvet lining for weddings and keepsakes.",
    description: "An engraved wooden ring box for weddings, featuring natural wood grain with a smooth finish. The interior is lined with soft velvet to protect rings. Custom engraving of names, dates, or logos is available for a truly personalized keepsake.",
    image: "/images/carousel/wooden-ring-box.png",
    materials: "Wood exterior, velvet interior",
    moq: "500 pcs",
    leadTime: "20\u201330 days",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Natural Wood Construction",
        desc: "Real wood grain with matte varnish \u2014 every box has a unique texture."
      },
      {
        title: "Custom Laser Engraving",
        desc: "Names, dates or logos engraved into the lid for personalized keepsakes."
      },
      {
        title: "Velvet Interior",
        desc: "Soft velvet lining protects rings from scratches during storage."
      },
      {
        title: "Hinged Lid",
        desc: "Secure hinged closure engineered for smooth, repeated opening."
      }
    ],
    specs: [
      { label: "Dimensions (L \xD7 W \xD7 H)", value: '1-3/4" \xD7 2" \xD7 1-1/2"' },
      { label: "Closure Type", value: "Hinged lid" },
      { label: "Surface Finish", value: "Natural wood with matte varnish" }
    ],
    customizationOptions: [
      "Laser engraving of names, dates or logos",
      "Wood species selection",
      "Interior velvet colors"
    ]
  },
  {
    slug: "luxury-gift-box-ribbon",
    name: "Luxury Gift Box with Ribbon",
    category: "Boxes",
    shortDesc: "Rigid luxury gift box with satin ribbon tie closure \u2014 premium presentation for corporate gifting.",
    description: "A luxury gift box set with satin ribbon closure, designed for premium gifting occasions. The rigid box construction with matte finish and decorative ribbon creates an unforgettable unboxing experience. Perfect for corporate gifts, weddings, and high-end retail.",
    image: "/images/carousel/luxury-gift-box.png",
    materials: "Rigid cardboard, satin ribbon",
    moq: "500 pcs",
    leadTime: "15\u201325 days",
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
    name: "Magnetic Closure Gift Box",
    category: "Boxes",
    shortDesc: "Sleek flip-top gift box with hidden magnetic closure and custom interior inserts.",
    description: "A sleek magnetic closure gift box with flip-top design. The hidden magnetic mechanism provides a clean look while keeping the lid securely closed. Ideal for jewelry, cosmetics, and small luxury items.",
    image: "/images/carousel/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png",
    materials: "Rigid cardboard, magnetic closure",
    moq: "500 pcs",
    leadTime: "15\u201325 days",
    industries: ["Jewelry", "Beauty", "Gift", "Fashion"],
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
      "Pantone-matched exterior"
    ]
  },
  {
    slug: "velvet-drawstring-pouch",
    name: "Velvet Drawstring Pouch",
    category: "Pouches & Bags",
    shortDesc: "Soft velvet drawstring pouch protecting delicate jewelry \u2014 multiple colors with custom branding.",
    description: "A soft velvet drawstring jewelry pouch designed for elegant storage and gifting. The plush velvet exterior protects delicate jewelry while the drawstring closure keeps items secure. Available in multiple colors with custom branding options.",
    image: "/images/carousel/velvet-pouch.png",
    materials: "Velvet, cotton cord drawstring",
    moq: "500 pcs",
    leadTime: "10\u201320 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Plush Velvet Protection",
        desc: "Dense velvet pile cushions chains and stones against scratches."
      },
      {
        title: "Drawstring Closure",
        desc: "Cotton, satin or polyester cord options, color-matched to the pouch."
      },
      {
        title: "Full Color Range",
        desc: "Stock and Pantone-matched velvet colors for brand alignment."
      },
      {
        title: "Custom Branding",
        desc: "Silkscreen printing or woven label stitched inside or outside."
      }
    ],
    specs: [
      { label: "Dimensions", value: '4" \xD7 4" (customizable)' },
      { label: "String Type", value: "Cotton cord / satin ribbon / polyester cord" },
      { label: "Closure Type", value: "Drawstring" }
    ],
    customizationOptions: [
      "Pantone velvet color matching",
      "Logo printing or woven labels",
      "Custom sizes and cord types"
    ]
  },
  {
    slug: "cotton-jewelry-pouch",
    name: "Cotton Drawstring Pouch",
    category: "Pouches & Bags",
    shortDesc: "Natural cotton drawstring pouch \u2014 eco-friendly, printable, gently protective.",
    description: "An eco-friendly cotton drawstring pouch perfect for jewelry storage and gifting. Made from natural cotton fabric with a soft texture. Ideal for brands looking for sustainable packaging solutions.",
    image: "/images/carousel/cotton-pouch.png",
    materials: "Natural cotton, cotton cord",
    moq: "500 pcs",
    leadTime: "10\u201320 days",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "100% Natural Cotton",
        desc: "Unbleached cotton fabric with a soft, natural hand feel."
      },
      {
        title: "Natural & Recyclable",
        desc: "A genuinely circular packaging option for eco-positioned brands."
      },
      {
        title: "Custom Screen Printing",
        desc: "Single to multi-color prints with water-based inks."
      },
      {
        title: "Gentle Protection",
        desc: "Soft texture that protects finishes without abrading."
      }
    ],
    specs: [
      { label: "Dimensions", value: '5" \xD7 5" (customizable)' },
      { label: "String Type", value: "Cotton cord" },
      { label: "Eco-Friendly", value: "Recyclable" }
    ],
    customizationOptions: [
      "Water-based ink printing",
      "Natural cotton upgrade",
      "Custom sizes and drawcord colors"
    ]
  },
  {
    slug: "velvet-necklace-display",
    name: "Velvet Necklace Display Stand",
    category: "Pouches & Bags",
    shortDesc: "Velvet-covered retail display stand that presents necklaces securely in showcases.",
    description: "A velvet necklace display stand designed for retail showcases. The plush velvet surface holds necklaces securely in place while presenting them elegantly. Available in multiple colors to match your brand aesthetic.",
    image: "/images/carousel/velvet-necklace-stand.png",
    materials: "Velvet, wooden base",
    moq: "200 pcs",
    leadTime: "15\u201325 days",
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
    category: "Pouches & Bags",
    shortDesc: "Crystal-clear acrylic earring display with multi-tier slots and weighted base.",
    description: "A modern acrylic earring display stand with transparent construction. Perfect for showcasing earrings in a clean, contemporary retail setting. The clear acrylic design lets the jewelry be the focal point.",
    image: "/images/carousel/acrylic-display.png",
    materials: "Acrylic / PVC",
    moq: "200 pcs",
    leadTime: "15\u201325 days",
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
    leadTime: "10\u201320 days",
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
    image: "/images/carousel/jewelry-tray.png",
    materials: "MDF, velvet lining",
    moq: "200 pcs",
    leadTime: "15\u201325 days",
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
    image: "/images/carousel/exec-0d39797a-3fe3-4f1d-a468-53dba5386b8f.png",
    materials: "Velvet over structured core",
    moq: "500 pcs (sets with box) / 200 pcs (display pieces only)",
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
      { label: "MOQ", value: "500 pcs with box / 200 pcs display pieces only" }
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
    slug: "cream-rigid-magnetic-gift-box",
    name: "Cream Rigid Magnetic Gift Box",
    category: "Boxes",
    shortDesc: "Matte cream rigid gift box with lift-off lid, magnetic closure, gold foil branding and satin ribbon finish.",
    description: "A lift-off lid rigid box in matte cream wrap, finished with gold foil branding and a champagne satin ribbon \u2014 the quiet-luxury formula that photographs beautifully and ships well. A concealed magnetic closure lets the lid settle into place with that satisfying, slow close, while the rigid walls protect what's inside without bulky padding. Inside, the box takes tissue, foam or molded inserts to fit jewelry, eyewear, fragrance or gift programs.",
    image: "/images/carousel/exec-d88bc44e-a36e-4f12-b991-f3f746e07e39.png",
    materials: "Rigid cardboard, matte art paper wrap, satin ribbon",
    moq: "500 pcs",
    leadTime: "15\u201320 days",
    industries: ["Jewelry", "Gift", "Beauty", "Eyewear & Sunglasses"],
    features: [
      {
        title: "Concealed Magnetic Closure",
        desc: "Hidden magnets give a smooth, premium close with no visible hardware."
      },
      {
        title: "Matte Cream Wrap",
        desc: "Fingerprint-tolerant matte lamination in cream or your brand color."
      },
      {
        title: "Gold Foil Branding",
        desc: "Foil-stamped logo on lid and box front, matched to your artwork."
      },
      {
        title: "Lift-Off Lid Construction",
        desc: "Full-height lid over a rigid base \u2014 strong walls, clean unboxing ritual."
      }
    ],
    specs: [
      { label: "Structure", value: "Rigid cardboard, lift-off lid" },
      { label: "Wrap", value: "Matte art paper, custom colors" },
      { label: "Closure", value: "Concealed magnetic" },
      { label: "Finishing", value: "Gold foil stamping, satin ribbon" },
      { label: "Inserts", value: "Foam / EVA / molded / recycled paper" },
      { label: "MOQ", value: "500 pcs" }
    ],
    customizationOptions: [
      "Custom sizes and wrap colors",
      "Foil stamping, embossing or spot UV",
      "Tailored interior inserts",
      "Matching satin ribbons and seals"
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
  { slug: "velvet-drawstring-pouch", tag: "Bestseller" },
  { slug: "cotton-jewelry-pouch", tag: "Eco" },
  { slug: "kraft-paper-shopping-bag", tag: "Retail" },
  { slug: "double-ring-storage-box", tag: "Wedding" },
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
  { name: "Marks & Spencer", type: "text" },
  { name: "EFFY", type: "text" },
  { name: "Majorica", type: "text" },
  { name: "ZARA", type: "text" },
  { name: "Inditex", type: "text" }
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
    client: "Marks & Spencer",
    category: "Retail Packaging",
    solution: "Cost-Effective Luxury Packaging",
    image: "/case-marks.webp",
    points: [
      "Budget-friendly without compromise",
      "Efficient design, lower production costs",
      "Bulk orders with better value"
    ]
  },
  {
    client: "EFFY",
    category: "Jewelry Packaging",
    solution: "Luxury Jewelry Box Design",
    image: "/case-effy.webp",
    points: [
      "Packaging that solidifies brand image",
      "Enhanced recognition and design sense",
      "Meets customer aesthetic preferences"
    ]
  },
  {
    client: "Majorica",
    category: "Heritage Packaging",
    solution: "Timeless Jewelry Boxes",
    image: "/case-majorica.webp",
    points: [
      "Classic packaging for heritage jewelry",
      "Marketing impact that grows steadily",
      "Protecting the Earth while packaging beauty"
    ]
  },
  {
    client: "ZARA",
    category: "Cosmetic & Perfume",
    solution: "100% Recyclable Packaging",
    image: "/case-zara.webp",
    points: [
      "Enhanced brand image",
      "Met environmental standards",
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "value-desc", children: "Rigid, folding and magnetic closure boxes with inserts and Pantone-matched finishes. MOQ from 500 pieces." })
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
  { icon: "M", label: "Low MOQ From 200/500 pcs" }
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
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "about-text", children: "Today, our integrated model spans creative design, precision manufacturing across three production lines, and global logistics \u2014 serving clients from independent ateliers to established brands." }),
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
    excerpt: "Why minimums exist, how 200-piece pouch and 500-piece box runs are priced, and the choices \u2014 stock materials, simpler structures, phased launches \u2014 that keep small-batch custom viable.",
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
    client: "Marks & Spencer",
    category: "Retail Packaging",
    solution: "Cost-Effective Luxury Packaging",
    image: "/case-marks.webp",
    desc: "We designed a series of custom packaging for Marks & Spencer. By employing eco-friendly materials, they lowered packaging costs and enhanced appeal while ensuring sustainability."
  },
  {
    client: "EFFY",
    category: "Jewelry Packaging",
    solution: "Luxury Jewelry Box Design",
    image: "/case-effy.webp",
    desc: "We designed bespoke custom packaging boxes for EFFY, enhancing their brand's luxury appeal while ensuring sustainability through eco-friendly materials."
  },
  {
    client: "Majorica",
    category: "Heritage Packaging",
    solution: "Timeless Jewelry Boxes",
    image: "/case-majorica.webp",
    desc: "Custom packaging for Majorica reflects the brand's marine protection spirit and elegant temperament, combining timeless elegance with contemporary flair."
  },
  {
    client: "ZARA",
    category: "Sustainable Packaging",
    solution: "100% Recyclable Packaging",
    image: "/case-zara.webp",
    desc: "We developed tailor-made sustainable packaging solutions for ZARA, enhancing their commitment to sustainability through innovative, environmentally friendly designs."
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
    a: "Our production facilities are based in Asia with global logistics support, ensuring reliable delivery to Europe, North America, and worldwide."
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
    h1: "Custom Rigid, Folding & Magnetic Boxes \u2014 Made to Your Spec, from 500 Pieces",
    subhead: "Your size. Your structure. Your finish. Your logo. Built around your product.",
    metaDescription: "Custom packaging boxes for jewellery, fragrance, beauty, hair and fashion brands \u2014 rigid, folding carton and magnetic closure boxes with optional EVA, sponge, pulp or flocked inserts, in your size, finish and branding. MOQ from 500 pieces.",
    intro: "ELAPACK makes custom boxes for brands selling in the US and Europe. We are a trade-and-manufacturing company founded in 2018 with three production lines, ISO 9001 certified for the production and sales of paper and textile packaging products, and we make each order to your specification \u2014 not from stock \u2014 so the box fits your product and carries your brand, not the other way round.",
    why: {
      heading: "Box styles",
      items: [
        { title: "Rigid boxes", desc: "Thick, non-collapsible board; the premium, gift-ready structure." },
        { title: "Folding cartons", desc: "Printed paperboard that ships flat; practical and economical." },
        { title: "Magnetic closure boxes", desc: "Rigid boxes with a built-in magnetic flap; an unboxing moment." },
        { title: "Custom structures", desc: "Made to your spec on request." }
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
      { label: "MOQ", value: "500 pieces, custom sizes included" },
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
      { label: "MOQ", value: "500 pieces for sets that include a box \xB7 200 pieces for sets without a box" },
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

// src/App.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function AppRoutes() {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Routes, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_react_router_dom15.Route, { element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Layout, {}), children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Home, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/pouches-bags", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Landing, { slug: "pouches-bags" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/boxes", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Landing, { slug: "boxes" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/sets", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Landing, { slug: "sets" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/products", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Products, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/products/:slug", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ProductDetail, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/industries", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Industries, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/solutions", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Solutions, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/about", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(About, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/news", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(News, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/news/:slug", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Article, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/contact", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Contact, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom15.Route, { path: "/video", element: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Video, {}) })
  ] }) });
}

// scripts/prerender.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var dist = import_node_path.default.resolve(__dirname, "../dist");
var indexPath = import_node_path.default.join(dist, "index.html");
var shell = import_node_fs.default.readFileSync(indexPath, "utf-8");
var ROUTES = [
  "/",
  "/pouches-bags",
  "/boxes",
  "/sets",
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
  "/boxes": "Custom Rigid, Folding & Magnetic Boxes from 500 pcs | ELAPACK",
  "/sets": "Custom Packaging Sets \u2014 Pouch, Box & More | ELAPACK",
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
  "/boxes": "Custom rigid, folding carton and magnetic closure boxes with EVA, sponge, pulp or flocked inserts, in your size, finish and branding. MOQ from 500 pieces.",
  "/sets": "Custom packaging sets \u2014 pouches, boxes and inserts designed together as one coordinated set, colour-matched to your Pantone reference.",
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
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_server2.StaticRouter, { location: route, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(AppRoutes, {}) })
    );
    const productMatch = route.match(/^\/products\/([a-z0-9-]+)$/);
    const pageTag = productMatch ? `${productMatch[1].split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} | ELAPACK` : STATIC_TITLES[route] || "ELAPACK";
    const pageDesc = STATIC_DESCRIPTIONS[route] || (productMatch ? `Custom ${productMatch[1].split("-").join(" ")} by ELAPACK \u2014 materials, MOQ, lead time and full customization options for luxury brands.` : void 0);
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
