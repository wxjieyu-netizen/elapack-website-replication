import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Gates .reveal{opacity:0} (global.css) on JS being alive — if this script
// never runs, content renders visible instead of a blank page.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
