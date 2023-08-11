import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import classNames from "class-names";

const DesktopProject = ({
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
      <div className={styles.imgWrapperDesktop}>
        <img src={src} alt="" />
      </div>
      <div className={styles.info}>
        <h2>{title}</h2>
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

DesktopProject.propTypes = {
  blurb: PropTypes.string,
  className: PropTypes.string,
  githubLink: PropTypes.string,
  image: PropTypes.object,
  theme: PropTypes.string,
  title: PropTypes.string,
};

DesktopProject.defaultProps = {
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

export default DesktopProject;
