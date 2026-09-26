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

export interface Landing {
  slug: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  metaDescription: string;
  intro: string;
  why: LandingSection;
  tables: LandingTable[];
  lists: { heading: string; items: string[] }[];
  howItWorks: { title: string; desc: string }[];
  moq: { label: string; value: string }[];
  audience: { title: string; desc: string }[];
  ctaTitle: string;
}

const HOW_IT_WORKS_SHARED = (sampleDays: string) => [
  { title: "Send your spec", desc: "Share size, material, structure, branding and quantity." },
  { title: "Confirm", desc: `We confirm materials and Pantone match, and send a free stock sample in ${sampleDays} days.` },
  { title: "We make it", desc: "Your order, made to your spec, in 15–20 days production." },
  { title: "We ship it", desc: "By air or by sea." },
];

const CERT_LINE =
  "ISO 9001 — production and sales of paper and textile packaging products";

export const landings: Landing[] = [
  {
    slug: "pouches-bags",
    eyebrow: "Pouches & Bags",
    h1: "Custom Fabric Pouches & Bags — Made to Your Spec, from 200 Pieces",
    subhead: "Your size. Your fabric. Your closure. Your logo. Cut, sewn and finished together.",
    metaDescription:
      "Custom textile pouches and bags for jewellery, fragrance, beauty, hair and fashion brands — velvet, suede, cotton, muslin, satin, linen, microfiber and non-woven, in the size, closure and branding you specify. MOQ from 200 pieces.",
    intro:
      "ELAPACK makes custom fabric pouches and bags for brands selling in the US and Europe. We are a trade-and-manufacturing company founded in 2018 with three production lines, ISO 9001 certified for the production and sales of paper and textile packaging products, and we make each order to your specification — not from stock — so the pouch matches your product and your brand, not the other way round.",
    why: {
      heading: "Why ELAPACK",
      items: [
        { title: "Your size, not a stock size", desc: "Standard bands run from 7×9 cm jewellery pouches up to 30×40 cm wig bags, and any custom size in between." },
        { title: "Your fabric", desc: "Velvet, suede, cotton, muslin, satin, linen, microfiber or non-woven — plus custom developments on request." },
        { title: "Your closure and your branding", desc: "Drawstring, zipper, flap, tuck or button; screen print, foil, deboss, woven label, embroidery or transfer, with Pantone colour matching." },
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
        heading: "Fabrics",
        note: "Custom developments on request.",
        columns: ["Fabric", "Reads as"],
        rows: [
          ["Velvet / suede", "Plush, premium, gift-like"],
          ["Cotton / muslin / linen", "Natural, understated, prints crisply"],
          ["Satin", "Smooth, dressy"],
          ["Microfiber / non-woven", "Practical, economical"],
        ],
      },
    ],
    lists: [
      { heading: "Closures", items: ["Drawstring (cord or ribbon finish)", "Zipper", "Flap", "Tuck", "Button", "Custom"] },
      { heading: "Branding", items: ["Screen print", "Foil", "Deboss", "Woven label", "Embroidery", "Transfer — with Pantone colour matching"] },
    ],
    howItWorks: HOW_IT_WORKS_SHARED("4–9"),
    moq: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Sample", value: "Free stock sample — 4–9 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea" },
      { label: "Certifications", value: CERT_LINE },
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Small pouches for rings, earrings, pendants and eyewear." },
      { title: "Fragrance", desc: "Medium drawstring bags for candles, soaps and fragrance gifts." },
      { title: "Hair & beauty", desc: "Large bags for wigs, bundles and sets." },
      { title: "Fashion", desc: "Pouches and bags for accessories and garments." },
      { title: "Gift", desc: "Gift-ready pouches and bag-in-box combinations." },
    ],
    ctaTitle: "Request a quote for your custom pouch or bag",
  },
  {
    slug: "boxes",
    eyebrow: "Boxes",
    h1: "Custom Rigid, Folding & Magnetic Boxes — Made to Your Spec, from 500 Pieces",
    subhead: "Your size. Your structure. Your finish. Your logo. Built around your product.",
    metaDescription:
      "Custom packaging boxes for jewellery, fragrance, beauty, hair and fashion brands — rigid, folding carton and magnetic closure boxes with optional EVA, sponge, pulp or flocked inserts, in your size, finish and branding. MOQ from 500 pieces.",
    intro:
      "ELAPACK makes custom boxes for brands selling in the US and Europe. We are a trade-and-manufacturing company founded in 2018 with three production lines, ISO 9001 certified for the production and sales of paper and textile packaging products, and we make each order to your specification — not from stock — so the box fits your product and carries your brand, not the other way round.",
    why: {
      heading: "Box styles",
      items: [
        { title: "Rigid boxes", desc: "Thick, non-collapsible board; the premium, gift-ready structure." },
        { title: "Folding cartons", desc: "Printed paperboard that ships flat; practical and economical." },
        { title: "Magnetic closure boxes", desc: "Rigid boxes with a built-in magnetic flap; an unboxing moment." },
        { title: "Custom structures", desc: "Made to your spec on request." },
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
          ["Molded pulp", "Economical, eco-friendly structure"],
          ["Flocked", "Velvet-touch luxury finish"],
        ],
      },
    ],
    lists: [
      { heading: "Sizes", items: ["Standard sizes: 8×8×3 cm · 10×10×3 cm", "Any custom size made to your spec"] },
      {
        heading: "Finishes & branding",
        items: ["Matt lamination", "Glossy lamination", "Varnishing", "Stamping", "Embossing", "UV coating", "Gold foil — with Pantone colour matching", "Custom finishes on request"],
      },
    ],
    howItWorks: HOW_IT_WORKS_SHARED("4–9"),
    moq: [
      { label: "MOQ", value: "500 pieces, custom sizes included" },
      { label: "Sample", value: "Free stock sample — 4–9 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea" },
      { label: "Certifications", value: CERT_LINE },
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Small rigid boxes with fitted inserts." },
      { title: "Fragrance & gift", desc: "Magnetic and rigid boxes for candles, soaps and fragrance gifts." },
      { title: "Hair & beauty", desc: "Boxes for wig and bundle packaging sets." },
      { title: "Fashion", desc: "Folding cartons and rigid boxes for accessories and garments." },
    ],
    ctaTitle: "Request a quote for your custom box",
  },
  {
    slug: "sets",
    eyebrow: "Sets & Bundles",
    h1: "Custom Packaging Sets — Pouch, Box & More, Made to Work Together",
    subhead: "One spec. One supplier. Pouch, box and insert that match — piece to piece.",
    metaDescription:
      "Custom packaging sets for jewellery, fragrance, beauty, hair and fashion brands — pouches, boxes and inserts designed together as one coordinated set, colour-matched to your Pantone reference. MOQ from 200 pieces.",
    intro:
      "ELAPACK makes custom packaging sets for brands selling in the US and Europe. We are a trade-and-manufacturing company founded in 2018 with three production lines, ISO 9001 certified for the production and sales of paper and textile packaging products. Because pouches and boxes are made under one roof, the colour, material and branding match across every piece of the set — not roughly, but by spec.",
    why: {
      heading: "What a set can include",
      items: [
        { title: "Pouch + box", desc: "The classic pairing." },
        { title: "Box + insert + pouch", desc: "Retail-ready, piece to piece." },
        { title: "With a card", desc: "A thank-you card, company profile, slogan, design or product-showcase card, customised to match the set." },
        { title: "Custom combinations", desc: "Built around your product on request." },
      ],
    },
    tables: [],
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
      { title: "Confirm", desc: "We confirm materials and Pantone match, and send a free stock sample in 4–7 days." },
      { title: "We make it", desc: "Your order, made to your spec, in 15–20 days production." },
      { title: "We ship it", desc: "By air or by sea, packed as one set or per piece." },
    ],
    moq: [
      { label: "MOQ", value: "500 pieces for sets that include a box · 200 pieces for sets without a box" },
      { label: "Sample", value: "Free stock sample — 4–7 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea" },
      { label: "Certifications", value: CERT_LINE },
    ],
    audience: [
      { title: "Jewellery & eyewear", desc: "Pouch + box sets with fitted inserts." },
      { title: "Fragrance & gift", desc: "Candle and gift sets: box, pouch, and insert as one." },
      { title: "Hair & beauty", desc: "Wig and bundle sets for retail-ready presentation." },
      { title: "Fashion", desc: "Accessory and garment packaging sets." },
    ],
    ctaTitle: "Request a quote for your custom packaging set",
  },
];

export const getLandingBySlug = (slug: string) =>
  landings.find((l) => l.slug === slug);
