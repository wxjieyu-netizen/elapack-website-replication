import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "./Logo";
import { categories, industries, solutions } from "../data/products";

const productCategories = categories.filter((c) => c !== "All");

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container-wide header-inner">
          <Link to="/" className="header-logo" aria-label="ELA PACK home">
            <Logo />
          </Link>

          <nav
            className="header-nav"
            onMouseLeave={handleDropdownLeave}
          >
            {/* Products with dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownEnter("products")}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-active" : ""}`
                }
              >
                Products
              </NavLink>
              {openDropdown === "products" && (
                <div className="nav-dropdown">
                  <div className="nav-dropdown-inner">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat}
                        to={`/products?category=${encodeURIComponent(cat)}`}
                        className="nav-dropdown-link"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries with dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownEnter("industries")}
            >
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-active" : ""}`
                }
              >
                Industries
              </NavLink>
              {openDropdown === "industries" && (
                <div className="nav-dropdown">
                  <div className="nav-dropdown-inner">
                    {industries.map((ind) => (
                      <Link
                        key={ind}
                        to={`/industries?sector=${encodeURIComponent(ind)}`}
                        className="nav-dropdown-link"
                      >
                        {ind}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions with dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => handleDropdownEnter("solutions")}
            >
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-active" : ""}`
                }
              >
                Solutions
              </NavLink>
              {openDropdown === "solutions" && (
                <div className="nav-dropdown">
                  <div className="nav-dropdown-inner">
                    {solutions.map((sol) => (
                      <Link
                        key={sol}
                        to={`/solutions?topic=${encodeURIComponent(sol)}`}
                        className="nav-dropdown-link"
                      >
                        {sol}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
            >
              News
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "is-active" : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav className="mobile-nav">
          {/* Products section */}
          <div className="mobile-nav-section">
            <span className="mobile-nav-heading">Products</span>
            <Link to="/products" className="mobile-nav-link mobile-nav-sub">
              All Products
            </Link>
            {productCategories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
                className="mobile-nav-link mobile-nav-sub"
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Industries section */}
          <div className="mobile-nav-section">
            <span className="mobile-nav-heading">Industries</span>
            <Link to="/industries" className="mobile-nav-link mobile-nav-sub">
              All Industries
            </Link>
            {industries.map((ind) => (
              <Link
                key={ind}
                to={`/industries?sector=${encodeURIComponent(ind)}`}
                className="mobile-nav-link mobile-nav-sub"
              >
                {ind}
              </Link>
            ))}
          </div>

          {/* Solutions section */}
          <div className="mobile-nav-section">
            <span className="mobile-nav-heading">Solutions</span>
            <Link to="/solutions" className="mobile-nav-link mobile-nav-sub">
              All Solutions
            </Link>
            {solutions.map((sol) => (
              <Link
                key={sol}
                to={`/solutions?topic=${encodeURIComponent(sol)}`}
                className="mobile-nav-link mobile-nav-sub"
              >
                {sol}
              </Link>
            ))}
          </div>

          <Link to="/about" className="mobile-nav-link">
            About Us
          </Link>
          <Link to="/news" className="mobile-nav-link">
            News
          </Link>
          <Link to="/contact" className="mobile-nav-link">
            Contact
          </Link>
          <Link to="/contact" className="mobile-cta">
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
