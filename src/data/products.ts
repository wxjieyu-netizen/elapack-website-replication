export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  image: string;
  materials: string;
  moq: string;
  leadTime: string;
  industries: string[];
  features: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  customizationOptions: string[];
};

/**
 * Real product catalog (12 SKUs with genuine photos), mapped from the old
 * catalog.ts into the new design's 4-category IA:
 *   Boxes / Pouches & Bags / Sets & Complete Packaging / Ribbons & Accessories
 * Images live under /images/carousel/ (real photos kept from the old site).
 */
export const products: Product[] = [
  {
    slug: "black-leather-jewelry-box",
    name: "Black Leather Jewelry Box",
    category: "Boxes",
    shortDesc:
      "Faux leather rigid jewelry box with velvet interior, custom embossing and smart compartments.",
    description:
      "The black leather jewelry box is more than just storage — it is a timeless statement of sophistication. Crafted from smooth grain faux leather in a deep, matte black tone, this box offers an elevated unboxing experience that reflects your brand commitment to quality. Its sleek, fingerprint-resistant exterior enhances visual appeal while staying pristine even with daily use.",
    image: "/images/carousel/black-leather-box.png",
    materials: "Faux leather, velvet interior, cardboard core",
    moq: "500 pcs",
    leadTime: "15–25 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Premium Faux Leather Exterior",
        desc: "Smooth grain faux leather with a matte finish that resists fingerprints and daily wear.",
      },
      {
        title: "Plush Velvet Interior",
        desc: "Soft velvet lining cushions delicate jewelry and keeps every piece scratch-free.",
      },
      {
        title: "Custom Logo Embossing",
        desc: "Blind embossing, foil stamping and color detailing to carry your brand identity.",
      },
      {
        title: "Smart Compartment Layout",
        desc: "Compact structure with removable inserts tailored to your product assortment.",
      },
    ],
    specs: [
      { label: "Exterior", value: "Velvet, leatherette, wood, satin, MDF, genuine leather" },
      { label: "Interior", value: "Velvet, satin, suede, microfiber, flocked fabric" },
      { label: "Insert", value: "Foam, EVA, molded plastic, recycled paper" },
      { label: "Surface Finish", value: "Matte / glossy / debossed / foil stamping / spot UV" },
      { label: "Closure Type", value: "Magnetic / snap / tuck flap / ribbon tie / drawer" },
      { label: "Eco-Friendly", value: "Recyclable / reusable" },
    ],
    customizationOptions: [
      "Custom exterior materials and colors",
      "Logo embossing or foil stamping",
      "Tailored interior inserts",
      "FSC-certified materials on request",
    ],
  },
  {
    slug: "pandora-jewelry-box-white",
    name: "Compact White Jewelry Box",
    category: "Boxes",
    shortDesc:
      "Compact white plastic jewelry box with velvet cushion — clean minimalist retail and gift packaging.",
    description:
      "A compact white plastic jewelry box inspired by Pandora-style packaging. Perfect for bracelets and small jewelry gifts, combining a clean minimalist look with durable protection. Ideal for retail display and gifting occasions.",
    image: "/images/carousel/pandora-box.png",
    materials: "Plastic exterior, velvet interior insert",
    moq: "500 pcs",
    leadTime: "15–25 days",
    industries: ["Jewelry", "Gift", "Fashion"],
    features: [
      {
        title: "Durable White Shell",
        desc: "Rigid plastic construction with a smooth glossy finish built for retail handling.",
      },
      {
        title: "Soft Interior Cushion",
        desc: "Velvet-lined insert holds bracelets and small pieces securely in place.",
      },
      {
        title: "Retail-Ready Compact Size",
        desc: "Lightweight footprint that displays cleanly on shelves and ships efficiently.",
      },
      {
        title: "Custom Logo Printing",
        desc: "Silkscreen or hot-stamp your logo directly onto the lid and base.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '1-3/4" × 2" × 1-1/2" (customizable)' },
      { label: "Surface Finish", value: "Glossy white" },
      { label: "Closure Type", value: "Snap closure" },
    ],
    customizationOptions: [
      "Custom logo printing",
      "Interior insert colors",
      "Custom sizing on request",
    ],
  },
  {
    slug: "double-ring-storage-box",
    name: "Double Ring Storage Box",
    category: "Boxes",
    shortDesc:
      "Slim black velvet double ring box for weddings and engagements, with magnetic closure.",
    description:
      "A slim black velvet double ring box designed for weddings and engagements. Holds two rings securely side by side with plush velvet lining. The elegant matte black exterior makes it perfect for proposal moments and retail presentation.",
    image: "/images/carousel/ring-box-black.png",
    materials: "Velvet exterior, foam insert with velvet covering",
    moq: "500 pcs",
    leadTime: "15–25 days",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Dual Ring Slots",
        desc: "Two precision-cut velvet slots hold rings side by side for proposal sets.",
      },
      {
        title: "Slim Pocket Profile",
        desc: "Thin enough to slip into a jacket pocket for the big moment.",
      },
      {
        title: "Matte Velvet Exterior",
        desc: "Deep matte black velvet that photographs beautifully in proposal scenes.",
      },
      {
        title: "Magnetic Closure",
        desc: "Hidden magnets keep the lid securely shut with a satisfying snap.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '1-3/4" × 2" × 1-1/2"' },
      { label: "Closure Type", value: "Magnetic closure" },
      { label: "Surface Finish", value: "Matte velvet" },
    ],
    customizationOptions: [
      "Velvet color matching",
      "Interior message printing",
      "Custom ring slot layout",
    ],
  },
  {
    slug: "wooden-ring-box-wedding",
    name: "Engraved Wooden Ring Box",
    category: "Boxes",
    shortDesc:
      "Natural wood ring box with laser engraving and velvet lining for weddings and keepsakes.",
    description:
      "An engraved wooden ring box for weddings, featuring natural wood grain with a smooth finish. The interior is lined with soft velvet to protect rings. Custom engraving of names, dates, or logos is available for a truly personalized keepsake.",
    image: "/images/carousel/wooden-ring-box.png",
    materials: "Wood exterior, velvet interior",
    moq: "500 pcs",
    leadTime: "20–30 days",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Natural Wood Construction",
        desc: "Real wood grain with matte varnish — every box has a unique texture.",
      },
      {
        title: "Custom Laser Engraving",
        desc: "Names, dates or logos engraved into the lid for personalized keepsakes.",
      },
      {
        title: "Velvet Interior",
        desc: "Soft velvet lining protects rings from scratches during storage.",
      },
      {
        title: "Hinged Lid",
        desc: "Secure hinged closure engineered for smooth, repeated opening.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '1-3/4" × 2" × 1-1/2"' },
      { label: "Closure Type", value: "Hinged lid" },
      { label: "Surface Finish", value: "Natural wood with matte varnish" },
    ],
    customizationOptions: [
      "Laser engraving of names, dates or logos",
      "Wood species selection",
      "Interior velvet colors",
    ],
  },
  {
    slug: "luxury-gift-box-ribbon",
    name: "Luxury Gift Box with Ribbon",
    category: "Boxes",
    shortDesc:
      "Rigid luxury gift box with satin ribbon tie closure — premium presentation for corporate gifting.",
    description:
      "A luxury gift box set with satin ribbon closure, designed for premium gifting occasions. The rigid box construction with matte finish and decorative ribbon creates an unforgettable unboxing experience. Perfect for corporate gifts, weddings, and high-end retail.",
    image: "/images/carousel/luxury-gift-box.png",
    materials: "Rigid cardboard, satin ribbon",
    moq: "500 pcs",
    leadTime: "15–25 days",
    industries: ["Gift", "Beauty", "Fragrance"],
    features: [
      {
        title: "Rigid Box Construction",
        desc: "Greyboard wrapped in premium matte art paper for a substantial feel.",
      },
      {
        title: "Satin Ribbon Tie",
        desc: "Double-face satin ribbon closure that becomes part of the ceremony.",
      },
      {
        title: "Foil Stamping & Embossing",
        desc: "Metallic foil and raised embossing options for brand marks.",
      },
      {
        title: "Custom Sizes & Colors",
        desc: "Pantone-matched wrapping and any footprint your product needs.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '8" × 6" × 3" (customizable)' },
      { label: "Closure Type", value: "Ribbon tie" },
      { label: "Surface Finish", value: "Matte / foil stamping / spot UV" },
    ],
    customizationOptions: [
      "Pantone color matching",
      "Foil stamping or embossing",
      "Custom sizes and structures",
      "Inserts for product security",
    ],
  },
  {
    slug: "magnetic-closure-gift-box",
    name: "Magnetic Closure Gift Box",
    category: "Boxes",
    shortDesc:
      "Sleek flip-top gift box with hidden magnetic closure and custom interior inserts.",
    description:
      "A sleek magnetic closure gift box with flip-top design. The hidden magnetic mechanism provides a clean look while keeping the lid securely closed. Ideal for jewelry, cosmetics, and small luxury items.",
    image: "/images/carousel/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png",
    materials: "Rigid cardboard, magnetic closure",
    moq: "500 pcs",
    leadTime: "15–25 days",
    industries: ["Jewelry", "Beauty", "Gift", "Fashion"],
    features: [
      {
        title: "Hidden Magnetic Closure",
        desc: "Concealed magnets deliver a clean exterior and a satisfying open action.",
      },
      {
        title: "Flip-Top Design",
        desc: "One-hand lid motion engineered for repeated retail use.",
      },
      {
        title: "Premium Rigid Construction",
        desc: "1200–1500gsm greyboard wrapped in your choice of art paper.",
      },
      {
        title: "Custom Interior Inserts",
        desc: "EVA, velvet or molded pulp inserts cut to your product's exact shape.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '6" × 4" × 2" (customizable)' },
      { label: "Closure Type", value: "Magnetic / flip-top" },
      { label: "Surface Finish", value: "Matte / glossy" },
    ],
    customizationOptions: [
      "Custom inserts and compartments",
      "Foil or blind emboss branding",
      "Interior lid printing",
      "Pantone-matched exterior",
    ],
  },
  {
    slug: "velvet-drawstring-pouch",
    name: "Velvet Drawstring Pouch",
    category: "Pouches & Bags",
    shortDesc:
      "Soft velvet drawstring pouch protecting delicate jewelry — multiple colors with custom branding.",
    description:
      "A soft velvet drawstring jewelry pouch designed for elegant storage and gifting. The plush velvet exterior protects delicate jewelry while the drawstring closure keeps items secure. Available in multiple colors with custom branding options.",
    image: "/images/carousel/velvet-pouch.png",
    materials: "Velvet, cotton cord drawstring",
    moq: "500 pcs",
    leadTime: "10–20 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Plush Velvet Protection",
        desc: "Dense velvet pile cushions chains and stones against scratches.",
      },
      {
        title: "Drawstring Closure",
        desc: "Cotton, satin or polyester cord options, color-matched to the pouch.",
      },
      {
        title: "Full Color Range",
        desc: "Stock and Pantone-matched velvet colors for brand alignment.",
      },
      {
        title: "Custom Branding",
        desc: "Silkscreen printing or woven label stitched inside or outside.",
      },
    ],
    specs: [
      { label: "Dimensions", value: '4" × 4" (customizable)' },
      { label: "String Type", value: "Cotton cord / satin ribbon / polyester cord" },
      { label: "Closure Type", value: "Drawstring" },
    ],
    customizationOptions: [
      "Pantone velvet color matching",
      "Logo printing or woven labels",
      "Custom sizes and cord types",
    ],
  },
  {
    slug: "cotton-jewelry-pouch",
    name: "Cotton Drawstring Pouch",
    category: "Pouches & Bags",
    shortDesc:
      "Natural cotton drawstring pouch — eco-friendly, printable, gently protective.",
    description:
      "An eco-friendly cotton drawstring pouch perfect for jewelry storage and gifting. Made from natural cotton fabric with a soft texture. Ideal for brands looking for sustainable packaging solutions.",
    image: "/images/carousel/cotton-pouch.png",
    materials: "Natural cotton, cotton cord",
    moq: "500 pcs",
    leadTime: "10–20 days",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "100% Natural Cotton",
        desc: "Unbleached cotton fabric with a soft, natural hand feel.",
      },
      {
        title: "Natural & Recyclable",
        desc: "A genuinely circular packaging option for eco-positioned brands.",
      },
      {
        title: "Custom Screen Printing",
        desc: "Single to multi-color prints with water-based inks.",
      },
      {
        title: "Gentle Protection",
        desc: "Soft texture that protects finishes without abrading.",
      },
    ],
    specs: [
      { label: "Dimensions", value: '5" × 5" (customizable)' },
      { label: "String Type", value: "Cotton cord" },
      { label: "Eco-Friendly", value: "Recyclable" },
    ],
    customizationOptions: [
      "Water-based ink printing",
      "Natural cotton upgrade",
      "Custom sizes and drawcord colors",
    ],
  },
  {
    slug: "velvet-necklace-display",
    name: "Velvet Necklace Display Stand",
    category: "Pouches & Bags",
    shortDesc:
      "Velvet-covered retail display stand that presents necklaces securely in showcases.",
    description:
      "A velvet necklace display stand designed for retail showcases. The plush velvet surface holds necklaces securely in place while presenting them elegantly. Available in multiple colors to match your brand aesthetic.",
    image: "/images/carousel/velvet-necklace-stand.png",
    materials: "Velvet, wooden base",
    moq: "200 pcs",
    leadTime: "15–25 days",
    industries: ["Jewelry", "Fashion"],
    features: [
      {
        title: "Velvet Presentation Surface",
        desc: "Plush velvet holds necklaces in place without slipping.",
      },
      {
        title: "Sturdy Weighted Base",
        desc: "Wooden base keeps the stand stable in high-traffic retail.",
      },
      {
        title: "Color Matching",
        desc: "Velvet colors aligned to your retail interior palette.",
      },
      {
        title: "Base Branding",
        desc: "Foil or deboss your logo on the wooden base edge.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '12" × 4" × 10"' },
      { label: "Surface Finish", value: "Velvet covering" },
    ],
    customizationOptions: [
      "Velvet color matching",
      "Logo on wooden base",
      "Custom heights for different chain lengths",
    ],
  },
  {
    slug: "acrylic-earring-display",
    name: "Acrylic Earring Display Stand",
    category: "Pouches & Bags",
    shortDesc:
      "Crystal-clear acrylic earring display with multi-tier slots and weighted base.",
    description:
      "A modern acrylic earring display stand with transparent construction. Perfect for showcasing earrings in a clean, contemporary retail setting. The clear acrylic design lets the jewelry be the focal point.",
    image: "/images/carousel/acrylic-display.png",
    materials: "Acrylic / PVC",
    moq: "200 pcs",
    leadTime: "15–25 days",
    industries: ["Jewelry", "Beauty"],
    features: [
      {
        title: "Crystal Clear Acrylic",
        desc: "Optical-grade clarity that keeps all attention on the jewelry.",
      },
      {
        title: "Multi-Tier Slots",
        desc: "Tiered layout displays multiple earring pairs at eye level.",
      },
      {
        title: "Weighted Stability",
        desc: "Weighted base prevents tipping in busy retail environments.",
      },
      {
        title: "Custom Sizing",
        desc: "Height and slot count tailored to your assortment.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '8" × 3" × 8"' },
      { label: "Surface Finish", value: "Transparent glossy" },
    ],
    customizationOptions: [
      "Custom tiers and slot layouts",
      "Frosted or colored acrylic options",
      "Base logo printing",
    ],
  },
  {
    slug: "kraft-paper-shopping-bag",
    name: "Kraft Paper Shopping Bag",
    category: "Pouches & Bags",
    shortDesc:
      "Durable recycled kraft shopping bag with twisted handles — custom logo printing.",
    description:
      "A durable kraft paper shopping bag with twisted paper handles. Perfect for retail packaging, gift wrapping, and eco-conscious brands. Custom logo printing available on natural kraft background.",
    image: "/images/carousel/kraft-bag.png",
    materials: "Recycled kraft paper, twisted paper handles",
    moq: "200 pcs",
    leadTime: "10–20 days",
    industries: ["Fashion", "Beauty", "Gift"],
    features: [
      {
        title: "Recycled Kraft",
        desc: "Natural kraft substrate with visible fiber texture and eco story.",
      },
      {
        title: "Reinforced Handles",
        desc: "Twisted paper handles set into reinforced boards for heavy loads.",
      },
      {
        title: "Custom Printing",
        desc: "Flexo or offset logo printing in up to 4 colors.",
      },
      {
        title: "Fully Recyclable",
        desc: "Plastic-free construction — genuinely kerbside recyclable.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '10" × 8" × 12" (customizable)' },
      { label: "Handle Type", value: "Twisted paper / cotton cord" },
      { label: "Eco-Friendly", value: "Recyclable" },
    ],
    customizationOptions: [
      "Custom sizes and paper weights",
      "Logo printing up to 4 colors",
      "Handle material options",
    ],
  },
  {
    slug: "stackable-jewelry-tray",
    name: "Stackable Jewelry Tray",
    category: "Sets & Complete Packaging",
    shortDesc:
      "Stackable velvet-lined jewelry tray system with customizable compartments.",
    description:
      "A stackable velvet jewelry tray with compartmental design for organized display. Perfect for retail showcases and drawer storage. The velvet surface protects jewelry while the stackable design maximizes space efficiency.",
    image: "/images/carousel/jewelry-tray.png",
    materials: "MDF, velvet lining",
    moq: "200 pcs",
    leadTime: "15–25 days",
    industries: ["Jewelry", "Fashion"],
    features: [
      {
        title: "Velvet-Lined Compartments",
        desc: "Soft velvet bays protect pieces while keeping them organized.",
      },
      {
        title: "Stackable System",
        desc: "Trays lock vertically to build full showcases from one SKU.",
      },
      {
        title: "Sturdy MDF Core",
        desc: "MDF construction stays flat and strong under stacked loads.",
      },
      {
        title: "Custom Layouts",
        desc: "Compartment counts and sizes designed around your assortment.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '14" × 8" × 1-1/2"' },
      { label: "Surface Finish", value: "Velvet covering" },
    ],
    customizationOptions: [
      "Custom compartment layouts",
      "Velvet color matching",
      "Edge banding and branding",
    ],
  },
];

export const categories = [
  "All",
  "Boxes",
  "Pouches & Bags",
  "Sets & Complete Packaging",
];

/** Derived: categories that actually have products, in display order. */
export const activeCategories = ["Boxes", "Pouches & Bags", "Sets & Complete Packaging"];

export const industries = [
  "Jewelry",
  "Eyewear & Sunglasses",
  "Fragrance",
  "Hair & Wig",
  "Beauty",
  "Fashion",
  "Gift",
];

export const solutions = [
  "Custom Packaging",
  "Materials & Finishes",
  "How It Works",
  "Sustainability",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
