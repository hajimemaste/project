import React from "react";
import styles from "./card.module.css";

const Card = ({ header, sub, img, isSelect, isOld }) => {
  return (
    <div
      className={`${styles.card} ${isSelect ? null : styles.action} ${
        isOld ? styles.action_Old : null
      }`}
    >
      <h1>{header}</h1>
      <p>{sub}</p>
      <img src={img} alt="card" />
    </div>
  );
};

export default Card;
