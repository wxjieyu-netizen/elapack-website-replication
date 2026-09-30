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
 * Real product catalog (18 SKUs), mapped into the 4-category IA:
 *   Boxes / Pouches & Bags / Sets & Complete Packaging / Ribbons & Accessories
 * Images live under /images/carousel/ (real photos kept from the old site);
 * the 4 display SKUs and the 5 new placeholder SKUs use
 * /images/placeholder/product-coming-soon.svg until real photography lands.
 */
export const products: Product[] = [
  {
    slug: "black-leather-jewelry-box",
    name: "Custom Black Leather Jewelry Boxes",
    category: "Boxes",
    shortDesc:
      "Faux leather rigid jewelry box with velvet interior, custom embossing and smart compartments.",
    description:
      "The black leather jewelry box is more than just storage — it is a timeless statement of sophistication. Crafted from smooth grain faux leather in a deep, matte black tone, this box offers an elevated unboxing experience that reflects your brand commitment to quality. Its sleek, fingerprint-resistant exterior enhances visual appeal while staying pristine even with daily use.",
    image: "/images/carousel/black-leather-box.png",
    materials: "Faux leather, velvet interior, cardboard core",
    moq: "500 pcs",
    leadTime: "15–20 days",
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
    slug: "custom-white-jewelry-box",
    name: "Custom White Jewelry Boxes",
    category: "Boxes",
    shortDesc:
      "Compact white jewelry box with velvet cushion and custom logo printing — clean minimalist retail and gift packaging.",
    description:
      "A compact white jewelry box with a glossy rigid shell and velvet-lined cushion. Made for bracelets and small jewelry gifts, it pairs a clean minimalist look with durable protection, and carries your logo silkscreened or hot-stamped on the lid. Ideal for retail display and gifting occasions.",
    image: "/images/carousel/pandora-box.png",
    materials: "Plastic exterior, velvet interior insert",
    moq: "500 pcs",
    leadTime: "15–20 days",
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
    slug: "custom-ring-boxes",
    name: "Custom Ring & Engagement Ring Boxes",
    category: "Boxes",
    shortDesc:
      "Custom ring boxes for engagements, weddings and retail — single or double slots, velvet or foam cushions, your logo.",
    description:
      "Custom ring boxes made for the moment the box matters most. Single and double slot layouts hold rings securely for engagements and weddings, with plush velvet or foam cushions cut to your ring profile. The matte velvet exterior photographs beautifully in proposal scenes, and your logo is foil-stamped or printed on the lid. Made to your size and colour — MOQ from 500 pieces.",
    image: "/images/carousel/ring-box-black.png",
    materials: "Velvet exterior, foam insert with velvet covering",
    moq: "500 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Single or Double Ring Slots",
        desc: "One or two precision-cut velvet slots — solo rings or proposal sets side by side.",
      },
      {
        title: "Engagement-Ready Profile",
        desc: "Slim enough to slip into a jacket pocket for the big moment.",
      },
      {
        title: "Matte Velvet Exterior",
        desc: "Deep matte velvet that photographs beautifully in proposal scenes.",
      },
      {
        title: "Your Logo on the Lid",
        desc: "Foil stamping, blind emboss or silkscreen — inside lid message printing available.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '1-3/4" × 2" × 1-1/2" (customizable)' },
      { label: "Closure Type", value: "Magnetic closure" },
      { label: "Surface Finish", value: "Matte velvet" },
    ],
    customizationOptions: [
      "Single or double ring slot layouts",
      "Velvet color matching",
      "Interior message printing",
      "Foil or embossed logo on the lid",
    ],
  },
  {
    slug: "luxury-gift-box-ribbon",
    name: "Luxury Gift Boxes with Ribbon",
    category: "Boxes",
    shortDesc:
      "Rigid luxury gift box with satin ribbon tie closure — premium presentation for corporate gifting.",
    description:
      "A luxury gift box set with satin ribbon closure, designed for premium gifting occasions. The rigid box construction with matte finish and decorative ribbon creates an unforgettable unboxing experience. Perfect for corporate gifts, weddings, and high-end retail.",
    image: "/images/carousel/luxury-gift-box.png",
    materials: "Rigid cardboard, satin ribbon",
    moq: "500 pcs",
    leadTime: "15–20 days",
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
    name: "Custom Magnetic Closure Gift Boxes",
    category: "Boxes",
    shortDesc:
      "Sleek flip-top gift box with hidden magnetic closure and custom interior inserts.",
    description:
      "A sleek magnetic closure gift box with flip-top design. The hidden magnetic mechanism provides a clean look while keeping the lid securely closed. Ideal for jewelry, eyewear, cosmetics, and small luxury items.",
    image: "/images/carousel/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png",
    materials: "Rigid cardboard, magnetic closure",
    moq: "500 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Beauty", "Gift", "Fashion"],
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
      "Lift-off lid variant with matte cream wrap and satin ribbon finish",
    ],
  },
  {
    slug: "custom-eyelash-packaging-boxes",
    name: "Custom Eyelash Packaging Boxes with Logo",
    category: "Boxes",
    shortDesc:
      "Custom eyelash packaging boxes with your logo — three stock formats or fully custom sizes, from 200 pieces.",
    description:
      "Custom eyelash packaging boxes for lash brands, salons and wholesalers. Built around your lash trays — strip lashes, volume trays or extension programs — with fitted inserts that hold each tray in place and a printed wrap that carries your brand at retail and in unboxing. Three stock formats cover the common tray sizes: 14×10×6, 15×15×5 and 20×18×8 cm, and any dimension can be made to spec. MOQ from 200 pieces with your logo printed, foil-stamped or embossed. Product photography is in progress; request a stock sample to judge the board and print quality in hand.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard with custom printed wrap, fitted lash tray inserts",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Beauty", "Gift"],
    features: [
      {
        title: "Three Stock Formats",
        desc: "14×10×6, 15×15×5 and 20×18×8 cm cover the common lash tray sizes — or made fully to your spec.",
      },
      {
        title: "Fitted Lash Tray Inserts",
        desc: "Inserts cut to hold strip lash trays and extension programs securely in transit and on shelf.",
      },
      {
        title: "Your Brand, Fully Printed",
        desc: "Offset print, foil stamping, embossing and spot UV on the wrap — inside lid printing available.",
      },
      {
        title: "Low MOQ 200",
        desc: "Launch or test lash lines from 200 pieces — well below the typical wholesale 500.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: "14×10×6 / 15×15×5 / 20×18×8 cm, or custom" },
      { label: "Insert", value: "Fitted lash tray inserts, custom layouts" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / spot UV" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Custom sizes beyond the three stock formats",
      "Full-color print, foil or embossed logo",
      "Insert layout tailored to your lash trays",
      "Boxes for single pairs up to multi-tray wholesale packs",
    ],
  },
  {
    slug: "custom-velvet-pouches",
    name: "Custom Velvet Pouches",
    category: "Pouches & Bags",
    shortDesc:
      "Soft velvet pouches in drawstring, flap, envelope and zipper styles — your colour, size and logo.",
    description:
      "Custom velvet pouches for programs that want a plush, gift-ready feel at first touch. The dense velvet pile cushions jewelry, eyewear and small luxury goods, and the same pouch carries brands through retail, gifting and unboxing moments. Choose your closure — drawstring, flap, envelope or zipper — your Pantone-matched velvet colour, and your logo silkscreened, hot-stamped or woven into a label. Made to order in any size, from small gift pouches to large presentation bags.",
    image: "/images/carousel/velvet-pouch.png",
    materials: "Velvet, cotton cord drawstring",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Plush Velvet Protection",
        desc: "Dense velvet pile cushions jewelry, frames and finished goods against scratches.",
      },
      {
        title: "Four Closure Styles",
        desc: "Drawstring, flap, envelope or zipper — the closure that fits how the pouch is used.",
      },
      {
        title: "Full Color Range",
        desc: "Stock and Pantone-matched velvet colors for brand alignment.",
      },
      {
        title: "Custom Branding",
        desc: "Silkscreen printing, foil stamping or woven label stitched inside or outside.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Closure Type", value: "Drawstring / flap / envelope / zipper" },
      { label: "String Type", value: "Cotton cord / satin ribbon / polyester cord" },
    ],
    customizationOptions: [
      "Pantone velvet color matching",
      "Logo printing, foil or woven labels",
      "Drawstring, flap, envelope or zipper closure",
      "Custom sizes, MOQ unchanged",
    ],
  },
  {
    slug: "custom-cotton-pouches",
    name: "Custom Cotton Pouches & Bags",
    category: "Pouches & Bags",
    shortDesc:
      "Natural cotton pouches and bags — printable, gently protective, made to your size and logo.",
    description:
      "Custom cotton pouches and bags for brands that want a natural, honest carrier. Unbleached cotton has a soft hand feel that suits artisan, beauty, jewelry and favor programs alike, and the fabric takes water-based ink prints beautifully. Choose drawstring, flap or zipper closure, your size from small pouches to larger gift bags, and your logo printed or woven in. Made to order — every fact on this page is our confirmed trade term.",
    image: "/images/carousel/cotton-pouch.png",
    materials: "Natural cotton, cotton cord",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "100% Natural Cotton",
        desc: "Unbleached cotton fabric with a soft, natural hand feel.",
      },
      {
        title: "Prints Beautifully",
        desc: "Single to multi-color prints with water-based inks.",
      },
      {
        title: "Gentle Protection",
        desc: "Soft texture that protects finishes without abrading.",
      },
      {
        title: "Beauty & Favor Ready",
        desc: "A natural fit for cosmetics, favors, retail and gifting programs.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "String Type", value: "Cotton cord" },
      { label: "Closure Type", value: "Drawstring / flap / zipper" },
    ],
    customizationOptions: [
      "Water-based ink printing",
      "Natural, bleached or dyed cotton",
      "Custom sizes and drawcord colors",
      "Drawstring, flap or zipper closure",
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
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Velvet, wooden base",
    moq: "200 pcs",
    leadTime: "15–20 days",
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
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Acrylic / PVC",
    moq: "200 pcs",
    leadTime: "15–20 days",
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
    leadTime: "15–20 days",
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
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "MDF, velvet lining",
    moq: "200 pcs",
    leadTime: "15–20 days",
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
  {
    slug: "velvet-jewelry-display-set",
    name: "Velvet Jewelry Display Set",
    category: "Sets & Complete Packaging",
    shortDesc:
      "Matched velvet display set — necklace busts, T-bar stand, ring cones, earring stands and cushions in one coordinated program.",
    description:
      "A complete velvet display set that turns a counter into a coherent brand moment. The program pairs necklace busts in two heights with a two-tier T-bar bracelet stand, ring cones, earring stands and plush bracelet cushions — all cut from the same velvet over structured cores, so every touchpoint matches in color and texture. Designed for jewelry retailers and brands that want display, storage and gifting to speak one visual language.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Velvet over structured core",
    moq: "500 pcs (sets with box) / 200 pcs (display pieces only)",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Gift", "Fashion"],
    features: [
      {
        title: "One Matched Program",
        desc: "Busts, stands, cones and cushions share the same velvet and core, so nothing looks pieced together.",
      },
      {
        title: "Modular Counter Layout",
        desc: "Mix heights and piece types to fit any counter — from a single bust to a full runway of displays.",
      },
      {
        title: "Structured, Not Floppy",
        desc: "Rigid cores keep busts and stands standing straight through daily retail handling.",
      },
      {
        title: "Brand-Color Velvet",
        desc: "Velvet dyed to your brand palette, with optional label or embroidery placement.",
      },
    ],
    specs: [
      { label: "Pieces", value: "Necklace busts (2 heights), T-bar stand, ring cones, earring stands, cushions" },
      { label: "Covering", value: "Velvet in custom colors" },
      { label: "Core", value: "Structured board for shape retention" },
      { label: "MOQ", value: "500 pcs with box / 200 pcs display pieces only" },
    ],
    customizationOptions: [
      "Custom velvet colors across every piece",
      "Piece mix tailored to your assortment",
      "Logo label or embroidery on busts and cushions",
      "Bundle with pouches or boxes as a full set",
    ],
  },
  {
    slug: "leather-envelope-pouch",
    name: "Leather Envelope Pouch",
    category: "Pouches & Bags",
    shortDesc:
      "Pebbled faux-leather envelope pouch with gold foil logo, snap closure and soft suede-touch interior.",
    description:
      "The envelope pouch is where a protective sleeve becomes part of the gift. Cut from pebbled faux leather with a structured flap and snap closure, it opens to reveal a suede-touch interior that cushions whatever it carries — jewelry, eyewear, cards or small leather goods. Gold foil stamping on the flap carries the brand quietly, the way luxury prefers it. A slim profile that mails flat and still feels substantial in the hand.",
    image: "/images/carousel/image.png",
    materials: "Pebbled faux leather, suede-touch lining",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Fashion", "Gift"],
    features: [
      {
        title: "Pebbled Faux Leather",
        desc: "A textured exterior that hides handling marks and reads premium at first touch.",
      },
      {
        title: "Snap-Closure Flap",
        desc: "Envelope silhouette with a secure snap — stays closed in transit, opens with one hand.",
      },
      {
        title: "Gold Foil Logo",
        desc: "Foil stamping positioned on the flap for a precise, understated brand mark.",
      },
      {
        title: "Slim, Mail-Friendly Profile",
        desc: "Fits standard mailers and gift boxes without bulking up shipping.",
      },
    ],
    specs: [
      { label: "Exterior", value: "Pebbled faux leather, custom colors" },
      { label: "Interior", value: "Suede-touch lining" },
      { label: "Closure", value: "Snap button" },
      { label: "Branding", value: "Gold foil stamping / blind emboss / heat transfer" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Custom leather colors and grain textures",
      "Foil stamping, embossing or debossing",
      "Interior lining color matching",
      "Custom sizes for jewelry, eyewear or cards",
    ],
  },
  {
    slug: "custom-satin-wig-bag",
    name: "Custom Satin Wig Bags",
    category: "Pouches & Bags",
    shortDesc:
      "Satin drawstring wig bag in the standard 30×40 cm format — smooth interior that keeps fibers from tangling, with your logo.",
    description:
      "A satin drawstring bag sized for wigs and hair extensions. The smooth satin surface lets fibers slide instead of snagging, so wigs come out of the bag the way they went in, and the drawstring closes in one pull. The standard 30×40 cm format fits most wig and extension presentations, and every bag is made to order — your satin colour, cord and branding. Product photography is in progress; request a stock sample to see and feel the material before ordering.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Satin, drawstring cord",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Hair & Wig", "Beauty", "Fashion"],
    features: [
      {
        title: "Smooth Satin Interior",
        desc: "Fibers glide instead of snagging — wigs and extensions stay tangle-free in storage and transit.",
      },
      {
        title: "Standard Wig Format",
        desc: "30×40 cm fits most wig and extension programs; other sizes made to your spec.",
      },
      {
        title: "Drawstring Closure",
        desc: "One-pull closing with a colour-matched satin or polyester cord.",
      },
      {
        title: "Your Branding",
        desc: "Silkscreen logo, woven label or heat transfer — positioned inside or outside the bag.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "30 × 40 cm standard · custom sizes on request" },
      { label: "Fabric", value: "Satin · other fabrics on request" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring" },
    ],
    customizationOptions: [
      "Pantone satin color matching",
      "Logo silkscreen, woven label or heat transfer",
      "Custom sizes and cord options",
    ],
  },
  {
    slug: "custom-satin-pouches",
    name: "Custom Satin Pouches",
    category: "Pouches & Bags",
    shortDesc:
      "Lustrous satin pouches with drawstring or flap closure — your colour, size and logo.",
    description:
      "Custom satin pouches for programs that want a gift feel at first touch. The lustrous face catches light in retail displays and unboxing photos, while the soft drape protects finishes and platings — a natural fit for jewelry, bridal, beauty and gifting lines, and a classic choice for perfume bottle gift bags. Made to order in your satin colour and size, with drawstring or flap closure and your logo silkscreened or hot-stamped. Product photography is in progress; request a stock sample to feel the material.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Satin, drawstring cord",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Fragrance", "Beauty", "Gift"],
    features: [
      {
        title: "Lustrous Gift Face",
        desc: "Light-catching satin that photographs well in retail and unboxing moments.",
      },
      {
        title: "Soft Drape Protection",
        desc: "Gentle on platings and finishes — a natural fit for bridal and gifting lines.",
      },
      {
        title: "Perfume Bottle Gift Bags",
        desc: "A classic carrier for fragrance gifting — sized to your bottle format.",
      },
      {
        title: "Made to Your Colour",
        desc: "Pantone-matched satin so the pouch lands exactly on brand.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Satin, Pantone-matched" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring / flap" },
    ],
    customizationOptions: [
      "Pantone satin color matching",
      "Silkscreen printing or hot-stamped logo",
      "Drawstring or flap closure",
      "Custom sizes, MOQ unchanged",
    ],
  },
  {
    slug: "custom-muslin-drawstring-pouch",
    name: "Custom Muslin Pouches",
    category: "Pouches & Bags",
    shortDesc:
      "Breathable unbleached muslin drawstring pouch — the natural-look carrier for jewelry, favors and small goods.",
    description:
      "An unbleached muslin pouch with a visible, honest weave. Muslin is breathable, which makes it a natural fit for items that should not sit in sealed plastic — and its hand-made look suits artisan, bridal favor and natural-positioned brands. Cut, sewn and printed to order in your size, with a cotton drawstring and your logo in water-based ink. Product photography is in progress; request a stock sample to see the weave.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Unbleached muslin, cotton cord",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "Breathable Weave",
        desc: "Air moves through the fabric — kind to items that should not sit sealed.",
      },
      {
        title: "Natural, Unbleached Look",
        desc: "A visible cotton weave that reads artisan and honest on shelf.",
      },
      {
        title: "Prints Beautifully",
        desc: "Water-based inks on cotton give soft, matte logo prints.",
      },
      {
        title: "Light to Ship",
        desc: "Featherweight construction keeps freight costs down on volume programs.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Unbleached muslin cotton" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring (cotton cord)" },
    ],
    customizationOptions: [
      "Custom sizes and shapes",
      "Water-based ink logo printing",
      "Bleached or colored muslin on request",
      "Cord color matching",
    ],
  },
  {
    slug: "custom-linen-jewelry-pouch",
    name: "Custom Linen Jewelry Pouch",
    category: "Pouches & Bags",
    shortDesc:
      "Textured natural linen pouch with drawstring — matte, breathable and quietly premium.",
    description:
      "A linen pouch for brands whose look is matte, natural and textured rather than glossy. The slubbed weave gives every pouch a subtle one-of-a-kind surface, and linen stays breathable and crisp over time. Made to order in natural, bleached or dyed linen, in your size, with drawstring or flap closure and your logo printed, labelled or embroidered. Product photography is in progress; request a stock sample to feel the weave.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Linen, cotton cord",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Jewelry", "Fashion", "Gift"],
    features: [
      {
        title: "Textured Slub Weave",
        desc: "A matte, natural surface with subtle variation — no two pouches identical.",
      },
      {
        title: "Breathable & Crisp",
        desc: "Linen keeps its hand over time and lets air move through the bag.",
      },
      {
        title: "Natural or Dyed",
        desc: "Natural and bleached stock options, or dyed to your Pantone reference.",
      },
      {
        title: "Quiet Branding",
        desc: "Woven labels and embroidery sit especially well on linen texture.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Linen — natural, bleached or dyed" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring / flap" },
    ],
    customizationOptions: [
      "Natural, bleached or Pantone-dyed linen",
      "Woven label or embroidery branding",
      "Custom sizes, MOQ unchanged",
      "Mixed linen-cotton blends on request",
    ],
  },
  {
    slug: "custom-microfiber-pouches",
    name: "Custom Microfiber Pouches",
    category: "Pouches & Bags",
    shortDesc:
      "Microfiber pouches that clean as they carry — eyewear sleeves, jewelry pouches and cloth-plus-pouch sets with your logo.",
    description:
      "Custom microfiber pouches for programs where the packaging works twice: it carries the product and polishes it. The fine synthetic weave lifts oils and dust without scratching, which makes it the standard companion for eyewear, sunglasses, screens and polished jewelry. Order the pouch alone, or as a set with a custom-printed microfiber cleaning cloth inside — a proven retail and care-kit combination. Made to order in your size and colour, with drawstring or flap closure and your logo. Product photography is in progress; request a stock sample to test the wipe performance.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Microfiber, drawstring cord",
    moq: "200 pcs",
    leadTime: "15–20 days",
    industries: ["Eyewear & Sunglasses", "Jewelry", "Beauty"],
    features: [
      {
        title: "Built for Eyewear",
        desc: "The default fabric for glasses and sunglasses sleeves — soft on lenses and coatings.",
      },
      {
        title: "Cleans as It Carries",
        desc: "The pouch itself doubles as a polishing cloth for eyewear and screens.",
      },
      {
        title: "Cloth + Pouch Sets",
        desc: "Bundle a custom-printed microfiber cleaning cloth inside the pouch — a ready-made care kit.",
      },
      {
        title: "Scratch-Free Softness",
        desc: "Fine-denier fibers are safe on polished metals, lenses and coatings.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Microfiber" },
      { label: "Fabric weight", value: "To be confirmed" },
      { label: "Closure Type", value: "Drawstring / flap" },
      { label: "Cloth + pouch set MOQ", value: "To be confirmed (pouch alone from 200 pcs)" },
    ],
    customizationOptions: [
      "Custom sizes for eyewear, jewelry or devices",
      "Logo printing in one or multiple colors",
      "Printed microfiber cleaning cloth as a set component",
      "Dyed microfiber with matched cord",
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
