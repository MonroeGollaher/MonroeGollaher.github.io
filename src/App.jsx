import styles from "./App.module.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Resume className={styles.section} />
      {/* <Gallery /> */}
      <Projects className={styles.section} />
    </div>
  );
}

export default App;
