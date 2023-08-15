import React from "react";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <>
      <DesktopNav className={styles.desktop} />
      <MobileNav className={styles.mobile} />
    </>
  );
};

export default Navbar;
