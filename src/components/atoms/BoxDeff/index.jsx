import React from "react";
import styled from "styled-components";
import { StyledDisplay, StyledTypo } from "../../../styles/mixins";
import { APP_COLORS } from "../../../themes";

const BoxDeff = (props) => {
  const { header, sub, icon } = props;

  return (
    <StyledBox>
      <StyledIcon>{icon}</StyledIcon>
      <StyledConten>
        <h1>{header}</h1>
        <p>{sub}</p>
      </StyledConten>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 270px;
  padding: 20px 10px 20px 20px;
  background: ${APP_COLORS.transparent};
  border: none;
  position: relative;
  border-radius: 8px;
  ${StyledDisplay.dFlexCol({ gap: "36px", align: "start" })}

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 8px;
    padding: 2px; /* Adjust this value to match the pseudo-element offset */
    background: linear-gradient(
      180deg,
      rgba(255, 250, 244, 0.2) -5%,
      #ffd699 50.58%,
      rgba(255, 250, 244, 0.2) 105.06%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude; /* Required for mask to work correctly */
    -webkit-mask-composite: destination-out; /* Required for webkit browsers */
  }
`;

const StyledIcon = styled.div`
  padding: 12px 0;
`;

const StyledConten = styled.div`
  width: 100%;

  ${StyledDisplay.dFlexCol({ gap: "16px", align: "start" })}

  h1 {
    ${StyledTypo.heading6({ color: APP_COLORS.white })}
  }

  p {
    ${StyledTypo.textBody1({ color: "rgba(255, 255, 255, 0.7)" })}
  }
`;

export default BoxDeff;
