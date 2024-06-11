import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { APP_COLORS } from "../../../themes";
import { StyledDisplay } from "../../../styles/mixins/StyledDisplay";
import { StyledTypo } from "../../../styles/mixins/StyledTypo";
import { IoSearch } from "react-icons/io5";
import { BtnText } from "../../atoms";
import { SearchIcon } from "../../../assets/svgs/iconSearch";

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledLogo href="/">
        <CiSearch />
        <p>LOGOXXXXX</p>
      </StyledLogo>
      <StyledNavigator>
        <li>
          <a href="/products">Product</a>
        </li>
        <li>
          <a href="/solution">Solution</a>
        </li>
        <li>
          <a href="/showcase">Showcase</a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
      </StyledNavigator>
      <StyledFeat>
        <StyledSearch>
          <SearchIcon />
        </StyledSearch>
        <BtnText
          title="Contact"
          color="white"
          bgColor="linear-gradient(89.68deg, #F1B078 -20.43%, #E3934D 6.5%, #DF8F49 32.15%, #B56824 69.73%, #685117 128.94%)"
        />
      </StyledFeat>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px 48px;
  background-color: rgba(79, 79, 79, 0.6);
  ${StyledDisplay.dFlex({ justify: "space-between" })};
`;

const StyledLogo = styled.a`
  ${StyledDisplay.dFlex({ gap: "10px", justify: "center" })}
  ${StyledTypo.heading10({ color: APP_COLORS.white })}
`;

const StyledNavigator = styled.ul`
  ${StyledDisplay.dFlex({ gap: "43px" })}

  li {
    margin: 0;
    padding: 0;
  }

  li a {
    display: block;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    transition: all 0.5s ease;

    ${StyledTypo.heading9({ color: APP_COLORS.white })};
  }

  li a:hover {
    background: linear-gradient(to right, #d19600, #c36029);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const StyledFeat = styled.div`
  ${StyledDisplay.dFlex({ gap: "37px" })}
`;
const StyledSearch = styled.div`
  padding: 8px 12px;
  border-right: 1px solid ${APP_COLORS.white};
  height: 40px;
  cursor: pointer;
`;

export default Header;
