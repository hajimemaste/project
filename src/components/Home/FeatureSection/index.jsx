import React, { useState, useEffect } from "react";
import { icon } from "../../../assets/svgs";
import { image } from "../../../assets/images";
import styles from "./featureSection.module.css";

const FeatureSection = (props) => {
  const listFeature = [
    {
      id: 1,
      header: "The Best 3D Sales Application for Real Estate is Here",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 2,
      header: "Illustrate the development process of builders or cities",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 3,
      header: "Visit and interact with 3D models using VR",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 4,
      header: "Simulate the basic operation of devices",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 5,
      header: "Web, Tradeshows & Interactive Showroom Experiences",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (index) => {
    if (activeIndex != index) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    function handleScroll() {
      const viewportHeight = window.innerHeight;

      const scrollThreshold = viewportHeight * 3 - 400;

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
    <div
      className={`${styles.container} ${
        scrolled ? styles.action_opacity_close : styles.action_opacity
      }`}
    >
      {listFeature.map((feature, index) => (
        <div
          className={styles.item}
          key={feature.id}
          style={feature.id === 5 ? { border: "none" } : null}
        >
          <div
            className={styles.header}
            onClick={() => {
              handleClick(index);
            }}
          >
            <p className={styles.id}>0{feature.id}</p>
            <h1>{feature.header}</h1>
            <icon.ArrowUpRightIcon />
          </div>
          <div
            className={`${styles.box_content} 
              ${activeIndex !== index ? styles.close : styles.open}`}
          >
            <p className={styles.content}>{feature.sub}</p>
            <div className={styles.list_img}>
              <div className={styles.img_1}>
                <img src={feature.img1} alt="" />
              </div>
              <div className={styles.img_2}>
                <img src={feature.img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
