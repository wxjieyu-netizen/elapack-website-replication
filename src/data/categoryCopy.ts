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
      desc: "Specify the insert around the product and review fit on a loaded sample. Agree any transit checks for the complete shipping pack before relying on a protection claim.",
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
      desc: "Choose the pouch or bag construction around the product, intended use and presentation. Review the material, size, closure or handle and branding on a sample.",
    },
    {
      title: "Protection and Preservation",
      desc: "Check how the packed product fits and how the complete pack will be handled. Protective performance depends on the chosen construction and should be assessed on the sample.",
    },
    {
      title: "Subtle Branding Opportunity",
      desc: "A pouch or bag serves as a discreet branding tool. Your logo or design reinforces brand identity at every use and creates a lasting impression on customers.",
    },
  ],
  customizeTitle: "Customize Your Bags & Pouches",
  customizeParas: [
    "At ELAPACK, we understand the importance of tailoring every detail to suit your unique style and preferences. If you don't find a compelling solution among the ones proposed, we can discuss a custom pouch or bag specification based on your material, size, and artwork requirements.",
    "Share the style and function you need, and we will review suitable construction and branding options for your project.",
    "Whether it's a specific color, texture, or design, we can review suitable options for your logo, graphics, and packaging details during quotation.",
  ],
  customizeCta: "Customize Your Pouches",
};

const displayCopy: CategoryCopy = {
  noun: "display prop",
  importanceTitle: "Plan a Retail Display Around Your Products",
  importanceIntro: "A display stand or tray needs to fit the products and the space where it will be used. Review these choices in the quotation and sample:",
  benefits: [
    {
      title: "Product Fit",
      desc: "Specify the items, their dimensions and how each will sit on the proposed stand or tray.",
    },
    {
      title: "Display Space",
      desc: "Check the proposed footprint, height and layout against your counter or showcase.",
    },
    {
      title: "Finish Review",
      desc: "Confirm the surface, colour and branding method against an approved sample.",
    },
  ],
  customizeTitle: "Specify Your Display Prop",
  customizeParas: [
    "Share the jewelry pieces or other items to display, available counter space, preferred finish and artwork. We can review the proposed dimensions, material and layout in a quotation and sample.",
  ],
  customizeCta: "Request a Display Quote",
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
  "Retail Display Props": displayCopy,
};

export function faqsFor(product: { slug?: string; name: string; category: string; materials: string }): { q: string; a: string }[] {
  if (product.slug === "custom-ring-boxes") return [
    { q: "What should I send for a custom ring box quote?", a: "Send the ring's band width and setting height, rings per box, preferred appearance, logo artwork, quantity and delivery destination. We will confirm the proposed box and insert specification in the quotation." },
    { q: "How do I check the ring insert before bulk production?", a: "Review the proposed slot layout and use your actual ring to check retention, appearance and removal in an approved physical sample. A visual effect preview does not replace this fit check." },
    { q: "What is the minimum order?", a: "The minimum is 200 pieces. Confirm how sizes, colours and artwork are allocated in the quotation; the minimum does not imply that every variant can be split freely." },
    { q: "Are samples and visual previews available?", a: "A visual preview of the proposed box structure is free. Stock samples are free with USD 25 shipping and typically take 4–7 days for delivery. Custom samples cost USD 25 plus USD 20 shipping and take 3–5 days to make; delivery time is separate." },
    { q: "When does production begin?", a: "Typical production takes 15–20 days after sample approval and payment receipt. Shipping time and the final schedule are confirmed for the order." },
  ];
  return [
    product.materials.includes("to confirm") ? {
      q: `How are materials confirmed for ${product.name}?`,
      a: "Share the item dimensions, intended use and material preference. The exact construction is specified in the quotation and checked in the approved sample before production.",
    } : {
      q: `What materials are listed for ${product.name}?`,
      a: `The listed construction is ${product.materials}. Share your product dimensions and required finish so we can confirm the suitable specification in your quote.`,
    },
    {
      q: "Can I review a dieline preview?",
      a: "Yes. Share your product dimensions and any existing artwork or dieline so we can prepare a free digital dieline preview for reviewing the proposed structure. Confirm the final specification with us before production.",
    },
    {
      q: "How long does the production process take?",
      a: "Typical production time is 15–20 days after sample approval and payment receipt. Shipping is by air or by sea from Shanghai or Shenzhen.",
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
