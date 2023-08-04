import { string, func } from "prop-types";
import React from "react";
import styles from "./index.module.css";

const GalleryImage = ({ src, alt, onClick }) => {
  return (
    <div className={styles.component}>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

GalleryImage.propTypes = {
  src: string.isRequired,
  alt: string,
  onClick: func,
};

GalleryImage.defaultProps = {
  src: "",
  alt: "",
  onClick: () => {},
};
export default GalleryImage;
