import React from "react";
import styles from "./contentCard.module.css";
import { icon } from "../../../assets/svgs";

const ContentCard = ({ id, content, feat_1, feat_2, isSelect }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${isSelect && styles.action}`}>
        <div className={styles.box_line}>
          <div className={styles.dot}></div>
          <p>{feat_1}</p>
        </div>
        <div className={styles.box_line}>
          <div className={styles.dot}></div>
          <p>{feat_2}</p>
        </div>
      </div>
      <div
        className={`${styles.content} ${
          id == 2
            ? styles.content_2
            : id == 3
            ? styles.content_3
            : id == 4
            ? styles.content_4
            : styles.content_1
        } ${isSelect && styles.action}`}
      >
        <p className={styles.text}>{content}</p>
        <button className={styles.btn}>
          <p className={styles.btn_text}>Explore Details</p>
          <icon.ArrowUpRightIcon />
        </button>
        <div className={styles.content_box}></div>
      </div>
      <div className={`${styles.line} ${isSelect && styles.action_line}`}></div>
    </div>
  );
};

export default ContentCard;
