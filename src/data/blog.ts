// Blog / Insights placeholder content (C1–C5). Copy to be filled incrementally.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  body: string[];
}

const img = '/images/carousel';

export const blogPosts: BlogPost[] = [
  {
    id: 'c1',
    slug: 'how-to-choose-jewelry-packaging',
    title: 'How to Choose the Right Jewelry Packaging for Your Brand',
    category: 'Packaging Guide',
    excerpt:
      'A practical framework for selecting pouch, box, or gift-set packaging that matches your brand positioning and budget.',
    date: '2026-08-01',
    readTime: '5 min read',
    cover: `${img}/black-leather-box.png`,
    body: [
      'Packaging is the first physical touchpoint between your brand and your customer. The right choice reinforces your positioning before the product is even revealed.',
      'Start by defining the unboxing experience you want, then map it to a structure: soft pouches for casual and travel-ready brands, rigid boxes for luxury positioning, and coordinated sets for gifting occasions.',
      'Consider your product mix, average order value, and MOQ requirements. Low-MOQ pouches and folding boxes suit growing brands, while rigid and magnetic structures deliver a premium statement at higher volume.',
    ],
  },
  {
    id: 'c2',
    slug: 'sustainable-packaging-guide',
    title: 'Sustainable Packaging: Materials That Still Feel Premium',
    category: 'Sustainability',
    excerpt:
      'How to balance eco-friendly materials with the premium look your customers expect — without compromising presentation.',
    date: '2026-07-18',
    readTime: '4 min read',
    cover: `${img}/cotton-pouch.png`,
    body: [
      'Sustainability no longer means plain kraft and unfinished edges. FSC-certified paper, recycled cotton, and responsibly sourced fabrics can look and feel premium.',
      'Choose materials that align with your brand promise — organic cotton pouches for natural brands, FSC rigid boxes for luxury, and reusable non-woven bags for retail.',
      'Communicate the story clearly. A small "responsibly made" label or insert turns a material choice into a brand asset.',
    ],
  },
  {
    id: 'c3',
    slug: 'moq-guide-small-brands',
    title: 'Low MOQ Packaging for Small and Growing Brands',
    category: 'Production',
    excerpt:
      'How low minimum order quantities help new brands launch premium packaging without overcommitting inventory.',
    date: '2026-06-30',
    readTime: '4 min read',
    cover: `${img}/velvet-pouch.png`,
    body: [
      'For a new brand, tying up capital in thousands of units of packaging is a risk. Low-MOQ options let you test the market first.',
      'Pouches and folding boxes typically offer the most flexible MOQs, while rigid and magnetic boxes require higher volume to justify tooling.',
      'Start with a conservative run, validate demand, then scale into higher-volume structures as your brand grows.',
    ],
  },
  {
    id: 'c4',
    slug: 'customization-techniques-explained',
    title: 'Foil Stamping, Debossing & Print: Customization Explained',
    category: 'Finishing',
    excerpt:
      'A plain-language breakdown of the most popular customization techniques and when to use each one.',
    date: '2026-06-12',
    readTime: '6 min read',
    cover: `${img}/luxury-gift-box.png`,
    body: [
      'Foil stamping adds metallic shine and a tactile, premium feel — ideal for logos on rigid boxes and gift sets.',
      'Debossing presses your logo into the material for a subtle, understated luxury look that works beautifully on leatherette and velvet.',
      'Screen printing and UV printing offer full-color flexibility at lower cost, perfect for detailed artwork on pouches and paper bags.',
    ],
  },
  {
    id: 'c5',
    slug: 'unboxing-experience-that-converts',
    title: 'Designing an Unboxing Experience That Drives Repeat Purchase',
    category: 'Brand Strategy',
    excerpt:
      'Why the unboxing moment is a marketing channel — and how to design packaging that earns shares and repeat orders.',
    date: '2026-05-28',
    readTime: '5 min read',
    cover: `${img}/wooden-ring-box.png`,
    body: [
      'Customers share the unboxing moment on social media. Every layer — box, pouch, tissue, card — is an opportunity to tell your story.',
      'Layer the reveal: a rigid outer box, a soft inner pouch, and a personalized card create a memorable, shareable sequence.',
      'Design for reuse. Packaging that customers keep — a pouch, a sturdy box — keeps your brand in their daily life long after the purchase.',
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
