import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const Gallery = ({ images }) => {
  console.log("Image testing 2: ", images);

  return (
    <div className={styles.wrapper}>
      <h2>Photo Gallery</h2>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
};

Gallery.defaultProps = {
  images: [],
};

export default Gallery;
