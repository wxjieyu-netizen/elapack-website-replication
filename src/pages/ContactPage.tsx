import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface Props {
  onQuote: () => void;
}

export default function ContactPage({ onQuote }: Props) {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 bg-gradient-to-br from-sage-800 to-sage-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-bold text-sage-400 uppercase tracking-widest mb-3">Contact</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Your Packaging Together</h1>
          <p className="text-lg text-stone-300 leading-relaxed">
            Tell us about your project and our packaging experts will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { icon: Mail, label: 'Email', value: 'sales@richpkg.com' },
              { icon: Phone, label: 'Phone / WhatsApp', value: '86-591-83059011' },
              { icon: MapPin, label: 'Address', value: 'Fuzhou, Fujian, China' },
              { icon: Clock, label: 'Business Hours', value: 'Mon–Fri, 9:00–18:00 (CST)' },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 bg-[#F8F8F8] border border-stone-100 rounded-sm p-5">
                <div className="w-11 h-11 rounded-sm bg-sage-50 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{c.label}</div>
                  <div className="text-stone-800 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-stone-100 rounded-sm p-8">
            <h2 className="text-xl font-bold text-stone-900 mb-5">Request a Quote</h2>
            <p className="text-sm text-stone-500 mb-6">
              Share your requirements and we'll respond with pricing, MOQ and samples availability.
            </p>
            <button
              onClick={onQuote}
              className="w-full py-3.5 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-lg font-medium hover:from-sage-800 hover:to-sage-900 transition-all"
            >
              Open Quote Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
