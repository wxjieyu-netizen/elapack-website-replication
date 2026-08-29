import { useState, useEffect } from 'react';
import { X, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

export default function QuoteModal({ open, onClose, productName }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm animate-fadeIn" onClick={onClose} />
      <div className="relative bg-white rounded-sm shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-[#F0F1ED] rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Request Received!</h3>
            <p className="text-stone-600 text-sm">
              Thank you for your interest. Our team will contact you within 24 hours with a detailed quote.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-sage-700 text-white rounded-lg text-sm font-medium hover:bg-sage-800 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-1">Request a Quote</h3>
            <p className="text-sm text-stone-500 mb-6">
              {productName ? `For: ${productName}` : 'Tell us about your packaging needs and we will get back to you within 24 hours.'}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5">Name *</label>
                  <input
                    required
                    type="text"
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5">Company</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600 transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5">Email *</label>
                  <input
                    required
                    type="email"
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600 transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1.5">Product Type</label>
                <select
                  className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600 transition-colors bg-white"
                  defaultValue={productName ? 'custom' : ''}
                >
                  <option value="">Select a product type</option>
                  <option value="jewelry-boxes">Jewelry Boxes</option>
                  <option value="gift-boxes">Gift Boxes</option>
                  <option value="pouches">Jewelry Pouches</option>
                  <option value="display">Jewelry Display</option>
                  <option value="paper-bags">Paper Bags</option>
                  <option value="trays">Jewelry Trays</option>
                  <option value="custom">Custom / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1.5">Quantity Needed</label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600 transition-colors"
                  placeholder="e.g. 1000pcs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1.5">Project Details</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2.5 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-sage-600 focus:ring-1 focus:ring-sage-600 transition-colors resize-none"
                  placeholder="Tell us about your project, materials, colors, timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-sage-800 text-white rounded-lg font-medium text-sm hover:from-sage-800 hover:to-sage-900 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit Quote Request
              </button>

              <div className="flex items-center justify-center gap-6 pt-2 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> sales@richpkg.com
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 86-591-83059011
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
