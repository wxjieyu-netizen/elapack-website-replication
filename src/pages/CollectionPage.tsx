import { useState, useMemo } from 'react';
import { ChevronDown, Grid3x3, List, ArrowRight } from 'lucide-react';
import { categories, products } from '@/data/catalog';

interface CollectionPageProps {
  category: string;
  sub?: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onQuote: () => void;
}

export default function CollectionPage({ category, sub, onNavigate, onQuote }: CollectionPageProps) {
  const [sortBy, setSortBy] = useState('featured');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryData = useMemo(
    () => categories.find((c) => c.slug === category) || categories[0],
    [category]
  );

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => p.category === category);
    if (sub) {
      const subName = categoryData.groups
        .flatMap((g) => g.items)
        .find((i) => i.slug === sub)?.name;
      if (subName) {
        list = list.filter((p) => p.name.toLowerCase().includes(subName.toLowerCase().split(' ')[0].toLowerCase()));
      }
    }
    if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [category, sub, sortBy, categoryData]);

  const allProducts = filteredProducts.length > 0 ? filteredProducts : products.filter((p) => p.category === category);

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <button onClick={() => onNavigate('home')} className="hover:text-sage-700 transition-colors">Home</button>
            <span>/</span>
            <span className="text-stone-700">{categoryData.name}</span>
            {sub && (
              <>
                <span>/</span>
                <span className="text-sage-700">
                  {categoryData.groups.flatMap((g) => g.items).find((i) => i.slug === sub)?.name || sub}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Category Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-stone-900">
        <img src={categoryData.image} alt={categoryData.name} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{categoryData.name}</h1>
            <p className="text-stone-300 text-sm">
              {categoryData.groups.reduce((acc, g) => acc + g.items.length, 0)} subcategories available
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-28">
              <div className="bg-white rounded-sm border border-stone-100 p-5 mb-4">
                <h3 className="text-sm font-bold text-stone-900 mb-4 uppercase tracking-wider">Categories</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => onNavigate('collection', { category: cat.slug })}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        cat.slug === category
                          ? 'bg-sage-50 text-sage-700 font-medium'
                          : 'text-stone-600 hover:bg-[#F8F8F8]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {categoryData.groups.map((group) => (
                <div key={group.label} className="bg-white rounded-sm border border-stone-100 p-5 mb-4">
                  <h3 className="text-sm font-bold text-stone-900 mb-3 uppercase tracking-wider">{group.label}</h3>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <button
                        key={item.slug}
                        onClick={() => onNavigate('collection', { category: category, sub: item.slug })}
                        className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                          sub === item.slug
                            ? 'bg-sage-50 text-sage-700 font-medium'
                            : 'text-stone-600 hover:bg-[#F8F8F8]'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-sage-800 rounded-sm p-5 text-white">
                <h3 className="text-sm font-bold mb-2">Need a Custom Quote?</h3>
                <p className="text-xs text-sage-100 mb-4">Get free design support and competitive pricing.</p>
                <button
                  onClick={onQuote}
                  className="w-full py-2.5 bg-white text-sage-800 rounded-lg text-sm font-medium hover:bg-sage-50 transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-stone-500">
                Showing <span className="font-medium text-stone-800">{allProducts.length}</span> products
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2 border border-stone-200 rounded-lg text-sm bg-white focus:outline-none focus:border-sage-600 cursor-pointer"
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="name">Sort: Name A-Z</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                </div>
                <div className="flex border border-stone-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-2 transition-colors ${view === 'grid' ? 'bg-sage-700 text-white' : 'bg-white text-stone-400 hover:bg-[#F8F8F8]'}`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-2 transition-colors ${view === 'list' ? 'bg-sage-700 text-white' : 'bg-white text-stone-400 hover:bg-[#F8F8F8]'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {view === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {allProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => onNavigate('product', { id: product.id })}
                    className="group bg-white rounded-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:border-sage-200 transition-all text-left"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#F0F1ED]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium text-stone-700">
                        Quote
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-stone-800 line-clamp-2 group-hover:text-sage-700 transition-colors mb-1.5">
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-500 mb-3">{product.dimensions}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-sage-700 font-medium">View Details</span>
                        <ArrowRight className="w-4 h-4 text-sage-700 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {allProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => onNavigate('product', { id: product.id })}
                    className="group flex gap-5 bg-white rounded-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:border-sage-200 transition-all text-left w-full"
                  >
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden bg-[#F0F1ED]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-center">
                      <h3 className="text-base font-medium text-stone-800 group-hover:text-sage-700 transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-stone-500 line-clamp-2 mb-3">{product.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-stone-400">Dimensions: {product.dimensions}</span>
                        <span className="text-xs text-sage-700 font-medium flex items-center gap-1">
                          View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {allProducts.length === 0 && (
              <div className="text-center py-20 text-stone-500">
                <p className="text-lg mb-2">No products found in this category.</p>
                <button
                  onClick={() => onNavigate('collection', { category: category })}
                  className="text-sage-700 hover:text-sage-900 font-medium"
                >
                  View all {categoryData.name}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
