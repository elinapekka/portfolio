import React from "react";
//import NavBar from "./routers/Nav";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="App">
        <About />
        <Projects />
        <Contact />
    </div>
  );
}
