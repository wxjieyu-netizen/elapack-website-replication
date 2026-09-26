import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p className="footer-desc">
              Crafting premium packaging solutions for global luxury brands.
              From creative design to precision production — one partner, end
              to end.
            </p>
            <div className="footer-badges">
              <span className="footer-badge">Eco-Friendly Materials</span>
              <span className="footer-badge">ISO 9001 Certified</span>
              <span className="footer-badge">Global Shipping</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Products</h4>
            <ul>
              <li><Link to="/products?category=Pouches%20%26%20Bags">Pouches & Bags</Link></li>
              <li><Link to="/products?category=Boxes">Boxes</Link></li>
              <li><Link to="/products?category=Sets%20%26%20Complete%20Packaging">Sets & Complete Packaging</Link></li>
              <li><Link to="/products?category=Ribbons%20%26%20Accessories">Ribbons & Accessories</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <span className="footer-label">Phone</span>
                <a href="tel:+8618626352096">+86 18626352096</a>
              </li>
              <li>
                <span className="footer-label">Email</span>
                <a href="mailto:tina@elapack.com">tina@elapack.com</a>
              </li>
              <li>
                <span className="footer-label">WhatsApp</span>
                <a href="https://wa.me/8618626352096">+86 18626352096</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ELAPACK. All rights reserved.</p>
          <p className="footer-locale">Serving Europe & North America · English</p>
        </div>
      </div>
    </footer>
  );
}
