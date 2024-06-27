import React from "react";
import styles from "./button.module.css";

const Btn = (props) => {
  const {
    title,
    isIcon = false,
    icon,
    backgroundcolor,
    color,
    border,
    size,
  } = props;

  // Inline styles for CSS variables
  const style = {
    "--btn-padding": size,
    "--btn-background": backgroundcolor,
    "--btn-color": color,
    "--btn-border": border,
  };

  return (
    <button className={styles.btn} style={style}>
      <p>{title}</p>
      <div className={styles.icon}>{isIcon && icon}</div>
    </button>
  );
};

export default Btn;
