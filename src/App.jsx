import React, { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.module.css";
import styles from "./App.module.css";
import { HomePage } from "./Pages/Home";
import Navbar from "./components/Navbar";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const className = theme === "light" ? styles.light : styles.dark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
