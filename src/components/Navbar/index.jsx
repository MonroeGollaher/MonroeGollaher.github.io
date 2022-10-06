import { string } from 'prop-types';
import React from "react";
import { NavLink, NavTitle, NavWrapper } from "./styles";

const Navbar = ({ title, links }) => (
  <NavWrapper>
    <NavTitle>{title}</NavTitle>
    {links.map(({ text, href }) => (
      <NavLink href={href}>{text}</NavLink>
    ))}
  </NavWrapper>
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
