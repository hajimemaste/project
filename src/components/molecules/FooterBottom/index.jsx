import React from "react";
import styled from "styled-components";
import { StyledDisplay, StyledTypo } from "../../../styles/mixins";
import { APP_COLORS, APP_FONTS } from "../../../themes";

import { FacebookIcon } from "../../../assets/svgs/iconFacebook";
import { InstagramIcon } from "../../../assets/svgs/iconInstagram";
import { TwitterIcon } from "../../../assets/svgs/iconTwitter";
import { LinkedInIcon } from "../../../assets/svgs/iconLinkedIn";

const FooterBottom = (props) => {
  return (
    <StyledFooterBottom>
      <StyledSocialIcon>
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <LinkedInIcon />
        </a>
      </StyledSocialIcon>
      <StyledText>
        <p>© 2024 xxxxxxxxx. All rights reserved</p>
        <StyledBox>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </StyledBox>
      </StyledText>
    </StyledFooterBottom>
  );
};

const StyledFooterBottom = styled.div`
  padding-top: 24px;

  ${StyledDisplay.dFlexCol({
    gap: "24px",
    justify: "space-between",
    align: "start",
  })};
`;

const StyledSocialIcon = styled.div`
  ${StyledDisplay.dFlex({ gap: "12px", justify: "start" })};
`;

const StyledText = styled.div`
  width: 100%;
  ${StyledDisplay.dFlex({ justify: "space-between", align: "start" })};

  p {
    ${StyledTypo.textBody3({ color: APP_COLORS.white })};
  }
`;

const StyledBox = styled.div`
  ${StyledDisplay.dFlex({ gap: "145px" })};
`;
export default FooterBottom;
