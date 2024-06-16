import React from "react";
import styles from "./card.module.css";
import { icon } from "../../../../assets/svgs";

const Card = ({ avatar, name, job }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${avatar})` }}>
      <div className={styles.infomation}>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className={styles.box}>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.job}>{job}</p>
        </div>
      </div>
      <button className={styles.btn_play}>
        <icon.PlayIcon />
      </button>
    </div>
  );
};

export default Card;
