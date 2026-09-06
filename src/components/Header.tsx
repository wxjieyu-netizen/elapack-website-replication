import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Mail, FileText, Search, ArrowRight } from 'lucide-react';
import { productLines } from '@/data/lines';
import { navigate, useRoute } from '@/lib/router';

interface HeaderProps {
  onQuote: () => void;
}

const topNav = [
  { label: 'Custom', path: '/custom', sub: 'How it works' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog', sub: 'Insights' },
];

export default function Header({ onQuote }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const route = useRoute();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path: string) => {
    setMobileOpen(false);
    setOpenProduct(false);
    navigate(path);
  };

  const isActive = (path: string) =>
    path === '/' ? route.kind === 'home' : window.location.pathname.startsWith(path);

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
            <button onClick={() => go('/')} className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-sm bg-sage-400 flex items-center justify-center text-white font-bold text-lg tracking-tight transition-transform group-hover:scale-[1.02]">
                R
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-semibold tracking-[0.16em] text-sage-900">ELAPACK</span>
                <span className="text-[10px] text-stone-500 tracking-widest uppercase">Lifestyle Packaging</span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => go('/')}
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/') ? 'text-sage-700' : 'text-stone-700 hover:text-sage-700'
                }`}
              >
                Home
              </button>

              {/* Product dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenProduct(true)}
                onMouseLeave={() => setOpenProduct(false)}
              >
                <button
                  onClick={() => go('/pouches')}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                    route.kind === 'line' || route.kind === 'series'
                      ? 'text-sage-700'
                      : 'text-stone-700 hover:text-sage-700'
                  }`}
                >
                  Product
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openProduct ? 'rotate-180' : ''}`} />
                </button>

                {openProduct && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50">
                    <div className="bg-white shadow-2xl rounded-xl border border-stone-100 p-6 w-[860px] flex gap-8 animate-fadeIn">
                      {productLines.map((line) => (
                        <div key={line.id} className="flex-1">
                          <button
                            onClick={() => go(line.path)}
                            className="flex items-center justify-between w-full text-left mb-3 pb-2 border-b border-stone-100 group"
                          >
                            <span className="text-sm font-bold text-stone-800 group-hover:text-sage-700 transition-colors">
                              {line.name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-sage-600 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                          <div className="space-y-1">
                            {line.series.map((s) => (
                              <button
                                key={s.id}
                                onClick={() => go(s.path)}
                                className="block w-full text-left text-sm text-stone-600 hover:text-sage-700 hover:translate-x-0.5 transition-all py-0.5"
                              >
                                {s.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {topNav.map((item) => (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive(item.path) ? 'text-sage-700' : 'text-stone-700 hover:text-sage-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
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
              <button onClick={() => go('/')} className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-sage-700">
                Home
              </button>
              <div className="py-1 text-xs font-bold text-stone-400 uppercase tracking-wider">Product</div>
              {productLines.map((line) => (
                <div key={line.id} className="pl-3">
                  <button onClick={() => go(line.path)} className="block w-full text-left py-2 text-sm font-semibold text-sage-700">
                    {line.name}
                  </button>
                  <div className="pl-3 space-y-0.5">
                    {line.series.map((s) => (
                      <button key={s.id} onClick={() => go(s.path)} className="block w-full text-left py-1.5 text-sm text-stone-600 hover:text-sage-700">
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {topNav.map((item) => (
                <button key={item.path} onClick={() => go(item.path)} className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-sage-700">
                  {item.label}
                </button>
              ))}
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
