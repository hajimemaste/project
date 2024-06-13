import React from "react";
import styled, { keyframes } from "styled-components";
import { APP_COLORS } from "../../../themes";
import { StyledDisplay, StyledTypo } from "../../../styles/mixins";
import { Btn } from "../../atoms";
import { image } from "../../../assets/images/";
import { icon } from "../../../assets/svgs";

// Animation
const slideInleft = keyframes`
from {transform: translateX(-650px);}
to {transform: translateX(0);}
`;

const slideInBottom = keyframes`
from {transform: translateY(200px);}
to {transform: translateY(0);}
`;

const AboutUsSection = (props) => {
  const { scrollToSection } = props;

  return (
    <StyledAboutUs>
      <StyledScreen />
      <StyledContent>
        <StyledHeader>
          Lorem ipsum dolor <br />
          sit amet <br />
          consectetur.
        </StyledHeader>
        <StyledSub>
          The cutting-edge Advanced Reality Tool revolutionizing real estate
          sales. Elevate
          <br />
          your listings with our interactive 3D experiences, customizable
          virtual tours, and <br />
          the latest visualization technology.
        </StyledSub>
        <Btn
          title="More about us"
          isIcon={true}
          icon={<icon.ArrowUpRightIcon />}
          backgroundcolor={APP_COLORS.black}
          color={APP_COLORS.white}
          border="linear-gradient(181.05deg, #FFD699 0.9%, rgba(0, 0, 0, 0.18) 110%)"
          size="16px 24px"
        />
      </StyledContent>
      <StyledFeature>
        <StyledLine></StyledLine>
        <StyledBox>
          <StyledScoll onClick={() => scrollToSection("difference")}>
            <p>Scroll</p>
            <icon.ArrowDownIcon />
          </StyledScoll>

          <StyledItem1>
            <StyledItem>
              <StyledHeaderItem>Architecture</StyledHeaderItem>
              <StyledSubItem>
                Lorem ipsum dolor sit amet <br />
                consectetur. Dolor egestas sagittis sit.
              </StyledSubItem>
            </StyledItem>
          </StyledItem1>
          <StyledItem2>
            <StyledItem>
              <StyledHeaderItem>Interior</StyledHeaderItem>
              <StyledSubItem>
                Lorem ipsum dolor sit amet <br />
                consectetur.
              </StyledSubItem>
            </StyledItem>
          </StyledItem2>
          <StyledItem3>
            <StyledItem>
              <StyledHeaderItem>Interact</StyledHeaderItem>
              <StyledSubItem>
                Lorem ipsum dolor sit amet <br />
                consectetur. Magna quam ut congue.
              </StyledSubItem>
            </StyledItem>
          </StyledItem3>
        </StyledBox>
      </StyledFeature>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.div`
  width: 100%;
  height: 100vh;
  padding: 23px 48px;
  position: relative;
  background-image: url(${image.backGrHomePage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to right, black, transparent);
`;

const StyledContent = styled.div`
  position: absolute;
  z-index: 1000;
  top: 184px;
  ${StyledDisplay.dFlexCol({ align: "start", gap: "24px" })}

  animation: ${slideInleft} .7s ease 0s;
`;

const StyledHeader = styled.h1`
  ${StyledTypo.heading1({ color: APP_COLORS.white })}
`;

const StyledSub = styled.p`
  ${StyledTypo.textBody2({ color: APP_COLORS.white })}
`;

const StyledFeature = styled.div`
  width: 100%;
  padding: 23px 48px;
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;

  ${StyledDisplay.dFlexCol({ justify: "start" })}
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fffaf4;
`;

const StyledBox = styled.div`
  width: 100%;
  ${StyledDisplay.dFlex({ align: "start" })}
`;

const StyledScoll = styled.button`
  width: 100%;
  padding: 24px;
  flex: 1;
  cursor: pointer;

  ${StyledDisplay.dFlex({ justify: "start", gap: "8px" })} p {
    ${StyledTypo.heading9({ color: APP_COLORS.white })}
  }

  animation: ${slideInBottom} 1s ease 0s;
`;

const StyledItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  border-left: 1px solid #fffaf4;

  ${StyledDisplay.dFlexCol({ gap: "4px", align: "start" })};
`;

const StyledHeaderItem = styled.h2`
  ${StyledTypo.heading8({ color: APP_COLORS.white })}
`;

const StyledSubItem = styled.p`
  ${StyledTypo.heading9({ color: APP_COLORS.white })}
`;

const StyledItem1 = styled.div`
  animation: ${slideInBottom} 1s ease 0.1s;
  flex: 1;
`;

const StyledItem2 = styled.div`
  animation: ${slideInBottom} 1s ease 0.2s;
  flex: 1;
`;

const StyledItem3 = styled.div`
  animation: ${slideInBottom} 1s ease 0.3s;
  flex: 1;
`;

export default AboutUsSection;
