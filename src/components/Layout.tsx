import { ReactNode, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { track } from "../lib/track";

export default function Layout({ children }: { children?: ReactNode }) {
  useScrollReveal();
  useScrollToTop();

  // One listener covers every wa.me link on the site, current and future.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.("a");
      if (anchor && anchor.href.startsWith("https://wa.me/")) {
        track("whatsapp_click", { link: anchor.href });
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
    </div>
  );
}
