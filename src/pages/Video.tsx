import { useState } from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    phase: "Early",
    title: "Requirements & Design",
    desc: "Share your brand, product and requirements so we can review structure, materials and artwork before sampling.",
  image: "/about-materials.webp",
  points: [
      "Brand & product consultation",
      "Structural design concepts",
      "Material & finish recommendations",
      "Design draft review",
    ],
  },
  {
    phase: "Middle",
    title: "Prototyping & Production",
    desc: "Review an available stock sample or request a custom sample before production. Sample and shipping costs depend on the option you choose.",
    image: "/about-factory.webp",
    points: [
      "Physical sample production",
      "Sample approval & refinement",
      "Mass production setup",
      "Production specification review",
    ],
  },
  {
    phase: "Late",
    title: "Quality Testing & Delivery",
    desc: "Confirm the approved sample, order specification, inspection points and shipping terms before dispatch.",
    image: "/about-craft.webp",
    points: [
      "Agreed inspection points",
      "Packaging & logistics management",
      "Order-specific lead-time review",
      "Worldwide delivery",
    ],
  },
];

const deliveryFeatures = [
  {
    title: "Order-Specific Delivery Planning",
    desc: "Confirm the production schedule and shipping terms for your packaging specification and destination before placing an order.",
  },
  {
    title: "Packaging Production Coordination",
    desc: "Discuss the box, pouch and packaging-set requirements for your order, including materials, approved samples and production checks.",
  },
  {
    title: "Export Quote Details",
    desc: "Share your delivery destination and preferred trade terms so we can quote the appropriate shipping arrangement.",
  },
];

const faqs = [
  {
    q: "What types of products do you offer?",
    a: "We offer premium gift boxes, luxury shopping bags, custom ribbons, textile packaging, and complete brand packaging collections — all fully customizable to your specifications.",
  },
  {
    q: "Can I customize packaging according to my specific needs?",
    a: "Absolutely. Every product we make is custom — from dimensions, materials, and structural design to finishes, colors, and branding. Share your vision and we'll bring it to life.",
  },
  {
    q: "Do you provide eco-friendly packaging options?",
    a: "Ask us about material options for your project. The applicable material specification and supporting documents should be confirmed for the selected product before ordering.",
  },
  {
    q: "What is the process for getting started with a custom project?",
    a: "Share your product and packaging brief. We review the structure and artwork, discuss the appropriate sample, and confirm the production specification before an order proceeds.",
  },
  {
    q: "How long does it take to complete a custom order?",
    a: "Typical production lead time is 15–20 days, counted from sample approval and payment receipt, depending on complexity and quantity. We'll provide a precise timeline during consultation.",
  },
  {
    q: "What is the minimum order quantity (MOQ) for custom packaging?",
    a: "Our starting MOQ is 200 pieces for individual packaging products. For multi-component packaging sets, tell us the quantity of each component so we can confirm how the order is counted and quoted.",
  },
  {
    q: "Where is ELAPACK based?",
    a: "ELAPACK is operated by Wuxi Magic Packaging Co., Ltd., based in Wuxi, Jiangsu, China. Ask us to confirm the production arrangement for your specific order.",
  },
  {
    q: "Can I see samples before placing a full order?",
    a: "Yes. Available stock samples are free, with USD 25 sample shipping. A custom sample is USD 25 plus USD 20 shipping; the usual custom-sample preparation time is 3–5 days. Confirm the sample type and destination in your quote.",
  },
];

export default function Video() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="page-header custom-solution-header">
        <div className="container">
          <p className="eyebrow reveal">Custom Solutions</p>
          <h1 className="page-title reveal reveal-delay-1">
            Custom Packaging
            <br />
            Process & Video
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            Review the available packaging footage and the steps from your
            brief through sampling, production and delivery. Send us your
            product details to discuss an order-specific plan.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Packaging Video</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Packaging Process Footage
            </h2>
            <p className="section-subtitle">
              See the available packaging footage, then confirm the materials,
              sample and production arrangements for your project.
            </p>
          </div>
          <div className="about-video-wrapper reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <video
              className="about-video-poster"
              poster="/factory-video-poster.webp"
              preload="none"
              controls
              playsInline
            >
              <source src="/videos/factory-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="section custom-solution-intro-section">
        <div className="container">
          <div className="custom-solution-intro-grid">
            <div className="reveal">
              <h2 className="section-title" style={{ marginTop: 0 }}>
                Our Custom Services
              </h2>
              <p className="custom-solution-text">
                ELAPACK offers comprehensive custom packaging services
                tailored to your brand's needs. From exquisite jewelry boxes
                that showcase diamonds with museum-worthy presentations, to
                elegant gift boxes designed for luxury brand gifting, and
                sophisticated paper cosmetics packaging that balances
                sustainability with premium feel — we cover it all.
              </p>
              <p className="custom-solution-text">
                We review structure, materials, artwork and sample needs against
                your product brief before confirming the production specification.
                Whether you need custom jewelry packaging boxes or unique
                personalized packaging, we have the expertise to bring your
                vision to life.
              </p>
              <div className="custom-solution-intro-actions">
                <Link to="/products/" className="btn-primary">
                  Explore Products
                </Link>
                <Link to="/contact/" className="btn-outline">
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="custom-solution-intro-images reveal reveal-delay-2">
              <img
                src="/product-giftbox.webp"
                alt="Custom luxury gift box"
                loading="lazy"
              width={1408}
              height={768}
              />
              <img
                src="/product-collection.webp"
                alt="Custom packaging collection"
                loading="lazy"
              width={1408}
              height={768}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section custom-solution-process-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">How We Work</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Customization Process
            </h2>
            <p className="section-subtitle">
              Our custom packaging process is seamless and collaborative. From
              initial concept to prototype creation, we work closely with you
              to ensure every detail enhances your brand's value.
            </p>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className={`process-step-card reveal reveal-delay-${i + 1}`}
              >
                <div className="process-step-image">
                  <img src={step.image} alt={step.title} loading="lazy" width={1408} height={768} />
                  <span className="process-step-phase">{step.phase}</span>
                </div>
                <div className="process-step-body">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                  <ul className="process-step-points">
                    {step.points.map((p) => (
                      <li key={p} className="process-step-point">
                        <span className="case-point-dot" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section custom-solution-delivery-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Global Reach</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Global Production & Delivery
            </h2>
          </div>

          <div className="delivery-features-grid">
            {deliveryFeatures.map((feat, i) => (
              <div
                key={feat.title}
                className={`delivery-feature-card reveal reveal-delay-${i + 1}`}
              >
                <h3 className="delivery-feature-title">{feat.title}</h3>
                <p className="delivery-feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section custom-solution-faq-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Questions & Answers</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="faq-list reveal reveal-delay-1">
            {faqs.map((faq, i) => (
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

          <div className="faq-cta reveal">
            <p>Still have questions? We're here to help.</p>
            <Link to="/contact/" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
