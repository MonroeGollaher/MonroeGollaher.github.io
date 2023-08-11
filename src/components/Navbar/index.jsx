import React from "react";
import styles from "./index.module.css";
import navLinks from "./index.data";
import { ThemeContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const {
    _currentValue: { theme, setTheme },
  } = ThemeContext;

  return (
    <div className={styles.component}>
      <div className={styles.links}>
        {/* {navLinks.map(({ text, href }) => (
          <a key={text} href={href}>
            {text}
          </a>
        ))} */}
      </div>
      <div className={styles.themeToggle}>
        {theme === "light" ? (
          <FontAwesomeIcon
            icon={faMoon}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={styles.button}
            size="lg"
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={styles.button}
            size="lg"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
