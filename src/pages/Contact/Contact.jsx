import React, { useState } from "react";
import { FiX, FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [activeModal, setActiveModal] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Send Us a Message",
      icon: <FiMail />,
      short: "Click below to message us on WhatsApp.",
      modalType: "whatsapp",
      whatsappLink: "https://wa.me/27793095966?text=Hello%20Teffu%20Global%20Solutions",
      gradient: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
    },
    {
      id: 2,
      title: "Our Location",
      icon: <FiMapPin />,
      short: "View our office locations on the map.",
      modalType: "map",
      gradient: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
    },
    {
      id: 3,
      title: "Submit Form Online",
      icon: <FiMail />,
      short: "Fill in our online form for enquiries.",
      modalType: "googleform",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdNx2CqTNmfx_sULlHXM0CrAAQQh33-0ERY2cQmrY7rN83d6g/viewform?usp=sharing&ouid=101889683461913431233",
      gradient: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="floating-shape-contact shape1"></div>
      <div className="floating-shape-contact shape2"></div>
      <div className="floating-shape-contact shape3"></div>

      <h2 className="contact-title">
        Contact <span className="highlight">Us</span>
      </h2>
      <p className="contact-intro">
        Reach out to Teffu Global Solutions. We’d love to hear from you.
      </p>

      <div className="contact-cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className="contact-card"
            style={{ background: card.gradient }}
            onClick={() => {
              if (card.modalType === "whatsapp") {
                window.open(card.whatsappLink, "_blank");
              } else if (card.modalType === "googleform") {
                window.open(card.formLink, "_blank");
              } else {
                setActiveModal(card.id);
              }
            }}
          >
            <div className="contact-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.short}</p>
            <button className="open-modal-btn">
              {card.modalType === "whatsapp"
                ? "Open WhatsApp"
                : card.modalType === "googleform"
                ? "Open Form"
                : "View Details"}
            </button>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="modal" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{cards.find((c) => c.id === activeModal).title}</h3>
              <button className="close-btn" onClick={() => setActiveModal(null)}>
                <FiX />
              </button>
            </div>
            <div className="modal-body">
              {cards.find((c) => c.id === activeModal).modalType === "map" && (
                <div className="map-container">
                  <iframe
                    title="Ga-Sekhaolelo Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14583.409482553796!2d28.9732411!3d-23.96566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec746f2172e721d%3A0x729028e7c5f3f9c8!2sGa-Sekhaolelo!5e0!3m2!1sen!2sza!4v1758122781448!5m2!1sen!2sza"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "12px", marginBottom: "15px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <iframe
                    title="Second Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1604.2451559059293!2d28.11702143110534!3d-25.975125770599593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1758625378258!5m2!1sen!2sza"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "12px", marginBottom: "15px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <div className="contact-info">
                    <p>
                      <FiPhone style={{ marginRight: "8px" }} />
                      Phone: +27 79 309 5966 | 83 804 2506 <br />
                      <FiMail style={{ marginRight: "8px" }} />
                      Email: jaqueenwork@gmail.com <br />
                      <FiClock style={{ marginRight: "8px" }} />
                      Office Hours: Mon – Fri, 08:00 – 17:00
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
