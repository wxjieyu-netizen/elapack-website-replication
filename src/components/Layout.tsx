import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Layout({ children }: { children?: ReactNode }) {
  useScrollReveal();
  useScrollToTop();

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
