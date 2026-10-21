export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  image: string;
  /** Optional extra gallery photos after the hero; falls back to [image]. */
  gallery?: string[];
  materials: string;
  moq: string;
  leadTime: string;
  industries: string[];
  features: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  customizationOptions: string[];
};

/**
 * Real product catalog (25 SKUs), mapped into product categories.
 * Images live under /images/carousel/ (real photos kept from the old site);
 * the 4 display SKUs and the placeholder SKUs use
 * /images/placeholder/product-coming-soon.svg until real photography lands.
 */
export const products: Product[] = [
  {
    slug: "black-leather-jewelry-box",
    name: "Custom Black Jewelry Boxes",
    category: "Boxes",
    shortDesc:
      "Black jewelry box packaging; confirm exterior, interior, insert and branding in the quotation and sample.",
    description:
      "Plan a black jewelry box around the jewelry type, item dimensions and required presentation. Tell us whether you want a leather-look exterior, a particular lining or a fitted insert; these are specification choices, not confirmed materials for the pictured reference. Review the proposed structure and logo placement in a free digital dieline preview, then confirm the material, finish and fit in the quotation and approved sample. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate.",
    image: "/images/carousel/black-leather-box.png",
    materials: "Exterior, lining and core to confirm in quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Exterior Material",
        desc: "Specify the black exterior appearance and material; confirm the construction in the approved sample.",
      },
      {
        title: "Interior and Insert",
        desc: "Share the jewelry dimensions and required placement so the lining and insert can be specified.",
      },
      {
        title: "Logo Placement",
        desc: "Share artwork and preferred placement; confirm the suitable branding method in the quote.",
      },
      {
        title: "Layout Review",
        desc: "Review the box opening and item access with the intended contents in a sample.",
      },
    ],
    specs: [
      { label: "Exterior", value: "Confirm requested material and finish in quote and sample" },
      { label: "Interior / Insert", value: "Specify from jewelry dimensions and layout" },
      { label: "Closure", value: "Confirm proposed structure in sample" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Request black exterior and interior options",
      "Provide logo artwork and placement reference",
      "Specify jewelry dimensions and insert layout",
    ],
  },
  {
    slug: "custom-white-jewelry-box",
    name: "Custom White Jewelry Boxes",
    category: "Boxes",
    shortDesc:
      "White jewelry box packaging; confirm shell, insert, closure and logo method against your approved sample.",
    description:
      "For a white jewelry box, share the jewelry dimensions, item count, preferred opening and artwork. The pictured box is a style reference; its shell material, insert and closure are not a specification for your order. Confirm the proposed construction, finish and fit in the quotation and approved sample before bulk. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate.",
    image: "/images/carousel/pandora-box.png",
    materials: "Shell, lining and insert to confirm in quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Gift", "Fashion"],
    features: [
      {
        title: "White Exterior",
        desc: "Specify the required surface appearance and confirm shell material in the approved sample.",
      },
      {
        title: "Item Fit",
        desc: "Provide jewelry dimensions and placement so the insert can be reviewed with the item.",
      },
      {
        title: "Box Size",
        desc: "Confirm internal clearance and finished outside size separately in the quotation.",
      },
      {
        title: "Logo Review",
        desc: "Send your artwork and preferred position; confirm the suitable print or finish method.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Confirm from jewelry dimensions" },
      { label: "Shell / Insert", value: "Confirm material and fit in quote and sample" },
      { label: "Closure", value: "Confirm with the proposed structure" },
      { label: "Color Review", value: "Confirm against approved sample before bulk" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" },
    ],
    customizationOptions: [
      "Custom logo printing",
      "Specify insert layout and color",
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
      "Custom ring boxes made for the moment the box matters most. Single and double slot layouts hold rings securely for engagements and weddings, with plush velvet or foam cushions cut to your ring profile. The matte velvet exterior photographs beautifully in proposal scenes, and your logo is foil-stamped or printed on the lid. Made to your size and colour — MOQ starts at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. A free digital dieline preview is available to review the box and cushion layout. Colour is held to Pantone references against an approved sample before bulk. Approve a custom sample first (USD 25 plus USD 20 shipping, 3–5 days) to check cushion fit with your actual ring before committing to the run.",
    image: "/images/carousel/ring-box-black.png",
    materials: "Velvet exterior, foam insert with velvet covering",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      "A rigid luxury gift box with a satin ribbon tie closure, built for corporate gifting, weddings and high-end retail. Greyboard construction wrapped in premium matte art paper gives the box its substantial feel; the double-face satin ribbon makes the opening itself part of the ceremony, and foil stamping, embossing or spot UV carry the brand mark. Sizes are custom to your product, with Pantone-matched wrapping so box, ribbon and any enclosure card read as one palette - color held against an approved sample before bulk. Interior options secure the product for gifting and courier conditions alike. A free digital dieline preview is available to review the box structure. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. A custom sample (USD 25 plus USD 20 shipping, 3-5 days) settles ribbon hand, wrap shade and finish before the bulk order.",
    image: "/images/carousel/luxury-gift-box.png",
    materials: "Rigid cardboard, satin ribbon",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "Dieline", value: "Free digital dieline preview" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" },
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
      "A sleek flip-top gift box with a hidden magnetic closure, built for jewelry, eyewear, cosmetics and small luxury programs. The concealed magnet pair keeps the lid shut in transit yet opens one-handed in a retail setting, and because the mechanism sits inside the wrap, the exterior stays clean for full-surface print or foil branding. Construction is 1200-1500gsm greyboard wrapped in your choice of art paper, with interior inserts cut to the product's exact footprint so contents ride immobile - EVA, velvet or molded pulp by product weight and fragility. Specify Pantone references for wrap and print; color is held against an approved sample before bulk. A free digital dieline preview is available to review the box structure. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. Approve a custom sample first (USD 25 plus USD 20 shipping, 3-5 days) to check closure feel and color before committing to bulk.",
    image: "/images/carousel/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png",
    materials: "Rigid cardboard, magnetic closure",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "Dieline", value: "Free digital dieline preview" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" },
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
      "Custom eyelash packaging boxes for false eyelash brands, salons and wholesalers — from single-pair retail boxes to empty wholesale packaging for full lash lines. Built around your lash trays — strip lashes, volume trays or extension programs — with fitted inserts that hold each tray in place for storage, transit and shelf, and a printed wrap that carries your brand at retail and in unboxing. Three stock formats cover the common tray sizes: 14×10×6, 15×15×5 and 20×18×8 cm, and any dimension can be made to spec. MOQ from 200 pieces with your logo printed, foil-stamped or embossed. Request a stock sample to judge the board and print quality in hand.",
    image: "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-hero.jpg",
    gallery: [
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-hero.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-01.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-02.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-03.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-04.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-05.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-scene-01.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-scene-02.jpg",
    ],
    materials: "Rigid paperboard with custom printed wrap, fitted lash tray inserts",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
    slug: "custom-perfume-boxes",
    name: "Custom Perfume Packaging Boxes",
    category: "Boxes",
    shortDesc:
      "Custom perfume box projects from 200 pieces; confirm the bottle fit, structure, insert and finish in a sample.",
    description:
      "Start a perfume box brief with bottle dimensions, bottle weight, item count, preferred opening and artwork. The gallery shows style references, not a single standard configuration. Ask for the proposed box structure, insert material and branding method to be itemized in the quotation. Check the fit and opening with your bottle in an approved sample; presentation alone does not establish shipping protection. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate.",
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
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-scene-02.jpg",
    ],
    materials: "Board, wrap and insert to confirm in quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Fragrance", "Beauty", "Gift"],
    features: [
      {
        title: "Built Around Your Bottle",
        desc: "Send bottle dimensions, weight and item count to review required internal space and insert layout.",
      },
      {
        title: "Structure Selection",
        desc: "Share the preferred opening; confirm the proposed construction in the quote and sample.",
      },
      {
        title: "Artwork Review",
        desc: "Provide logo and artwork files; confirm print area and finish for the selected structure.",
      },
      {
        title: "Bottle Fit Check",
        desc: "Test the actual bottle in the approved sample; assess transport requirements separately if needed.",
      },
    ],
    specs: [
      { label: "Structure", value: "Confirm proposed opening in quotation and sample" },
      { label: "Dimensions", value: "Made to your bottle" },
      { label: "Insert", value: "Confirm material and bottle fit in sample" },
      { label: "Surface Finish", value: "Confirm with approved artwork and sample" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Provide bottle dimensions, weight and count",
      "Share preferred opening and branding reference",
      "Specify bottle placement and insert requirements",
      "Confirm materials and finishes in quotation",
    ],
  },
  {
    slug: "custom-perfume-sample-card-boxes",
    name: "Custom Printed Perfume Sample Cards",
    category: "Sampling Cards",
    shortDesc:
      "Printed perfume sampling cards; share vial or sachet dimensions, attachment method and artwork for a quote.",
    description:
      "This page covers printed perfume sample cards, not rigid perfume gift boxes. Send the vial or sachet dimensions, number of samples per card, proposed attachment method and artwork. Card stock, print method, attachment and finished size need confirmation in the quotation and approved sample. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate. Product photography is pending.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Card stock and sample attachment to confirm in quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Fragrance", "Beauty", "Gift"],
    features: [
      {
        title: "Artwork Brief",
        desc: "Share print-ready artwork and required information; confirm print area and method in the quote.",
      },
      {
        title: "Sized to Your Sample Count",
        desc: "State vial or sachet count and dimensions to review a suitable layout.",
      },
      {
        title: "Attachment Review",
        desc: "Confirm how each sample attaches and whether the finished pack meets your mailing requirements.",
      },
      {
        title: "Pairs with Gift Boxes",
        desc: "Discuss card and gift box requirements as separate components if both are needed.",
      },
    ],
    specs: [
      { label: "Format", value: "Printed sample card; attachment to confirm" },
      { label: "Sample count", value: "Custom — single to multi-scent layouts" },
      { label: "Card size", value: "Made to your spec" },
      { label: "Print", value: "Confirm artwork, stock and print method" },
      { label: "MOQ", value: "200 pcs" },
      { label: "Production", value: "Typically 15–20 days after sample approval and payment receipt; shipping separate" },
    ],
    customizationOptions: [
      "Card sizes and sample-count layouts",
      "Provide artwork and print requirements",
      "Specify sample format and attachment method",
      "Discuss matching gift boxes as a separate component",
    ],
  },
  {
    slug: "custom-press-on-nail-boxes",
    name: "Custom Press-on Nail Boxes",
    category: "Boxes",
    shortDesc:
      "Custom press-on nail packaging boxes — sized to your nail sets and trays, with your logo from the first run.",
    description:
      "Custom press-on nail packaging for nail brands selling direct and at retail. Press-on sets live or die on presentation — the box holds the nail trays or tips securely, shows the shade and size system, and carries your brand at first sight. Boxes are made to your set format: single-set sleeves, multi-size kits or wholesale display packs, with fitted inserts that keep every tray in place. Your logo is printed, foil-stamped or embossed on the wrap. MOQ from 200 pieces — send your tray dimensions and set count for a quote. Product photography is in progress; request a stock sample to judge the board quality.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard with custom printed wrap, fitted tray inserts",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Beauty", "Gift"],
    features: [
      {
        title: "Sized to Your Set Format",
        desc: "Single-set sleeves, multi-size kits and wholesale display packs — built around your trays.",
      },
      {
        title: "Fitted Tray Inserts",
        desc: "Inserts cut to hold nail trays, tips and accessories in place in transit and on shelf.",
      },
      {
        title: "Shade-Forward Branding",
        desc: "Full-colour print, foil and embossing that show the shade system and carry the brand.",
      },
      {
        title: "Retail and DTC Ready",
        desc: "Structures that work on a retail shelf and in an e-commerce mailer alike.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your nail set and trays" },
      { label: "Insert", value: "Fitted tray inserts, custom layouts" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / spot UV" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Custom sizes for any set or kit format",
      "Full-colour print, foil or embossed logo",
      "Insert layouts tailored to your trays",
      "Wholesale display pack formats",
    ],
  },
  {
    slug: "custom-hair-extension-boxes",
    name: "Custom Hair Extension Boxes",
    category: "Boxes",
    shortDesc:
      "Custom hair extension packaging boxes — sleeve, drawer and magnetic formats that present bundles and wefts at retail.",
    description:
      "Custom hair extension boxes for extension brands and salons. The box does two jobs: it keeps bundles and wefts orderly and protected, and it presents the length-shade system the way a premium hair program deserves. Sleeve boxes for single bundles, drawer boxes for multi-bundle sets and magnetic flip-tops for flagship programs — each made to your bundle dimensions, with inserts that hold hair in place without crushing it. Your logo prints, foils or embosses on the wrap. MOQ from 200 pieces — send your bundle dimensions for a quote. Product photography is in progress.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard with custom printed wrap, fitted bundle inserts",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Hair & Wig", "Beauty", "Gift"],
    features: [
      {
        title: "Sleeve, Drawer & Magnetic",
        desc: "Three structures matched to the program — single bundles, multi-bundle sets and flagship lines.",
      },
      {
        title: "Bundle-Holding Inserts",
        desc: "Inserts that keep wefts and bundles in place and presenting, without crushing the hair.",
      },
      {
        title: "Length-Shade Presentation",
        desc: "Print programs that show the length and shade system clearly at retail.",
      },
      {
        title: "Matched Bag Programs",
        desc: "Pairs with satin wig bags and cotton envelope pouches as one branded system.",
      },
    ],
    specs: [
      { label: "Structures", value: "Sleeve / drawer / magnetic flip-top" },
      { label: "Dimensions", value: "Made to your bundle format" },
      { label: "Insert", value: "Fitted inserts for bundles and wefts" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / spot UV" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Custom sizes for any bundle count",
      "Full-colour print, foil or embossed logo",
      "Insert layouts for wefts and accessories",
      "Matched programs with satin wig bags",
    ],
  },
  {
    slug: "custom-watch-boxes",
    name: "Custom Watch Boxes",
    category: "Boxes",
    shortDesc:
      "Custom watch boxes with fitted watch pillow inserts — single and multi-watch formats for retail and gifting.",
    description:
      "Custom watch boxes for watch brands, strap makers and gifting programs. The structure is the same craft as our jewelry boxes: rigid board with your printed or wrapped finish, and a fitted watch pillow that holds the timepiece upright and still — single-watch presentation boxes through multi-watch cases with individually pillowed bays. Wraps range from matte art paper to faux leather, with foil stamping, embossing and spot UV branding. MOQ from 200 pieces — send your watch dimensions and piece count for a quote. Product photography is in progress; request a stock sample to judge the board and finish.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard or faux leather wrap, watch pillow inserts",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Fitted Watch Pillows",
        desc: "Velvet or satin-covered pillows hold each watch upright and still — the same insert craft as our ring boxes.",
      },
      {
        title: "Single to Multi-Watch",
        desc: "One-watch presentation boxes through multi-bay cases for collectors and sets.",
      },
      {
        title: "Premium Wrap Options",
        desc: "Matte art paper, textured wraps or faux leather — foil and emboss branding on every version.",
      },
      {
        title: "Retail and Gift Ready",
        desc: "Structures that present at the counter and protect through gifting and shipping.",
      },
    ],
    specs: [
      { label: "Structures", value: "Two-piece lift-off / drawer / magnetic flip-top" },
      { label: "Insert", value: "Fitted watch pillows, velvet or satin covered" },
      { label: "Wrap", value: "Art paper / textured wrap / faux leather" },
      { label: "Surface Finish", value: "Matte / glossy / foil stamping / embossing" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Single- and multi-watch layouts",
      "Pillow materials and colours to your spec",
      "Foil, emboss and full-print branding",
      "Matched pouch programs for the after-sale",
    ],
  },
  {
    slug: "custom-velvet-pouches",
    name: "Custom Velvet Pouches",
    category: "Pouches & Bags",
    shortDesc:
      "Soft velvet pouches in drawstring, flap, envelope and zipper styles — your colour, size and logo.",
    description:
      "Custom velvet pouches for programs that want a plush, gift-ready feel at first touch. The dense velvet pile cushions jewelry, eyewear and small luxury goods, and the same pouch carries brands through retail, gifting and unboxing moments. Choose your closure — drawstring, flap, envelope or zipper — your Pantone-matched velvet colour, and your logo silkscreened, hot-stamped or woven into a label. Custom sizing is reviewed against the product and construction, from small gift pouches to larger presentation bags. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. Velvet colour is reviewed against the approved sample before bulk. A custom sample (USD 25 plus USD 20 shipping, 3–5 days) settles pile direction, shade and logo hand before the production order — the cheapest way to see the exact fabric your program will carry.",
    image: "/images/carousel/velvet-pouch.png",
    materials: "Velvet, cotton cord drawstring",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      "Custom cotton pouches and bags for brands that want a natural, honest carrier. Unbleached cotton has a soft hand feel that suits artisan, beauty, jewelry and favor programs alike, and the fabric takes water-based ink prints beautifully. Choose your style — drawstring, flap, envelope or zipper — in sizes reviewed against your product, from small jewelry and cosmetics pouches to larger gift bags, with your logo printed or woven in. Made to order, with materials, dimensions and finishes confirmed in your quote.",
    image: "/images/carousel/cotton-pouch.png",
    materials: "Natural cotton, cotton cord",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "Cotton Fabric",
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
      { label: "Closure Type", value: "Drawstring / flap / envelope / zipper" },
    ],
    customizationOptions: [
      "Water-based ink printing",
      "Natural, bleached or dyed cotton",
      "Custom sizes and drawcord colors",
      "Drawstring, flap, envelope or zipper closure",
    ],
  },
  {
    slug: "custom-cotton-envelope-pouches",
    name: "Custom Cotton Envelope Pouches",
    category: "Pouches & Bags",
    shortDesc:
      "Cotton envelope pouches with flap-snap, flat-pocket and zip-envelope styles — a workhorse carrier for jewelry, wigs and beauty.",
    description:
      "The cotton envelope pouch is one of our most-run pouch programs: a structured cotton carrier with an envelope flap, made in many styles and custom sizes for jewelry, wigs and hair, and beauty lines. Three style families cover the uses — the flap-and-snap envelope that closes with one hand and gifts beautifully, the flat open pocket for inserts and slip cases, and the zip envelope that secures contents for travel and retail. Natural unbleached cotton takes water-based ink prints and woven labels well, and every size is made to your product. MOQ from 200 pieces. Product photography is in progress; request a stock sample to feel the weave.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Natural cotton, snap or zipper closure",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Hair & Wig", "Beauty"],
    features: [
      {
        title: "Envelope Flap with Snap",
        desc: "The signature style — a structured flap that closes with one hand and gifts beautifully.",
      },
      {
        title: "Flat Pocket & Zip Envelope",
        desc: "Open flat pockets for inserts and slip cases; zip envelopes that secure contents for travel.",
      },
      {
        title: "Custom Sizes Across Lines",
        desc: "Small jewelry envelopes through wig and beauty formats — made to your product, MOQ unchanged.",
      },
      {
        title: "Prints & Labels",
        desc: "Water-based ink prints, woven labels and heat transfers sit well on the natural weave.",
      },
    ],
    specs: [
      { label: "Styles", value: "Envelope flap (snap) / flat pocket / zip envelope" },
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Natural, bleached or dyed cotton" },
      { label: "Closure", value: "Snap / open pocket / zipper" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Flap, flat-pocket and zip-envelope styles",
      "Custom sizes for jewelry, wigs and beauty",
      "Water-based ink printing or woven labels",
      "Natural, bleached or dyed cotton",
    ],
  },
  {
    slug: "velvet-necklace-display",
    name: "Velvet Necklace Display Stand",
    category: "Retail Display Props",
    shortDesc:
      "Velvet-covered retail display stand that presents necklaces securely in showcases.",
    description:
      "A velvet-covered necklace display stand for retail showcases. The plush surface holds chains and pendants in place without slipping, while the weighted base keeps the stand stable through high-traffic retail hours. Velvet colors are matched to your interior palette against an approved sample before bulk. Heights can be varied for different chain lengths, so one stand format can serve pendant, choker and lariat assortments. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. A custom sample (USD 25 plus USD 20 shipping, 3-5 days) settles fabric shade and proportion before the production order. Pairs with the velvet jewelry display set and stackable trays to build a coordinated counter program.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Velvet, wooden base",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "Color Review", value: "Confirm against approved sample before bulk" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" },
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
    category: "Retail Display Props",
    shortDesc:
      "Crystal-clear acrylic earring display with multi-tier slots and weighted base.",
    description:
      "A crystal-clear acrylic earring display with tiered slots and a weighted base, designed so the jewelry - not the stand - carries the visual. Optical-grade clarity suits contemporary retail settings; the multi-tier layout puts multiple pairs at eye level while the weighted base resists tipping in busy display environments. Slot count, tier count and height are engineered around your assortment, from stud-and-drop pairs to statement earrings, and bases take direct logo printing or frosted and colored acrylic variants for brand-matched counters. Production runs from 200 pieces in 15-20 days. Approve proportions with a custom sample first (USD 25 plus USD 20 shipping, 3-5 days), and specify slot layouts on the drawing so the finished stand fits your exact earring range without rework.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Acrylic / PVC",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "MOQ / Lead Time", value: "200 pcs, 15-20 days" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" },
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
      "Kraft shopping bag with twisted handles — custom logo printing.",
    description:
      "A durable kraft paper shopping bag with twisted paper handles set into reinforced boards, built for retail carry-out, gift wrapping and market days. The natural kraft substrate takes flexo or offset logo printing in up to four colors, and its visible fiber texture gives printed marks a warm, honest backdrop. Sizes and paper weights are custom - from boutique counter bags to event carry-all formats - with handle options in twisted paper or cotton cord. Ask us to confirm the selected paper, handle and finish before assessing disposal options. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. Colour is reviewed against the approved sample before bulk. Request a free digital dieline preview to review gusset depth and base format for your typical load, then approve a custom sample (USD 25 plus USD 20 shipping, 3-5 days) to test handle comfort and print density in hand before the bulk run.",
    image: "/images/carousel/kraft-bag.png",
    materials: "Kraft paper, twisted paper handles",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Fashion", "Beauty", "Gift"],
    features: [
      {
        title: "Kraft Paper",
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
        title: "Paper Construction",
        desc: "Review the selected paper, handle, inks and finish when assessing disposal options.",
      },
    ],
    specs: [
      { label: "Dimensions (L × W × H)", value: '10" × 8" × 12" (customizable)' },
      { label: "Handle Type", value: "Twisted paper / cotton cord" },
      { label: "Dieline", value: "Free digital dieline preview" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" },
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
    category: "Retail Display Props",
    shortDesc:
      "Stackable velvet-lined jewelry tray system with customizable compartments.",
    description:
      "A stackable velvet-lined jewelry tray system for organized showcase display and drawer storage. Velvet-lined compartments protect pieces while the vertical stacking format lets one SKU build a full display wall - trays lock in stack so the tower stays stable and presentable through retail hours. The MDF core stays flat and strong under stacked loads, and compartment counts and sizes are laid out around your assortment, from rings and earrings to chains and watches. Velvet colors match your counter palette against an approved sample before bulk. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. A custom sample (USD 25 plus USD 20 shipping, 3-5 days) confirms lining shade and compartment fit with your actual pieces before the production order. Combine with the velvet display set for a coordinated showcase program.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "MDF, velvet lining",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "Color Review", value: "Confirm against approved sample before bulk" },
      { label: "Custom Sample", value: "USD 25 + USD 20 shipping, 3-5 days" },
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
    category: "Retail Display Props",
    shortDesc:
      "Matched velvet display set — necklace busts, T-bar stand, ring cones, earring stands and cushions in one coordinated program.",
    description:
      "A complete velvet display set that turns a counter into a coherent brand moment. The program pairs necklace busts in two heights with a two-tier T-bar bracelet stand, ring cones, earring stands and plush bracelet cushions — all cut from the same velvet over structured cores, so every touchpoint matches in color and texture. Designed for jewelry retailers and brands that want display, storage and gifting to speak one visual language. Set composition is built around your assortment — counts and heights are specified per piece, not fixed — and the velvet shade is matched to your counter palette against an approved sample before bulk. Orders start at 200 pieces per set. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. A custom sample (USD 25 plus USD 20 shipping, 3–5 days) confirms shade and proportion with your actual jewelry before the production order. Stacks with the tray system for a full showcase build-out.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Velvet over structured core",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "MOQ", value: "200 pcs" },
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
      "The envelope pouch is where a protective sleeve becomes part of the gift. Cut from pebbled faux leather with a structured flap and snap closure, it opens to reveal a suede-touch interior that cushions whatever it carries — jewelry, eyewear, cards or small leather goods. Gold foil stamping on the flap carries the brand quietly, the way luxury prefers it. A slim profile that mails flat and still feels substantial in the hand. Sizes are cut to your contents, from single-card minis to eyewear-length formats, and foil colour, thread and interior shade are specified together so the pouch reads as one palette — held against an approved sample before bulk. Production runs from 200 pieces in 15–20 days, and a custom sample (USD 25 plus USD 20 shipping, 3–5 days) settles flap hand, foil density and interior fit with your actual product before the run.",
    image: "/images/carousel/image.png",
    materials: "Pebbled faux leather, suede-touch lining",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "Closure Type", value: "Drawstring / flap / envelope" },
    ],
    customizationOptions: [
      "Pantone satin color matching",
      "Silkscreen printing or hot-stamped logo",
      "Drawstring, flap or envelope closure",
      "Custom sizes, MOQ unchanged",
    ],
  },
  {
    slug: "custom-muslin-drawstring-pouch",
    name: "Custom Natural-Fabric Drawstring Pouches",
    category: "Pouches & Bags",
    shortDesc:
      "Natural-look drawstring pouch projects; confirm the fabric composition, weave and cord in a sample.",
    description:
      "For a muslin-style drawstring pouch, send the item dimensions, quantity, preferred fabric appearance, cord and artwork. Request the exact fiber composition and fabric weight in the quotation, then check the proposed material and logo print in a sample. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate. Product photography is pending; request a sample to review the actual fabric and print.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Fabric composition, weave and cord to confirm in quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Beauty", "Gift"],
    features: [
      {
        title: "Fabric Review",
        desc: "Confirm composition, weave and weight on the proposed sample before approving the order.",
      },
      {
        title: "Requested Appearance",
        desc: "Share a natural-look reference and confirm color against the approved sample.",
      },
      {
        title: "Logo Method",
        desc: "Provide artwork and confirm the suitable print method on the selected fabric.",
      },
      {
        title: "Usable Opening",
        desc: "Check the drawstring opening with the intended item in the sample.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Fabric", value: "Confirm composition and weave in quote and sample" },
      { label: "Fabric weight", value: "Confirm for selected fabric" },
      { label: "Closure Type", value: "Drawstring; cord material to confirm" },
    ],
    customizationOptions: [
      "Custom sizes and shapes",
      "Provide logo artwork and preferred print appearance",
      "Specify natural or colored fabric preference",
      "Confirm cord material and color",
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
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
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
      { label: "Cloth + pouch set MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Custom sizes for eyewear, jewelry or devices",
      "Logo printing in one or multiple colors",
      "Printed microfiber cleaning cloth as a set component",
      "Dyed microfiber with matched cord",
    ],
  },
  {
    slug: "custom-pvc-bags",
    name: "Custom Clear Packaging Bags with Logo",
    category: "Pouches & Bags",
    shortDesc:
      "Clear custom bags with logo from 200 pieces; confirm film and closure type in a sample.",
    description:
      "For a clear packaging bag, provide the contents, required finished size, usable opening, preferred closure and logo artwork. Confirm the exact film composition, gauge, closure construction and print method in the quotation and approved sample. Orders start at 200 pieces. Product photography is pending; request a sample to check the actual film, opening and print.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Clear film and closure to confirm in quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Beauty", "Jewelry"],
    features: [
      {
        title: "Contents and Size",
        desc: "Share the intended items and finished bag dimensions for a suitable layout.",
      },
      {
        title: "Closure Selection",
        desc: "State the preferred opening and closure; confirm its action with the contents in a sample.",
      },
      {
        title: "Logo Placement",
        desc: "Provide artwork and confirm print method and position for the selected film.",
      },
      {
        title: "MOQ 200",
        desc: "State your quantity from 200 pieces and delivery destination when requesting a quote.",
      },
    ],
    specs: [
      { label: "Dimensions", value: "Made to your size" },
      { label: "Material", value: "Confirm clear film composition in quote and sample" },
      { label: "Closure type", value: "To be confirmed (quoted to your spec)" },
      { label: "Thickness / gauge", value: "To be confirmed" },
      { label: "Print method", value: "To be confirmed" },
      { label: "MOQ", value: "200 pcs" },
    ],
    customizationOptions: [
      "Custom sizes from small item bags to toiletry formats",
      "Provide logo artwork and preferred position",
      "Specify the required closure and usable opening",
      "Matched programs with fabric pouch lines",
    ],
  },
];

