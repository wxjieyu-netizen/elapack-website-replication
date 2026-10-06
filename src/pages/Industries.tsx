import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { industries, products } from "../data/products";

const industryContent: Record<
  string,
  { desc: string; image: string; highlights: string[] }
> = {
  Jewelry: {
    desc: "From ring boxes to necklace cases, we craft packaging that protects and presents fine jewelry with the luxury it deserves.",
    image: "/product-giftbox.webp",
    highlights: [
      "Ring, earring, necklace & bracelet boxes",
      "Velvet, suede & leatherette interiors",
      "Foil-stamped branding & embossing",
      "Low MOQ for independent jewelers",
    ],
  },
  "Eyewear & Sunglasses": {
    desc: "Slim, structured cases and pouches designed to protect eyewear while communicating brand quality at every touchpoint.",
    image: "/product-shoppingbag.webp",
    highlights: [
      "Rigid slide cases & folding cartons",
      "Microfiber pouches & cloths",
      "Custom-shaped foam inserts",
      "Retail display-ready packaging",
    ],
  },
  Fragrance: {
    desc: "Rigid gift boxes and drawer-style cases that turn fragrance unboxing into a ritual of discovery.",
    image: "/product-collection.webp",
    highlights: [
      "Drawer-style & magnetic closure boxes",
      "Flocked velvet & satin inserts",
      "Pantone-matched color systems",
      "Coordinated gift sets",
    ],
  },
  "Hair & Wig": {
    desc: "Breathable textile packaging and structured boxes designed to protect and present hair products with care.",
    image: "/product-textile.webp",
    highlights: [
      "Breathable cotton & linen pouches",
      "Structured display boxes",
      "Custom-sized for wig & extension products",
      "Branded woven labels & tags",
    ],
  },
  Beauty: {
    desc: "From cream jars to makeup palettes, we design packaging that elevates beauty brands on shelf and in hand.",
    image: "/product-giftbox.webp",
    highlights: [
      "Folding cartons & rigid boxes",
      "Soft-touch & matte lamination finishes",
      "Spot UV & foil stamp accents",
      "Sustainable material options",
    ],
  },
  Fashion: {
    desc: "Luxury shopping bags, garment packaging, and branded accessories that extend your brand beyond the product.",
    image: "/product-shoppingbag.webp",
    highlights: [
      "Heavyweight shopping bags with rope handles",
      "Garment bags & dust covers",
      "Branded ribbons & hang tags",
      "Complete retail packaging systems",
    ],
  },
  Gift: {
    desc: "Coordinated gift packaging systems that make every unboxing a memorable brand experience.",
    image: "/product-collection.webp",
    highlights: [
      "Complete gift set collections",
      "Seasonal & limited-edition packaging",
      "Custom tissue paper & ribbons",
      "Corporate gifting solutions",
    ],
  },
};

export default function Industries() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSector = searchParams.get("sector") || null;
  const [selected, setSelected] = useState<string | null>(activeSector);

  useEffect(() => {
    setSelected(activeSector);
  }, [activeSector]);

  const handleSelect = (ind: string | null) => {
    setSelected(ind);
    if (ind) {
      setSearchParams({ sector: ind });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = selected
    ? products.filter((p) =>
        p.industries.some(
          (ind) =>
            ind.toLowerCase() === selected.toLowerCase() ||
            ind.toLowerCase().includes(selected.toLowerCase()) ||
            selected.toLowerCase().includes(ind.toLowerCase())
        )
      )
    : [];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Industries</p>
          <h1 className="page-title reveal reveal-delay-1">
            Packaging for
            <br />
            Every Industry
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            We serve brands across jewelry, beauty, fragrance, fashion, and
            more — with packaging tailored to each industry's unique demands.
          </p>
        </div>
      </section>

      <section className="filter-bar-wrapper" aria-label="Browse industries">
        <div className="container">
          <div className="filter-bar">
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                className={`filter-chip ${selected === ind ? "is-active" : ""}`}
                onClick={() => handleSelect(selected === ind ? null : ind)}
              >
                <span>{ind}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section industries-section">
        <div className="container">
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <button
                key={ind}
                className={`industry-card reveal reveal-delay-${(i % 4) + 1} ${
                  selected === ind ? "is-active" : ""
                }`}
                onClick={() =>
                  handleSelect(selected === ind ? null : ind)
                }
              >
                <div className="industry-card-image">
                  <img
                    src={industryContent[ind].image}
                    alt={ind}
                    loading="lazy"
                    width={1408}
                    height={768}
                  />
                </div>
                <div className="industry-card-body">
                  <h3 className="industry-name">{ind}</h3>
                  <p className="industry-desc">{industryContent[ind].desc}</p>
                </div>
              </button>
            ))}
          </div>

          {selected && (
            <div className="industry-detail reveal">
              <div className="industry-detail-header">
                <div>
                  <p className="eyebrow">{selected}</p>
                  <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                    Packaging Solutions for {selected}
                  </h2>
                </div>
                <button
                  className="btn-outline"
                  onClick={() => handleSelect(null)}
                >
                  Show All Industries
                </button>
              </div>

              <div className="industry-highlights">
                {industryContent[selected].highlights.map((h) => (
                  <div key={h} className="industry-highlight-item">
                    <span className="case-point-dot" />
                    {h}
                  </div>
                ))}
              </div>

              {filteredProducts.length > 0 && (
                <>
                  <h3 className="industry-products-title">
                    Recommended Products
                  </h3>
                  <div className="industry-products-grid">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        className="industry-product-card"
                      >
                        <div className="industry-product-image">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            width={1254}
                            height={1254}
                          />
                        </div>
                        <div className="industry-product-body">
                          <span className="industry-product-category">
                            {product.category}
                          </span>
                          <h4 className="industry-product-name">
                            {product.name}
                          </h4>
                          <span className="industry-product-link">
                            View Product <span className="product-link-arrow">→</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              <div className="industry-cta">
                <Link to="/contact" className="btn-primary">
                  Request a Quote for {selected}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
