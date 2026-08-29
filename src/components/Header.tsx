import { useState, useEffect } from 'react';
import { categories } from '@/data/catalog';
import { ChevronDown, Menu, X, Mail, FileText, Search } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  onQuote: () => void;
}

export default function Header({ onNavigate, onQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-sage-900 text-sage-100 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5" />
            <span>sales@richpkg.com</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onQuote} className="hover:text-sage-400 transition-colors flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" /> Request a Quote
            </button>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#F8F8F8]/95 backdrop-blur-md shadow-soft' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-sm bg-sage-400 flex items-center justify-center text-white font-bold text-lg tracking-tight transition-transform group-hover:scale-[1.02]">
                R
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-semibold tracking-[0.16em] text-sage-900 tracking-tight">ELAPACK</span>
                <span className="text-[10px] text-stone-500 tracking-widest uppercase">Lifestyle Packaging</span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {categories.map((cat) => (
                <div
              key={cat.slug}
              className="relative"
              onMouseEnter={() => {
                setHoveredCategory(cat.slug);
                setOpenCategory(cat.slug);
              }}
              onMouseLeave={() => {
                setHoveredCategory(null);
                setOpenCategory(null);
              }}
            >
              <button
                onClick={() => onNavigate('collection', { category: cat.slug })}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  openCategory === cat.slug ? 'text-sage-700' : 'text-stone-700 hover:text-sage-700'
                }`}
              >
                {cat.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openCategory === cat.slug ? 'rotate-180' : ''}`} />
              </button>

              {openCategory === cat.slug && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="bg-white shadow-2xl rounded-xl border border-stone-100 p-6 w-[640px] flex gap-6 animate-fadeIn">
                    {cat.groups.map((group) => (
                      <div key={group.label} className="flex-1">
                        <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3 pb-2 border-b border-stone-100">
                          {group.label}
                        </div>
                        <div className="space-y-1.5">
                          {group.items.map((item) => (
                            <button
                              key={item.slug}
                              onClick={() => onNavigate('collection', { category: cat.slug, sub: item.slug })}
                              className="block text-sm text-stone-600 hover:text-sage-700 transition-colors text-left w-full hover:translate-x-0.5 transition-transform"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="w-40 shrink-0">
                      <div className="w-full h-32 rounded-sm overflow-hidden mb-3">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                      </div>
                      <button
                        onClick={() => onNavigate('collection', { category: cat.slug })}
                        className="text-sm font-medium tracking-wide text-sage-700 hover:text-sage-900 transition-colors"
                      >
                        View All {cat.name} →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

              <button
                onClick={() => onNavigate('custom')}
                className="px-4 py-2 text-sm font-medium tracking-wide text-stone-700 hover:text-sage-700 transition-colors"
              >
                Custom
              </button>
              <button
                onClick={() => onNavigate('sustainability')}
                className="px-4 py-2 text-sm font-medium tracking-wide text-stone-700 hover:text-sage-700 transition-colors"
              >
                Sustainability
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-4 py-2 text-sm font-medium tracking-wide text-stone-700 hover:text-sage-700 transition-colors"
              >
                About
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-9 h-9 items-center justify-center text-stone-600 hover:text-sage-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={onQuote}
                className="hidden md:inline-flex px-5 py-2.5 bg-gradient-to-r from-sage-700 to-sage-800 text-white text-sm font-medium tracking-wide rounded-sm hover:from-sage-800 hover:to-sage-900 transition-all shadow-md hover:shadow-lg"
              >
                Request a Quote
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center text-stone-700"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              {categories.map((cat) => (
                <div key={cat.slug}>
                  <button
                    onClick={() => onNavigate('collection', { category: cat.slug })}
                    className="w-full text-left py-2.5 text-sm font-medium tracking-wide text-stone-800 hover:text-sage-700"
                  >
                    {cat.name}
                  </button>
                  <div className="pl-4 space-y-1">
                    {cat.groups.map((group) => (
                      <div key={group.label}>
                        <div className="text-xs font-bold text-stone-400 uppercase mt-2 mb-1">{group.label}</div>
                        {group.items.map((item) => (
                          <button
                            key={item.slug}
                            onClick={() => onNavigate('collection', { category: cat.slug, sub: item.slug })}
                            className="block w-full text-left py-1.5 text-sm text-stone-600 hover:text-sage-700"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => onNavigate('custom')} className="block w-full text-left py-2.5 text-sm font-medium tracking-wide text-stone-800 hover:text-sage-700">Custom</button>
              <button onClick={() => onNavigate('sustainability')} className="block w-full text-left py-2.5 text-sm font-medium tracking-wide text-stone-800 hover:text-sage-700">Sustainability</button>
              <button onClick={() => onNavigate('about')} className="block w-full text-left py-2.5 text-sm font-medium tracking-wide text-stone-800 hover:text-sage-700">About</button>
              <button onClick={onQuote} className="w-full mt-4 px-5 py-3 bg-sage-700 text-white text-sm font-medium tracking-wide rounded-sm">
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
