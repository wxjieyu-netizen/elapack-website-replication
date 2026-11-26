import { Link } from "react-router-dom";

type CaseImage = { src: string; alt: string; w: number; h: number };

type CaseData = {
  slug: string;
  cardMeta: string;
  cardLine: string;
  h1: string;
  subtitle: string;
  hero: CaseImage;
  glance: [string, string][];
  brief: string;
  spec: [string, string][];
  specImage?: CaseImage;
  steps: { label: string; text: string }[];
  midImage?: CaseImage;
  result: string;
  why: string;
  endImage?: CaseImage;
  ctaText: string;
  ctaLinks: { label: string; href: string }[];
};

const IMG = "/images/case-studies/";

export const CASES: CaseData[] = [
  {
    slug: "velvet-gwp-pouches-beauty-brand",
    cardMeta: "Velvet pouches · Beauty · UK/Europe",
    cardLine:
      "First order led to reorders of 5,000 pieces, and reorders are still growing.",
    h1: "Velvet Gift-with-Purchase Pouches for a UK Beauty Brand",
    subtitle:
      "How we made 18 × 26 cm velvet gift-with-purchase pouches with a silver foil logo for a UK beauty and personal care brand: the brief, the spec, and a first order that led to growing reorders.",
    hero: {
      src: `${IMG}velvet-gwp-pouches-hero.webp`,
      alt: "Navy and burgundy velvet drawstring pouches with silver foil logos, one holding an A5 product",
      w: 1536,
      h: 1024,
    },
    glance: [
      ["Client", "Beauty and personal care brand, UK/Europe, selling direct-to-consumer online"],
      ["Product", "18 × 26 cm drawstring pouch with logo, for gift-with-purchase promotions"],
      ["Sample", "3 days"],
      ["Production", "15 days"],
      ["Orders", "First order 1,400 pieces; reorder 5,000; reorders still growing"],
      ["Delivered on time", "Yes"],
    ],
    brief:
      "The brand runs seasonal gift-with-purchase (GWP) promotions online and asked for cotton or velvet drawstring bags for GWP. The pouch had to hold A5-sized products and feel premium, while staying within a strict unit-cost target.",
    spec: [
      ["Size", "18 × 26 cm, sized for A5 products"],
      ["Fabric", "250 gsm polyester velvet"],
      ["Logo", "Silver foil hot stamp"],
      ["Finishing", "Brand label sewn into the side seam"],
      ["Insert", "None"],
    ],
    specImage: {
      src: `${IMG}velvet-gwp-pouches-logo-detail.webp`,
      alt: "Silver foil logo, drawstring channel and sewn side label on a navy velvet pouch",
      w: 1672,
      h: 941,
    },
    steps: [
      { label: "Quote", text: "sent within one business day of the brief." },
      { label: "Sample", text: "made in 3 days; one round of changes to fine-tune the foil logo." },
      { label: "Production", text: "15 days after sample approval." },
      { label: "Delivery", text: "samples by express courier, bulk orders by air to the UK/Europe." },
    ],
    midImage: {
      src: `${IMG}velvet-gwp-pouches-sewing.webp`,
      alt: "Sewing the drawstring channel on navy velvet pouches at the factory",
      w: 1672,
      h: 941,
    },
    result:
      "The first order of 1,400 pieces shipped on time. The brand came back with a reorder of 5,000, and its reorders have kept growing since. In the client's words: \u201CThe silver foil is very crisp.\u201D",
    why: "Polyester velvet gives a premium look at a GWP price point, and its short pile takes a silver foil logo cleanly. Sizing the pouch to the products (A5) avoided paying for unused fabric, and a sewn side label added branding without another print step.",
    ctaText: "Planning a GWP pouch? Send your product size, quantity and target unit cost, and we will quote within one business day.",
    ctaLinks: [
      { label: "Custom drawstring bags", href: "/custom-drawstring-bags/" },
      { label: "Custom velvet pouches", href: "/products/custom-velvet-pouches/" },
    ],
  },
  {
    slug: "jewelry-drawer-box-pouch-set",
    cardMeta: "Box and pouch set · Fine jewelry · United States",
    cardLine:
      "Box and pouch colour-matched to ΔE ≤ 2.0; repeat reorders since delivery.",
    h1: "A Matched Box-and-Pouch Set for a US Fine Jewelry Brand",
    subtitle:
      "A matched drawer box, velvet envelope pouch and ribbon set for a US fine jewelry brand, with box and pouch colour-matched to ΔE ≤ 2.0 and an embossed foil logo.",
    hero: {
      src: `${IMG}drawer-box-pouch-set-hero.webp`,
      alt: "Drawer box, velvet envelope pouch, ribbon and card in a matched taupe packaging set",
      w: 1536,
      h: 1024,
    },
    glance: [
      ["Client", "Fine jewelry brand, United States"],
      ["Product", "Drawer box + velvet envelope pouch + ribbon, with thank-you card"],
      ["Sample", "5 days"],
      ["Production", "18 days"],
      ["Delivered on time", "Yes"],
    ],
    brief:
      "The brand wanted bespoke custom packaging that would lift the perceived luxury of the range: a full unboxing set rather than a single box. The hardest requirement was colour: the box and the pouch had to match to within ΔE ≤ 2.0.",
    spec: [
      ["Structure", "Drawer box with a velvet envelope pouch and ribbon; outside size set by the product"],
      ["Box board", "1500 g greyboard wrapped in specialty paper"],
      ["Insert", "High-density EVA, flocked, with a hook to hold a necklace"],
      ["Logo", "Embossed and foil-stamped"],
      ["Extras", "Ribbon in a custom colour, and a thank-you card"],
    ],
    specImage: {
      src: `${IMG}drawer-box-pouch-set-insert.webp`,
      alt: "Flocked insert with a hook holding a plain gold chain inside the drawer box",
      w: 1672,
      h: 941,
    },
    steps: [
      { label: "Quote", text: "within one business day." },
      { label: "Sample", text: "made in 5 days, with two rounds of changes to fine-tune the fit of the insert slots." },
      { label: "Production", text: "18 days after sample approval." },
      { label: "Delivery", text: "to the US by air." },
    ],
    midImage: {
      src: `${IMG}drawer-box-pouch-set-colour-check.webp`,
      alt: "Drawer box and velvet pouch checked against a colour swatch inside a standard light booth",
      w: 1536,
      h: 1024,
    },
    result:
      "The set was delivered on time, and the brand has kept reordering since. In the client's words: \u201CColor consistency is perfect.\u201D",
    why: "Box wraps and velvet come from different materials and dye lots, so matching them is the main risk in a box-and-pouch set. We checked both against the same colour target on the sample before production, and fixed the insert fit across two sample rounds so the necklace sits exactly where the lid opens.",
    endImage: {
      src: `${IMG}drawer-box-pouch-set-colour-match.webp`,
      alt: "Drawer box and velvet pouch checked against colour swatches for a cross-material colour match",
      w: 1227,
      h: 690,
    },
    ctaText: "Planning a matched box and pouch set? Send us the products the set has to hold, and we will quote within one business day.",
    ctaLinks: [
      { label: "Custom jewelry boxes", href: "/custom-jewelry-boxes/" },
      { label: "Custom jewelry pouches", href: "/custom-jewelry-pouches/" },
    ],
  },
  {
    slug: "sustainable-magnetic-jewelry-gift-box",
    cardMeta: "Magnetic gift box · Pearl jewelry · Europe",
    cardLine: "A plastic-free brief met with paper and molded pulp only.",
    h1: "A Plastic-Free Magnetic Gift Box for a European Pearl Jewelry Brand",
    subtitle:
      "A book-style magnetic gift box built to a European pearl jewelry brand's plastic-free brief: paper and a molded pulp insert only, with soy-ink print and a debossed logo.",
    hero: {
      src: `${IMG}magnetic-gift-box-pulp-hero.webp`,
      alt: "Book-style magnetic gift box open, showing a molded pulp tray holding a pearl pendant",
      w: 1536,
      h: 1024,
    },
    glance: [
      ["Client", "Pearl jewelry brand, Europe"],
      ["Product", "Book-style magnetic flip-top gift box with molded pulp insert"],
      ["Sample", "7 days, including tooling for the pulp insert"],
      ["Production", "20 days"],
      ["Delivered on time", "Yes"],
    ],
    brief:
      "The brand makes pearl jewelry and asked us for timeless packaging that reflected its sustainability values, with one firm rule: 100% sustainable materials and no plastic. That ruled out the usual EVA or sponge insert and plastic lamination, so the pearl jewelry packaging had to hold and present each piece using paper and pulp alone.",
    spec: [
      ["Structure", "Book-style magnetic flip-top box"],
      ["Materials", "Art paper specified to the brand's FSC-certified requirement, over 2.0 mm recycled greyboard"],
      ["Insert", "Molded pulp tray"],
      ["Print and logo", "Soy-based ink, debossed logo"],
      ["Extras", "Product booklet page"],
    ],
    specImage: {
      src: `${IMG}magnetic-gift-box-debossed-lid.webp`,
      alt: "Debossed logo on the paper lid of the magnetic gift box",
      w: 1672,
      h: 941,
    },
    steps: [
      { label: "Quote", text: "within one business day." },
      { label: "Sample", text: "7 days including the pulp tooling; three sample rounds to make the pulp tray hold the piece firmly." },
      { label: "Production", text: "20 days after sample approval." },
      { label: "Shipping", text: "by sea, FOB Shenzhen or Shanghai." },
    ],
    midImage: {
      src: `${IMG}magnetic-gift-box-pulp-line.webp`,
      alt: "Fitting a molded pulp tray into the magnetic gift box on the packing line",
      w: 1536,
      h: 1024,
    },
    result:
      "The box was delivered on schedule, and the brand now buys under an annual supply agreement. In the client's words: \u201CSustainable yet high-end feel.\u201D",
    why: "Molded pulp replaces plastic foam, but it is less precise, so it took three sample rounds to make the tray hold the piece firmly. Doing that work on the sample, not in production, is what kept the plastic-free spec without losing the premium feel.",
    endImage: {
      src: `${IMG}magnetic-gift-box-pulp-tray.webp`,
      alt: "Molded pulp tray texture and hinge detail inside the magnetic gift box",
      w: 1672,
      h: 941,
    },
    ctaText: "Need plastic-free jewelry packaging? Send us your brief, and we will quote within one business day.",
    ctaLinks: [
      { label: "Magnetic closure gift boxes", href: "/products/magnetic-closure-gift-box/" },
      { label: "Custom jewelry boxes", href: "/custom-jewelry-boxes/" },
    ],
  },
];

