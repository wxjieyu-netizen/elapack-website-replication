import { Leaf, Recycle, ShieldCheck, Check } from 'lucide-react';

interface Props {
  onQuote: () => void;
}

const materials = [
  'FSC-certified paper',
  'Recycled cotton & muslin',
  'Organic and natural fabrics',
  'Reusable non-woven bags',
  'Water-based inks & adhesives',
  'Reduced-plastic inserts',
];

export default function SustainabilityPage({ onQuote }: Props) {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-300 rounded-full text-xs font-medium mb-5 border border-green-500/30">
            <Leaf className="w-3.5 h-3.5" /> Sustainability
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainable Packaging That Feels Premium</h1>
          <p className="text-lg text-stone-300 mb-8 leading-relaxed">
            Sustainability should support your brand, not weaken it. We offer responsible materials and lower-impact
            design options without losing presentation value.
          </p>
          <button onClick={onQuote} className="px-8 py-4 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg">
            Explore Eco-Friendly Options
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Leaf, title: 'Responsible Materials', desc: 'FSC paper, recycled fabrics and organic cotton sourced with traceability.' },
              { icon: Recycle, title: 'Reusable Structures', desc: 'Pouches and rigid boxes designed to be kept and reused long after purchase.' },
              { icon: ShieldCheck, title: 'Lower-Impact Finish', desc: 'Water-based inks and reduced-plastic inserts without compromising quality.' },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-stone-100 rounded-sm p-7 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-sm bg-green-50 flex items-center justify-center mb-5">
                  <f.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F8F8] border border-stone-100 rounded-sm p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Eco-Friendly Material Options</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {materials.map((m) => (
                <li key={m} className="flex items-center gap-2.5 text-sm text-stone-700">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
