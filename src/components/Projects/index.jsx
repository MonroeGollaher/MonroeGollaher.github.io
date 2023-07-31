import React from "react";
import styles from "./index.module.css";
import Project from "./Components/Project";
import projects from "./Components/Project/ProjectData";

const Projects = () => (
  <div className={styles.wrapper}>
    <h1>Projects</h1>
    {projects.map(({ title, blurb }) => (
      <Project title={title} blurb={blurb} />
    ))}
  </div>
);

export default Projects;
