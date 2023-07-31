import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Gallery />
      <Projects />
    </div>
  );
}

export default App;
