import React, { useState, useEffect } from "react";
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const viewportHeight = window.innerHeight;

      const scrollThreshold = viewportHeight * 4 + 300;

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
    <div className={styles.container}>
      <div
        className={`${styles.card} ${scrolled ? styles.action : styles.close}`}
        style={{ "--translate-value": "100px" }}
      >
        <h1 className={styles.header}>Our Team</h1>
        <p className={styles.sub}>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      {members.map((member, index) => (
        <div
          className={`${styles.card_member} ${
            scrolled ? styles.action : styles.close
          }`}
          key={index}
          style={{
            backgroundImage: `url(${member.avatar})`,
            "--translate-value": `${100 + (index + 1) * 100}px`,
          }}
        >
          <div className={styles.box}>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
          </div>
        </div>
      ))}
      <div
        className={`${styles.card} ${scrolled ? styles.action : styles.close}`}
        style={{ alignItems: "end", "--translate-value": "800px" }}
      >
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
          className={styles.card_btn}
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
