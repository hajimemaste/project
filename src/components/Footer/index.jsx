import React from "react";
import styles from "./footer.module.css";

import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = (props) => {
  return (
    <section id={styles.footer}>
      <FooterTop />
      <FooterBottom />
    </section>
  );
};

export default Footer;
