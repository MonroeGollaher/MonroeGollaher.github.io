import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    if (menuOpen) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else if (document.body.style.position === "fixed") {
      const scrollY = parseInt(document.body.style.top || "0") * -1;
      document.body.style.top = "";
      document.body.style.position = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
  }, [menuOpen]);

  useEffect(() => {
    const navbarHeight = document?.querySelector("#navbar")?.clientHeight;
    document.querySelector("#nav-items").style.top = `${navbarHeight}px`;
  });

  return (
    <div className={classNames(styles.component, className)} id="navbar">
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
          id="nav-items"
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
