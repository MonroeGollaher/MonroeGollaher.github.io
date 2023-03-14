import React from "react";
import styles from "./index.module.css";

const Gallery = ({ images }) => {
  console.log("Image: ", images);

  return (
    <div className={styles.wrapper}>
      <h1>Photo Gallery</h1>
    </div>
  );
};

Gallery.propTypes = {
  images: Array,
};

Gallery.defaultProps = {
  images: [],
};

export default Gallery;
