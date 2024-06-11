import React from "react";
import styled from "styled-components";
import { StyledTypo } from "../../../styles/mixins/StyledTypo";

const BtnText = ({ title, color, bgColor }) => {
  return (
    <div
      style={{
        background: bgColor,
        border: "none",
        borderRadius: "4px",
        padding: "10px",
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
