import React, { useEffect, useState } from "react";
import styles from "./procedureSection.module.css";

const ProcedureSection = (props) => {
  const [scrolledBg, setScrolledBg] = useState(false);
  const [scrolledHeader, setScrolledHeader] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const viewportHeight = window.innerHeight;

      const scrollThresholdHeader = 300;

      const scrollThreshold = 800;

      const scrollThresholdBg = viewportHeight + 200;

      const scrollPosition = window.scrollY;

      if (scrollPosition >= scrollThresholdHeader) {
        setScrolledHeader(true);
      } else {
        setScrolledHeader(false);
      }

      if (scrollPosition >= scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollPosition >= scrollThresholdBg) {
        setScrolledBg(true);
      } else {
        setScrolledBg(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${
        scrolledBg ? styles.action_background : styles.action_background_close
      }`}
    >
      <div className={styles.header}>
        <h1
          className={`${styles.header_text} ${
            scrolledHeader
              ? styles.action_header_start
              : styles.action_header_end
          }`}
        >
          Our product{" "}
          <span>
            receiving and <br />
            fulfillment process
          </span>
        </h1>
        <h2 className={styles.sub}>HOW IT WORK</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.line_1}>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? styles.action_down : styles.action_down_close
                }`}
              >
                <div className={styles.content_header}>
                  <p className={styles.content_id}>02</p>
                  <p>Lorem ipsum dolor sit consectetur.</p>
                </div>
                <p className={styles.content_sub}>
                  Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                  pretium egestas aenean pellentesque rhoncus elit. Non nisi
                  tincidunt sit odio in massa.
                </p>
              </div>

              <div className={`${styles.dot} ${styles.dot_2} `}></div>
              <div
                className={`${styles.box_line} ${
                  scrolled ? styles.action_border : styles.action_border_close
                } `}
              ></div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? styles.action_down : styles.action_down_close
                }`}
              >
                <div className={styles.content_header}>
                  <p className={styles.content_id}>04</p>
                  <p>Lorem ipsum dolor sit consectetur.</p>
                </div>
                <p className={styles.content_sub}>
                  Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                  pretium egestas aenean pellentesque rhoncus elit. Non nisi
                  tincidunt sit odio in massa.
                </p>
              </div>
              <div
                className={`${styles.dot} ${styles.dot_4} ${
                  scrolled ? styles.action_opacity : styles.action_opacity_close
                }`}
              ></div>
              <div
                className={`${styles.box_line} ${
                  scrolled ? styles.action_border : styles.action_border_close
                } `}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.line} ${
            scrolled ? styles.action_width : styles.action_width_close
          }`}
        ></div>
        <div className={styles.line_2}>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? styles.action_up : styles.action_up_close
                }`}
              >
                <div className={styles.content_header}>
                  <p className={styles.content_id}>01</p>
                  <p>Lorem ipsum dolor sit consectetur.</p>
                </div>
                <p className={styles.content_sub}>
                  Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                  pretium egestas aenean pellentesque rhoncus elit. Non nisi
                  tincidunt sit odio in massa.
                </p>
              </div>
              <div className={`${styles.dot} ${styles.dot_1} `}></div>
              <div
                className={`${styles.box_line_bottom} ${
                  scrolled ? styles.action_border : styles.action_border_close
                } `}
              ></div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? styles.action_up : styles.action_up_close
                }`}
              >
                <div className={styles.content_header}>
                  <p className={styles.content_id}>03</p>
                  <p>Lorem ipsum dolor sit consectetur.</p>
                </div>
                <p className={styles.content_sub}>
                  Lorem ipsum dolor sit amet consectetur. Ultricies convallis
                  pretium egestas aenean pellentesque rhoncus elit. Non nisi
                  tincidunt sit odio in massa.
                </p>
              </div>
              <div
                className={`${styles.dot} ${styles.dot_3} ${
                  scrolled ? styles.action_opacity : styles.action_opacity_close
                }`}
              ></div>
              <div
                className={`${styles.box_line_bottom} ${
                  scrolled ? styles.action_border : styles.action_border_close
                } `}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureSection;
