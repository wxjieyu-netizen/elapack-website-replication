export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  groups: { label: string; items: SubCategory[] }[];
  image: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  dimensions: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  related: string[];
}

export const categories: Category[] = [
  {
    name: 'Jewelry Boxes',
    slug: 'jewelry-boxes',
    image: '/images/carousel/exec-d88bc44e-a36e-4f12-b991-f3f746e07e39 copy.png',
    groups: [
      {
        label: 'By Material',
        items: [
          { name: 'Leatherette Jewelry Boxes', slug: 'leatherette' },
          { name: 'Suede Jewelry Boxes', slug: 'suede' },
          { name: 'Hinged Jewelry Boxes', slug: 'hinged' },
          { name: 'Velvet Jewelry Boxes', slug: 'velvet' },
          { name: 'Wooden Jewelry Boxes', slug: 'wooden' },
          { name: 'Satin Finish Jewelry Boxes', slug: 'satin-finish' },
          { name: 'Cardboard Boxes', slug: 'cardboard' },
          { name: 'Genuine Leather Jewelry Boxes', slug: 'genuine-leather' },
          { name: 'Fabric Jewelry Boxes', slug: 'fabric' },
        ],
      },
      {
        label: 'By Usage',
        items: [
          { name: 'Ring Boxes', slug: 'ring-boxes' },
          { name: 'Necklace Boxes', slug: 'necklace-boxes' },
          { name: 'Earring Boxes', slug: 'earring-boxes' },
          { name: 'Bracelet Boxes', slug: 'bracelet-boxes' },
          { name: 'Pendant Boxes', slug: 'pendant-boxes' },
          { name: 'Watch Boxes', slug: 'watch-boxes' },
          { name: 'Chain Boxes', slug: 'chain-boxes' },
        ],
      },
      {
        label: 'By Style',
        items: [
          { name: 'Luxury Jewelry Boxes', slug: 'luxury' },
          { name: 'Minimalist Jewelry Boxes', slug: 'minimalist' },
          { name: 'Vintage Jewelry Boxes', slug: 'vintage' },
          { name: 'Magnetic Closure Boxes', slug: 'magnetic' },
          { name: 'Drawer Jewelry Boxes', slug: 'drawer' },
          { name: 'Flip-Top Jewelry Boxes', slug: 'flip-top' },
        ],
      },
    ],
  },
  {
    name: 'Gift Boxes',
    slug: 'gift-boxes',
    image: '/images/carousel/exec-ac576c60-6d80-4a56-871a-f06db31937c1.png',
    groups: [
      {
        label: 'By Style',
        items: [
          { name: 'Luxury Gift Boxes', slug: 'luxury-gift-boxes' },
          { name: 'Magnetic Gift Boxes', slug: 'magnetic-gift-boxes' },
          { name: 'Drawer Gift Boxes', slug: 'drawer-gift-boxes' },
          { name: 'Flip-Top Gift Boxes', slug: 'flip-top-gift-boxes' },
        ],
      },
      {
        label: 'By Occasion',
        items: [
          { name: 'Christmas Gift Boxes', slug: 'christmas' },
          { name: "Valentine's Day Gift Boxes", slug: 'valentines' },
          { name: 'Birthday Gift Boxes', slug: 'birthday' },
          { name: 'Wedding Gift Boxes', slug: 'wedding' },
          { name: 'Anniversary Gift Boxes', slug: 'anniversary' },
        ],
      },
      {
        label: 'By Object',
        items: [
          { name: 'Gift Boxes For Men', slug: 'for-men' },
          { name: 'Gift Boxes For Women', slug: 'for-women' },
          { name: 'Corporate Gift Boxes', slug: 'corporate' },
        ],
      },
    ],
  },
  {
    name: 'Jewelry Pouches',
    slug: 'jewelry-pouches',
    image: '/images/carousel/exec-983ef1db-910e-4a72-b8a1-f65e8cb1702d.png',
    groups: [
      {
        label: 'By Material',
        items: [
          { name: 'Velvet Jewelry Pouches', slug: 'velvet-pouches' },
          { name: 'PU Leather Jewelry Pouches', slug: 'pu-leather-pouches' },
          { name: 'Silk Jewelry Pouches', slug: 'silk-pouches' },
          { name: 'Cotton Jewelry Pouches', slug: 'cotton-pouches' },
          { name: 'Nylon Jewelry Pouches', slug: 'nylon-pouches' },
          { name: 'Leather Jewelry Pouches', slug: 'leather-pouches' },
        ],
      },
      {
        label: 'By Function',
        items: [
          { name: 'Travel Jewelry Pouches', slug: 'travel-pouches' },
          { name: 'Zipper Jewelry Pouches', slug: 'zipper-pouches' },
          { name: 'Drawstring Jewelry Pouches', slug: 'drawstring-pouches' },
          { name: 'Gift Jewelry Pouches', slug: 'gift-pouches' },
          { name: 'Storage Jewelry Pouches', slug: 'storage-pouches' },
        ],
      },
    ],
  },
  {
    name: 'Jewelry Display',
    slug: 'jewelry-display',
    image: '/images/carousel/exec-0d39797a-3fe3-4f1d-a468-53dba5386b8f.png',
    groups: [
      {
        label: 'By Type',
        items: [
          { name: 'Bracelet & Bangle Display', slug: 'bracelet-display' },
          { name: 'Earring Displays', slug: 'earring-displays' },
          { name: 'Necklace Displays', slug: 'necklace-displays' },
          { name: 'Pendant Displays', slug: 'pendant-displays' },
          { name: 'Watch Displays', slug: 'watch-displays' },
          { name: 'Ring Displays', slug: 'ring-displays' },
        ],
      },
      {
        label: 'By Material',
        items: [
          { name: 'Acrylic & PVC Display', slug: 'acrylic-pvc-display' },
          { name: 'Velvet Display Stands', slug: 'velvet-display' },
          { name: 'Wooden Display Stands', slug: 'wooden-display' },
          { name: 'Leatherette Display', slug: 'leatherette-display' },
        ],
      },
    ],
  },
  {
    name: 'Paper Bags',
    slug: 'paper-bags',
    image: '/images/carousel/12981ddc-6d07-4d8c-8eb1-0f7333d3a819-ela-pack.webp',
    groups: [
      {
        label: 'By Size',
        items: [
          { name: 'Small Paper Bags', slug: 'small-paper-bags' },
          { name: 'Medium Paper Bags', slug: 'medium-paper-bags' },
          { name: 'Large Paper Bags', slug: 'large-paper-bags' },
        ],
      },
      {
        label: 'By Type',
        items: [
          { name: 'Kraft Paper Bags', slug: 'kraft-paper-bags' },
          { name: 'Coated Paper Bags', slug: 'coated-paper-bags' },
          { name: 'Recycled Paper Bags', slug: 'recycled-paper-bags' },
          { name: 'Tote Paper Bags', slug: 'tote-paper-bags' },
        ],
      },
      {
        label: 'By Handle',
        items: [
          { name: 'Twine Handle Bags', slug: 'twine-handles' },
          { name: 'Cotton Handle Bags', slug: 'cotton-handles' },
          { name: 'Plastic Handle Bags', slug: 'plastic-handles' },
        ],
      },
    ],
  },
  {
    name: 'Jewelry Trays',
    slug: 'jewelry-trays',
    image: '/images/carousel/image copy.png',
    groups: [
      {
        label: 'By Type',
        items: [
          { name: 'Stackable Jewelry Trays', slug: 'stackable-trays' },
          { name: 'Velvet Jewelry Trays', slug: 'velvet-trays' },
          { name: 'Compartmental Jewelry Trays', slug: 'compartmental-trays' },
          { name: 'Drawer Insert Jewelry Trays', slug: 'drawer-insert-trays' },
          { name: 'Showcase Jewelry Trays', slug: 'showcase-trays' },
        ],
      },
    ],
  },
];

