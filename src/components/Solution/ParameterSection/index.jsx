import React from "react";
import styles from "./parameterSection.module.css";

const ParameterSection = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_line}>
        <div className={styles.header}>
          <p className={styles.sub}>Lorem ipsum dolor sit amet consectetur.</p>
          <h1>Parameters that record breakthroughs</h1>
        </div>
        <div className={`${styles.box} ${styles.box_1}`}>
          <h1 className={styles.box_header}>9800</h1>
          <p className={styles.box_sub}>Customer access</p>
        </div>
        <div className={`${styles.box} ${styles.box_2}`}>
          <h1 className={styles.box_header}>88%</h1>
          <p className={styles.box_sub}>Bid security</p>
        </div>
      </div>
      <div className={styles.container_line}>
        <div className={`${styles.box} ${styles.box_3}`}>
          <h1 className={styles.box_header}>349</h1>
          <p className={styles.box_sub}>Project</p>
        </div>
        <div className={`${styles.box} ${styles.box_4}`}>
          <h1 className={styles.box_header}>506</h1>
          <p className={styles.box_sub}>Revenue</p>
        </div>
        <div className={styles.box_end}>
          <h1 className={styles.box_end_header}>100+</h1>
          <p className={styles.box_end_sub}>Customers worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default ParameterSection;