function CaseFigure({ image }: { image: CaseImage }) {
  return (
    <div className="reveal" style={{ margin: "2rem 0" }}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        width={image.w}
        height={image.h}
        style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }}
      />
    </div>
  );
}

function FactGrid({ rows, title }: { rows: [string, string][]; title: string }) {
  return (
    <div className="hiw-facts reveal">
      <h2 className="hiw-facts-title">{title}</h2>
      <dl className="hiw-facts-grid">
        {rows.map(([term, def]) => (
          <div key={term} className="hiw-fact">
            <dt>{term}</dt>
            <dd>{def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const c = CASES.find((x) => x.slug === slug) ?? CASES[0];
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Case Study</p>
          <h1 className="page-title reveal reveal-delay-1">{c.h1}</h1>
          <p className="page-subtitle reveal reveal-delay-2">{c.subtitle}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <CaseFigure image={c.hero} />
          <FactGrid rows={c.glance} title="At a Glance" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title reveal">The Brief</h2>
          <p className="reveal" style={{ maxWidth: "820px", marginTop: "1rem" }}>{c.brief}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <FactGrid rows={c.spec} title="What We Made" />
          {c.specImage && <CaseFigure image={c.specImage} />}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title reveal">How It Went</h2>
          <div style={{ marginTop: "1.5rem" }}>
            {c.steps.map((s, i) => (
              <div key={s.label} className="hiw-step reveal">
                <div className="hiw-step-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="hiw-step-body">
                  <h3 className="hiw-step-title">{s.label}</h3>
                  <p className="hiw-step-text">
                    {s.label} — {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {c.midImage && <CaseFigure image={c.midImage} />}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title reveal">Result</h2>
          <p className="reveal" style={{ maxWidth: "820px", marginTop: "1rem" }}>{c.result}</p>
          <h2 className="section-title reveal" style={{ marginTop: "2.5rem" }}>Why It Worked</h2>
          <p className="reveal" style={{ maxWidth: "820px", marginTop: "1rem" }}>{c.why}</p>
          {c.endImage && <CaseFigure image={c.endImage} />}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="markets-box reveal">
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>Start a Similar Project</h2>
            <p className="markets-note" style={{ maxWidth: "820px" }}>{c.ctaText}</p>
            <div className="hiw-hero-actions" style={{ marginTop: "1.25rem" }}>
              <Link to="/contact/" className="pd-btn pd-btn-glass">Request a Quote</Link>
              <a href="https://wa.me/8618626352096" className="pd-btn pd-btn-sage">WhatsApp</a>
            </div>
            <p className="markets-note" style={{ marginTop: "1.25rem" }}>
              Related:{" "}
              {c.ctaLinks.map((l, i) => (
                <span key={l.href}>
                  {i > 0 && " · "}
                  <Link to={l.href} className="text-link">{l.label}</Link>
                </span>
              ))}
              {" · "}
              <Link to="/case-studies/" className="text-link">All case studies</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CaseStudies() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow reveal">Case Studies</p>
          <h1 className="page-title reveal reveal-delay-1">Packaging Case Studies</h1>
          <p className="page-subtitle reveal reveal-delay-2">
            Each case below is a real ELAPACK project. We do not name our clients; we show the brief,
            the specification we built, how long each stage took, and how the order went. If your
            project looks similar, send us your brief and we will quote within one business day.
          </p>
          <div className="hiw-hero-actions reveal reveal-delay-2">
            <Link to="/contact/" className="pd-btn pd-btn-glass">Request a Quote</Link>
            <a href="https://wa.me/8618626352096" className="pd-btn pd-btn-sage">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CASES.map((c) => (
              <Link
                key={c.slug}
                to={`/case-studies/${c.slug}/`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="case-card">
                  <div className="case-card-image">
                    <img src={c.hero.src} alt={c.hero.alt} loading="lazy" width={c.hero.w} height={c.hero.h} />
                    <span className="case-category">{c.cardMeta}</span>
                  </div>
                  <div className="case-card-body">
                    <h3 className="case-solution">{c.h1}</h3>
                    <div className="case-divider" />
                    <ul className="case-points">
                      <li className="case-point">
                        <span className="case-point-dot" />
                        {c.cardLine}
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