export const categories = [
  "All",
  "Boxes",
  "Pouches & Bags",
  "Retail Display Props",
  "Sampling Cards",
];

/** Derived: categories that actually have products, in display order. */
export const activeCategories = ["Boxes", "Pouches & Bags", "Retail Display Props", "Sampling Cards"];

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

/** Related /news sourcing guides linked on each product detail page — curated, never forced. */
export const productGuides: Record<string, string[]> = {
  "black-leather-jewelry-box": [
    "how-to-choose-custom-jewelry-boxes",
    "jewelry-box-inserts-guide",
    "necklace-bracelet-packaging-guide",
    "custom-rigid-boxes-guide",
    "surface-finishes-compared-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "custom-white-jewelry-box": [
    "how-to-choose-custom-jewelry-boxes",
    "jewelry-box-inserts-guide",
    "necklace-bracelet-packaging-guide",
    "surface-finishes-compared-guide",
    "custom-rigid-boxes-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "custom-ring-boxes": [
    "custom-watch-boxes-guide",
    "custom-ring-boxes-guide",
    "jewelry-box-inserts-guide",
    "packaging-inserts-guide",
    "custom-rigid-boxes-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "luxury-gift-box-ribbon": [
    "custom-printed-ribbon-guide",
    "magnetic-closure-vs-ribbon-tie-gift-boxes",
    "packaging-colour-tolerance-explained",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "magnetic-closure-gift-box": [
    "magnetic-gift-boxes-wholesale-guide",
    "magnetic-gift-boxes-guide",
    "magnetic-closure-vs-ribbon-tie-gift-boxes",
    "custom-rigid-boxes-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "custom-eyelash-packaging-boxes": [
    "how-to-customize-eyelash-boxes",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
      "ppwr-empty-space-rules-guide",
  ],
  "custom-perfume-boxes": [
    "custom-perfume-packaging-guide",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
      "wholesale-perfume-boxes-guide",
  ],
  "custom-perfume-sample-card-boxes": [
    "perfume-sample-cards-guide",
    "custom-perfume-packaging-guide",
    "how-to-read-a-packaging-specification-sheet",
    "custom-gift-card-boxes-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "custom-press-on-nail-boxes": [
    "press-on-nail-packaging-guide",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
      "ppwr-empty-space-rules-guide",
  ],
  "custom-hair-extension-boxes": [
    "custom-hair-extension-boxes-guide",
    "custom-hair-extension-packaging-guide",
    "hair-extension-packaging-ideas",
    "custom-rigid-boxes-guide",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "custom-watch-boxes": [
    "custom-watch-boxes-guide",
    "custom-rigid-boxes-guide",
    "packaging-inserts-guide",
    "how-to-choose-custom-jewelry-boxes",
      "ppwr-packaging-regulation-guide",
      "ppwr-recyclability-grades-guide",
  ],
  "custom-velvet-pouches": [
    "custom-glasses-cases-pouches-guide",
    "velvet-satin-muslin-pouches-compared",
    "how-to-choose-a-custom-jewelry-pouch",
    "custom-logo-pouches-guide",
  ],
  "custom-cotton-pouches": [
    "custom-glasses-cases-pouches-guide",
    "how-to-choose-a-custom-jewelry-pouch",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide",
      "custom-toiletry-bags-guide",
  ],
  "custom-cotton-envelope-pouches": [
    "how-to-choose-a-custom-jewelry-pouch",
    "custom-logo-pouches-guide",
    "how-to-read-a-packaging-specification-sheet",
      "custom-toiletry-bags-guide",
  ],
  "velvet-necklace-display": [
    "jewelry-display-trays-guide",
    "custom-jewelry-packaging-guide",
    "how-to-choose-custom-jewelry-boxes",
  ],
  "acrylic-earring-display": [
    "jewelry-display-trays-guide",
    "custom-jewelry-packaging-guide",
    "how-to-choose-custom-jewelry-boxes",
  ],
  "kraft-paper-shopping-bag": [
    "custom-gift-packaging-guide",
    "custom-clothing-apparel-packaging-guide",
    "custom-logo-pouches-guide",
      "candle-packaging-guide",
  ],
  "stackable-jewelry-tray": [
    "jewelry-display-trays-guide",
    "packaging-inserts-guide",
    "custom-jewelry-packaging-guide",
  ],
  "velvet-jewelry-display-set": [
    "jewelry-display-trays-guide",
    "custom-jewelry-packaging-guide",
    "how-to-choose-custom-jewelry-boxes",
  ],
  "leather-envelope-pouch": [
    "how-to-choose-a-custom-jewelry-pouch",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide",
  ],
  "custom-satin-wig-bag": [
    "custom-wig-packaging-guide",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide",
      "custom-hair-extension-boxes-guide",
  ],
  "custom-satin-pouches": [
    "custom-cosmetic-bags-guide",
    "velvet-satin-muslin-pouches-compared",
    "how-to-choose-a-custom-jewelry-pouch",
    "custom-logo-pouches-guide",
  ],
  "custom-muslin-drawstring-pouch": [
    "custom-muslin-bags-guide",
    "how-to-choose-custom-drawstring-bags",
    "velvet-satin-muslin-pouches-compared",
  ],
  "custom-microfiber-pouches": [
    "custom-glasses-cases-pouches-guide",
    "how-to-choose-a-custom-jewelry-pouch",
    "velvet-satin-muslin-pouches-compared",
    "custom-logo-pouches-guide",
  ],
  "custom-pvc-bags": [
    "custom-cosmetic-bags-guide",
    "how-to-choose-custom-drawstring-bags",
    "custom-cosmetic-packaging-guide",
    "custom-logo-pouches-guide",
      "custom-toiletry-bags-guide",
  ],
};

