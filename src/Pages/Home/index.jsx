import React from "react";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Resume from "../../components/Resume";
// import Gallery from "./components/Gallery";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Resume />
      {/* <Gallery /> */}
      <Projects />
    </div>
  );
};
