import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { categories } from '@/data/catalog';

interface FooterProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
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
              Custom jewelry packaging manufacturer since 2008. We help jewelry brands elevate their presentation
              with premium, sustainable, and fully customizable packaging solutions.
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
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => onNavigate('collection', { category: cat.slug })}
                    className="hover:text-sage-400 transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-sage-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('sustainability')} className="hover:text-sage-400 transition-colors">Sustainability</button></li>
              <li><button onClick={() => onNavigate('custom')} className="hover:text-sage-400 transition-colors">Custom Options</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-sage-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Get packaging tips and updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-stone-800 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-sage-600"
              />
              <button className="px-3 py-2 bg-sage-700 text-white rounded-lg hover:bg-sage-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © 2024 ELAPACK. All rights reserved. Custom Lifestyle Packaging Manufacturer Since 2008.
          </p>
          <div className="flex gap-6 text-xs text-stone-500">
            <button className="hover:text-sage-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-sage-400 transition-colors">Terms of Service</button>
            <button className="hover:text-sage-400 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
