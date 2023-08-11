import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import classNames from "class-names";

const MobileProject = ({
  blurb,
  className,
  githubLink,
  image,
  theme,
  title,
}) => {
  const { src } = image;
  const classList = classNames(
    styles.component,
    className,
    theme === "dark" && styles.dark
  );
  return (
    <div className={classList}>
      <div className={styles.info}>
        <img src={src} alt="" className={styles.img} />
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

MobileProject.propTypes = {
  blurb: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
  githubLink: PropTypes.string,
  theme: PropTypes.string,
  title: PropTypes.string,
};

MobileProject.defaultProps = {
  blurb: "",
  className: "",
  githubLink: "",
  image: {
    src: "",
    flipped: false,
  },
  theme: "",
  title: "",
};

export default MobileProject;
