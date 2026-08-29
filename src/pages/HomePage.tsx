import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Package,
  Eye,
  Truck,
  Leaf,
  Factory,
  Palette,
  Star,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import {
  categories,
  products,
  whyChooseUs,
  customizationSteps,
  caseStudies,
  brandLogos,
} from '@/data/catalog';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onQuote: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Package,
  Eye,
  Truck,
  Leaf,
  Palette,
};

export default function HomePage({ onNavigate, onQuote }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Your Brand, Fully Customized',
      subtitle: 'From concept to unboxing. Low MOQ, Free Design Support, Unlimited Materials.',
      image: '/images/carousel/exec-bf14589b-dedc-413f-b836-24299d7682c5 copy.png',
      cta: 'Explore Custom Options',
      link: 'custom',
    },
    {
      title: 'Packaging With A Point Of View',
      subtitle: 'Custom Design & Wholesale Factory Since 2008. Elevate Your Brand Value.',
      image: '/images/carousel/image.png',
      cta: 'Browse Jewelry Boxes',
      link: 'collection',
    },
    {
      title: 'Supporting New & Growing Jewelry Brands',
      subtitle: 'Small-Batch Customization (100 pcs MOQ) Ready-to-Brand US Stock Styles.',
      image: '/images/carousel/exec-758f7f4a-0b5c-4138-9305-4d7086ffafa8.png',
      cta: 'Request a Quote',
      link: 'quote',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[600px] md:h-[640px] overflow-hidden bg-sage-900">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlide === i ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sage-900/90 via-sage-900/55 to-sage-900/15 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center md:object-right-center"
              loading="eager"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage-600/20 text-sage-300 rounded-full text-xs font-medium mb-5 border border-sage-500/30">
                    <Sparkles className="w-3.5 h-3.5" /> Thoughtful Packaging Since 2008
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-stone-300 mb-8 leading-relaxed">{slide.subtitle}</p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => (slide.link === 'quote' ? onQuote() : onNavigate(slide.link, slide.link === 'collection' ? { category: 'jewelry-boxes' } : undefined))}
                      className="px-7 py-3.5 bg-gradient-to-r from-sage-600 to-sage-700 text-white rounded-lg font-medium hover:from-sage-700 hover:to-sage-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
                    >
                      {slide.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={onQuote}
                      className="px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === i ? 'w-8 bg-sage-500' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#F8F8F8] border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, value: '100%', label: 'QC Inspection' },
              { icon: Factory, value: '3M+', label: 'Pieces Per Month' },
              { icon: Star, value: '95%', label: 'Client Satisfaction' },
              { icon: Globe, value: '100+', label: 'Global Brands' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-sage-50 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-sage-700" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-stone-900">{stat.value}</div>
                  <div className="text-xs text-stone-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Our Collections</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Explore Our Packaging Categories</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              From jewelry boxes to paper bags, discover a full range of premium packaging solutions designed for jewelry brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <button
                key={cat.slug}
                onClick={() => onNavigate('collection', { category: cat.slug })}
                className="group relative overflow-hidden rounded-sm bg-[#F0F1ED] aspect-[4/3] text-left"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs text-sage-400 font-medium mb-1.5 uppercase tracking-wider">
                    {cat.groups.reduce((acc, g) => acc + g.items.length, 0)} Products
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                  <div className="flex items-center gap-1.5 text-sage-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Our Features</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              We focus on clarity, flexibility, consistency, and scalable support for every packaging project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || Package;
              return (
                <div
                  key={i}
                  className="bg-white rounded-sm p-6 border border-stone-100 hover:shadow-xl hover:border-sage-200 transition-all group"
                >
                  <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-sage-50 to-sage-100 flex items-center justify-center mb-4 group-hover:from-sage-100 group-hover:to-sage-200 transition-colors">
                    <Icon className="w-7 h-7 text-sage-700" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-300 rounded-full text-xs font-medium mb-5 border border-green-500/30">
                <Leaf className="w-3.5 h-3.5" /> Eco-Friendly Packaging
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Sustainable Packaging That Still Feels Premium
              </h2>
              <p className="text-stone-300 mb-8 leading-relaxed">
                Sustainability should support your brand, not weaken it. ELAPACK offers FSC-certified paper, recycled
                materials, reusable structures, and lower-impact design options for jewelry brands that want more
                responsible packaging without losing presentation value.
              </p>
              <button
                onClick={() => onNavigate('sustainability')}
                className="px-7 py-3.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all shadow-lg flex items-center gap-2 group"
              >
                Explore Sustainable Packaging
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-sm overflow-hidden aspect-square">
                  <img
                    src="/images/carousel/d8cee77e-bbd9-4f3d-98f2-eaf4f4a1e493-ela-pack.webp"
                    alt="Eco packaging"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="rounded-sm overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/carousel/9bf9f36fa19e5053791193d6605b485d.jpg"
                    alt="Eco packaging"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-sm overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Eco packaging"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="rounded-sm overflow-hidden aspect-square">
                  <img
                    src="/images/carousel/b01d0e892b6e007244abdbc30bea7e3e-ela-pack.webp"
                    alt="Eco packaging"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Featured Products</div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Popular Jewelry Packaging</h2>
            </div>
            <button
              onClick={() => onNavigate('collection', { category: 'jewelry-boxes' })}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-sage-900 transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <button
                key={product.id}
                onClick={() => onNavigate('product', { id: product.id })}
                className="group text-left"
              >
                <div className="relative aspect-square rounded-sm overflow-hidden bg-[#F0F1ED] mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/10 transition-colors" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2.5 text-center text-sm font-medium text-stone-900 hover:bg-sage-700 hover:text-white transition-colors">
                      View Details
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-stone-800 line-clamp-2 group-hover:text-sage-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1">{product.dimensions}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-8 bg-[#F8F8F8] border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Trusted by Jewelry Brands Worldwide</h2>
            <p className="text-sm text-stone-500">From startup launches to long-term supply partnerships</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {brandLogos.map((logo) => (
              <div
                key={logo}
                className="text-2xl font-bold text-stone-300 hover:text-stone-500 transition-colors cursor-default"
                style={{ fontFamily: 'serif' }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Case Studies</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Jewelry Brand Packaging</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              From low-MOQ packaging upgrades to fully customized luxury box development, we help jewelry brands solve
              packaging challenges with practical, scalable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-sage-600 to-sage-800" />
                <div className="p-6">
                  <div className="text-xs text-stone-400 uppercase tracking-wider mb-2">Client</div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1">{cs.client}</h3>
                  <div className="text-sm text-sage-700 font-medium mb-4">{cs.solution}</div>
                  <ul className="space-y-2">
                    {cs.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Process */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-sage-500 uppercase tracking-widest mb-3">How It Works</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Customization Process</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Our professional customization team meets 100% of customer needs, from first contact to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {customizationSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-stone-800 rounded-sm p-5 hover:bg-stone-700 transition-colors h-full">
                  <div className="text-3xl font-bold text-sage-600 mb-3">{step.step}</div>
                  <h3 className="text-sm font-bold mb-1.5">{step.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed">{step.desc}</p>
                </div>
                {i < customizationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 z-10">
                    <ChevronRight className="w-4 h-4 text-sage-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-sage-700 to-sage-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Jewelry Packaging?</h2>
          <p className="text-sage-100 mb-8 text-lg">
            Get a free consultation and quote from our packaging experts. Low MOQ, free design support, and global delivery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onQuote}
              className="px-8 py-4 bg-white text-sage-800 rounded-lg font-bold hover:bg-sage-50 transition-all shadow-lg flex items-center gap-2 group"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('collection', { category: 'jewelry-boxes' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold border border-white/30 hover:bg-white/20 transition-all"
            >
              Browse Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
