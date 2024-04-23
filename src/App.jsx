import React, { useState } from "react";
import "./App.module.css";
import styles from "./App.module.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Gallery from "./components/Gallery";
import { createContext } from "react";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const className = theme === "light" ? styles.light : styles.dark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={className}>
        <Navbar />
        <Header />
        <Resume className={styles.section} />
        {/* <Gallery /> */}
        <Projects className={styles.section} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
