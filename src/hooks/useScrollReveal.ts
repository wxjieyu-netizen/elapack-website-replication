import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // A re-render that changes an element's className rewrites the
            // whole attribute and drops the class above, which would leave the
            // element stuck on `.reveal { opacity: 0 }` forever. The data
            // attribute is never managed by React, so it survives.
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0.15 made any block taller than ~6.5x the viewport
      // (article bodies are 4000-6000px) permanently stuck at opacity:0
      // on short windows — the reveal never fired and the page looked blank.
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname, search]);
}
