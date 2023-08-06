import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import classNames from "class-names";

const DesktopProject = ({ className, title, blurb, image, githubLink }) => {
  const { src } = image;

  return (
    <div className={classNames(styles.component, className)}>
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
  className: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  image: PropTypes.object,
  githubLink: PropTypes.string,
};

DesktopProject.defaultProps = {
  className: "",
  title: "",
  blurb: "",
  image: {
    src: "",
    flipped: false,
  },
  githubLink: "",
};

export default DesktopProject;
