import React, { useState, useEffect, useRef } from "react";
import { Btn } from "../atoms";
import { icon } from "../../assets/svgs";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      overlayRef.current &&
      !overlayRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        className={`${styles.overlay} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(false)}
      />
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
        <div className={styles.feature_warapper}>
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
          <div className={styles.burger_menu} onClick={toggleMenu}>
            <div className={styles.burger_line}></div>
            <div className={styles.burger_line}></div>
            <div className={styles.burger_line}></div>
          </div>
        </div>
        <div
          ref={sidebarRef}
          className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}
        >
          <div className={styles.sidebar_feature}>
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
          <ul className={styles.list_sidebar_navigator}>
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
        </div>
      </section>
    </>
  );
};

export default Header;
