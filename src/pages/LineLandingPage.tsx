import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { productLines, getLine } from '@/data/lines';
import { products } from '@/data/catalog';
import { navigate } from '@/lib/router';

interface Props {
  lineId: string;
  onQuote: () => void;
}

export default function LineLandingPage({ lineId, onQuote }: Props) {
  const line = getLine(lineId) || productLines[0];

  const seriesCount = (seriesProducts: string[]) => seriesProducts.length;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F8F8F8] border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <button onClick={() => navigate('/')} className="hover:text-sage-700">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => navigate('/pouches')} className="hover:text-sage-700">Product</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-700">{line.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[380px] md:h-[440px] overflow-hidden bg-sage-900">
        <img src={line.heroImage} alt={line.name} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/90 via-sage-900/60 to-sage-900/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              {line.featured && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage-500/20 text-sage-300 rounded-full text-xs font-medium mb-5 border border-sage-500/30">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Product Line
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{line.name}</h1>
              <p className="text-lg text-stone-200 mb-8 leading-relaxed">{line.tagline}</p>
              <button
                onClick={onQuote}
                className="px-7 py-3.5 bg-white text-sage-800 rounded-lg font-medium hover:bg-sage-50 transition-all shadow-lg"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter dimension */}
      <section className="border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm font-bold text-stone-800 uppercase tracking-wider">{line.filterLabel}:</span>
            {line.filters.map((f) => (
              <span
                key={f.slug}
                className="px-4 py-1.5 rounded-full bg-[#F0F1ED] border border-stone-200 text-sm text-stone-600 cursor-default hover:border-sage-400 transition-colors"
              >
                {f.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Series grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Applications</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Explore by Category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {line.series.map((s) => {
              const cnt = seriesCount(s.products);
              const sampleProducts = s.products.map((pid) => products.find((p) => p.id === pid)).filter(Boolean);
              return (
                <button
                  key={s.id}
                  onClick={() => navigate(s.path)}
                  className="group bg-white rounded-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:border-sage-200 transition-all text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F0F1ED]">
                    <img
                      src={s.heroImage}
                      alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium text-sage-800">
                      {cnt} {cnt === 1 ? 'product' : 'products'}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-stone-900 mb-1.5 group-hover:text-sage-700 transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-sm text-stone-500 line-clamp-2 mb-4">{s.intro}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-xs text-stone-400">MOQ: {s.moq}</span>
                      <span className="text-sage-700 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sage-700 to-sage-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Need a Custom {line.name} Solution?</h2>
          <p className="text-sage-100 mb-8">Low MOQ, free design support, and global delivery for every project.</p>
          <button
            onClick={onQuote}
            className="px-8 py-4 bg-white text-sage-800 rounded-lg font-bold hover:bg-sage-50 transition-all shadow-lg"
          >
            Start Your Custom Design
          </button>
        </div>
      </section>
    </div>
  );
}
