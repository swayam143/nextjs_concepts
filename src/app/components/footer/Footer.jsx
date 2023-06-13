import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container_img}>
        <Image src="/logo.png" fill={true} alt="logo" />{" "}
      </div>{" "}
      <div className={styles.container_img}>
        <Image
          src="https://images.pexels.com/photos/16944644/pexels-photo-16944644/free-photo-of-woman-walking-on-mountain-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="logo"
        />{" "}
      </div>
    </>
  );
};

export default Footer;
