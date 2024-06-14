import React from "react";
import styles from "./inputText.module.css";

const InputText = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input_text}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
