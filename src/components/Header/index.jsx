import React from "react";
import { Btn } from "../atoms";
import { icon } from "../../assets/svgs";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <section id={styles.header}>
      <a className={styles.logo} href="/">
        <icon.LogoIcon />
        <p>LOGOXXXXX</p>
      </a>
      <ul className={styles.list_navigator}>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/solution">Solution</a>
        </li>
        <li>
          <a href="/showcase">Showcase</a>
        </li>
        <li>
          <a href="/aboutus">About us</a>
        </li>
      </ul>
      <div className={styles.feature}>
        <div className={styles.icon_search}>
          <icon.SearchIcon />
        </div>
        <Btn
          title="Contact"
          color="rgba(255, 250, 244, 1)"
          backgroundcolor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
          border="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
        />
      </div>
    </section>
  );
};

export default Header;
