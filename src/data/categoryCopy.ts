/**
 * Per-category page copy for the product detail template: importance and
 * customize sections plus the FAQ set. Shared with the prerender script so
 * the FAQPage structured data always mirrors the visible questions.
 */
export type CategoryCopy = {
  noun: string;
  importanceTitle: string;
  importanceIntro: string;
  benefits: { title: string; desc: string }[];
  customizeTitle: string;
  customizeParas: string[];
  customizeCta: string;
  faqMaterials: { q: string; a: string };
  faqSizes: { q: string; a: string };
  faqClosures: { q: string; a: string };
};

const boxesCopy: CategoryCopy = {
  noun: "boxes",
  importanceTitle: "The Importance of Custom Boxes in Your Brand Experience",
  importanceIntro:
    "A box is the first physical touch a customer has with your product, and a well-built rigid box does three jobs at once — quietly:",
  benefits: [
    {
      title: "An Unboxing Customers Remember",
      desc: "Weight, structure and finish are read in seconds. A considered box signals a considered product before it is even opened.",
    },
    {
      title: "Protection and Preservation",
      desc: "Rigid board construction with tailored inserts keeps each piece stable in transit and in store — no shifting, no scratches, no damaged stock.",
    },
    {
      title: "Subtle Branding Opportunity",
      desc: "Embossing, foil stamping and color-matched linings carry your identity without a word, and reinforce it every time the box is opened.",
    },
  ],
  customizeTitle: "Customize Your Boxes",
  customizeParas: [
    "At ELAPACK, every element of a custom box is specified around your product: exterior material, interior lining, insert layout, closure and surface finish. If none of our standard configurations fits, we build the structure from scratch.",
    "You can always request a fully custom project in line with your brand: we will propose the right board, lining and printing method to match your product and your budget.",
    "Whether it is a specific Pantone tone, a foil accent, or an insert with exact cavity positions for your pieces, we are dedicated to crafting a box that reflects your brand — with your logo and graphics placed exactly where they belong.",
  ],
  customizeCta: "Customize Your Boxes",
  faqMaterials: {
    q: "What materials are available for custom boxes?",
    a: "Exteriors in velvet, leatherette, satin, wood, MDF and genuine leather; interiors in velvet, satin, suede, microfiber or flocked fabric; inserts in foam, EVA, molded plastic or recycled paper. Finishes include matte, glossy, debossed, foil stamping and spot UV.",
  },
  faqSizes: {
    q: "Can I customize the size and structure of the boxes?",
    a: "Absolutely. Boxes are built to your product dimensions — lid-and-base, flip-top, sleeve-drawer and bespoke structures. Insert cavities are cut to hold each piece exactly, and fully custom dimensions are welcome.",
  },
  faqClosures: {
    q: "What closure types are available for the boxes?",
    a: "Magnetic flip-top, snap, tuck flap, ribbon tie and drawer constructions. Closures can be combined — for example a magnetic lid with a ribbon pull — and all hardware is color-matched to your brand.",
  },
};

const pouchesCopy: CategoryCopy = {
  noun: "pouches and bags",
  importanceTitle:
    "The Importance of Custom Pouches and Bags in Your Brand Experience",
  importanceIntro:
    "In competitive retail, every detail contributes to the customer experience, and a well-made pouch or bag carries that experience beyond the store. Thoughtfully designed packaging offers several key benefits for brands:",
  benefits: [
    {
      title: "Elevating Customer Experience",
      desc: "When customers receive their purchase in a plush, well-finished pouch, it enhances the overall experience and makes them feel they are acquiring something truly special.",
    },
    {
      title: "Protection and Preservation",
      desc: "Soft textile and durable paper constructions shield delicate and valuable pieces from scratches, dust and damage, keeping the product pristine until it reaches the customer's hands.",
    },
    {
      title: "Subtle Branding Opportunity",
      desc: "A pouch or bag serves as a discreet branding tool. Your logo or design reinforces brand identity at every use and creates a lasting impression on customers.",
    },
  ],
  customizeTitle: "Customize Your Bags & Pouches",
  customizeParas: [
    "At ELAPACK, we understand the importance of tailoring every detail to suit your unique style and preferences. If you don't find a compelling solution among the ones proposed, we also offer the possibility of 100% customized pouches and bags wholesale.",
    "You can always request a highly customized project in line with your style and wishes: we will be happy to find you the right solution to satisfy your needs and your customers' preferences.",
    "Whether it's a specific color, texture, or design, we're dedicated to crafting solutions that exceed your expectations and resonate with your customers' preferences. Moreover, you can add your logo and your graphics, creating packaging that totally reflects your brand and its characteristics.",
  ],
  customizeCta: "Customize Your Pouches",
  faqMaterials: {
    q: "What materials are available for custom pouches?",
    a: "We offer high-quality silk, cotton, velvet, linen, and satin. Each material can be customized with various finishes such as matte, glossy, or textured to match your brand aesthetic.",
  },
  faqSizes: {
    q: "Can I customize the size and shape of the pouches?",
    a: "Absolutely. We offer standard sizes like 6x8 inches and 4x6 inches, plus fully custom dimensions. Shapes include classic drawstring, flat bottom, zip-top, and bespoke structural designs.",
  },
  faqClosures: {
    q: "What types of closures are available for the pouches?",
    a: "We offer drawstring cord, zip-top, magnetic snap, button closure, and ribbon tie closures. Cord materials include silk, cotton, satin, and leather, all color-matched to your brand.",
  },
};

