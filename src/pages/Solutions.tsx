import { Link } from "react-router-dom";

import { solutions } from "../data/products";

const topicAnchors: Record<string, string> = {
  "Custom Packaging": "custom-packaging",
  "Materials & Finishes": "materials-and-finishes",
  "How It Works": "how-it-works",
  Sustainability: "sustainability",
};

const solutionContent: Record<
  string,
  {
    title: string;
    desc: string;
    image: string;
    points: { title: string; desc: string }[];
    links?: { label: string; href: string }[];
  }
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
        title: "Logo, Colour & Finish",
        desc: "Hot foil stamping, embossing, debossing, spot UV and screen printing, with Pantone-matched colours on request — so the box, bag and card read as one brand.",
      },
      {
        title: "Configured Sets",
        desc: "A set is configured per project on top of the box: the matching pouch or bag, ribbon, card and cloth are each specified and quoted as their own component, from 200 pieces per component.",
      },
    ],
    links: [
      { label: "Boxes", href: "/boxes/" },
      { label: "Pouches & Bags", href: "/pouches-bags/" },
      { label: "Complete Packaging Sets", href: "/sets/" },
    ],
  },
  "Materials & Finishes": {
    title: "Materials & Finishes",
    desc: "Choose from premium materials and logo techniques that match your price point and brand image.",
    image: "/about-materials.webp",
    points: [
      {
        title: "Papers & Board",
        desc: "Rigid board wrapped in art paper, textured paper or kraft — the structure behind most boxes we make.",
      },
      {
        title: "Textiles & Wraps",
        desc: "Velvet, satin, cotton and microfiber fabrics for pouches and linings, and leather-look wraps for boxes; each fabric is specified per project.",
      },
      {
        title: "Surface Finishes",
        desc: "Matte or gloss lamination, soft-touch film, spot UV and textured coatings for tactile distinction.",
      },
      {
        title: "Branding Techniques",
        desc: "Hot foil stamping, embossing, debossing, screen printing and digital printing, matched to the material underneath.",
      },
    ],
    links: [
      {
        label: "Surface finishes compared",
        href: "/news/surface-finishes-compared-guide/",
      },
    ],
  },
  "How It Works": {
    title: "How It Works",
    desc: "A clear process that helps you move from idea to sample, then to production with fewer revisions.",
    image: "/about-factory.webp",
    points: [
      {
        title: "1. Brief & Quotation",
        desc: "Send the product, dimensions, materials and quantity. Every component is quoted separately, and we reply within one business day.",
      },
      {
        title: "2. Custom Sample",
        desc: "A sample made to your specification costs USD 30 plus USD 25 shipping and takes 3–5 days; photos or video of the finished sample are available before dispatch on request, and the sample fee is deductible against your confirmed first order.",
      },
      {
        title: "3. Approval & Production",
        desc: "Bulk production starts only after you confirm the sample by email: 15–20 days for 200–20,000 pieces, 30–35 days for 20,000–50,000 pieces.",
      },
      {
        title: "4. Delivery",
        desc: "Quoted EXW, FOB or DDP as you require — DDP includes destination taxes and duties with door delivery — shipped from Shanghai or Shenzhen.",
      },
    ],
    links: [
      { label: "Process and video page", href: "/video/" },
      { label: "Sample guide", href: "/news/custom-packaging-samples-guide/" },
    ],
  },
  Sustainability: {
    title: "Sustainability",
    desc: "Material and end-of-use choices depend on the exact packaging specification. We review the available options with each buyer.",
    image: "/news-eco.webp",
    points: [
      {
        title: "Material Options",
        desc: "Ask about recycled kraft paper, cotton, or linen for your project; availability and supporting documents depend on the selected material.",
      },
      {
        title: "End-of-Use Review",
        desc: "Review board, coatings, windows, and local collection requirements before describing a finished package as recyclable.",
      },
      {
        title: "Reuse Considerations",
        desc: "Discuss whether a pouch or rigid box is suited to repeated use for your product and customer.",
      },
      {
        title: "Material Documents",
        desc: "Request documentation for the exact material quoted; we confirm which documents are available before making a claim.",
      },
    ],
  },
};

