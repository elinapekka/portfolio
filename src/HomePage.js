import React from "react";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import NavBar from "./routers/Nav";

const HomePage = () => {


  return (
    <div>
        <NavBar />
        <About />
        <Projects />
        <Contact />
    </div>
  );
};

export default HomePage;