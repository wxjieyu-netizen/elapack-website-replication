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
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "EVA foam, velvet, satin or molded pulp insert, fitted to your product dimensions" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection; anti-tarnish lining is an option for silver / plated items only, confirmed by sample" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "EVA foam, velvet, satin or molded pulp insert, fitted to your product dimensions" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection; anti-tarnish lining is an option for silver / plated items only, confirmed by sample" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
      "Custom ring boxes for jewelry brands, from 200 pieces. Plan the ring fit, insert, exterior and logo together before approving a sample.",
    description:
      "Custom ring boxes for jewelry brands ordering from 200 pieces. For a comparable quote, send the ring's band width, setting height, the number of rings per box, preferred appearance, logo artwork, quantity and delivery destination. Review the proposed box and insert dimensions, slot layout, closure and finish together; check retention and removal with your actual ring in an approved sample. A free visual preview of the proposed box structure is available. Custom samples cost USD 25 plus USD 20 shipping and take 3–5 days to make. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate. Confirm how sizes, colours and artwork are allocated in the quotation.",
    image: "/images/carousel/ring-box-black.png",
    materials: "Confirm the proposed exterior and insert materials in the quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Measure the Ring",
        desc: "Share the band width, setting height and ring count so the insert can be planned around the actual pieces.",
      },
      {
        title: "Check the Insert",
        desc: "Compare single- and double-ring layouts, then check retention and removal on a loaded sample.",
      },
      {
        title: "Specify the Finish",
        desc: "Send an exterior and lining reference; confirm the offered material, colour and closure in the quotation.",
      },
      {
        title: "Approve the Branding",
        desc: "Send logo artwork and preferred placement; review the proposed method and appearance in the sample.",
      },
    ],
    specs: [
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "EVA foam, velvet, satin or molded pulp insert, fitted to your product dimensions" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection; anti-tarnish lining is an option for silver / plated items only, confirmed by sample" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    customizationOptions: [
      "Single- or double-ring layout for quotation",
      "Proposed exterior and insert materials",
      "Logo method and placement for approval",
      "Size, colour and artwork allocation confirmed per order",
    ],
  },
  {
    slug: "luxury-gift-box-ribbon",
    name: "Luxury Gift Boxes with Ribbon",
    category: "Boxes",
    shortDesc:
      "Rigid luxury gift box with satin ribbon tie closure — premium presentation for corporate gifting. MOQ 200 pcs, typical production 15–20 days.",
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
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "EVA foam, velvet, satin or molded pulp insert, fitted to your product dimensions" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection; anti-tarnish lining is an option for silver / plated items only, confirmed by sample" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "EVA foam, velvet, satin or molded pulp insert, fitted to your product dimensions" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection; anti-tarnish lining is an option for silver / plated items only, confirmed by sample" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "EVA foam, velvet, satin or molded pulp insert, fitted to your product dimensions" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection; anti-tarnish lining is an option for silver / plated items only, confirmed by sample" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "EVA foam, velvet, satin or molded pulp insert, fitted to your product dimensions" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection; anti-tarnish lining is an option for silver / plated items only, confirmed by sample" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
      "Custom watch boxes for watch brands, strap makers and gifting programs. Discuss a rigid box, wrap and watch pillow for single-watch or multi-watch presentation. Share the watch case dimensions, closed-strap size, accessories and number of watches per box so the proposed layout can be checked on a loaded sample. Confirm the wrap, decoration and any transit checks for the complete shipping pack before bulk production. MOQ from 200 pieces. Product photography is in progress; request a stock sample to judge the board and finish.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Rigid paperboard or faux leather wrap, watch pillow inserts",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Fitted Watch Pillows",
        desc: "Review the proposed pillow and covering with the actual watch; check contact, movement and removal on a loaded sample.",
      },
      {
        title: "Single to Multi-Watch",
        desc: "One-watch presentation boxes through multi-bay cases for collectors and sets.",
      },
      {
        title: "Premium Wrap Options",
        desc: "Discuss matte art paper, textured wraps or faux leather, then confirm the suitable foil or emboss method for the selected wrap and artwork.",
      },
      {
        title: "Retail and Gift Ready",
        desc: "Specify the presentation box for retail or gifting, then assess the complete shipping pack for the intended route.",
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
      { label: "Fabric options", value: "Velvet, cotton, muslin, satin, microfiber, suede or linen — choose from the quotation; final fabric confirmed in approved sample" },
      { label: "Closure options", value: "Drawstring, flap, envelope or zipper; string types confirmed in quotation" },
      { label: "Size", value: "Made to your product dimensions — confirm finished size in the quotation" },
      { label: "Logo method", value: "Silkscreen, hot stamp or woven label; Pantone matching on request" },
      { label: "Protection", value: "Soft lining for anti-scratch and anti-tangle protection; anti-tarnish treatment is an option for silver / plated items only, confirmed by sample" },
      { label: "Set option", value: "Add a matching box, card or microfiber cleaning cloth to make a box + pouch set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
      { label: "Fabric options", value: "Velvet, cotton, muslin, satin, microfiber, suede or linen — choose from the quotation; final fabric confirmed in approved sample" },
      { label: "Closure options", value: "Drawstring, flap, envelope or zipper; string types confirmed in quotation" },
      { label: "Size", value: "Made to your product dimensions — confirm finished size in the quotation" },
      { label: "Logo method", value: "Silkscreen, hot stamp or woven label; Pantone matching on request" },
      { label: "Protection", value: "Soft lining for anti-scratch and anti-tangle protection; anti-tarnish treatment is an option for silver / plated items only, confirmed by sample" },
      { label: "Set option", value: "Add a matching box, card or microfiber cleaning cloth to make a box + pouch set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
    shortDesc: "Necklace display stands for wholesale retail projects. Discuss height, presentation and branding for your assortment.",
    description: "Planning wholesale necklace displays? Share the chain lengths, pendant dimensions, available counter space, preferred presentation and quantity. Confirm the proposed height, base footprint, covering and logo options in your quotation, then review the sample with your jewellery.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Materials to confirm in the quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Fashion"],
    features: [
      { title: "Necklace Fit", desc: "Share chain length and pendant dimensions, then check their presentation on the proposed stand." },
      { title: "Display Space", desc: "Measure the available counter or showcase height and footprint before selecting a stand." },
      { title: "Covering and Base", desc: "Review the proposed covering and base footprint in the quotation and on a sample." },
      { title: "Logo Placement", desc: "Send artwork and your preferred placement; confirm the proposed method before production." }
    ],
    specs: [
      { label: "Necklace Fit", value: "Confirm for the proposed order" },
      { label: "Display Space", value: "Confirm for the proposed order" },
      { label: "Covering and Base", value: "Confirm for the proposed order" },
      { label: "Logo Placement", value: "Confirm for the proposed order" }
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
  },
  {
    slug: "acrylic-earring-display",
    name: "Acrylic Earring Display Stand",
    category: "Retail Display Props",
    shortDesc: "Earring display stands for retail projects. Discuss the layout and material for your assortment.",
    description: "For an earring display quote, list the earring styles, the number of pairs to present and any preferred layout. Check hole or slot placement, spacing, stand dimensions and the chosen material with a sample before approving production.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Materials to confirm in the quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Beauty"],
    features: [
      { title: "Earring Assortment", desc: "List the styles and number of pairs to be displayed, including dimensions of longer pieces." },
      { title: "Hole or Slot Layout", desc: "Review spacing and placement with representative earrings so pairs can be displayed and removed." },
      { title: "Stand and Material", desc: "Confirm the footprint, height and proposed material for the available display space." },
      { title: "Artwork and Quantity", desc: "Provide branding artwork and order quantity; confirm the proposed application method." }
    ],
    specs: [
      { label: "Earring Assortment", value: "Confirm for the proposed order" },
      { label: "Hole or Slot Layout", value: "Confirm for the proposed order" },
      { label: "Stand and Material", value: "Confirm for the proposed order" },
      { label: "Artwork and Quantity", value: "Confirm for the proposed order" }
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
  },
  {
    slug: "kraft-paper-shopping-bag",
    name: "Kraft Paper Shopping Bag",
    category: "Pouches & Bags",
    shortDesc:
      "Kraft shopping bag with twisted handles — custom logo printing.",
    description:
      "A kraft paper shopping bag for retail carry-out, gift wrapping or events. Share the products to be carried, target loaded weight, desired width, height and gusset depth, handle preference, artwork and quantity for a project-specific quote. Confirm the proposed paper, handle attachment, print method and finish against the quotation and sample; test the assembled bag with the intended load before approving bulk production. Ask us to confirm the selected construction before assessing disposal options. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. Colour is reviewed against the approved sample before bulk. Request a free digital dieline preview to review the proposed dimensions, then approve a custom sample (USD 25 plus USD 20 shipping, 3-5 days) to check handle comfort and print appearance in hand before the bulk run.",
    image: "/images/carousel/kraft-bag.png",
    materials: "Kraft paper, twisted paper handles",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Fashion", "Beauty", "Gift"],
    features: [
      {
        title: "Kraft Paper",
        desc: "Confirm the proposed paper grade, finish and appearance against the approved sample.",
      },
      {
        title: "Reinforced Handles",
        desc: "Review the proposed handle attachment and base with the intended loaded contents.",
      },
      {
        title: "Custom Printing",
        desc: "Confirm the print method, artwork and colour requirements in the quotation and sample.",
      },
      {
        title: "Paper Construction",
        desc: "Review the selected paper, handle, inks and finish when assessing disposal options.",
      },
    ],
    specs: [
      { label: "Material options", value: "Kraft paper, art paper or textured paper — choose from the quotation; final material confirmed in approved sample" },
      { label: "Handle options", value: "Rope, ribbon, cotton or paper handles — confirm in quotation" },
      { label: "Size", value: "Made to your product dimensions — confirm finished size in the quotation" },
      { label: "Logo method", value: "Print, foil stamping or embossing; Pantone matching on request" },
      { label: "Set option", value: "Add a matching box, pouch or ribbon to make a retail set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    customizationOptions: [
      "Custom sizes and paper weights",
      "Artwork and print method confirmed per quotation",
      "Handle material options",
    ],
  },
  {
    slug: "stackable-jewelry-tray",
    name: "Stackable Jewelry Tray",
    category: "Retail Display Props",
    shortDesc: "Jewelry display trays for wholesale projects. Confirm the compartment layout, fixture fit and stacking interface.",
    description: "For wholesale jewellery display trays, measure the inside of the showcase or drawer and list the jewellery dimensions and desired layout. Confirm external tray size, usable compartments, covering and any stacking interface on the proposed sample.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Materials to confirm in the quotation and sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Fashion"],
    features: [
      { title: "Fixture Fit", desc: "Measure the showcase or drawer interior and allow space to lift and remove the tray." },
      { title: "Compartment Layout", desc: "Provide jewellery dimensions and a preferred arrangement; check access with the loaded sample." },
      { title: "Contact Surface", desc: "Identify the proposed covering and check contact with the intended jewellery finish." },
      { title: "Stacking Interface", desc: "Review the proposed tray edges and base together; matching footprints alone do not prove a secure stack." }
    ],
    specs: [
      { label: "Fixture Fit", value: "Confirm for the proposed order" },
      { label: "Compartment Layout", value: "Confirm for the proposed order" },
      { label: "Contact Surface", value: "Confirm for the proposed order" },
      { label: "Stacking Interface", value: "Confirm for the proposed order" }
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
  },
  {
    slug: "velvet-jewelry-display-set",
    name: "Velvet Jewelry Display Set",
    category: "Retail Display Props",
    shortDesc: "Coordinated jewelry display components for retail counters. Specify the piece mix and quantity for each component.",
    description: "For a coordinated jewellery display programme, list each component, its quantity and the available counter space. Confirm the proposed piece mix, covering and colours in the quotation. ELAPACK’s minimum is 200 pieces for each component; confirm allocation across variants when requesting a quote.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Materials to confirm in the quotation and sample",
    moq: "200 pcs per component",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Gift"],
    features: [
      { title: "Component List", desc: "List the desired display pieces and quantity of each component for a comparable quote." },
      { title: "Counter Arrangement", desc: "Share the available space and jewellery assortment so the proposed arrangement can be reviewed." },
      { title: "Covering and Colour", desc: "Provide colour references and confirm the proposed covering against the approved sample." },
      { title: "Artwork and Samples", desc: "Identify branding placement and confirm which components are included in the sample." }
    ],
    specs: [
      { label: "Component List", value: "Confirm for the proposed order" },
      { label: "Counter Arrangement", value: "Confirm for the proposed order" },
      { label: "Covering and Colour", value: "Confirm for the proposed order" },
      { label: "Artwork and Samples", value: "Confirm for the proposed order" }
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
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
      "Satin drawstring wig bag; confirm dimensions, fabric contact and logo method on the proposed sample.",
    description:
      "A satin drawstring bag option for wigs and hair extensions. Confirm the packed item dimensions, fabric contact, closure and proposed logo method on a sample before ordering. Product photography is in progress; request a stock sample to see and feel the material before ordering.",
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
      { label: "Fabric options", value: "Velvet, cotton, muslin, satin, microfiber, suede or linen — choose from the quotation; final fabric confirmed in approved sample" },
      { label: "Closure options", value: "Drawstring, flap, envelope or zipper; string types confirmed in quotation" },
      { label: "Size", value: "Made to your product dimensions — confirm finished size in the quotation" },
      { label: "Logo method", value: "Silkscreen, hot stamp or woven label; Pantone matching on request" },
      { label: "Protection", value: "Soft lining for anti-scratch and anti-tangle protection; anti-tarnish treatment is an option for silver / plated items only, confirmed by sample" },
      { label: "Set option", value: "Add a matching box, card or microfiber cleaning cloth to make a box + pouch set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
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
  {
    slug: "custom-microfiber-cleaning-cloth-jewelry",
    name: "Custom Microfiber Cleaning Cloth for Jewelry",
    category: "Pouches & Bags",
    shortDesc:
      "Microfiber cleaning cloth for jewelry, from 200 pieces; confirm size, edge, print and cleaning scope in a sample.",
    description:
      "A microfiber cleaning cloth to add to a jewelry box + pouch set, so the customer can keep the piece looking like new on every opening. Material: 100% polyester or 80% polyester / 20% polyamide microfiber, conventional weight 180–230g. Processes: silkscreen, embossing, digital printing, hot stamping and related print methods, confirmed in the quotation. Scope: jewelry, eyewear, electronic screens and lenses. For jewelry, this cloth is for light cleaning and maintenance; it is not a claim to repair heavy tarnish or corrosion — confirm the intended cleaning scope in the quotation and approved sample. Product photography is pending; request a sample to check the actual cloth, edge and print. Orders start at 200 pieces.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Microfiber: 100% polyester or 80% polyester / 20% polyamide, 180–230g",
    moq: "200 pcs",
    leadTime: "15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Microfiber Material",
        desc: "100% polyester or 80% polyester / 20% polyamide, conventional weight 180–230g.",
      },
      {
        title: "Print & Edge",
        desc: "Silkscreen, embossing, digital printing or hot stamping; confirm edge finish in the quotation.",
      },
      {
        title: "Set Add-On",
        desc: "Add to a box + pouch set, or order on its own from 200 pieces.",
      },
      {
        title: "Scope Note",
        desc: "For light cleaning and maintenance only; confirm heavy-tarnish scope separately, do not assume repair.",
      },
    ],
    specs: [
      { label: "Material", value: "Microfiber: 100% polyester or 80% polyester / 20% polyamide" },
      { label: "Weight", value: "Conventional 180–230g" },
      { label: "Print / Process options", value: "Silkscreen, embossing, digital printing, hot stamping, etc. — confirm in quotation" },
      { label: "Scope", value: "Jewelry, eyewear, electronic screens and lenses" },
      { label: "Set option", value: "Add to a box + pouch set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    customizationOptions: [
      "Choose 100% polyester or 80% polyester / 20% polyamide",
      "Provide size, edge finish and logo artwork",
      "Add to a jewelry box + pouch set",
    ],
  },
  {
    slug: "custom-microfiber-cleaning-cloth-eyewear",
    name: "Custom Microfiber Cleaning Cloth for Eyewear & Screens",
    category: "Pouches & Bags",
    shortDesc:
      "Microfiber cleaning cloth for eyewear, screens and lenses, from 200 pieces; confirm size, edge, print and coated-surface scope in a sample.",
    description:
      "A microfiber cleaning cloth to add to an eyewear pouch + box set, for glasses, screens and lenses. Material: 100% polyester or 80% polyester / 20% polyamide microfiber, conventional weight 180–230g. Processes: silkscreen, embossing, digital printing, hot stamping and related print methods, confirmed in the quotation. If the cloth will be used on a coated lens or screen surface, discuss the required evidence or testing separately — packaging suitability and cleaning performance are separate requirements. Product photography is pending; request a sample to check the actual cloth, edge and print. Orders start at 200 pieces.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Microfiber: 100% polyester or 80% polyester / 20% polyamide, 180–230g",
    moq: "200 pcs",
    leadTime: "15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment receipt; shipping time separate",
    industries: ["Eyewear & Sunglasses", "Beauty", "Gift"],
    features: [
      {
        title: "Microfiber Material",
        desc: "100% polyester or 80% polyester / 20% polyamide, conventional weight 180–230g.",
      },
      {
        title: "Print & Edge",
        desc: "Silkscreen, embossing, digital printing or hot stamping; confirm edge finish in the quotation.",
      },
      {
        title: "Set Add-On",
        desc: "Add to an eyewear pouch + box set, or order on its own from 200 pieces.",
      },
      {
        title: "Coated Surfaces",
        desc: "For coated lenses or screens, discuss evidence or testing separately before approving production.",
      },
    ],
    specs: [
      { label: "Material", value: "Microfiber: 100% polyester or 80% polyester / 20% polyamide" },
      { label: "Weight", value: "Conventional 180–230g" },
      { label: "Print / Process options", value: "Silkscreen, embossing, digital printing, hot stamping, etc. — confirm in quotation" },
      { label: "Scope", value: "Eyewear, electronic screens and lenses, plus jewelry" },
      { label: "Set option", value: "Add to an eyewear pouch + box set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 25 + USD 20 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 20–25 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    customizationOptions: [
      "Choose 100% polyester or 80% polyester / 20% polyamide",
      "Provide size, edge finish and logo artwork",
      "Add to an eyewear pouch + box set",
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
  "custom-microfiber-cleaning-cloth-jewelry": [
    "custom-glasses-cases-pouches-guide",
    "how-to-choose-a-custom-jewelry-pouch",
  ],
  "custom-microfiber-cleaning-cloth-eyewear": [
    "custom-glasses-cases-pouches-guide",
    "how-to-choose-a-custom-jewelry-pouch",
  ],

};

