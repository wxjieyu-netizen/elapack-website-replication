import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Industries from "./pages/Industries";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Video from "./pages/Video";
import Landing from "./pages/Landing";

import "./styles/global.css";
import "./styles/components.css";
import "./styles/pages.css";

/**
 * Route tree without a router — used both by the client App (wrapped in
 * BrowserRouter) and by the build-time prerender (wrapped in StaticRouter).
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pouches-bags" element={<Landing slug="pouches-bags" />} />
        <Route path="/boxes" element={<Landing slug="boxes" />} />
        <Route path="/sets" element={<Landing slug="sets" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/video" element={<Video />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
