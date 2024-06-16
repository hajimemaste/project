import React, { useRef, useState } from "react";
import styles from "./product.module.css";
import { icon } from "../../assets/svgs";
import { Card_1, Card_2, Card_3, Card_4 } from "../../components/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = (props) => {
  const listCard = [<Card_1 />, <Card_2 />, <Card_3 />, <Card_4 />, <Card_1 />];
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentOldSlide, setCurrentOldSlide] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
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
            {`0${index + 1}`}
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
          {listCard.map((card, index) => (
            <div key={index} className={styles.carousel_card}>
              {card}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
