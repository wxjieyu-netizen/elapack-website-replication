import { Mail, Phone, MapPin } from 'lucide-react';
import { productLines } from '@/data/lines';
import { navigate } from '@/lib/router';

export default function Footer() {
  const go = (path: string) => navigate(path);

  return (
    <footer className="bg-sage-900 text-sage-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sage-400 flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-semibold tracking-[0.16em] text-white">ELAPACK</span>
                <span className="text-[10px] text-stone-500 tracking-widest uppercase">Lifestyle Packaging</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Custom packaging manufacturer since 2008. We help brands elevate their presentation with premium,
              sustainable, and fully customizable pouches, boxes, and gift sets.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sage-600" />
                <span>sales@richpkg.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage-600" />
                <span>86-591-83059011</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sage-600" />
                <span>Fuzhou, Fujian, China</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-sm">
              {productLines.map((line) => (
                <li key={line.id}>
                  <button onClick={() => go(line.path)} className="hover:text-sage-400 transition-colors text-left font-medium text-white">
                    {line.name}
                  </button>
                  <ul className="mt-2 space-y-1.5 pl-2 border-l border-sage-800">
                    {line.series.map((s) => (
                      <li key={s.id}>
                        <button onClick={() => go(s.path)} className="hover:text-sage-400 transition-colors text-left text-sage-300">
                          {s.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => go('/about')} className="hover:text-sage-400 transition-colors">About Us</button></li>
              <li><button onClick={() => go('/custom')} className="hover:text-sage-400 transition-colors">How It Works</button></li>
              <li><button onClick={() => go('/sustainability')} className="hover:text-sage-400 transition-colors">Sustainability</button></li>
              <li><button onClick={() => go('/blog')} className="hover:text-sage-400 transition-colors">Insights</button></li>
              <li><button onClick={() => go('/contact')} className="hover:text-sage-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Get packaging tips and updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 rounded-sm bg-sage-800 border border-sage-700 text-sm placeholder:text-sage-500 focus:outline-none focus:border-sage-400"
              />
              <button className="px-4 py-2 bg-sage-500 text-white rounded-sm text-sm font-medium hover:bg-sage-400 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage-400">
          <span>© 2026 ELAPACK. All rights reserved.</span>
          <div className="flex gap-6">
            <button className="hover:text-sage-200 transition-colors">Privacy Policy</button>
            <button className="hover:text-sage-200 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
