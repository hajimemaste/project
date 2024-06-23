import React from "react";
import styles from "./card.module.css";

const Card = ({ isSelect, isOld, header_1, header_2, id }) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.header} ${isSelect ? styles.action : null} ${
          isOld ? styles.action_Old : null
        }`}
      >
        {header_1} <span className={styles.header_responsive}>{header_2}</span>
        <h1
          className={`${
            id === 3
              ? styles.header_bottom_3
              : id === 2
              ? styles.header_bottom_4
              : styles.header_bottom
          }`}
        >
          {header_2}
        </h1>
      </div>
      <div
        className={`${styles.img} ${
          id == 2
            ? styles.img_2
            : id == 3
            ? styles.img_3
            : id == 4
            ? styles.img_4
            : styles.img_1
        } ${isSelect ? styles.action : null} ${
          isOld ? styles.action_Old : null
        }`}
      ></div>
    </div>
  );
};

export default Card;
