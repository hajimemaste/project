import React from "react";
import styles from "./footerBottom.module.css";
import { icon } from "../../../assets/svgs";

const FooterBottom = (props) => {
  return (
    <div className={styles.container_bottom}>
      <div className={styles.list_icon}>
        <a href="#">
          <icon.FacebookIcon />
        </a>
        <a href="#">
          <icon.InstagramIcon />
        </a>
        <a href="#">
          <icon.TwitterIcon />
        </a>
        <a href="#">
          <icon.LinkedInIcon />
        </a>
      </div>
      <div className={styles.content}>
        <p>© 2024 xxxxxxxxx. All rights reserved</p>
        <div className={styles.text}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
