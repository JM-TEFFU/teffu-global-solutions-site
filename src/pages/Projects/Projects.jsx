import React, { useState, useEffect } from "react";
import { FiBriefcase, FiMapPin, FiClock, FiTag, FiLayers } from "react-icons/fi";
import "./Projects.css";

const Projects = () => {
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modalData ? "hidden" : "auto";
  }, [modalData]);

  const projects = [
    {
      title: "Refurbishment of Existing Houses at Ga-Sekhaolelo",
      sector: "Construction",
      client: "Shinatho Consulting (Pty) Ltd",
      location: "Ga-Sekhaolelo, Mokopane, Limpopo",
      duration: "June 2025 – August 2025",
      value: "R85,712.50",
      img: "/assets/renovation/renovation.jpeg",
      desc: "Teffu Global Solutions (Pty) Ltd was appointed to carry out the refurbishment of existing residential units in Ga-Sekhaolelo as part of a community upliftment initiative supported by Mogalakwena Mine. The project focused on modernizing homes with sustainable materials and quality design, ensuring safe, durable, and comfortable living environments for local residents. The works were successfully completed in accordance with the agreed specifications and standards, reflecting our commitment to excellence in construction and community development."
    },
    {
      title: "Web Application for Ga-Sekhaolelo Community",
      sector: "IT",
      client: "Teffu Global Solutions (Pty) Ltd",
      location: "Ga-Sekhaolelo, Mokopane, Limpopo",
      duration: "Ongoing",
      img: "/assets/renovation/armoede.png",
      desc: "Teffu Global Solutions (Pty) Ltd is developing a user-friendly web application tailored for the Ga-Sekhaolelo community. The platform is designed to provide seamless access to local resources, digital services, and engagement tools, empowering residents to connect, report, and access information efficiently. This ongoing initiative supports digital inclusion and community development through accessible technology."
    },
    {
      title: "Sustainable Sheep and Goat Farming",
      sector: "Agriculture",
      client: "Teffu Global Solutions (Pty) Ltd",
      location: "Farm near Ga-Sekhaolelo, Mokopane, Limpopo",
      duration: "Ongoing",
      value: "Estimated livestock value over R20,000",
      img: "/assets/renovation/farming.jpeg",
      desc: "Teffu Global Solutions (Pty) Ltd is actively engaged in sustainable livestock farming, specializing in indigenous and Boer goats as well as sheep. The project applies modern breeding, feeding, and pasture management techniques to ensure healthy livestock and improved productivity. With an estimated livestock value exceeding R20,000, this initiative supports local food security and contributes to community development through responsible agricultural practices."
    }
  ];

  const sectorColors = {
    "Construction": "#f39c12",
    "IT": "#16a085",
    "Agriculture": "#27ae60"
  };

  const closeModal = () => setModalData(null);

  return (
    <section id="projects" className="projects-section">
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      <h2 className="projects-title">Our Projects</h2>
      <p className="projects-intro">We focus on three main sectors: Construction, IT, and Agriculture.</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div
              className="sector-badge"
              style={{ backgroundColor: sectorColors[project.sector] }}
            >
              {project.sector}
            </div>
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} />
            </div>
            <h4>{project.title}</h4>
            <p>{project.desc.slice(0, 80)}...</p>
            <button className="view-details-btn" onClick={() => setModalData(project)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalData.img} alt={modalData.title} />
            <h3>{modalData.title}</h3>

            <div className="modal-details">
              {modalData.sector && (
                <p><FiLayers className="icon"/> <strong>Sector:</strong> {modalData.sector}</p>
              )}
              {modalData.client && (
                <p><FiBriefcase className="icon"/> <strong>Client:</strong> {modalData.client}</p>
              )}
              {modalData.location && (
                <p><FiMapPin className="icon"/> <strong>Location:</strong> {modalData.location}</p>
              )}
              {modalData.duration && (
                <p><FiClock className="icon"/> <strong>Duration:</strong> {modalData.duration}</p>
              )}
              {modalData.value && (
                <p><FiTag className="icon"/> <strong>Value:</strong> {modalData.value}</p>
              )}
            </div>

            <p className="modal-desc">{modalData.desc}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
