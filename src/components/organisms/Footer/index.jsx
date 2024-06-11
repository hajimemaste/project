import React from "react";
import styled from "styled-components";

import { FooterUp, FooterBottom } from "../../molecules";
import { APP_COLORS } from "../../../themes";

const Footer = (props) => {
  return (
    <StyledFooter>
      <FooterUp />
      <FooterBottom />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  padding: 24px 48px;
  background: ${APP_COLORS.black};
`;

export default Footer;
