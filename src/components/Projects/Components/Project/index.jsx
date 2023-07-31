import { string, Object } from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.css";

const Project = ({ title, blurb, image, githubLink }) => {
  const { src, flipped } = image;
  return (
    <div className={styles.component}>
      {flipped ? (
        <>
          <img src={src} alt="" className={styles.img} />
          <div className={styles.info}>
            <h2>{title}</h2>
            <p>{blurb}</p>
            {githubLink && (
              <>
                <FontAwesomeIcon icon={faGithub} />
                <a href={githubLink}>View on Github</a>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={styles.info}>
            <h2>{title}</h2>
            <p>{blurb}</p>
            {githubLink && (
              <>
                <FontAwesomeIcon icon={faGithub} />
                <a href={githubLink}>View on Github</a>
              </>
            )}
          </div>
          <img src={src} alt="" className={styles.img} />
        </>
      )}
    </div>
  );
};

Project.propTypes = {
  title: string,
  blurb: string,
  image: Object,
  githubLink: string,
};

Project.defaultProps = {
  title: "",
  blurb: "",
  image: {
    src: "",
    flipped: false,
  },
  githubLink: "",
};

export default Project;
