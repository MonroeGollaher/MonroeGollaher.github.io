import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import classNames from "class-names";
import { ThemeContext } from "../../App";

const Resume = ({ className }) => {
  const {
    _currentValue: { theme },
  } = ThemeContext;

  const classList = classNames(
    styles.wrapper,
    className,
    theme === "dark" && styles.dark
  );

  return (
    <div className={classList}>
      <h2>Experience</h2>
      <ul>
        <li>
          <div className={styles.experienceWrapper}>
            <div className={styles.time}>
              <header>Nov &apos;22 - Aug &apos;23</header>
            </div>
            <div className={styles.info}>
              <h3>Software Engineer · MadeLabs</h3>
              <ul>
                <li>
                  <p>
                    · Software development in the financial tech space using
                    React w/Redux and a Java backend. 
                  </p>
                </li>
                <li>
                  <p>
                    · Worked on different features and bug fixes for a large 20+
                    year old codebase.
                  </p>
                </li>
                <li>
                  <p>· Experience with Jenkins, IntelliJ, DBeaver and more.</p>
                </li>
                <li>
                  <p>· Also worked on internal projects using React & C#.</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.experienceWrapper}>
            <div className={styles.time}>
              <header>Apr &apos;21 - Oct &apos;22</header>
            </div>
            <div className={styles.info}>
              <h3>Software Engineer · Foundry Interactive</h3>
              <ul>
                <li>
                  <p>
                    · Software development using React, Typescript, Vite, Redux,
                    Node.js, Express, Docker, Heroku, Postgress and more.
                  </p>
                </li>
                <li>
                  <p>
                    · Assisted a start-up in the medical / health & beauty space
                    launch an e-commerce website from the ground up.
                  </p>
                </li>
                <li>
                  <p>
                    · Built React components / pages focused on scalability by
                    utilizing a headless CMS.
                  </p>
                </li>
                <li>
                  <p>
                    · Wrote unit and e2e tests using React Testing Library,
                    Jest/Supertest as well as Playwright.
                  </p>
                </li>
                <li>
                  <p>
                    · Used wire framing tools such as Figma to meet UX / UI
                    schema acceptance criteria.
                  </p>
                </li>
                <li>
                  <p>
                    · Assisted in development of open-source software for a
                    medical company.
                  </p>
                </li>
                <li>
                  <p>
                    · Took lead on migration to new Email Service Provider
                    (ESP).
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

Resume.propTypes = {
  className: PropTypes.string,
};

Resume.defaultProps = {
  className: "",
};

export default Resume;
