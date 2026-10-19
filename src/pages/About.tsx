import { useRef } from "react";
import { Link } from "react-router-dom";

const values = [
  {
    title: "Restraint",
    desc: "We design with intention, not excess. Every element earns its place.",
  },
  {
    title: "Craft",
    desc: "We honor the hands that make. Precision is our baseline, not our ceiling.",
  },
  {
    title: "Partnership",
    desc: "We invest in your brand as if it were our own. Your success is our measure.",
  },
  {
    title: "Responsibility",
    desc: "We discuss material choices and intended use with each buyer before production.",
  },
];

const markets = [
  "Jewelry & Watches",
  "Eyewear",
  "Beauty & Cosmetics",
  "Fragrance",
  "Gifting",
  "Fashion & Apparel",
];

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  /**
   * Toggled imperatively, not through React state: a re-render would rewrite
   * this element's className and wipe the `is-visible` class that
   * useScrollReveal adds from outside React, leaving `.reveal` stuck at
   * opacity 0 — i.e. the whole block would go blank mid-playback.
   */
  const markPlaying = (playing: boolean) => {
    videoWrapperRef.current?.classList.toggle("is-playing", playing);
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header page-header-alt">
        <div className="container">
          <p className="eyebrow reveal">About Us</p>
          <h1 className="page-title reveal reveal-delay-1">
            Packaging
            <br />
            Aesthetics Builders
          </h1>
          <p className="page-subtitle reveal reveal-delay-2">
            A trade-and-manufacturing integrated enterprise, deeply rooted in
            the European and American markets — crafting packaging that
            elevates brands.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-image reveal">
              <img
                src="/about-factory.webp"
                alt="ELAPACK production facility"
                loading="lazy"
              width={1408}
              height={768}
              />
            </div>
            <div className="about-story-text reveal reveal-delay-2">
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>
                Custom packaging, built around your brief.
              </h2>
              <p className="about-text">
                ELAPACK approaches packaging as more than a container — it is
                a brand's first handshake. We work with buyers on packaging
                for jewelry, eyewear, beauty, and gifting.
              </p>
              <p className="about-text">
                We coordinate packaging design, production, and shipping
                around each order's specification. ELAPACK is operated by Wuxi
                Magic Packaging Co., Ltd., based in Wuxi, Jiangsu, China.
              </p>
              <p className="about-text">
                Share your product dimensions, material preferences, branding,
                and quantity so we can review the structure, sample, and
                production requirements with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Video Section */}
      <section className="section about-video-section">
        <div className="container">
          <div
            ref={videoWrapperRef}
            className="about-video-wrapper reveal"
            onClick={togglePlay}
            role="button"
            tabIndex={0}
            aria-label="Play or pause the factory video"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePlay();
              }
            }}
          >
            <video
              ref={videoRef}
              className="about-video-poster"
              poster="/factory-video-poster.webp"
              preload="none"
              playsInline
              onPlay={() => markPlaying(true)}
              onPause={() => markPlaying(false)}
              onEnded={() => markPlaying(false)}
            >
              <source src="/videos/factory-tour.mp4" type="video/mp4" />
            </video>
            <div className="about-video-overlay" />
            <div className="about-video-play">
              <svg viewBox="0 0 80 80" className="play-icon" aria-hidden="true">
                <circle cx="40" cy="40" r="39" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M32 26 L54 40 L32 54 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="about-video-caption">
              <p className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
                Inside Our Factory
              </p>
              <h2 className="about-video-title">
                See How Premium Packaging Is Made
              </h2>
              <p className="about-video-subtitle">
                Take a virtual tour of our production facility — from material
                selection to precision assembly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section-header-center reveal">
            <p className="eyebrow">What We Believe</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              The Principles Behind Every Piece
            </h2>
          </div>
          <div className="values-grid">
            {values.map((val, i) => (
              <div
                key={val.title}
                className={`value-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section about-materials">
        <div className="container">
          <div className="materials-grid">
            <div className="materials-content reveal">
              <p className="eyebrow">Material Options</p>
              <h2 className="section-title" style={{ marginTop: "1rem" }}>
                Sourced with intention.
              </h2>
              <p className="about-text">
                We work with materials such as velvet, suede, linen, cotton,
                satin, and rigid paperboard. Tell us your preferred material
                and intended use so we can confirm the available specification
                and any supporting documents for that option.
              </p>
              <p className="about-text">
                Because the world's finest brands demand materials that feel
                as good as they look — and perform as well as they promise.
              </p>
            </div>
            <div className="materials-image reveal reveal-delay-2">
              <img
                src="/about-materials.webp"
                alt="Premium packaging materials"
                loading="lazy"
              width={1408}
              height={768}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section about-markets">
        <div className="container">
          <div className="markets-box reveal">
            <p className="eyebrow">Who We Serve</p>
            <h2 className="section-title" style={{ marginTop: "0.75rem" }}>
              Industries We Elevate
            </h2>
            <div className="markets-list">
              {markets.map((market) => (
                <span key={market} className="market-tag">
                  {market}
                </span>
              ))}
            </div>
            <p className="markets-note">
              We discuss packaging requirements with buyers in these
              categories, including size, material, branding, and quantity.
            </p>
            <Link to="/contact/" className="btn-primary">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
