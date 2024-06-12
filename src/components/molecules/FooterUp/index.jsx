import React from "react";
import styled from "styled-components";
import { APP_COLORS } from "../../../themes";
import { StyledTypo, StyledDisplay } from "../../../styles/mixins";
import { icon } from "../../../assets/svgs";

const FooterUp = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooterTop>
      <StyledHeader>
        <span>Contact</span> to create cool things together
      </StyledHeader>
      <StyledInf>
        <StyledBox>
          <StyledBrowse>
            <p>Browse</p>
            <StyledBrowseItem>
              <a href="/about">About us</a>
              <a href="#">Project</a>
              <a href="#">Contact</a>
            </StyledBrowseItem>
          </StyledBrowse>
          <StyledContact>
            <p>Contact</p>
            <StyleContactItem>
              <p>xxxxxxxx@gmail.com</p>
              <p>+84368097570</p>
            </StyleContactItem>
          </StyledContact>
        </StyledBox>
        <StyledBtnUp onClick={scrollToTop}>
          <icon.ArrowUpIcon />
        </StyledBtnUp>
      </StyledInf>
    </StyledFooterTop>
  );
};

const StyledFooterTop = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${APP_COLORS.white};

  ${StyledDisplay.dFlex({ align: "start" })}
`;

const StyledHeader = styled.div`
  width: 536px;
  ${StyledTypo.heading4({ color: APP_COLORS.white })}

  span {
    color: ${APP_COLORS.beige};
  }
`;

const StyledInf = styled.div`
  ${StyledDisplay.dFlex({
    gap: "100px",
    justify: "space-between",
    align: "start",
  })};
`;

const StyledBox = styled.div`
  ${StyledDisplay.dFlex({
    gap: "47px",
    justify: "space-between",
    align: "start",
  })};
`;

const StyledBrowse = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "20px", align: "start" })};
  ${StyledTypo.textBody2({ color: APP_COLORS.white })}
`;

const StyledBrowseItem = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "12px", align: "start" })};
  color: ${APP_COLORS.beige};

  a {
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }
`;

const StyledContact = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "20px", align: "start" })};
  ${StyledTypo.textBody2({ color: APP_COLORS.white })}
`;

const StyleContactItem = styled.div`
  ${StyledDisplay.dFlexCol({ gap: "12px", align: "start" })};
`;

const StyledBtnUp = styled.button`
  padding: 12px 14px;
  border: 1px solid ${APP_COLORS.white};
  border-radius: 50%;
  cursor: pointer;
`;

export default FooterUp;
