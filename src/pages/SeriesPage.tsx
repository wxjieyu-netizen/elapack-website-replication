import { ArrowRight, ChevronRight, Check, PackageCheck, Layers, Sparkles } from 'lucide-react';
import { getSeries, getLine } from '@/data/lines';
import { products } from '@/data/catalog';
import { navigate } from '@/lib/router';

interface Props {
  path: string;
  onQuote: () => void;
}

export default function SeriesPage({ path, onQuote }: Props) {
  const series = getSeries(path);
  if (!series) return <div className="py-20 text-center text-stone-500">Series not found</div>;

  const line = getLine(series.lineId)!;
  const seriesProducts = series.products
    .map((pid) => products.find((p) => p.id === pid))
    .filter(Boolean) as typeof products;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F8F8F8] border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-stone-500 flex-wrap">
            <button onClick={() => navigate('/')} className="hover:text-sage-700">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => navigate(line.path)} className="hover:text-sage-700">{line.name}</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-700">{series.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[300px] md:h-[360px] overflow-hidden bg-sage-900">
        <img src={series.heroImage} alt={series.name} className="w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/90 via-sage-900/60 to-sage-900/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-sage-400 uppercase tracking-widest mb-3">{line.name}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{series.name}</h1>
              <p className="text-lg text-stone-200 leading-relaxed">{series.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content (2 cols) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Specs table */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Specifications</h2>
              <div className="bg-white border border-stone-100 rounded-sm overflow-hidden">
                {series.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 p-4 border-b border-stone-100 ${i % 2 === 0 ? 'bg-[#FAFAF8]' : ''}`}
                  >
                    <div className="text-sm font-bold text-stone-800">{spec.label}</div>
                    <div className="text-sm text-stone-600">{spec.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Craft & Finishing</h2>
              <div className="flex flex-wrap gap-3">
                {series.process.map((p) => (
                  <span key={p} className="px-4 py-2 bg-[#F0F1ED] border border-stone-200 rounded-full text-sm text-stone-700">
                    {p}
                  </span>
                ))}
              </div>
            </section>

            {/* Structure (boxes) */}
            {series.structureImage && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Structure</h2>
                <div className="rounded-sm overflow-hidden border border-stone-100 bg-[#F0F1ED]">
                  <img src={series.structureImage} alt={`${series.name} structure`} className="w-full max-w-md mx-auto object-cover" />
                </div>
              </section>
            )}

            {/* Liner options (boxes) */}
            {series.linerOptions && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Insert Options</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {series.linerOptions.map((opt) => (
                    <li key={opt} className="flex items-center gap-2.5 bg-[#F8F8F8] border border-stone-100 rounded-sm p-4 text-sm text-stone-700">
                      <Check className="w-4 h-4 text-green-600 shrink-0" />
                      {opt}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Bundle items (sets) */}
            {series.bundleItems && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">What's Included</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {series.bundleItems.map((item) => (
                    <div key={item.name} className="text-center">
                      <div className="aspect-square rounded-sm overflow-hidden bg-[#F0F1ED] border border-stone-100 mb-2">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs text-stone-600 font-medium">{item.name}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Custom flow (sets) */}
            {series.customFlow && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Customization Process</h2>
                <div className="flex items-center gap-3 flex-wrap">
                  {series.customFlow.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-4 py-2.5 bg-sage-50 border border-sage-100 rounded-sm">
                        <span className="text-sage-700 font-bold">{i + 1}</span>
                        <span className="text-sm text-stone-700 font-medium">{step}</span>
                      </div>
                      {i < series.customFlow!.length - 1 && <ArrowRight className="w-4 h-4 text-sage-400" />}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Application images */}
            {series.applicationImages.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Applications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {series.applicationImages.map((img, i) => (
                    <div key={i} className="rounded-sm overflow-hidden border border-stone-100 bg-[#F0F1ED]">
                      <img src={img} alt={`${series.name} application ${i + 1}`} className="w-full aspect-[4/3] object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related products */}
            {seriesProducts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Featured Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  {seriesProducts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => navigate(`/product/${p.slug}`)}
                      className="group bg-white rounded-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:border-sage-200 transition-all text-left"
                    >
                      <div className="aspect-square overflow-hidden bg-[#F0F1ED]">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-stone-800 line-clamp-2 group-hover:text-sage-700 transition-colors">{p.name}</h3>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white border border-stone-100 rounded-sm p-6 sticky top-28">
              <PackageCheck className="w-8 h-8 text-sage-700 mb-4" />
              <h3 className="text-lg font-bold text-stone-900 mb-2">MOQ: {series.moq}</h3>
              <p className="text-sm text-stone-500 mb-5">
                Fully customizable — materials, finish, logo and insert can be tailored to your brand.
              </p>
              <button
                onClick={onQuote}
                className="w-full py-3 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-lg text-sm font-medium hover:from-sage-800 hover:to-sage-900 transition-all"
              >
                Request a Custom Quote
              </button>
            </div>

            <div className="bg-sage-800 rounded-sm p-6 text-white">
              <Layers className="w-7 h-7 text-sage-400 mb-3" />
              <h3 className="font-bold text-sm mb-2">Need this as a Set or Bundle?</h3>
              <p className="text-xs text-sage-100 mb-4">Combine with pouches, cards and accessories into a coordinated gift set.</p>
              <button onClick={() => navigate('/sets')} className="text-sm font-medium text-sage-300 hover:text-white transition-colors flex items-center gap-1">
                View Sets & Bundles <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
