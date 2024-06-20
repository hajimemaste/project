import React, { useState, useEffect } from "react";
import { image } from "../../assets/images";
import { InputText, Btn } from "../atoms";
import styles from "./callToAction.module.css";

const CallToAction = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const scrollFromBottom = totalHeight - scrollPosition - viewportHeight;

      const scrollThreshold = viewportHeight - 500;

      if (scrollFromBottom <= scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.cta} ${
        scrolled ? styles.action_opacity : styles.action_opacity_close
      }`}
    >
      <div
        className={`${styles.box} ${
          scrolled ? styles.action_up : styles.action_up_close
        }`}
      >
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
