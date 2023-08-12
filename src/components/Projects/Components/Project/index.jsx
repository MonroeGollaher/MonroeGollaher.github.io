import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.css";
import classNames from "class-names";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../../../../App";

const Project = ({ blurb, githubLink, image, title }) => {
  const { src } = image;

  const {
    _currentValue: { theme },
  } = ThemeContext;

  const classList = classNames(
    styles.component,
    theme === "dark" && styles.dark
  );

  return (
    <div className={classList}>
      <div className={styles.imgWrapper}>
        <img src={src} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{blurb}</p>
        {githubLink && (
          <div className={styles.githubLink}>
            <FontAwesomeIcon icon={faGithub} />
            <a href={githubLink}>View on Github</a>
          </div>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  blurb: PropTypes.string,
  githubLink: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
};

Project.defaultProps = {
  blurb: "",
  githubLink: "",
  image: {
    src: "",
  },
  title: "",
};

export default Project;
