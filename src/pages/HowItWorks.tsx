import { useState } from "react";
import { Link } from "react-router-dom";

const keyFacts: [string, string][] = [
  ["Minimum order", "200 pieces (complete sets: 200 per component)"],
  ["Written quotation", "Within 1 business day of your enquiry"],
  ["Custom sample", "USD 30 plus USD 25 shipping, made in 3–5 days"],
  [
    "Production",
    "15–20 days for 200–20,000 pieces; 30–35 days for 20,000–50,000 pieces, counted from sample approval and payment",
  ],
  ["Artwork files", "AI, PDF or PNG"],
  [
    "Colour acceptance",
    "ΔE ≤ 2.0 against the approved sample, grey scale grade 4",
  ],
  [
    "Shipping",
    "From Shanghai or Shenzhen, by sea or air; DDP quoted on request",
  ],
  ["Payment", "T/T or PayPal"],
];

const steps: {
  title: string;
  body: string;
  reading?: { label: string; href: string }[];
}[] = [
  {
    title: "Enquiry and specification",
    body: "Tell us what the packaging has to hold and how it will be used. The details that let us quote accurately are: the product's dimensions and weight, the quantity, the structure or style you have in mind, and your logo file. If you are still deciding between structures, send photos of the product — we will propose constructions that fit it. You receive a written quotation within one business day. We do not publish price ranges, because every project is specified individually; the written quotation is the price, itemised by component for complete sets.",
    reading: [
      {
        label: "How to Write an RFQ for Custom Packaging",
        href: "/news/how-to-write-an-rfq-for-custom-packaging/",
      },
      {
        label: "Comparing Multi-Component Gift Set Quotes",
        href: "/news/compare-multi-component-gift-set-packaging-quotes/",
      },
    ],
  },
  {
    title: "Artwork and dieline",
    body: "Send artwork in AI, PDF or PNG. We prepare the dieline for your chosen structure and return it for your designer to place the artwork on, or place it for you and return a proof for approval. Print files are checked against the dieline before sampling — bleed, safe areas and fold lines — so the sample is made from the file that will actually print.",
    reading: [
      {
        label: "Print-Ready Artwork for Custom Packaging",
        href: "/news/print-ready-artwork-for-custom-packaging/",
      },
      {
        label: "Die-Cutting and Dielines Guide",
        href: "/news/die-cutting-and-dielines-guide/",
      },
    ],
  },
  {
    title: "Sampling",
    body: "A custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days; the sample fee is deductible against the confirmed first order. If you only need to judge materials and workmanship first, stock samples are free — you pay USD 25 shipping only, and they arrive in 4–7 days. The sample is made with your structure, materials and finish, so what you approve is what production follows.",
    reading: [
      {
        label: "Custom Packaging Samples Guide",
        href: "/news/custom-packaging-samples-guide/",
      },
      {
        label: "Approving a Custom Packaging Sample",
        href: "/news/approving-a-custom-packaging-sample/",
      },
    ],
  },
  {
    title: "Sample approval",
    body: "Production starts only after you have approved the sample and payment is arranged. Approval covers structure, materials, colour and finish in one pass — anything you want changed is changed at sample stage, where changes are cheap, not after production begins.",
    reading: [
      {
        label: "Packaging Colour Tolerance, Explained",
        href: "/news/packaging-colour-tolerance-explained/",
      },
      {
        label: "PMS Colours for Custom Packaging",
        href: "/news/pms-colors-for-custom-packaging/",
      },
    ],
  },
  {
    title: "Production in our own factory",
    body: "Your order is produced in our own factory in Wuxi — the same team that made your sample. Production takes 15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, counted from sample approval and payment. Complete sets are produced component by component — boxes, bags, ribbons, cards — and assembled as one set before packing.",
  },
  {
    title: "Quality check against the approved sample",
    body: "Every order is checked against the approved sample before it leaves. Artwork files are accepted in AI, PDF or PNG. Colour is accepted at ΔE ≤ 2.0 against the approved sample, grey scale grade 4. Structure, fit and finish are compared with the sample piece by piece; a set is checked assembled, the way your customer will open it.",
    reading: [
      {
        label: "Inspecting a Custom Packaging Delivery",
        href: "/news/inspect-custom-packaging-delivery/",
      },
    ],
  },
  {
    title: "Packing, shipping and reordering",
    body: "Orders ship from Shanghai or Shenzhen, by sea or air; DDP can be quoted on request if you prefer a single delivered price. Split shipments — part by air for a launch date, the balance by sea — can be planned at quotation stage. When you reorder, we work from your confirmed specification and version record, so repeat orders match the first run.",
    reading: [
      { label: "DDP vs FOB vs EXW", href: "/news/ddp-vs-fob-vs-exw/" },
      {
        label: "Plan Split Packaging Shipments",
        href: "/news/plan-split-packaging-shipments/",
      },
      {
        label: "Reorder Version Checklist",
        href: "/news/reorder-custom-packaging-version-checklist/",
      },
    ],
  },
];

