import React from "react";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Resume from "../../components/Resume";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Resume />
      <Projects />
    </div>
  );
};
