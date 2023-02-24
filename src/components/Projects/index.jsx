import React from "react";
import styles from "./index.module.css";
import Project from "./Project";

const Projects = () => (
  <div className={styles.wrapper}>
    <h1>Projects</h1>
    <Project />
  </div>
);

export default Projects;
