import React, { useState } from "react";
import styles from "./MobileNav.module.css";
import navLinks from "../index.data";
import { ThemeContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "class-names";
import ThemeToggle from "./ThemeToggle";
import { string } from "prop-types";

const MobileNav = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeIcon = (props) => (
    <svg
      className={styles.button}
      viewBox="0 0 20 20"
      fill="currentColor"
      height="1em"
      width="1em"
      onClick={() => setMenuOpen(false)}
      {...props}
    >
      <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    </svg>
  );

  const {
    _currentValue: { theme },
  } = ThemeContext;

  return (
    <div className={classNames(styles.mobileNav, className)}>
      <div className={styles.menu}>
        {menuOpen ? (
          closeIcon()
        ) : (
          <FontAwesomeIcon
            className={styles.button}
            icon={faBars}
            size="lg"
            onClick={() => setMenuOpen(true)}
          />
        )}
        <div
          className={classNames(
            styles.nav,
            menuOpen && styles.navOpen,
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
      </div>
      <ThemeToggle />
    </div>
  );
};

MobileNav.propTypes = {
  className: string,
};

MobileNav.defaultProps = {
  className: "",
};

export default MobileNav;
