import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.module.css";
import { GalleryPage } from "./Pages/Gallery";
import { HomePage } from "./Pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.classList.toggle("dark-primary");
    const elements = document.getElementsByClassName("secondary");
    const paginationBullets = document
      ?.querySelector(".swiper-pagination")
      ?.querySelectorAll("span");
    const navLinks = document
      .getElementById("nav-items")
      ?.querySelectorAll("a");
    const socialLinks = document
      ?.getElementById("social-links")
      ?.querySelectorAll("a");

    for (let i = 0; i < elements?.length; i++) {
      elements[i].classList.toggle("dark-secondary");
    }

    for (let i = 0; i < paginationBullets?.length; i++) {
      paginationBullets[i].classList.toggle("dark-mode-text");
    }

    for (let i = 0; i < navLinks?.length; i++) {
      navLinks[i].classList.toggle("dark-mode-text");
    }

    for (let i = 0; i < socialLinks?.length; i++) {
      socialLinks[i].classList.toggle("dark-mode-text");
    }
  }, [theme]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
