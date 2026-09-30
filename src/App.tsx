import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Industries from "./pages/Industries";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import News from "./pages/News";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Video from "./pages/Video";
import Landing from "./pages/Landing";
import Collection from "./pages/Collection";

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
        <Route path="/custom-jewelry-boxes" element={<Collection slug="custom-jewelry-boxes" />} />
        <Route path="/eyewear-packaging" element={<Collection slug="eyewear-packaging" />} />
        <Route path="/custom-jewelry-pouches" element={<Collection slug="custom-jewelry-pouches" />} />
        <Route path="/custom-wig-packaging" element={<Collection slug="custom-wig-packaging" />} />
        <Route path="/custom-jewelry-packaging" element={<Collection slug="custom-jewelry-packaging" />} />
        <Route path="/custom-gift-boxes" element={<Collection slug="custom-gift-boxes" />} />
        <Route path="/custom-cosmetic-packaging" element={<Collection slug="custom-cosmetic-packaging" />} />
        <Route path="/custom-drawstring-bags" element={<Collection slug="custom-drawstring-bags" />} />
        <Route path="/ribbons-accessories" element={<Collection slug="ribbons-accessories" />} />
        <Route path="/custom-cosmetic-pouches" element={<Collection slug="custom-cosmetic-pouches" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<Article />} />
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
