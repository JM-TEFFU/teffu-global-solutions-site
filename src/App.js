import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
            <Projects />


      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
