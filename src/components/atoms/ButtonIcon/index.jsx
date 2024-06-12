import React from "react";
import styled from "styled-components";
import { StyledTypo } from "../../../styles/mixins/StyledTypo";
import { StyledDisplay } from "../../../styles/mixins";

const BtnIcon = ({
  title,
  padding = "10px",
  color = "white",
  bgColor = "#FFFFFF1A",
  icon,
}) => {
  return (
    <StyledBtnIcon
      style={{
        background: bgColor,

        padding: padding,
      }}
    >
      <p style={{ color: color }}>{title}</p>
      <div style={{ padding: "5px" }}>{icon}</div>,
    </StyledBtnIcon>
  );
};

const StyledBtnIcon = styled.button`
  border: 1px solid;
  border-image-source: linear-gradient(to bottom, #ffd699, #0000002e);
  border-radius: 4px;
  border-image-slice: 1;

  ${StyledDisplay.dFlex({ gap: "10px" })}

  p {
    ${StyledTypo.heading9({})}
    userselect: none;
  }
`;
export default BtnIcon;
