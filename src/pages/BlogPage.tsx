import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { navigate } from '@/lib/router';

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 bg-[#F8F8F8] border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-bold text-sage-700 uppercase tracking-widest mb-3">Blog / Insights</div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Packaging Ideas & Insights</h1>
          <p className="text-lg text-stone-500">
            Guides, trends and practical advice for brands building memorable packaging.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="group bg-white rounded-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:border-sage-200 transition-all text-left"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#F0F1ED]">
                  <img src={post.cover} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                    <span className="text-sage-700 font-medium">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-stone-900 mb-2 leading-snug group-hover:text-sage-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-stone-500 line-clamp-2 mb-4">{post.excerpt}</p>
                  <span className="text-sm text-sage-700 font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
