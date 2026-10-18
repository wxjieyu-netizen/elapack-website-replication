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
};

export const categoryCopy: Record<string, CategoryCopy> = {
  Boxes: boxesCopy,
  "Pouches & Bags": pouchesCopy,
  "Sets & Complete Packaging": setsCopy,
};

export function faqsFor(product: { name: string; category: string; materials: string }): { q: string; a: string }[] {
  return [
    {
      q: `What materials are listed for ${product.name}?`,
      a: `The listed construction is ${product.materials}. Share your product dimensions and required finish so we can confirm the suitable specification in your quote.`,
    },
    {
      q: "What drawing and tooling information do you need?",
      a: "Send your product dimensions and any existing artwork or dieline. We will confirm the drawing requirements in your quote. If an existing stock-size die fits, there is no new tooling charge; if a new custom cutting die is needed, it is quoted at USD 50–100.",
    },
    {
      q: "How long does the production process take?",
      a: "Typical production time is 15–20 days after sample approval. Shipping is by air or by sea from Shanghai or Shenzhen.",
    },
    {
      q: "Can I see a sample before placing a full order?",
      a: "Yes. Stock samples are free, with USD 25 shipping and 4–7 days for delivery. Custom printed samples cost USD 25 plus USD 20 shipping and take 3–5 days to make. Confirm the sample specification before ordering.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept T/T (bank transfer) and PayPal.",
    },
  ];
}
