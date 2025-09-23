import React, { useEffect, useRef } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;

      shapesRef.current.forEach((shape, index) => {
        const factor = (index + 1) * 10;
        if (shape) {
          shape.style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer className="footer-section">
      {/* Floating Shapes */}
      {["shape1", "shape2", "shape3"].map((shape, i) => (
        <div
          key={shape}
          className={`footer-shape ${shape}`}
          ref={(el) => (shapesRef.current[i] = el)}
        ></div>
      ))}

      <div className="footer-content">
        <div className="footer-cards">
          {/* Company Description */}
          <div className="footer-card card-company fade-up">
            <h3 className="footer-title">Teffu Global Solutions</h3>
            <p className="footer-text">
              Delivering expert services across IT, Construction, Agriculture,
              Financial Consulting, Transport, and Hygiene Solutions. Empowering
              businesses and communities in South Africa with sustainable solutions.
            </p>
          </div>

          {/* Offices */}
          <div className="footer-card card-offices fade-up">
            <h3 className="footer-title">Our Offices</h3>
            <p><FiMapPin /> House No 451, Ga-Sekhaolelo, Mokopane, Limpopo</p>
            <p><FiMapPin /> 192, San Ridge Village, Midrand, South Africa</p>
            <p><FiPhone /> +27 79 309 5966 | +27 83 804 2506</p>
            <p><FiMail /> jaqueenwork@gmail.com</p>
            <p><FiClock /> Mon – Fri, 08:00 – 17:00</p>
          </div>

          {/* Navigation Links */}
          <div className="footer-card card-nav fade-up">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com/teffu.global.solutions/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/company/teffu-global-solutions/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://wa.me/27793095966?text=Hello%20Teffu%20Global%20Solutions" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Teffu Global Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
