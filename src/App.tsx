import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import HomePage from '@/pages/HomePage';
import CollectionPage from '@/pages/CollectionPage';
import ProductPage from '@/pages/ProductPage';

type Page = 'home' | 'collection' | 'product' | 'custom' | 'sustainability' | 'about' | 'contact';

interface Route {
  page: Page;
  params: Record<string, string>;
}

function App() {
  const [route, setRoute] = useState<Route>({ page: 'home', params: {} });
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>();

  const navigate = (page: string, params: Record<string, string> = {}) => {
    setRoute({ page: page as Page, params });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuote = (productName?: string) => {
    setQuoteProduct(productName);
    setQuoteOpen(true);
  };

  const closeQuote = () => {
    setQuoteOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route.page]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={navigate} onQuote={() => openQuote()} />

      <main className="flex-1">
        {route.page === 'home' && <HomePage onNavigate={navigate} onQuote={() => openQuote()} />}

        {route.page === 'collection' && (
          <CollectionPage
            category={route.params.category || 'jewelry-boxes'}
            sub={route.params.sub}
            onNavigate={navigate}
            onQuote={() => openQuote()}
          />
        )}

        {route.page === 'product' && (
          <ProductPage
            productId={route.params.id || 'p1'}
            onNavigate={navigate}
            onQuote={openQuote}
          />
        )}

        {route.page === 'custom' && (
          <div className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Custom Solutions</div>
              <h1 className="text-4xl font-bold text-stone-900 mb-4">Your Brand, Fully Customized</h1>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                From concept to unboxing. Low MOQ, free design support, and unlimited material choices.
                Our team works with you every step of the way to create packaging that tells your brand story.
              </p>
              <button
                onClick={() => openQuote()}
                className="px-8 py-4 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-lg font-bold hover:from-sage-800 hover:to-sage-900 transition-all shadow-lg"
              >
                Start Your Custom Design
              </button>
            </div>
          </div>
        )}

        {route.page === 'sustainability' && (
          <div className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="text-xs font-bold text-green-700 uppercase tracking-widest mb-3">Sustainability</div>
              <h1 className="text-4xl font-bold text-stone-900 mb-4">Sustainable Packaging That Feels Premium</h1>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                We offer FSC-certified paper, recycled materials, reusable structures, and lower-impact design options
                for jewelry brands that want more responsible packaging without losing presentation value.
              </p>
              <button
                onClick={() => openQuote()}
                className="px-8 py-4 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transition-all shadow-lg"
              >
                Explore Eco-Friendly Options
              </button>
            </div>
          </div>
        )}

        {route.page === 'about' && (
          <div className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">About Us</div>
              <h1 className="text-4xl font-bold text-stone-900 mb-4">Custom Jewelry Packaging Manufacturer Since 2008</h1>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                ELAPACK has been creating premium jewelry packaging for over 15 years, serving global brands
                with quality craftsmanship, sustainable materials, and scalable production support.
              </p>
              <button
                onClick={() => openQuote()}
                className="px-8 py-4 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-lg font-bold hover:from-sage-800 hover:to-sage-900 transition-all shadow-lg"
              >
                Work With Us
              </button>
            </div>
          </div>
        )}

        {route.page === 'contact' && (
          <div className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Contact</div>
              <h1 className="text-4xl font-bold text-stone-900 mb-4">Get In Touch</h1>
              <p className="text-stone-600 mb-8 text-lg leading-relaxed">
                Ready to elevate your jewelry packaging? Reach out for a free consultation and quote.
              </p>
              <button
                onClick={() => openQuote()}
                className="px-8 py-4 bg-gradient-to-r from-sage-700 to-sage-800 text-white rounded-lg font-bold hover:from-sage-800 hover:to-sage-900 transition-all shadow-lg"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer onNavigate={navigate} />

      <QuoteModal open={quoteOpen} onClose={closeQuote} productName={quoteProduct} />
    </div>
  );
}

export default App;
