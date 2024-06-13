import React from "react";
import styled from "styled-components";
import { APP_COLORS } from "../../themes";

import {
  AboutUsSection,
  DifferenceSection,
  FeatureSection,
} from "../../components/molecules";

const HomePage = (props) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHomePage>
      <section id="aboutUs">
        <AboutUsSection scrollToSection={scrollToSection} />
      </section>
      <section id="difference">
        <DifferenceSection />
      </section>
      <section id="feature">
        <FeatureSection />
      </section>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  width: 100%;
  background-color: ${APP_COLORS.black};
`;

export default HomePage;
