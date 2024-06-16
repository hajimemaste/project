import React from "react";
import styles from "./card.module.css";
import { icon } from "../../../assets/svgs";

const Card_2 = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>Illustrate the development</h1>
        <h1 style={{ textAlign: "right" }}> process of builders or citiese</h1>
      </div>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <div className={styles.box_line}>
          <div className={styles.dot}></div>
          <p>realtime</p>
        </div>
        <div className={styles.box_line}>
          <div className={styles.dot}></div>
          <p>PRALLAX</p>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Sapien fames odio vel
          vulputate. Interdum eu lectus eget orci risus. Lacus s
        </p>
        <button className={styles.btn}>
          <p className={styles.btn_text}>Explore Details</p>
          <icon.ArrowUpRightIcon />
        </button>
        <div className={styles.content_box}></div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default Card_2;
