import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";

function App() {
  const navLinks = [
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Gallery",
      href: "/gallery",
    },
  ];

  return (
    <div>
      <Navbar title="Monroe Gollaher" links={navLinks} />
      <Header />
      <Gallery />
      <Projects />
    </div>
  );
}

export default App;
