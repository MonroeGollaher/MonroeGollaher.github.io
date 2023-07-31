import React from "react";
import styles from "./index.module.css";
import Project from "./Components/Project";
import projects from "./Components/Project/index.data";

const Projects = () => (
  <div className={styles.wrapper}>
    <h1>Projects</h1>
    {projects.map(({ title, blurb, image, githubLink }) => (
      <Project
        title={title}
        blurb={blurb}
        image={image}
        githubLink={githubLink}
      />
    ))}
  </div>
);

export default Projects;
