import React from "react";
import styles from "./introSection.module.css";
import { icon } from "../../../assets/svgs";

const IntroSection = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Lorem ipsum dolor sit amet consectetur.</h1>
      <div className={styles.content}>
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
