import { useState } from 'react';
import {
  ChevronRight,
  Check,
  Download,
  Share2,
  ShieldCheck,
  Sparkles,
  Palette,
  PackageCheck,
  Clock3,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from 'lucide-react';
import { products, faqs } from '@/data/catalog';

interface ProductPageProps {
  productId: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onQuote: (productName?: string) => void;
}

export default function ProductPage({ productId, onNavigate, onQuote }: ProductPageProps) {
  const product = products.find((p) => p.id === productId) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications'>('description');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F8F8F8] border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-stone-500 flex-wrap">
            <button onClick={() => onNavigate('home')} className="hover:text-sage-700 transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('collection', { category: product.category })} className="hover:text-sage-700 transition-colors">Product</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-700 line-clamp-1">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="flex gap-4">
              <div className="hidden sm:flex flex-col gap-3 w-20 shrink-0">
                {product.gallery.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-sage-700' : 'border-stone-100 hover:border-stone-300'
                    }`}
                  >
                    <img src={image} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex-1">
                <div className="relative aspect-square bg-[#F0F1ED] rounded-sm overflow-hidden group">
                  <img
                    src={product.gallery[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium text-sage-800">
                    Customizable
                  </div>
                </div>
                <div className="flex sm:hidden gap-2 mt-3 overflow-x-auto">
                  {product.gallery.map((image, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 ${
                        selectedImage === i ? 'border-sage-700' : 'border-stone-100'
                      }`}
                    >
                      <img src={image} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="text-xs text-sage-700 font-bold uppercase tracking-widest mb-3">Custom Jewelry Packaging</div>
              <h1 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">{product.name}</h1>
              <p className="text-stone-600 leading-relaxed mb-6">{product.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  { icon: ShieldCheck, title: 'FSC Certified', text: 'Sustainable materials' },
                  { icon: Palette, title: '100% Customization', text: 'Design your way' },
                  { icon: Sparkles, title: 'Free Design & Samples', text: 'Before production' },
                  { icon: PackageCheck, title: `MOQ ${product.specs.find((s) => s.label === 'MOQ')?.value.split('/')[0] || '500pcs'}`, text: 'Low MOQ support' },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#F8F8F8] rounded-lg">
                    <benefit.icon className="w-5 h-5 text-sage-700 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-stone-800">{benefit.title}</div>
                      <div className="text-[11px] text-stone-500">{benefit.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold text-stone-900">Dimensions:</span>
                  <span className="text-sm text-stone-600">{product.dimensions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="w-4 h-4 text-sage-700" />
                  <span className="text-sm text-stone-600">Fast production available · Global delivery</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <button
                  onClick={() => onQuote(product.name)}
                  className="flex-1 min-w-[200px] py-3.5 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-lg font-medium hover:from-sage-800 hover:to-sage-900 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Request a Custom Quote <ChevronRight className="w-4 h-4" />
                </button>
                <button className="w-12 h-12 border border-stone-200 rounded-lg flex items-center justify-center text-stone-500 hover:border-sage-600 hover:text-sage-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 border border-stone-200 rounded-lg flex items-center justify-center text-stone-500 hover:border-sage-600 hover:text-sage-700 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-[#F8F8F8] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex border-b border-stone-200 mb-10">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-4 text-sm font-bold transition-colors relative ${
                activeTab === 'description' ? 'text-sage-700' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Product Description
              {activeTab === 'description' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage-700" />}
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-4 text-sm font-bold transition-colors relative ${
                activeTab === 'specifications' ? 'text-sage-700' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Specifications
              {activeTab === 'specifications' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage-700" />}
            </button>
          </div>

          {activeTab === 'description' ? (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 prose prose-stone max-w-none">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">{product.name.split('|')[0].trim()}: Luxury Meets Practical Elegance</h2>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Premium Design for Lasting Impressions</h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {product.description} Designed for brands that want their packaging to be as memorable as the product inside, every detail can be tailored to create a signature unboxing moment.
                </p>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Protection That Feels Premium</h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Inside, soft lining and carefully structured inserts cradle jewelry with care. The contrast between the exterior and interior creates a striking presentation while protecting delicate pieces from scratches and movement.
                </p>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Customizable Branding for Unique Identity</h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Your packaging should tell your story. With custom logo embossing, foil stamping, color detailing, and tailored insert designs, this packaging can be fully adapted to your brand identity.
                </p>
                <h3 className="text-lg font-bold text-stone-900 mb-2">Why Choose ELAPACK?</h3>
                <p className="text-stone-600 leading-relaxed">
                  With over 15 years in the industry, ELAPACK offers full-service support from concept to delivery. We combine premium craftsmanship, low MOQs, and fast turnaround with a global perspective.
                </p>
              </div>
              <div className="bg-white rounded-sm p-6 border border-stone-100 h-fit">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-5">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-stone-100 mt-6 pt-5">
                  <button onClick={() => onQuote(product.name)} className="w-full py-3 bg-sage-700 text-white rounded-lg text-sm font-medium hover:bg-sage-800 transition-colors">Start Your Custom Design</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-sm border border-stone-100 overflow-hidden">
              <div className="grid sm:grid-cols-2">
                {product.specs.map((spec, i) => (
                  <div key={spec.label} className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 p-4 border-b border-stone-100 ${i % 2 === 0 ? 'sm:border-r' : ''}`}>
                    <div className="text-sm font-bold text-stone-800">{spec.label}</div>
                    <div className="text-sm text-stone-600 leading-relaxed">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-sage-50 border-t border-sage-100 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-bold text-stone-900 text-sm">Need specifications tailored to your product?</div>
                  <div className="text-xs text-stone-600 mt-1">Our team can recommend materials, inserts, and finishes for your budget.</div>
                </div>
                <button onClick={() => onQuote(product.name)} className="px-5 py-2.5 bg-sage-700 text-white rounded-lg text-sm font-medium hover:bg-sage-800 transition-colors">Talk to an Expert</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Customization Process Strip */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">From Concept to Delivery</div>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Your Custom Packaging Journey</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { n: '01', t: 'Share Your Vision' },
              { n: '02', t: 'Design & Sample' },
              { n: '03', t: 'Confirm Details' },
              { n: '04', t: 'Quality Production' },
              { n: '05', t: 'Global Delivery' },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage-50 text-sage-700 flex items-center justify-center font-bold mb-3">{step.n}</div>
                <div className="text-sm font-medium text-stone-800">{step.t}</div>
                {i < 4 && <div className="hidden md:block absolute top-6 left-[calc(50%+32px)] right-[-calc(50%-32px)] h-px bg-stone-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">FAQ</div>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-sm border border-stone-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-stone-800"
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-sage-700 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-14 bg-sage-800 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Create Your Custom Packaging?</h2>
          <p className="text-sage-100 mb-6 text-sm">Get samples, expert advice, and a quote tailored to your brand.</p>
          <button onClick={() => onQuote(product.name)} className="px-7 py-3.5 bg-white text-sage-800 rounded-lg font-bold hover:bg-sage-50 transition-colors inline-flex items-center gap-2">
            Request a Custom Quote <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <button onClick={() => onNavigate('collection', { category: product.category })} className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-sage-700 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </button>
      </div>
    </div>
  );
}
