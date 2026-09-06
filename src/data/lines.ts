// New IA data model: 3 product lines → 15 application series.
// Content is placeholder scaffolding; copy + images to be filled in incrementally.

export type LineId = 'pouches' | 'boxes' | 'sets';

export interface FilterOption {
  name: string;
  slug: string;
}

export interface BundleItem {
  name: string;
  image: string;
}

export interface Series {
  id: string;
  lineId: LineId;
  name: string;
  slug: string;
  path: string;
  intro: string;
  heroImage: string;
  specs: { label: string; value: string }[];
  process: string[];
  applicationImages: string[];
  // Boxes-specific
  structureImage?: string;
  linerOptions?: string[];
  // Sets-specific
  bundleItems?: BundleItem[];
  customFlow?: string[];
  moq: string;
  products: string[];
}

export interface ProductLine {
  id: LineId;
  name: string;
  shortName: string;
  slug: string;
  path: string;
  tagline: string;
  heroImage: string;
  featured: boolean;
  filterLabel: string;
  filters: FilterOption[];
  series: Series[];
}

const img = '/images/carousel';

export const productLines: ProductLine[] = [
  {
    id: 'pouches',
    name: 'Pouches & Bags',
    shortName: 'Pouches',
    slug: 'pouches',
    path: '/pouches',
    tagline: 'Soft, reusable pouches and bags for jewelry, fragrance, beauty and retail.',
    heroImage: `${img}/velvet-pouch.png`,
    featured: true,
    filterLabel: 'Material',
    filters: [
      { name: 'Velvet', slug: 'velvet' },
      { name: 'Cotton', slug: 'cotton' },
      { name: 'Muslin', slug: 'muslin' },
      { name: 'Non-woven', slug: 'non-woven' },
      { name: 'Paper', slug: 'paper' },
    ],
    series: [
      {
        id: 'pouches-jewelry-eyewear',
        lineId: 'pouches',
        name: 'Jewelry & Eyewear',
        slug: 'jewelry-eyewear',
        path: '/pouches/jewelry-eyewear',
        intro:
          'Velvet and soft-touch pouches for rings, necklaces, bracelets and eyewear. Designed to protect delicate pieces while elevating the unboxing moment.',
        heroImage: `${img}/velvet-pouch.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (5×5cm to 20×20cm)' },
          { label: 'Fabric', value: 'Velvet / Cotton / Muslin / Non-woven' },
          { label: 'Closure', value: 'Drawstring / Zipper / Flap' },
          { label: 'Logo', value: 'Print / Woven Label / Foil Stamp' },
        ],
        process: ['Screen Printing', 'Woven Label', 'Foil Stamping', 'Embroidery'],
        applicationImages: [`${img}/velvet-pouch.png`, `${img}/cotton-pouch.png`],
        moq: '300 pcs',
        products: ['p7', 'p8'],
      },
      {
        id: 'pouches-fragrance',
        lineId: 'pouches',
        name: 'Fragrance',
        slug: 'fragrance',
        path: '/pouches/fragrance',
        intro:
          'Drawstring and muslin pouches for perfumes, diffusers and candles — soft presentation that protects glass and finished surfaces.',
        heroImage: `${img}/cotton-pouch.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (8×10cm to 30×40cm)' },
          { label: 'Fabric', value: 'Muslin / Cotton / Non-woven' },
          { label: 'Closure', value: 'Drawstring / Ribbon Tie' },
          { label: 'Logo', value: 'Print / Woven Label' },
        ],
        process: ['Screen Printing', 'Woven Label', 'Foil Stamping'],
        applicationImages: [`${img}/cotton-pouch.png`],
        moq: '300 pcs',
        products: [],
      },
      {
        id: 'pouches-hair-beauty',
        lineId: 'pouches',
        name: 'Hair & Beauty',
        slug: 'hair-beauty',
        path: '/pouches/hair-beauty',
        intro:
          'Large-format bags for hair extensions, wigs and beauty sets — durable fabrics with reinforced seams for heavier products.',
        heroImage: `${img}/cotton-pouch.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (large format)' },
          { label: 'Fabric', value: 'Cotton / Non-woven / Muslin' },
          { label: 'Closure', value: 'Drawstring / Zipper' },
          { label: 'Logo', value: 'Print / Woven Label' },
        ],
        process: ['Screen Printing', 'Woven Label', 'Foil Stamping'],
        applicationImages: [`${img}/cotton-pouch.png`],
        moq: '300 pcs',
        products: [],
      },
      {
        id: 'pouches-fashion',
        lineId: 'pouches',
        name: 'Fashion',
        slug: 'fashion',
        path: '/pouches/fashion',
        intro:
          'Apparel and accessory bags for fashion brands — reusable, on-brand packaging for garments and small leather goods.',
        heroImage: `${img}/cotton-pouch.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (apparel sizes)' },
          { label: 'Fabric', value: 'Cotton / Non-woven / Paper' },
          { label: 'Closure', value: 'Drawstring / Handle' },
          { label: 'Logo', value: 'Print / Woven Label' },
        ],
        process: ['Screen Printing', 'Woven Label', 'Foil Stamping'],
        applicationImages: [`${img}/cotton-pouch.png`],
        moq: '300 pcs',
        products: [],
      },
      {
        id: 'pouches-gift',
        lineId: 'pouches',
        name: 'Gift',
        slug: 'gift',
        path: '/pouches/gift',
        intro:
          'Gift pouches and paper bags for retail gifting — finished presentation with branded handles and tissue-ready interiors.',
        heroImage: `${img}/kraft-bag.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (S / M / L)' },
          { label: 'Fabric', value: 'Paper / Non-woven / Cotton' },
          { label: 'Closure', value: 'Open / Twine Handle / Rope Handle' },
          { label: 'Logo', value: 'Print / Foil Stamp' },
        ],
        process: ['Screen Printing', 'Foil Stamping', 'Debossing'],
        applicationImages: [`${img}/kraft-bag.png`],
        moq: '300 pcs',
        products: ['p11'],
      },
    ],
  },
  {
    id: 'boxes',
    name: 'Boxes',
    shortName: 'Boxes',
    slug: 'boxes',
    path: '/boxes',
    tagline: 'Rigid, folding and magnetic boxes with premium inserts for every category.',
    heroImage: `${img}/black-leather-box.png`,
    featured: false,
    filterLabel: 'Type',
    filters: [
      { name: 'Rigid', slug: 'rigid' },
      { name: 'Folding Carton', slug: 'folding-carton' },
      { name: 'Magnetic / Flip-top', slug: 'magnetic-flip-top' },
      { name: 'Inserts', slug: 'inserts' },
    ],
    series: [
      {
        id: 'boxes-jewelry-eyewear',
        lineId: 'boxes',
        name: 'Jewelry & Eyewear',
        slug: 'jewelry-eyewear',
        path: '/boxes/jewelry-eyewear',
        intro:
          'Hinged, magnetic and flip-top boxes with fitted inserts for rings, necklaces, earrings and eyewear.',
        heroImage: `${img}/black-leather-box.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (ring to watch sizes)' },
          { label: 'Material', value: 'Rigid / Folding / Magnetic' },
          { label: 'Finish', value: 'Leatherette / Velvet / Paper Wrap' },
          { label: 'Logo', value: 'Foil Stamp / Deboss / UV Print' },
        ],
        process: ['Foil Stamping', 'Debossing', 'UV Printing', 'Embossing'],
        structureImage: `${img}/ring-box-black.png`,
        linerOptions: ['Velvet Insert', 'Satin Insert', 'Cardboard Insert', 'Custom Molded Insert'],
        applicationImages: [`${img}/black-leather-box.png`, `${img}/pandora-box.png`, `${img}/wooden-ring-box.png`],
        moq: '500 pcs',
        products: ['p1', 'p2', 'p3', 'p4', 'p9', 'p10', 'p12'],
      },
      {
        id: 'boxes-fragrance',
        lineId: 'boxes',
        name: 'Fragrance',
        slug: 'fragrance',
        path: '/boxes/fragrance',
        intro:
          'Perfume and candle boxes with bottle holders and dividers — engineered structure for secure, premium presentation.',
        heroImage: `${img}/luxury-gift-box.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (bottle / set sizes)' },
          { label: 'Material', value: 'Rigid / Folding' },
          { label: 'Finish', value: 'Paper Wrap / Leatherette' },
          { label: 'Logo', value: 'Foil Stamp / UV Print' },
        ],
        process: ['Foil Stamping', 'Debossing', 'UV Printing'],
        structureImage: `${img}/luxury-gift-box.png`,
        linerOptions: ['Bottle Holder', 'Divided Insert', 'Foam Insert'],
        applicationImages: [`${img}/luxury-gift-box.png`],
        moq: '500 pcs',
        products: [],
      },
      {
        id: 'boxes-hair-beauty',
        lineId: 'boxes',
        name: 'Hair & Beauty',
        slug: 'hair-beauty',
        path: '/boxes/hair-beauty',
        intro:
          'Boxes for hair extensions, wigs and beauty kits — durable structures sized for full product ranges.',
        heroImage: `${img}/luxury-gift-box.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom (large format)' },
          { label: 'Material', value: 'Rigid / Folding' },
          { label: 'Finish', value: 'Paper Wrap / Leatherette' },
          { label: 'Logo', value: 'Foil Stamp / UV Print' },
        ],
        process: ['Foil Stamping', 'Debossing', 'UV Printing'],
        structureImage: `${img}/luxury-gift-box.png`,
        linerOptions: ['Divided Insert', 'Foam Insert', 'Cardboard Insert'],
        applicationImages: [`${img}/luxury-gift-box.png`],
        moq: '500 pcs',
        products: [],
      },
      {
        id: 'boxes-fashion',
        lineId: 'boxes',
        name: 'Fashion',
        slug: 'fashion',
        path: '/boxes/fashion',
        intro:
          'Accessory and apparel gift boxes for fashion brands — structured presentation with customizable interiors.',
        heroImage: `${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom' },
          { label: 'Material', value: 'Rigid / Folding / Magnetic' },
          { label: 'Finish', value: 'Paper Wrap / Leatherette' },
          { label: 'Logo', value: 'Foil Stamp / UV Print' },
        ],
        process: ['Foil Stamping', 'Debossing', 'UV Printing'],
        structureImage: `${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png`,
        linerOptions: ['Tissue Insert', 'Divided Insert', 'Cardboard Insert'],
        applicationImages: [`${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png`],
        moq: '500 pcs',
        products: [],
      },
      {
        id: 'boxes-gift',
        lineId: 'boxes',
        name: 'Gift',
        slug: 'gift',
        path: '/boxes/gift',
        intro:
          'Rigid and magnetic gift boxes with ribbon or flip-top closures for premium gifting.',
        heroImage: `${img}/luxury-gift-box.png`,
        specs: [
          { label: 'Dimensions', value: 'Custom' },
          { label: 'Material', value: 'Rigid / Magnetic / Flip-top' },
          { label: 'Finish', value: 'Paper Wrap / Leatherette' },
          { label: 'Logo', value: 'Foil Stamp / Deboss' },
        ],
        process: ['Foil Stamping', 'Debossing', 'Ribbon Attachment'],
        structureImage: `${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png`,
        linerOptions: ['Velvet Insert', 'Satin Insert', 'Foam Insert'],
        applicationImages: [`${img}/luxury-gift-box.png`, `${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png`],
        moq: '500 pcs',
        products: ['p5', 'p6'],
      },
    ],
  },
  {
    id: 'sets',
    name: 'Sets & Bundles',
    shortName: 'Sets',
    slug: 'sets',
    path: '/sets',
    tagline: 'Coordinated multi-piece gift sets — box + pouch + accessories, fully customized.',
    heroImage: `${img}/luxury-gift-box.png`,
    featured: false,
    filterLabel: 'Composite Type',
    filters: [
      { name: 'Jewelry & Eyewear Set', slug: 'jewelry-eyewear-set' },
      { name: 'Fragrance Set', slug: 'fragrance-set' },
      { name: 'Hair & Beauty Set', slug: 'hair-beauty-set' },
      { name: 'Fashion Set', slug: 'fashion-set' },
      { name: 'Gift Set', slug: 'gift-set' },
    ],
    series: [
      {
        id: 'sets-jewelry-eyewear-set',
        lineId: 'sets',
        name: 'Jewelry & Eyewear Set',
        slug: 'jewelry-eyewear-set',
        path: '/sets/jewelry-eyewear-set',
        intro:
          'Complete jewelry & eyewear gift sets combining box, pouch, cleaning cloth and card.',
        heroImage: `${img}/black-leather-box.png`,
        specs: [
          { label: 'Composition', value: 'Box + Pouch + Cloth + Card' },
          { label: 'Materials', value: 'Leatherette / Velvet / Cotton' },
          { label: 'Logo', value: 'Foil Stamp / Print' },
        ],
        process: ['Foil Stamping', 'Printing', 'Assembly'],
        bundleItems: [
          { name: 'Jewelry Box', image: `${img}/black-leather-box.png` },
          { name: 'Velvet Pouch', image: `${img}/velvet-pouch.png` },
          { name: 'Cleaning Cloth', image: `${img}/cotton-pouch.png` },
          { name: 'Gift Card', image: `${img}/kraft-bag.png` },
        ],
        customFlow: ['Design', 'Sampling', 'Mass Production', 'QC & Delivery'],
        applicationImages: [`${img}/black-leather-box.png`, `${img}/velvet-pouch.png`],
        moq: '300 sets',
        products: ['p1', 'p7'],
      },
      {
        id: 'sets-fragrance-set',
        lineId: 'sets',
        name: 'Fragrance Set',
        slug: 'fragrance-set',
        path: '/sets/fragrance-set',
        intro: 'Fragrance gift sets pairing a rigid box with a protective pouch.',
        heroImage: `${img}/luxury-gift-box.png`,
        specs: [
          { label: 'Composition', value: 'Box + Pouch' },
          { label: 'Materials', value: 'Rigid + Cotton' },
          { label: 'Logo', value: 'Foil Stamp / Print' },
        ],
        process: ['Foil Stamping', 'Printing', 'Assembly'],
        bundleItems: [
          { name: 'Fragrance Box', image: `${img}/luxury-gift-box.png` },
          { name: 'Cotton Pouch', image: `${img}/cotton-pouch.png` },
        ],
        customFlow: ['Design', 'Sampling', 'Mass Production', 'QC & Delivery'],
        applicationImages: [`${img}/luxury-gift-box.png`],
        moq: '300 sets',
        products: [],
      },
      {
        id: 'sets-hair-beauty-set',
        lineId: 'sets',
        name: 'Hair & Beauty Set',
        slug: 'hair-beauty-set',
        path: '/sets/hair-beauty-set',
        intro: 'Hair and beauty bundles combining pouches or boxes with accessories.',
        heroImage: `${img}/cotton-pouch.png`,
        specs: [
          { label: 'Composition', value: 'Pouch/Box + Accessories' },
          { label: 'Materials', value: 'Cotton / Rigid' },
          { label: 'Logo', value: 'Print / Foil Stamp' },
        ],
        process: ['Printing', 'Foil Stamping', 'Assembly'],
        bundleItems: [
          { name: 'Beauty Pouch', image: `${img}/cotton-pouch.png` },
          { name: 'Gift Box', image: `${img}/luxury-gift-box.png` },
        ],
        customFlow: ['Design', 'Sampling', 'Mass Production', 'QC & Delivery'],
        applicationImages: [`${img}/cotton-pouch.png`],
        moq: '300 sets',
        products: [],
      },
      {
        id: 'sets-fashion-set',
        lineId: 'sets',
        name: 'Fashion Set',
        slug: 'fashion-set',
        path: '/sets/fashion-set',
        intro: 'Fashion gift bundles pairing boxes, pouches and accessories for apparel brands.',
        heroImage: `${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png`,
        specs: [
          { label: 'Composition', value: 'Box + Pouch + Accessories' },
          { label: 'Materials', value: 'Rigid / Cotton' },
          { label: 'Logo', value: 'Foil Stamp / Print' },
        ],
        process: ['Foil Stamping', 'Printing', 'Assembly'],
        bundleItems: [
          { name: 'Fashion Box', image: `${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png` },
          { name: 'Apparel Pouch', image: `${img}/cotton-pouch.png` },
        ],
        customFlow: ['Design', 'Sampling', 'Mass Production', 'QC & Delivery'],
        applicationImages: [`${img}/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png`],
        moq: '300 sets',
        products: [],
      },
      {
        id: 'sets-gift-set',
        lineId: 'sets',
        name: 'Gift Set',
        slug: 'gift-set',
        path: '/sets/gift-set',
        intro: 'Premium gift sets — a coordinated box and bag with ribbon and card for retail gifting.',
        heroImage: `${img}/luxury-gift-box.png`,
        specs: [
          { label: 'Composition', value: 'Box + Bag + Card' },
          { label: 'Materials', value: 'Rigid + Paper' },
          { label: 'Logo', value: 'Foil Stamp / Print' },
        ],
        process: ['Foil Stamping', 'Printing', 'Assembly'],
        bundleItems: [
          { name: 'Gift Box', image: `${img}/luxury-gift-box.png` },
          { name: 'Paper Bag', image: `${img}/kraft-bag.png` },
          { name: 'Gift Card', image: `${img}/kraft-bag.png` },
        ],
        customFlow: ['Design', 'Sampling', 'Mass Production', 'QC & Delivery'],
        applicationImages: [`${img}/luxury-gift-box.png`],
        moq: '300 sets',
        products: ['p5'],
      },
    ],
  },
];

export const getLine = (id: string) => productLines.find((l) => l.id === id);
export const getSeries = (path: string) =>
  productLines.flatMap((l) => l.series).find((s) => s.path === path);
export const allSeries = productLines.flatMap((l) => l.series);
