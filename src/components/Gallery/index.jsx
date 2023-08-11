import React, { useState } from "react";
import styles from "./index.module.css";
// import PropTypes from "prop-types";
import photoData from "./index.data";
import Image from "./components/Image";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  console.log("active: ", activeImage);

  return (
    <div className={styles.wrapper}>
      <h2>Photo Gallery</h2>
      <div className={styles.gallery}>
        {photoData.map(({ src, alt, id }) => (
          <Image
            src={src}
            alt={alt}
            key={id}
            onClick={() => setActiveImage(src)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
