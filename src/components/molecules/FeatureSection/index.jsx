import React, { useState } from "react";
import styled from "styled-components";
import { icon } from "../../../assets/svgs";
import { image } from "../../../assets/images";
import { StyledDisplay, StyledTypo } from "../../../styles/mixins";
import { APP_COLORS } from "../../../themes";

const FeatureSection = (props) => {
  const listFeature = [
    {
      id: 1,
      header: "The Best 3D Sales Application for Real Estate is Here",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 2,
      header: "Illustrate the development process of builders or cities",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 3,
      header: "Visit and interact with 3D models using VR",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 4,
      header: "Simulate the basic operation of devices",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
    {
      id: 5,
      header: "Web, Tradeshows & Interactive Showroom Experiences",
      sub: "Lorem ipsum dolor sit amet consectetur. Massa montes in nullam etrutrum fames nulla nibh dignissim. Est in congue mattis in. Lorem etultrices porttitor vestibulum amet pellentesque..",
      img1: image.imgFeat1,
      img2: image.imgFeat2,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <StyleFeature>
      {listFeature.map((feature, index) => (
        <StyledItem key={feature.id} hasborder={feature.id !== 5 ? 1 : 0}>
          <StyledHeader onClick={() => handleClick(index)}>
            <StyledId>0{feature.id}</StyledId>
            <h1>{feature.header}</h1>
            <icon.ArrowUpRightIcon />
          </StyledHeader>
          {activeIndex === index && (
            <StyledContent>
              <StyledSub>{feature.sub}</StyledSub>
              <StyledImg>
                <StyledImg1>
                  <img src={feature.img1} alt="" />
                </StyledImg1>
                <StyledImg2>
                  <img src={feature.img2} alt="" />
                </StyledImg2>
              </StyledImg>
            </StyledContent>
          )}
        </StyledItem>
      ))}
    </StyleFeature>
  );
};

const StyleFeature = styled.div`
  width: 100%;
  height: 100vh;
  padding: 110px 48px 0px 48px;

  ${StyledDisplay.dFlexCol({ gap: "24px", justify: "start" })}
`;

const StyledItem = styled.div`
  width: 100%;
  padding-bottom: 10px;

  ${(props) =>
    props.hasborder &&
    `
    border-bottom: 1px solid rgba(255, 250, 244, 1);
  `}
`;

const StyledHeader = styled.div`
  ${StyledDisplay.dFlex({ gap: "24px" })}

  h1 {
    flex: 1;
    ${StyledTypo.heading5({ color: APP_COLORS.white })}
  }
`;

const StyledId = styled.p`
  width: 318px;

  ${StyledTypo.heading9({ color: APP_COLORS.white })}
`;

const StyledContent = styled.div`
  max-width: 1000px;
  padding-top: 16px;
  margin-left: 342px;

  ${StyledDisplay.dFlexCol({ gap: "30px", align: "start" })}
`;

const StyledSub = styled.p`
  width: 660px;
  opacity: 0.6;

  ${StyledTypo.textBody2({ color: APP_COLORS.white })};
`;

const StyledImg = styled.div`
  width: 100%;

  ${StyledDisplay.dFlex({ gap: "30px", align: "start" })}
`;

const StyledImg1 = styled.div`
  width: 204px;

  overflow: hidden;
  border-radius: 4px;

  img {
    height: 224px;
  }
`;

const StyledImg2 = styled.div`
  width: 546px;
  overflow: hidden;
  border-radius: 8px;

  img {
    height: 446px;
  }
`;

export default FeatureSection;
