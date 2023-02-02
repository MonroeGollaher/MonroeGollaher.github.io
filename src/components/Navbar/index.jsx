import { string } from "prop-types";
import React from "react";
import styles from "./index.module.css";

const Navbar = ({ title, links }) => (
  <div className={styles.component}>
    <h1>{title}</h1>
    {links.map(({ text, href }) => (
      <a href={href}>{text}</a>
    ))}
  </div>
);

Navbar.propTypes = {
  title: string,
  links: Array,
};

Navbar.defaultProps = {
  title: "",
  links: [{ text: "", href: "" }],
};

export default Navbar;
