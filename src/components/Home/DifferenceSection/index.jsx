import React, { useState, useEffect } from "react";
import { Btn, BoxDiff } from "../../atoms";
import { icon } from "../../../assets/svgs";
import styles from "./styles/differenceSection.module.css";
import animation from "./styles/animation.module.css";

import useScrollEffect from "./useScrollEffect";

const DifferenceSection = (props) => {
  const { scrolled, scrolledHeader, sectionRef } = useScrollEffect();

  return (
    <div className={styles.container} ref={sectionRef}>
      <div className={styles.box_left}>
        <h2
          className={`${styles.header} ${
            scrolledHeader
              ? animation.action_right
              : animation.action_right_close
          }`}
        >
          We do things <span>differently</span>
        </h2>
        <div
          className={`${styles.img} ${
            scrolled ? animation.action_right : animation.action_right_close
          }`}
        ></div>
      </div>
      <div className={styles.box_right}>
        <div
          className={`${styles.content} ${
            scrolledHeader ? animation.action_left : animation.action_left_close
          }`}
        >
          <Btn
            title="Explore details"
            isIcon={true}
            icon={<icon.ArrowUpRightIcon />}
            color={"rgba(255, 255, 255, 1)"}
            backgroundcolor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
            border="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
            size="16px 24px"
          />

          <div className={styles.sub}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pretium odio eu vehicula
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Pretium odio eu vehicula
            </p>
          </div>
        </div>
        <div className={styles.list_box}>
          <div className={styles.box}>
            <div
              className={
                scrolled ? animation.action_up : animation.action_up_close
              }
              style={{ "--value": "100px" }}
            >
              <BoxDiff
                header="Creative"
                sub="Engaging, cross-platform applications for modern "
                icon={<icon.CreativeIcon />}
              />
            </div>
            <div
              className={
                scrolled ? animation.action_up : animation.action_up_close
              }
              style={{ "--value": "150px" }}
            >
              <BoxDiff
                header="Develop"
                sub="Lorem ipsum dolor sit amet consectetur. Sollicitudin "
                icon={<icon.DevelopIcon />}
              />
            </div>
          </div>
          <div className={styles.box}>
            <div
              className={
                scrolled ? animation.action_up : animation.action_up_close
              }
              style={{ "--value": "200px" }}
            >
              <BoxDiff
                header="Techical"
                sub="Lorem ipsum dolor sit amet consectetur. "
                icon={<icon.TechicalIcon />}
              />
            </div>
            <div
              className={
                scrolled ? animation.action_up : animation.action_up_close
              }
              style={{ "--value": "250px" }}
            >
              <BoxDiff
                header="Client driven"
                sub="Lorem ipsum dolor sit amet consectetur. Sollicitudin "
                icon={<icon.ClientDrivenIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;
