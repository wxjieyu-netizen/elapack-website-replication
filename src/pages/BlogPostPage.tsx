import { ChevronRight, ArrowLeft } from 'lucide-react';
import { getPost } from '@/data/blog';
import { navigate } from '@/lib/router';

interface Props {
  slug: string;
}

export default function BlogPostPage({ slug }: Props) {
  const post = getPost(slug);
  if (!post) return <div className="py-20 text-center text-stone-500">Post not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#F8F8F8] border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <button onClick={() => navigate('/')} className="hover:text-sage-700">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => navigate('/blog')} className="hover:text-sage-700">Blog</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-700 line-clamp-1">{post.title}</span>
          </div>
        </div>
      </div>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs text-stone-400 mb-4">
            <span className="text-sage-700 font-medium">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight">{post.title}</h1>
          <div className="rounded-sm overflow-hidden mb-8">
            <img src={post.cover} alt={post.title} className="w-full aspect-[16/8] object-cover" />
          </div>
          <div className="space-y-5">
            {post.body.map((para, i) => (
              <p key={i} className="text-stone-600 leading-relaxed text-lg">{para}</p>
            ))}
          </div>
          <button
            onClick={() => navigate('/blog')}
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-sage-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>
        </div>
      </article>
    </div>
  );
}
