import React from "react";
import styled from "styled-components";
import { APP_COLORS } from "../../themes";

import { AboutUsSection, DifferenceSection } from "../../components/molecules";

const HomePage = (props) => {
  return (
    <StyledHomePage>
      <AboutUsSection />
      <DifferenceSection />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  width: 100%;
  background-color: ${APP_COLORS.black};
`;

export default HomePage;
