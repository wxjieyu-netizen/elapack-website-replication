import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCollectionBySlug } from "../data/collections";
import { getProductBySlug } from "../data/products";
import { getArticleBySlug } from "../data/articles";

/**
 * Keyword-anchored collection page (/custom-jewelry-boxes,
 * /eyewear-packaging, /custom-jewelry-pouches), rendered from
 * src/data/collections.ts. Links real catalog products only.
 */
export default function Collection({ slug }: { slug: string }) {
  const collection = getCollectionBySlug(slug);

  useEffect(() => {
    if (collection) document.title = `${collection.eyebrow} | ELAPACK`;
  }, [collection]);

  if (!collection) return null;

  const products = collection.productSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const guides = (collection.guideSlugs ?? [])
    .map((s) => getArticleBySlug(s))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">{collection.eyebrow}</p>
          <h1 className="page-title reveal reveal-delay-1">{collection.h1}</h1>
          <p className="page-subtitle reveal reveal-delay-2">{collection.subhead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="about-text" style={{ maxWidth: "820px", margin: "0 auto" }}>
              {collection.intro}
            </p>
          </div>
        </div>
      </section>

      {collection.sections.map((section) => (
        <section key={section.heading} className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header-center reveal">
              <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                {section.heading}
              </h2>
            </div>
            <div className="values-grid">
              {section.items.map((item, i) => (
                <div key={item.title} className={`value-card reveal reveal-delay-${(i % 4) + 1}`}>
                  <h3 className="value-title">{item.title}</h3>
                  <p className="value-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header-center reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Explore the products
            </h2>
          </div>
          <div className="catalog-grid">
            {products.map((product, i) => (
              <Link
                to={`/products/${product.slug}`}
                key={product.slug}
                className={`catalog-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="catalog-card-image">
                  <img src={product.image} alt={product.name} loading="lazy" width={1254} height={1254} />
                  <span className="catalog-category">{product.category}</span>
                </div>
                <div className="catalog-card-body">
                  <h3 className="catalog-name">{product.name}</h3>
                  <p className="catalog-desc">{product.shortDesc}</p>
                  <div className="catalog-meta">
                    <div className="meta-item">
                      <span className="meta-label">MOQ</span>
                      <span className="meta-value">{product.moq}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="markets-box reveal">
              <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                Sourcing guides
              </h2>
              <div className="spec-list">
                {guides.map((guide) => (
                  <p key={guide.slug} className="markets-note" style={{ marginBottom: "0.5rem" }}>
                    <Link to={`/news/${guide.slug}`} className="text-link">
                      {guide.title}
                    </Link>
                    {" — "}
                    {guide.excerpt}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {collection.factBlock && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="markets-box reveal">
              <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                Key facts ({collection.factBlock.updated})
              </h2>
              <p className="markets-note" style={{ maxWidth: "820px" }}>
                {collection.factBlock.paragraph}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="markets-box reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              MOQ & lead time
            </h2>
            <div className="spec-list">
              {collection.facts.map((row) => (
                <p key={row.label} className="markets-note" style={{ marginBottom: "0.5rem" }}>
                  <strong>{row.label}:</strong> {row.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="markets-box reveal" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              {collection.ctaTitle}
            </h2>
            <p className="markets-note">
              Message Tina on WhatsApp or phone:{" "}
              <a href="https://wa.me/8618626352096">+86 186 2635 2096</a>
              {" "}· Email: <a href="mailto:tina@elapack.com">tina@elapack.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
