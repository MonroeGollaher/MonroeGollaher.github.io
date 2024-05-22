import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "./components/Image";
import photoData from "./index.data";

const PhotoGallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const bucketName = "monroesphotos";
  const region = "us-east-1";
  const baseUrl = `https://${bucketName}.s3.${region}.amazonaws.com/`;

  const imageFilenames = ["image1.jpg", "image2.png", "image3.gif"];
  const imageUrls = imageFilenames.map((filename) => `${baseUrl}${filename}`);
  console.log(imageUrls);

  return (
    <div className={styles.component}>
      {photoData.map(({ src, alt, id }) => (
        <Image
          src={src}
          alt={alt}
          key={id}
          onClick={() => setActiveImage(src)}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
