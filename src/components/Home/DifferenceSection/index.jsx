import React from "react";
import { Btn, BoxDiff } from "../../atoms";
import { icon } from "../../../assets/svgs";
import styles from "./differenceSection.module.css";

const DifferenceSection = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.box_left}>
        <h2 className={styles.header}>
          We do things <span>differently</span>
        </h2>
        <div className={styles.img}></div>
      </div>
      <div className={styles.box_right}>
        <div className={styles.content}>
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
              Lorem ipsum dolor sit amet <br />
              consectetur. Pretium odio eu vehicula{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur. Pretium odio eu vehicula{" "}
            </p>
          </div>
        </div>
        <div className={styles.list_box}>
          <div className={styles.box}>
            <BoxDiff
              header="Creative"
              sub="Engaging, cross-platform applications for modern "
              icon={<icon.CreativeIcon />}
            />
            <BoxDiff
              header="Develop"
              sub="Lorem ipsum dolor sit amet consectetur. Sollicitudin "
              icon={<icon.DevelopIcon />}
            />
          </div>
          <div className={styles.box}>
            <BoxDiff
              header="Techical"
              sub="Lorem ipsum dolor sit amet consectetur. "
              icon={<icon.TechicalIcon />}
            />
            <BoxDiff
              header="Client driven"
              sub="Lorem ipsum dolor sit amet consectetur. Sollicitudin "
              icon={<icon.ClientDrivenIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;
