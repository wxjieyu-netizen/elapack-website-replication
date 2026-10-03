import { useState } from "react";
import { track } from "../lib/track";

/**
 * Web3Forms access key. Public by design (static site, no backend): it can
 * only deliver mail to our own inbox, is domain-restricted in the Web3Forms
 * dashboard and can be rotated/revoked there at any time.
 */
const WEB3FORMS_KEY = "7532f731-6678-43dd-9553-7c18090e71d5";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const contactInfo = [
  {
    label: "Phone",
    value: "+86 186 2635 2096",
    href: "tel:+8618626352096",
    icon: "☎",
  },
  {
    label: "Email",
    value: "tina@elapack.com",
    href: "mailto:tina@elapack.com",
    icon: "✉",
  },
  {
    label: "WhatsApp",
    value: "+86 186 2635 2096",
    href: "https://wa.me/8618626352096",
    icon: "💬",
  },
  {
    label: "Payment",
    value: "T/T · PayPal",
    href: null,
    icon: "◠",
  },
  {
    label: "Factory",
    value: "Wuxi, Jiangsu, China",
    href: null,
    icon: "◈",
  },
];

const projectTypes = [
  "Luxury Gift Boxes",
  "Shopping Bags",
  "Custom Ribbons",
  "Textile Packaging",
  "Full Brand Collection",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setFailed(false);
    try {
      const data = new FormData(e.currentTarget);
      data.append("access_key", WEB3FORMS_KEY);
      data.append("subject", "New inquiry from elapack.com");
      data.append("from_name", "ELAPACK Website");
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: data });
      const json = await res.json().catch(() => ({ success: false }));
      if (!res.ok || !json.success) throw new Error(json.message || "send failed");
      track("generate_lead", { form: "contact" });
      setSubmitted(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Contact Us</p>
          <h1 className="page-title reveal reveal-delay-1">
            Let's Begin a
            <br />
            Conversation
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            Tell us about your brand and your packaging vision. We'll respond
            within one business day with next steps.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info reveal">
              <h2 className="contact-heading">Get in Touch</h2>
              <p className="contact-intro">
                Whether you're an established luxury house or a growing brand,
                we'd love to hear from you. Reach us through any of the
                channels below.
              </p>
              <div className="contact-list">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-item-body">
                      <span className="contact-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value contact-value-text">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-market">
                <h3 className="contact-market-title">Target Markets</h3>
                <div className="market-tags-small">
                  <span>Europe</span>
                  <span>North America</span>
                  <span>United Kingdom</span>
                  <span>Scandinavia</span>
                </div>
                <p className="contact-market-note">
                  Primary language: English. We serve mid-to-high-end brands
                  and enterprise clients who value brand image, packaging
                  quality, and supply chain stability.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap reveal reveal-delay-2">
              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon">✓</div>
                  <h3 className="success-title">Thank you.</h3>
                  <p className="success-text">
                    Your message has been received. A member of our team will
                    reach out within one business day.
                  </p>
                  <button
                    className="btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2 className="contact-heading">Request a Quote</h2>
                  <p className="contact-form-intro">
                    Share your project details and we'll prepare a tailored
                    proposal for you.
                  </p>

                  {/* Honeypot: humans never see it, bots fill it and get dropped. */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: "none" }}
                  />
                  <input
                    type="hidden"
                    name="project_type"
                    value={selectedType || "Not specified"}
                  />

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company / Brand</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your brand name"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@brand.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 555 000 0000"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Project Type</label>
                    <div className="chip-group">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`chip ${selectedType === type ? "is-selected" : ""}`}
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">Estimated Quantity</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      placeholder="e.g. 5,000 pcs"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your brand, your packaging needs, timelines, and any specific materials or finishes you're considering."
                    />
                  </div>

                  {failed && (
                    <p
                      className="contact-form-error"
                      style={{ color: "#b3261e", margin: "0 0 1rem" }}
                    >
                      Something went wrong sending your message. Please email
                      us directly at{" "}
                      <a href="mailto:tina@elapack.com">tina@elapack.com</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary btn-full"
                    disabled={sending}
                  >
                    {sending ? "Sending…" : "Submit Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
