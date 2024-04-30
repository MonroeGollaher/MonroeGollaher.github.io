import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Picture from "./assets/monroe-iceland.jpg";

import classNames from "class-names";
import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={classNames(styles.component)}>
      <img src={Picture} alt="profile" />
      <div>
        <h2 className={styles.name}>Monroe Gollaher.</h2>
        <h2 className={styles.bio}>Software Developer // Photographer</h2>
        <p className={styles.blurb}>
          Full-stack software developer with a passion for creativity and
          problem solving.
        </p>
        <p className={styles.languages}>
          Javascript (React, Vue.js, Typescript, Angular), C#, .NET Core, SQL,
          Node.js, MongoDB, Web APIs, CSS/Bootstrap, HTML5 & more.
        </p>
      </div>
      <div className={styles.socialButtons}>
        <ul className={styles.listWrapper} id="social-links">
          <li>
            <a href="https://www.instagram.com/thisismonroe/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/monroe-gollaher/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/MonroeGollaher">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="mailto:mgollaher92@gmail.com?subject=Let's%20get%20in%20touch">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
