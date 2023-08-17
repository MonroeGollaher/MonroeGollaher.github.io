import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "./components/ThemeToggle";
import { string } from "prop-types";
import { ThemeContext } from "../../App";
import classNames from "class-names";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navLinks from "./index.data";

const Navbar = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeIcon = (props) => (
    <svg
      className={styles.mobileOnly}
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

  // Disable scrolling while mobileMenu is open
  useLayoutEffect(() => {
    const originalScrollY = window.scrollY;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, originalScrollY);
    }

    return () => {
      document.body.style.overflow = "";
      window.scrollTo(0, originalScrollY);
    };
  }, [menuOpen]);

  return (
    <div className={classNames(styles.component, className)}>
      <div className={styles.menu}>
        {menuOpen ? (
          closeIcon()
        ) : (
          <FontAwesomeIcon
            className={styles.mobileOnly}
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

Navbar.propTypes = {
  className: string,
};

Navbar.defaultProps = {
  className: "",
};

export default Navbar;
