import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  );
};

export default App;
