import React, { useState, useEffect } from "react";
import useScrollEffect from "./useScrollEffect";

import styles from "./styles/parameterSection.module.css";
import animation from "./styles/animation.module.css";

const ParameterSection = (props) => {
  const { scrolled, scrolledClose, sectionRef } = useScrollEffect();

  return (
    <div
      className={`${styles.container} ${
        scrolledClose ? animation.action_close : animation.action_open
      }`}
      ref={sectionRef}
    >
      <div className={styles.header_responsive}>
        <div className={styles.header_left}>
          <p className={styles.sub}>Lorem ipsum dolor sit amet consectetur.</p>
          <h1>Parameters that record breakthroughs</h1>
        </div>
        <div className={styles.box_end_right}>
          <h1 className={styles.box_end_header}>100+</h1>
          <p className={styles.box_end_sub}>Customers worldwide</p>
        </div>
      </div>
      <div className={styles.container_line}>
        <div className={styles.header}>
          <p className={styles.sub}>Lorem ipsum dolor sit amet consectetur.</p>
          <h1>Parameters that record breakthroughs</h1>
        </div>
        <div
          className={`${styles.box} ${styles.box_1} ${
            scrolled
              ? animation.action_background
              : animation.action_background_close
          }`}
          style={{ "--height": "90%" }}
        >
          <h1
            className={`${styles.box_header} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            9800
          </h1>
          <p
            className={`${styles.box_sub} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            Customer access
          </p>
        </div>
        <div
          className={`${styles.box} ${styles.box_2} ${
            scrolled
              ? animation.action_background
              : animation.action_background_close
          }`}
          style={{ "--height": "40%" }}
        >
          <h1
            className={`${styles.box_header} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            88%
          </h1>
          <p
            className={`${styles.box_sub} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            Bid security
          </p>
        </div>
      </div>
      <div className={styles.container_line}>
        <div
          className={`${styles.box} ${styles.box_3} ${
            scrolled
              ? animation.action_background
              : animation.action_background_close
          }`}
          style={{ "--height": "40%" }}
        >
          <h1
            className={`${styles.box_header} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            349
          </h1>
          <p
            className={`${styles.box_sub} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            Project
          </p>
        </div>
        <div
          className={`${styles.box} ${styles.box_4} ${
            scrolled
              ? animation.action_background
              : animation.action_background_close
          }`}
          style={{ "--height": "60%" }}
        >
          <h1
            className={`${styles.box_header} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            506
          </h1>
          <p
            className={`${styles.box_sub} ${
              scrolled
                ? animation.action_opacity
                : animation.action_opacity_close
            }`}
          >
            Revenue
          </p>
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
