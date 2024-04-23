import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { string } from "prop-types";
import React from "react";
import { ThemeContext } from "../../../App";

const ThemeToggle = ({ className }) => {
  const {
    _currentValue: { theme, setTheme },
  } = ThemeContext;

  return (
    <div className={className}>
      {theme === "light" ? (
        <FontAwesomeIcon
          icon={faMoon}
          onClick={() => setTheme("dark")}
          size="lg"
        />
      ) : (
        <FontAwesomeIcon
          icon={faSun}
          onClick={() => setTheme("light")}
          size="lg"
        />
      )}
    </div>
  );
};

ThemeToggle.propTypes = {
  className: string,
};

ThemeToggle.defaultProps = {
  className: "",
};

export default ThemeToggle;
