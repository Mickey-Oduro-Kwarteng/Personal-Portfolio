import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero/hero";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
