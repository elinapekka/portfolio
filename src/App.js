import React from "react";
import NavBar from "./routers/Nav";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello CodeSandbox</h1>
      <div
        style={{
          height: "100vh"
        }}
      ></div>
      <About />
    </div>
  );
}
