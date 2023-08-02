import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Picture from "./assets/monroePortfolio.jpg";

import styles from "./index.module.css";

const Header = () => (
  <div className={styles.component}>
    <img src={Picture} alt="profile" />
    <div>
      <h2 className={styles.name}>Monroe Gollaher.</h2>
      <h2 className={styles.bio}>Software Developer // Photographer</h2>
      <p className={styles.blurb}>
        Full-stack software developer with a passion for creativity and problem
        solving. 2 years experience working in the health & financial tech
        space.
      </p>
      <p className={styles.languages}>
        Javascript (React, Typescript), C#, Dotnet Core, SQL, React, Vue.js,
        Node.js, MongoDB, Web APIs, CSS/Bootstrap, HTML5 & more.
      </p>
    </div>
    <div className={styles.socialButtons}>
      <ul className={styles.listWrapper}>
        <li>
          <a href="https://rb.gy/kb8lcq">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://rb.gy/srpbts">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://rb.gy/hdiedb">
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

export default Header;
