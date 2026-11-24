import { KEY_FACTS_LINES } from "./keyFacts";

export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  /** Optional hero intro, shown instead of `description` at the top of the
   *  product page so the hero and the Product Description section no longer
   *  repeat the same text. Falls back to `description` when absent. */
  intro?: string;
  description: string;
  image: string;
  /** Optional extra gallery photos after the hero; falls back to [image]. */
  gallery?: string[];
  /** Optional product-specific image for the Product Description section. */
  descriptionImage?: string;
  /** Optional product-specific image for the Customization Options section. */
  customizeImage?: string;
  /** Override the wide-slot frame with a CSS aspect-ratio value, e.g. "1 / 1" or "3 / 2". */
  descriptionImageRatio?: string;
  customizeImageRatio?: string;
  /** Optional third specific image for an additional info section. */
  infoImage?: string;
  infoImageRatio?: string;
  /** Override the main gallery frame (default 4 / 3) when the photos are square. */
  galleryRatio?: string;
  materials: string;
  moq: string;
  leadTime: string;
  industries: string[];
  features: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  /** Optional product-level FAQ set. When present it replaces the generic
   *  category FAQ set in both the page and the FAQPage structured data. */
  faqs?: { q: string; a: string }[];
  customizationOptions: string[];
  /** P0 Key Facts block lines (shared lines + one page-specific line). */
  keyFacts?: string[];
  /** Optional option-group cards (image + option name + use case) rendered
   *  as a card section on the product page. The section is not rendered
   *  when this field is absent or empty. */
  optionGroups?: { title: string; use: string; image: string }[];
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
    name: "Custom Jewelry Boxes — Black",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Black colourway of the custom jewelry box range; structure, insert and logo finish are specified per project and confirmed on a physical sample",
    ],
    category: "Boxes",
    shortDesc:
      "Black jewelry box packaging; confirm exterior, interior, insert and branding in the quotation and sample.",
    description:
      "Plan a black jewelry box around the jewelry type, item dimensions and required presentation. Tell us whether you want a leather-look exterior, a particular lining or a fitted insert; these are specification choices, not confirmed materials for the pictured reference. Review the proposed structure and logo placement in a free digital dieline preview, then confirm the material, finish and fit in the quotation and approved sample. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate.",
    intro:
      "Plan a black jewelry box around your jewelry type, item dimensions and required presentation. Exterior, lining and fitted insert are specification choices: review the proposed structure and logo placement in a free digital dieline preview, then confirm the material, finish and fit in the quotation and approved sample. Orders start at 200 pieces.",
    image: "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-hero.webp",
    gallery: [
      "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-hero.webp",
      "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-detail-01.webp",
      "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-detail-02.webp",
      "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-detail-03.webp",
      "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-detail-04.webp",
    ],
    descriptionImage:
      "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-description.webp",
    customizeImage:
      "/images/products/black-leather-jewelry-box/black-leather-jewelry-box-customize.webp",
    descriptionImageRatio: "3 / 2",
    customizeImageRatio: "1.907 / 1",
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
      { label: "Interior / Insert options", value: "Confirm the insert core, contact surface and cavity layout separately in the quotation; review fit with the actual contents in an approved sample" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Check retention and removal with the actual contents. Agree evidence and tests for any claimed treatment or transit protection before bulk approval" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "How are the exterior, lining and insert specified for a black jewelry box?",
        a: "Share the jewelry type, item dimensions and required presentation. Exterior options include rigid board with paper wrap, leather-look wrap, textured paper or kraft; inserts can be EVA foam, velvet, satin or molded pulp, fitted to your product dimensions. The final construction is confirmed in the quotation and approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
    ],
    customizationOptions: [
      "Request black exterior and interior options",
      "Provide logo artwork and placement reference",
      "Specify jewelry dimensions and insert layout",
    ],
  },
  {
    slug: "custom-white-jewelry-box",
    name: "Custom Jewelry Boxes — White",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "White colourway of the custom jewelry box range; structure, insert and logo finish are specified per project and confirmed on a physical sample",
    ],
    category: "Boxes",
    shortDesc:
      "White jewelry box packaging; confirm shell, insert, closure and logo method against your approved sample.",
    description:
      "For a white jewelry box, share the jewelry dimensions, item count, preferred opening and artwork. Confirm the shell material, insert and closure for your order. Confirm the proposed construction, finish and fit in the quotation and approved sample before bulk. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate.",
    intro:
      "Custom white jewelry boxes built to your specification. Share the jewelry dimensions, item count, preferred opening and artwork; the proposed construction, finish and fit are confirmed in the quotation and approved sample before bulk production.",
    image: "/images/products/custom-white-jewelry-box/custom-white-jewelry-box-hero.webp",
    gallery: [
      "/images/products/custom-white-jewelry-box/custom-white-jewelry-box-hero.webp",
      "/images/products/custom-white-jewelry-box/custom-white-jewelry-box-detail-01.webp",
      "/images/products/custom-white-jewelry-box/custom-white-jewelry-box-detail-02.webp",
      "/images/products/custom-white-jewelry-box/custom-white-jewelry-box-detail-03.webp",
      "/images/products/custom-white-jewelry-box/custom-white-jewelry-box-detail-04.webp",
      "/images/products/custom-white-jewelry-box/custom-white-jewelry-box-detail-05.webp",
    ],
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
      { label: "Interior / Insert options", value: "Confirm the insert core, contact surface and cavity layout separately in the quotation; review fit with the actual contents in an approved sample" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Check retention and removal with the actual contents. Agree evidence and tests for any claimed treatment or transit protection before bulk approval" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "What should I send for a white jewelry box quote?",
        a: "Share the jewelry dimensions, item count, preferred opening — lift-off lid, magnetic flip-top, ribbon tie or drawer — and artwork. Choose the exterior (paper wrap, leather-look wrap, textured paper or kraft), insert and finish from the quotation; board thickness and construction are confirmed in the quotation and approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
    ],
    customizationOptions: [
      "Custom logo printing",
      "Specify insert layout and color",
      "Custom sizing on request",
    ],
  },
  {
    slug: "custom-ring-boxes",
    name: "Custom Ring Boxes & Engagement Ring Boxes",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Ring boxes and engagement ring boxes, made to your size, insert and logo specification and confirmed on a physical sample",
    ],
    category: "Boxes",
    shortDesc:
      "Custom ring boxes for jewelry brands, from 200 pieces. Plan the ring fit, insert, exterior and logo together before approving a sample.",
    description:
      "Custom ring boxes for jewelry brands ordering from 200 pieces. For a comparable quote, send the ring's band width, setting height, the number of rings per box, preferred appearance, logo artwork, quantity and delivery destination. Review the proposed box and insert dimensions, slot layout, closure and finish together; check retention and removal with your actual ring in an approved sample. A free visual preview of the proposed box structure is available. Custom samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate. Confirm how sizes, colours and artwork are allocated in the quotation.",
    image: "/images/products/custom-ring-boxes/custom-ring-boxes-hero.webp",
    gallery: [
      "/images/products/custom-ring-boxes/custom-ring-boxes-hero.webp",
      "/images/products/custom-ring-boxes/custom-ring-boxes-detail-01.webp",
      "/images/products/custom-ring-boxes/custom-ring-boxes-detail-02.webp",
      "/images/products/custom-ring-boxes/custom-ring-boxes-detail-03.webp",
      "/images/products/custom-ring-boxes/custom-ring-boxes-detail-04.webp",
      "/images/products/custom-ring-boxes/custom-ring-boxes-detail-05.webp",
    ],
    descriptionImage: "/images/products/custom-ring-boxes/custom-ring-boxes-description.webp",
    customizeImage: "/images/products/custom-ring-boxes/custom-ring-boxes-customize.webp",
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
      { label: "Interior / Insert options", value: "Confirm the insert core, contact surface and cavity layout separately in the quotation; review fit with the actual contents in an approved sample" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Check retention and removal with the actual contents. Agree evidence and tests for any claimed treatment or transit protection before bulk approval" },
      { label: "Ring brief", value: "Band width, setting height and number of rings per box" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "What should I send for a custom ring box quote?",
        a: "Send the ring's band width and setting height, rings per box, preferred appearance, logo artwork, quantity and delivery destination. We will confirm the proposed box and insert specification in the quotation.",
      },
      {
        q: "How do I check the ring insert before bulk production?",
        a: "Review the proposed slot layout and use your actual ring to check retention, appearance and removal in an approved physical sample. A visual effect preview does not replace this fit check.",
      },
      {
        q: "What is the minimum order?",
        a: "The minimum is 200 pieces. Confirm how sizes, colours and artwork are allocated in the quotation; the minimum does not imply that every variant can be split freely.",
      },
      {
        q: "Are samples and visual previews available?",
        a: "A visual preview of the proposed box structure is free. Stock samples are free with USD 25 shipping and typically take 4–7 days for delivery. Custom samples cost USD 30 plus USD 25 shipping and take 3–5 days to make; delivery time is separate.",
      },
      {
        q: "When does production begin?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping time and the final schedule are confirmed for the order.",
      },
      {
        q: "Where can I buy custom ring boxes?",
        a: "Directly from ELAPACK — every ring box is made to order, not stocked. Send the ring's band width and setting height, the number of rings per box, your quantity and logo artwork, and the quotation will confirm the proposed box and insert specification. A custom sample (USD 30 plus USD 25 shipping, made in 3–5 days) is approved before production begins.",
      },
    
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
    name: "Custom Ribbon-Tie Gift Boxes",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Ribbon-tie closure gift boxes; board, wrap and ribbon colour are specified per project and confirmed on a sample",
    ],
    category: "Boxes",
    shortDesc:
      "Rigid luxury gift box with satin ribbon tie closure — premium presentation for corporate gifting. MOQ 200 pcs, typical production 15–20 days.",
    description:
      "A rigid luxury gift box with a satin ribbon tie closure, built for corporate gifting, weddings and high-end retail. Greyboard construction wrapped in premium matte art paper gives the box its substantial feel; the double-face satin ribbon makes the opening itself part of the ceremony, and foil stamping, embossing or spot UV carry the brand mark. Sizes are custom to your product, with Pantone-matched wrapping so box, ribbon and any enclosure card read as one palette - color held against an approved sample before bulk. Interior options secure the product for gifting and courier conditions alike. A free digital dieline preview is available to review the box structure. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. A custom sample (USD 30 plus USD 25 shipping, 3-5 days) settles ribbon hand, wrap shade and finish before the bulk order.",
    intro:
      "A rigid luxury gift box with a satin ribbon tie closure, built for corporate gifting, weddings and high-end retail. Greyboard wrapped in premium matte art paper gives the box its substantial feel, and the double-face satin ribbon makes the opening itself part of the ceremony.",
    image: "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-hero.webp",
    gallery: [
      "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-hero.webp",
      "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-detail-01.webp",
      "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-detail-02.webp",
      "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-detail-03.webp",
      "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-detail-04.webp",
    ],
    galleryRatio: "1 / 1",
    descriptionImage:
      "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-description.webp",
    customizeImage:
      "/images/products/luxury-gift-box-ribbon/luxury-gift-box-ribbon-customize.webp",
    descriptionImageRatio: "1 / 1",
    customizeImageRatio: "1 / 1",
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
      { label: "Interior / Insert options", value: "Confirm the insert core, contact surface and cavity layout separately in the quotation; review fit with the actual contents in an approved sample" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Check retention and removal with the actual contents. Agree evidence and tests for any claimed treatment or transit protection before bulk approval" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "What should I send for a ribbon-tie gift box quote?",
        a: "Send the product dimensions and item count, box size, ribbon colour, finish — foil stamping, embossing or spot UV — artwork and quantity. Board construction, wrap, insert and closure are confirmed in the quotation and approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Structure: rigid magnetic flap closure; inserts in EVA, sponge, pulp or flocked board, sized to your product.",
    ],
    category: "Boxes",
    shortDesc:
      "Sleek flip-top gift box with hidden magnetic closure and custom interior inserts.",
    description:
      "A sleek flip-top gift box with a hidden magnetic closure, built for jewelry, eyewear, cosmetics and small luxury programs. The concealed magnet pair keeps the lid shut in transit yet opens one-handed in a retail setting, and because the mechanism sits inside the wrap, the exterior stays clean for full-surface print or foil branding. Construction is 1200-1500gsm greyboard wrapped in your choice of art paper, with interior inserts cut to the product's exact footprint so contents ride immobile - EVA, velvet or molded pulp by product weight and fragility. Specify Pantone references for wrap and print; color is held against an approved sample before bulk. A free digital dieline preview is available to review the box structure. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. Approve a custom sample first (USD 30 plus USD 25 shipping, 3-5 days) to check closure feel and color before committing to bulk.",
    image: "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-hero.webp",
    gallery: [
      "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-hero.webp",
      "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-detail-01.webp",
      "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-detail-02.webp",
      "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-detail-03.webp",
      "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-detail-04.webp",
    ],
    descriptionImage:
      "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-description.webp",
    customizeImage:
      "/images/products/magnetic-closure-gift-box/magnetic-closure-gift-box-customize.webp",
    customizeImageRatio: "1 / 1",
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
      { label: "Protection options", value: "Fitted insert for fixation and shock protection" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Sized to your tray dimensions and pack quantity; structure, tray fit and artwork are confirmed in the quotation and approved sample.",
    ],
    category: "Boxes",
    shortDesc:
      "Custom eyelash packaging boxes with your logo — three standard formats or fully custom sizes, from 200 pieces.",
    description:
      "Custom eyelash packaging boxes for false eyelash brands, salons and wholesalers — from single-pair retail boxes to empty wholesale packaging for full lash lines. Built around your lash trays — strip lashes, volume trays or extension programs — with fitted inserts that hold each tray in place for storage, transit and shelf, and a printed wrap that carries your brand at retail and in unboxing. Three standard formats cover the common tray sizes: 14×10×6, 15×15×5 and 20×18×8 cm, and any dimension can be made to spec. MOQ from 200 pieces with your logo printed, foil-stamped or embossed. Request a stock sample to judge the board and print quality in hand.",
    image: "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-hero.jpg",
    gallery: [
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-hero.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-01.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-02.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-03.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-detail-04.jpg",
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-scene-01.jpg",
    ],
    descriptionImage:
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-description.webp",
    customizeImage:
      "/images/products/custom-eyelash-packaging-boxes/custom-eyelash-packaging-boxes-customize.webp",
    descriptionImageRatio: "1 / 1",
    customizeImageRatio: "1 / 1",
    materials: "Rigid paperboard with custom printed wrap, fitted lash tray inserts",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Beauty", "Gift"],
    features: [
      {
        title: "Three Standard Formats",
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
      { label: "Dimensions (L × W × H)", value: "14×10×6 / 15×15×5 / 20×18×8 cm, or custom" },
      { label: "Protection options", value: "Fitted insert for fixation and shock protection" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    customizationOptions: [
      "Custom sizes beyond the three standard formats",
      "Full-color print, foil or embossed logo",
      "Insert layout tailored to your lash trays",
      "Boxes for single pairs up to multi-tray wholesale packs",
    ],
  },
  {
    slug: "custom-perfume-boxes",
    name: "Custom Perfume Boxes",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Bottle fit, structure, insert and finish are specified for your bottle and confirmed on a loaded physical sample",
    ],
    category: "Boxes",
    shortDesc:
      "Custom perfume box projects from 200 pieces; confirm the bottle fit, structure, insert and finish in a sample.",
    description:
      "Start a perfume box brief with bottle dimensions, bottle weight, item count, preferred opening and artwork. The gallery shows style references, not a single standard configuration. Ask for the proposed box structure, insert material and branding method to be itemized in the quotation. Check the fit and opening with your bottle in an approved sample; presentation alone does not establish shipping protection. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate.",
    intro:
      "Start a perfume box brief with bottle dimensions, bottle weight, item count, preferred opening and artwork. The gallery shows style references, not a single standard configuration — the proposed box structure, insert material and branding method are itemized in the quotation and checked with your bottle in an approved sample. Orders start at 200 pieces.",
    image:
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-hero.webp",
    gallery: [
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-hero.webp",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-01.webp",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-02.webp",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-03.webp",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-04.webp",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-detail-05.webp",
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-scene-02.webp",
    ],
    galleryRatio: "1 / 1",
    descriptionImage:
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-description.webp",
    customizeImage:
      "/images/products/custom-perfume-boxes/custom-perfume-boxes-customize.webp",
    descriptionImageRatio: "1 / 1",
    customizeImageRatio: "1 / 1",
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
      {
        title: "Custom Cologne Bottle Packaging",
        desc: "Boxes sized from your bottle — lift-off lid, drawer or magnetic flip-top — or bottle gift bags in satin and other textile fabrics. Order the box, the bag, or the coordinated set.",
      },
      {
        title: "Custom Reed Diffuser Packaging",
        desc: "A rigid box with a fitted insert for the glass vessel and a compartment for the reeds, or kraft and textile bags for diffuser sets. Bag, box, or set — vessel fit is confirmed on a sample.",
      },
    ],
    specs: [
      { label: "Exterior options", value: "Rigid board with paper wrap, leather-look wrap, textured paper or kraft — choose from the quotation; final material confirmed in approved sample" },
      { label: "Board / Core", value: "Rigid board; thickness and construction confirmed in quotation and approved sample" },
      { label: "Interior / Insert options", value: "Confirm the insert core, contact surface and cavity layout separately in the quotation; review fit with the actual contents in an approved sample" },
      { label: "Closure options", value: "Lift-off lid, magnetic flip-top, ribbon tie or drawer — confirm with the proposed structure" },
      { label: "Finish options", value: "Foil stamping, embossing, debossing, spot UV, matte / gloss lamination" },
      { label: "Logo method", value: "Hot foil, emboss / deboss, screen or digital print; Pantone-matched colours on request" },
      { label: "Dimensions", value: "Made to your product dimensions — confirm internal clearance and finished outside size separately in the quotation" },
      { label: "Protection options", value: "Check retention and removal with the actual contents. Agree evidence and tests for any claimed treatment or transit protection before bulk approval" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "What should I send for a custom perfume box quote?",
        a: "Send bottle dimensions, bottle weight, item count, preferred opening and artwork. Ask for the proposed box structure, insert material and branding method to be itemized in the quotation, and check the fit and opening with your bottle in an approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "Do you also make cologne packaging?",
        a: "Yes. Cologne bottles are packed in the same rigid structures as perfume — lift-off lid, drawer or magnetic flip-top — built around your bottle dimensions, or in textile gift bags sized to the bottle. Order the box, the bag, or the coordinated set; terms are the same either way, a 200-piece minimum per component and 15–20 day production after sample approval and payment receipt.",
      },
      {
        q: "Can you package reed diffusers?",
        a: "Yes. A reed diffuser set can ship in a rigid box with a fitted insert for the glass vessel and a compartment for the reeds, in kraft or textile bags, or as part of a coordinated set. The vessel-fit checks are the same as for candle boxes; share the packed dimensions and vessel weight in your enquiry.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
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
    name: "Custom Perfume Sample Cards",
    keyFacts: [
      "Minimum order: 500 pieces",
      "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
      "Production: typically 15–20 days after sample approval and payment; confirmed by order",
      "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
      "Payment: T/T or PayPal",
      "Card and box formats are specified to your sample vials and confirmed on a physical sample",
    ],
    category: "Sampling Cards",
    shortDesc:
      "Printed perfume sampling cards; share vial or sachet dimensions, attachment method and artwork for a quote.",
    description:
      "This page covers printed perfume sample cards, not rigid perfume gift boxes. Send the vial or sachet dimensions, number of samples per card, proposed attachment method and artwork. Card stock, print method, attachment and finished size need confirmation in the quotation and approved sample. Orders start at 500 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate. Product photography is pending.",
    intro:
      "Printed perfume sample cards — not rigid perfume gift boxes. Send the vial or sachet dimensions, the number of samples per card, your proposed attachment method and artwork; card stock, print method, attachment and finished size are confirmed in the quotation and approved sample. Orders start at 500 pieces.",
    image: "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-hero.webp",
    gallery: [
      "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-hero.webp",
      "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-detail-01.webp",
      "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-detail-02.webp",
      "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-detail-03.webp",
      "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-detail-04.webp",
      "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-detail-05.webp",
    ],
    galleryRatio: "1 / 1",
    descriptionImage: "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-description.webp",
    descriptionImageRatio: "1 / 1",
    customizeImage: "/images/products/custom-perfume-sample-card-boxes/custom-perfume-sample-card-boxes-customize.webp",
    customizeImageRatio: "1 / 1",
    materials: "Card stock and sample attachment to confirm in quotation and sample",
    moq: "500 pcs",
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
      { label: "MOQ", value: "500 pcs" },
      { label: "Production", value: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt; shipping separate" },
    ],
    faqs: [
      {
        q: "What should I send for a perfume sample card quote?",
        a: "Send the vial or sachet dimensions, the number of samples per card (single to multi-scent layouts), your proposed attachment method and artwork. Card stock, print method, attachment and finished size are confirmed in the quotation and approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Sized to your nail sets and trays; the box holds trays or tips securely for direct and retail sales.",
    ],
    category: "Boxes",
    shortDesc:
      "Custom press-on nail packaging boxes — sized to your nail sets and trays, with your logo from the first run.",
    description:
      "Custom press-on nail packaging for nail brands selling direct and at retail. Press-on sets live or die on presentation — the box holds the nail trays or tips securely, shows the shade and size system, and carries your brand at first sight. Boxes are made to your set format: single-set sleeves, multi-size kits or wholesale display packs, with fitted inserts that keep every tray in place. Your logo is printed, foil-stamped or embossed on the wrap. MOQ from 200 pieces — send your tray dimensions and set count for a quote. Request a stock sample to judge the board quality.",
    intro:
      "Custom press-on nail boxes for nail brands selling direct and at retail. The box holds nail trays or tips securely, shows the shade and size system, and carries your brand at first sight — single-set sleeves and multi-size kits made to your set format.",
    image: "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-hero.webp",
    gallery: [
      "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-hero.webp",
      "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-detail-01.webp",
      "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-detail-02.webp",
      "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-detail-03.webp",
      "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-detail-04.webp",
      "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-detail-05.webp",
    ],
    descriptionImage: "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-description.webp",
    customizeImage: "/images/products/custom-press-on-nail-boxes/custom-press-on-nail-boxes-customize.webp",
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
    faqs: [
      {
        q: "What should I send for a press-on nail box quote?",
        a: "Send your nail set format and tray dimensions, the number of sets per box, preferred format — single-set sleeve or multi-size kit — insert layout needs, finish and artwork. Dimensions and the fitted tray insert are confirmed in the quotation and sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Built around your packed bundle dimensions and item count; identification labels for length and shade are part of the specification.",
    ],
    category: "Boxes",
    shortDesc: "Custom hair extension boxes for hair brands and salons, from 200 pieces. Share packed bundle dimensions, item count, identification labels and artwork to review the proposed box and insert.",
    description: "Start with the hair products as packed, including ties, cards and accessories. State item count, orientation and packed dimensions. Request a sleeve, drawer or magnetic opening for feasibility review. Confirm usable internal space, insert contact, closure and removal on a loaded sample. Provide length and shade identification separately from logo artwork, with quantities for each version confirmed in the written quotation.",
    intro: "Custom hair extension boxes for hair brands and salons, from 200 pieces. Share packed bundle dimensions, item count, identification labels and artwork to review the proposed box and insert.",
    image:
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-hero.webp",
    gallery: [
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-hero.webp",
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-detail-01.webp",
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-detail-03.webp",
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-detail-02.webp",
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-detail-04.webp",
    ],
    descriptionImage:
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-description.webp",
    customizeImage:
      "/images/products/custom-hair-extension-boxes/custom-hair-extension-boxes-customize.webp",
    descriptionImageRatio: "1 / 1",
    customizeImageRatio: "1 / 1",
    materials: "Board, wrap and insert to confirm in the quotation and approved sample",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Hair & Wig", "Beauty", "Gift"],
    features: [
      { title: "Packed bundle arrangement", desc: "Identify item count, accessories, orientation and measured packed dimensions." },
      { title: "Insert contact and removal", desc: "Review support, contact and removal on a loaded sample." },
      { title: "Length and shade identification", desc: "Supply the identification layout and label visibility requirements." },
      { title: "Artwork and quantities", desc: "Provide logo files and quantities by version for the written quotation." },
    ],
    specs: [
      { label: "Packed contents", value: "Product type, count and accessories to confirm" },
      { label: "Dimensions", value: "Packed dimensions and proposed usable internal space to confirm" },
      { label: "Opening and insert", value: "Requested format and retention to confirm on sample" },
      { label: "Materials and branding", value: "Board, wrap, insert and artwork to confirm" },
      { label: "MOQ", value: "200 pieces; version allocation confirmed in writing" },
    ],
    faqs: [
      {
        q: "What should I send for a hair extension box quote?",
        a: "Send your bundle format and dimensions, the number of bundles per box, preferred structure — sleeve, drawer or magnetic flip-top — insert needs, finish (matte, glossy, foil stamping or spot UV), artwork and quantity. Dimensions and the fitted insert are confirmed in the quotation and sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Made to your watch case dimensions, with the insert, cushion and logo finish confirmed on a physical sample",
    ],
    category: "Boxes",
    shortDesc:
      "Custom watch boxes with fitted watch pillow inserts — single and multi-watch formats for retail and gifting.",
    description:
      "Custom watch boxes for watch brands, strap makers and gifting programs. Discuss a rigid box, wrap and watch pillow for single-watch or multi-watch presentation. Share the watch case dimensions, closed-strap size, accessories and number of watches per box so the proposed layout can be checked on a loaded sample. Confirm the wrap, decoration and any transit checks for the complete shipping pack before bulk production. MOQ from 200 pieces. Request a stock sample to judge the board and finish.",
    intro:
      "Custom watch boxes for watch brands, strap makers and gifting programs. Rigid two-piece, drawer or magnetic flip-top structures with fitted watch pillows — share the watch case dimensions, closed-strap size, accessories and number of watches per box so the layout can be checked on a loaded sample.",
    image: "/images/products/custom-watch-boxes/custom-watch-boxes-hero.webp",
    gallery: [
      "/images/products/custom-watch-boxes/custom-watch-boxes-hero.webp",
      "/images/products/custom-watch-boxes/custom-watch-boxes-detail-01.webp",
      "/images/products/custom-watch-boxes/custom-watch-boxes-detail-02.webp",
      "/images/products/custom-watch-boxes/custom-watch-boxes-detail-03.webp",
      "/images/products/custom-watch-boxes/custom-watch-boxes-detail-04.webp",
      "/images/products/custom-watch-boxes/custom-watch-boxes-detail-05.webp",
    ],
    descriptionImage:
      "/images/products/custom-watch-boxes/custom-watch-boxes-structure.webp",
    customizeImage:
      "/images/products/custom-watch-boxes/custom-watch-boxes-quality.webp",
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
    faqs: [
      {
        q: "What should I send for a watch box quote?",
        a: "Share the watch case dimensions, closed-strap size, any accessories and the number of watches per box. Choose the structure — two-piece lift-off, drawer or magnetic flip-top — wrap and finish; the proposed layout is checked on a loaded sample before production.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept T/T (bank transfer) and PayPal.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Styles: drawstring, flap, envelope and zipper; made to your colour, size and logo. Can be colour-matched with ELAPACK rigid boxes for a box-plus-pouch set.",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Soft velvet pouches in drawstring, flap, envelope and zipper styles — your colour, size and logo.",
    description:
      "Custom velvet pouches for programs that want a plush, gift-ready feel at first touch. The dense velvet pile cushions jewelry, eyewear and small luxury goods, and the same pouch carries brands through retail, gifting and unboxing moments. Choose your closure — drawstring, flap, envelope or zipper — your Pantone-matched velvet colour, and your logo silkscreened, hot-stamped or woven into a label. Custom sizing is reviewed against the product and construction, from small gift pouches to larger presentation bags. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. Velvet colour is reviewed against the approved sample before bulk. A custom sample (USD 30 plus USD 25 shipping, 3–5 days) settles pile direction, shade and logo hand before the production order — the cheapest way to see the exact fabric your program will carry.",
    intro:
      "Custom velvet pouches for jewelry, eyewear and small gifts. Choose a drawstring, flap, envelope or zipper closure, match the velvet to your Pantone colour, and add your logo by silkscreen, hot stamp or woven label. MOQ 200 pcs. Custom samples ship in 3–5 days.",
    image:
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-hero.webp",
    gallery: [
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-hero.webp",
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-detail-01.webp",
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-detail-02.webp",
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-detail-03.webp",
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-detail-04.webp",
    ],
    galleryRatio: "1 / 1",
    descriptionImage:
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-description.webp",
    customizeImage:
      "/images/products/custom-velvet-pouches/custom-velvet-pouches-customize.webp",
    descriptionImageRatio: "1 / 1",
    customizeImageRatio: "1 / 1",
    materials: "Velvet, cotton cord drawstring",
    moq: "200 pcs",
    leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Eyewear & Sunglasses", "Gift"],
    features: [
      {
        title: "Plush Velvet Protection",
        desc: "Dense velvet pile cushions jewelry, eyewear and small luxury goods against scratches.",
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
      { label: "MOQ", value: "200 pcs per product" },
      { label: "Closures", value: "Drawstring, flap, envelope, zipper" },
      { label: "Logo", value: "Silkscreen, hot stamp, woven label" },
      { label: "Artwork files", value: "AI, PDF or PNG, with Pantone colour references" },
      { label: "Colour", value: "Pantone matching on request" },
      { label: "Size", value: "Standard sizes 8 × 10 cm, 10 × 12 cm and 12 × 15 cm. Custom sizes are made to your product dimensions" },
      { label: "Fabric weight", value: "Standard velvet runs 200–250 gsm — the weight most pouch programs use. For a thicker, more substantially cushioned hand, a heavier 280–300 gsm velvet is available. Confirm the weight in the quotation and on the approved sample" },
      { label: "Samples", value: "Stock sample free + USD 25 shipping (4–7 days). Custom sample USD 30 + USD 25 shipping (3–5 days)" },
      { label: "Production", value: "15–20 days (200–20,000 pcs); 30–35 days (20,000–50,000 pcs), after sample approval and payment" },
      { label: "Protection", value: "Check the loaded fit, seams, closure and material contact on a sample. Request material-specific evidence for any claimed protective treatment" },
      { label: "Set option", value: "Add a matching box, card or microfiber cleaning cloth to make a box + pouch set, MOQ 200 per component" },
    ],
    faqs: [
      {
        q: "Which fabric, closure and logo options can I choose for velvet pouches?",
        a: "Velvet fabric with drawstring, flap, envelope or zipper closure. Logo options are silkscreen, hot stamp or a woven label, with Pantone matching on request. Confirm the final fabric, pile direction and shade in the quotation and approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "Will a velvet pouch protect jewellery from scratches?",
        a: "The velvet surface is soft and non-abrasive, so it protects against contact scratches, dust and rubbing in storage and transit. It is a surface-protection fabric, not a rigid one — for impact protection the pouch is paired with a box or a fitted insert.",
      },
      {
        q: "Can I put more than one piece of jewellery in one pouch?",
        a: "You can, but pieces stored together can rub and chains can tangle. For multi-piece storage, ask for internal dividers or a larger format in the enquiry, or order one pouch per piece — most jewellery brands do the latter so each item is presented and stored separately. The arrangement is checked on the sample with your actual pieces.",
      },
      {
        q: "What are the standard sizes?",
        a: "Standard sizes are 8 × 10 cm, 10 × 12 cm and 12 × 15 cm. Custom sizes are made to your product dimensions, and MOQ stays 200.",
      },
      {
        q: "What artwork file do you need?",
        a: "AI, PDF or PNG. Send your logo file with your Pantone colour references in the enquiry, so the logo method — silkscreen, hot stamp or woven label — is quoted against the actual artwork.",
      },
      {
        q: "How do you control colour difference?",
        a: "Colour is reviewed against the approved sample before bulk. The standard acceptance for bulk production is a colour difference of ΔE ≤ 2.0 against the confirmed sample, grey scale grade 4.",
      },
      {
        q: "What affects the price?",
        a: "Size, velvet, closure, logo method and quantity.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Cotton pouches and bags; fabric weight, size and logo method are specified per project and checked on a sample",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Natural cotton pouches and bags — printable, gently protective, made to your size and logo.",
    description:
      "Custom cotton pouches and bags for brands that want a natural, honest carrier. Unbleached cotton has a soft hand feel that suits artisan, beauty, jewelry and favor programs alike, and the fabric takes water-based ink prints beautifully. Choose your style — drawstring, flap, envelope or zipper — in sizes reviewed against your product, from small jewelry and cosmetics pouches to larger gift bags, with your logo printed or woven in. Made to order, with materials, dimensions and finishes confirmed in your quote.",
    intro:
      "Custom cotton pouches and bags in unbleached cotton with a soft, natural hand feel. Choose drawstring, flap, envelope or zipper styles in sizes reviewed against your product — from small jewelry and cosmetics pouches to larger gift bags — with your logo printed in water-based inks.",
    image: "/images/products/custom-cotton-pouches/custom-cotton-pouches-hero.webp",
    gallery: [
      "/images/products/custom-cotton-pouches/custom-cotton-pouches-hero.webp",
      "/images/products/custom-cotton-pouches/custom-cotton-pouches-detail-01.webp",
      "/images/products/custom-cotton-pouches/custom-cotton-pouches-detail-02.webp",
      "/images/products/custom-cotton-pouches/custom-cotton-pouches-detail-03.webp",
      "/images/products/custom-cotton-pouches/custom-cotton-pouches-detail-04.webp",
      "/images/products/custom-cotton-pouches/custom-cotton-pouches-detail-05.webp",
    ],
    galleryRatio: "1 / 1",
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
      { label: "Fabric options", value: "Cotton: confirm fibre composition, fabric construction, colour and finish in the quotation and approved sample" },
      { label: "Closure options", value: "Drawstring, flap, envelope or zipper; string types confirmed in quotation" },
      { label: "Size", value: "Made to your product dimensions — confirm finished size in the quotation" },
      { label: "Logo method", value: "Silkscreen, hot stamp or woven label; Pantone matching on request" },
      { label: "Protection", value: "Check the loaded fit, seams, closure and material contact on a sample. Request material-specific evidence for any claimed protective treatment" },
      { label: "Set option", value: "Add a matching box, card or microfiber cleaning cloth to make a box + pouch set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "What should I send for a cotton pouch quote?",
        a: "Send your product dimensions, preferred style — drawstring, flap, envelope or zipper — fabric choice, logo artwork and quantity. The finished size, string type and logo method (silkscreen, hot stamp or woven label) are confirmed in the quotation.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "Are cotton pouches suitable for printed logos?",
        a: "Yes. Cotton's smooth surface prints crisply, and embroidery is also available for a textured mark. Send a vector artwork file (AI, EPS or PDF) with the logo size and position you want; the print is approved on the physical sample before production.",
      },
      {
        q: "Drawstring or zip — which closure should I choose?",
        a: "Drawstring is fastest to open and close, forgiving on size, and the standard for storage and gift pouches. A zip gives a flatter, fully enclosed pack, better for travel formats and items that must stay grouped. Choose by how the pouch will be used daily: frequent opening favours drawstring, tidy flat storage favours zip. Both are sampled before production.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Envelope-style cotton pouches with a flap closure; fabric, size and logo method are confirmed on a sample",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Cotton envelope pouches with flap-snap, flat-pocket and zip-envelope styles — a workhorse carrier for jewelry, wigs and beauty.",
    description:
      "The cotton envelope pouch is one of our most-run pouch programs: a structured cotton carrier with an envelope flap, made in many styles and custom sizes for jewelry, wigs and hair, and beauty lines. Three style families cover the uses — the flap-and-snap envelope that closes with one hand and gifts beautifully, the flat open pocket for inserts and slip cases, and the zip envelope that secures contents for travel and retail. Natural unbleached cotton takes water-based ink prints and woven labels well, and every size is made to your product. MOQ from 200 pieces; request a stock sample to feel the weave.",
    image:
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-detail-06.webp",
    gallery: [
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-detail-06.webp",
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-detail-01.webp",
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-hero.webp",
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-detail-03.webp",
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-detail-04.webp",
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-detail-05.webp",
    ],
    galleryRatio: "1 / 1",
    descriptionImage:
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-description.webp",
    customizeImage:
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-customize.webp",
    infoImage:
      "/images/products/custom-cotton-envelope-pouches/custom-cotton-envelope-pouches-info.webp",
    descriptionImageRatio: "1 / 1",
    customizeImageRatio: "1 / 1",
    infoImageRatio: "1 / 1",
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
    faqs: [
      {
        q: "Which cotton envelope pouch styles are available?",
        a: "Three style families: the envelope flap with snap closure, the flat open pocket for inserts and slip cases, and the zip envelope for travel and storage. All are made to your size in natural, bleached or dyed cotton.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
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
    name: "Velvet Necklace Display Stands",
    keyFacts: [
      "Minimum order: confirmed per project in the quotation — displays are quoted to the specified set, sizes and materials",
      "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
      "Production: typically 15–20 days after sample approval and payment; confirmed by order",
      "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
      "Payment: T/T or PayPal",
      "Stands are specified to your assortment — height, presentation and branding are confirmed in the quotation",
    ],
    category: "Retail Display Props",
    shortDesc: "Necklace display stands for wholesale retail projects. Discuss height, presentation and branding for your assortment.",
    description: "Planning wholesale necklace displays? Share the chain lengths, pendant dimensions, available counter space, preferred presentation and quantity. Confirm the proposed height, base footprint, covering and logo options in your quotation, then review the sample with your jewellery.",
    intro:
      "Wholesale necklace display stands planned around your jewellery. Share the chain lengths, pendant dimensions, available counter space, preferred presentation and quantity; the proposed height, base footprint, covering and logo options are confirmed in the quotation and reviewed on a sample with your jewellery.",
    image: "/images/products/velvet-necklace-display/velvet-necklace-display-hero.webp",
    gallery: [
      "/images/products/velvet-necklace-display/velvet-necklace-display-hero.webp",
      "/images/products/velvet-necklace-display/velvet-necklace-display-detail-01.webp",
      "/images/products/velvet-necklace-display/velvet-necklace-display-detail-02.webp",
      "/images/products/velvet-necklace-display/velvet-necklace-display-detail-03.webp",
      "/images/products/velvet-necklace-display/velvet-necklace-display-detail-04.webp",
      "/images/products/velvet-necklace-display/velvet-necklace-display-detail-05.webp",
      "/images/products/velvet-necklace-display/velvet-necklace-display-detail-06.webp",
    ],
    galleryRatio: "1 / 1",
    descriptionImage: "/images/products/velvet-necklace-display/velvet-necklace-display-description.webp",
    descriptionImageRatio: "1 / 1",
    customizeImage: "/images/products/velvet-necklace-display/velvet-necklace-display-customize.webp",
    customizeImageRatio: "1 / 1",
    materials: "Materials to confirm in the quotation and sample",
    moq: "Per project",
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
    faqs: [
      {
        q: "What should I confirm before approving a necklace display stand?",
        a: "Confirm the usable presentation area and fit with chain lengths and pendant dimensions. Agree covering, base stability and any logo with representative jewellery in place.",
      },
      {
        q: "How are materials and dimensions confirmed?",
        a: "Share the display task, space and preferences. Confirm construction, dimensions and contact surface in the quotation and sample.",
      },
      {
        q: "Can I review the proposed design?",
        a: "Ask which design preview is available for your project and confirm its scope. Review the physical sample before approving production.",
      },
      {
        q: "Can I request a sample?",
        a: "Stock samples are free when available, with USD 25 shipping and typical delivery of 4–7 days. Custom samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm availability and sample scope for your project.",
      },
      {
        q: "What is the production lead time?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Confirm the order schedule; shipping time is separate.",
      },
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
  },
  {
    slug: "acrylic-earring-display",
    name: "Acrylic Earring Display Stands for Jewelry Retail",
    keyFacts: [
      "Minimum order: confirmed per project in the quotation — displays are quoted to the specified set, sizes and materials",
      "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
      "Production: typically 15–20 days after sample approval and payment; confirmed by order",
      "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
      "Payment: T/T or PayPal",
      "Layout and material are specified to your assortment and confirmed in the quotation",
    ],
    category: "Retail Display Props",
    shortDesc: "Earring display stands for retail projects. Discuss the layout and material for your assortment.",
    description: "For an earring display quote, list the earring styles, the number of pairs to present and any preferred layout. Check hole or slot placement, spacing, stand dimensions and the chosen material with a sample before approving production.",
    intro:
      "Custom earring displays built around your earring styles and pair count. Share the styles, number of pairs and preferred layout; hole or slot placement, spacing, stand dimensions and material are confirmed with a sample before production.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Materials to confirm in the quotation and sample",
    moq: "Per project",
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
    faqs: [
      {
        q: "How should I specify an earring display?",
        a: "List earring styles, number of pairs, desired layout and available display space. Review the proposed hole or slot positions and material with representative earrings.",
      },
      {
        q: "How are materials and dimensions confirmed?",
        a: "Share the display task, space and preferences. Confirm construction, dimensions and contact surface in the quotation and sample.",
      },
      {
        q: "Can I review the proposed design?",
        a: "Ask which design preview is available for your project and confirm its scope. Review the physical sample before approving production.",
      },
      {
        q: "Can I request a sample?",
        a: "Stock samples are free when available, with USD 25 shipping and typical delivery of 4–7 days. Custom samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm availability and sample scope for your project.",
      },
      {
        q: "What is the production lead time?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Confirm the order schedule; shipping time is separate.",
      },
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
  },
  {
    slug: "kraft-paper-shopping-bag",
    name: "Custom Kraft Paper Shopping Bags",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Bag size, paper weight, print and handle type are specified per project and confirmed on a sample",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Kraft shopping bag with twisted handles — custom logo printing.",
    description:
      "A kraft paper shopping bag for retail carry-out, gift wrapping or events. Share the products to be carried, target loaded weight, desired width, height and gusset depth, handle preference, artwork and quantity for a project-specific quote. Confirm the proposed paper, handle attachment, print method and finish against the quotation and sample; test the assembled bag with the intended load before approving bulk production. Ask us to confirm the selected construction before assessing disposal options. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is quoted separately. Colour is reviewed against the approved sample before bulk. Request a free digital dieline preview to review the proposed dimensions, then approve a custom sample (USD 30 plus USD 25 shipping, 3-5 days) to check handle comfort and print appearance in hand before the bulk run.",
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
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "What should I send for a kraft paper shopping bag quote?",
        a: "Share the products to be carried, the target loaded weight, desired width, height and gusset depth, handle preference, artwork and quantity. Confirm the proposed paper, handle attachment and print method against the quotation and sample, and test the assembled bag with the intended load before approving bulk production.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
    ],
    customizationOptions: [
      "Custom sizes and paper weights",
      "Artwork and print method confirmed per quotation",
      "Handle material options",
    ],
  },
  {
    slug: "stackable-jewelry-tray",
    name: "Stackable Jewelry Trays for Retail Display",
    keyFacts: [
      "Minimum order: confirmed per project in the quotation — displays are quoted to the specified set, sizes and materials",
      "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
      "Production: typically 15–20 days after sample approval and payment; confirmed by order",
      "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
      "Payment: T/T or PayPal",
      "Compartment layout, fixture fit and stacking interface are confirmed in the quotation",
    ],
    category: "Retail Display Props",
    shortDesc: "Jewelry display trays for wholesale projects. Confirm the compartment layout, fixture fit and stacking interface.",
    description: "For wholesale jewellery display trays, measure the inside of the showcase or drawer and list the jewellery dimensions and desired layout. Confirm external tray size, usable compartments, covering and any stacking interface on the proposed sample.",
    intro:
      "Wholesale jewellery display trays specified for your showcase or drawer. Measure the inside of the case and list the jewellery dimensions and desired layout; external tray size, usable compartments, covering and any stacking interface are confirmed on the proposed sample.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Materials to confirm in the quotation and sample",
    moq: "Per project",
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
    faqs: [
      {
        q: "What information determines a usable tray layout?",
        a: "Measure the display area and list the pieces to be held. Tray dimensions, compartment layout, stacking and covering need confirmation against the intended furniture and jewellery.",
      },
      {
        q: "How are materials and dimensions confirmed?",
        a: "Share the display task, space and preferences. Confirm construction, dimensions and contact surface in the quotation and sample.",
      },
      {
        q: "Can I review the proposed design?",
        a: "Ask which design preview is available for your project and confirm its scope. Review the physical sample before approving production.",
      },
      {
        q: "Can I request a sample?",
        a: "Stock samples are free when available, with USD 25 shipping and typical delivery of 4–7 days. Custom samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm availability and sample scope for your project.",
      },
      {
        q: "What is the production lead time?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Confirm the order schedule; shipping time is separate.",
      },
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
  },
  {
    slug: "velvet-jewelry-display-set",
    name: "Velvet Jewelry Display Sets for Retail",
    keyFacts: [
      "Minimum order: confirmed per project in the quotation — displays are quoted to the specified set, sizes and materials",
      "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
      "Production: typically 15–20 days after sample approval and payment; confirmed by order",
      "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
      "Payment: T/T or PayPal",
      "The piece mix and the quantity of each component are specified per project in the quotation",
    ],
    category: "Retail Display Props",
    shortDesc: "Coordinated jewelry display components for retail counters. Specify the piece mix and quantity for each component.",
    description: "For a coordinated jewellery display programme, list each component, its quantity and the available counter space. Confirm the proposed piece mix, covering and colours in the quotation. Display sets are quoted per project; confirm allocation across variants when requesting a quote.",
    intro:
      "A coordinated jewellery display programme specified as one set. List each component, its quantity and the available counter space; the proposed piece mix, covering and colours are confirmed in the quotation. The minimum order is confirmed in the quotation.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Materials to confirm in the quotation and sample",
    moq: "Per project",
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
    faqs: [
      {
        q: "How should I brief a coordinated display set?",
        a: "List each component and quantity, counter dimensions, covering and colour preferences. Agree the component mix and confirm a representative component before production.",
      },
      {
        q: "How are materials and dimensions confirmed?",
        a: "Share the display task, space and preferences. Confirm construction, dimensions and contact surface in the quotation and sample.",
      },
      {
        q: "Can I review the proposed design?",
        a: "Ask which design preview is available for your project and confirm its scope. Review the physical sample before approving production.",
      },
      {
        q: "Can I request a sample?",
        a: "Stock samples are free when available, with USD 25 shipping and typical delivery of 4–7 days. Custom samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm availability and sample scope for your project.",
      },
      {
        q: "What is the production lead time?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Confirm the order schedule; shipping time is separate.",
      },
    ],
    customizationOptions: ["Confirm the proposed design, finish and branding in the quotation"],
  },
  {
    slug: "leather-envelope-pouch",
    name: "Custom Leather Envelope Pouches",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Envelope pouches with a flap closure; material, size and logo finish are specified per project and confirmed on a sample",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Pebbled faux-leather envelope pouch with gold foil logo, snap closure and soft suede-touch interior.",
    description:
      "The envelope pouch is where a protective sleeve becomes part of the gift. Cut from pebbled faux leather with a structured flap and snap closure, it opens to reveal a suede-touch interior that cushions whatever it carries — jewelry, eyewear, cards or small leather goods. Gold foil stamping on the flap carries the brand quietly, the way luxury prefers it. A slim profile that mails flat and still feels substantial in the hand. Sizes are cut to your contents, from single-card minis to eyewear-length formats, and foil colour, thread and interior shade are specified together so the pouch reads as one palette — held against an approved sample before bulk. Production runs from 200 pieces in 15–20 days, and a custom sample (USD 30 plus USD 25 shipping, 3–5 days) settles flap hand, foil density and interior fit with your actual product before the run.",
    intro:
      "An envelope pouch in pebbled faux leather with a structured snap-closure flap and a suede-touch interior that cushions jewelry, eyewear, cards or small leather goods. Gold foil stamping on the flap carries your logo quietly; custom colours available, from 200 pieces.",
    image: "/images/products/leather-envelope-pouch/leather-envelope-pouch-hero.webp",
    gallery: [
      "/images/products/leather-envelope-pouch/leather-envelope-pouch-hero.webp",
      "/images/products/leather-envelope-pouch/leather-envelope-pouch-detail-01.webp",
      "/images/products/leather-envelope-pouch/leather-envelope-pouch-detail-02.webp",
      "/images/products/leather-envelope-pouch/leather-envelope-pouch-detail-03.webp",
      "/images/products/leather-envelope-pouch/leather-envelope-pouch-detail-04.webp",
      "/images/products/leather-envelope-pouch/leather-envelope-pouch-detail-05.webp",
    ],
    galleryRatio: "1 / 1",
    descriptionImage: "/images/products/leather-envelope-pouch/leather-envelope-pouch-description.webp",
    descriptionImageRatio: "3 / 2",
    customizeImage: "/images/products/leather-envelope-pouch/leather-envelope-pouch-customize.webp",
    customizeImageRatio: "2 / 3",
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
    faqs: [
      {
        q: "What should I send for a leather envelope pouch quote?",
        a: "Send the items it will carry and their dimensions, your colour choice, branding method — gold foil stamping, blind emboss or heat transfer — artwork and quantity. The slim profile mails flat; confirm the exact build in the quotation and sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Sized for wigs and hairpieces; satin colour and logo method are specified per project and checked on a sample",
    ],
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
        title: "Check Fabric Contact",
        desc: "Review the interior, seams and closure against your actual hair on a loaded sample.",
      },
      {
        title: "Size From Packed Wig",
        desc: "A 30 × 40 cm option is available; confirm usable space against each packed wig and request another size if needed.",
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
      { label: "Dimensions", value: "30 × 40 cm option · final size confirmed from packed item" },
      { label: "Fabric", value: "Satin · other fabrics on request" },
      { label: "Fabric weight", value: "Confirm for selected fabric" },
      { label: "Closure Type", value: "Drawstring" },
    ],
    faqs: [
      {
        q: "What size is a satin wig bag?",
        a: "A 30 × 40 cm option is listed, but fit depends on the packed wig. Share the packed dimensions, cap and accessories; confirm usable space, fabric contact and closure on a loaded sample before ordering.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "How should a wig bag be sized and stored?",
        a: "The bag is sized to the wig's length and volume as it will be stored — a 30 × 40 cm option is listed on this page, and other sizes are made to order. Store the wig settled, not compressed: the satin surface reduces friction against the hair, and the fit is checked on the sample with the actual wig inside.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Satin colour matched to your specification; size and logo method are confirmed on a physical sample",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Lustrous satin pouches with drawstring or flap closure — your colour, size and logo.",
    description:
      "Custom satin pouches for programs that want a gift feel at first touch. The lustrous face catches light in retail displays and unboxing photos, while the soft drape protects finishes and platings — a natural fit for jewelry, bridal, beauty and gifting lines, and a classic choice for perfume bottle gift bags. Made to order in your satin colour and size, with drawstring or flap closure and your logo silkscreened or hot-stamped. Product photography is in progress; request a stock sample to feel the material.",
    intro:
      "Custom satin pouches with a lustrous face that catches light in retail displays and unboxing photos, and a soft drape that protects finishes and platings. Made to order in your satin colour and size, with drawstring or flap closure and your logo applied to the satin face.",
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
      { label: "Fabric weight", value: "Confirm for selected fabric" },
      { label: "Closure Type", value: "Drawstring / flap / envelope" },
    ],
    faqs: [
      {
        q: "What should I send for a satin pouch quote?",
        a: "Send your product dimensions, satin colour (Pantone matching is available), closure preference — drawstring, flap or envelope — logo artwork and quantity. Fabric weight is confirmed for the selected fabric in the quotation.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "Does printing show well on satin?",
        a: "Yes — satin's smooth surface takes print cleanly, and its sheen is part of the presentation, so logos and patterns read sharply. Very fine reversed-out detail is checked on the sample because the fabric's shine can soften it under some light. Foil and embroidery are also possible on satin; the method is confirmed against your artwork in the quotation.",
      },
      {
        q: "Velvet or satin — which should I choose?",
        a: "Velvet reads soft and matte with a plush hand-feel; satin reads smooth and glossy with a lighter drape. Both are presentation fabrics at similar order terms, so the decision is about brand feel and how the pouch is used — satin slides more easily into boxes and sleeves, velvet gives more grip and cushion in the hand. Sampling both with your product inside is the fastest way to decide.",
      },
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
    name: "Custom Muslin Drawstring Pouches",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Natural-fabric drawstring pouches in muslin, with a linen option; size and logo method are confirmed on a sample",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Natural-look drawstring pouch projects; confirm the fabric composition, weave and cord in a sample.",
    description:
      "For a muslin-style drawstring pouch, send the item dimensions, quantity, preferred fabric appearance, cord and artwork. Request the exact fiber composition and fabric weight in the quotation, then check the proposed material and logo print in a sample. Orders start at 200 pieces. Typical production takes 15–20 days after sample approval and payment receipt; shipping time is separate. Product photography is pending; request a sample to review the actual fabric and print.",
    intro:
      "Muslin-style drawstring pouches made to your size. Send the item dimensions, quantity, preferred fabric appearance, cord and artwork; the exact fiber composition and fabric weight are confirmed in the quotation and checked on a sample. Orders start at 200 pieces.",
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
    faqs: [
      {
        q: "What should I send for a muslin drawstring pouch quote?",
        a: "Send the item dimensions, quantity, preferred fabric appearance, cord choice and artwork. Request the exact fiber composition and fabric weight in the quotation, then check the proposed material and logo print in a sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "Are muslin pouches suitable for printed logos?",
        a: "Yes. Muslin prints with a soft, textured read that suits natural-look brands, and embroidery is also available. Send a vector artwork file (AI, EPS or PDF) with the logo size and position you want; the print is approved on the physical sample before production.",
      },
      {
        q: "Drawstring or zip — which closure should I choose?",
        a: "Drawstring is fastest to open and close, forgiving on size, and the standard for storage and gift pouches. A zip gives a flatter, fully enclosed pack, better for travel formats and items that must stay grouped. Choose by how the pouch will be used daily: frequent opening favours drawstring, tidy flat storage favours zip. Both are sampled before production.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Microfiber pouches for eyewear and jewelry; size, lining and logo method are confirmed on a sample",
    ],
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
      { label: "Protection", value: "Soft lining for anti-scratch and anti-tangle protection" },
      { label: "Set option", value: "Add a matching box, card or microfiber cleaning cloth to make a box + pouch set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs per product / per component of a set" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
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
    name: "Custom Clear PVC Bags",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Clear PVC bags made to your size, thickness and print specification, confirmed on a physical sample",
    ],
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
      { label: "Closure type", value: "Confirm closure type for your specification in the quotation and approved sample" },
      { label: "Thickness / gauge", value: "Confirm film thickness / gauge in the quotation and approved sample" },
      { label: "Print method", value: "Confirm print method for the selected film in the quotation and approved sample" },
      { label: "MOQ", value: "200 pcs" },
    ],
    faqs: [
      {
        q: "What should I send for a clear PVC bag quote?",
        a: "Provide the contents, required finished size, usable opening, preferred closure and logo artwork. The exact film composition, gauge, closure construction and print method are confirmed in the quotation and approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
      {
        q: "Can clear PVC bags be printed with our logo?",
        a: "Yes — logos are printed on the PVC surface, and the print position and coverage are confirmed against your artwork in the quotation. Because the bag is transparent, the product inside remains part of the presentation, so consider how the printed mark sits over the product. The result is approved on a physical sample before production.",
      },
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
    name: "Custom Microfiber Polishing Cloths for Jewelry",
    keyFacts: [
      ...KEY_FACTS_LINES,
      "The anti-tarnish polishing cloth in the ELAPACK range — dry polishing care for jewelry; cloth size and logo print are specified per project",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Microfiber polishing cloth for jewelry, from 200 pieces; confirm size, edge, print and polishing scope in a sample.",
    description:
      "A microfiber cloth to add to a jewelry box + pouch set, so the customer can keep the piece looking like new on every opening. Material: microfiber — in 100% polyester, or 80% polyester / 20% polyamide. Conventional weight 180–230g; other weights can be made to request. Processes: silkscreen, embossing, digital printing, hot stamping and related print methods, confirmed in the quotation. This jewelry version carries a polishing effect and is used to polish oxidized metal jewellery; the eyewear version is plain microfiber with no polishing additive. Confirm the polishing scope you need in the quotation and approved sample. Product photography is pending; request a sample to check the actual cloth, edge and print. Orders start at 200 pieces.",
    intro:
      "A microfiber polishing cloth to add to a jewelry box + pouch set, so the piece looks like new at every opening. Microfiber in 100% polyester or 80% polyester / 20% polyamide, conventional weight 180–230g, with silkscreen, embossing, digital printing or hot stamping confirmed in the quotation.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Microfiber: 100% polyester or 80% polyester / 20% polyamide; conventional weight 180–230g, other weights on request",
    moq: "200 pcs",
    leadTime: "15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment receipt; shipping time separate",
    industries: ["Jewelry", "Gift"],
    features: [
      {
        title: "Microfiber Material",
        desc: "Microfiber — in 100% polyester, or 80% polyester / 20% polyamide. Conventional weight 180–230g; other weights can be made to request.",
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
        title: "Polishing Scope",
        desc: "The jewelry version polishes oxidized metal jewellery; confirm the polishing scope you need in the quotation and approved sample.",
      },
    ],
    specs: [
      { label: "Material", value: "Microfiber: 100% polyester or 80% polyester / 20% polyamide" },
      { label: "Weight", value: "Conventional 180–230g; other weights available on request" },
      { label: "Print / Process options", value: "Silkscreen, embossing, digital printing, hot stamping, etc. — confirm in quotation" },
      { label: "Scope", value: "Jewelry, eyewear, electronic screens and lenses" },
      { label: "Set option", value: "Add to a box + pouch set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "Is this cloth meant for direct sale or as a packaging insert?",
        a: "Either. State the intended use, size, printing and packaging format when requesting a quote. Confirm the intended use because size, packaging format and print placement can differ.",
      },
      {
        q: "Can the cloth be printed or branded?",
        a: "Yes. Common print and branding methods include silkscreen, embossing, digital printing and hot stamping. Confirm the artwork, cloth size and finish on an approved sample.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
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
    keyFacts: [
      ...KEY_FACTS_LINES,
      "Cleaning cloths for eyewear, lenses and screens; cloth size and logo print are specified per project",
    ],
    category: "Pouches & Bags",
    shortDesc:
      "Microfiber cleaning cloth for eyewear, screens and lenses, from 200 pieces; confirm size, edge, print and coated-surface scope in a sample.",
    description:
      "A microfiber cleaning cloth to add to an eyewear pouch + box set, for glasses, screens and lenses. This eyewear version is the plain microfiber cloth — fabric only, no polishing additive; for polishing oxidized metal jewellery, use the jewelry version. Material: microfiber — in 100% polyester, or 80% polyester / 20% polyamide. Conventional weight 180–230g; other weights can be made to request. Processes: silkscreen, embossing, digital printing, hot stamping and related print methods, confirmed in the quotation. If the cloth will be used on a coated lens or screen surface, discuss the required evidence or testing separately — packaging suitability and cleaning performance are separate requirements. Product photography is pending; request a sample to check the actual cloth, edge and print. Orders start at 200 pieces.",
    intro:
      "A plain microfiber cleaning cloth to add to an eyewear pouch + box set, for glasses, screens and lenses — fabric only, no polishing additive; for polishing oxidized metal jewellery, use the jewelry version. Microfiber in 100% polyester or 80% polyester / 20% polyamide, conventional weight 180–230g, with branding confirmed in the quotation.",
    image: "/images/placeholder/product-coming-soon.svg",
    materials: "Microfiber: 100% polyester or 80% polyester / 20% polyamide; conventional weight 180–230g, other weights on request",
    moq: "200 pcs",
    leadTime: "15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment receipt; shipping time separate",
    industries: ["Eyewear & Sunglasses", "Beauty", "Gift"],
    features: [
      {
        title: "Microfiber Material",
        desc: "Microfiber — in 100% polyester, or 80% polyester / 20% polyamide. Conventional weight 180–230g; other weights can be made to request.",
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
      { label: "Weight", value: "Conventional 180–230g; other weights available on request" },
      { label: "Print / Process options", value: "Silkscreen, embossing, digital printing, hot stamping, etc. — confirm in quotation" },
      { label: "Scope", value: "Eyewear, electronic screens and lenses, plus jewelry" },
      { label: "Set option", value: "Add to an eyewear pouch + box set, MOQ 200 per component" },
      { label: "MOQ", value: "200 pcs" },
      { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
    ],
    faqs: [
      {
        q: "How is an eyewear cloth specification confirmed?",
        a: "Send the intended glasses, case or pouch dimensions and state whether the cloth is an insert or a retail item. Confirm the finished cloth size, material, edge finish and print method in the quotation and an approved sample.",
      },
      {
        q: "Can the cloth be supplied as part of a case or pouch set?",
        a: "Yes. It can be supplied as a packaging component and packaged flat or folded into the proposed eyewear pouch or box. Confirm the packing method and component quantities in the quotation.",
      },
      {
        q: "Can I review a dieline preview?",
        a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
      },
      {
        q: "How long does the production process take?",
        a: "Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
      },
      {
        q: "Can I see a sample before placing a full order?",
        a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 30 plus USD 25 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
      },
    ],
    customizationOptions: [
      "Choose 100% polyester or 80% polyester / 20% polyamide",
      "Provide size, edge finish and logo artwork",
      "Add to an eyewear pouch + box set",
    ],
  },
    {
      slug: "custom-tissue-paper",
      name: "Custom Tissue Paper",
      category: "Packaging Paper",
      shortDesc: "Custom tissue paper with your logo — custom print from 500 sheets, stock designs with no minimum order.",
      intro: "Tissue paper is the layer your customer touches first — the wrap inside the box, printed with your logo in repeat, folded over the product before the lid closes. ELAPACK prints custom tissue to sit inside our rigid boxes, pouches and shopping bags, colour-matched to the rest of your packaging and produced in the same order, so the wrap never arrives as an afterthought from a different supplier.",
      description: "Custom print — your artwork or logo repeat printed on the sheet, from 500 sheets. Send your artwork (AI, PDF or PNG) and colour reference; the paper stock, sheet size and colour count are specified with you and confirmed on a physical sample before bulk production. Stock designs — ready-made sheets from our stock range, with no minimum order. Add them directly to any box or pouch order, or order them on their own — the fastest way to upgrade an unboxing experience without a custom print setup.\n\nTissue does three distinct jobs — presentation wrap, box liner, and inner packing layer — and each is specified differently. Paper weight (GSM) measures weight per area only: it does not by itself decide print sharpness or surface protection, so we confirm the proposed paper against your actual artwork and product on a sample. Sheet size is tailored to your box interior and folding sequence, so the wrap closes cleanly without bulky corners. If the tissue touches the product surface directly, we check ink transfer and abrasion against the real materials before the bulk run. Our tissue paper specification guide walks through each check in detail.\n\nWhen ordered alongside your boxes or pouches, tissue shares the exact same colour reference and proofing cycle as the rest of your packaging — the inner wrap, the outer box paper and the pouch fabric are checked side by side, not approved in isolation.\n\nHow ordering works: send your box dimensions (or the box format you are ordering), the tissue's role, and your artwork or stock-design choice. We quote the paper stock, sheet size, print specification and sampling scope in writing within 1 business day. Approve the physical sample — print registration, hand-feel and folding behaviour are verified on the actual sheet. Production runs after sample approval and payment; tissue is packed flat or pre-cut as its own component in your shipment.",
      image: "/images/products/custom-tissue-paper/custom-tissue-paper-hero.webp",
      gallery: [
        "/images/products/custom-tissue-paper/custom-tissue-paper-hero.webp",
        "/images/products/custom-tissue-paper/custom-tissue-paper-detail-01.webp",
        "/images/products/custom-tissue-paper/custom-tissue-paper-detail-02.webp",
        "/images/products/custom-tissue-paper/custom-tissue-paper-detail-03.webp",
      ],
      galleryRatio: "16 / 9",
      descriptionImage: "/images/products/custom-tissue-paper/custom-tissue-paper-detail-02.webp",
      descriptionImageRatio: "3 / 2",
      infoImage: "/charts/tissue-paper-size-weight.svg",
      infoImageRatio: "16 / 9",
      materials: "Tissue paper — weight (GSM) specified for your project",
      moq: "500 sheets per design",
      leadTime: "10–15 days after sample approval and payment receipt; shipping time separate",
      industries: ["Jewelry", "Beauty", "Fashion", "Gift"],
      features: [
        {
          title: "Two Ways to Order",
          desc: "Custom print from 500 sheets per design, or stock designs with no minimum order, added directly to any box or pouch order.",
        },
        {
          title: "Specified Like a Component",
          desc: "Paper weight, sheet size and print are confirmed against your actual artwork and product on a physical sample — not picked from a fixed menu.",
        },
        {
          title: "One Colour Reference",
          desc: "Inner wrap, outer box paper and pouch fabric are proofed side by side in the same order, never approved in isolation.",
        },
        {
          title: "Checked Against Your Product",
          desc: "When tissue touches the product surface directly, ink transfer and abrasion are checked against the real materials before the bulk run.",
        },
      ],
      specs: [
        { label: "Paper Weight", value: "Specified for your project (GSM) and confirmed on a physical sample" },
        { label: "Sheet Size", value: "Tailored to your box interior and folding sequence" },
        { label: "Printing", value: "Single-colour logo repeats and multi-colour designs; process and colour count confirmed in the quotation and on a physical sample" },
        { label: "Stock Designs", value: "Ready-made sheets from the stock range — no minimum order" },
        { label: "MOQ", value: "500 sheets per custom-printed design; stock designs have no minimum order" },
        { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production typically 10–15 days after sample approval and payment" },
      ],
      faqs: [
        {
          q: "What is the minimum order for custom tissue paper?",
          a: "500 sheets for a custom-printed design. Stock designs have no minimum order.",
        },
        {
          q: "Can you print my logo in full colour?",
          a: "Send us the artwork — single-colour logo repeats and multi-colour designs are both regular enquiry types here. Because ink coverage and registration depend on the thin paper stock and your specific file, we confirm the exact print process and colour count in the quotation and prove it on a physical sample rather than promising a colour count in the abstract. Bulk colour is accepted against the confirmed sample at ΔE ≤ 2.0, grey scale grade 4.",
        },
        {
          q: "Does tissue paper protect the product in transit?",
          a: "No — tissue is a presentation and surface-wrapping layer. Impact protection and product retention come from a fitted insert; see our custom foam inserts if your product needs to be held firmly in place.",
        },
        {
          q: "Can I order tissue paper on its own?",
          a: "Yes. Custom-printed tissue (from 500 sheets) is quoted and supplied as its own component, with or without boxes and pouches in the same order. Stock designs with no minimum are easiest to add to a box or pouch shipment, or can be quoted standalone.",
        },
      ],
      customizationOptions: [
        "Custom print or stock designs",
        "Sheet size tailored to your box interior",
        "Artwork in AI, PDF or PNG",
        "Packed flat or pre-cut",
      ],
      keyFacts: [
        "Minimum order: 500 sheets for custom-printed designs; stock designs have no minimum order",
        "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
        "Production: typically 10–15 days after sample approval and payment; confirmed by order",
        "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
        "Payment: T/T or PayPal",
        "Paper weight (GSM), sheet size and print colours are specified for your project and confirmed on a physical sample",
      ],
    },
    {
      slug: "custom-hang-tags",
      name: "Custom Hang Tags",
      category: "Packaging Paper",
      shortDesc: "Custom hang tags from 500 pieces — cardstock, hot foil and print colour-matched to your boxes and bags.",
      intro: "A hang tag is the most compact printed surface your brand puts in a customer's hand — carrying price, size, care notes and a concise brand story, suspended from the product on a cord. ELAPACK produces custom hang tags under the same roof as our boxes and bags, so the tag cardstock can be matched directly to your box wrap and the metallic foil on the tag is stamped from the same foil as your lid — one unified material system, not a tag from an online configurator and a box from a factory that never see each other's colours.",
      description: "Every custom tag is defined across five lines — size, stock, print, hole, and cord. Leave one out and the gap surfaces later: a tag too narrow for its barcode, a slick laminated stock that rejects pen ink where a handwritten note was planned, or a shipment that arrives without strings because nobody specified the cord.\n\nSize — 2 x 3 and 2 x 3.5 in (50 x 75 and 50 x 90 mm) are the everyday apparel standards; small goods such as jewelry and accessories typically carry 1.5–2 in tags; elongated formats hold sizing charts and multi-language care copy. Custom die-cut shapes are cut on request. Stock — uncoated, textured or coated cardstock confirmed for your project in the quotation, and matched to your box wrap paper wherever the tag belongs to a wider packaging set. Print — brand face on the front and product data on the reverse is the standard layout: logo and finish on side one; SKU, barcode, care or sizing copy on side two. Hole — approx. 4 mm diameter, centred near the top edge as standard; alternative positions and reinforced options on request. Cord — cotton, jute and finer cords suited to jewelry; specified as its own line item from 500 pieces (see Key Facts), never left to guesswork.\n\nHang tags run through the same three decoration processes as our rigid boxes — digital printing for multi-colour graphics, silkscreen for crisp spot colours on dark card, and hot-foil stamping for true metallic logos. Matching the exact foil shade and paper grain across tag, box lid and pouch is what makes a multi-piece order read as one cohesive brand. Our hang tag specification guide compares market sizes, card weights and stringing options in full.\n\nHow ordering works: send your tag dimensions (or the copy that must fit on it), quantity, artwork files (AI, PDF or PNG) and how the tag will be attached. We quote the complete five-line specification in writing — including the string as its own clear line item. Approve the physical sample for cardstock weight, colour match (bulk accepted at ΔE ≤ 2.0 against the confirmed sample, grey scale grade 4) and foil or print sharpness. Production runs after sample approval and payment; tags ship together with your boxes or bags when ordered as part of a set.",
      image: "/images/products/custom-hang-tags/custom-hang-tags-hero.webp",
      gallery: [
        "/images/products/custom-hang-tags/custom-hang-tags-hero.webp",
        "/images/products/custom-hang-tags/custom-hang-tags-detail-01.webp",
        "/images/products/custom-hang-tags/custom-hang-tags-detail-02.webp",
        "/images/products/custom-hang-tags/custom-hang-tags-detail-03.webp",
        "/images/products/custom-hang-tags/custom-hang-tags-detail-04.webp",
      ],
      galleryRatio: "16 / 9",
      descriptionImage: "/images/products/custom-hang-tags/custom-hang-tags-detail-04.webp",
      descriptionImageRatio: "16 / 9",
      customizeImage: "/images/products/custom-hang-tags/custom-hang-tags-detail-02.webp",
      customizeImageRatio: "16 / 9",
      materials: "Cardstock — uncoated, textured or coated, matched to your box wrap",
      moq: "500 tags per design",
      leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time is separate",
      industries: ["Fashion", "Jewelry", "Beauty", "Gift"],
      features: [
        {
          title: "The Five-Line Specification",
          desc: "Size, stock, print, hole and cord — leave one out and the gap surfaces later; all five are stated and quoted line by line.",
        },
        {
          title: "Same Foil as Your Lid",
          desc: "Hot-foil stamping from the same foil as your box lid, so tag and box read as one unified material system.",
        },
        {
          title: "Matched to Your Box Wrap",
          desc: "Tag cardstock matched directly to your box wrap paper and checked against the same colour standard in the same facility.",
        },
        {
          title: "Strings as Their Own Line",
          desc: "Cotton, jute and finer cords are quoted as a separate line item from 500 pieces — never left to guesswork.",
        },
      ],
      specs: [
        { label: "Size", value: "2 x 3 and 2 x 3.5 in (50 x 75 and 50 x 90 mm) apparel standards; 1.5–2 in small sizes; custom die-cut shapes" },
        { label: "Stock", value: "Uncoated, textured or coated cardstock, matched to your box wrap" },
        { label: "Print", value: "Digital, silkscreen and hot-foil decoration; front branding, reverse product data" },
        { label: "Hole", value: "Approx. 4 mm, centred near the top edge as standard; custom positions on request" },
        { label: "Cord", value: "Cotton, jute and finer cords; own line item from 500 pieces" },
        { label: "MOQ", value: "500 tags per design; strings and cords from 500 pieces" },
        { label: "Sample & Production", value: "Stock sample free + USD 25 shipping (4–7 days); custom sample USD 30 + USD 25 shipping, 3–5 days; production typically 15–20 days after sample approval and payment receipt" },
      ],
      faqs: [
        {
          q: "Do the hang tags come with strings included?",
          a: "Strings are quoted as a separate line item, starting from 500 pieces — the standard practice in custom manufacturing, as attachment methods vary widely between garments, handbags and jewelry. Specify your preferred cord material in your enquiry so the initial quotation covers both tag and cord.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "500 tags per design, and 500 pieces for strings or cords. When your tags are ordered alongside custom boxes or pouches, they are produced on the same schedule and consolidated into the same shipment.",
        },
        {
          q: "Can tags be printed on both sides?",
          a: "Yes — front for branding and back for product information, barcodes or care instructions is the standard layout. Both sides are checked on your pre-production proof and physical sample.",
        },
        {
          q: "Can the tag cardstock match my custom boxes?",
          a: "Yes. Because tags and boxes are produced in the same facility, the tag board can be matched to your box wrap paper and checked against the same colour standard — the primary advantage of ordering tags with your packaging rather than from a standalone print shop.",
        },
      ],
      customizationOptions: [
        "Size and custom die-cut shapes",
        "Cardstock matched to your box wrap",
        "Digital, silkscreen or hot-foil decoration",
        "Hole position",
        "Cotton, jute or fine cords",
      ],
      keyFacts: [
        "Minimum order: 500 tags; strings and cords from 500 pieces, quoted as a separate line",
        "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
        "Production: typically 15–20 days after sample approval and payment; confirmed by order",
        "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
        "Payment: T/T or PayPal",
        "Formats: standard apparel sizes (2 x 3 and 2 x 3.5 in / 50 x 75 and 50 x 90 mm), small jewelry sizes (1.5–2 in), plus custom die-cut shapes; hole approx. 4 mm or custom positioned; digital, silkscreen and hot-foil decoration",
      ],
    },
    {
      slug: "custom-foam-inserts",
      name: "Custom Foam Inserts for Packaging Boxes",
      category: "Boxes",
      shortDesc: "Custom foam inserts cut to your product and your box — EVA, sponge, pearl cotton or card fitments, with flocked surfaces. From 200 sets with your box order.",
      intro: "The insert is what holds your product still in transit, presents it at the right angle when the lid opens, and lets the customer lift it out cleanly without tugging. ELAPACK die-cuts custom inserts for the custom packaging boxes we manufacture — across jewelry, fragrance, skincare and gift sets — specified together with the outer box from day one, so the cavity, the box interior and the product are engineered as a single fitment rather than separate orders hoped into alignment. This page covers custom inserts supplied for presentation and retail packaging boxes.",
      description: "EVA foam — dense, firm and clean-edged; holds intricate multi-cavity layouts and heavier items such as glass perfume bottles and cosmetic jars without deforming. Sponge — soft, high-recovery cushioning suited to lightweight or delicate pieces where gentle compression matters. Pearl cotton (EPE) — lightweight, closed-cell shock absorption where the insert serves primarily as a transit-protection layer. Paper-card fitments — the printable alternative or companion: standalone folded card platforms and dividers, or printed card fitments paired with a foam base so care notes and branding sit beside the product.\n\nFoam surfaces can be finished with custom flocking — the soft, velvety surface standard in fine jewelry and watch boxes — in shades matched to your brand palette. Foam density and wall thickness are never picked blind from a chart: they follow your product's weight, fragility and centre of gravity, and are proven on a loaded sample. If you are still weighing foam against other insert systems, our packaging inserts guide covers the full material comparison; this page is where your chosen box insert gets specified and ordered.\n\nSend us your product drawing, dieline or a physical unit alongside the box format you have in mind. We engineer the cavity layout — recess depth, perimeter wall allowance, and finger notches for effortless lifting — and cut a physical prototype. We test the sample loaded with your actual product inside to check retention, presentation height and surface clearance. Mass production follows that approved loaded sample, not an untested drawing.\n\nBecause your insert is engineered alongside the box, the flocking shade is matched to the inner lid lining, any companion card fitment is printed on the same press run as the outer wrap, and the complete assembly ships together — so the insert ships fitted with its box, not as a separate follow-up.\n\nHow ordering works: send your product dimensions (or mail a physical unit), weight and fragility notes, and the target box style. We recommend the insert material and cavity layout, and quote the insert together with your box within 1 business day. Approve the loaded physical sample tested with your product in place. Bulk production runs after sample sign-off and payment; inserts ship pre-fitted inside their boxes or packed together as matched sets.",
      image: "/images/products/custom-foam-inserts/custom-foam-inserts-hero.webp",
      gallery: [
        "/images/products/custom-foam-inserts/custom-foam-inserts-hero.webp",
        "/images/products/custom-foam-inserts/custom-foam-inserts-detail-01.webp",
        "/images/products/custom-foam-inserts/custom-foam-inserts-detail-02.webp",
        "/images/products/custom-foam-inserts/custom-foam-inserts-detail-03.webp",
      ],
      galleryRatio: "16 / 9",
      descriptionImage: "/images/products/custom-foam-inserts/custom-foam-inserts-detail-03.webp",
      descriptionImageRatio: "16 / 9",
      infoImage: "/charts/foam-insert-cross-section.svg",
      infoImageRatio: "16 / 9",
      materials: "EVA foam, sponge, pearl cotton (EPE) or paper-card fitments",
      moq: "200 sets (as part of a box order)",
      leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time is separate",
      industries: ["Jewelry", "Fragrance", "Beauty", "Gift"],
      features: [
        {
          title: "Die-Cut to Your Product",
          desc: "Cavity layout — recess depth, wall allowance and finger notches — engineered from your product and tested loaded with the actual product inside.",
        },
        {
          title: "Four Materials, One Method",
          desc: "EVA, sponge, pearl cotton (EPE) or paper-card fitments, chosen by weight, fragility and centre of gravity — never picked blind from a chart.",
        },
        {
          title: "Flocked to Match Your Lining",
          desc: "Velvet-like flocked surfaces in shades matched to your brand palette and checked against your box wrap and inner lining during sampling.",
        },
        {
          title: "One Set, One Factory",
          desc: "Insert, box and companion card are engineered, sampled and shipped together — the insert arrives fitted with its box.",
        },
      ],
      specs: [
        { label: "Materials", value: "EVA foam, sponge, pearl cotton (EPE) and paper-card fitments" },
        { label: "Surface", value: "Velvet-like flocked surface available on foam, matched to your box lining" },
        { label: "Cavity", value: "Die-cut to your product's exact geometry; verified on a loaded physical sample" },
        { label: "Branding", value: "No direct ink print on foam — interior branding sits on the box lining or a paired paper-card fitment" },
        { label: "MOQ", value: "From 200 sets, supplied as part of an ELAPACK box order" },
        { label: "Sample & Production", value: "Custom sample USD 30 + USD 25 shipping, made in 3–5 days (sample fee deductible against your confirmed first order); production typically 15–20 days after sample approval and payment" },
      ],
      faqs: [
        {
          q: "Can our logo be printed directly on the foam?",
          a: "No — raw and flocked foam surfaces do not hold ink or foil cleanly. Interior branding belongs on the inner box lid or on a printed paper-card fitment paired with the foam. Tell us if you want in-box copy or a logo beside the product, and we will design a foam-and-card fitment in your quotation.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "Custom foam inserts are supplied as part of an ELAPACK box order starting from 200 sets. The box, the foam insert and any companion card are engineered, sampled and quoted together on one order.",
        },
        {
          q: "Which foam material is best for a fragile glass bottle?",
          a: "The right choice depends on the bottle's filled weight, neck geometry, and whether the box ships inside an outer mailer carton. For heavy glass bottles, higher-density EVA with a recessed neck cradle is common, whereas lighter dropper bottles often pair sponge or EPE with a card fitment — which is why we quote comparable options and verify protection on a loaded sample.",
        },
        {
          q: "Can the foam insert be flocked to match our box lining?",
          a: "Yes — velvet-like flocked surfaces can be applied to foam inserts, and the colour is checked directly against your box wrap and inner lining during sampling.",
        },
      ],
      customizationOptions: [
        "EVA, sponge, EPE or paper-card fitment",
        "Flocked surface colour",
        "Cavity layout and finger notches",
        "Paired printed card fitment",
      ],
      keyFacts: [
        "Supplied as part of a box order: from 200 sets, engineered and fitted to the ELAPACK box they ship in",
        "Four material options: EVA foam, sponge, pearl cotton (EPE) and paper-card fitments; velvet-like flocked surface available on foam",
        "Cavities are die-cut to your product's exact geometry and verified on a loaded physical sample",
        "Foam carries no direct ink print — interior branding sits on the box lining or a paired paper-card fitment",
        "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order)",
        "Production: typically 15–20 days after sample approval and payment; confirmed by order",
        "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
        "Payment: T/T or PayPal",
      ],
    },
    {
      slug: "custom-rigid-drawer-box",
      name: "Custom Rigid Drawer Boxes",
      category: "Boxes",
      shortDesc: "Slide-out tray in a printed sleeve, with fitted inserts and a ribbon or tab pull — built around your product, from 200 pieces.",
      intro: "A rigid drawer box is a slide-out tray inside a printed sleeve — the box opens sideways, not from the top, so the product is revealed in layers as the tray comes out. ELAPACK makes custom rigid drawer boxes for jewelry, fragrance, gift and multi-item sets, built around your product and your artwork from 200 pieces. This page is about the drawer box as packaging: the sleeve, the tray, the pull and the insert inside it — not a storage drawer or a tool chest.",
      description: "How the box is built: the sleeve is the outer shell that holds the tray and carries the main print — your logo, colour and finish on the outside face the customer sees first. The tray is the sliding inner box that holds the product and its insert. The tray and the sleeve are specified as a pair: the product cavity is sized to your item and insert first, and the sliding fit — the clearance between the outside of the finished tray and the inside of the finished sleeve — is specified separately. The pull is the way the tray comes out: a ribbon pull, a tab, or a finger notch cut into the tray edge. A ribbon used as a drawer pull is a different detail from a tie that closes a hinged box, and its attachment and clearance at the sleeve opening are confirmed on the sample. The insert is the fitted tray inside the tray: EVA for a contoured, precise fit; sponge for soft cushioning; pearl cotton (EPE) for lightweight shock absorption; or a paper-card fitment where printed copy or a logo belongs beside the product. Flocked, velvet-touch surfaces are available on foam — see our custom foam inserts for the full material comparison.\n\nDrawer boxes suit layered or multi-item presentation — a jewelry set laid out in one tray, a fragrance gift with its accessories beside the bottle, a press-on nail set with its tools in compartments. The slide-out opening also suits repeated opening: the tray comes out and goes back without a hinged lid to align. Against the other rigid structures, the choice is a fit question, not a ranking: a magnetic closure gift box opens from a hinged lid with a magnetic flap, a drawer box slides. Our drawer box packaging guide walks through the sleeve-to-tray fit, the sample checks and the enquiry fields in full — this page is where the box gets specified and ordered.\n\nDrawer boxes are rigid boxes: printed wrap over rigid board, with the same finish range as our other rigid boxes — matt or gloss lamination, varnishing, stamping, embossing, UV coating and gold foil with Pantone colour matching. The sleeve carries the main artwork; the tray edge and pull carry the detail. Board is proposed for your product weight, dimensions and presentation requirements — a thicker board is not automatically a smoother sliding box, and board thickness alone does not establish stacking strength or transport protection, so the proposed construction is confirmed on a loaded sample with your actual product inside. If the box will ship inside an outer carton, say so in the enquiry: the transit outer and route-appropriate protection are agreed separately.\n\nHow ordering works: send your product dimensions and weight, including any accessories that must fit inside; the tray layout you have in mind and how the product must be held in place; the quantity; and your logo artwork (AI, PDF or PNG) and colour reference. We quote the sleeve and tray construction, insert, finish and sampling scope in writing within 1 business day. Approve the finished, loaded sample — tray slide, pull attachment, insert fit and print checked on the actual box, under the intended storage and handling conditions. Production runs after sample approval and payment; drawer boxes ship assembled or in the format agreed for your order — compare actual packed dimensions and assembly requirements rather than assuming one shipping arrangement.\n\nProduct photography is in progress; request a stock sample to check the tray slide and insert fit with your product inside. Ready to specify your drawer box? Send your product measurements and tray layout through our contact page for an itemized quotation.",
      image: "/images/placeholder/product-coming-soon.svg",
      materials: "Rigid board with printed wrap; EVA, sponge, pearl cotton (EPE) or paper-card inserts",
      moq: "200 pcs",
      leadTime: "Typically 15–20 days after sample approval and payment receipt; shipping time is separate",
      industries: ["Jewelry", "Fragrance", "Beauty", "Gift"],
      features: [
        {
          title: "Slide-Out Tray in a Sleeve",
          desc: "The box opens sideways, not from the top, so the product is revealed in layers as the tray comes out.",
        },
        {
          title: "Fitted Inserts, Four Materials",
          desc: "EVA, sponge, pearl cotton (EPE) or paper card, matched to your product — flocked EVA for high-value jewellery; paper card for plastic-free projects.",
        },
        {
          title: "Ribbon, Tab or Finger-Notch Pull",
          desc: "The pull is specified with the box, and its attachment and clearance at the sleeve opening are confirmed on the sample.",
        },
        {
          title: "Confirmed on a Loaded Sample",
          desc: "Board and build are proposed for your product's weight and dimensions, and the sliding fit is checked on a finished sample with your actual product inside.",
        },
      ],
      specs: [
        { label: "Structure", value: "Slide-out tray in a printed sleeve, rigid board" },
        { label: "Standard sizes", value: "8 × 8 × 3 and 9 × 9 × 3.2 cm (jewellery and pendants); 17 × 9 × 5 and 12 × 12 × 4 cm (eyewear and cosmetics); 20 × 5 × 3 cm (pens and tableware); 25 × 18 × 5 cm (scarves and apparel); custom sizes included" },
        { label: "Inserts", value: "EVA, sponge, pearl cotton (EPE) or paper card; flocked surface available on foam" },
        { label: "Pull", value: "Ribbon pull, tab or finger notch" },
        { label: "MOQ", value: "200 pieces, custom sizes included" },
        { label: "Sample & Production", value: "Custom sample USD 30 + USD 25 shipping, made in 3–5 days (sample fee deductible against your confirmed first order); production typically 15–20 days after sample approval and payment" },
      ],
      faqs: [
        {
          q: "What is the minimum order for custom rigid drawer boxes?",
          a: "200 pieces, custom sizes included. The sleeve, tray, insert and pull are quoted together as one box order.",
        },
        {
          q: "What should I send for a comparable quote?",
          a: "Product dimensions and weight, including any accessories that must fit inside; the tray layout and insert you need, and how the product must be held in place; the pull type (ribbon, tab or finger notch); logo artwork (AI, PDF or PNG), colour reference and finish; quantity (minimum 200 pieces); and the delivery country and target date.",
        },
        {
          q: "How is colour difference controlled?",
          a: "Bulk production is checked against your approved sample: the standard acceptance is a colour difference of ΔE ≤ 2.0 against the confirmed sample, grey scale grade 4.",
        },
        {
          q: "How is the sliding fit checked?",
          a: "On the finished, loaded sample: the tray should slide out without damaging the wrap, the pull should stay attached, and unwanted movement should be controlled. Clearance and production tolerance are separate values — ask for the proposed clearance and tolerance on the approved drawing, with the measurement points stated — and recheck fit after wrapping, folds and finishes are included, since a bare-board mock-up does not establish the fit of the decorated version.",
        },
        {
          q: "Is a drawer box better than a magnetic closure box?",
          a: "Neither structure is better in the abstract. A drawer box slides open and suits layered presentation; a magnetic box opens from a hinged lid and suits a single reveal. Compare the two on the same product fit, finish, quantity and destination, and approve the structure on a loaded sample.",
        },
        {
          q: "Can a drawer box hold a full packaging set?",
          a: "Yes — drawer boxes are a common structure inside complete packaging sets, with the tray holding the product and the sleeve carrying the set artwork. The tray, insert, tissue and any companion pouch are specified together in one order.",
        },
      ],
      customizationOptions: [
        "Sleeve print and finishes — lamination, stamping, embossing, UV coating, gold foil",
        "Ribbon, tab or finger-notch pull",
        "EVA, sponge, EPE or paper-card insert",
        "Standard or custom sizes",
      ],
      keyFacts: [
        "Minimum order: 200 pieces, custom sizes included",
        "Custom samples: made in 3–5 days — USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order); free stock samples — USD 25 shipping only, delivered in 4–7 days",
        "Production: typically 15–20 days after sample approval and payment; confirmed by order",
        "Shipping: from Shanghai or Shenzhen, by sea or air; DDP quoted on request",
        "Payment: T/T or PayPal",
        "Standard sizes: 8 × 8 × 3 cm and 9 × 9 × 3.2 cm (jewellery and pendants); 17 × 9 × 5 cm and 12 × 12 × 4 cm (eyewear and cosmetics); 20 × 5 × 3 cm (pens and tableware); 25 × 18 × 5 cm (scarves and apparel) — custom sizes included",
        "Inserts: EVA, sponge, pearl cotton (EPE) or paper card, matched to your product — flocked EVA for high-value jewellery; paper card for plastic-free projects",
        "Construction: board and build are proposed for your product's weight and dimensions, and confirmed on a loaded sample before production",
      ],
    },
];

export const categories = [
  "All",
  "Boxes",
  "Pouches & Bags",
  "Retail Display Props",
  "Sampling Cards",
  "Packaging Paper",
];

/** Derived: categories that actually have products, in display order. */
export const activeCategories = ["Boxes", "Pouches & Bags", "Retail Display Props", "Sampling Cards", "Packaging Paper"];

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
    "custom-clothing-apparel-packaging-guide",
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
  "custom-tissue-paper": [
    "custom-tissue-paper-guide",
    "custom-packaging-samples-guide",
    "custom-clothing-apparel-packaging-guide",
  ],
  "custom-hang-tags": [
    "custom-hang-tags-guide",
    "custom-packaging-samples-guide",
  ],
  "custom-foam-inserts": [
    "packaging-inserts-guide",
    "custom-jewelry-packaging-guide",
  ],
  "custom-rigid-drawer-box": [
    "drawer-box-packaging-guide",
    "packaging-inserts-guide",
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
    "custom-clothing-apparel-packaging-guide",
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

