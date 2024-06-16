import React from "react";
import styles from "./customerSection.module.css";
import { image } from "../../../assets/images";
import Card from "./Card";

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
            style={{ transform: index % 2 !== 0 ? "translateY(100px)" : null }}
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
