import React, { useState, useEffect } from "react";
import "./Home.css";

const images = [
  "/assets/wallpaper/p1.jpg",
  "/assets/wallpaper/p2.jpg",
  "/assets/wallpaper/p3.jpg",
"/assets/wallpaper/p4.jpg",
"/assets/wallpaper/p5.jpg",


];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`home-section ${fade ? "fade-in" : "fade-out"}`}
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1>Welcome to Teffu Global Solutions</h1>
        <p>Delivering quality services across IT, Construction, Agriculture & more.</p>
        <a href="#services" className="btn-primary">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;
