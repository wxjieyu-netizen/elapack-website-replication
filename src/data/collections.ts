/**
 * Collection pages (2026-09-30 keyword restructuring): keyword-anchored
 * category hubs that group real catalog products by buyer search intent —
 * /custom-jewelry-boxes, /eyewear-packaging, /custom-jewelry-pouches and
 * /custom-wig-packaging (phase-2 placeholder edition).
 * All facts below are the confirmed trade facts (MOQ, samples, lead time).
 */
export type Collection = {
  slug: string;
  browserTitle?: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; items: { title: string; desc: string; link?: { path: string; label: string } }[] }[];
  facts: { label: string; value: string }[];
  productSlugs: string[];
  /** Related /news sourcing guides linked at the page foot — curated, never forced. */
  guideSlugs?: string[];
  relatedPages?: { path: string; label: string }[];
  /**
   * Plain-text, dated fact block for AI/answer engines to quote verbatim.
   * One self-contained paragraph; every figure must come from the confirmed
   * trade-terms whitelist (MOQ / lead times / sample terms).
   */
  factBlock?: { updated: string; paragraph: string; top?: boolean };
  /** Selection decision table (mirrors the landing tables): type | best for | what to confirm on the sample. */
  table?: { heading: string; columns: string[]; rows: string[][]; note?: string };
  /** Optional second table, rendered after the first; intro paragraphs print above the table. */
  table2?: { heading: string; intro?: string[]; columns: string[]; rows: string[][]; note?: string; image?: { src: string; alt: string } };
  /** Optional third table, rendered between the first and second tables. */
  table3?: { heading: string; intro?: string[]; columns: string[]; rows: string[][]; note?: string };
  /** Closing FAQ group; also emitted as FAQPage JSON-LD by the prerender, same mechanism as the landings. */
  faq?: { q: string; a: string }[];
  /** Prefilled closing CTA sentence linking to the contact form with a product context (pouches-bags pattern). */
  ctaLink?: { lead: string; anchor: string; product: string };
  ctaTitle: string;
};

