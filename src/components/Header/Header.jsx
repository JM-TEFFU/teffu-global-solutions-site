import React, { useState, useEffect, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = useMemo(
    () => ["home", "about", "services", "projects", "contact"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + 120;
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/assets/logo/Logo.jpg" alt="Teffu Logo" className="logo-img" />
          <span className="logo-text">Teffu Global Solutions</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="nav-links-container">
          <ul className="nav-links">
            {sections.map((sec, i) => (
              <motion.li
                key={sec}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <a
                  href={`#${sec}`}
                  className={activeSection === sec ? "active" : ""}
                  onClick={(e) => handleLinkClick(e, sec)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <ul>
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={activeSection === sec ? "active" : ""}
                onClick={(e) => handleLinkClick(e, sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
