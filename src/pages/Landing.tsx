import { useEffect } from "react";
import { getLandingBySlug } from "../data/landings";

/**
 * Product-line landing page (pouches-bags / boxes / sets), rendered from the
 * finalized copy in src/data/landings.ts. Reuses the shared page/section CSS
 * so it stays visually consistent with the rest of the site.
 */
export default function Landing({ slug }: { slug: string }) {
  const landing = getLandingBySlug(slug);

  useEffect(() => {
    if (landing) document.title = `${landing.eyebrow} | ELAPACK`;
  }, [landing]);

  if (!landing) return null;

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">{landing.eyebrow}</p>
          <h1 className="page-title reveal reveal-delay-1">{landing.h1}</h1>
          <p className="page-subtitle reveal reveal-delay-2">{landing.subhead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="about-text" style={{ maxWidth: "820px", margin: "0 auto" }}>
              {landing.intro}
            </p>
          </div>
          {landing.hero && (
            <figure className="landing-hero reveal" style={{ marginTop: "2.5rem" }}>
              <img src={landing.hero.src} alt={landing.hero.alt} loading="lazy" width={1600} height={1000} />
            </figure>
          )}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header-center reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              {landing.why.heading}
            </h2>
          </div>
          <div className="values-grid">
            {landing.why.items.map((item, i) => (
              <div key={item.title} className={`value-card reveal reveal-delay-${(i % 4) + 1}`}>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {landing.tables.map((table) => (
        <section key={table.heading} className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="markets-box reveal">
              <h2 className="section-title" style={{ marginTop: "0.75rem", fontSize: "1.75rem" }}>
                {table.heading}
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table className="spec-table">
                  <thead>
                    <tr>
                      {table.columns.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, ci) => (
                          <td key={ci}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {table.note && (
                <p className="markets-note" style={{ marginTop: "1rem" }}>{table.note}</p>
              )}
            </div>
          </div>
        </section>
      ))}

      {landing.lists.map((list) => (
        <section key={list.heading} className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="markets-box reveal">
              <h2 className="section-title" style={{ marginTop: "0.75rem", fontSize: "1.75rem" }}>
                {list.heading}
              </h2>
              <ul className="spec-list">
                {list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {landing.gallery && landing.gallery.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="landing-gallery">
              {landing.gallery.map((img) => (
                <figure key={img.src} className="landing-gallery-item reveal">
                  <img src={img.src} alt={img.alt} loading="lazy" width={1600} height={1000} />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header-center reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              How it works
            </h2>
          </div>
          <div className="values-grid">
            {landing.howItWorks.map((step, i) => (
              <div key={step.title} className={`value-card reveal reveal-delay-${(i % 4) + 1}`}>
                <h3 className="value-title">{`${String(i + 1).padStart(2, "0")} · ${step.title}`}</h3>
                <p className="value-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="markets-box reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              MOQ & lead time
            </h2>
            <div className="spec-list">
              {landing.moq.map((row) => (
                <p key={row.label} className="markets-note" style={{ marginBottom: "0.5rem" }}>
                  <strong>{row.label}:</strong> {row.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header-center reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Who it's for
            </h2>
          </div>
          <div className="values-grid">
            {landing.audience.map((a, i) => (
              <div key={a.title} className={`value-card reveal reveal-delay-${(i % 4) + 1}`}>
                <h3 className="value-title">{a.title}</h3>
                <p className="value-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="markets-box reveal" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              {landing.ctaTitle}
            </h2>
            <p className="markets-note">
              Message Tina on WhatsApp or phone:{" "}
              <a href="https://wa.me/8618626352096">+86 186 2635 2096</a>
              {" "}· Email: <a href="mailto:tina@elapack.com">tina@elapack.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
