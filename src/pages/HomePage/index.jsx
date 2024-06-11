import React from "react";
import styled from "styled-components";
import { StyledTypo } from "../../styles/mixins";
import { APP_COLORS, APP_FONTS } from "../../themes";

const HomePage = (props) => {
  return (
    <>
      <StyleH1>Hello, This is HomePage </StyleH1>
    </>
  );
};

const StyleH1 = styled.h1`
  ${StyledTypo.heading1({})}
`;

export default HomePage;
