import React from "react";
import styles from "./introSection.module.css";
import { image } from "../../../assets/images";

const IntroSection = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>About us</h1>
        <h3>our missing</h3>
      </div>
      <div className={styles.img}>
        <img src={`${image.bgAboutUs}`} alt="" />
      </div>
      <div className={styles.content}>
        <h2>
          Since <br />
          <span>2022</span>
        </h2>
        <p>
          We are a global enterprise, with a mission to realize projects.
          Bringing our partners to prosperous development
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
