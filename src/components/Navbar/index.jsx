import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.css";
import navLinks from "./index.data";

const Navbar = ({ title = "Monroe Gollaher", links = navLinks }) => (
  <div className={styles.component}>
    <h1>{title}</h1>
    {links.map(({ text, href }) => (
      <a key={text} href={href}>
        {text}
      </a>
    ))}
  </div>
);

Navbar.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};

Navbar.defaultProps = {
  title: "",
  links: [{ text: "", href: "" }],
};

export default Navbar;
