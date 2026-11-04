export interface LandingTable {
  heading: string;
  note?: string;
  columns: string[];
  rows: string[][];
}

export interface LandingSection {
  heading: string;
  items: { title: string; desc: string }[];
}

export interface LandingImage {
  src: string;
  alt: string;
}

export interface Landing {
  slug: string;
  hero?: LandingImage;
  gallery?: LandingImage[];
  eyebrow: string;
  titleTag?: string;
  h1: string;
  subhead: string;
  metaDescription: string;
  intro: string;
  lead?: string;
  why: LandingSection;
  tables: LandingTable[];
  lists: { heading: string; items: string[] }[];
  howItWorks: { title: string; desc: string }[];
  moq: { label: string; value: string }[];
  audience: { title: string; desc: string }[];
  faq?: { q: string; a: string }[];
  ctaTitle: string;
}

const HOW_IT_WORKS_SHARED = [
  { title: "Send your spec", desc: "Share size, material, structure, branding and quantity." },
  { title: "Confirm", desc: "We confirm materials and Pantone match. Free stock samples carry USD 25 shipping and arrive in 4–7 days; custom printed samples take 3–5 days to make (USD 25 + USD 20 shipping)." },
  { title: "We make it", desc: "Production takes 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment receipt; confirm the schedule for your order." },
  { title: "We ship it", desc: "By air or by sea from Shanghai or Shenzhen." },
];

