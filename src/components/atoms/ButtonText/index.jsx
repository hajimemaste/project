import React from "react";
import styled from "styled-components";
import { StyledTypo } from "../../../styles/mixins/StyledTypo";

const BtnText = ({
  title,
  padding = "10px",
  color = "white",
  bgColor = "linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)",
}) => {
  return (
    <div
      style={{
        background: bgColor,
        border: "none",
        borderRadius: "4px",
        padding: padding,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "19.2px",
        color: color,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {title}
    </div>
  );
};

export default BtnText;
