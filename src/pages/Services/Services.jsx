import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaTools,
  FaSeedling,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
    const title = document.querySelector(".services-title");

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;

      if (title) {
        const titleTop = title.getBoundingClientRect().top;
        if (titleTop < windowHeight - 100) {
          title.classList.add("show-title");
        }
      }

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
          setTimeout(() => {
            card.classList.add("show-card");
          }, index * 150);
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const servicesData = [
    {
      icon: <FaLaptopCode />,
      title: "IT Solutions",
      desc: "We provide tailored IT solutions including software development, system integration, and digital transformation to streamline business operations and enhance productivity.",
    },
    {
      icon: <FaTools />,
      title: "Construction",
      desc: "Our construction services focus on delivering high-quality residential, commercial, and infrastructure projects efficiently, safely, and on schedule.",
    },
    {
      icon: <FaSeedling />,
      title: "Agriculture",
      desc: "We support sustainable farming and agro-processing, offering solutions for crop production, livestock management, and modern agricultural technology implementation.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Financial Consulting",
      desc: "Our expert financial consulting services help businesses optimize budgets, manage risks, and create long-term growth strategies with clear, actionable insights.",
    },
    {
      icon: <FaTruck />,
      title: "Transport & Logistics",
      desc: "We provide efficient transport and logistics services, ensuring timely delivery of goods, supply chain management, and reliable vehicle solutions.",
    },
  ];

  return (
    <section id="services" className="services-section">
      {/* description first */}
     

      {/* title second */}
      <h2 className="services-title">Our Services</h2>
 <p className="services-intro">
        Teffu Global Solutions provides expert services across multiple
        industries to empower businesses and communities.
      </p>
      {/* grid last */}
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon-wrapper">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
