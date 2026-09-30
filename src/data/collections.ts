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
    h1: "Custom Jewelry Boxes with Logo",
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
      "custom-ring-boxes",
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
      "custom-velvet-pouches",
      "custom-microfiber-pouches",
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
      "custom-velvet-pouches",
      "custom-cotton-pouches",
      "custom-satin-pouches",
      "custom-muslin-drawstring-pouch",
      "custom-linen-jewelry-pouch",
      "custom-microfiber-pouches",
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
  {
    slug: "custom-jewelry-packaging",
    eyebrow: "Jewelry Packaging",
    h1: "Custom Jewelry Packaging — Boxes, Pouches & Display",
    subhead:
      "One manufacturer for the whole jewelry program — logo boxes, fabric pouches, display and sets, matched in colour and branding.",
    metaDescription:
      "Custom jewelry packaging from one manufacturer — logo jewelry boxes, velvet, satin and cotton pouches, display sets and complete box-plus-pouch programs. Boxes from 500, pouches from 200 pieces. Free stock samples.",
    intro:
      "Jewelry brands rarely need just a box. The retail moment needs a fitted box, the after-sale needs a pouch, the counter needs display — and they all read better when they match. ELAPACK makes all sides of the jewelry program in-house: rigid and magnetic boxes with your logo, fabric pouches in seven materials, and velvet display sets — colour-matched and branded as one system. Founded in 2018 and ISO 9001 certified for the production and sales of paper and textile packaging products.",
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
    ],
    facts: [
      { label: "MOQ", value: "Boxes from 500 pieces · pouches & display from 200 pieces" },
      { label: "Stock sample", value: "Free — ships in 2–3 days (sample shipping USD 20, 4–7 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
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
    ],
    ctaTitle: "Request a quote for your jewelry packaging program",
  },
  {
    slug: "custom-gift-boxes",
    eyebrow: "Gift Boxes",
    h1: "Custom Gift Boxes with Logo",
    subhead:
      "Magnetic, ribbon-tie and two-piece rigid gift boxes — plus candle-ready formats — your size, finish and logo.",
    metaDescription:
      "Custom gift boxes with your logo — magnetic closure, satin ribbon-tie and two-piece rigid boxes in any size and finish, including candle jar and tin formats. MOQ from 500 pieces, free stock samples.",
    intro:
      "Custom gift boxes for the occasions where the box is part of the gift. Corporate programs, candles, weddings, retail gifting and seasonal campaigns all start from the same place: a rigid structure that protects, a wrap that carries your brand, and a closure that makes opening feel like an event. Magnetic flip-tops, satin ribbon ties and two-piece rigid formats are all made to your size, Pantone colour and logo — MOQ from 500 pieces.",
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
          { title: "Drawer & book-style", desc: "Structures made to your product and occasion, on request." },
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
      { label: "MOQ", value: "500 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free — ships in 2–3 days (sample shipping USD 20, 4–7 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-white-jewelry-box",
      "black-leather-jewelry-box",
    ],
    ctaTitle: "Request a quote for your custom gift boxes",
  },
  {
    slug: "custom-cosmetic-packaging",
    eyebrow: "Cosmetic & Beauty Packaging",
    h1: "Custom Cosmetic Packaging Boxes",
    subhead:
      "Boxes and pouches for beauty brands — eyelash packaging from 200 pieces, gift boxes and cosmetic pouches with your logo.",
    metaDescription:
      "Custom cosmetic packaging — eyelash boxes from 200 pieces, magnetic and rigid gift boxes for beauty brands, plus fabric and clear PVC-zip cosmetic pouches with your logo. One manufacturer, matched branding. Free stock samples.",
    intro:
      "Custom packaging for beauty and cosmetics brands selling into the US and Europe. ELAPACK makes both halves of the program in-house: printed boxes that present the product at retail — eyelash boxes from just 200 pieces — and the fabric and clear-zip pouches that carry cosmetics after the sale, matched in colour and branding. Every order is made to your specification, from structure and insert to print and finish.",
    sections: [
      {
        heading: "Eyelash packaging boxes",
        items: [
          { title: "From 200 pieces", desc: "Launch and test lash lines well below the typical wholesale 500." },
          { title: "Three stock formats", desc: "14×10×6, 15×15×5 and 20×18×8 cm — or fully custom sizes." },
          { title: "Fitted tray inserts", desc: "Inserts cut to strip lash trays and extension programs." },
        ],
      },
      {
        heading: "Beauty gift & retail boxes",
        items: [
          { title: "Magnetic & rigid gift boxes", desc: "Structures sized to cosmetic formats — from single items to curated sets." },
          { title: "Full-print branding", desc: "Offset print, foil, embossing and spot UV on every surface." },
        ],
      },
      {
        heading: "Cosmetic pouches & bags",
        items: [
          { title: "Fabric pouches", desc: "Cotton, satin and velvet pouches in drawstring, flap and zipper styles." },
          { title: "Clear PVC zip bags", desc: "Transparent zip bags for cosmetics — MOQ from 200 pieces." },
        ],
      },
      {
        heading: "Wig & hair extension packaging",
        items: [
          { title: "Satin wig bags & boxes", desc: "The standard 30×40 cm satin carrier plus retail boxes for hair programs." },
          { title: "Matched programs", desc: "Bags, boxes and inserts branded as one system." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "Eyelash boxes & pouches from 200 pieces · other boxes from 500 pieces" },
      { label: "Stock sample", value: "Free — ships in 2–3 days (sample shipping USD 20, 4–7 days)" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-eyelash-packaging-boxes",
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
      "custom-cotton-pouches",
    ],
    ctaTitle: "Request a quote for your cosmetic packaging",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
