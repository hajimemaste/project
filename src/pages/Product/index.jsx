import React, { useRef, useState } from "react";
import styles from "./product.module.css";
import { icon } from "../../assets/svgs";
import { image } from "../../assets/images";
import { Card, ContentCard } from "../../components/Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = (props) => {
  const listCard = [
    {
      id: 1,
      header_1: (
        <h1>
          The <span>Best 3D</span> Sales Application
        </h1>
      ),
      header_2: "for Real Estate is Here",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sapien fames odio vel vulputate. Interdum eu lectus eget orci risus. Lacus s",
      feat_1: "Interact",
      feat_2: "Realtime",
    },
    {
      id: 2,
      header_1: <h1>Simulate the basic operation</h1>,
      header_2: "of devices",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sapien fames odio vel vulputate. Interdum eu lectus eget orci risus. Lacus s",
      feat_1: "Interact",
      feat_2: "Realtime",
    },
    {
      id: 3,
      header_1: <h1>Visit and interact with</h1>,
      header_2: "3D models using VR",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sapien fames odio vel vulputate. Interdum eu lectus eget orci risus. Lacus s",
      feat_1: "Interact",
      feat_2: "Realtime",
    },
    {
      id: 4,
      header_1: <h1>Illustrate the development</h1>,
      header_2: " process of builders or cities",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sapien fames odio vel vulputate. Interdum eu lectus eget orci risus. Lacus s",
      feat_1: "Realtime",
      feat_2: "PRALLAX",
    },

    {
      id: 5,
      header_1: (
        <h1>
          The <span>Best 3D</span> Sales Application
        </h1>
      ),
      header_2: "for Real Estate is Here",
      content:
        "Lorem ipsum dolor sit amet consectetur. Sapien fames odio vel vulputate. Interdum eu lectus eget orci risus. Lacus s",
      feat_1: "Interact",
      feat_2: "Realtime",
    },
  ];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(4);
  const [currentOldSlide, setCurrentOldSlide] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 3000,
    initialSlide: listCard.length - 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex),
        newIndex === currentSlide
          ? setCurrentSlide(newIndex)
          : setCurrentOldSlide(oldIndex);
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {listCard.map((card, index) => (
          <button
            key={index}
            className={styles.dot}
            onClick={() => sliderRef.current.slickGoTo(index)}
            style={{ opacity: index === currentSlide ? "1" : "0.6" }}
          >
            {`0${listCard.length - index}`}
          </button>
        ))}
      </div>

      <div className={styles.btn_arrow}>
        <button className={styles.arrow_left}>
          <icon.ArrowLeftIcon />
        </button>
        <button className={styles.arrow_right}>
          <icon.ArrowRightIcon />
        </button>
      </div>
      <button className={styles.btn}>PRE ORDER</button>

      <div className={styles.carousel_container}>
        <Slider ref={sliderRef} {...settings} style={{ height: "100%" }}>
          {listCard.map((item, index) => {
            return (
              <div key={index} className={styles.carousel_card}>
                <Card
                  header_1={item.header_1}
                  header_2={item.header_2}
                  background={item.background}
                  id={item.id}
                  isSelect={index === currentSlide}
                  isOld={index === currentSlide + 1}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {listCard.map((item, index) => {
        return (
          <div className={styles.content} key={index}>
            {currentSlide === index && (
              <ContentCard
                id={currentSlide + 1}
                content={item.content}
                feat_1={item.feat_1}
                feat_2={item.feat_2}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Product;