const img = {
  box1: 'https://images.pexels.com/photos/4271701/pexels-photo-4271701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  box2: 'https://images.pexels.com/photos/16399981/pexels-photo-16399981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  box3: 'https://images.pexels.com/photos/7093186/pexels-photo-7093186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  box4: 'https://images.pexels.com/photos/5413313/pexels-photo-5413313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  box5: 'https://images.pexels.com/photos/5413308/pexels-photo-5413308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  box6: 'https://images.pexels.com/photos/12303223/pexels-photo-12303223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring1: 'https://images.pexels.com/photos/30505263/pexels-photo-30505263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring2: 'https://images.pexels.com/photos/34580010/pexels-photo-34580010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring3: 'https://images.pexels.com/photos/38728728/pexels-photo-38728728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring4: 'https://images.pexels.com/photos/5046212/pexels-photo-5046212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring5: 'https://images.pexels.com/photos/19525067/pexels-photo-19525067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring6: 'https://images.pexels.com/photos/31209263/pexels-photo-31209263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring7: 'https://images.pexels.com/photos/20526678/pexels-photo-20526678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring8: 'https://images.pexels.com/photos/29612233/pexels-photo-29612233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ring9: 'https://images.pexels.com/photos/11351004/pexels-photo-11351004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  gift1: 'https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  gift2: 'https://images.pexels.com/photos/7984845/pexels-photo-7984845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  gift3: 'https://images.pexels.com/photos/5872362/pexels-photo-5872362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  gift4: 'https://images.pexels.com/photos/33629664/pexels-photo-33629664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  gift5: 'https://images.pexels.com/photos/7670677/pexels-photo-7670677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouch1: 'https://images.pexels.com/photos/3850539/pexels-photo-3850539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouch2: 'https://images.pexels.com/photos/3850566/pexels-photo-3850566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouch3: 'https://images.pexels.com/photos/3850538/pexels-photo-3850538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pouch4: 'https://images.pexels.com/photos/3850557/pexels-photo-3850557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  display1: 'https://images.pexels.com/photos/14789188/pexels-photo-14789188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  display2: 'https://images.pexels.com/photos/33561789/pexels-photo-33561789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  display3: 'https://images.pexels.com/photos/29528804/pexels-photo-29528804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  display4: 'https://images.pexels.com/photos/30650803/pexels-photo-30650803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bag1: 'https://images.pexels.com/photos/11348561/pexels-photo-11348561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bag2: 'https://images.pexels.com/photos/11348488/pexels-photo-11348488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bag3: 'https://images.pexels.com/photos/29914090/pexels-photo-29914090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tray1: 'https://images.pexels.com/photos/16038184/pexels-photo-16038184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tray2: 'https://images.pexels.com/photos/19945744/pexels-photo-19945744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  tray3: 'https://images.pexels.com/photos/19945746/pexels-photo-19945746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  eco1: 'https://images.pexels.com/photos/10418013/pexels-photo-10418013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  eco2: 'https://images.pexels.com/photos/17260157/pexels-photo-17260157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  eco3: 'https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  hero1: 'https://images.pexels.com/photos/16399981/pexels-photo-16399981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  hero2: 'https://images.pexels.com/photos/7093186/pexels-photo-7093186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  hero3: 'https://images.pexels.com/photos/29873657/pexels-photo-29873657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Black Leather Jewelry Box | Custom Luxury Packaging',
    slug: 'black-leather-jewelry-box',
    category: 'jewelry-boxes',
    dimensions: '1-3/4"W x 2"D x 1-1/2"H',
    image: '/images/carousel/black-leather-box.png',
    gallery: [
      '/images/carousel/black-leather-box.png',
      '/images/carousel/black-leather-box-detail-1.png',
      '/images/carousel/black-leather-box-detail-2.png',
      '/images/carousel/black-leather-box-detail-3.png',
    ],
    description:
      'The black leather jewelry box is more than just storage — it is a timeless statement of sophistication. Crafted from smooth grain faux leather in a deep, matte black tone, this box offers an elevated unboxing experience that reflects your brand commitment to quality. Its sleek, fingerprint-resistant exterior enhances visual appeal while staying pristine even with daily use.',
    features: [
      'Premium faux leather exterior with matte finish',
      'Plush velvet interior lining for gentle protection',
      'Custom logo embossing and color detailing available',
      'Compact structure with smart compartment layout',
      'FSC certified materials available on request',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Faux Leather, Velvet Interior, Cardboard Core' },
      { label: 'Dimensions (L x W x H)', value: 'Customizable per customer requirement' },
      { label: 'Exterior', value: 'Velvet, Leatherette, Wood, Satin, Cardboard, MDF, Acrylic, Genuine Leather, Suede, Metal, Plastic' },
      { label: 'Interior', value: 'Velvet, Satin, Suede, Microfiber, Cotton, Flocked Fabric, Felt' },
      { label: 'Insert', value: 'Foam, Molded Plastic, EVA, Cardboard, Flocked Plastic, Recycled Paper' },
      { label: 'Surface Finish', value: 'Matte / Glossy / Debossed / Foil Stamping / Spot UV / Embossing' },
      { label: 'Closure Type', value: 'Magnetic / Snap / Tuck Flap / Ribbon Tie / Lid and Base / Drawer / Flip-Top' },
      { label: 'Additional Features', value: 'LED Lighting, Removable Compartments, Mirror, Magnetic Closure, Cushion Inserts' },
      { label: 'Eco-friendly', value: 'Recyclable / Biodegradable / Reusable' },
      { label: 'MOQ', value: '500pcs / 1000pcs / 2000pcs' },
      { label: 'Lead Time', value: '4-6 weeks (10-20 days for rush orders)' },
      { label: 'Payment', value: 'L/C, D/A, D/P, Western Union, PayPal, Visa, Credit Card' },
    ],
    related: ['p2', 'p3', 'p4'],
  },
  {
    id: 'p2',
    name: 'Pandora Jewelry Box in White Plastic | Compact Gift Packaging',
    slug: 'pandora-jewelry-box-white',
    category: 'jewelry-boxes',
    dimensions: '1-3/4"W x 2"D x 1-1/2"H',
    image: '/images/carousel/pandora-box.png',
    gallery: [
      '/images/carousel/pandora-box.png',
      '/images/carousel/pandora-box-detail-1.png',
      '/images/carousel/pandora-box-detail-2.png',
      '/images/carousel/pandora-box-detail-3.png',
    ],
    description:
      'A compact white plastic jewelry box inspired by Pandora-style packaging. Perfect for bracelets and small jewelry gifts, combining a clean minimalist look with durable protection. Ideal for retail display and gifting occasions.',
    features: [
      'Durable white plastic shell with smooth finish',
      'Soft interior cushion for jewelry protection',
      'Compact and lightweight for retail display',
      'Custom logo printing available',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Plastic exterior, Velvet interior insert' },
      { label: 'Dimensions (L x W x H)', value: '1-3/4" x 2" x 1-1/2"' },
      { label: 'Surface Finish', value: 'Glossy white' },
      { label: 'Closure Type', value: 'Snap closure' },
      { label: 'MOQ', value: '1000pcs' },
      { label: 'Lead Time', value: '15-25 days' },
    ],
    related: ['p1', 'p3', 'p5'],
  },
  {
    id: 'p3',
    name: 'Double Ring Storage Box | Black Velvet Ring Box for Two Rings',
    slug: 'double-ring-storage-box',
    category: 'jewelry-boxes',
    dimensions: '1-3/4"W x 2"D x 1-1/2"H',
    image: '/images/carousel/ring-box-black.png',
    gallery: [
      '/images/carousel/ring-box-black.png',
      '/images/carousel/ring-box-detail-1.png',
      '/images/carousel/ring-box-detail-2.png',
      '/images/carousel/ring-box-detail-3.png',
    ],
    description:
      'A slim black velvet double ring box designed for weddings and engagements. Holds two rings securely side by side with plush velvet lining. The elegant matte black exterior makes it perfect for proposal moments and retail presentation.',
    features: [
      'Dual ring slot with velvet insert',
      'Slim profile for pocket-friendly carrying',
      'Matte black velvet exterior',
      'Magnetic closure for secure fit',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Velvet exterior, Foam insert with velvet covering' },
      { label: 'Dimensions (L x W x H)', value: '1-3/4" x 2" x 1-1/2"' },
      { label: 'Closure Type', value: 'Magnetic closure' },
      { label: 'Surface Finish', value: 'Matte velvet' },
      { label: 'MOQ', value: '500pcs' },
      { label: 'Lead Time', value: '15-25 days' },
    ],
    related: ['p1', 'p2', 'p4'],
  },
  {
    id: 'p4',
    name: 'Wooden Ring Box for Wedding | Engraved Wood Ring Case',
    slug: 'wooden-ring-box-wedding',
    category: 'jewelry-boxes',
    dimensions: '1-3/4"W x 2"D x 1-1/2"H',
    image: '/images/carousel/wooden-ring-box.png',
    gallery: [
      '/images/carousel/wooden-ring-box.png',
      '/images/carousel/wooden-ring-box-detail-1.png',
      '/images/carousel/wooden-ring-box-detail-2.png',
      '/images/carousel/wooden-ring-box-detail-3.png',
    ],
    description:
      'An engraved wooden ring box for weddings, featuring natural wood grain with a smooth finish. The interior is lined with soft velvet to protect rings. Custom engraving of names, dates, or logos is available for a truly personalized keepsake.',
    features: [
      'Natural wood construction with engraved detailing',
      'Soft velvet interior lining',
      'Custom laser engraving available',
      'Hinged lid with secure closure',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Wood exterior, Velvet interior' },
      { label: 'Dimensions (L x W x H)', value: '1-3/4" x 2" x 1-1/2"' },
      { label: 'Closure Type', value: 'Hinged lid' },
      { label: 'Surface Finish', value: 'Natural wood with matte varnish' },
      { label: 'MOQ', value: '500pcs' },
      { label: 'Lead Time', value: '20-30 days' },
    ],
    related: ['p1', 'p3', 'p5'],
  },
  {
    id: 'p5',
    name: 'Luxury Gift Box Set with Ribbon | Premium Presentation Box',
    slug: 'luxury-gift-box-ribbon',
    category: 'gift-boxes',
    dimensions: '8"L x 6"W x 3"H',
    image: '/images/carousel/luxury-gift-box.png',
    gallery: [
      '/images/carousel/luxury-gift-box.png',
      '/images/carousel/luxury-gift-box-detail-1.png',
      '/images/carousel/luxury-gift-box-detail-2.png',
      '/images/carousel/luxury-gift-box-detail-3.png',
    ],
    description:
      'A luxury gift box set with satin ribbon closure, designed for premium gifting occasions. The rigid box construction with matte finish and decorative ribbon creates an unforgettable unboxing experience. Perfect for corporate gifts, weddings, and high-end retail.',
    features: [
      'Rigid box construction with premium matte finish',
      'Satin ribbon tie closure',
      'Custom color and size options',
      'Foil stamping and embossing available',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Rigid cardboard, Satin ribbon' },
      { label: 'Dimensions (L x W x H)', value: '8" x 6" x 3" (customizable)' },
      { label: 'Closure Type', value: 'Ribbon tie' },
      { label: 'Surface Finish', value: 'Matte / Foil stamping / Spot UV' },
      { label: 'MOQ', value: '1000pcs' },
      { label: 'Lead Time', value: '15-25 days' },
    ],
    related: ['p6', 'p7', 'p1'],
  },
  {
    id: 'p6',
    name: 'Magnetic Closure Gift Box | Flip-Top Premium Box',
    slug: 'magnetic-closure-gift-box',
    category: 'gift-boxes',
    dimensions: '6"L x 4"W x 2"H',
    image: '/images/carousel/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png',
    gallery: [
      '/images/carousel/exec-7a71ba08-13fa-44b6-ae79-75adb3655b9e.png',
      '/images/carousel/magnetic-box-detail-1.png',
      '/images/carousel/magnetic-box-detail-2.png',
      '/images/carousel/magnetic-box-detail-3.png',
    ],
    description:
      'A sleek magnetic closure gift box with flip-top design. The hidden magnetic mechanism provides a clean look while keeping the lid securely closed. Ideal for jewelry, cosmetics, and small luxury items.',
    features: [
      'Hidden magnetic closure mechanism',
      'Flip-top lid design',
      'Premium rigid construction',
      'Custom interior inserts available',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Rigid cardboard, Magnetic closure' },
      { label: 'Dimensions (L x W x H)', value: '6" x 4" x 2" (customizable)' },
      { label: 'Closure Type', value: 'Magnetic / Flip-top' },
      { label: 'Surface Finish', value: 'Matte / Glossy' },
      { label: 'MOQ', value: '1000pcs' },
      { label: 'Lead Time', value: '15-25 days' },
    ],
    related: ['p5', 'p7', 'p1'],
  },
  {
    id: 'p7',
    name: 'Velvet Drawstring Jewelry Pouch | Elegant Storage Solution',
    slug: 'velvet-drawstring-pouch',
    category: 'jewelry-pouches',
    dimensions: '4"L x 4"W',
    image: '/images/carousel/velvet-pouch.png',
    gallery: [
      '/images/carousel/velvet-pouch.png',
      '/images/carousel/velvet-pouch-detail-1.png',
      '/images/carousel/velvet-pouch-detail-2.png',
      '/images/carousel/velvet-pouch-detail-3.png',
    ],
    description:
      'A soft velvet drawstring jewelry pouch designed for elegant storage and gifting. The plush velvet exterior protects delicate jewelry while the drawstring closure keeps items secure. Available in multiple colors with custom branding options.',
    features: [
      'Soft velvet exterior with drawstring closure',
      'Protects delicate jewelry from scratches',
      'Available in multiple colors',
      'Custom logo printing on pouch',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Velvet, Cotton cord drawstring' },
      { label: 'Dimensions', value: '4" x 4" (customizable)' },
      { label: 'String Type', value: 'Cotton cord / Satin ribbon / Polyester cord' },
      { label: 'Closure Type', value: 'Drawstring' },
      { label: 'MOQ', value: '500pcs' },
      { label: 'Lead Time', value: '10-20 days' },
    ],
    related: ['p8', 'p9', 'p5'],
  },
  {
    id: 'p8',
    name: 'Cotton Jewelry Pouch | Eco-Friendly Drawstring Bag',
    slug: 'cotton-jewelry-pouch',
    category: 'jewelry-pouches',
    dimensions: '5"L x 5"W',
    image: '/images/carousel/cotton-pouch.png',
    gallery: [
      '/images/carousel/cotton-pouch.png',
      '/images/carousel/cotton-pouch-detail-1.png',
      '/images/carousel/cotton-pouch-detail-2.png',
      '/images/carousel/cotton-pouch-detail-3.png',
    ],
    description:
      'An eco-friendly cotton drawstring pouch perfect for jewelry storage and gifting. Made from natural cotton fabric with a soft texture. Ideal for brands looking for sustainable packaging solutions.',
    features: [
      '100% natural cotton fabric',
      'Biodegradable and recyclable',
      'Custom screen printing available',
      'Soft texture protects jewelry',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Cotton, Cotton cord' },
      { label: 'Dimensions', value: '5" x 5" (customizable)' },
      { label: 'String Type', value: 'Cotton cord' },
      { label: 'Eco-friendly', value: 'Biodegradable / Recyclable' },
      { label: 'MOQ', value: '500pcs' },
      { label: 'Lead Time', value: '10-20 days' },
    ],
    related: ['p7', 'p9', 'p5'],
  },
  {
    id: 'p9',
    name: 'Velvet Necklace Display Stand | Retail Showcase',
    slug: 'velvet-necklace-display',
    category: 'jewelry-display',
    dimensions: '12"L x 4"W x 10"H',
    image: '/images/carousel/velvet-necklace-stand.png',
    gallery: [
      '/images/carousel/velvet-necklace-stand.png',
      '/images/carousel/velvet-necklace-stand-detail-1.png',
      '/images/carousel/velvet-necklace-stand-detail-2.png',
      '/images/carousel/velvet-necklace-stand-detail-3.png',
    ],
    description:
      'A velvet necklace display stand designed for retail showcases. The plush velvet surface holds necklaces securely in place while presenting them elegantly. Available in multiple colors to match your brand aesthetic.',
    features: [
      'Velvet-covered display stand',
      'Sturdy base for stability',
      'Available in multiple colors',
      'Custom branding on base available',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Velvet, Wooden base' },
      { label: 'Dimensions (L x W x H)', value: '12" x 4" x 10"' },
      { label: 'Surface Finish', value: 'Velvet covering' },
      { label: 'MOQ', value: '200pcs' },
      { label: 'Lead Time', value: '15-25 days' },
    ],
    related: ['p10', 'p11', 'p7'],
  },
  {
    id: 'p10',
    name: 'Acrylic Earring Display Stand | Modern Retail Display',
    slug: 'acrylic-earring-display',
    category: 'jewelry-display',
    dimensions: '8"L x 3"W x 8"H',
    image: '/images/carousel/acrylic-display.png',
    gallery: [
      '/images/carousel/acrylic-display.png',
      '/images/carousel/acrylic-display-detail-1.png',
      '/images/carousel/acrylic-display-detail-2.png',
      '/images/carousel/acrylic-display-detail-3.png',
    ],
    description:
      'A modern acrylic earring display stand with transparent construction. Perfect for showcasing earrings in a clean, contemporary retail setting. The clear acrylic design lets the jewelry be the focal point.',
    features: [
      'Crystal clear acrylic construction',
      'Multi-tier earring display slots',
      'Sturdy weighted base',
      'Custom sizing available',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Acrylic / PVC' },
      { label: 'Dimensions (L x W x H)', value: '8" x 3" x 8"' },
      { label: 'Surface Finish', value: 'Transparent glossy' },
      { label: 'MOQ', value: '200pcs' },
      { label: 'Lead Time', value: '15-25 days' },
    ],
    related: ['p9', 'p11', 'p7'],
  },
  {
    id: 'p11',
    name: 'Kraft Paper Shopping Bag | Eco-Friendly Retail Bag',
    slug: 'kraft-paper-shopping-bag',
    category: 'paper-bags',
    dimensions: '10"L x 8"W x 12"H',
    image: '/images/carousel/kraft-bag.png',
    gallery: [
      '/images/carousel/kraft-bag.png',
      '/images/carousel/kraft-bag-detail-1.png',
      '/images/carousel/kraft-bag-detail-2.png',
      '/images/carousel/kraft-bag-detail-3.png',
    ],
    description:
      'A durable kraft paper shopping bag with twisted paper handles. Perfect for retail packaging, gift wrapping, and eco-conscious brands. Custom logo printing available on natural kraft background.',
    features: [
      '100% recycled kraft paper',
      'Reinforced twisted paper handles',
      'Custom logo printing available',
      'Biodegradable and recyclable',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'Kraft paper, Twisted paper handles' },
      { label: 'Dimensions (L x W x H)', value: '10" x 8" x 12" (customizable)' },
      { label: 'Handle Type', value: 'Twisted paper / Cotton cord' },
      { label: 'Eco-friendly', value: 'Recyclable / Biodegradable' },
      { label: 'MOQ', value: '1000pcs' },
      { label: 'Lead Time', value: '10-20 days' },
    ],
    related: ['p12', 'p5', 'p7'],
  },
  {
    id: 'p12',
    name: 'Stackable Jewelry Tray | Velvet Compartmental Display',
    slug: 'stackable-jewelry-tray',
    category: 'jewelry-trays',
    dimensions: '14"L x 8"W x 1.5"H',
    image: '/images/carousel/jewelry-tray.png',
    gallery: [
      '/images/carousel/jewelry-tray.png',
      '/images/carousel/jewelry-tray-detail-1.png',
      '/images/carousel/jewelry-tray-detail-2.png',
      '/images/carousel/jewelry-tray-detail-3.png',
    ],
    description:
      'A stackable velvet jewelry tray with compartmental design for organized display. Perfect for retail showcases and drawer storage. The velvet surface protects jewelry while the stackable design maximizes space efficiency.',
    features: [
      'Velvet-lined compartments',
      'Stackable design for space efficiency',
      'Sturdy MDF construction',
      'Custom compartment layouts available',
    ],
    specs: [
      { label: 'Brand', value: 'ELAPACK' },
      { label: 'Material', value: 'MDF, Velvet lining' },
      { label: 'Dimensions (L x W x H)', value: '14" x 8" x 1.5"' },
      { label: 'Surface Finish', value: 'Velvet covering' },
      { label: 'MOQ', value: '200pcs' },
      { label: 'Lead Time', value: '15-25 days' },
    ],
    related: ['p9', 'p10', 'p11'],
  },
];

