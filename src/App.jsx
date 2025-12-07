import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
