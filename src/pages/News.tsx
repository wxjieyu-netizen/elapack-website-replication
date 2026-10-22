import { Link } from "react-router-dom";
import { articles as guides } from "../data/articles";

const [featured, ...remainingGuides] = guides;

export default function News() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Buyer Guides</p>
          <h1 className="page-title reveal reveal-delay-1">
            Custom Packaging
            <br />
            Buyer Guides
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            Compare packaging structures, materials and order requirements
            before requesting a quote.
          </p>
        </div>
      </section>

      <section className="section news-section">
        <div className="container">
          {/* Featured Article */}
          <article className="news-featured reveal">
            <div className="news-featured-image">
              <img src={featured.image} alt={featured.imageAlt} width={featured.imageWidth ?? 1600} height={featured.imageHeight ?? 1000} />
            </div>
            <div className="news-featured-body">
              <span className="news-category">{featured.category}</span>
              <h2 className="news-featured-title">{featured.title}</h2>
              <p className="news-featured-excerpt">{featured.excerpt}</p>
              <div className="news-meta">
                <span>{featured.date}</span>
                <span className="news-meta-dot" />
                <span>{featured.readTime}</span>
              </div>
              <Link to={`/news/${featured.slug}/`} className="text-link">
                Read Guide
                <span className="text-link-arrow">→</span>
              </Link>
            </div>
          </article>

          {/* Buyer Guides */}
          <div className="news-guides-head reveal">
            <h2 className="section-title">More Buyer Guides</h2>
            <p className="page-subtitle">
              Practical questions and specifications to prepare before you request a quote.
            </p>
          </div>
          <div className="news-grid">
            {remainingGuides.map((article, i) => (
              <article
                key={article.slug}
                className={`news-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <Link to={`/news/${article.slug}/`} className="news-card-link">
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

        </div>
      </section>
    </>
  );
}
