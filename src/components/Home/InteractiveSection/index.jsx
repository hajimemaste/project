import React, { useState } from "react";
import { icon } from "../../../assets/svgs";
import { image } from "../../../assets/images";
import useScrollEffect from "./useScrollEffect";

import styles from "./styles/interactiveSection.module.css";
import animation from "./styles/animation.module.css";

const InteractiveSection = (props) => {
  const listInteractive = [
    {
      header: "All operating systems",
      sub: " Lorem ipsum dolor sit amet consectetur. Egestas nec elementum in ac ornare. Vitae in porta congue augue massa risus volutpat sed maecenas. Placerat a turpis",
      img: image.imgInteractive,
    },
    {
      header: "All operating systems",
      sub: " Lorem ipsum dolor sit amet consectetur. Egestas nec elementum in ac ornare. Vitae in porta congue augue massa risus volutpat sed maecenas. Placerat a turpis",
      img: image.imgInteractive,
    },
    {
      header: "All operating systems",
      sub: " Lorem ipsum dolor sit amet consectetur. Egestas nec elementum in ac ornare. Vitae in porta congue augue massa risus volutpat sed maecenas. Placerat a turpis",
      img: image.imgInteractive,
    },
    {
      header: "All operating systems",
      sub: " Lorem ipsum dolor sit amet consectetur. Egestas nec elementum in ac ornare. Vitae in porta congue augue massa risus volutpat sed maecenas. Placerat a turpis",
      img: image.imgInteractive,
    },
    {
      header: "All operating systems",
      sub: " Lorem ipsum dolor sit amet consectetur. Egestas nec elementum in ac ornare. Vitae in porta congue augue massa risus volutpat sed maecenas. Placerat a turpis",
      img: image.imgInteractive,
    },
  ];

  const { scrolled, scrolledHeader, sectionRef } = useScrollEffect();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (activeIndex != index) {
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.container} ref={sectionRef}>
      <h1
        className={`${styles.header} ${
          scrolledHeader
            ? animation.action_opacity
            : animation.action_opacity_close
        }`}
      >
        Interactive products
      </h1>
      <div className={styles.content}>
        <div className={styles.content_left}>
          <div
            className={`${styles.content_button} ${
              scrolled ? animation.action_left : animation.action_left_close
            }`}
          >
            <button
              className={`${styles.icon_1} ${
                activeIndex === 0 ? styles.select_icon : null
              }`}
              onClick={() => handleClick(0)}
            >
              <icon.IntIcon1 />
            </button>
            <button
              className={`${styles.icon_2} ${
                activeIndex === 1 ? styles.select_icon : null
              }`}
              onClick={() => handleClick(1)}
            >
              <icon.IntIcon2 />
            </button>
            <button
              className={`${styles.icon_3} ${
                activeIndex === 2 ? styles.select_icon : null
              }`}
              onClick={() => handleClick(2)}
            >
              <icon.IntIcon3 />
            </button>
            <button
              className={`${styles.icon_4} ${
                activeIndex === 3 ? styles.select_icon : null
              }`}
              onClick={() => handleClick(3)}
            >
              <icon.IntIcon4 />
            </button>
            <button
              className={`${styles.icon_5} ${
                activeIndex === 4 ? styles.select_icon : null
              }`}
              onClick={() => handleClick(4)}
            >
              <icon.IntIcon5 />
            </button>
          </div>
          <div
            className={
              scrolled ? animation.action_zoom : animation.action_zoom_close
            }
          >
            <div className={styles.icon_Arc}>
              <icon.ArcIcon />
            </div>
            <img src={image.imgExclude} alt="" className={styles.img} />
            <div className={`${styles.text_box_1} ${styles.text_box}`}>
              something
            </div>
            <div className={`${styles.text_box_2} ${styles.text_box}`}>
              something
            </div>
            <div className={`${styles.text_box_3} ${styles.text_box}`}>
              something
            </div>
          </div>
        </div>

        <div
          className={
            scrolled ? animation.action_left : animation.action_left_close
          }
        >
          {listInteractive.map((item, index) =>
            activeIndex === index ? (
              <div
                className={`${styles.content_right} ${animation.action_opacity}`}
                key={index}
              >
                <div className={styles.content_box}>
                  <h2 className={styles.content_header}>{item.header}</h2>
                  <p className={styles.content_sub}>{item.sub}</p>
                </div>
                <div className={styles.content_img}>
                  <img src={item.img} alt="" />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveSection;
