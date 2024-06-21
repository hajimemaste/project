import React, { useState, useEffect } from "react";
import styles from "./introSection.module.css";
import { icon } from "../../../assets/svgs";

import useScrollEffect from "./useScrollEffect";

const IntroSection = (props) => {
  const { scrolled, sectionRef } = useScrollEffect();

  return (
    <div className={styles.container} ref={sectionRef}>
      <h1 className={styles.header}>Lorem ipsum dolor sit amet consectetur.</h1>
      <div
        className={`${styles.content} ${
          !scrolled ? styles.action_up : styles.action_up_close
        }`}
      >
        <p className={styles.sub}>
          The results we achieve make a difference to the company. We hope we
          can also be solutions for you when we work together
        </p>
        <div className={styles.box}>
          <button href="#">
            <p>Pre order</p>
            <icon.ArrowUpRightIcon />
          </button>
          <button href="#">
            <p>Pre order</p>
            <icon.ArrowUpRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