export const collections: Collection[] = [
  {
    slug: "custom-jewelry-boxes",
    eyebrow: "Jewelry Boxes",
    h1: "Custom Jewelry Boxes with Logo — Wholesale",
    subhead:
      "Rigid, magnetic and wrapped boxes for rings, earrings, necklaces and bracelets — your size, structure, finish and logo.",
    metaDescription:
      "Custom jewelry boxes wholesale from our own factory in Wuxi — rigid lift-off, magnetic and ribbon-tie jewelry packaging boxes with EVA, velvet or pulp inserts. MOQ 200; DDP to the US on request.",
    intro:
      "ELAPACK is a custom jewelry box manufacturer and supplier for brands selling in the US and Europe, making every order in our own factory in Wuxi. We make each order to your specification — box structure, wrap colour, interior insert and branding — so the box fits your jewelry and carries your brand.",
    sections: [
      {
        heading: "By jewelry type",
        items: [
          { title: "Ring boxes", desc: "Single and double ring slots with velvet or foam cushions.", link: { path: "/products/custom-ring-boxes/", label: "View custom ring boxes" } },
          { title: "Earring & pendant boxes", desc: "Fitted inserts that hold pairs and chains in place.", link: { path: "/news/custom-earring-boxes-guide/", label: "Choose earring boxes by type, insert and structure" } },
          { title: "Bracelet & small gift boxes", desc: "Compact footprints for retail counter and gifting.", link: { path: "/news/necklace-bracelet-packaging-guide/", label: "See bracelet box sizing and formats" } },
          { title: "Complete jewelry sets", desc: "Box, pouch and insert designed together as one program.", link: { path: "/sets/", label: "Explore box and pouch sets" } },
          { title: "Jewelry box sizes", desc: "Sizes we make most often (outside, cm): ring and stud boxes 5 × 5 × 3.5 or 6 × 6 × 4; pendant boxes 7 × 7 × 3; bangle boxes 9 × 9 × 4; long necklace boxes 23 × 5 × 3; set boxes up to 18 × 18 × 4.5. Any size is made to your piece.", link: { path: "/news/jewelry-box-sizes-guide/", label: "Open the jewelry box size chart" } },
        ],
      },
      {
        heading: "Box structures",
        items: [
          { title: "Rigid lift-off lid", desc: "Full-height lid over a rigid base — the premium, gift-ready structure." },
          { title: "Magnetic flip-top", desc: "Hidden magnets give a clean exterior and a satisfying slow close.", link: { path: "/products/magnetic-closure-gift-box/", label: "View magnetic closure gift boxes" } },
          { title: "Ribbon tie", desc: "Satin ribbon closure that becomes part of the unboxing ritual.", link: { path: "/products/luxury-gift-box-ribbon/", label: "View ribbon-tie gift boxes" } },
        ],
      },
      {
        heading: "Inserts & interiors",
        items: [
          { title: "EVA", desc: "Contoured, precise fit for each piece." },
          { title: "Sponge", desc: "Soft cushioning under velvet or satin covering." },
          { title: "Molded pulp", desc: "Economical structure with a natural look." },
          { title: "Flocked & velvet", desc: "Velvet-touch luxury finish for premium lines." },
        ],
      },
      {
        heading: "Branding & finishes",
        items: [
          { title: "Foil stamping", desc: "Gold or metallic foil logos on lid and base." },
          { title: "Embossing & debossing", desc: "Blind relief marks that read premium without colour." },
          { title: "Spot UV & lamination", desc: "Matte or gloss laminate with spot UV accents." },
          { title: "Pantone-matched wrap", desc: "Wrap colour matched to your Pantone reference, with interior lid printing." },
          { title: "Faux leather wrap", desc: "Textured wrap with embossed branding for jewelry and gift programs.", link: { path: "/products/black-leather-jewelry-box/", label: "View the black jewelry box reference" } },
          { title: "Velvet covering", desc: "A soft velvet pile over the rigid body — flocked paper or flocked fabric, colour-matched to your reference.", link: { path: "/velvet-jewelry-boxes/", label: "Explore velvet jewelry boxes" } },
        ],
      },
      {
        heading: "What to specify for a wholesale jewelry box quote",
        items: [
          { title: "The jewelry and its fit", desc: "Share the piece dimensions, weight and any certificate or card that must fit inside. Check the insert with the actual piece in a sample." },
          { title: "Structure and insert", desc: "Choose lift-off, magnetic or ribbon closure, then specify the cavity, insert material and how the piece should be held." },
          { title: "Branding and quantity", desc: "Send logo artwork, colour reference, finish, box quantity and destination so suppliers quote the same specification." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Delivery to the US", value: "About 8–12 days by air, 15–20 days by sea; DDP quoted on request" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "black-leather-jewelry-box",
      "custom-white-jewelry-box",
      "custom-ring-boxes",
      "luxury-gift-box-ribbon",
      "magnetic-closure-gift-box",
    ],
    factBlock: {
      updated: "November 2026",
      top: true,
      paragraph:
        "ELAPACK custom jewelry boxes — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering rigid lift-off, magnetic flip-top, ribbon-tie and faux leather boxes, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days. A custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork. The sample fee is deductible against the confirmed first order. Finished orders ship by air or by sea from Shanghai or Shenzhen; delivery to the US takes about 8–12 days by air or 15–20 days by sea, and DDP can be quoted on request. Payment by T/T or PayPal. Quotations: a written quotation within 1 business day of your enquiry.",
    },
    table: {
      heading: "Choose a jewelry box structure",
      columns: ["Structure", "Best for", "What to confirm on the sample"],
      rows: [
        ["Rigid lift-off lid", "The premium, gift-ready structure for rings, earrings, necklaces and bracelets", "Insert fit for the piece, and lid fit and clearance"],
        ["Magnetic flip-top", "A clean exterior with a satisfying slow close", "Magnet alignment and opening clearance"],
        ["Ribbon tie", "A closure that becomes part of the unboxing ritual", "Ribbon colour match to your reference, and insert fit"],
      ],
      note: "Pair the structure with an insert — EVA for a contoured, precise fit, sponge under velvet or satin covering, molded pulp, or a flocked velvet finish — and check the insert with the actual piece in a sample. Choose the exterior wrap and logo finish separately, and review both on the approved sample.",
    },
    faq: [
      { q: "Which box structures can I choose?", a: "Choose a rigid lift-off lid, magnetic flip-top or ribbon-tie closure to suit the jewelry and how it will be presented. Select the exterior wrap, such as faux leather, separately. Confirm the closure, insert and finish on an approved sample." },
      { q: "Which inserts are available?", a: "EVA for a contoured, precise fit; sponge under velvet or satin covering; molded pulp; and flocked or velvet finishes for premium lines. Check the insert with the actual piece in a sample." },
      { q: "What do I send for an accurate quote?", a: "The jewelry dimensions and weight, any certificate or card that must fit inside, the structure and insert, logo artwork and colour reference, the finish, the box quantity and the destination — so the quotation prices one clear specification." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Delivery to the US takes about 8–12 days by air or 15–20 days by sea from Shanghai or Shenzhen, and DDP can be quoted on request. We reply to enquiries within one business day (Mon–Fri, China time)." },
      { q: "Do you sell jewelry boxes wholesale?", a: "Yes, as made-to-order wholesale: every jewelry box is produced to your specification in our own factory, from 200 pieces per design. We do not sell stock boxes off the shelf, so size, wrap, insert and logo are all yours." },
      {
        q: "Where can I buy custom jewelry boxes?",
        a: "Directly from ELAPACK — jewelry boxes are made to order from 200 pieces, not stocked. Send the box structure you have in mind, your product dimensions, quantity and logo artwork for a quotation, and approve a custom sample (USD 30 plus USD 25 shipping, made in 3–5 days) before production.",
      },
    
    ],
    ctaLink: { lead: "Send your piece dimensions, structure, insert and quantity to", anchor: "request a jewelry box quotation", product: "custom-jewelry-boxes" },
    ctaTitle: "Request a quote for your custom jewelry box",
    guideSlugs: [
      "how-to-choose-custom-jewelry-boxes",
      "jewelry-box-inserts-guide",
      "necklace-bracelet-packaging-guide",
      "custom-packaging-samples-guide",
      "custom-packaging-moq-sample-lead-times-2026",
    ],
    relatedPages: [
      { path: "/custom-jewelry-packaging/", label: "Complete jewelry packaging" },
      { path: "/custom-jewelry-pouches/", label: "Jewelry pouches" },
    ],
  },
  {
    slug: "velvet-jewelry-boxes",
    browserTitle: "Custom Velvet Jewelry Boxes with Logo, from 200 pcs | ELAPACK",
    eyebrow: "Velvet Jewelry Boxes",
    h1: "Custom Velvet Jewelry Boxes with Logo",
    subhead:
      "Rigid paperboard jewelry boxes covered in velvet — flocked paper or flocked fabric over a hard box body, with fitted inserts and your branding. Made for rings, necklaces, earrings and bracelets from 200 pieces.",
    metaDescription:
      "Custom velvet jewelry boxes with your logo — rigid paperboard boxes with a flocked velvet surface and fitted inserts. MOQ from 200 pieces, free stock samples.",
    intro:
      "A velvet jewelry box carries its finish on the outside: a rigid paperboard body covered in a soft velvet pile, so the first thing a customer touches is the velvet, not a printed wrap. ELAPACK makes velvet-covered boxes to order for jewelry brands — the same hard box construction as the rest of our jewelry box range, with the covering, colour, insert and branding specified per program and settled on an approved sample before production. This page covers the rigid box; the soft fabric version is our custom velvet pouches range.",
    sections: [
      {
        heading: "Two velvet coverings, one rigid body",
        items: [
          { title: "Flocked paper", desc: "A paper sheet carrying the velvet pile, 157–250 gsm. Light and economical — the standard covering for most velvet box programs, with the paperboard body doing the structural work." },
          { title: "Flocked fabric", desc: "Flocking on a non-woven base, 200–350 gsm and typically 250–300 gsm. Thicker and more elastic in the hand — the usual choice for mid- to high-end boxes." },
          { title: "Choosing between them", desc: "Decide by box tier and hand feel, not by a screen image: pile and shade read differently under retail light. The covering is chosen with the construction and confirmed on the approved sample." },
        ],
      },
      {
        heading: "Velvet boxes by jewelry type",
        items: [
          { title: "Ring & engagement boxes", desc: "The classic velvet format: a hinged box with a single or double slot, where the pile carries the presentation moment.", link: { path: "/products/custom-ring-boxes/", label: "View custom ring boxes" } },
          { title: "Necklace & pendant boxes", desc: "A laid-out cavity with the chain controlled, sized from the piece and its packed arrangement." },
          { title: "Earring boxes", desc: "Fitted pair positions that hold posts and drops in place under a velvet-covered lid." },
          { title: "Bracelet boxes & complete sets", desc: "Compact footprints for the counter and for gifting, or the velvet box specified as one component of a complete program.", link: { path: "/sets/", label: "Explore complete packaging sets" } },
        ],
      },
      {
        heading: "Interiors that match the covering",
        items: [
          { title: "EVA, flocked", desc: "A contoured, precise fit with a flocked, velvet-touch surface, so the interior matches the exterior's hand." },
          { title: "Sponge under velvet", desc: "Soft cushioning covered in velvet or satin, for pieces that sit on a pad rather than in a slot." },
          { title: "Paper-card fitments", desc: "A printed card where copy belongs beside the piece — care notes, certificates or the brand story.", link: { path: "/products/custom-foam-inserts/", label: "Compare custom foam inserts" } },
        ],
      },
      {
        heading: "Colour and branding on velvet",
        items: [
          { title: "Colour matched to your reference", desc: "Velvet colours are matched to your Pantone or physical reference and settled on the physical sample — pile reads differently under retail light than on a screen." },
          { title: "Colour acceptance", desc: "Bulk production is checked against the approved sample at ΔE ≤ 2.0, grey scale grade 4." },
          { title: "Branding on a velvet surface", desc: "Foil stamping, embossing or a printed card inside the lid — the method is specified with the construction in the quotation and confirmed on the sample against the velvet surface, not assumed from paper-wrapped boxes." },
        ],
      },
      {
        heading: "The box and the pouch in one program",
        items: [
          { title: "Velvet pouches", desc: "The same velvet as a soft drawstring, flap, envelope or zipper pouch for storage and travel — produced in one colour, so box and pouch read as a single set.", link: { path: "/products/custom-velvet-pouches/", label: "View custom velvet pouches" } },
          { title: "Complete sets", desc: "The velvet box as the box component of a full program, with pouch, tissue, cards and ribbon in the same colour story. Each component is counted at 200 pieces.", link: { path: "/sets/", label: "Explore complete packaging sets" } },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-ring-boxes",
    ],
    factBlock: {
      updated: "November 2026",
      top: true,
      paragraph:
        "ELAPACK velvet jewelry boxes — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering rigid paperboard boxes with a flocked-paper or flocked-fabric velvet covering, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork. The sample fee is deductible against the confirmed first order. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal. Quotations: a written quotation within 1 business day of your enquiry.",
    },
    table: {
      heading: "Choose a velvet covering",
      columns: ["Covering", "Construction", "Best for", "What to confirm on the sample"],
      rows: [
        ["Flocked paper", "Velvet pile on a paper sheet, 157–250 gsm, over a rigid paperboard body", "Standard velvet box programs; lighter boxes and larger runs", "Shade and pile under retail light; lid fit over the covered body"],
        ["Flocked fabric", "Flocking on a non-woven base, 200–350 gsm (typically 250–300 gsm), over a rigid paperboard body", "Mid- to high-end boxes where hand feel carries the tier", "Hand feel and elasticity; shade against the approved sample"],
      ],
      note: "Both coverings run on the same rigid paperboard body and the same insert range. The covering is chosen with the box tier and confirmed on the approved sample before production.",
    },
    faq: [
      { q: "What is the minimum order for custom velvet jewelry boxes?", a: "200 pieces, custom sizes included. The box body, velvet covering, insert and branding are quoted together as one order; if the velvet box is one component of a set, each component is counted at 200 pieces." },
      { q: "What is the difference between a velvet jewelry box and a velvet pouch?", a: "The box is a rigid paperboard body covered in velvet — it holds its shape, stacks and presents on a counter. The pouch is soft velvet fabric with a drawstring, flap, envelope or zipper closure, made for storage and travel. Brands often order both in the same velvet colour: the box for presentation, the pouch for keeping." },
      { q: "How is this box different from your black and white jewelry boxes?", a: "By its surface. The black box in the range is wrapped in faux leather and the white boxes carry paper wraps; the velvet box is covered in velvet, so its finish is a soft pile in a matched colour rather than a grain or a print. The rigid construction, inserts and ordering terms are the same across the range." },
      { q: "What should I send for a comparable quote?", a: "The jewelry type and dimensions, the packed arrangement and insert, any certificate or card that must fit inside, the velvet colour reference, logo artwork (AI, PDF or PNG) and branding placement, the quantity (minimum 200 pieces), and the delivery country and target date." },
      { q: "How is colour difference controlled?", a: "Bulk production is checked against your approved sample: the acceptance standard is a colour difference of ΔE ≤ 2.0 against the confirmed sample, grey scale grade 4. On velvet, the shade is settled on the physical sample, since pile reads differently under retail light than on a screen." },
      { q: "Can I sample before ordering?", a: "Yes. A custom sample costs USD 30 plus USD 25 shipping, is made in 3–5 days, and the sample fee is deductible against the confirmed first order. A free stock sample carries USD 25 shipping only and typically arrives in 4–7 days. The sample is where the velvet shade and surface are settled — approve it before production rather than working from a screen colour." },
    ],
    guideSlugs: ["how-to-choose-custom-jewelry-boxes"],
    relatedPages: [
      { path: "/custom-jewelry-boxes/", label: "Custom jewelry boxes — all structures and finishes" },
      { path: "/boxes/", label: "Rigid boxes by structure" },
      { path: "/products/custom-velvet-pouches/", label: "Custom velvet pouches — the soft velvet format" },
    ],
    ctaLink: { lead: "Send your jewelry dimensions, velvet colour reference and quantity to", anchor: "request a velvet jewelry box quotation", product: "velvet-jewelry-boxes" },
    ctaTitle: "Request a quote for your velvet jewelry boxes",
  },
  {
    slug: "eyewear-packaging",
    browserTitle: "Custom Eyewear Packaging — Glasses Boxes & Pouches | ELAPACK",
    eyebrow: "Eyewear Packaging",
    h1: "Custom Eyewear Packaging — Boxes & Pouches for Eyewear Brands",
    subhead:
      "Glasses boxes and fabric pouches that protect frames and carry your logo, made to your spec.",
    metaDescription:
      "Custom eyewear packaging — rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes and pouches from 200 pieces. Free stock samples.",
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK eyewear packaging — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering printed glasses boxes, fabric pouches and fitted inserts, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    intro:
      "Custom packaging for eyewear and sunglasses brands selling in the US and Europe. We make both sides of the program — printed boxes that present and protect the frames, and fabric pouches that keep them safe after the sale — matched in colour and branding. Folded glasses set the footprint: share your frame dimensions and we build the box and insert around them.",
    sections: [
      {
        heading: "Eyewear boxes",
        items: [
          { title: "Rigid boxes", desc: "Thick board with a premium feel for flagship frames." },
          { title: "Magnetic flip-top", desc: "A clean open-close ritual for retail and unboxing." },
          { title: "Folding cartons", desc: "Printed paperboard that ships flat — practical and economical." },
        ],
      },
      {
        heading: "Eyewear pouches & sleeves",
        items: [
          { title: "Velvet drawstring", desc: "Plush protection for finished frames and sunglasses." },
          { title: "Faux leather envelope", desc: "Structured snap-closure sleeve that mails flat." },
          { title: "Cotton & microfiber", desc: "Soft, gentle fabrics for everyday case-in-pocket use." },
        ],
      },
      {
        heading: "Branding",
        items: [
          { title: "Logo print & foil", desc: "Silkscreen, hot stamp or foil on box and pouch." },
          { title: "Woven labels & embroidery", desc: "Quiet brand marks stitched into fabric." },
          { title: "Pantone matching", desc: "Box wrap and pouch fabric aligned to your brand colour." },
        ],
      },
      {
        heading: "Choose the format by buyer task",
        items: [
          { title: "Presentation box", desc: "Use a rigid or magnetic format when retail presentation and a fitted insert are the primary jobs. Confirm the folded-frame dimensions, insert contact and opening clearance in a sample." },
          { title: "Everyday pouch", desc: "Use velvet, cotton or microfiber when the packaging should travel with the eyewear. Compare closure, usable opening and contact surface with the actual frames." },
          { title: "Box + pouch program", desc: "Specify the box and pouch as separate components when the retail and after-sale jobs both matter. Confirm the quantity and sample check for each component." },
        ],
      },
      {
        heading: "Send a comparable eyewear packaging RFQ",
        items: [
          { title: "Packed product", desc: "Provide folded-frame dimensions, weight and any cloth, card or accessory that must fit inside." },
          { title: "Format and fit", desc: "State box, pouch or both; preferred opening; insert or lining; and how the packed product will be shipped." },
          { title: "Artwork and order", desc: "Send logo artwork, colour reference, quantity for each component, destination and target date." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "black-leather-jewelry-box",
      "custom-velvet-pouches",
      "custom-microfiber-pouches",
      "leather-envelope-pouch",
    ],
    faq: [
      { q: "Should I order a box, a pouch, or both?", a: "They do different jobs: a rigid or magnetic box presents the frames and holds a fitted insert, while a velvet, cotton or microfiber pouch travels with the eyewear after the sale. Box and pouch are specified and quoted as separate components, each from 200 pieces." },
      { q: "How is the box sized to my frames?", a: "Folded glasses set the footprint. Share your frame dimensions — and any cloth, card or accessory that must fit inside — and the box and insert are built around them; confirm insert contact and opening clearance in a sample." },
      { q: "What branding is available?", a: "Silkscreen, hot stamp or foil on box and pouch, woven labels and embroidery on fabric, and Pantone matching so box wrap and pouch fabric align to your brand colour." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    ctaLink: { lead: "Send your frame dimensions, format and quantity to", anchor: "request an eyewear packaging quotation", product: "custom-microfiber-pouches" },
    ctaTitle: "Request a quote for your eyewear packaging",
    guideSlugs: [
      "custom-glasses-cases-pouches-guide",
      "custom-rigid-boxes-guide",
      "packaging-inserts-guide",
      "custom-logo-pouches-guide",
    ],
  },
  {
    slug: "custom-jewelry-pouches",
    eyebrow: "Jewelry Pouches",
    h1: "Custom Jewelry Pouches & Bags with Your Logo",
    subhead:
      "Velvet, cotton, satin and microfiber jewelry pouches and bags — your fabric, closure, size and branding.",
    metaDescription:
      "Custom jewelry pouches and bags with your logo — velvet, suede, cotton, muslin, satin, linen and microfiber, drawstring, flap or zip, in your size and Pantone colour. MOQ 200 pieces; DDP to the US on request.",
    intro:
      "Fabric jewelry pouches and jewelry bags for brands that want the packaging to feel like part of the piece. Choose the fabric, the closure and the branding; we make each pouch to your spec — from standard 7×9 cm jewelry sizes up to large gift bags. MOQ from 200 pieces, including custom sizes.",
    sections: [
      {
        heading: "Fabrics",
        items: [
          { title: "Velvet", desc: "Dense pile that cushions chains and stones." },
          { title: "Cotton", desc: "Natural, printable and gently protective." },
          { title: "Satin", desc: "A smooth, lustrous finish for gift programs." },
          { title: "Organza", desc: "Sheer, lightweight and gift-ready — organza pouches made to your size, from 200 pieces." },
          { title: "More fabrics", desc: "Suede, muslin, linen, microfiber and non-woven — plus custom developments on request." },
        ],
      },
      {
        heading: "Closures",
        items: [
          { title: "Drawstring", desc: "Cotton, satin or polyester cord, colour-matched." },
          { title: "Flap", desc: "Envelope silhouette with snap or tuck closure." },
          { title: "Zipper & button", desc: "Secure options for heavier or multi-piece sets." },
        ],
      },
      {
        heading: "Clear PVC zip pouches",
        items: [
          { title: "Clear jewelry pouches", desc: "See-through PVC zip bags that show the piece without opening — MOQ from 200 pieces." },
          { title: "Retail & travel uses", desc: "Counter display, travel protection and set organizing in one transparent format." },
        ],
      },
      {
        heading: "Branding",
        items: [
          { title: "Screen printing", desc: "Single to multi-colour prints with water-based inks." },
          { title: "Foil & deboss", desc: "Hot-stamped logos that read premium without noise." },
          { title: "Woven label & embroidery", desc: "Stitched marks inside or outside the pouch." },
          { title: "Pantone matching", desc: "Fabric and cord dyed to your brand colour." },
        ],
      },
      {
        heading: "Sizes",
        items: [
          { title: "Standard band", desc: "From 7×9 cm jewelry pouches up to 30×40 cm gift and wig bags." },
          { title: "Rings and earrings", desc: "7×9 or 8×10 cm (about 2.75×3.5 or 3.1×3.9 in) — one ring, a pair of earrings or small jewelry." },
          { title: "Bracelets and small sets", desc: "10×12 cm (about 3.9×4.7 in) — bracelets and jewelry, plus beauty minis and gift-with-purchase items." },
          { title: "Necklaces", desc: "12×15 or 15×20 cm (about 4.7×5.9 or 5.9×7.9 in) — necklaces and larger pieces, with room for a card or insert." },
          { title: "Travel jewelry pouches", desc: "Closable formats that keep rings, chains and small pieces secure in transit and in luggage — drawstring, flap or zip, sized to your jewelry set." },
          { title: "Any custom size", desc: "Made to your product dimensions, MOQ unchanged." },
        ],
      },
      {
        heading: "Match the pouch to the jewelry",
        items: [
          { title: "Rings and earrings", desc: "Confirm whether each piece needs its own pouch or a card or insert inside; send the packed dimensions before choosing a pouch size." },
          { title: "Chains and necklaces", desc: "Check how the chain is secured and whether the closure keeps it separate from other pieces during handling." },
          { title: "Branding and sample", desc: "Specify fabric, closure, logo method, colour reference and quantity. Approve size, seam and logo on a sample before the order." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Delivery to the US", value: "About 8–12 days by air, 15–20 days by sea; DDP quoted on request" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-velvet-pouches",
      "custom-cotton-pouches",
      "custom-cotton-envelope-pouches",
      "custom-satin-pouches",
      "custom-muslin-drawstring-pouch",
      "custom-microfiber-pouches",
      "leather-envelope-pouch",
      "custom-pvc-bags",
    ],
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK custom jewelry pouches — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering drawstring, flap and zip pouches in velvet, cotton, satin, linen and microfiber, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; delivery to the US takes about 8–12 days by air or 15–20 days by sea, and DDP can be quoted on request. Payment by T/T or PayPal.",
    },
    faq: [
      { q: "What is the difference between a jewelry pouch and a jewelry bag?", a: "Nothing in practice: brands and buyers use both names for the same small fabric pack. We make both as drawstring, flap or zip styles in your fabric and size, from 200 pieces per design." },
      { q: "Which fabrics can a jewelry pouch be made in?", a: "Velvet, suede, cotton, muslin, satin, linen, microfiber, non-woven and organza, plus clear PVC zip pouches. Choose the fabric against the piece it carries, and confirm it on a sample." },
      { q: "What sizes are available?", a: "The standard band runs from 7×9 cm jewelry pouches up to 30×40 cm gift and wig bags, and any custom size is made to your product dimensions at the same 200-piece minimum." },
      { q: "Which closures can I choose?", a: "Drawstring with a cotton, satin or polyester cord, flap with snap or tuck closure, and zipper or button options for heavier or multi-piece sets." },
      { q: "Can a pouch be matched with a jewelry box as a set?", a: "Yes. Pouch and box are designed together — same colour, same branding — and quoted as separate components, each at the 200-piece minimum." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Delivery to the US takes about 8–12 days by air or 15–20 days by sea from Shanghai or Shenzhen, and DDP can be quoted on request. We reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    ctaLink: { lead: "Send your fabric, closure, size and quantity to", anchor: "request a jewelry pouch quotation", product: "custom-velvet-pouches" },
    ctaTitle: "Request a quote for your custom jewelry pouches",
    guideSlugs: [
      "how-to-choose-a-custom-jewelry-pouch",
      "custom-logo-pouches-guide",
      "packaging-colour-tolerance-explained",
      "custom-packaging-moq-sample-lead-times-2026",
    ],
    relatedPages: [
      { path: "/custom-jewelry-packaging/", label: "Complete jewelry packaging" },
      { path: "/custom-drawstring-bags/", label: "Custom drawstring bags" },
      { path: "/custom-jewelry-boxes/", label: "Jewelry boxes" },
    ],
  },
  {
    slug: "custom-wig-packaging",
    browserTitle: "Custom Wig Packaging with Logo — Bags & Boxes | ELAPACK",
    eyebrow: "Wig & Hair Packaging",
    h1: "Custom Wig Packaging — Bags & Boxes",
    subhead:
      "Compare satin bags, presentation boxes and matched sets by actual packed dimensions, intended use and sample fit.",
    metaDescription:
      "Custom wig packaging with logo — compare satin bags, rigid boxes and matched sets by packed dimensions, intended use and sample fit. MOQ from 200 pieces.",
    intro:
      "Custom packaging for wig and hair extension brands selling in the US and Europe. Start with the actual hair product, how it is packed and where the customer first meets it. Then compare a fabric bag for carrying or storage, a box for presentation, or both as separate components. Photography of our wig packaging is in progress; request a sample and check the interior contact, usable opening, closure and packed fit with your product before production.",
    sections: [
      {
        heading: "Wig bags",
        items: [
          { title: "Satin drawstring bag", desc: "Provide the packed hair dimensions and intended use, then confirm the satin, usable opening, closure and interior contact on a sample." },
          { title: "Cotton envelope pouches", desc: "Structured cotton carriers in flap-snap, flat-pocket and zip-envelope styles — from 200 pieces." },
          { title: "Sized to your format", desc: "Quote the finished size from the actual folded or arranged product rather than assuming one size is universal." },
          { title: "Travel & storage bags", desc: "Larger formats with cord or zipper closures for storage and travel programs." },
        ],
      },
      {
        heading: "Boxes & cases",
        items: [
          { title: "Rigid wig boxes", desc: "Structured boxes that present wigs and extensions upright at retail." },
          { title: "Hair extension boxes", desc: "Sleeve, drawer and magnetic boxes made to bundle formats — MOQ from 200 pieces." },
          { title: "Magnetic flip-top", desc: "A clean open-close ritual for premium hair programs." },
          { title: "Inserts & sleeves", desc: "Fitted inserts and satin sleeves that hold the presentation in place." },
        ],
      },
      {
        heading: "Branding",
        items: [
          { title: "Logo print & label", desc: "Silkscreen, heat transfer or woven label on bag and box." },
          { title: "Pantone matching", desc: "Satin and box wrap aligned to your brand colour." },
          { title: "Hang tags & cards", desc: "Care instructions and brand cards bundled with the bag." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-satin-wig-bag",
      "custom-cotton-envelope-pouches",
      "custom-hair-extension-boxes",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
    ],
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK custom wig packaging — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering satin drawstring bags, cotton envelope pouches, rigid wig boxes and hair extension boxes, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    table: {
      heading: "Choose a wig packaging format",
      columns: ["Format", "Best for", "What to confirm on the sample"],
      rows: [
        ["Satin drawstring bag", "Carrying and storage", "Packed hair dimensions, usable opening, closure and interior contact"],
        ["Cotton envelope pouch", "Structured carry — flap-snap, flat-pocket and zip-envelope styles", "Style and fit with the hair product inside"],
        ["Rigid wig box", "Presenting wigs and extensions upright at retail", "Presentation fit, and insert or sleeve hold"],
        ["Magnetic flip-top box", "Premium hair programs", "Closure alignment and the open-close feel"],
        ["Bag + box as a set", "Retail presentation plus after-sale carry", "Each component's fit and quantity, quoted separately"],
      ],
      note: "Quote the finished size from the actual folded or arranged product rather than assuming one size is universal.",
    },
    faq: [
      { q: "Should I choose a bag, a box, or both?", a: "Start with the actual hair product, how it is packed and where the customer first meets it: a fabric bag serves carrying and storage, a box serves presentation, and the two can be ordered as separate components of one program. Confirm interior contact, usable opening, closure and packed fit with your product on a sample." },
      { q: "Is wig packaging made to order?", a: "Yes — sizes are quoted from the actual folded or arranged product, not from a universal size. The minimum order is 200 pieces per product or component." },
      { q: "Can the bag and box carry the same branding?", a: "Yes. Silkscreen, heat transfer or woven label on bag and box, with satin and box wrap Pantone-matched to your brand colour; hang tags and care cards can be bundled with the bag." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days. Use the sample to check interior contact, usable opening, closure and packed fit with your product." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    ctaLink: { lead: "Send your packed hair dimensions, format and quantity to", anchor: "request a wig packaging quotation", product: "custom-satin-wig-bag" },
    ctaTitle: "Request a quote for your custom wig packaging",
    guideSlugs: [
      "custom-wig-packaging-guide",
      "custom-hair-extension-packaging-guide",
      "hair-extension-packaging-ideas",
    ],
  },
  {
    slug: "custom-jewelry-packaging",
    eyebrow: "Jewelry Packaging",
    h1: "Custom Jewelry Packaging — Boxes, Pouches & Display",
    subhead:
      "One manufacturer for the whole jewelry program — logo boxes, fabric pouches, display and sets, matched in colour and branding.",
    metaDescription:
      "Custom jewelry packaging from one manufacturer — logo jewelry boxes, velvet, satin and cotton pouches, display sets and complete box-plus-pouch programs. Boxes and pouches from 200 pieces. Free stock samples.",
    factBlock: {
      updated: "November 2026",
      top: true,
      paragraph:
        "ELAPACK jewelry packaging — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component — for a box-plus-pouch set, each component is counted at its own quantity, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping (sample fee deductible against your confirmed first order), is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal. Quotations: a written quotation within 1 business day of your enquiry.",
    },
    intro:
      "Jewelry brands rarely need just a box. The retail moment needs a fitted box, the after-sale needs a pouch, the counter needs display — and they all read better when they match. ELAPACK makes all sides of the jewelry program in-house: rigid and magnetic boxes with your logo, fabric pouches in seven materials, and velvet display sets — colour-matched and branded as one system.",
    sections: [
      {
        heading: "Jewelry boxes",
        items: [
          { title: "Rigid lift-off & magnetic", desc: "Gift-ready structures with fitted inserts for rings, earrings, necklaces and bracelets." },
          { title: "Ring & engagement boxes", desc: "Single or double slots with velvet cushions, made for the proposal moment." },
          { title: "Faux leather & wrapped", desc: "Textured wraps with embossed branding for premium lines." },
        ],
      },
      {
        heading: "Jewelry pouches",
        items: [
          { title: "Velvet & satin", desc: "Plush and lustrous gift pouches in your Pantone colour." },
          { title: "Cotton, muslin & linen", desc: "Natural weaves for artisan and everyday-carrier programs." },
          { title: "Microfiber", desc: "Pouches that clean as they carry — the after-sale companion." },
        ],
      },
      {
        heading: "Display & presentation",
        items: [
          { title: "Velvet display sets", desc: "Busts, T-bars, ring cones and cushions cut from one matched velvet." },
          { title: "Counter & showcase", desc: "Modular pieces that turn a counter into a coherent brand moment." },
        ],
      },
      {
        heading: "Complete programs",
        items: [
          { title: "Box + pouch sets", desc: "Both pieces designed together — same colour, same branding, one PO." },
          { title: "Retail to unboxing", desc: "Display at the counter, box at purchase, pouch after — one visual language." },
        ],
      },
      {
        heading: "Plan a jewelry packaging order",
        items: [
          { title: "Choose the components", desc: "List the box, pouch and any retail display separately. A box-plus-pouch set starts at 200 pieces of each component; confirm each quantity in the quotation." },
          { title: "Check the fit", desc: "Send the jewelry dimensions and how each piece is held or displayed. Check box insert and pouch size with the actual jewelry at sampling." },
          { title: "Align the branding", desc: "Share logo artwork and colour references for every component, then approve the assembled presentation before production." },
          { title: "Send artwork in AI, PDF or PNG", desc: "One artwork set covers every component of the program. Colour is approved on physical samples against one shared reference, and bulk output is checked against the approved sample to ΔE ≤ 2.0 and grey scale grade 4, so box, pouch and display match as one set." },
          { title: "Request a comparable quote", desc: "Include component quantities, dimensions, materials, branding method, delivery country and target date." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "black-leather-jewelry-box",
      "custom-white-jewelry-box",
      "custom-ring-boxes",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-velvet-pouches",
      "custom-cotton-pouches",
      "leather-envelope-pouch",
      "velvet-necklace-display",
      "acrylic-earring-display",
      "stackable-jewelry-tray",
      "velvet-jewelry-display-set",
    ],
    faq: [
      { q: "Can I order the box and pouch from one supplier as one program?", a: "Yes. ELAPACK makes the boxes, pouches and display in-house, designed together — same colour, same branding, one order. Each component is quoted at its own quantity, from 200 pieces per product or component." },
      { q: "What can a jewelry packaging program include?", a: "Rigid and magnetic logo boxes, fabric pouches in velvet, satin, cotton, muslin, linen and microfiber, and velvet display sets for the counter — matched as one system from retail display to unboxing." },
      { q: "How is the fit checked?", a: "Send the jewelry dimensions and how each piece is held or displayed, then check the box insert and pouch size with the actual jewelry at sampling, before production." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
      { q: "What artwork should I send for custom jewelry packaging, and how is colour approved?", a: "Send logo artwork in AI, PDF or PNG, with a Pantone or physical colour reference for each component. A program mixes board, fabric and velvet, and every piece of custom packaging for jewelry in the set — box, pouch and display — is approved against the same reference on physical samples before production. Bulk output is then checked against the approved sample to ΔE ≤ 2.0 and grey scale grade 4." },
    ],
    ctaLink: { lead: "Send your component list, dimensions and quantities to", anchor: "request a jewelry packaging quotation", product: "custom-jewelry-packaging" },
    ctaTitle: "Request a quote for your jewelry packaging program",
    guideSlugs: [
      "how-to-choose-custom-jewelry-boxes",
      "how-to-choose-a-custom-jewelry-pouch",
      "custom-packaging-samples-guide",
      "custom-packaging-moq-sample-lead-times-2026",
    ],
    relatedPages: [
      { path: "/custom-jewelry-boxes/", label: "Compare jewelry boxes" },
      { path: "/velvet-jewelry-boxes/", label: "Velvet jewelry boxes" },
      { path: "/custom-jewelry-pouches/", label: "Compare jewelry pouches" },
      { path: "/sets/", label: "Specify a complete packaging set" },
    ],
  },
  {
    slug: "custom-gift-boxes",
    eyebrow: "Gift Boxes",
    h1: "Custom Gift Boxes with Logo",
    subhead:
      "Magnetic, ribbon-tie and two-piece rigid gift boxes — plus candle-ready formats — your size, finish and logo.",
    metaDescription:
      "Custom gift boxes with your logo — magnetic closure, satin ribbon-tie and two-piece rigid boxes in any size and finish, including candle jar and tin formats. MOQ from 200 pieces, free stock samples.",
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK custom gift boxes — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering magnetic flip-top, satin ribbon-tie, two-piece rigid and candle-format boxes, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    intro:
      "Custom gift boxes for the occasions where the box is part of the gift. Corporate programs, candles, weddings, retail gifting and seasonal campaigns all start from the same place: a rigid structure that protects, a wrap that carries your brand, and a closure that makes opening feel like an event. Magnetic flip-tops, satin ribbon ties and two-piece rigid formats are all made to your size, Pantone colour and logo — MOQ from 200 pieces.",
    sections: [
      {
        heading: "Magnetic closure gift boxes",
        items: [
          { title: "Flip-top magnetic", desc: "Hidden magnets, clean exterior, a satisfying slow close — the corporate-gift standard." },
          { title: "Any footprint", desc: "From small jewelry and accessory sizes to large presentation formats." },
        ],
      },
      {
        heading: "Ribbon-tie luxury boxes",
        items: [
          { title: "Satin ribbon closure", desc: "Double-face satin that becomes part of the unboxing ritual." },
          { title: "Foil & embossing", desc: "Metallic foil and raised relief marks for premium programs." },
        ],
      },
      {
        heading: "Two-piece & structure options",
        items: [
          { title: "Two-piece rigid", desc: "Full-height lift-off lid over a rigid base — the premium gift structure." },
          { title: "Drawer & book-style", desc: "Structures made to your product and occasion, on request.", link: { path: "/products/custom-rigid-drawer-box/", label: "View custom rigid drawer boxes" } },
        ],
      },
      {
        heading: "Candle gift boxes",
        items: [
          { title: "Jar & tin formats", desc: "Rigid boxes sized to your candle jars and travel tins, with inserts that hold glass steady." },
          { title: "Gifting-ready finish", desc: "Matte and soft-touch wraps that suit candle and home-scent programs." },
        ],
      },
      {
        heading: "Occasions",
        items: [
          { title: "Corporate gifting", desc: "Inserts, lids and ribbons that carry a logo quietly and well." },
          { title: "Weddings & events", desc: "Favor and gift formats across every size band." },
          { title: "Retail & shoe gifting", desc: "Gift shoe boxes and retail-ready formats made to your product." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-white-jewelry-box",
      "black-leather-jewelry-box",
    ],
    faq: [
      { q: "Which gift box structures do you make?", a: "Magnetic flip-top, satin ribbon-tie and two-piece rigid boxes in any size and finish, with drawer and book-style structures made on request." },
      { q: "Can a gift box be sized to my candle jar or tin?", a: "Yes — jar and tin formats are part of the range, with inserts that hold glass steady. Share the vessel dimensions and confirm the fit on a sample." },
      { q: "Which occasions do the boxes serve?", a: "Corporate gifting programs, weddings and events, and retail and shoe gifting — inserts, lids and ribbons carry your logo quietly across every size band." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
      {
        q: "Where can I buy custom gift boxes?",
        a: "Directly from ELAPACK — gift boxes are made to order from 200 pieces, not stocked. Choose the structure, send your product dimensions, quantity and logo artwork for a quotation, and approve a custom sample (USD 30 plus USD 25 shipping, made in 3–5 days) before production.",
      },
    
    ],
    relatedPages: [{ path: "/custom-candle-boxes/", label: "rigid candle boxes" }],
    ctaLink: { lead: "Send your product size, structure, finish and quantity to", anchor: "request a gift box quotation", product: "magnetic-closure-gift-box" },
    ctaTitle: "Request a quote for your custom gift boxes",
    guideSlugs: [
      "magnetic-gift-boxes-wholesale-guide",
      "apparel-gift-boxes-guide",
      "custom-gift-packaging-guide",
      "valentines-day-packaging-timeline",
      "custom-packaging-samples-guide",
    ],
  },
  {
    slug: "custom-candle-boxes",
    eyebrow: "Candle Packaging",
    h1: "Custom Candle Boxes — Rigid Formats and Inserts",
    subhead:
      "Review rigid, magnetic and sleeve box options for candle jars and travel tins; confirm vessel fit, insert and finish on a sample.",
    metaDescription:
      "Custom candle box options for jars and tins. Review structure, insert fit and finish on a sample. General MOQ 200 pieces; confirm project scope in the quote.",
    intro:
      "For a candle-box enquiry, send the jar or tin dimensions, packed weight, intended display and shipping route. ELAPACK can review a box and insert concept against that brief; confirm the proposed structure and fit on a loaded sample. Transit suitability depends on the complete shipping pack and route checks. Stock samples are free, with shipping charged separately; confirm the available structure and schedule in the quotation.",
    sections: [
      {
        heading: "Box structures",
        items: [
          { title: "Rigid lift-off lid", desc: "Review a lid-and-base structure for the vessel and intended presentation." },
          { title: "Magnetic flip-top", desc: "Review closure fit and opening access on a loaded sample." },
          { title: "Sleeve & drawer", desc: "Ask whether a sliding tray suits the vessel, insert and packing process." },
          { title: "Folding carton", desc: "Compare a flat-stored paperboard option where the project allows it." },
        ],
      },
      {
        heading: "Inserts for jars and tins",
        items: [
          { title: "Contoured EVA", desc: "A candidate material; confirm cut geometry, availability and fit on the proposed sample." },
          { title: "Molded pulp", desc: "A candidate formed-fibre option; confirm tooling, specification and availability." },
          { title: "Segmented board", desc: "Discuss dividers against the actual contents and usable box interior." },
          { title: "Sponge & velvet", desc: "Discuss contact surfaces and appearance against the actual vessel." },
        ],
      },
      {
        heading: "Finishes & branding",
        items: [
          { title: "Matte & soft-touch wraps", desc: "Review the proposed wrap and finish on a physical sample." },
          { title: "Foil & embossing", desc: "Confirm availability and placement for the selected construction and artwork." },
          { title: "Full-print branding", desc: "Confirm which print and finish methods suit the selected materials." },
          { title: "Colour reference", desc: "Provide the brand reference and approve the proposed component samples." },
        ],
      },
      {
        heading: "Candle programmes",
        items: [
          { title: "Single-jar retail", desc: "Specify the vessel dimensions and review the proposed box and insert." },
          { title: "Gift sets & two-packs", desc: "Specify every component and confirm fit and quantity per component." },
          { title: "Travel tins", desc: "Confirm the tin dimensions and usable interior before artwork approval." },
          { title: "Subscription monthly", desc: "Confirm each theme, component quantity and schedule in the project quotation." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
    ],
    faq: [
      { q: "What should I send for a candle box quote?", a: "The jar or tin dimensions, packed weight, intended display and shipping route. The box and insert concept is reviewed against that brief, and the structure and fit are confirmed on a loaded sample." },
      { q: "Which structures and inserts can be reviewed?", a: "Rigid lift-off lid, magnetic flip-top, sleeve and drawer, and folding carton structures. Contoured EVA, molded pulp, segmented board, and sponge or velvet inserts are candidate options — confirm cut geometry, availability and fit on the proposed sample." },
      { q: "What is the minimum order?", a: "200 pieces per product or component. For a gift set or two-pack, every component and variant is confirmed in the project quotation." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    ctaLink: { lead: "Send your jar or tin dimensions, packed weight and quantity to", anchor: "request a candle box quotation", product: "magnetic-closure-gift-box" },
    ctaTitle: "Request a quote for your custom candle boxes",
    factBlock: {
      updated: "November 2026",
      paragraph:
        "Minimum order quantity is 200 pieces per product or component; for a complete set, each component has a 200-piece minimum. Confirm structure, insert, size and design or colour allocation in the project quotation. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping, with a stated delivery timeframe of 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork. Finished orders ship from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    guideSlugs: [
      "custom-candle-boxes-guide",
      "candle-box-inserts-guide",
      "luxury-candle-boxes-guide",
      "candle-packaging-guide",
      "candle-subscription-box-packaging",
    ],
  },
  {
    slug: "custom-cosmetic-packaging",
    eyebrow: "Cosmetic & Beauty Packaging",
    h1: "Custom Cosmetic Packaging Boxes",
    subhead:
      "Boxes and pouches for beauty brands — eyelash and press-on nail packaging, gift boxes and cosmetic pouches with your logo.",
    metaDescription:
      "Custom cosmetic packaging boxes and pouches for beauty brands, including eyelash and press-on nail packaging. MOQ starts at 200 pieces.",
    intro:
      "Explore custom boxes and pouches for beauty brands, including eyelash packaging, press-on nail packaging, gift boxes and pouches. Share your product dimensions, quantity, branding and destination so we can review suitable options and prepare a quote.",
    sections: [
      {
        heading: "Beauty gift & retail boxes",
        items: [
          { title: "Magnetic & rigid gift boxes", desc: "Structures sized to cosmetic formats — from single items to curated sets." },
          { title: "Branding and finish", desc: "Share your artwork and preferred finish. Confirm printing method, placement and finishing options in the quotation and sample." },
        ],
      },
      {
        heading: "Eyelash packaging",
        items: [
          { title: "From 200 pieces", desc: "Eyelash packaging starts at 200 pieces per product or component. Confirm artwork and colour allocation in the quotation." },
          { title: "Tray fit first", desc: "Share the lash tray or product dimensions and confirm box size and fitted tray insert with the sample. The eyelash box product page and guide linked below carry the full specification." },
        ],
      },
      {
        heading: "Press-on nail packaging",
        items: [
          { title: "Set and tray dimensions", desc: "Share the number of nail sets, tray dimensions and any accessories that must fit inside, and confirm tray retention and the opening sequence with the actual nail set in a sample." },
          { title: "Shade identification", desc: "Provide the artwork and information hierarchy buyers need to identify the set without opening the box. The press-on nail box product page and guides linked below carry the full detail." },
        ],
      },
      {
        heading: "Matched pouches & bags",
        items: [
          { title: "Fabric pouches", desc: "Fabric pouches matched to the box program in colour and branding; discuss fabric, closure and size for your project. The cosmetic pouches page linked below carries the full style and fabric comparison." },
          { title: "Clear PVC zip bags", desc: "Clear zip pouches as part of the same matched program; confirm the material, closure and quantity in the quotation." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-eyelash-packaging-boxes",
      "custom-press-on-nail-boxes",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-cotton-pouches",
    ],
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK custom cosmetic packaging — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering magnetic and rigid cosmetic boxes, with eyelash and press-on nail boxes as beauty sub-lines, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    faq: [
      { q: "What does this page cover?", a: "Custom boxes for beauty brands — magnetic and rigid gift boxes sized to cosmetic formats, from single items to curated sets — with eyelash and press-on nail boxes as beauty sub-lines and pouches matched to the same program." },
      { q: "Do you make eyelash and press-on nail boxes?", a: "Yes. Both are beauty sub-lines, made to order from 200 pieces per product or component. Share the tray dimensions and check the fit with the actual product in a sample; their product pages and guides are linked on this page." },
      { q: "Can boxes and pouches be ordered as one matched program?", a: "Yes. Box, pouch and card components are specified together and colour-matched to one reference, and the 200-piece minimum applies to each component. Fabric and clear PVC pouch options sit on the cosmetic pouches page." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    ctaLink: { lead: "Send your product dimensions, quantity, artwork and destination to", anchor: "request a cosmetic packaging quotation", product: "magnetic-closure-gift-box" },
    relatedPages: [
      { path: "/products/custom-eyelash-packaging-boxes/", label: "Eyelash packaging boxes — product page" },
      { path: "/news/how-to-customize-eyelash-boxes/", label: "How to customize eyelash boxes — guide" },
      { path: "/products/custom-press-on-nail-boxes/", label: "Press-on nail boxes — product page" },
      { path: "/news/press-on-nail-packaging-guide/", label: "Press-on nail packaging — guide" },
      { path: "/custom-cosmetic-pouches/", label: "Cosmetic pouches & makeup bags" },
      { path: "/custom-wig-packaging/", label: "Wig packaging — bags & boxes" },
    ],
    ctaTitle: "Request a quote: share your product dimensions, quantity, artwork and destination",
    guideSlugs: [
      "custom-cosmetic-bags-guide",
      "custom-cosmetic-packaging-guide",
      "how-to-customize-eyelash-boxes",
      "press-on-nail-packaging-guide",
      "beauty-subscription-box-contents",
    ],
  },
  {
    slug: "custom-drawstring-bags",
    eyebrow: "Drawstring Bags",
    h1: "Custom Drawstring Bags & Pouches",
    subhead:
      "Custom drawstring bags and pouches, made to your product's size and printed with your logo, for jewelry, beauty, fragrance, eyewear, fashion and gift brands. Choose cotton, muslin, velvet, satin or linen, a cord to match, and a logo method that suits the fabric. Every bag is made to order from 200 pieces per design, with a custom sample in 3–5 days and production in 15–20 days.",
    metaDescription:
      "Custom drawstring bags and pouches for jewelry, beauty and gift brands — cotton, velvet, satin, muslin or linen, printed, foiled or embroidered with your logo. Made to your size from 200 pcs; DDP to the US.",
    intro:
      "Drawstring bags can serve gift, jewellery and storage briefs. Compare cotton, velvet, satin, muslin or linen against the actual product and required opening. Send the item dimensions, target bag size, artwork and quantity; confirm the fabric, size and feasible logo method in the quotation and sample. General MOQ starts at 200 pieces for applicable projects; design and colour allocation are confirmed by order. We make fabric drawstring pouches and dust bags for product packaging; we do not make drawstring backpacks or promotional gym sacks.",
    sections: [
      {
        heading: "Cotton drawstring bags",
        items: [
          { title: "Cotton pouch option", desc: "Review cotton fabric, dimensions and the proposed logo method for gift, beauty, jewelry or retail use." },
          { title: "Size and quantity", desc: "Specify the item and proposed bag dimensions; confirm availability and quantity allocation in the quote." },
        ],
      },
      {
        heading: "Fabric options",
        items: [
          { title: "Cotton & muslin", desc: "Natural weaves with an honest, printable face — the volume formats." },
          { title: "Velvet & satin", desc: "Plush and lustrous carriers for gifting, jewelry and fragrance programs." },
          { title: "Linen & blends", desc: "Textured, matte natural fabrics for artisan and premium natural lines." },
        ],
      },
      {
        heading: "Dust bag applications",
        items: [
          { title: "Handbag dust bags", desc: "Discuss fabric, dimensions and contact requirements for the actual handbag; review fit on a sample." },
          { title: "Shoe dust bags", desc: "Specify the pair dimensions, closure and logo placement; confirm the proposed fabric and fit." },
        ],
      },
      {
        heading: "Gift & specialty bags",
        items: [
          { title: "Gift bag formats", desc: "Provide artwork and a colour reference; approve the proposed decoration on a sample." },
          { title: "Wig & hair bags", desc: "Review the packed item dimensions, interior contact and closure on a sample." },
        ],
      },
      {
        heading: "How a custom drawstring bag order works",
        items: [
          { title: "1. Send your brief", desc: "Product size, fabric, quantity and logo. We reply with a written quote within one business day." },
          { title: "2. Approve a sample", desc: "A custom sample with your logo in 3–5 days (USD 30 plus USD 25 shipping, deducted from your first order). A free stock sample is also available for USD 25 shipping." },
          { title: "3. Production", desc: "15–20 days for 200–20,000 pieces, 30–35 days for 20,000–50,000, after sample approval and payment." },
          { title: "4. Delivery to the US", desc: "About 8–12 days by air or 15–20 days by sea from Shanghai or Shenzhen. We can quote DDP (duties paid) to your address." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
      { label: "Delivery to the US", value: "About 8–12 days by air, 15–20 days by sea; DDP quoted on request" },
      { label: "Quotation", value: "Written quotation within one business day" },
    ],
    productSlugs: [
      "custom-cotton-pouches",
      "custom-velvet-pouches",
      "custom-satin-pouches",
      "custom-muslin-drawstring-pouch",
      "custom-satin-wig-bag",
    ],
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK custom drawstring bags — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering cotton, muslin, velvet, satin and linen drawstring bags, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment. Delivery to the US takes about 8–12 days by air or 15–20 days by sea, and DDP can be quoted on request. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    table: {
      heading: "Choose a fabric for your drawstring bag",
      columns: ["Fabric", "Best for", "What to confirm on the sample"],
      rows: [
        ["Cotton & muslin", "Gift, beauty, jewelry and retail programs — a natural, printable face", "Fabric, finished size and the proposed logo method"],
        ["Velvet & satin", "Gifting, jewelry and fragrance programs", "Interior contact with the product, usable opening and cord finish"],
        ["Linen & blends", "Artisan and premium natural lines", "Texture, finished size and logo method on the sample"],
      ],
      note: "Sizes are quoted from the item dimensions — confirm the usable opening with the actual product in the bag before production.",
    },
    table3: {
      heading: "Which logo method works on which fabric?",
      intro: [
        "The fabric decides how a logo looks and how long it lasts. We confirm the method on a physical sample before production.",
      ],
      columns: ["Fabric", "Most common logo methods", "Best for"],
      rows: [
        ["Cotton", "Silkscreen, full-colour digital print, hot stamp, woven label, embroidery", "Printed logos and multi-colour artwork; natural, eco look"],
        ["Muslin", "One-colour silkscreen", "Light, low-cost pouches for soaps, favours, samples"],
        ["Velvet", "Silkscreen, debossing, gold or silver hot stamp, embroidery", "Jewelry and premium gifts; foil and deboss read well on the pile"],
        ["Satin", "Silkscreen, embroidery", "Fragrance, hair and lingerie; smooth, glossy finish"],
        ["Linen", "Silkscreen", "Textured, matte natural look"],
      ],
      note: "Send vector artwork (AI, EPS or PDF); Pantone matching is available on request.",
    },
    table2: {
      heading: "What size drawstring bag do you need?",
      intro: [
        "Start from the product, not from a stock bag. Measure the item as it will actually be packed — width, height and depth at the widest points, including caps, handles, straps and any inner box, insert or tissue. A flat pouch has to cover half the item's perimeter, so as a starting estimate, bag width is the item width plus its depth, plus about 2–3 cm of ease for seams and easy insertion. For a round item such as a perfume bottle, use about 1.6 times the diameter instead of width plus depth. Bag height is the item height plus about 3–5 cm on small pouches, or about 5–8 cm on large dust bags, to leave room for the drawstring channel and the gathered opening.",
        "These figures are starting points for a quotation, not production sizes. The final size is set from the pattern for your fabric and closure, and confirmed on a sample with the actual item inside. Worked example — a perfume bottle of 4.5 cm diameter and 11 cm tall: width 4.5 × 1.6 ≈ 7.2 cm, plus 2.5 cm of ease gives about 10 cm; height 11 cm plus 4 cm for the closure gives 15 cm — start from a 10 × 15 cm pouch.",
      ],
      columns: ["Packed item", "Common bag sizes, width × height (cm)", "Notes"],
      rows: [
        ["Jewelry", "5 × 7 · 7 × 9 · 8 × 10 · 9 × 12 · 10 × 12 · 10 × 15 · 12 × 15 · 13 × 18 · 15 × 20", "ELAPACK's regular velvet pouch sizes are 8 × 10, 10 × 12 and 12 × 15 cm; every size is made to order"],
        ["Eyewear", "9 × 18 for standard frames and sunglasses · 10 × 19 for oversized frames", "Size from the folded frame, including its case if the case is packed inside"],
        ["Fragrance & cosmetics", "Samples 8 × 10 · 9 × 12; smaller bottles 12 × 16 · 13 × 18; 100 ml bottles 15 × 20 · 15 × 23", "Bottle shapes vary more than volumes — size from the bottle, not the ml; tall bottles often need a 3–5 cm bottom gusset to stand"],
        ["Shoes", "Single shoe 21 × 36 · 25 × 42; one bag per pair 30 × 40 · 35 × 45; ankle boots 30 × 48 · 42 × 48; tall boots 45 × 60", "One bag per pair is the economical default; one per shoe keeps the pair separated. Measure boot height before choosing"],
        ["Handbags & bags", "Small 25 × 25 · 25 × 30; medium 30 × 35 · 35 × 40 · 40 × 40 · 40 × 50; large 50 × 55 · 55 × 60 · 50 × 65; extra large 70 × 60", "Allow for depth, straps, chains and hardware as packed, not as displayed"],
      ],
      note: "Reference sizes from standard supplier ranges — a starting point for your enquiry, not a stock list; every ELAPACK bag is made to your dimensions. For handbag and shoe dust bags used for long-term storage, fabric contact and storage checks matter as much as size; the related guides below include our custom dust bags guide. Whichever size you start from, approve it on a sample with the actual item inside before production.",
    },
    faq: [
      { q: "Are your drawstring bags stocked or made to order?", a: "Made to order. Every bag is made to your specification — fabric, size, cord and logo — and nothing is a stock style. The minimum order is 200 pieces per product or component." },
      { q: "Which fabric should I choose?", a: "Cotton and muslin are the natural, printable volume formats; velvet and satin suit gifting, jewelry and fragrance programs; linen and blends give a textured, matte natural face. Confirm the fabric, size and feasible logo method in the quotation and on the sample." },
      { q: "Can drawstring bags work as dust bags for handbags and shoes?", a: "Yes. Share the handbag or shoe pair dimensions, closure and logo placement, and review the proposed fabric and fit on a sample with the actual item inside." },
      { q: "Can a drawstring bag be paired with a box as a set?", a: "Yes. The bag and box are specified as separate components of one program, colour-matched to your reference; the 200-piece minimum applies to each component." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Delivery to the US takes about 8–12 days by air or 15–20 days by sea from Shanghai or Shenzhen, and DDP can be quoted on request. We reply to enquiries within one business day (Mon–Fri, China time)." },
      {
        q: "What size drawstring bag do I need for my product?",
        a: "Measure the product as packed — width, height and depth — then start from a bag width of item width plus depth plus about 2–3 cm of ease, and an item height plus 3–5 cm on small pouches or 5–8 cm on large dust bags for the drawstring channel. The size table above gives common starting sizes by product type. Send us the dimensions with your enquiry and we will confirm the size on a sample with the actual item inside before production.",
      },
      {
        q: "Where can I buy custom drawstring bags?",
        a: "Directly from ELAPACK — the bags are made to order from 200 pieces, in your fabric, size and logo. Send the fabric, dimensions, quantity and artwork for a quotation, and approve a custom sample (USD 30 plus USD 25 shipping, made in 3–5 days) before production.",
      },
      { q: "Can you print custom drawstring bags with my logo?", a: "Yes. Depending on the fabric we offer silkscreen, full-colour digital print, gold or silver hot stamp, debossing — the logo pressed into the fabric, the finish many buyers ask for as 'embossing' — woven labels and embroidery — silkscreen works on every fabric we make. Send your logo as a vector file and we confirm the method on a sample before production." },
      { q: "How much do custom drawstring bags cost?", a: "Unit price depends on fabric, size, logo method, colours and quantity; larger runs lower the unit price. Send your size, fabric and quantity and we return a written quote within one business day." },
      { q: "Can you deliver custom drawstring bags to the US with duties paid?", a: "Yes. We ship from Shanghai or Shenzhen by air (about 8–12 days) or sea (about 15–20 days), and can quote DDP so duties and customs clearance are handled before the bags reach you." },
      { q: "Do you make drawstring backpacks?", a: "No. We make drawstring pouches, gift bags and dust bags for product packaging, from 200 pieces per design." },
    
    ],
    ctaLink: { lead: "Send your item dimensions, fabric, target size and quantity to", anchor: "request a drawstring bag quotation", product: "custom-cotton-pouches" },
    ctaTitle: "Request a quote for your custom drawstring bags",
    guideSlugs: [
      "custom-dust-bags-guide",
      "how-to-choose-custom-drawstring-bags",
      "custom-clothing-apparel-packaging-guide",
      "velvet-satin-muslin-pouches-compared",
    ],
    relatedPages: [
      { path: "/pouches-bags/", label: "Compare all custom fabric pouches and bags" },
      { path: "/custom-jewelry-pouches/", label: "Custom jewelry pouches — drawstring and flap formats by jewelry type" },
    ],
  },
  {
    slug: "ribbons-accessories",
    eyebrow: "Ribbons & Accessories",
    h1: "Custom Printed Ribbons & Packaging Accessories",
    subhead:
      "Ribbons, cords and finishing accessories that complete your box and pouch programs — matched to your brand.",
    metaDescription:
      "Custom printed ribbons and packaging accessories — satin ribbon closures, logo-printed ribbon programs, cotton cords and drawstrings matched to your ELAPACK box and pouch programs.",
    intro:
      "Boxes and pouches rarely ship alone. The ribbon on a gift box, the cord that closes a pouch and the finishing accessories around them are what make packaging read as one program. ELAPACK supplies ribbons, cords and accessories as part of your box and pouch programs — colour-matched to the packaging they finish, and quoted together with it.",
    sections: [
      {
        heading: "Ribbons",
        items: [
          { title: "Satin ribbon closures", desc: "Double-face satin ribbon ties for rigid and gift boxes — part of the unboxing ritual." },
          { title: "Custom printed ribbon", desc: "Logo printing on ribbon programs — quoted to your width, artwork and run length." },
          { title: "Colour matching", desc: "Ribbon colours aligned to your box wrap and Pantone reference." },
        ],
      },
      {
        heading: "Cords & drawstrings",
        items: [
          { title: "Cotton cords", desc: "The standard drawcord for cotton, muslin and linen pouches." },
          { title: "Satin ribbon & polyester cord", desc: "Alternative draw finishes matched to the pouch fabric." },
        ],
      },
      {
        heading: "As part of your program",
        items: [
          { title: "One supplier", desc: "Ribbon, cord, box and pouch quoted and made together — one brand system, not matched after the fact." },
          { title: "Standalone accessory orders", desc: "Ribbons and cords quoted by spec — MOQ 500 m for standalone ribbon orders (ribbon is sold by length)." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "500 m for standalone ribbon orders (ribbon is sold by length); ribbon supplied with a box or pouch program is quoted as part of that program" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-tissue-paper",
      "custom-hang-tags",
      "custom-foam-inserts",
      "luxury-gift-box-ribbon",
      "magnetic-closure-gift-box",
      "custom-velvet-pouches",
    ],
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK ribbons & accessories — key facts, current as of November 2026. Ribbons, cords and finishing accessories are supplied as part of box and pouch programs, colour-matched to the packaging they finish; standalone ribbon orders start at an MOQ of 500 m, because ribbon is sold by length. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    faq: [
      { q: "Can I order ribbon on its own, without boxes or pouches?", a: "Yes. Standalone ribbon orders start at an MOQ of 500 m, because ribbon is sold by length. Ribbon supplied with a box or pouch program is quoted as part of that program instead." },
      { q: "What ribbon and cord options are there?", a: "Double-face satin ribbon ties for rigid and gift boxes, custom printed ribbon quoted to your width, artwork and run length, and colour matching to your box wrap and Pantone reference. For pouches, cotton cords are the standard drawcord for cotton, muslin and linen, with satin ribbon and polyester cord as alternatives." },
      { q: "Why order accessories with the box and pouch program?", a: "Ribbon, cord, box and pouch are quoted and made together — one brand system, colour-matched to the packaging they finish, not matched after the fact." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork. We reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    ctaLink: { lead: "Send your ribbon width, artwork, colour reference and quantity to", anchor: "request a ribbon & accessories quotation", product: "luxury-gift-box-ribbon" },
    ctaTitle: "Request a quote for ribbons & accessories",
    guideSlugs: [
      "custom-printed-ribbon-guide",
      "magnetic-closure-vs-ribbon-tie-gift-boxes",
      "packaging-colour-tolerance-explained",
    ],
  },
  {
    slug: "custom-cosmetic-pouches",
    eyebrow: "Cosmetic Pouches",
    h1: "Custom Makeup Bags & Cosmetic Pouches",
    subhead:
      "Compare fabric and clear PVC pouch options by closure, contents and branding; confirm the selected combination in the quote.",
    metaDescription:
      "Custom cosmetic pouch options with logo, including fabric and clear PVC formats. General MOQ 200 pieces; confirm style, material and branding in the quote.",
    intro:
      "Choose a cosmetic pouch around the items it must hold, the required closure and how it will be used. Drawstring, flap, envelope, zipper and clear PVC formats are options to compare; confirm the feasible style, material, dimensions and branding for the selected project. General MOQ starts at 200 pieces for applicable pouch orders; confirm design and colour allocation in the quotation.",
    sections: [
      {
        heading: "Styles",
        items: [
          { title: "Zipper makeup bags", desc: "The secure everyday carrier — classic and flat formats in fabric or clear PVC." },
          { title: "Drawstring", desc: "One-pull closing for favors, sets and retail counters." },
          { title: "Envelope & flap", desc: "Structured envelope and snap-flap styles that gift beautifully." },
        ],
      },
      {
        heading: "Fabrics",
        items: [
          { title: "Cotton & canvas", desc: "Natural, printable carriers for everyday and artisan beauty lines." },
          { title: "Satin & velvet", desc: "Lustrous and plush finishes for gift and premium beauty programs." },
          { title: "Clear PVC", desc: "Transparent zip bags that show the product — MOQ from 200 pieces." },
        ],
      },
      {
        heading: "Clear PVC zip bags",
        items: [
          { title: "See-through format", desc: "Cosmetics, skincare and travel sizes visible without opening the bag." },
          { title: "Order quantity", desc: "General MOQ starts at 200 pieces; confirm PVC style, dimensions and decoration in the quote." },
        ],
      },
      {
        heading: "Branding",
        items: [
          { title: "Print & label", desc: "Ask which logo method suits the chosen material and quantity; approve it on a sample." },
          { title: "Colour reference", desc: "Provide the brand reference and review fabric, cord and trim samples together." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-cotton-pouches",
      "custom-cotton-envelope-pouches",
      "custom-satin-pouches",
      "custom-velvet-pouches",
      "custom-pvc-bags",
    ],
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK custom cosmetic pouches — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, covering drawstring, flap, envelope and zipper pouches in fabric and clear PVC, custom sizes included. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    table: {
      heading: "Choose a cosmetic pouch style",
      columns: ["Style", "Best for", "What to confirm on the sample"],
      rows: [
        ["Zipper makeup bag", "The secure everyday carrier, in fabric or clear PVC", "Zipper run and interior size with your contents inside"],
        ["Drawstring pouch", "Favors, sets and retail counters", "Usable opening, cord finish and size against your contents"],
        ["Envelope & flap", "Structured styles that gift beautifully", "Snap or flap closure and fit"],
        ["Clear PVC zip bag", "Cosmetics, skincare and travel sizes shown without opening", "PVC style, dimensions and decoration in the quotation"],
      ],
      note: "Choose the style around the items it must hold and the closure you need; confirm the feasible style, material, dimensions and branding for the selected project in the quotation.",
    },
    faq: [
      { q: "Are cosmetic pouches made to order?", a: "Yes — every pouch is made to your specification: style, material, dimensions and branding. There are no stock styles; the minimum order is 200 pieces per product or component." },
      { q: "Fabric or clear PVC — which suits my product?", a: "Fabric pouches in cotton, canvas, satin or velvet carry everyday and gift programs; clear PVC zip bags show cosmetics, skincare and travel sizes without opening the bag. Confirm the style, material and dimensions for your project in the quotation." },
      { q: "How will my logo be applied?", a: "The logo method depends on the chosen material and quantity — ask which method suits your combination and approve it on a sample before production." },
      { q: "Can pouches be matched with cosmetic boxes in one program?", a: "Yes. Pouches and boxes can be specified together and colour-matched to one reference; the 200-piece minimum applies to each component." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    ctaLink: { lead: "Send your contents list, style, material and quantity to", anchor: "request a cosmetic pouch quotation", product: "custom-cotton-pouches" },
    ctaTitle: "Request a quote for your cosmetic pouches",
    guideSlugs: [
      "custom-cosmetic-bags-guide",
      "custom-cosmetic-packaging-guide",
      "custom-perfume-packaging-guide",
    ],
  },
  {
    slug: "subscription-box-packaging",
    eyebrow: "Subscription Box Packaging",
    h1: "Custom Subscription Box Packaging — Boxes, Pouches & Inserts",
    subhead:
      "Monthly themed boxes, fabric pouches and insert cards for subscription programs — one manufacturer, matched branding, from 200 pieces.",
    metaDescription:
      "Custom subscription box packaging from one manufacturer — printed boxes, fabric pouches and insert cards for monthly themed programs. Pantone-matched, MOQ from 200 pieces, free stock samples.",
    intro:
      "ELAPACK makes subscription box packaging for box programs shipping to the US and Europe. We make the three pieces of a monthly box in one place — the printed box, the fabric pouches that hold small items, and the insert cards that carry your theme — so colours and branding match across every drop.",
    sections: [
      {
        heading: "Monthly box structures",
        items: [
          { title: "Folding cartons", desc: "Printed paperboard that ships and stores flat — practical for recurring monthly runs." },
          { title: "Magnetic flip-top", desc: "A clean open-close ritual for premium tiers and annual gift editions." },
          { title: "Rigid lift-off lid", desc: "Thick board with a premium feel for flagship and collector boxes." },
          { title: "Custom structures", desc: "Your dieline built to your product dimensions and packing line." },
        ],
      },
      {
        heading: "Inside the box",
        items: [
          { title: "Fabric pouches", desc: "Velvet, cotton and muslin drawstring pouches for jewelry, minis and small goods." },
          { title: "Inserts", desc: "EVA, sponge, molded pulp and flocked interiors that hold items in place in transit." },
          { title: "Insert cards", desc: "Welcome cards, thank-you notes and story cards printed to the monthly theme." },
          { title: "Ribbon & trim", desc: "Satin ribbon closures and cords that carry the theme onto the box." },
        ],
      },
      {
        heading: "Built for recurring programs",
        items: [
          { title: "Same structure, new artwork", desc: "Keep one confirmed dieline and change only the printed theme each month." },
          { title: "Pantone-matched themes", desc: "Box wrap, pouch fabric and card colour matched to one reference." },
          { title: "Plan by season", desc: "Valentine's, spring, summer and winter editions ordered ahead on one production calendar." },
          { title: "MOQ that fits themes", desc: "From 200 pieces — small enough to test a theme, sized to scale a winner." },
        ],
      },
      {
        heading: "Branding & finishes",
        items: [
          { title: "Matt & gloss lamination", desc: "Laminate finishes that set the tone of the unboxing." },
          { title: "Foil stamping & gold foil", desc: "Metallic marks for premium monthly editions." },
          { title: "Embossing & UV coating", desc: "Blind relief and spot UV accents on lid and sleeve." },
          { title: "Pouch branding", desc: "Silkscreen and foil logos, woven labels and embroidery on every fabric." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product or component" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "custom-velvet-pouches",
      "custom-cotton-pouches",
      "custom-muslin-drawstring-pouch",
      "luxury-gift-box-ribbon",
    ],
    faq: [
      { q: "What can one subscription program include?", a: "The printed box, fabric pouches for small items, insert cards printed to the monthly theme, and ribbon and trim — made in one place, so colours and branding match across every drop." },
      { q: "Can the artwork change each month on the same box?", a: "Yes. Keep one confirmed dieline and change only the printed theme each month; box wrap, pouch fabric and card colour are Pantone-matched to one reference, and editions can be planned by season on one production calendar." },
      { q: "What is the minimum order for a themed run?", a: "200 pieces per product or component — small enough to test a theme, sized to scale a winner." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days from confirmed artwork." },
      { q: "How long does production take?", a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, after sample approval and payment. Shipping by air or by sea from Shanghai or Shenzhen is quoted separately, and we reply to enquiries within one business day (Mon–Fri, China time)." },
    ],
    relatedPages: [{ path: "/lightweight-luxury-packaging/", label: "lightweight box and pouch combinations" }],
    ctaLink: { lead: "Send your component list, theme and quantity to", anchor: "request a subscription box quotation", product: "magnetic-closure-gift-box" },
    ctaTitle: "Request a quote for your subscription box program",
    factBlock: {
      updated: "November 2026",
      paragraph:
        "ELAPACK subscription box packaging — key facts, current as of November 2026. Minimum order quantity is 200 pieces per product or component, custom sizes included, across printed boxes, fabric pouches and insert cards. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; shipping time is quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
    },
    guideSlugs: [
      "subscription-box-packaging-buyers-guide",
      "subscription-box-packaging-cost",
      "candle-subscription-box-packaging",
      "beauty-subscription-box-contents",
      "valentines-day-packaging-timeline",
      "custom-packaging-moq-sample-lead-times-2026",
    ],
  },
  {
    slug: "lightweight-luxury-packaging",
    browserTitle: "Lightweight Luxury Packaging for Jewelry & Beauty Brands | ELAPACK",
    eyebrow: "Structure & Materials",
    h1: "Lightweight Luxury Packaging for Jewelry & Beauty Brands",
    subhead:
      "Lightweight does not mean thin and cheap. Keep the unboxing value in texture, precision and finish, and confirm weight, volume and freight for your specific box on a sample — no generic saving is claimed here.",
    metaDescription:
      "Lightweight luxury packaging from ELAPACK — right-sized boxes, board inserts and mono-material options, MOQ 200. Weight, volume and freight comparison are confirmed by sample for your specific box, not assumed from a guide.",
    intro:
      "Use this page to decide whether a lighter structure fits your product, without losing the unboxing experience, product value or protection that the packaging must deliver. Lightweight luxury shifts the value cue from mass to texture, precision, finish and fit: right-sized boxes, a lighter tray with a kept lid feel, board or molded inserts instead of heavy foam or metal, and nesting or collapsible formats where they fit the product. A before-and-after weight, volume and freight-per-1,000 comparison must be made for your specific box on a sample — this page does not claim a generic percentage saving, because board, size, insert and finish change the result.",
    sections: [
      {
        heading: "Where weight can be saved",
        items: [
          { title: "Right-sizing", desc: "Size the box to the product, not to a stock size, to cut empty space and material." },
          { title: "Lighter tray, kept lid feel", desc: "Lighten the tray or insert where it is safe, while keeping the lid and opening feel premium." },
          { title: "Board inserts", desc: "Board or molded-pulp inserts can replace heavy foam or metal where fit and protection allow." },
          { title: "Nesting / collapsible formats", desc: "Where the product allows, nesting or flat-packed formats cut storage and freight volume." },
        ],
      },
      {
        heading: "Where weight should not be cut",
        items: [
          { title: "Protection", desc: "Do not thin the structure that protects a glass bottle, a fragile item or a fitted insert." },
          { title: "Opening feel", desc: "A magnetic or drawer box that feels loose has lost its value, even if it is lighter." },
          { title: "Transit", desc: "Confirm drop, compression and transit checks for the complete shipping pack on a sample, not on a presentation sample alone." },
        ],
      },
      {
        heading: "How to order lightweight",
        items: [
          { title: "Share weight and size", desc: "Send product dimensions, weight and the current box, if you have one." },
          { title: "Ask for a sample comparison", desc: "Ask for the proposed lightweight structure, its weight and volume, and the freight comparison for your quantity, in the quotation." },
          { title: "Check the sample loaded", desc: "Check the sample with the actual product inside, including opening, fit and protection." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces per product / per component of a set" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 30 + USD 25 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs; 30–35 days for 20,000–50,000 pcs after sample approval and payment" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "black-leather-jewelry-box",
      "custom-white-jewelry-box",
      "magnetic-closure-gift-box",
      "custom-perfume-boxes",
      "kraft-paper-shopping-bag",
    ],
    guideSlugs: [
      "custom-rigid-boxes-guide",
      "packaging-inserts-guide",
      "custom-packaging-moq-sample-lead-times-2026",
    ],
    faq: [
      { q: "Does lightweight mean thinner and cheaper?", a: "No. Lightweight luxury shifts the value cue from mass to texture, precision, finish and fit — and the structure that protects the product, and the opening feel of the box, are not cut." },
      { q: "How much weight will I save?", a: "No generic percentage is claimed. A before-and-after weight, volume and freight-per-1,000 comparison is made for your specific box on a sample, because board, size, insert and finish change the result." },
      { q: "Where can weight be saved?", a: "Right-sizing the box to the product, a lighter tray with a kept lid feel, board or molded inserts instead of heavy foam or metal where fit and protection allow, and nesting or collapsible formats where they fit the product." },
      { q: "How do I order a lightweight version of my box?", a: "Send the product dimensions and weight, and the current box if you have one. Ask for the proposed lightweight structure, its weight and volume, and the freight comparison for your quantity in the quotation — then check the sample loaded, with the actual product inside." },
      { q: "What are the minimum order and lead times?", a: "The minimum order is 200 pieces per product or component. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment; a free stock sample carries USD 25 shipping and arrives in 4–7 days, and a custom sample costs USD 30 plus USD 25 shipping, built in 3–5 days." },
    ],
    ctaTitle: "Request a quote for lightweight luxury packaging",
    factBlock: {
      updated: "October 2026",
      paragraph:
        "ELAPACK lightweight luxury packaging — key facts, current as of October 2026. Lightweight structures are available; weight, volume and freight comparison must be confirmed by sample for your specific box, and no generic saving is claimed on this page. Minimum order quantity is 200 pieces per product / per component of a set. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 30 plus USD 25 shipping, is built in 3–5 days from confirmed artwork.",
    },
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
