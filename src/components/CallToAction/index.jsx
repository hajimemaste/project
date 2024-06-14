import React, { useState } from "react";
import { image } from "../../assets/images";
import { InputText, Btn } from "../atoms";
import styles from "./callToAction.module.css";

const CallToAction = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.content}>
          <h2 className={styles.header}>Get started with XXXXXXX</h2>
          <p className={styles.sub}>
            Lorem ipsum dolor sit amet consectetur. Lorem sit risus ante amet
            dignissim enim a. Eu a tellus.
          </p>
        </div>
        <div className={styles.form}>
          <InputText
            placeholder="Your mail here"
            value={inputValue}
            onChange={handleChange}
          />
          <Btn
            title="Get Started"
            size="12px 24px"
            backgroundcolor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
            color="rgba(255, 255, 255, 1)"
            border="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
          />
        </div>
      </div>
      <div className={styles.img}>
        <img src={image.backGrBottomCta} alt="bottomCta" />
      </div>
    </div>
  );
};

export default CallToAction;
