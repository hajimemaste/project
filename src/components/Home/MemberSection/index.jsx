import React from "react";
import styles from "./memberSection.module.css";

import { image } from "../../../assets/images";
import { Btn } from "../../atoms";

const MemberSection = (props) => {
  const members = [
    { avatar: `${image.avatar_1}`, name: "Jane Cooper", position: "Staff" },
    { avatar: `${image.avatar_2}`, name: "Jane Cooper", position: "Staff" },
    { avatar: `${image.avatar_3}`, name: "Jane Cooper", position: "Staff" },
    { avatar: `${image.avatar_4}`, name: "Jane Cooper", position: "Staff" },
    { avatar: `${image.avatar_5}`, name: "Jane Cooper", position: "Staff" },
    { avatar: `${image.avatar_6}`, name: "Jane Cooper", position: "Staff" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.header}>Our Team</h1>
        <p className={styles.sub}>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      {members.map((member, index) => (
        <div
          className={styles.card_member}
          key={index}
          style={{ backgroundImage: `url(${member.avatar})` }}
        >
          <div className={styles.box}>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
          </div>
        </div>
      ))}
      <div className={styles.card} style={{ alignItems: "end" }}>
        <div className={styles.content_box}>
          <h2 className={styles.content_header}>
            Join the <br />
            team
          </h2>
          <p className={styles.content_sub}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Btn
          title="Join now"
          color="rgba(255, 255, 255, 1)"
          backgroundcolor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
          border="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
          size="12px 35px"
        />
      </div>
    </div>
  );
};

export default MemberSection;
