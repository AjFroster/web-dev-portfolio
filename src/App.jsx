import React from "react";
import Navbar from "./components/Navbar"; // Adjust the import path as necessary
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </>
  );
};

export default App;
