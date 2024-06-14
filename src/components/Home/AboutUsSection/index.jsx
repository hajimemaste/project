import React from "react";
import { Btn } from "../../atoms";
import { icon } from "../../../assets/svgs";
import styles from "./aboutUsSection.module.css";

const AboutUsSection = (props) => {
  const { scrollToSection } = props;

  return (
    <div className={styles.container}>
      <div className={styles.screen}></div>
      <div className={styles.box}>
        <h1 className={styles.header}>
          Lorem ipsum dolor <br />
          sit amet <br />
          consectetur.
        </h1>
        <p className={styles.sub}>
          The cutting-edge Advanced Reality Tool revolutionizing real estate
          sales. Elevate
          <br />
          your listings with our interactive 3D experiences, customizable
          virtual tours, and <br />
          the latest visualization technology.
        </p>
        <Btn
          title="More about us"
          isIcon={true}
          icon={<icon.ArrowUpRightIcon />}
          backgroundcolor={"rgba(17, 17, 17, 1)"}
          color={"rgba(255, 255, 255, 1)"}
          border="linear-gradient(181.05deg, #FFD699 0.9%, rgba(0, 0, 0, 0.18) 110%)"
          size="16px 24px"
        />
      </div>
      <div className={styles.box_feature}>
        <div className={styles.line}></div>
        <div className={styles.list_item}>
          <button
            className={styles.scoll}
            onClick={() => scrollToSection("difference")}
          >
            <p>Scroll</p>
            <icon.ArrowDownIcon />
          </button>
          <div className={`${styles.item} ${styles.item_1}`}>
            <div className={styles.header_item}>Architecture</div>
            <h4 className={styles.content_item}>
              Lorem ipsum dolor sit amet <br />
              consectetur. Dolor egestas sagittis sit.
            </h4>
          </div>
          <div className={`${styles.item} ${styles.item_2}`}>
            <h4 className={styles.header_item}>Interior</h4>
            <p className={styles.content_item}>
              Lorem ipsum dolor sit amet <br />
              consectetur.
            </p>
          </div>
          <div className={`${styles.item} ${styles.item_3}`}>
            <h4 className={styles.header_item}>Interact</h4>
            <p className={styles.content_item}>
              Lorem ipsum dolor sit amet <br />
              consectetur. Magna quam ut congue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
