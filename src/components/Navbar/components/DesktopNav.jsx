import React from "react";
import styles from "./DesktopNav.module.css";
import navLinks from "../index.data";
import { ThemeContext } from "../../../App";
import classNames from "class-names";
import ThemeToggle from "./ThemeToggle";
import { string } from "prop-types";

const DesktopNav = ({ className }) => {
  const {
    _currentValue: { theme },
  } = ThemeContext;

  return (
    <div className={classNames(styles.desktopNav, className)}>
      <div
        className={classNames(
          styles.navLinks,
          theme === "dark" && styles.darkNav
        )}
      >
        <ul>
          {navLinks.map(({ text, href }) => (
            <li key={href}>
              <a key={text} href={href}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ThemeToggle />
    </div>
  );
};

DesktopNav.propTypes = {
  className: string,
};

DesktopNav.defaultProps = {
  className: "",
};

export default DesktopNav;
