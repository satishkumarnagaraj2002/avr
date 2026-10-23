import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { institution, navigation } from "../data/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <Link className="brand" to="/" aria-label="AVR Institution home">
        <span className="brand-logo-crop">
          <img className="brand-logo" src="/avr_institution_logo.png" alt="AVR Institution" />
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            end={item.path === "/"}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="header-cta" to="/join">
        Join AVR <ArrowUpRight size={15} />
      </Link>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <p className="eyebrow">THE WAY, PRACTISED DAILY</p>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              tabIndex={menuOpen ? 0 : -1}
              className={({ isActive }) => (isActive ? "mobile-nav-link active" : "mobile-nav-link")}
              end={item.path === "/"}
              style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
            >
              <span className="mobile-index">0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={17} />
            </NavLink>
          ))}
        </nav>
        <Link className="button button-red mobile-join" to="/join" tabIndex={menuOpen ? 0 : -1}>
          Begin your journey <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand footer-brand" to="/" aria-label="AVR Institution home">
            <span className="brand-logo-crop">
              <img className="brand-logo" src="/avr_institution_logo.png" alt="AVR Institution" />
            </span>
          </Link>
          <p className="footer-statement">
            A practice shaped by discipline.
            <br />
            A tradition carried forward.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">Explore</span>
            <Link to="/about">Our institution</Link>
            <Link to="/shitoryu">Shitō-ryū</Link>
            <Link to="/founder">The founder</Link>
            <Link to="/join">Training & membership</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div>
            <span className="footer-label">Connect</span>
            <Link to="/contact">Contact AVR</Link>
            <a href={institution.source} target="_blank" rel="noreferrer">
              Official website <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="footer-note">
          <span className="japanese-seal" aria-hidden="true">道</span>
          <p>Discipline. Tradition. Excellence.</p>
          <span className="footer-note-sub">Shitō-ryū Karate · India</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AVR Institution</span>
        <span>Built with respect for the way.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
