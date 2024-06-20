import React, { useState, useEffect } from "react";
import styles from "./introSection.module.css";
import { icon } from "../../../assets/svgs";

const IntroSection = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const viewportHeight = window.innerHeight;

      const scrollThreshold = 500;

      const scrollPosition = window.scrollY;

      if (scrollPosition >= scrollThreshold) {
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
    <div className={styles.container}>
      <h1 className={styles.header}>Lorem ipsum dolor sit amet consectetur.</h1>
      <div
        className={`${styles.content} ${
          !scrolled ? styles.action_up : styles.action_up_close
        }`}
      >
        <p className={styles.sub}>
          The results we achieve make a difference to the company. We hope we
          can also be solutions for you when we work together
        </p>
        <div className={styles.box}>
          <button href="#">
            <p>Pre order</p>
            <icon.ArrowUpRightIcon />
          </button>
          <button href="#">
            <p>Pre order</p>
            <icon.ArrowUpRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
