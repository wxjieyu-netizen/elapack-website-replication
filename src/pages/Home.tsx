import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { products as catalog, getProductBySlug } from "../data/products";

// Featured on the homepage: real catalog SKUs in a curated order.
const featuredSlugs = [
  { slug: "magnetic-closure-gift-box", tag: "Signature" },
  { slug: "black-leather-jewelry-box", tag: "Icon" },
  { slug: "custom-perfume-boxes", tag: "Fragrance" },
  { slug: "custom-velvet-pouches", tag: "Bestseller" },
  { slug: "custom-cotton-pouches", tag: "Eco" },
  { slug: "kraft-paper-shopping-bag", tag: "Retail" },
  { slug: "custom-ring-boxes", tag: "Wedding" },
  { slug: "custom-eyelash-packaging-boxes", tag: "Beauty" },
];

const products = featuredSlugs
  .map(({ slug, tag }) => {
    const p = getProductBySlug(slug);
    return p ? { name: p.name, slug: p.slug, desc: p.shortDesc, image: p.image, tag } : null;
  })
  .filter((p): p is NonNullable<typeof p> => p !== null);

const stats = [
  { value: "200", label: "Individual product MOQ (pieces)" },
  { value: "3–5", label: "Custom sample days" },
  { value: "15–20", label: "Production days after sample approval + payment" },
  { value: "1", label: "Business day to reply" },
];

const popularSolutions = [
  {
    name: "Luxury Gift Boxes",
    href: "/boxes/",
    desc: "Custom rigid boxes, magnetic closures, drawer styles, and luxury gift-ready packaging for premium brands and wholesale buyers.",
    image: "/popular-gift-boxes.webp",
  },
  {
    name: "Shopping Bags & Pouches",
    href: "/pouches-bags/",
    desc: "Brand-supporting paper bags, hang tags, and cards that complete your packaging system and improve consistency.",
    image: "/popular-shopping-bags.webp",
  },
  {
    name: "Ribbons & Finishing Accessories",
    href: "/ribbons-accessories/",
    desc: "Explore ribbons and trims as finishing components for a box or pouch program.",
    image: "/popular-ribbons.webp",
  },
  {
    name: "Complete Packaging Sets",
    href: "/sets/",
    desc: "Plan the box, pouch and insert as separate components of one packaging brief.",
    image: "/popular-packaging-sets.webp",
  },
];

const brandLogos = [
  { name: "Jewelry", type: "text" as const },
  { name: "Beauty", type: "text" as const },
  { name: "Retail", type: "text" as const },
  { name: "Gifting", type: "text" as const },
  { name: "Fashion", type: "text" as const },
];

const whyCards = [
  {
    title: "Custom Supply",
    desc: "Flexible sourcing and formulation cooperation for specific product requirements.",
    image: "/why-custom-supply.webp",
  },
  {
    title: "R&D Support",
    desc: "Technical review and product development support for target applications.",
    image: "/why-rd-support.webp",
  },
  {
    title: "Supply Chain",
    desc: "Packaging, warehousing, and export coordination for stable delivery.",
    image: "/why-supply-chain.webp",
  },
  {
    title: "Technical Service",
    desc: "Clear documents, responsive communication, and consistent order follow-up.",
    image: "/why-technical-service.webp",
  },
];

