import { useState } from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    phase: "Early",
    title: "Requirements & Design",
    desc: "Detailed communication and free design — we listen to your brand, product, and goals, then translate them into structural and visual concepts.",
  image: "/about-materials.webp",
  points: [
      "Brand & product consultation",
      "Structural design concepts",
      "Material & finish recommendations",
      "Free design drafts",
    ],
  },
  {
    phase: "Middle",
    title: "Prototyping & Production",
    desc: "Free samples and fast production — we create physical prototypes for your approval, then move to manufacturing with precision at every stage.",
    image: "/about-factory.webp",
    points: [
      "Physical sample production",
      "Sample approval & refinement",
      "Mass production setup",
      "Rigorous QC protocols",
    ],
  },
  {
    phase: "Late",
    title: "Quality Testing & Delivery",
    desc: "High-standard quality inspection and reliable global delivery — every piece is checked before shipping to Europe and North America.",
    image: "/about-craft.webp",
    points: [
      "Multi-stage quality inspection",
      "Packaging & logistics management",
      "Reliable lead times",
      "Worldwide delivery",
    ],
  },
];

const successStories = [
  {
    client: "Marks & Spencer",
    category: "Retail Packaging",
    solution: "Cost-Effective Luxury Packaging",
    image: "/case-marks.webp",
    desc: "We designed a series of custom packaging for Marks & Spencer. By employing eco-friendly materials, they lowered packaging costs and enhanced appeal while ensuring sustainability.",
  },
  {
    client: "EFFY",
    category: "Jewelry Packaging",
    solution: "Luxury Jewelry Box Design",
    image: "/case-effy.webp",
    desc: "We designed bespoke custom packaging boxes for EFFY, enhancing their brand's luxury appeal while ensuring sustainability through eco-friendly materials.",
  },
  {
    client: "Majorica",
    category: "Heritage Packaging",
    solution: "Timeless Jewelry Boxes",
    image: "/case-majorica.webp",
    desc: "Custom packaging for Majorica reflects the brand's marine protection spirit and elegant temperament, combining timeless elegance with contemporary flair.",
  },
  {
    client: "ZARA",
    category: "Sustainable Packaging",
    solution: "100% Recyclable Packaging",
    image: "/case-zara.webp",
    desc: "We developed tailor-made sustainable packaging solutions for ZARA, enhancing their commitment to sustainability through innovative, environmentally friendly designs.",
  },
];

const deliveryFeatures = [
  {
    title: "Reliable On-Time Delivery",
    desc: "Our global production capabilities and efficient logistics network ensure your custom packaging is delivered on time, every time.",
  },
  {
    title: "Strategic Global Facilities",
    desc: "With production facilities and warehousing across Asia, we provide local support to streamline your supply chain.",
  },
  {
    title: "Competitive Global Reach",
    desc: "Our global reach enables us to offer competitive pricing and fast delivery, no matter where you are located.",
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
    a: "Yes. We offer FSC-certified papers, recycled textiles, plant-based inks, and fully recyclable structures designed for circularity without compromising on premium presentation.",
  },
  {
    q: "What is the process for getting started with a custom project?",
    a: "It starts with a consultation to understand your brand and product. We then create design concepts, produce physical samples for approval, and move to production with QC at every stage.",
  },
  {
    q: "How long does it take to complete a custom order?",
    a: "Typical lead times range from 15–30 days for production after sample approval, depending on complexity and quantity. We'll provide a precise timeline during consultation.",
  },
  {
    q: "What is the minimum order quantity (MOQ) for custom packaging?",
    a: "MOQs vary by product — we support low-MOQ options for independent brands and scale up to high-volume production for global retail. Contact us for specifics on your project.",
  },
  {
    q: "Where are your production facilities located?",
    a: "Our production facilities are based in Asia with global logistics support, ensuring reliable delivery to Europe, North America, and worldwide.",
  },
  {
    q: "Can I see samples before placing a full order?",
    a: "Yes. We produce physical samples for your approval before mass production. Sample costs may apply and are often credited toward your final order.",
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
            Packaging Tailored
            <br />
            to Your Brand
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            From exquisite jewelry boxes to elegant gift packaging and
            sustainable paper cosmetics solutions — we offer comprehensive
            custom packaging services that bring your brand vision to life.
          </p>
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
                Our design team leverages creativity, cutting-edge design
                tools, and industry-leading technology to craft custom
                packaging solutions that resonate with your brand's vision.
                Whether you need custom jewelry packaging boxes or unique
                personalized packaging, we have the expertise to bring your
                vision to life.
              </p>
              <div className="custom-solution-intro-actions">
                <Link to="/products" className="btn-primary">
                  Explore Products
                </Link>
                <Link to="/contact" className="btn-outline">
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="custom-solution-intro-images reveal reveal-delay-2">
              <img
                src="/product-giftbox.webp"
                alt="Custom luxury gift box"
                loading="lazy"
              />
              <img
                src="/product-collection.webp"
                alt="Custom packaging collection"
                loading="lazy"
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
                  <img src={step.image} alt={step.title} loading="lazy" />
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

      <section className="section custom-solution-stories-section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">Our Success Stories</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Brands We've Transformed
            </h2>
            <p className="section-subtitle">
              Explore the success stories of brands we've helped transform
              through our custom packaging solutions. From high-end luxury
              packaging to innovative eco-friendly designs, see how we've
              partnered with leading brands to create packaging that truly
              stands out.
            </p>
          </div>

          <div className="success-stories-grid">
            {successStories.map((story, i) => (
              <div
                key={story.client}
                className={`success-story-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="success-story-image">
                  <img src={story.image} alt={story.client} loading="lazy" />
                  <span className="success-story-category">
                    {story.category}
                  </span>
                </div>
                <div className="success-story-body">
                  <span className="success-story-client">
                    {story.client}
                  </span>
                  <h3 className="success-story-title">{story.solution}</h3>
                  <p className="success-story-desc">{story.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="success-stories-cta reveal">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
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
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
