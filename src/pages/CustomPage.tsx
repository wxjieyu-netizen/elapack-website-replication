import { ArrowRight, PenTool, Package, Factory, ShieldCheck } from 'lucide-react';
import { navigate } from '@/lib/router';

interface Props {
  onQuote: () => void;
}

const steps = [
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Share your idea, logo and dimensions. Our team provides free design support and material recommendations.',
  },
  {
    icon: Package,
    title: 'Sampling',
    desc: 'Approve a physical pre-production sample so you know exactly what the final product feels like.',
  },
  {
    icon: Factory,
    title: 'Mass Production',
    desc: 'Once approved, we scale into full production with strict quality control at every stage.',
  },
  {
    icon: ShieldCheck,
    title: 'QC & Delivery',
    desc: '100% inspection before shipment, then global delivery with reliable logistics and tracking.',
  },
];

export default function CustomPage({ onQuote }: Props) {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-gradient-to-br from-sage-800 to-sage-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-bold text-sage-400 uppercase tracking-widest mb-3">Custom Solutions</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Brand, Fully Customized</h1>
          <p className="text-lg text-stone-300 mb-8 leading-relaxed">
            From concept to unboxing. Low MOQ, free design support, and unlimited material choices — we work with you
            every step of the way to create packaging that tells your brand story.
          </p>
          <button
            onClick={onQuote}
            className="px-8 py-4 bg-white text-sage-800 rounded-lg font-bold hover:bg-sage-50 transition-all shadow-lg"
          >
            Start Your Custom Design
          </button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">How It Works</div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">From Design to Delivery</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-white border border-stone-100 rounded-sm p-7 hover:shadow-xl hover:border-sage-200 transition-all">
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-sage-50 to-sage-100 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-sage-700" />
                </div>
                <div className="text-xs font-bold text-sage-600 mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Ready to Bring Your Packaging to Life?</h2>
          <p className="text-stone-600 mb-8">Tell us about your project and get a free consultation from our packaging experts.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={onQuote} className="px-7 py-3.5 bg-sage-700 text-white rounded-lg font-medium hover:bg-sage-800 transition-all">
              Request a Quote
            </button>
            <button onClick={() => navigate('/pouches')} className="px-7 py-3.5 border border-stone-300 text-stone-700 rounded-lg font-medium hover:border-sage-600 hover:text-sage-700 transition-all flex items-center gap-2">
              Browse Products <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
