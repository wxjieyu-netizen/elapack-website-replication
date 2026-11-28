import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { track } from "../lib/track";

// Desktop-only floating quote bar. GA4 showed desktop visitors never
// converted while mobile ones did (mostly via WhatsApp), so desktop gets a
// quote button and an email link that stay in reach once the visitor scrolls.
export default function QuoteDock() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname.startsWith("/contact")) return null;

  const productMatch = pathname.match(/^\/products\/([^/]+)/);
  const quoteUrl = productMatch
    ? `/contact/?product=${encodeURIComponent(productMatch[1])}`
    : "/contact/";

  return (
    <div className={`quote-dock ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <a
        href="mailto:tina@elapack.com"
        className="quote-dock-email"
        tabIndex={visible ? 0 : -1}
      >
        tina@elapack.com
      </a>
      <Link
        to={quoteUrl}
        className="quote-dock-cta"
        tabIndex={visible ? 0 : -1}
        onClick={() => track("quote_dock_click", { page: pathname })}
      >
        Get a Quote
      </Link>
    </div>
  );
}
