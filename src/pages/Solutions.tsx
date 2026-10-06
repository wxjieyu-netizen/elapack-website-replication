import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { solutions } from "../data/products";

const solutionContent: Record<
  string,
  { title: string; desc: string; image: string; points: { title: string; desc: string }[] }
> = {
  "Custom Packaging": {
    title: "Custom Packaging",
    desc: "From structure and inserts to finish and branding, we turn your idea into packaging that feels consistent with your brand.",
    image: "/custom-options.webp",
    points: [
      {
        title: "Structure Design",
        desc: "Rigid boxes, folding cartons, drawer styles, magnetic closures, and custom structural designs engineered for your product.",
      },
      {
        title: "Insert Engineering",
        desc: "EVA foam, velvet, satin, molded pulp, and custom-fit inserts designed to protect and present your product.",
      },
      {
        title: "Logo & Finish",
        desc: "Hot foil stamping, embossing, debossing, spot UV, screen printing, and metallic finishes for premium brand expression.",
      },
      {
        title: "Color Systems",
        desc: "Pantone-matched colors, custom gradients, monochrome palettes, and brand-specific color systems across all components.",
      },
    ],
  },
  "Materials & Finishes": {
    title: "Materials & Finishes",
    desc: "Choose from premium materials and logo techniques that match your price point and brand image.",
    image: "/about-materials.webp",
    points: [
      {
        title: "Premium Papers & Board",
        desc: "Rigid board, art paper, textured paper, and kraft materials. Certification documents available on request.",
      },
      {
        title: "Luxury Textiles",
        desc: "Leatherette, velvet, suede, linen, genuine leather, and recycled textiles for interior and exterior wrapping.",
      },
      {
        title: "Surface Finishes",
        desc: "Matte/gloss lamination, soft-touch, spot UV, textured coatings, and specialty finishes for tactile distinction.",
      },
      {
        title: "Branding Techniques",
        desc: "Hot foil stamping, embossing, debossing, screen printing, digital printing, and metallic foil applications.",
      },
    ],
  },
  "How It Works": {
    title: "How It Works",
    desc: "A clear process that helps you move from idea to sample, then to production with fewer revisions.",
    image: "/about-factory.webp",
    points: [
      {
        title: "1. Consultation",
        desc: "Share your brand, product, and packaging goals. We assess needs, timeline, and budget parameters.",
      },
      {
        title: "2. Design & Sampling",
        desc: "Our design studio creates structural and visual concepts. We produce physical samples for your approval.",
      },
      {
        title: "3. Production",
        desc: "Once samples are approved, we move to mass production with rigorous QC protocols at every stage.",
      },
      {
        title: "4. Delivery",
        desc: "Quality-checked products are packed and shipped with reliable lead times to Europe and North America.",
      },
    ],
  },
  Sustainability: {
    title: "Sustainability",
    desc: "Sustainability should support your brand, not weaken it. We offer responsible packaging without losing presentation value.",
    image: "/news-eco.webp",
    points: [
      {
        title: "Eco-Friendly Materials",
        desc: "Recycled kraft paper, natural cotton, and linen options. Certification documents available on request.",
      },
      {
        title: "Recyclable Structures",
        desc: "Packaging structures designed to be recyclable where local facilities allow.",
      },
      {
        title: "Reusable Structures",
        desc: "Packaging designed to be kept and reused — from linen wraps to keepsake boxes that extend product lifecycle.",
      },
      {
        title: "Responsible Sourcing",
        desc: "We work with suppliers who can provide material documentation and certifications upon request.",
      },
    ],
  },
};

export default function Solutions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTopic = searchParams.get("topic") || null;
  const [selected, setSelected] = useState<string | null>(activeTopic);

  useEffect(() => {
    setSelected(activeTopic);
  }, [activeTopic]);

  const handleSelect = (sol: string | null) => {
    setSelected(sol);
    if (sol) {
      setSearchParams({ topic: sol });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Solutions</p>
          <h1 className="page-title reveal reveal-delay-1">
            Packaging
            <br />
            Solutions
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            From custom packaging design to sustainable materials — explore the
            services and capabilities that power your brand's packaging.
          </p>
        </div>
      </section>

      <section className="section solutions-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((sol, i) => (
              <button
                key={sol}
                className={`solution-card reveal reveal-delay-${(i % 4) + 1} ${
                  selected === sol ? "is-active" : ""
                }`}
                onClick={() =>
                  handleSelect(selected === sol ? null : sol)
                }
              >
                <div className="solution-card-image">
                  <img
                    src={solutionContent[sol].image}
                    alt={sol}
                    loading="lazy"
                    width={1408}
                    height={768}
                  />
                </div>
                <div className="solution-card-body">
                  <h3 className="solution-name">{sol}</h3>
                  <p className="solution-desc">{solutionContent[sol].desc}</p>
                  <span className="solution-link">
                    {selected === sol ? "Show All" : "Learn More"}
                    <span className="product-link-arrow">→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          {selected && (
            <div className="solution-detail reveal">
              <div className="solution-detail-header">
                <div>
                  <p className="eyebrow">{selected}</p>
                  <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                    {solutionContent[selected].title}
                  </h2>
                </div>
                <button
                  className="btn-outline"
                  onClick={() => handleSelect(null)}
                >
                  Show All Solutions
                </button>
              </div>

              <div className="solution-detail-image">
                <img
                  src={solutionContent[selected].image}
                  alt={selected}
                  loading="lazy"
                  width={1408}
                  height={768}
                />
              </div>

              <div className="solution-points-grid">
                {solutionContent[selected].points.map((point) => (
                  <div key={point.title} className="solution-point-card">
                    <h4 className="solution-point-title">{point.title}</h4>
                    <p className="solution-point-desc">{point.desc}</p>
                  </div>
                ))}
              </div>

              <div className="solution-cta">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