export const customizationSteps = [
  { step: '01', title: 'Establish Contact', desc: 'Share your project details and packaging goals with our team.' },
  { step: '02', title: 'Communicate Requirements', desc: 'Discuss OEM & ODM needs including materials, dimensions, and branding.' },
  { step: '03', title: 'Quotation', desc: 'Receive a detailed quote based on your specifications and quantity.' },
  { step: '04', title: 'Design & Sample', desc: 'Our design team creates mockups and physical samples for approval.' },
  { step: '05', title: 'Production', desc: 'Mass production begins with 100% QC inspection at every stage.' },
  { step: '06', title: 'Delivery', desc: 'Global shipping with reliable logistics and tracking.' },
];

export const faqs = [
  {
    q: 'What is the minimum order quantity (MOQ) for custom jewelry boxes?',
    a: 'Our MOQ starts from 500pcs for most styles. We also offer low-MOQ options starting from 100pcs on selected ready-to-brand styles for new and growing jewelry brands.',
  },
  {
    q: 'How long does production take for bulk custom jewelry boxes?',
    a: 'Production time for bulk jewelry boxes typically ranges from 15-25 days depending on complexity and quantity. Rush orders for standard wholesale packaging can be completed in 10-15 days with our expedited service.',
  },
  {
    q: 'What customization options are available for jewelry gift boxes?',
    a: 'Our jewelry gift boxes can be customized with logo embossing, foil stamping, spot UV, and custom printing. Interior options include various insert designs, padding materials, and fabric choices for your custom jewelry packaging.',
  },
  {
    q: 'Are your materials eco-friendly and sustainable?',
    a: 'Yes. We offer FSC-certified paper, recycled materials, biodegradable options, and plastic-free alternatives. We also use vegetable-based inks for printing custom jewelry boxes.',
  },
  {
    q: 'How do affordable jewelry boxes compare to premium packaging in quality?',
    a: 'Our affordable jewelry boxes use similar high-quality materials as premium packaging but optimize production processes for cost efficiency. The durability and presentation matches expensive alternatives while reducing per-unit costs.',
  },
];

