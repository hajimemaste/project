import { APP_COLORS } from "../../../themes";
import { SCREEN_URL } from "../../../constants";
import { StyledDisplay } from "../../../styles/mixins";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../Footer";
import CallToAction from "../CallToAction";
import styled from "styled-components";
import Header from "../Header";

const StyledLayoutContainer = styled.div`
  ${StyledDisplay.dFlexCol({ align: "start" })}

  background-color: ${APP_COLORS.white};
`;

const LayoutContainer = ({
  component: Component,
  isHeader,
  isCta,
  isFooter,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(SCREEN_URL.HOME);
  }, [navigate]);

  return (
    <StyledLayoutContainer>
      {isHeader && <Header />}
      <Component />
      {isCta && <CallToAction />}
      {isFooter && <Footer />}
    </StyledLayoutContainer>
  );
};

export default LayoutContainer;
