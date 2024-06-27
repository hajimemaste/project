import React, { useEffect, useState } from "react";
import useScrollEffect from "./useScrollEffect";

import styles from "./styles/procedureSection.module.css";
import animation from "./styles/animation.module.css";

const ProcedureSection = (props) => {
  const { scrolled, scrolledHeader, scrolledClose, sectionRef } =
    useScrollEffect();

  return (
    <div
      className={`${styles.container} ${
        scrolledClose
          ? animation.action_background
          : animation.action_background_close
      }`}
      ref={sectionRef}
    >
      <div className={styles.header}>
        <h1
          className={`${styles.header_text} ${
            scrolledHeader
              ? animation.action_header_start
              : animation.action_header_end
          }`}
        >
          Our product <span>receiving and fulfillment process</span>
        </h1>
        <h2 className={styles.sub}>HOW IT WORK</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.line_1}>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? animation.action_down : animation.action_down_close
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
                  scrolled
                    ? animation.action_border
                    : animation.action_border_close
                } `}
              ></div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? animation.action_down : animation.action_down_close
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
                  scrolled
                    ? animation.action_opacity
                    : animation.action_opacity_close
                }`}
              ></div>
              <div
                className={`${styles.box_line} ${
                  scrolled
                    ? animation.action_border
                    : animation.action_border_close
                } `}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.line} ${
            scrolled ? animation.action_width : animation.action_width_close
          }`}
        ></div>
        <div className={styles.line_2}>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? animation.action_up : animation.action_up_close
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
                  scrolled
                    ? animation.action_border
                    : animation.action_border_close
                } `}
              ></div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <div
                className={`${styles.container_content} ${
                  scrolled ? animation.action_up : animation.action_up_close
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
                  scrolled
                    ? animation.action_opacity
                    : animation.action_opacity_close
                }`}
              ></div>
              <div
                className={`${styles.box_line_bottom} ${
                  scrolled
                    ? animation.action_border
                    : animation.action_border_close
                } `}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content_responsive}>
        <div
          className={`${styles.line} ${
            scrolled ? animation.action_width : animation.action_width_close
          }`}
        ></div>

        <div className={styles.box}>
          <div className={styles.box_content}>
            <div
              className={`${styles.container_content} ${
                scrolled ? animation.action_up : animation.action_up_close
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
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.box_content}>
            <div
              className={`${styles.container_content} ${
                scrolled ? animation.action_down : animation.action_down_close
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

            <div className={`${styles.dot} ${styles.dot_1} `}></div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.box_content}>
            <div
              className={`${styles.container_content} ${
                scrolled ? animation.action_up : animation.action_up_close
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
              className={`${styles.dot} ${styles.dot_1} ${
                scrolled
                  ? animation.action_opacity
                  : animation.action_opacity_close
              }`}
            ></div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.box_content}>
            <div
              className={`${styles.container_content} ${
                scrolled ? animation.action_down : animation.action_down_close
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
              className={`${styles.dot} ${styles.dot_1} ${
                scrolled
                  ? animation.action_opacity
                  : animation.action_opacity_close
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureSection;
