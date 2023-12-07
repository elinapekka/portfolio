import React from "react";
import Message from "./components/Message"
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="App">
        <Message />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}
