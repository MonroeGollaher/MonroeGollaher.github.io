import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { string } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ThemeToggle = ({ className }) => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className={className}>
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSun} onClick={toggleTheme} size="lg" />
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
