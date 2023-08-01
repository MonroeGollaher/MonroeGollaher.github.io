import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.css";
import DesktopProject from "./DesktopProject";
import MobileProject from "./MobileProject";

const Project = ({ title, blurb, image, githubLink }) => {
  return (
    <>
      <DesktopProject
        className={styles.desktopWrapper}
        title={title}
        blurb={blurb}
        githubLink={githubLink}
        image={image}
      />
      <MobileProject
        className={styles.mobileWrapper}
        title={title}
        blurb={blurb}
        githubLink={githubLink}
        image={image}
      />
    </>
  );
};

Project.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  image: PropTypes.object,
  githubLink: PropTypes.string,
};

Project.defaultProps = {
  className: "",
  title: "",
  blurb: "",
  image: {
    src: "",
    flipped: false,
  },
  githubLink: "",
};

export default Project;
