import React from "react";
import styles from "./interactiveSection.module.css";
import { icon } from "../../../assets/svgs";
import { image } from "../../../assets/images";

const InteractiveSection = (props) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>Interactive products</h1>
      <div className={styles.content}>
        <div className={styles.content_left}>
          <div className={styles.icon_1}>
            <icon.IntIcon1 />
          </div>
          <div className={styles.icon_2}>
            <icon.IntIcon2 />
          </div>
          <div className={styles.icon_3}>
            <icon.IntIcon3 />
          </div>
          <div className={styles.icon_4}>
            <icon.IntIcon4 />
          </div>
          <div className={styles.icon_5}>
            <icon.IntIcon5 />
          </div>
          <div className={styles.icon_Arc}>
            <icon.ArcIcon />
          </div>
          <img src={image.imgExclude} alt="" className={styles.img} />
          <div className={`${styles.text_box_1} ${styles.text_box}`}>
            something
          </div>
          <div className={`${styles.text_box_2} ${styles.text_box}`}>
            something
          </div>
          <div className={`${styles.text_box_3} ${styles.text_box}`}>
            something
          </div>
        </div>
        <div className={styles.content_right}>
          <div className={styles.content_box}>
            <h2 className={styles.content_header}>All operating systems</h2>
            <p className={styles.content_sub}>
              Lorem ipsum dolor sit amet consectetur. Egestas nec elementum in
              ac ornare. Vitae in porta congue augue massa risus volutpat sed
              maecenas. Placerat a turpis
            </p>
          </div>
          <div className={styles.content_img}>
            <img src={image.imgInteractive} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;