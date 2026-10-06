import { Link } from "react-router-dom";
import { articles as guides } from "../data/articles";

const articles = [
  {
    title: "The Future of Eco-Luxury Packaging",
    excerpt:
      "How recycled kraft, natural cotton, and linen are redefining what premium packaging can be — without compromising on aesthetics.",
    image: "/news-eco.webp",
    date: "August 2026",
    category: "Sustainability",
    readTime: "5 min read",
  },
  {
    title: "Designing the Unboxing Experience",
    excerpt:
      "Why the first touch matters. We explore how structural design, material selection, and tactile finishes shape brand perception at the moment of opening.",
    image: "/news-luxury.webp",
    date: "July 2026",
    category: "Design",
    readTime: "7 min read",
  },
  {
    title: "2026 Packaging Trends for Luxury Brands",
    excerpt:
      "From minimalist monochrome to tactile maximalism — our design studio shares the five directions shaping luxury packaging this year.",
    image: "/news-trends.webp",
    date: "June 2026",
    category: "Trends",
    readTime: "6 min read",
  },
  {
    title: "Inside the Factory: How Your Custom Packaging Is Made",
    excerpt:
      "From dieline to sewing floor to box assembly — a walk through our three production lines shows what actually happens between approving a sample and receiving your order.",
    image: "/images/factory/elapack-03.jpg",
    date: "September 2026",
    category: "Manufacturing",
    readTime: "5 min read",
  },
  {
    title: "MOQ Explained: Ordering Custom Packaging as a Smaller Brand",
    excerpt:
      "Why minimums exist, how 200-piece pouch and box runs are priced, and the choices — stock materials, simpler structures, phased launches — that keep small-batch custom viable.",
    image: "/images/factory/elapack-08.jpg",
    date: "September 2026",
    category: "Sourcing Guide",
    readTime: "6 min read",
  },
];

export default function News() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">News & Insights</p>
          <h1 className="page-title reveal reveal-delay-1">
            Ideas in
            <br />
            Craft & Material
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            Perspectives on packaging design, sustainable materials, and the
            craft behind the world's most distinctive brands.
          </p>
        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          {/* Featured Article */}
          <article className="news-featured reveal">
            <div className="news-featured-image">
              <img src={articles[0].image} alt={articles[0].title} width={1600} height={1000} />
            </div>
            <div className="news-featured-body">
              <span className="news-category">{articles[0].category}</span>
              <h2 className="news-featured-title">{articles[0].title}</h2>
              <p className="news-featured-excerpt">{articles[0].excerpt}</p>
              <div className="news-meta">
                <span>{articles[0].date}</span>
                <span className="news-meta-dot" />
                <span>{articles[0].readTime}</span>
              </div>
              <Link to="/news" className="text-link">
                Read Article
                <span className="text-link-arrow">→</span>
              </Link>
            </div>
          </article>

          {/* Article Grid */}
          <div className="news-grid">
            {articles.slice(1).map((article, i) => (
              <article
                key={article.title}
                className={`news-card reveal reveal-delay-${i + 1}`}
              >
                <div className="news-card-image">
                  <img src={article.image} alt={article.title} loading="lazy" width={1600} height={1000} />
                  <span className="news-category">{article.category}</span>
                </div>
                <div className="news-card-body">
                  <h3 className="news-card-title">{article.title}</h3>
                  <p className="news-card-excerpt">{article.excerpt}</p>
                  <div className="news-meta">
                    <span>{article.date}</span>
                    <span className="news-meta-dot" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Buyer Guides */}
          <div className="news-guides-head reveal">
            <h2 className="section-title">Buyer Guides</h2>
            <p className="page-subtitle">
              Practical, supplier-neutral guides for choosing custom packaging —
              specs to prepare before you request a quote.
            </p>
          </div>
          <div className="news-grid">
            {guides.map((article, i) => (
              <article
                key={article.slug}
                className={`news-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <Link to={`/news/${article.slug}`} className="news-card-link">
                  <div className="news-card-image">
                    <img src={article.image} alt={article.imageAlt} loading="lazy" width={1600} height={1000} />
                    <span className="news-category">{article.category}</span>
                  </div>
                  <div className="news-card-body">
                    <h3 className="news-card-title">{article.title}</h3>
                    <p className="news-card-excerpt">{article.excerpt}</p>
                    <div className="news-meta">
                      <span>{article.date}</span>
                      <span className="news-meta-dot" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="newsletter-box reveal">
            <h3 className="newsletter-title">
              Stay informed on craft, material, and design.
            </h3>
            <p className="newsletter-text">
              Subscribe to receive occasional insights from our design studio
              — no noise, just substance.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
