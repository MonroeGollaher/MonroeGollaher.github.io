import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
// import PhotoGallery from "../../components/PhotoGallery";
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

  const fetchFileNames = async () => {
    try {
      const command = new ListObjectsV2Command({ Bucket: bucketName });
      const response = await s3.send(command);
      const names = response.Contents?.map((item) => item.Key) || [];
      setFileNames(names);
    } catch (error) {
      console.error("Error fetching file names:", error);
    }
  };

  useEffect(() => {
    fetchFileNames();
  }, []);
  console.log(fileNames);

  return (
    <section className={styles.wrapper}>
      <h1>Photo Gallery</h1>
      {/* <PhotoGallery /> */}
    </section>
  );
};
