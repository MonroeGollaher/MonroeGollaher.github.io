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

    const toggleClass = (elements, className, action) => {
      if (elements && elements.length) {
        Array.from(elements).forEach((element) => {
          element.classList[action](className);
        });
      }
    };

    const isDark = theme === "dark";
    document.body.classList.toggle("dark-primary", isDark);

    toggleClass(elements, "dark-secondary", isDark ? "add" : "remove");
    toggleClass(paginationBullets, "dark-mode-text", isDark ? "add" : "remove");
    toggleClass(navLinks, "dark-mode-text", isDark ? "add" : "remove");
    toggleClass(socialLinks, "dark-mode-text", isDark ? "add" : "remove");
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
