import React from "react";
import styles from "./index.module.css";
import Project from "./Components/Project";
import projects from "./Components/Project/index.data";
import PropTypes from "prop-types";
import classNames from "class-names";

const Projects = ({ className }) => (
  <div className={classNames(styles.wrapper, className)}>
    <h2>Projects</h2>
    {projects.map(({ title, blurb, image, githubLink }) => (
      <Project
        key={title}
        title={title}
        blurb={blurb}
        image={image}
        githubLink={githubLink}
      />
    ))}
  </div>
);

Projects.propTypes = {
  className: PropTypes.string,
};

Projects.defaultProps = {
  className: "",
};

export default Projects;
