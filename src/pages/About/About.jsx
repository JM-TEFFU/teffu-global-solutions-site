import React, { useEffect } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .fade-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  const teamMembers = [
    { name: "Jaqueen Mokhoma Teffu", role: "Founder & CEO", img: "/assets/team/teffu.jpg", linkedin: "#", twitter: "#", facebook: "#" },
    { name: "Kgopotso Makwala", role: "Finance Manager", img: "/assets/team/Makwala.jpg", linkedin: "#", twitter: "#", facebook: "#" },
    { name: "Daniel Makhado", role: "Operations Manager", img: "/assets/team/Dan.webp", linkedin: "#", twitter: "#", facebook: "#" },
    { name: "Thabiso Wise Malepa", role: "Civil Engineer", img: "/assets/team/Malepa.webp", linkedin: "#", twitter: "#", facebook: "#" },
    { name: "Ramokone Masola", role: "IT Manager", img: "/assets/team/Masola.jpg", linkedin: "#", twitter: "#", facebook: "#" },
  ];

  const offices = [
    {
      title: "Mokopane Office",
      address: "451, Ga-Sekhaolelo, Mapela, Mokopane, South Africa, 0610",
      phone: "+27 79 309 5966 | +27 83 804 2506",
      email: "jaqueenwork@gmail.com",
      colorClass: "mokopane-card",
    },
    {
      title: "Midrand Office",
      address: "192, San Ridge Village, Midrand, South Africa",
      phone: "+27 79 309 5966 | +27 83 804 2506",
      email: "jaqueenwork@gmail.com",
      colorClass: "midrand-card",
    },
  ];

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-card fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="premium-title">About Teffu Global Solutions</h2>

        <motion.div className="about-logo" whileHover={{ scale: 1.15, rotateY: 10, rotateX: 5 }}>
          <img src="/assets/logo/Logo.jpg" alt="Teffu Logo" />
        </motion.div>

        <motion.div className="description-card fade-scale" whileHover={{ translateY: -5, rotateX: 3 }}>
          <p>
            <span>Teffu Global Solutions</span> delivers expert services across <span>IT</span>, <span>Construction</span>, <span>Agriculture</span>, <span>Financial Consulting</span>, <span>Transport</span>, and <span>Hygiene Solutions</span>.
          </p>
          <p>
            Our mission is to provide <span>innovative</span>, <span>reliable</span>, and <span>sustainable</span> solutions to empower businesses and communities in South Africa.
          </p>
          <p>
            We operate from two offices: <span>Mokopane</span> and <span>Midrand</span>, strategically positioned to serve clients nationwide.
          </p>
        </motion.div>

        <h3 className="office-title">Our Offices</h3>
        <div className="offices-container">
          {offices.map((office, i) => (
            <motion.div
              className={`office-card hover-3d fade-scale ${office.colorClass}`}
              whileHover={{ translateY: -10, scale: 1.05 }}
              key={i}
            >
              <FiMapPin className="card-icon" />
              <h4>{office.title}</h4>
              <p>{office.address}</p>
              <FiPhone className="card-icon" />
              <p>{office.phone}</p>
              <FiMail className="card-icon" />
              <p>{office.email}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="team-title">Our Team</h3>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <motion.div
              className="team-member hover-3d fade-scale"
              key={index}
              whileHover={{ translateY: -8, scale: 1.06 }}
            >
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <div className="social-icons">
                <a href={member.linkedin}><FaLinkedin /></a>
                <a href={member.twitter}><FaTwitter /></a>
                <a href={member.facebook}><FaFacebook /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
