import { string } from "prop-types";
import React from "react";

const Project = ({ title, blurb }) => {
  console.log("hello from projects");
  return (
    <div>
      <h2>{title}</h2>
      <p>{blurb}</p>
    </div>
  );
};

Project.propTypes = {
  title: string,
  blurb: string,
};

Project.defaultProps = {
  title: "",
  blurb: "",
};

export default Project;
