import React from "react";
import styled, { keyframes } from "styled-components";
import { image } from "../../../assets/images";
import { StyledDisplay, StyledTypo } from "../../../styles/mixins";
import { APP_COLORS } from "../../../themes";
import { Btn, BoxDeff } from "../../../components/atoms";
import { icon } from "../../../assets/svgs";

const DifferenceSection = (props) => {
  return (
    <StyledDiff>
      <StyledBoxLeft>
        <StyledHeader>
          We do things <span>differently</span>
        </StyledHeader>
        <StyledImg></StyledImg>
      </StyledBoxLeft>
      <StyledBoxRight>
        <StyledBox>
          <Btn
            title="Explore details"
            isIcon={true}
            icon={<icon.ArrowUpRightIcon />}
            color={APP_COLORS.white}
            backgroundcolor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
            border="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
            size="16px 24px"
          />

          <StyledSub>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur. Pretium odio eu vehicula{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur. Pretium odio eu vehicula{" "}
            </p>
          </StyledSub>
        </StyledBox>
        <StyledContent>
          <StyledLine>
            <BoxDeff
              header="Creative"
              sub="Engaging, cross-platform applications for modern "
              icon={<icon.CreativeIcon />}
            />
            <BoxDeff
              header="Develop"
              sub="Lorem ipsum dolor sit amet consectetur. Sollicitudin "
              icon={<icon.DevelopIcon />}
            />
          </StyledLine>
          <StyledLine>
            <BoxDeff
              header="Techical"
              sub="Lorem ipsum dolor sit amet consectetur. "
              icon={<icon.TechicalIcon />}
            />
            <BoxDeff
              header="Client driven"
              sub="Lorem ipsum dolor sit amet consectetur. Sollicitudin "
              icon={<icon.ClientDrivenIcon />}
            />
          </StyledLine>
        </StyledContent>
      </StyledBoxRight>
    </StyledDiff>
  );
};

const StyledDiff = styled.div`
  height: 100vh;
  padding: 190px 48px 114px;

  ${StyledDisplay.dFlex({ align: "center", gap: "205px" })};
`;

const StyledBoxLeft = styled.div`
  width: 100%;

  ${StyledDisplay.dFlexCol({ gap: "30px", align: "start" })};
`;

const StyledHeader = styled.h2`
  ${StyledTypo.heading3({ color: APP_COLORS.white })}

  span {
    color: ${APP_COLORS.beige};
  }
`;

const StyledImg = styled.div`
  width: 100%;
  height: 633.41px;
  border-radius: 10px;
  overflow: hidden;

  background-image: url(${image.backGrDeff});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
`;

const StyledBoxRight = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "60px" })};
`;

const StyledBox = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "25px", align: "end" })};
`;

const StyledSub = styled.div`
  ${StyledDisplay.dFlex({ gap: "30px" })}

  p {
    text-align: left;

    ${StyledTypo.textBody2({ color: APP_COLORS.white })}
  }
`;

const StyledContent = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "40px" })}
`;

const StyledLine = styled.div`
  ${StyledDisplay.dFlex({ gap: "30px", align: "start" })}
`;

export default DifferenceSection;
