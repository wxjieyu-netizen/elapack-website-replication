import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug, products } from "../data/products";

const trustBadges = [
  { icon: "M", label: "Custom Pantone Matching" },
  { icon: "C", label: "100% Customization" },
  { icon: "D", label: "Design & Samples" },
  { icon: "M", label: "Low MOQ From 200/500 pcs" },
];

const processSteps = [
  { step: "01", title: "Establish Contact" },
  { step: "02", title: "Communicate OEM & ODM Requirements" },
  { step: "03", title: "Quotation" },
  { step: "04", title: "Customized Samples" },
  { step: "05", title: "Printing & Surface Treatment" },
  { step: "06", title: "Confirm Order" },
  { step: "07", title: "Make Payment" },
  { step: "08", title: "Mass Production" },
  { step: "09", title: "Quality Inspection & Shipment" },
];

const productFaqs = [
  {
    q: "What materials are available for custom pouches?",
    a: "We offer high-quality silk, cotton, velvet, linen, and satin. Each material can be customized with various finishes such as matte, glossy, or textured to match your brand aesthetic.",
  },
  {
    q: "Can I customize the size and shape of the pouches?",
    a: "Absolutely. We offer standard sizes like 6x8 inches and 4x6 inches, plus fully custom dimensions. Shapes include classic drawstring, flat bottom, zip-top, and bespoke structural designs.",
  },
  {
    q: "Are the pouches eco-friendly?",
    a: "We offer eco-friendly material options including recycled kraft paper, natural cotton, and linen. Certification documents are available on request.",
  },
  {
    q: "How long does the production process take?",
    a: "Typical production time is 15–20 days after sample approval. Shipping is by air or by sea from Shanghai or Shenzhen.",
  },
  {
    q: "Can I see a sample before placing a full order?",
    a: "Yes. Free stock samples ship in 2–3 days. Custom printed samples cost USD 25 plus USD 20 shipping (USD 45 total), are made in 3–5 days, and sample delivery takes 4–7 days.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept T/T (bank transfer) and PayPal.",
  },
  {
    q: "What types of closures are available for the pouches?",
    a: "We offer drawstring cord, zip-top, magnetic snap, button closure, and ribbon tie closures. Cord materials include silk, cotton, satin, and leather, all color-matched to your brand.",
  },
];

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!product) {
    return (
      <section
        className="section"
        style={{
          textAlign: "center",
          paddingTop: "calc(var(--header-height) + 6rem)",
        }}
      >
        <div className="container">
          <h1 className="section-title">Product not found</h1>
          <p className="text-soft" style={{ margin: "1rem 0 2rem" }}>
            The product you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero with Gallery */}
      <section className="product-detail-hero">
        <div className="container">
          <div className="product-detail-grid">
            <div className="product-detail-gallery reveal">
              <div className="product-gallery-main">
                <img src={product.image} alt={product.name} />
                <span className="product-detail-category">
                  {product.category}
                </span>
              </div>
              <div className="product-gallery-thumbs">
                {[product.image]
                  .map((img, i) => (
                    <div
                      key={i}
                      className={`product-gallery-thumb ${i === 0 ? "is-active" : ""}`}
                    >
                      <img src={img} alt={`${product.name} view ${i + 1}`} loading="lazy" />
                    </div>
                  ))}
              </div>
            </div>

            <div className="product-detail-info reveal reveal-delay-2">
              <h1 className="product-detail-title">{product.name}</h1>
              <p className="product-detail-desc">{product.description}</p>

              <div className="product-detail-quote">
                <h3 className="product-quote-title">Get A Custom Quote:</h3>
                <div className="product-quote-actions">
                  <Link to="/contact" className="btn-primary">
                    Request a Quote
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="product-trust-badges">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="product-trust-badge">
                    <span className="product-trust-icon">{badge.icon}</span>
                    <span className="product-trust-label">{badge.label}</span>
                  </div>
                ))}
              </div>

              <div className="product-detail-meta">
                <div className="detail-meta-item">
                  <span className="detail-meta-label">Materials</span>
                  <span className="detail-meta-value">{product.materials}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="detail-meta-label">Minimum Order</span>
                  <span className="detail-meta-value">{product.moq}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="detail-meta-label">Lead Time</span>
                  <span className="detail-meta-value">{product.leadTime}</span>
                </div>
              </div>

              <div className="product-detail-industries">
                <span className="detail-meta-label">Industries</span>
                <div className="industry-tags">
                  {product.industries.map((ind) => (
                    <span key={ind} className="industry-tag">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section product-specs-section">
        <div className="container">
          <div className="product-specs-grid">
            <div className="product-specs-intro reveal">
              <p className="eyebrow">Technical Details</p>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>
                Specifications
              </h2>
              <p className="product-specs-text">
                Every dimension, material, and finish is fully customizable to
                your brand's exact requirements. Below are our standard
                configurations — contact us to discuss custom specifications.
              </p>
              <Link to="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
            </div>
            <div className="product-specs-table reveal reveal-delay-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className="spec-row">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="section product-description-section">
        <div className="container">
          <div className="product-description-grid">
            <div className="reveal">
              <p className="eyebrow">Product Description</p>
              <p className="product-description-text" style={{ marginTop: "1rem" }}>
                {product.description}
              </p>
            </div>
            <div className="product-description-image reveal reveal-delay-2">
              <img
                src="/product-collection.webp"
                alt={`${product.name} showcase`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="section product-importance-section">
        <div className="container">
          <div className="section-header-center reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              The Importance of Luxury Jewelry Pouches in Your Jewelry Store
            </h2>
            <p className="product-description-text" style={{ maxWidth: "760px", margin: "1.5rem auto 0" }}>
              In the competitive world of jewelry, every detail contributes to the customer experience, and luxury jewelry pouches play a crucial role. These stylish and carefully designed pouches go beyond aesthetics, offering several key benefits for jewelry stores:
            </p>
          </div>
          <div className="product-benefits-grid">
            <div className="product-benefit-card reveal">
              <span className="product-benefit-num">01</span>
              <h3 className="product-benefit-title">Elevating Customer Experience</h3>
              <p className="product-benefit-desc">
                When customers receive their jewelry in a plush and luxurious pouch, it enhances the overall experience and makes them feel that they are acquiring something truly special.
              </p>
            </div>
            <div className="product-benefit-card reveal reveal-delay-2">
              <span className="product-benefit-num">02</span>
              <h3 className="product-benefit-title">Protection and Preservation</h3>
              <p className="product-benefit-desc">
                These pouches provide an added layer of protection. They shield delicate and valuable pieces from potential scratches, dust, and damage, ensuring that the jewelry remains in pristine condition until it reaches the customer's hands.
              </p>
            </div>
            <div className="product-benefit-card reveal reveal-delay-3">
              <span className="product-benefit-num">03</span>
              <h3 className="product-benefit-title">Subtle Branding Opportunity</h3>
              <p className="product-benefit-desc">
                Luxury jewelry pouches can serve as a discreet branding tool. By incorporating your jewelry store's logo or design on the pouch, you not only reinforce your brand's identity but also create a lasting impression on customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customize Your Bags Section */}
      <section className="section product-customize-bags-section">
        <div className="container">
          <div className="product-customize-bags-grid">
            <div className="product-customize-bags-image reveal">
              <img
                src="/custom-options.webp"
                alt="Customize your jewelry bags"
                loading="lazy"
              />
            </div>
            <div className="product-customize-bags-content reveal reveal-delay-2">
              <p className="eyebrow">100% Customization</p>
              <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                Customize Your Jewelry Bags
              </h2>
              <p className="product-description-text">
                At ELAPACK, we understand the importance of tailoring every detail to suit your unique style and preferences. If you don't find a compelling solution among the ones proposed, we also offer the possibility of 100% customized jewelry pouches wholesale.
              </p>
              <p className="product-description-text">
                You can always request a highly customized project in line with your style and wishes: we will be happy to find you the right solution to satisfy your needs and your customers' preferences.
              </p>
              <p className="product-description-text">
                Whether it's a specific color, texture, or design, we're dedicated to crafting solutions that exceed your expectations and resonate with your customers' preferences. Moreover, you can add to your jewelry pouches your logo and your graphics, creating packaging that totally reflects your brand and its characteristics.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: "0.5rem" }}>
                Customize Your Pouches
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section product-features-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Key Features</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Engineered for Excellence
            </h2>
          </div>
          <div className="product-features-grid">
            {product.features.map((feature, i) => (
              <div
                key={feature.title}
                className={`product-feature-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <span className="product-feature-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="product-feature-title">{feature.title}</h3>
                <p className="product-feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Process */}
      <section className="section product-process-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">How We Work</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Customization Process
            </h2>
            <p className="section-subtitle">
              Our professional customization team meets 100% of customer needs —
              from initial contact to quality inspection before shipment.
            </p>
          </div>
          <div className="product-process-grid">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className={`product-process-step reveal reveal-delay-${(i % 4) + 1}`}
              >
                <span className="product-process-num">{step.step}</span>
                <h3 className="product-process-title">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="section product-custom-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Make It Yours</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Customization Options
            </h2>
            <p className="section-subtitle">
              Every element of this product can be tailored to your brand.
              Here are the most common customization paths.
            </p>
          </div>
          <div className="custom-options-chips reveal reveal-delay-2">
            {product.customizationOptions.map((opt) => (
              <span key={opt} className="custom-chip">
                {opt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section product-faq-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Questions & Answers</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="faq-list reveal reveal-delay-1">
            {productFaqs.map((faq, i) => (
              <div
                key={faq.q}
                className={`faq-item ${openFaq === i ? "is-open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>Q: {faq.q}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section product-related-section">
          <div className="container">
            <div className="section-header reveal">
              <div>
                <p className="eyebrow">Explore More</p>
                <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
                  Related Products
                </h2>
              </div>
              <Link to="/products" className="text-link">
                View All
                <span className="text-link-arrow">→</span>
              </Link>
            </div>
            <div className="related-grid">
              {related.map((item, i) => (
                <Link
                  to={`/products/${item.slug}`}
                  key={item.slug}
                  className={`related-card reveal reveal-delay-${(i % 3) + 1}`}
                >
                  <div className="related-card-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="related-card-body">
                    <span className="related-category">{item.category}</span>
                    <h3 className="related-name">{item.name}</h3>
                    <p className="related-desc">{item.shortDesc}</p>
                    <span className="related-link">
                      View Details <span className="product-link-arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <h2 className="section-title-lg" style={{ color: "#fff" }}>
              Ready to customize
              <br />
              this for your brand?
            </h2>
            <p className="cta-text">
              Share your specifications and we'll prepare a tailored proposal
              within one business day.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
