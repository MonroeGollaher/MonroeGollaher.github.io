import { string } from "prop-types";
import React from "react";
import styles from "./index.module.css";

const Image = ({ src, alt }) => {
  console.log("Hello from Image Src: ", src);
  console.log("Hello from Image Alt: ", alt);

  return (
    <div className={styles.component}>
      <img src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  src: string,
  alt: string,
};

Image.defaultProps = {
  src: "",
  alt: "",
};
export default Image;
