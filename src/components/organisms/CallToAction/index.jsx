import React, { useState } from "react";
import styled from "styled-components";
import { APP_COLORS } from "../../../themes/appColors";
import {
  StyledPosition,
  StyledDisplay,
  StyledTypo,
} from "../../../styles/mixins";
import { image } from "../../../assets/images";
import { InputText, Btn } from "../../atoms";

const CallToAction = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledCta>
      <StyledContaineCta>
        <StyledContent>
          <StyledHeader>Get started with XXXXXXX</StyledHeader>
          <StyledSub>
            Lorem ipsum dolor sit amet consectetur. Lorem sit risus ante amet
            dignissim enim a. Eu a tellus.
          </StyledSub>
        </StyledContent>
        <StyledForm>
          <InputText
            placeholder="Your mail here"
            value={inputValue}
            onChange={handleChange}
          />
          <Btn
            title="Get Started"
            size="12px 24px"
            backgroundcolor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
            color="rgba(255, 255, 255, 1)"
            border="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
          />
        </StyledForm>
      </StyledContaineCta>
      <StyledImg>
        <img src={image.backGrBottomCta} alt="bottomCta" />
      </StyledImg>
    </StyledCta>
  );
};

const StyledCta = styled.div`
  width: 100%;
  padding: 267px 0;
  position: relative;
  overflow: hidden;
  background-color: ${APP_COLORS.black};
  background-image: url(${image.backGrCta});
  background-position-y: top center;
  background-repeat: no-repeat;
  background-size: cover;

  ${StyledDisplay.dFlex({ justify: "center" })}
`;

const StyledContaineCta = styled.div`
  z-index: 1000;

  ${StyledDisplay.dFlexCol({ gap: "60px" })};
`;

const StyledContent = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "18px" })};
`;

const StyledHeader = styled.h1`
  ${StyledTypo.heading3({ color: APP_COLORS.white, lineHeight: "56px" })}
`;

const StyledSub = styled.p`
  width: 350px;
  text-align: center;
  ${StyledTypo.textBody2({ color: APP_COLORS.white, lineHeight: "24px" })}
`;

const StyledForm = styled.div`
  ${StyledDisplay.dFlex({ gap: "15px" })}
`;

const StyledImg = styled.div`
  ${StyledPosition.position({ bottom: "-24%", left: 0, right: 0 })};

  img {
    width: 100%;
  }
`;
export default CallToAction;
