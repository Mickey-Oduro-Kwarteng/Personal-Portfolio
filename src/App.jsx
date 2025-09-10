import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
