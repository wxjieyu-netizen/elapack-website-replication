import { Factory, Globe, Users, Award } from 'lucide-react';

interface Props {
  onQuote: () => void;
}

export default function AboutPage({ onQuote }: Props) {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-gradient-to-br from-sage-800 to-sage-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-bold text-sage-400 uppercase tracking-widest mb-3">About Us</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Packaging Manufacturer Since 2008</h1>
          <p className="text-lg text-stone-300 mb-8 leading-relaxed">
            ELAPACK has been creating premium packaging for over 15 years, serving global brands with quality
            craftsmanship, sustainable materials, and scalable production support.
          </p>
          <button onClick={onQuote} className="px-8 py-4 bg-white text-sage-800 rounded-lg font-bold hover:bg-sage-50 transition-all shadow-lg">
            Work With Us
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
            {[
              { icon: Factory, value: '3M+', label: 'Pieces Per Month' },
              { icon: Globe, value: '100+', label: 'Global Brands' },
              { icon: Users, value: '15+', label: 'Years Experience' },
              { icon: Award, value: '95%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="bg-[#F8F8F8] border border-stone-100 rounded-sm p-8">
                <s.icon className="w-8 h-8 text-sage-700 mx-auto mb-3" />
                <div className="text-3xl font-bold text-stone-900">{s.value}</div>
                <div className="text-sm text-stone-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Our Story</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Founded in Fuzhou, China, ELAPACK grew from a small packaging workshop into a full-service manufacturer
              serving jewelry, fragrance, beauty and fashion brands worldwide.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We combine premium craftsmanship with low MOQs and fast turnaround, so brands of every size can present
              their products with confidence — from first sample to global delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
