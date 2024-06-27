import React, { useRef, useEffect } from "react";
import { Btn } from "../../atoms";
import { icon } from "../../../assets/svgs";
import useScrollEffect from "./useScrollEffect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles/aboutUsSection.module.css";
import animation from "./styles/animation.module.css";

const AboutUsSection = (props) => {
  const { scrolled, sectionRef } = useScrollEffect();
  const { scrollToSection } = props;
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    draggable: false,
    swipe: true,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [scrolled]);

  return (
    <div className={styles.container} ref={sectionRef}>
      <div className={styles.screen}></div>
      <div className={`${styles.content} ${scrolled && animation.close}`}>
        <div className={styles.box}>
          <h1 className={styles.header}>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className={styles.sub}>
            The cutting-edge Advanced Reality Tool revolutionizing real estate
            sales. Elevate
            <br />
            your listings with our interactive 3D experiences, customizable
            virtual tours, and <br />
            the latest visualization technology.
          </p>
          <Btn
            title="More about us"
            isIcon={true}
            className={styles.about_btn}
            icon={<icon.ArrowUpRightIcon />}
            backgroundcolor={"rgba(17, 17, 17, 1)"}
            color={"rgba(255, 255, 255, 1)"}
            border="linear-gradient(181.05deg, #FFD699 0.9%, rgba(0, 0, 0, 0.18) 110%)"
            size="16px 24px"
          />
        </div>
      </div>
      <div className={styles.box_feature}>
        <div className={styles.line}></div>
        <div className={styles.list_item}>
          <button
            className={`${styles.scoll} ${
              scrolled ? animation.action_close : animation.action
            }`}
            style={{ "--value": "100px" }}
            onClick={() => scrollToSection("difference")}
          >
            <p>Scroll</p>
            <icon.ArrowDownIcon />
          </button>
          <div
            className={`${styles.item} ${
              scrolled ? animation.action_close : animation.action
            }`}
            style={{ "--value": "150px" }}
          >
            <div className={styles.header_item}>Architecture</div>
            <h4 className={styles.content_item}>
              Lorem ipsum dolor sit amet <br />
              consectetur. Dolor egestas sagittis sit.
            </h4>
          </div>
          <div
            className={`${styles.item} ${
              scrolled ? animation.action_close : animation.action
            }`}
            style={{ "--value": "200px" }}
          >
            <h4 className={styles.header_item}>Interior</h4>
            <p className={styles.content_item}>
              Lorem ipsum dolor sit amet <br />
              consectetur.
            </p>
          </div>
          <div
            className={`${styles.item} ${
              scrolled ? animation.action_close : animation.action
            }`}
            style={{ "--value": "250px" }}
          >
            <h4 className={styles.header_item}>Interact</h4>
            <p className={styles.content_item}>
              Lorem ipsum dolor sit amet <br />
              consectetur. Magna quam ut congue.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.responsive}>
        <Slider ref={sliderRef} {...settings} style={{ height: "100%" }}>
          <div
            className={`${styles.content_res} ${scrolled && animation.close}`}
          >
            <button
              className={`${styles.arrow} ${styles.arrow_down}`}
              onClick={() => sliderRef.current.slickNext()}
            >
              <icon.ArrowDownIcon />
            </button>
            <div className={styles.box}>
              <h1 className={styles.header}>
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className={styles.sub}>
                The cutting-edge Advanced Reality Tool revolutionizing real
                estate sales. Elevate
                <br />
                your listings with our interactive 3D experiences, customizable
                virtual tours, and <br />
                the latest visualization technology.
              </p>
              <Btn
                title="More about us"
                isIcon={true}
                className={styles.about_btn}
                icon={<icon.ArrowUpRightIcon />}
                backgroundcolor={"rgba(17, 17, 17, 1)"}
                color={"rgba(255, 255, 255, 1)"}
                border="linear-gradient(181.05deg, #FFD699 0.9%, rgba(0, 0, 0, 0.18) 110%)"
                size="16px 24px"
              />
            </div>
          </div>
          <div className={styles.box_feature_res}>
            <div className={styles.line}></div>
            <button
              className={`${styles.arrow} ${styles.arrow_up}`}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <icon.ArrowUpIcon />
            </button>
            <div className={styles.list_item}>
              <button
                className={`${styles.scoll} ${
                  scrolled ? animation.action_close : animation.action
                }`}
                style={{ "--value": "100px" }}
                onClick={() => scrollToSection("difference")}
              >
                <p>Scroll</p>
                <icon.ArrowDownIcon />
              </button>
              <div
                className={`${styles.item} ${
                  scrolled ? animation.action_close : animation.action
                }`}
                style={{ "--value": "150px" }}
              >
                <div className={styles.header_item}>Architecture</div>
                <h4 className={styles.content_item}>
                  Lorem ipsum dolor sit amet consectetur. Dolor egestas sagittis
                  sit.
                </h4>
              </div>
              <div
                className={`${styles.item} ${
                  scrolled ? animation.action_close : animation.action
                }`}
                style={{ "--value": "200px" }}
              >
                <h4 className={styles.header_item}>Interior</h4>
                <p className={styles.content_item}>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div
                className={`${styles.item} ${
                  scrolled ? animation.action_close : animation.action
                }`}
                style={{ "--value": "250px" }}
              >
                <h4 className={styles.header_item}>Interact</h4>
                <p className={styles.content_item}>
                  Lorem ipsum dolor sit amet consectetur. Magna quam ut congue.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutUsSection;
