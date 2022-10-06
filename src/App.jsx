import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