export const landings: Landing[] = [
  {
    slug: "pouches-bags",
    hero: { src: "/images/factory/elapack-09.jpg", alt: "Sewing custom suede pouches on ELAPACK's textile production line" },
    gallery: [
      { src: "/images/factory/elapack-08.jpg", alt: "Fabric library: velvet, suede, cotton and more — standard materials in stock" },
      { src: "/images/factory/elapack-04.jpg", alt: "Screen printing station for custom logo printing on textile packaging" },
      { src: "/images/factory/elapack-03.jpg", alt: "Sewing floor producing custom fabric pouches" },
    ],
    eyebrow: "Pouches & Bags",
    titleTag: "Custom Fabric Pouches & Bags from 200 pcs | ELAPACK",
    h1: "Custom Fabric Pouches & Bags — Made to Your Spec, from 200 Pieces",
    subhead: "Your size. Your fabric. Your closure. Your logo. Cut, sewn and finished together.",
    metaDescription:
      "Custom textile pouches and bags for jewellery, fragrance, beauty, hair and fashion brands — velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, in the size, closure and branding you specify. MOQ from 200 pieces.",
    intro:
      "ELAPACK makes custom fabric pouches and bags for brands selling in the US and Europe. We coordinate manufacturing and sourcing for custom packaging, and we make each order to your specification — not from stock — so the pouch matches your product and your brand, not the other way round.",
    lead:
      "ELAPACK makes custom packaging bags to order — not stock bags. Choose the material by what the bag has to protect and how it will be used, then specify size, closure and logo. Every bag type below is made to your specification, from 200 pieces per product or component, and can be paired with a matching box as a set.",
    why: {
      heading: "Why ELAPACK",
      items: [
        { title: "Your size, not a stock size", desc: "Standard bands run from 7×9 cm jewellery pouches up to 30×40 cm wig bags, and any custom size in between." },
        { title: "Your fabric", desc: "Velvet, suede, cotton, muslin, satin, linen, microfiber or non-woven — plus custom developments on request." },
        { title: "Your closure and your branding", desc: "Drawstring, zipper, flap, tuck, button, ribbon tie or envelope snap; screen print, foil, deboss, woven label, embroidery or transfer, with Pantone colour matching." },
        { title: "A low barrier to start", desc: "MOQ from 200 pieces, including custom sizes." },
      ],
    },
    tables: [
      {
        heading: "Standard sizes",
        note: "Any custom size made to your spec.",
        columns: ["Band", "Sizes", "Typical use"],
        rows: [
          ["Small", "7×9 · 8×10 · 10×12 cm", "Jewellery — rings, earrings, pendants, bracelets"],
          ["Medium", "12×15 · 15×20 cm", "Fragrance & gift — candles, soaps, beauty items, gifts"],
          ["Large", "16×23 · 20×30 · 30×40 cm", "Hair & beauty — wigs, bundles, sets"],
        ],
      },
      {
        heading: "Choose a fabric by what the pouch carries",
        note: "Custom developments on request. Confirm protection needs and the full specification on the sample.",
        columns: ["Material", "Best for", "What it protects against", "Custom options"],
        rows: [
          ["Velvet / suede", "Gift and jewellery presentation", "Dust and light abrasion; plush interior contact", "Silkscreen, foil, deboss; custom sizes; drawstring or zipper"],
          ["Satin", "Dressy retail and fragrance gifts", "Dust and light abrasion; smooth interior", "Silkscreen, foil, woven label; drawstring, ribbon tie or envelope snap closure"],
          ["Cotton / muslin / linen", "Everyday retail and natural positioning", "Dust and light abrasion", "Silkscreen, digital print, embroidery; natural drawcord"],
          ["Microfiber", "Eyewear, jewellery and screen care", "Lint-free contact for polishing and cleaning", "100% polyester or 80/20 polyamide; 180–230g conventional, other weights on request; silkscreen, embossing, digital print, hot stamping"],
          ["Non-woven", "Economical giveaway and transit pouches", "Dust; light contact", "Silkscreen; custom sizes"],
          ["Kraft paper bags", "Retail carry-out and events", "Light goods in handling", "Printed logo; handle and size options — see the kraft shopping bag product page"],
        ],
      },
    ],
    lists: [
      { heading: "Closures", items: ["Drawstring (cord or ribbon finish)", "Zipper", "Flap", "Tuck", "Button", "Ribbon tie", "Envelope snap", "Custom"] },
      { heading: "Branding", items: ["Screen print", "Foil", "Deboss", "Woven label", "Embroidery", "Transfer — with Pantone colour matching"] },
    ],
    howItWorks: HOW_IT_WORKS_SHARED,
    moq: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "Typically 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment receipt; shipping time is separate" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Small pouches for rings, earrings, pendants and eyewear." },
      { title: "Fragrance", desc: "Medium drawstring bags for candles, soaps and fragrance gifts." },
      { title: "Hair & beauty", desc: "Large bags for wigs, bundles and sets." },
      { title: "Fashion", desc: "Pouches and bags for accessories and garments." },
      { title: "Gift", desc: "Gift-ready pouches and bag-in-box combinations." },
    ],
    faq: [
      { q: "Do you keep pouches in stock?", a: "No — every pouch is made to your specification: size, fabric, closure and branding. Stock samples of the fabrics are available to check material before ordering." },
      { q: "Can pouches be ordered as a set with boxes?", a: "Yes. A pouch, box, insert, card, ribbon or microfiber cloth can be supplied as one coordinated set, colour-matched to your Pantone reference, with an MOQ of 200 pieces per component." },
      { q: "What is the minimum order?", a: "200 pieces, custom sizes included. How the quantity splits across designs, colours or sizes is confirmed in the written quotation." },
      { q: "Can I sample before ordering?", a: "Yes. A free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom printed sample costs USD 25 plus USD 20 shipping and is made in 3–5 days." },
      { q: "Are there lower-impact material options?", a: "Reusable sewn pouches in natural fabrics — cotton, muslin and linen — are the standard choice for brands positioning away from single-use packaging. Material selection is confirmed per project on the approved sample." },
    ],
    ctaTitle: "Request a quote for your custom pouch or bag",
  },
  {
    slug: "boxes",
    hero: { src: "/images/factory/elapack-01.jpg", alt: "Rigid box assembly line at ELAPACK — boxes made to order, not from stock" },
    gallery: [
      { src: "/images/factory/elapack-06.jpg", alt: "Automated box-making machine in ELAPACK's paper packaging workshop" },
    ],
    eyebrow: "Boxes",
    titleTag: "Custom Rigid Boxes & Magnetic Gift Boxes from 200 Pieces | ELAPACK",
    h1: "Custom Rigid Boxes, Folding Cartons & Magnetic Closures — Made to Your Spec, from 200 Pieces",
    subhead: "Your size. Your structure. Your finish. Your logo. Built around your product.",
    metaDescription:
      "Custom rigid boxes in your size, finish and branding — two-piece lift-off lid, magnetic flap, drawer and folding carton structures with EVA, sponge, pulp or flocked inserts. MOQ 200 pieces, production in 15–20 working days.",
    intro:
      "ELAPACK makes custom rigid boxes, folding cartons and magnetic closure boxes for brands selling in the US and Europe. We coordinate manufacturing and sourcing for custom packaging, and we make each order to your specification — not from stock — so the box fits your product and carries your brand, not the other way round.",
    why: {
      heading: "Box styles",
      items: [
        { title: "Rigid boxes", desc: "Thick, non-collapsible board; the premium, gift-ready structure." },
        { title: "Folding cartons", desc: "Printed paperboard that ships flat; practical and economical." },
        { title: "Magnetic closure boxes", desc: "Rigid boxes with a built-in magnetic flap; an unboxing moment." },
          { title: "Corrugated mailer boxes", desc: "Printed corrugated mailers for e-commerce and subscription shipping — made to your spec, from 200 pieces." },
        { title: "Custom structures", desc: "Made to your spec on request — wrap colour matched to your Pantone reference, even for a single box style." },
      ],
    },
    tables: [
      {
        heading: "Inserts",
        note: "Boxes can include inserts to hold the product in place — custom inserts on request.",
        columns: ["Insert", "Best for"],
        rows: [
          ["EVA", "Contoured, precise fit"],
          ["Sponge", "Soft cushioning"],
          ["Molded pulp", "Contoured insert option; confirm material specification"],
          ["Flocked", "Velvet-touch luxury finish"],
        ],
      },
      {
        heading: "Choose a box structure for your product",
        note: "These are selection questions, not a transit-performance guarantee. Approve the structure and insert on a sample with your actual product.",
        columns: ["Structure", "Buyer use", "Check in the sample"],
        rows: [
          ["Rigid box", "Presentation for jewelry, gifts or fragrance", "Internal fit, insert and opening clearance"],
          ["Folding carton", "Flat-packed retail packaging", "Board choice, closure and packed-product fit"],
          ["Magnetic closure box", "Repeated opening and gift presentation", "Closure alignment, insert and product clearance"],
          ["Drawer box", "Layered or multi-item presentation", "Slide action, ribbon pull and internal fit"],
          ["Corrugated mailer", "Shipping or subscription presentation", "Packed-product fit and route-specific protection testing"],
        ],
      },
    ],
    lists: [
      { heading: "Sizes", items: ["Standard sizes: 8×8×3 cm · 10×10×3 cm", "Any custom size made to your spec"] },
      {
        heading: "Finishes & branding",
        items: ["Matt lamination", "Glossy lamination", "Varnishing", "Stamping", "Embossing", "UV coating", "Gold foil — with Pantone colour matching", "Custom finishes on request"],
      },
      {
        heading: "Send a comparable box RFQ",
        items: [
          "Product dimensions and weight, including any accessories that must fit inside",
          "Preferred box structure, insert or lining, and whether the box will be shipped inside an outer carton",
          "Logo artwork, colour reference, finish and quantity (minimum 200 pieces)",
          "Delivery country, target date and the sample checks you need before bulk production",
        ],
      },
    ],
    howItWorks: HOW_IT_WORKS_SHARED,
    moq: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "Typically 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment receipt; shipping time is separate" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Small rigid boxes with fitted inserts." },
      { title: "Fragrance & gift", desc: "Magnetic and rigid boxes for candles, soaps and fragrance gifts." },
      { title: "Hair & beauty", desc: "Boxes for wig and bundle packaging sets." },
      { title: "Fashion", desc: "Folding cartons and rigid boxes for accessories and garments." },
    ],
    faq: [
      { q: "Which box structures do you make?", a: "Rigid boxes, folding cartons, magnetic closure boxes, drawer boxes and corrugated mailer boxes — built around your product, in your size, finish and branding." },
      { q: "What inserts can a box include?", a: "EVA for a contoured, precise fit; sponge for soft cushioning; molded pulp as a contoured insert option; and flocked, velvet-touch finishes. Approve the structure and insert on a sample with your actual product." },
      { q: "What sizes are available?", a: "Standard sizes include 8×8×3 cm and 10×10×3 cm, and any custom size is made to your specification." },
      { q: "What should I send for a comparable quote?", a: "Product dimensions and weight, including any accessories that must fit inside; the preferred structure, insert or lining, and whether the box will be shipped inside an outer carton; logo artwork, colour reference and finish; the quantity (minimum 200 pieces); and the delivery country and target date." },
      { q: "Can I sample before ordering, and how long does production take?", a: "Yes — a free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 25 plus USD 20 shipping and is made in 3–5 days. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment." },
    ],
    ctaTitle: "Request a quote for your custom box",
  },
  {
    slug: "sets",
    hero: { src: "/images/factory/elapack-02.jpg", alt: "ELAPACK design team preparing pouch and box dielines for a custom packaging set" },
    eyebrow: "Sets & Bundles",
    h1: "Custom Packaging Sets — Pouch, Box & More, Made to Work Together",
    subhead: "One spec. One supplier. Pouch, box and insert that match — piece to piece.",
    metaDescription:
      "Custom packaging sets for jewellery, fragrance, beauty, hair and fashion brands — coordinate pouch, box and insert specifications. MOQ is 200 pieces for each component in the set.",
    intro:
      "This page covers multi-component packaging supplied around one product, for any product — not jewelry only. Start with unboxing experience, product value and protection, then choose the set: a box, pouch and optional insert, card, ribbon or microfiber cleaning cloth. Specify each component and its quantity together so colour, material and branding can be checked across the set. Jewelry stands and trays are retail display props in the product catalogue, not box-and-pouch sets.",
    why: {
      heading: "What a set can include",
      items: [
        { title: "Pouch + box", desc: "The classic pairing." },
        { title: "Box + insert + pouch", desc: "Retail-ready, piece to piece." },
        { title: "With a card", desc: "A thank-you card, company profile, slogan, design or product-showcase card, customised to match the set." },
        { title: "With a ribbon", desc: "A satin or printed ribbon closure or trim, matched to the box and pouch colour." },
        { title: "With a microfiber cleaning cloth", desc: "Add a microfiber cleaning cloth (100% polyester or 80% polyester / 20% polyamide, 180–230g) for jewelry, eyewear, screens and lenses — tick it in the inquiry form." },
        { title: "Custom combinations", desc: "Built around your product on request." },
      ],
    },
    tables: [
      {
        heading: "Choose a set combination",
        note: "MOQ is 200 pieces per component. Final specification is confirmed in the quotation and approved sample.",
        columns: ["Set combination", "Includes", "Best for"],
        rows: [
          ["Beauty & Fragrance set", "Box + pouch + sample / showcase card", "Perfume, beauty and fragrance brands"],
          ["Storage set", "Drawstring bag + pouch + card", "Various-purpose storage bags"],
          ["Gift set", "Box + pouch + ribbon + card", "Gift boxes and seasonal gifting"],
          ["Eyewear set", "Pouch + microfiber cleaning cloth + box / case", "Eyewear and sunglasses brands"],
          ["Jewelry set", "Box + pouch + optional cleaning cloth", "Jewelry brands; anti-tarnish lining is an option for silver / plated items only"],
        ],
      },
    ],
    lists: [
      {
        heading: "How sets come together",
        items: [
          "Every piece is designed as one: unified design, colour-matched to your Pantone reference.",
          "You choose how it ships — packed and delivered as one set, or packed per piece, whichever suits your needs.",
        ],
      },
    ],
    howItWorks: [
      { title: "Send your spec", desc: "What goes in the set, per-piece size, material, branding, quantity." },
      { title: "Confirm", desc: "We confirm materials and Pantone match. Free stock samples carry USD 25 shipping and arrive in 4–7 days; custom printed samples take 3–5 days to make (USD 25 + USD 20 shipping)." },
      { title: "We make it", desc: "Production takes 15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment receipt; confirm the schedule for your order." },
      { title: "We ship it", desc: "By air or by sea from Shanghai or Shenzhen, packed as one set or per piece." },
    ],
    moq: [
      { label: "MOQ", value: "200 pieces for each component in the set; list the components and quantities in your quotation request" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days for 200–20,000 pcs and 30–35 days for 20,000–50,000 pcs after sample approval and payment receipt; shipping time is separate" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    audience: [
      { title: "Beauty & Fragrance", desc: "Box + pouch + card sets for perfume and beauty brands." },
      { title: "Storage bags", desc: "Drawstring bag + pouch sets for various-purpose storage." },
      { title: "Gift boxes", desc: "Box + pouch + ribbon + card sets for gifting." },
      { title: "Jewellery & eyewear", desc: "Pouch + box sets with fitted inserts, plus an optional microfiber cleaning cloth." },
      { title: "Hair & fashion", desc: "Wig, bundle, accessory and garment packaging sets." },
    ],
    faq: [
      { q: "What can a packaging set include?", a: "A pouch and box; a box with insert and pouch; and optional cards, ribbon or a microfiber cleaning cloth — or a custom combination built around your product, for any product category." },
      { q: "Are sets fixed, pre-packed combinations?", a: "No. The combinations shown are component examples, not fixed pre-packed sets: every component is designed around your product, and each matching bag, ribbon, card and cloth can be customised independently." },
      { q: "How does the minimum order work for a set?", a: "200 pieces for each component in the set. List the components and their quantities in your quotation request so colour, material and branding can be checked across the set." },
      { q: "Will the components match in colour?", a: "Yes — every piece is designed as one, colour-matched to your Pantone reference, and you choose how it ships: packed and delivered as one set, or packed per piece." },
      { q: "Can I sample a set before ordering, and how long does production take?", a: "Yes — a free stock sample carries USD 25 shipping and arrives in 4–7 days; a custom sample costs USD 25 plus USD 20 shipping and is made in 3–5 days. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces after sample approval and payment." },
    ],
    ctaTitle: "Request a quote for your custom packaging set",
  },
];

export const getLandingBySlug = (slug: string) =>
  landings.find((l) => l.slug === slug);
