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
  /** Related /news sourcing guides linked at the page foot — curated, never forced. */
  guideSlugs?: string[];
  relatedPages?: { path: string; label: string }[];
  /**
   * Plain-text, dated fact block for AI/answer engines to quote verbatim.
   * One self-contained paragraph; every figure must come from the confirmed
   * trade-terms whitelist (MOQ / lead times / sample terms).
   */
  factBlock?: { updated: string; paragraph: string };
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
      "Custom jewelry boxes with your logo — rigid lift-off lids, magnetic flip-tops, ribbon-tie and faux leather boxes with EVA, velvet or pulp inserts. MOQ from 200 pieces, free stock samples.",
    intro:
      "ELAPACK makes custom jewelry boxes for brands selling in the US and Europe. We make each order to your specification — box structure, wrap colour, interior insert and branding — so the box fits your jewelry and carries your brand.",
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
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
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
    slug: "eyewear-packaging",
    eyebrow: "Eyewear Packaging",
    h1: "Custom Eyewear Packaging — Boxes & Pouches for Eyewear Brands",
    subhead:
      "Glasses boxes and fabric pouches that protect frames and carry your logo, made to your spec.",
    metaDescription:
      "Custom eyewear packaging — rigid and magnetic glasses boxes with fitted inserts, plus velvet, cotton and microfiber pouches with your logo. Boxes and pouches from 200 pieces. Free stock samples.",
    factBlock: {
      updated: "October 2026",
      paragraph:
        "ELAPACK eyewear packaging — key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, covering printed glasses boxes, fabric pouches and fitted inserts, custom sizes included. Typical production takes 15–20 days after sample approval; confirm the schedule for your order, with shipping time quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 25 plus USD 20 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
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
    ],
    facts: [
      { label: "MOQ", value: "200 pieces — boxes and pouches alike, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
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
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
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
    ctaTitle: "Request a quote for your custom jewelry pouches",
    guideSlugs: [
      "how-to-choose-a-custom-jewelry-pouch",
      "packaging-colour-tolerance-explained",
    ],
    relatedPages: [
      { path: "/custom-jewelry-packaging/", label: "Complete jewelry packaging" },
      { path: "/custom-jewelry-boxes/", label: "Jewelry boxes" },
    ],
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
      "Custom packaging for wig and hair extension brands selling in the US and Europe. We make the satin bags that carry and protect the hair — smooth interiors that keep fibers from tangling — and the boxes that present the program at retail, matched in colour and branding. Photography of our wig packaging is in progress; every fact on this page is our confirmed trade terms, and stock samples are free, with USD 25 shipping and 4–7 day delivery, so you can judge materials in hand.",
    sections: [
      {
        heading: "Wig bags",
        items: [
          { title: "Satin drawstring bag", desc: "The standard 30×40 cm carrier — smooth satin lets fibers slide instead of snagging." },
          { title: "Cotton envelope pouches", desc: "Structured cotton carriers in flap-snap, flat-pocket and zip-envelope styles — from 200 pieces." },
          { title: "Sized to your format", desc: "Any wig or extension length made to your dimensions, MOQ unchanged." },
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
      { label: "MOQ", value: "200 pieces — bags, wig boxes and extension boxes alike" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
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
      updated: "October 2026",
      paragraph:
        "ELAPACK jewelry packaging — key facts, current as of October 2026. Minimum order quantity is 200 pieces for each component of a box-plus-pouch set, including custom sizes; confirm quantities for every component in the quotation. Typical production takes 15–20 days after sample approval; confirm the schedule for your order, with shipping time quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 25 plus USD 20 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
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
          { title: "Request a comparable quote", desc: "Include component quantities, dimensions, materials, branding method, delivery country and target date." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "200 pieces — boxes, pouches and display alike" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
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
    guideSlugs: [
      "how-to-choose-custom-jewelry-boxes",
      "how-to-choose-a-custom-jewelry-pouch",
    ],
    relatedPages: [
      { path: "/custom-jewelry-boxes/", label: "Compare jewelry boxes" },
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
      updated: "October 2026",
      paragraph:
        "ELAPACK custom gift boxes — key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, covering magnetic flip-top, satin ribbon-tie, two-piece rigid and candle-format boxes, custom sizes included. Typical production takes 15–20 days after sample approval; confirm the schedule for your order, with shipping time quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 25 plus USD 20 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
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
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
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
      { label: "MOQ", value: "General minimum 200 pieces; confirm each component and variant in the quote" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "magnetic-closure-gift-box",
      "luxury-gift-box-ribbon",
    ],
    ctaTitle: "Request a quote for your custom candle boxes",
    factBlock: {
      updated: "October 2026",
      paragraph:
        "General minimum order quantity is 200 pieces; for a complete set, each component has a 200-piece minimum. Confirm structure, insert, size and design or colour allocation in the project quotation. Typical production takes 15–20 days after sample approval and payment receipt; confirm the schedule for your order, with shipping time quoted separately. A free stock sample carries USD 25 shipping, with a stated delivery timeframe of 4–7 days; a custom sample costs USD 25 plus USD 20 shipping and is made in 3–5 days from confirmed artwork. Finished orders ship from Shanghai or Shenzhen; payment by T/T or PayPal.",
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
      { label: "MOQ", value: "200 pieces — boxes and pouches alike, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
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
      "Review fabric, size, closure and logo options for drawstring bags; general MOQ starts at 200 pieces for applicable projects.",
    metaDescription:
      "Custom drawstring bag options for gifts and storage, including handbag and shoe dust bag briefs. General MOQ 200 pieces; confirm fabric, size and logo method in the quote.",
    intro:
      "Drawstring bags can serve gift, jewellery and storage briefs. Compare cotton, velvet, satin, muslin or linen against the actual product and required opening. Send the item dimensions, target bag size, artwork and quantity; confirm the fabric, size and feasible logo method in the quotation and sample. General MOQ starts at 200 pieces for applicable projects; design and colour allocation are confirmed by order.",
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
    ],
    facts: [
      { label: "MOQ", value: "General minimum 200 pieces; confirm fabric, size and variants in the quote" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "custom-cotton-pouches",
      "custom-velvet-pouches",
      "custom-satin-pouches",
      "custom-muslin-drawstring-pouch",
      "custom-satin-wig-bag",
    ],
    ctaTitle: "Request a quote for your custom drawstring bags",
    guideSlugs: [
      "how-to-choose-custom-drawstring-bags",
      "custom-clothing-apparel-packaging-guide",
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
          { title: "Standalone accessory orders", desc: "Ribbons and cords quoted by spec — MOQ to be confirmed per program." },
        ],
      },
    ],
    facts: [
      { label: "MOQ", value: "Quoted as part of your box or pouch program — standalone accessory MOQ to be confirmed" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
      { label: "Shipping", value: "By air or by sea from Shanghai or Shenzhen" },
      { label: "Payment", value: "T/T · PayPal" },
    ],
    productSlugs: [
      "luxury-gift-box-ribbon",
      "magnetic-closure-gift-box",
      "custom-velvet-pouches",
    ],
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
    h1: "Custom Cosmetic Pouches & Makeup Bags",
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
      { label: "MOQ", value: "General minimum 200 pieces; confirm style, material and variants in the quote" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
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
    h1: "Custom Subscription Box Packaging: Boxes, Pouches & Insert Cards",
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
      { label: "MOQ", value: "200 pieces, custom sizes included" },
      { label: "Stock sample", value: "Free sample; USD 25 shipping; delivery 4–7 days" },
      { label: "Custom sample", value: "USD 25 + USD 20 shipping — made in 3–5 days" },
      { label: "Production time", value: "15–20 days" },
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
    ctaTitle: "Request a quote for your subscription box program",
    factBlock: {
      updated: "October 2026",
      paragraph:
        "ELAPACK subscription box packaging — key facts, current as of October 2026. Minimum order quantity is 200 pieces per design, custom sizes included, across printed boxes, fabric pouches and insert cards. Typical production takes 15–20 days after sample approval; confirm the schedule for your order, with shipping time quoted separately. A free stock sample carries USD 25 shipping and typically arrives in 4–7 days; a custom sample costs USD 25 plus USD 20 shipping, is built in 3–5 days from confirmed artwork. Finished orders ship by air or by sea from Shanghai or Shenzhen; payment by T/T or PayPal.",
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
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