const setsCopy: CategoryCopy = {
  noun: "sets",
  importanceTitle:
    "The Importance of Coordinated Packaging Sets in Your Brand Experience",
  importanceIntro:
    "A collection of boxes, pouches and bags designed as one system tells customers the brand thinks in systems. Coordinated sets offer several key benefits:",
  benefits: [
    {
      title: "One Consistent Brand Voice",
      desc: "Matching materials, colors and finishes across every touchpoint — from retail display to gift wrap — so the brand reads the same everywhere it is met.",
    },
    {
      title: "Retail-Ready Presentation",
      desc: "Display stands, boxes and pouches sized to work together present the collection as intended, in the showcase and in the unboxing alike.",
    },
    {
      title: "One Supplier, One Standard",
      desc: "A complete set from a single production partner means one quality standard, one timeline and one point of contact for the whole collection.",
    },
  ],
  customizeTitle: "Customize Your Packaging Set",
  customizeParas: [
    "At ELAPACK, a set is designed as one project: box, pouch, bag and display elements share a material and color story specified around your brand.",
    "You can request a fully coordinated collection — or start with one element and expand. We will propose the right combination of structures and textiles to match your products and budget.",
    "Whether it is a specific Pantone tone carried from rigid box to velvet pouch, or a logo placed consistently across every piece, the set is crafted to reflect your brand at each touchpoint.",
  ],
  customizeCta: "Customize Your Set",
  faqMaterials: {
    q: "What materials are available for packaging sets?",
    a: "Sets combine our box and textile lines: rigid exteriors in velvet, leatherette, satin or MDF with velvet, satin or suede linings, paired with color-matched fabric pouches, bags and display pieces.",
  },
  faqSizes: {
    q: "Can I customize the sizes across the set?",
    a: "Yes. Each element is sized to your product — box cavity, pouch dimensions and bag capacity are specified together so the collection works as one system.",
  },
  faqClosures: {
    q: "What closure options are available across a set?",
    a: "Closures span both lines — magnetic flip-top or drawer boxes, drawstring or zip pouches, ribbon ties — coordinated so every opening gesture feels consistent.",
  },
};

export const neutralCopy: CategoryCopy = {
  noun: "products",
  importanceTitle: "The Importance of Custom Packaging in Your Brand Experience",
  importanceIntro:
    "Custom packaging is the first physical touch a customer has with your brand, and well-designed packaging works hard for it:",
  benefits: [
    {
      title: "Elevating Customer Experience",
      desc: "Packaging that fits the product and the brand makes every purchase feel considered and complete.",
    },
    {
      title: "Protection and Preservation",
      desc: "The right material and structure shield the product from scratches, dust and damage until it reaches the customer's hands.",
    },
    {
      title: "Subtle Branding Opportunity",
      desc: "Your logo and design, placed on packaging the customer keeps, reinforce brand identity long after the sale.",
    },
  ],
  customizeTitle: "Customize Your Packaging",
  customizeParas: [
    "At ELAPACK, every element of your packaging is specified around your product and brand — materials, structure, finish and print.",
    "You can always request a fully custom project in line with your style and wishes: we will propose the right solution for your needs and budget.",
    "Whether it's a specific color, texture, or design, we're dedicated to crafting packaging that reflects your brand — with your logo and graphics placed exactly where they belong.",
  ],
  customizeCta: "Customize Your Packaging",
  faqMaterials: {
    q: "What materials are available for custom packaging?",
    a: "Our lines cover rigid box exteriors with velvet, satin or suede linings, textile pouches in silk, cotton, velvet, linen and satin, and paper bags in recycled kraft — each customizable with matte, glossy or textured finishes.",
  },
  faqSizes: {
    q: "Can I customize the size and shape of my packaging?",
    a: "Absolutely. Standard sizes and fully custom dimensions are both available, with structures and shapes built around your product.",
  },
  faqClosures: {
    q: "What closure options are available?",
    a: "Drawstring cord, zip-top, magnetic flip-top, snap, button and ribbon tie closures — all color-matched to your brand.",
  },
};

export const categoryCopy: Record<string, CategoryCopy> = {
  Boxes: boxesCopy,
  "Pouches & Bags": pouchesCopy,
  "Sets & Complete Packaging": setsCopy,
};

const ECO_FAQ_ANSWER =
  "We offer eco-friendly material options including recycled kraft paper, natural cotton, and linen. Certification documents are available on request.";

export function faqsFor(category: string): { q: string; a: string }[] {
  const c = categoryCopy[category] ?? neutralCopy;
  return [
    c.faqMaterials,
    c.faqSizes,
    c.faqClosures,
    {
      q: "Do I need to provide a dieline for custom packaging?",
      a: "No. We draw the dieline to your confirmed product dimensions free of charge at the quotation stage, and custom samples are built to it. Files are supplied as PDF, AI or DXF. If you already have a vector dieline, we accept it and verify it with our die-making team before production; cutting-die tooling, where a new die is required, is quoted at USD 50–100 depending on the product.",
    },
    { q: `Are the ${c.noun} eco-friendly?`, a: ECO_FAQ_ANSWER },
    {
      q: "How long does the production process take?",
      a: "Typical production time is 15–20 days after sample approval. Shipping is by air or by sea from Shanghai or Shenzhen.",
    },
    {
      q: "Can I see a sample before placing a full order?",
      a: "Yes. Free stock samples ship in 2–3 days. Custom printed samples cost USD 25 plus USD 20 shipping (USD 45 total), are made in 3–5 days, and sample delivery takes 4–7 days.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept T/T (bank transfer) and PayPal.",
    },
  ];
}
