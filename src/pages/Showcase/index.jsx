import React, { useRef, useState } from "react";
import styles from "./showcase.module.css";
import { Card } from "../../components/Showcase";
import { image } from "../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Showcase = (props) => {
  const listCard = [
    {
      header: "modern interior",
      sub: "Lorem ipsum dolor sit amet consectetur. Volutpat urna viverra nisi pulvinar posuere sed id. Tortor purus bibendum et ",
      img: `${image.imgShowcase}`,
    },
    {
      header: "Interactive virtual reality glasses",
      sub: "Lorem ipsum dolor sit amet consectetur. Volutpat urna viverra nisi pulvinar posuere sed id. Tortor purus bibendum et ",
      img: `${image.imgShowcase_2}`,
    },
    {
      header: "Interactive virtual reality glasses",
      sub: "Lorem ipsum dolor sit amet consectetur. Volutpat urna viverra nisi pulvinar posuere sed id. Tortor purus bibendum et ",
      img: `${image.imgShowcase_3}`,
    },
    {
      header: "modern interior",
      sub: "Lorem ipsum dolor sit amet consectetur. Volutpat urna viverra nisi pulvinar posuere sed id. Tortor purus bibendum et ",
      img: `${image.imgShowcase}`,
    },
    {
      header: "modern interior",
      sub: "Lorem ipsum dolor sit amet consectetur. Volutpat urna viverra nisi pulvinar posuere sed id. Tortor purus bibendum et ",
      img: `${image.imgShowcase}`,
    },
  ];

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
    <section className={styles.container}>
      <h1 className={styles.header}>show case</h1>
      <div className={styles.content}>
        <div className={styles.navigation}>
          {listCard.map((card, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)}
              style={{ opacity: index === currentSlide ? "1" : "0.6" }}
            >
              {`0${index + 1}`}
            </button>
          ))}
        </div>

        <div className={styles.carousel_container}>
          <Slider ref={sliderRef} {...settings} style={{ height: "100%" }}>
            {listCard.map((card, index) => (
              <div key={index} className={styles.carousel_card}>
                <Card
                  header={card.header}
                  sub={card.sub}
                  img={card.img}
                  isSelect={index === currentSlide}
                  isOld={index === currentSlide - 1}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