const industryRoutes: { name: string; desc: string; href: string; label: string }[] = [
  {
    name: "Jewellery",
    desc: "Pieces that must arrive protected and ready to gift: a rigid box for the piece, a soft pouch for travel and storage, a polishing cloth as the finishing add-on.",
    href: "/industries/?sector=Jewelry",
    label: "Jewellery packaging",
  },
  {
    name: "Eyewear",
    desc: "Frames and lenses that scratch before they are ever worn: a fitted case or box for structure, a microfiber pouch and cleaning cloth for daily protection.",
    href: "/industries/?sector=Eyewear%20%26%20Sunglasses",
    label: "Eyewear packaging",
  },
  {
    name: "Beauty",
    desc: "Jars and bottles that need shelf presence without excess material: a printed box, tissue wrap and a ribbon or card to complete the unboxing.",
    href: "/industries/?sector=Beauty",
    label: "Beauty packaging",
  },
  {
    name: "Fragrance",
    desc: "Retail boxes and sampling that carry the scent's price point: rigid or folding boxes, sample cards and tissue, matched across the range.",
    href: "/industries/?sector=Fragrance",
    label: "Fragrance packaging",
  },
  {
    name: "Fashion",
    desc: "Garments presented, not just shipped: muslin and fabric pouches, tissue paper and printed shopping bags in one consistent system.",
    href: "/industries/?sector=Fashion",
    label: "Fashion packaging",
  },
  {
    name: "Gifts",
    desc: "Seasonal and corporate gifts assembled as one set: a box, a bag and the ribbon, card or cloth configured together, not sourced separately.",
    href: "/industries/?sector=Gift",
    label: "Gift packaging",
  },
];

export default function Solutions() {
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
            Compare structures, materials and finishes for your packaging brief. For sampling and production steps, see the <Link to="/video/">process and video page</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow reveal">Industries</p>
          <h2 className="section-title reveal reveal-delay-1" style={{ marginTop: "0.75rem" }}>
            Start with your product
          </h2>
          <div className="solution-points-grid">
            {industryRoutes.map((route) => (
              <div key={route.name} className="solution-point-card">
                <h3 className="solution-point-title">{route.name}</h3>
                <p className="solution-point-desc">{route.desc}</p>
                <Link to={route.href} className="solution-link">
                  {route.label}
                  <span className="product-link-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section solutions-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((sol, i) => (
              <a
                key={sol}
                href={`#${topicAnchors[sol]}`}
                className={`solution-card reveal reveal-delay-${(i % 4) + 1}`}
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
                    Learn More
                    <span className="product-link-arrow">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {solutions.map((sol) => (
        <section key={sol} className="section" id={topicAnchors[sol]}>
          <div className="container">
            <p className="eyebrow">{sol}</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              {solutionContent[sol].title}
            </h2>
            <p>{solutionContent[sol].desc}</p>

            <div className="solution-detail-image">
              <img
                src={solutionContent[sol].image}
                alt={sol}
                loading="lazy"
                width={1408}
                height={768}
              />
            </div>

            <div className="solution-points-grid">
              {solutionContent[sol].points.map((point) => (
                <div key={point.title} className="solution-point-card">
                  <h3 className="solution-point-title">{point.title}</h3>
                  <p className="solution-point-desc">{point.desc}</p>
                </div>
              ))}
            </div>

            {solutionContent[sol].links && (
              <p>
                {solutionContent[sol].links!.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 && " · "}
                    <Link to={link.href}>{link.label}</Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <p className="eyebrow">Next step</p>
          <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
            How to start
          </h2>
          <p>
            Most projects start with one component — a box or a pouch — at 200 pieces. Send the product it has to hold and the quantity you are planning; the sample shows you the finished construction before any production commitment.
          </p>
          <div className="solution-cta">
            <Link to="/contact/" className="btn-primary">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
