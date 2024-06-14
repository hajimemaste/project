import React from "react";
import styles from "./boxDiff.module.css";

const BoxDiff = (props) => {
  const { header, sub, icon } = props;

  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h1>{header}</h1>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default BoxDiff;
