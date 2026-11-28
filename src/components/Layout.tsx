import { ReactNode, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import QuoteDock from "./QuoteDock";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { track } from "../lib/track";

export default function Layout({ children }: { children?: ReactNode }) {
  useScrollReveal();
  useScrollToTop();

  // One listener covers every wa.me, mailto: and tel: link on the site, current and future.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.("a");
      if (anchor && anchor.href.startsWith("https://wa.me/")) {
        track("whatsapp_click", { link: anchor.href });
      }
      if (anchor && anchor.href.startsWith("mailto:")) {
        track("email_click", { link: anchor.href, page: window.location.pathname });
      }
      if (anchor && anchor.href.startsWith("tel:")) {
        track("phone_click", { link: anchor.href, page: window.location.pathname });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {children ?? <Outlet />}
      </main>
      <Footer />
      <QuoteDock />
    </div>
  );
}
