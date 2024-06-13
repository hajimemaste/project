import React from "react";
import styled from "styled-components";
import { StyledDisplay, StyledTypo } from "../../../styles/mixins";
import { APP_COLORS } from "../../../themes";

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

  return (
    <StyledBtn
      size={size}
      backgroundcolor={backgroundcolor}
      color={color}
      border={border}
    >
      <p>{title}</p>
      {isIcon && icon}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  padding: ${(props) => props.size || "10px"};
  background: ${(props) => props.backgroundcolor || APP_COLORS.black};

  border: none;
  position: relative;
  border-radius: 4px;

  ${StyledTypo.heading9({ color: (props) => props.color || APP_COLORS.white })};
  ${StyledDisplay.dFlex({ gap: "10px", justify: "center" })};

  &::after {
    content: "";
    position: absolute;
    height: 107%;
    width: 102%;
    border-radius: 4px;
    background-image: ${(props) => props.border || APP_COLORS.black};
    z-index: -1;
  }

  &:hover {
    z-index: 0;
  }
`;

export default Btn;