export const brandLogos = ['ZARA', 'H&M', 'Pandora', 'Inditex', 'TJX', 'Marks & Spencer'];

export const caseStudies = [
  {
    client: 'Marks & Spencer',
    solution: 'Cost-Effective Jewelry Packaging',
    points: ['Budget-friendly without compromise', 'Efficient design, lower costs', 'Bulk orders, better value'],
  },
  {
    client: 'EFFY Jewelry',
    solution: 'Luxury Custom Box Development',
    points: ['Premium material selection', 'Custom logo embossing', 'Full brand identity integration'],
  },
  {
    client: 'Majorica',
    solution: 'Sustainable Packaging Solution',
    points: ['FSC-certified materials', 'Biodegradable inserts', 'Eco-friendly ink printing'],
  },
];

export const whyChooseUs = [
  { icon: 'Factory', title: '15+ Years Manufacturing', desc: 'Since 2008, delivering premium jewelry packaging to global brands.' },
  { icon: 'Package', title: 'Low MOQ Support', desc: 'Start from 100pcs on selected styles for launches and growing brands.' },
  { icon: 'Eye', title: 'Sampling Before Production', desc: 'Confirm structure, material, insert, and logo before mass production.' },
  { icon: 'Truck', title: 'Reliable Export Service', desc: 'Experienced in quality control, timelines, and international delivery.' },
  { icon: 'Leaf', title: 'Sustainable Options', desc: 'FSC-certified paper, recycled materials, and lower-impact designs.' },
  { icon: 'Palette', title: 'Material & Finish Expertise', desc: 'Premium materials and logo techniques matching your brand image.' },
];
