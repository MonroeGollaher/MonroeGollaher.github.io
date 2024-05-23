import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export const GalleryPage = () => {
  const [fileNames, setFileNames] = useState([]);
  const bucketName = "monroesphotos";

  const s3 = new S3Client({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    },
  });

  const randomizeImages = (array) => {
    array.forEach((_, i) => {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    });
    return array;
  };

  const fetchFileNames = async () => {
    try {
      const command = new ListObjectsV2Command({ Bucket: bucketName });
      const response = await s3.send(command);
      let names = response.Contents?.map((item) => item.Key) || [];
      names = randomizeImages(names);
      setFileNames(names);
    } catch (error) {
      console.error("Error fetching file names:", error);
    }
  };

  useEffect(() => {
    fetchFileNames();
  }, []);
  return (
    <section className={styles.wrapper}>
      <h1>Photo Gallery</h1>
      <div className={styles.gallery}>
        {fileNames.map((fileName, index) => (
          <img
            key={fileName}
            src={`https://${bucketName}.s3.amazonaws.com/${fileName}`}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </section>
  );
};
