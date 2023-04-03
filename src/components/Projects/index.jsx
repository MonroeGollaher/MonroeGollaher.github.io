import React from "react";
import styles from "./index.module.css";
import Project from "./Project";
import projects from "./Project/ProjectData";

const Projects = () => (
  <div className={styles.wrapper}>
    <h1>Projects</h1>
    {projects.map(({ title, blurb }) => (
      <Project title={title} blurb={blurb} />
    ))}
  </div>
);

export default Projects;
