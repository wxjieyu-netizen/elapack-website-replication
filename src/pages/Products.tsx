import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { products, categories } from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Our Products</p>
          <h1 className="page-title reveal reveal-delay-1">
            A Complete Packaging
            <br />
            Ecosystem
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            From single pieces to full brand systems — every product is
            engineered for luxury, designed for consistency, and produced for
            scale.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="filter-bar-wrapper">
        <div className="container">
          <div className="filter-bar reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section products-section">
        <div className="container">
          <div className="catalog-grid">
            {filtered.map((product, i) => (
              <Link
                to={`/products/${product.slug}`}
                key={product.slug}
                className={`catalog-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="catalog-card-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <span className="catalog-category">{product.category}</span>
                </div>
                <div className="catalog-card-body">
                  <h3 className="catalog-name">{product.name}</h3>
                  <p className="catalog-desc">{product.shortDesc}</p>
                  <div className="catalog-meta">
                    <div className="meta-item">
                      <span className="meta-label">Materials</span>
                      <span className="meta-value">{product.materials}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">MOQ</span>
                      <span className="meta-value">{product.moq}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="products-cta reveal">
            <p>
              Don't see exactly what you need? Every product is fully
              customizable — from dimensions and materials to finishes and
              structural design.
            </p>
            <Link to="/contact" className="btn-outline">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