const faqs = [
  {
    q: "How much does a custom sample cost, and how long does it take?",
    a: "A custom sample costs USD 30 plus USD 25 shipping and is made in 3–5 days; the sample fee is deductible against the confirmed first order.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "200 pieces. For complete packaging sets, the minimum applies per component — 200 boxes, 200 bags and so on.",
  },
  {
    q: "How long does production take?",
    a: "15–20 days for 200–20,000 pieces and 30–35 days for 20,000–50,000 pieces, counted from sample approval and payment. Sampling (3–5 days) and shipping time are additional.",
  },
  {
    q: "Can you match our brand colour exactly?",
    a: "Colour is accepted at ΔE ≤ 2.0 against the approved sample, grey scale grade 4. You approve the physical sample before production, so the standard is checked against a piece you have held, not a screen value.",
  },
];

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Solutions — How It Works</p>
          <h1 className="page-title reveal reveal-delay-1">
            How Your Custom
            <br />
            Packaging Is Made
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            ELAPACK is the own-factory brand of Wuxi Magic Packaging Co., Ltd.
            Since 2018 we have produced custom rigid boxes, pouches, bags and
            complete packaging sets in our own factory in Wuxi for jewellery,
            eyewear, beauty, fragrance and fashion brands in Europe and North
            America. This page walks through exactly how an order moves — what
            we need from you at each step, what we check, and how long each
            stage takes.
          </p>
          <div className="hiw-hero-actions reveal reveal-delay-2">
            <Link to="/contact/" className="pd-btn pd-btn-glass">
              Request a Quote
            </Link>
            <a href="https://wa.me/8618626352096" className="pd-btn pd-btn-sage">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="hiw-facts reveal">
            <h2 className="hiw-facts-title">Key Facts</h2>
            <dl className="hiw-facts-grid">
              {keyFacts.map(([term, def]) => (
                <div key={term} className="hiw-fact">
                  <dt>{term}</dt>
                  <dd>{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {steps.map((step, i) => (
            <div key={step.title} className="hiw-step reveal">
              <div className="hiw-step-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="hiw-step-body">
                <h2 className="hiw-step-title">{step.title}</h2>
                <p className="hiw-step-text">{step.body}</p>
                {i === 4 && (
                  <Link to="/video/" className="hiw-video-card">
                    <img
                      src="/about-factory.webp"
                      alt="ELAPACK factory floor in Wuxi"
                      loading="lazy"
                      width={1408}
                      height={768}
                    />
                    <span className="hiw-video-label">
                      <strong>See the factory floor</strong>
                      <small>Watch how rigid boxes are made in Wuxi →</small>
                    </span>
                  </Link>
                )}
                {step.reading && (
                  <p className="hiw-read">
                    Further reading:{" "}
                    {step.reading.map((r, j) => (
                      <span key={r.href}>
                        {j > 0 && " · "}
                        <Link to={r.href}>{r.label}</Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow reveal">Start Here</p>
          <h2 className="section-title reveal reveal-delay-1" style={{ marginTop: "0.75rem" }}>
            Start with what you need made
          </h2>
          <p className="reveal reveal-delay-1">
            The process is the same across the range — begin from the product
            line.
          </p>
          <div className="solution-points-grid">
            <div className="solution-point-card reveal">
              <h3 className="solution-point-title">Rigid Boxes</h3>
              <p className="solution-point-desc">
                Magnetic, drawer, two-piece and book-style boxes.
              </p>
              <Link to="/boxes/" className="solution-link">
                Boxes
                <span className="product-link-arrow">→</span>
              </Link>
            </div>
            <div className="solution-point-card reveal reveal-delay-1">
              <h3 className="solution-point-title">Pouches & Bags</h3>
              <p className="solution-point-desc">
                Drawstring pouches, cosmetic bags and shoppers.
              </p>
              <Link to="/pouches-bags/" className="solution-link">
                Pouches & Bags
                <span className="product-link-arrow">→</span>
              </Link>
            </div>
            <div className="solution-point-card reveal reveal-delay-2">
              <h3 className="solution-point-title">Complete Sets</h3>
              <p className="solution-point-desc">
                Box, bag, ribbon and cards produced as one set.
              </p>
              <Link to="/sets/" className="solution-link">
                Complete Packaging Sets
                <span className="product-link-arrow">→</span>
              </Link>
            </div>
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
        </div>
      </section>

      <section className="product-contact-bar">
        <div className="container">
          <div className="product-contact-actions reveal">
            <Link to="/contact/" className="pd-btn pd-btn-glass">
              Request a Quote
            </Link>
            <a href="https://wa.me/8618626352096" className="pd-btn pd-btn-sage">
              WhatsApp
            </a>
            <a href="mailto:tina@elapack.com" className="product-contact-email">
              tina@elapack.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
