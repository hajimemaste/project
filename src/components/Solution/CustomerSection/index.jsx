import React, { useState, useEffect } from "react";
import styles from "./customerSection.module.css";
import { image } from "../../../assets/images";
import Card from "./Card";
import useScrollEffect from "./useScrollEffect";

const CustomerSection = (props) => {
  const customers = [
    {
      avatar: `${image.customer_1}`,
      name: "Cameron Williamson",
      job: "Barone LLC.",
    },
    {
      avatar: `${image.customer_2}`,
      name: "Jerome Bell",
      job: "Binford Ltd.",
    },
    {
      avatar: `${image.customer_3}`,
      name: "Kristin Watson",
      job: "Barone LLC.",
    },
    {
      avatar: `${image.customer_4}`,
      name: "Courtney Henry",
      job: "Biffco Enterprises Ltd.",
    },
    {
      avatar: `${image.customer_5}`,
      name: "Floyd Miles",
      job: "Abstergo Ltd.",
    },
  ];

  const { scrolled, scrolledClose, sectionRef } = useScrollEffect();

  return (
    <div
      className={`${styles.container} ${
        scrolledClose ? styles.action_close_opacity : styles.action_open_opacity
      }`}
      ref={sectionRef}
    >
      <div
        className={`${styles.header} ${
          scrolled ? styles.action_up : styles.action_up_close
        }`}
      >
        <h1> What do customers say about us?</h1>
        <p className={styles.sub}>
          Lorem ipsum dolor sit amet consectetur. Sit in eget arcu ac aenean
          purus. Cras sagittis sit faucibus convallis tincidunt urna pharetra
          ut. Augue fringilla urna ornare quis laoreet amet cras sed ut.
        </p>
      </div>

      <div className={styles.content}>
        {customers.map((customer, index) => (
          <div
            key={index}
            className={`${
              index % 2 !== 0
                ? scrolledClose
                  ? styles.action_upImg
                  : styles.action_upImg_close
                : null
            } ${
              index % 2 === 0
                ? scrolled
                  ? styles.action_opacity
                  : styles.action_opacity_close
                : null
            }`}
          >
            <Card
              avatar={customer.avatar}
              name={customer.name}
              job={customer.job}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSection;
