import React, { useState } from "react";
import styles from "./showcaseSection.module.css";
import { icon } from "../../../assets/svgs";
import { image } from "../../../assets/images";
import useScrollEffect from "./useScrollEffect";

const ShowcaseSection = (props) => {
  const slides = [
    {
      header: "Lorem ipsum dolor sit amet consectetur. ",
      sub: "Lorem ipsum dolor sit amet consectetur. Arcu risus interdum dictum ut amet mauris.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Leo faucibus ac at adipiscing sagittis aliquam vivamus quis. Commodo pellentesque tellus duis auctor leo aliquam. Urna nunc dictum dignissim volutpat nulla feugiat interdum sed at. At convallis mattis metus eu lorem. Nulla consequat aenean suspendisse eget. Morbi massa cursus ",
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur. ",
      sub: "Lorem ipsum dolor sit amet consectetur. Arcu risus interdum dictum ut amet mauris.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Leo faucibus ac at adipiscing sagittis aliquam vivamus quis. Commodo pellentesque tellus duis auctor leo aliquam. Urna nunc dictum dignissim volutpat nulla feugiat interdum sed at. At convallis mattis metus eu lorem. Nulla consequat aenean suspendisse eget. Morbi massa cursus ",
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur. ",
      sub: "Lorem ipsum dolor sit amet consectetur. Arcu risus interdum dictum ut amet mauris.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Leo faucibus ac at adipiscing sagittis aliquam vivamus quis. Commodo pellentesque tellus duis auctor leo aliquam. Urna nunc dictum dignissim volutpat nulla feugiat interdum sed at. At convallis mattis metus eu lorem. Nulla consequat aenean suspendisse eget. Morbi massa cursus ",
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur. ",
      sub: "Lorem ipsum dolor sit amet consectetur. Arcu risus interdum dictum ut amet mauris.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Leo faucibus ac at adipiscing sagittis aliquam vivamus quis. Commodo pellentesque tellus duis auctor leo aliquam. Urna nunc dictum dignissim volutpat nulla feugiat interdum sed at. At convallis mattis metus eu lorem. Nulla consequat aenean suspendisse eget. Morbi massa cursus ",
    },
    {
      header: "Lorem ipsum dolor sit amet consectetur. ",
      sub: "Lorem ipsum dolor sit amet consectetur. Arcu risus interdum dictum ut amet mauris.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Leo faucibus ac at adipiscing sagittis aliquam vivamus quis. Commodo pellentesque tellus duis auctor leo aliquam. Urna nunc dictum dignissim volutpat nulla feugiat interdum sed at. At convallis mattis metus eu lorem. Nulla consequat aenean suspendisse eget. Morbi massa cursus ",
    },
  ];

  const { scrolled, scrolledHeader, sectionRef } = useScrollEffect();

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.container} ref={sectionRef}>
      <h1
        className={`${styles.header} ${
          scrolledHeader ? styles.action_opacity : styles.action_opacity_close
        }`}
      >
        Show case
      </h1>
      <div className={styles.content}>
        <div
          className={`${styles.slider} ${
            scrolled ? styles.action_right : styles.action_right_close
          }`}
        >
          <div className={styles.card}>
            <div className={styles.card_header}>
              <h2>{slides[currentIndex].header}</h2>
              <p>{slides[currentIndex].sub}</p>
            </div>
            <div className={styles.line}></div>
            <p className={styles.card_content}>
              {slides[currentIndex].content}
            </p>
          </div>
          <div className={styles.navigator}>
            <button onClick={goToPrevious}>
              <icon.ArrowLeftIcon />
            </button>
            {slides.map((slide, index) => (
              <button
                onClick={() => goToIndex(index)}
                className={styles.dot}
                style={
                  index === currentIndex
                    ? { backgroundColor: "rgba(255, 255, 255)" }
                    : null
                }
                key={index}
              ></button>
            ))}
            <button onClick={goToNext}>
              <icon.ArrowRightIcon />
            </button>
          </div>
        </div>
        <div
          className={`${styles.content_img} ${
            scrolled ? styles.action_zoom : styles.action_zoom_close
          }`}
        >
          <img src={image.bgShowcase} alt="" className={styles.bgShowcase} />
          <img src={image.imgLaptop} alt="" className={styles.imgLaptop} />
          <div className={styles.content_gif}>
            <img src={image.imgShowcase} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