const caseStudies = [
  {
    client: "Retail Shopping Bag",
    category: "Retail Packaging",
    solution: "Kraft Bag Options",
    image: "/images/carousel/kraft-bag.png",
    points: ["Confirm bag dimensions and handle style", "Share artwork and print requirements", "Request a quote for your order quantity"],
  },
  {
    client: "Jewelry Gift Box",
    category: "Jewelry Packaging",
    solution: "Gift Box Options",
    image: "/images/carousel/luxury-gift-box.png",
    points: ["Choose a box style and insert layout", "Confirm product dimensions and materials", "Review sampling needs before production"],
  },
  {
    client: "Jewelry Presentation",
    category: "Jewelry Packaging",
    solution: "Display Box Options",
    image: "/images/carousel/black-leather-box.png",
    points: ["Match the insert to the jewelry piece", "Confirm finish and branding placement", "Check stock-size or custom tooling needs"],
  },
  {
    client: "Beauty & Fragrance",
    category: "Beauty Packaging",
    solution: "Presentation Box Options",
    image: "/images/carousel/exec-d88bc44e-a36e-4f12-b991-f3f746e07e39.png",
    points: ["Share bottle or product dimensions", "Select box structure and surface finish", "Confirm quantities and sample requirements"],
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const [introPaused, setIntroPaused] = useState(false);

  const toggleIntroVideo = () => {
    const video = introVideoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () =>
    setActiveSlide((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero-image">
          <img
            src="/hero-poster-oem-odm.webp"
            alt="OEM &amp; ODM custom packaging by ELAPACK: gift boxes, shopping bags, pouches and jewelry packaging"
            width={1942}
            height={809}
          />
        </div>
        {/* The poster carries its own headline and subheading, so the hero paints
            no copy of its own — only the quote CTA, which sits under the
            poster's text block. The H1 stays in the document for screen readers
            and for search engines. */}
        <Link to="/contact/" className="hero-cta">
          Get a Quote
        </Link>
        <h1 className="visually-hidden">
          OEM &amp; ODM Custom Packaging Solutions
        </h1>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-item reveal reveal-delay-${i + 1}`}
              >
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image-wrap reveal">
              <div className="intro-image-main">
                <video
                  ref={introVideoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/factory-video-poster.webp"
                  aria-label="ELAPACK premium packaging facility"
                  onPlay={() => setIntroPaused(false)}
                  onPause={() => setIntroPaused(true)}
                >
                  <source src="/videos/factory-tour.mp4" type="video/mp4" />
                </video>
                {/* Auto-playing motion needs a pause control (WCAG 2.2.2). */}
                <button
                  type="button"
                  className="intro-video-toggle"
                  onClick={toggleIntroVideo}
                  aria-pressed={introPaused}
                  aria-label={
                    introPaused
                      ? "Play the factory video"
                      : "Pause the factory video"
                  }
                >
                  <svg
                    className="intro-video-icon intro-video-icon-pause"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="7" y="5" width="3.6" height="14" fill="currentColor" />
                    <rect
                      x="13.4"
                      y="5"
                      width="3.6"
                      height="14"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    className="intro-video-icon intro-video-icon-play"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5 L19 12 L8 19 Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="intro-image-badge">
                <span className="intro-badge-num">200</span>
                <span className="intro-badge-label">Individual product MOQ (pieces)</span>
              </div>
            </div>
            <div className="intro-right reveal reveal-delay-2">
              <p className="eyebrow">About ELAPACK</p>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>
                A builder of packaging aesthetics for the world's finest brands.
              </h2>
              <p className="intro-text">
                We are a trade-and-manufacturing integrated enterprise deeply
                rooted in the European and American markets. From exquisite
                gift boxes to luxury shopping bags, we provide one-stop
                packaging solutions for global high-end brands — covering
                creative design, custom materials, and lean production.
              </p>
              <p className="intro-text">
                Our product matrix spans premium gift boxes, luxury shopping
                bags, custom ribbons, textile fabric packaging, and complete
                brand collections — serving jewelry, eyewear, beauty,
                fragrance, gifting, and fashion brands with minimalist,
                sophisticated, and highly distinctive packaging.
              </p>
              <div className="intro-actions">
                <Link to="/about/" className="text-link">
                  Discover Our Story
                  <span className="text-link-arrow">→</span>
                </Link>
                <Link to="/video/" className="text-link">
                  See Process & Video
                  <span className="text-link-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Products ===== */}
      <section className="section products-preview">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <p className="eyebrow">Our Craft</p>
              <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                Packaging That Defines Brands
              </h2>
            </div>
            <Link to="/products/" className="text-link">
              View All Products
              <span className="text-link-arrow">→</span>
            </Link>
          </div>
          <div className="products-grid">
            {products.map((product, i) => (
              <Link
                to={`/products/${product.slug}/`}
                key={product.name}
                className={`product-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} loading="lazy" width={1254} height={1254} />
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-card-body">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <span className="product-link">
                    Explore <span className="product-link-arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Most Popular Packaging Solutions ===== */}
      <section className="section popular-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Most Requested</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Our Most Popular Packaging Solutions
            </h2>
            <p className="section-subtitle">
              Explore the packaging categories most requested by brands
              looking for presentation, protection, and stronger brand
              recognition.
            </p>
          </div>
          <div className="popular-grid">
            {popularSolutions.map((item, i) => (
              <Link
                to={item.href}
                key={item.name}
                className={`popular-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="popular-card-image">
                  <img src={item.image} alt={item.name} loading="lazy" width={1254} height={1254} />
                </div>
                <div className="popular-card-body">
                  <h3 className="popular-name">{item.name}</h3>
                  <p className="popular-desc">{item.desc}</p>
                  <span className="popular-link">
                    Learn More <span className="product-link-arrow">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="popular-cta reveal">
            <p className="popular-cta-text">
              Explore box, bag, pouch and packaging set options, then send us
              your dimensions, artwork and target quantity for a quote.
            </p>
            <div className="popular-cta-actions">
              <Link to="/contact/" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/products/" className="btn-outline">
                View Catalogue
              </Link>
              <Link to="/industries/" className="btn-outline">
                Browse by Industry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why ELAPACK ===== */}
      <section className="section advantages-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Why ELAPACK</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Your Brand Strategy Partner
            </h2>
            <p className="section-subtitle">
              Flexible sourcing, technical review, export coordination, and responsive support from concept to delivery.
            </p>
          </div>
          <div className="advantages-grid">
            {whyCards.map((card, i) => (
              <article
                key={card.title}
                className={`advantage-card reveal reveal-delay-${i + 1}`}
              >
                <div className="advantage-image">
                  <img src={card.image} alt={card.title} loading="lazy" width={1536} height={1024} />
                  <span className="advantage-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="advantage-card-body">
                  <h3 className="advantage-title">{card.title}</h3>
                  <p className="advantage-desc">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Custom Packaging Options ===== */}
      <section className="section custom-options-section">
        <div className="container">
          <div className="custom-options-banner reveal">
            <p className="eyebrow">Tailored to You</p>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Custom Packaging Options That Match Your Brand
            </h2>
            <p className="custom-options-intro">
              Choose the structure, insert, material, logo finish, color, and
              sustainability direction that fit your product and positioning.
              Whether you need a simple low-MOQ solution or a fully bespoke box,
              we help turn your idea into packaging that feels consistent with
              your brand.
            </p>
            <Link to="/solutions/" className="btn-primary">
              Explore Custom Options
            </Link>
          </div>
          <div className="custom-options-hero-image reveal reveal-delay-2">
            <img
              src="/custom-options.webp"
              alt="Custom packaging options showcase"
              loading="lazy"
            width={1408}
            height={768}
            />
          </div>
        </div>
      </section>

      {/* ===== Packaging Applications ===== */}
      <section className="section brands-logos-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Applications</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Packaging for Different Products
            </h2>
          </div>
          <div className="brands-logos-row reveal reveal-delay-2">
            {brandLogos.map((brand) => (
              <span key={brand.name} className="brand-logo-item">
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Packaging Options ===== */}
      <section className="section case-studies-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Packaging Options</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Plan Your Packaging Brief
            </h2>
            <p className="section-subtitle">
              These examples show what to specify when requesting a quote.
              Share dimensions, materials, artwork and quantity so we can check
              the suitable structure, sample and tooling options.
            </p>
          </div>
          <div className="case-carousel reveal reveal-delay-2">
            <div
              className="case-carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.client} className="case-carousel-slide">
                  <div className="case-card">
                    <div className="case-card-image">
                      <img src={study.image} alt={study.client} loading="lazy" width={1254} height={1254} />
                      <span className="case-category">{study.category}</span>
                    </div>
                    <div className="case-card-body">
                      <span className="case-client">Option: {study.client}</span>
                      <h3 className="case-solution">{study.solution}</h3>
                      <div className="case-divider" />
                      <ul className="case-points">
                        {study.points.map((point) => (
                          <li key={point} className="case-point">
                            <span className="case-point-dot" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="case-carousel-controls reveal">
            <button
              className="carousel-btn carousel-prev"
              onClick={prevSlide}
              aria-label="Previous packaging option"
            >
              <span>‹</span>
            </button>
            <div className="carousel-dots">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === activeSlide ? "is-active" : ""}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to packaging option ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="carousel-btn carousel-next"
              onClick={nextSlide}
              aria-label="Next packaging option"
            >
              <span>›</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== Philosophy ===== */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-image reveal">
              <img
                src="/about-craft.webp"
                alt="Artisan crafting premium packaging"
                loading="lazy"
              width={1408}
              height={768}
              />
            </div>
            <div className="philosophy-content reveal reveal-delay-2">
              <p className="eyebrow" style={{ fontSize: "30px" }}>Our Philosophy</p>
              <h2 className="section-title" style={{ marginTop: "1rem", fontSize: "26px" }}>
                Simplicity. Sophistication. Luxury.
              </h2>
              <p className="philosophy-text">
                We believe truly premium packaging does not rely on excess
                decoration. It communicates value through detail, touch,
                structure, and brand consistency.
              </p>
              <p className="philosophy-text">
                Our design language is restrained yet refined — pursuing the
                balance between clean lines, elegant proportions, delicate
                materials, and impeccable craftsmanship. Every element serves
                the brand it carries.
              </p>
              <div className="philosophy-values">
                <div className="value-item">
                  <span className="value-dot" />
                  <span>Minimalist Aesthetic</span>
                </div>
                <div className="value-item">
                  <span className="value-dot" />
                  <span>Tactile Quality</span>
                </div>
                <div className="value-item">
                  <span className="value-dot" />
                  <span>Brand Consistency</span>
                </div>
                <div className="value-item">
                  <span className="value-dot" />
                  <span>Sustainable Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <h2 className="section-title-lg" style={{ color: "#fff" }}>
              Let's craft something
              <br />
              extraordinary together.
            </h2>
            <p className="cta-text">
              Tell us about your brand. We'll bring the craft, materials, and
              vision to make it unforgettable.
            </p>
            <Link to="/contact/" className="btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
