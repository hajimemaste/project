import React from "react";
import { icon } from "../../../assets/svgs";
import styles from "./footerTop.module.css";

const FooterTop = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container_top}>
      <h2 className={styles.header}>
        <span>Contact us</span> to create cool things together
      </h2>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.browse}>
            <p>Browse</p>
            <div className={styles.list_browse}>
              <a href="/aboutus">About us</a>
              <a href="#">Project</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className={styles.contact}>
            <p>Contact</p>
            <div className={styles.content_contact}>
              <p>xxxxxxxx@gmail.com</p>
              <p>+84368097570</p>
            </div>
          </div>
        </div>
        <button className={styles.btn_scoll} onClick={scrollToTop}>
          <icon.ArrowUpIcon />
        </button>
      </div>
    </div>
  );
};

export default FooterTop;
