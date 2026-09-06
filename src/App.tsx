import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import HomePage from '@/pages/HomePage';
import LineLandingPage from '@/pages/LineLandingPage';
import SeriesPage from '@/pages/SeriesPage';
import ProductPage from '@/pages/ProductPage';
import CustomPage from '@/pages/CustomPage';
import SustainabilityPage from '@/pages/SustainabilityPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import { useRoute, navigate } from '@/lib/router';

function NotFound() {
  return (
    <div className="py-24 text-center">
      <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">404</div>
      <h1 className="text-3xl font-bold text-stone-900 mb-4">Page Not Found</h1>
      <p className="text-stone-500 mb-8">The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate('/')}
        className="px-7 py-3 bg-sage-700 text-white rounded-lg font-medium hover:bg-sage-800 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
}

function App() {
  const route = useRoute();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>();

  const openQuote = (productName?: string) => {
    setQuoteProduct(productName);
    setQuoteOpen(true);
  };
  const closeQuote = () => setQuoteOpen(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onQuote={() => openQuote()} />

      <main className="flex-1">
        {route.kind === 'home' && <HomePage onQuote={() => openQuote()} />}
        {route.kind === 'line' && <LineLandingPage lineId={route.lineId} onQuote={() => openQuote()} />}
        {route.kind === 'series' && <SeriesPage path={route.path} onQuote={() => openQuote()} />}
        {route.kind === 'product' && <ProductPage slug={route.slug} onQuote={openQuote} />}
        {route.kind === 'page' && route.page === 'custom' && <CustomPage onQuote={() => openQuote()} />}
        {route.kind === 'page' && route.page === 'sustainability' && <SustainabilityPage onQuote={() => openQuote()} />}
        {route.kind === 'page' && route.page === 'about' && <AboutPage onQuote={() => openQuote()} />}
        {route.kind === 'page' && route.page === 'contact' && <ContactPage onQuote={() => openQuote()} />}
        {route.kind === 'blog' && <BlogPage />}
        {route.kind === 'blog-post' && <BlogPostPage slug={route.slug} />}
        {route.kind === 'not-found' && <NotFound />}
      </main>

      <Footer />

      <QuoteModal open={quoteOpen} onClose={closeQuote} productName={quoteProduct} />
    </div>
  );
}

export default App;
