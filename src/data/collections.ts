/**
 * Collection pages (2026-09-30 keyword restructuring): keyword-anchored
 * category hubs that group real catalog products by buyer search intent —
 * /custom-jewelry-boxes, /eyewear-packaging, /custom-jewelry-pouches and
 * /custom-wig-packaging (phase-2 placeholder edition).
 * All facts below are the confirmed trade facts (MOQ, samples, lead time).
 */
export type Collection = {
  slug: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; items: { title: string; desc: string }[] }[];
  facts: { label: string; value: string }[];
  productSlugs: string[];
  ctaTitle: string;
};

export const collections: Collection[] = [
  {
    slug: "custom-jewelry-boxes",
    eyebrow: "Jewelry Boxes",
    h1: "Custom Jewelry Boxes, Made to Your Spec",
    subhead:
      "Rigid, magnetic and wrapped boxes for rings, earrings, necklaces and bracelets — your size, structure, finish and logo.",
    metaDescription:
      "Custom jewelry boxes with your logo — rigid lift-off lids, magnetic flip-tops, ribbon-tie and faux leather boxes with EVA, velvet or pulp inserts. MOQ from 500 pieces, free stock samples.",
    intro:
      "ELAPACK makes custom jewelry boxes for brands selling in the US and Europe. Founded in 2018 and ISO 9001 certified for the production and sales of paper and textile packaging products, we make each order to your specification — box structure, wrap colour, interior insert and branding — so the box fits your jewelry and carries your brand.",
    sections: [
      {
        heading: "Box structures",
        items: [
          { title: "Rigid lift-off lid", desc: "Full-height lid over a rigid base — the premium, gift-ready structure." },
          { title: "Magnetic flip-top", desc: "Hidden magnets give a clean exterior and a satisfying slow close." },
          { title: "Ribbon tie", desc: "Satin ribbon closure that becomes part of the unboxing ritual." },
          { title: "Faux leather wrap", desc: "Textured wrap with embossed branding for jewelry and gift programs." },
        ],
      },
      {
        heading: "By jewelry type",
        items: [
          { title: "Ring boxes", desc: "Single and double ring slots with velvet or foam cushions." },
          { title: "Earring & pendant boxes", desc: "Fitted inserts that hold pairs and chains in place." },
          { title: "Bracelet & small gift boxes", desc: "Compact footprints for retail counter and gifting." },
          { title: "Complete jewelry sets", desc: "Box, pouch and insert designed together as one program." },
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
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "500 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free — ships in 2–3 days (sample shipping USD 20, 4–7 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "black-leather-jewelry-box",
      "custom-white-jewelry-box",
      "double-ring-storage-box",
      "luxury-gift-box-ribbon",
      "magnetic-closure-gift-box",
    ],
    ctaTitle: "Request a quote for your custom jewelry box",
  },
  {
    slug: "eyewear-packaging",
    eyebrow: "Eyewear Packaging",
    h1: "Custom Eyewear Packaging — Boxes & Pouches for Eyewear Brands",
    subhead:
      "Glasses boxes and fabric pouches that protect frames and carry your logo, made to your spec.",
    metaDescription:
      "Custom eyewear packaging — rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes from 500, pouches from 200 pieces. Free stock samples.",
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
    ],
    facts: [
      { label: "MOQ", value: "Boxes from 500 pieces · pouches from 200 pieces" },
      { label: "Stock sample", value: "Free — ships in 2–3 days (sample shipping USD 20, 4–7 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "black-leather-jewelry-box",
      "custom-velvet-drawstring-pouch",
      "custom-microfiber-jewelry-pouch",
      "leather-envelope-pouch",
    ],
    ctaTitle: "Request a quote for your eyewear packaging",
  },
  {
    slug: "custom-jewelry-pouches",
    eyebrow: "Jewelry Pouches",
    h1: "Custom Jewelry Pouches with Your Logo",
    subhead:
      "Velvet, cotton, satin and microfiber pouches — your fabric, closure, size and branding.",
    metaDescription:
      "Custom jewelry pouches with logo — velvet, suede, cotton, muslin, satin, linen and microfiber drawstring and flap pouches in your size and Pantone colour. MOQ from 200 pieces, free stock samples.",
    intro:
      "Fabric jewelry pouches for brands that want the packaging to feel like part of the piece. Choose the fabric, the closure and the branding; we make each pouch to your spec — from standard 7×9 cm jewelry sizes up to large gift bags. MOQ from 200 pieces, including custom sizes.",
    sections: [
      {
        heading: "Fabrics",
        items: [
          { title: "Velvet", desc: "Dense pile that cushions chains and stones." },
          { title: "Cotton", desc: "Natural, printable and gently protective." },
          { title: "Satin", desc: "A smooth, lustrous finish for gift programs." },
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
          { title: "Any custom size", desc: "Made to your product dimensions, MOQ unchanged." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free — ships in 2–3 days (sample shipping USD 20, 4–7 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-velvet-drawstring-pouch",
      "custom-cotton-jewelry-pouch",
      "custom-satin-jewelry-pouch",
      "custom-muslin-drawstring-pouch",
      "custom-linen-jewelry-pouch",
      "custom-microfiber-jewelry-pouch",
      "leather-envelope-pouch",
    ],
    ctaTitle: "Request a quote for your custom jewelry pouches",
  },
  {
    slug: "custom-wig-packaging",
    eyebrow: "Wig & Hair Packaging",
    h1: "Custom Wig Packaging — Satin Wig Bags & Boxes",
    subhead:
      "Satin wig bags in the standard 30×40 cm format, plus boxes and sets for wig and hair extension brands — your size, colour and logo.",
    metaDescription:
      "Custom wig packaging with your logo — satin drawstring wig bags in the standard 30×40 cm format, plus rigid and magnetic boxes for wigs and hair extensions. Bags from 200 pieces. Free stock samples.",
    intro:
      "Custom packaging for wig and hair extension brands selling in the US and Europe. We make the satin bags that carry and protect the hair — smooth interiors that keep fibers from tangling — and the boxes that present the program at retail, matched in colour and branding. Photography of our wig packaging is in progress; every fact on this page is our confirmed trade terms, and stock samples ship free so you can judge materials in hand.",
    sections: [
      {
        heading: "Wig bags",
        items: [
          { title: "Satin drawstring bag", desc: "The standard 30×40 cm carrier — smooth satin lets fibers slide instead of snagging." },
          { title: "Sized to your format", desc: "Any wig or extension length made to your dimensions, MOQ unchanged." },
          { title: "Travel & storage bags", desc: "Larger formats with cord or zipper closures for storage and travel programs." },
        ],
      },
      {
        heading: "Boxes & cases",
        items: [
          { title: "Rigid wig boxes", desc: "Structured boxes that present wigs and extensions upright at retail." },
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
      { label: "MOQ", value: "Bags from 200 pieces · boxes from 500 pieces" },
      { label: "Stock sample", value: "Free — ships in 2–3 days (sample shipping USD 20, 4–7 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-satin-wig-bag",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
    ],
    ctaTitle: "Request a quote for your custom wig packaging",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
