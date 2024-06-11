import React from "react";
import styled from "styled-components";
import { StyledTypo } from "../../../styles/mixins/StyledTypo";
import { APP_COLORS } from "../../../themes";

const InputText = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const StyledInput = styled.input`
  padding: 12px 20px;
  border: 1px solid #df8f49;
  border-radius: 8px;
  width: 311px;
  height: 44px;

  background-color: #00000033;

  ${StyledTypo.textBody2({ color: APP_COLORS.white })}

  &::placeholder {
    font-family: Aeonik;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #666666;
  }
`;

export default InputText;
