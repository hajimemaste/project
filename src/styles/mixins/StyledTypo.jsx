import styled, { css } from "styled-components";
import { APP_COLORS, APP_FONTS } from "../../themes";

export const StyledTypo = {
  fontUrbanist: () => css`
    font-family: "Urbanist", sans-serif;
  `,
  fontStyle: ({
    fontWeight = 500,
    fontSize = APP_FONTS["7xl"],
    lineHeight = 1.1,
    textColor,
  }) => css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: ${textColor};
  `,

  headingBig: ({ color = APP_COLORS.black, lineHeight = "96px" }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      textColor: color,
      fontSize: "80px",
      fontWeight: 600,
    })}
  `,

  heading1: ({ color = APP_COLORS.black, lineHeight = "72px" }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      textColor: color,
      fontSize: APP_FONTS["9xl"],
      lineHeight,
    })}
  `,

  heading2: ({
    color = APP_COLORS.black,
    fontWeight = 600,
    lineHeight = "67.2px",
  }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS["8xl"],
      lineHeight,
      fontWeight,
      textColor: color,
    })}
  `,

  heading3: ({ color = APP_COLORS.black, lineHeight = "57.6px" }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS["7xl"],
      lineHeight,
      textColor: color,
    })}
  `,

  heading4: ({
    color = APP_COLORS.black,
    lineHeight = "56px",
    fontWeight = 500,
  }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS["4xl"],
      lineHeight,
      fontWeight,
      textColor: color,
    })}
  `,

  heading5: ({ color = APP_COLORS.black, lineHeight = "38.4px" }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS["3xl"],
      lineHeight,
      textColor: color,
    })}
  `,

  heading6: ({
    color = APP_COLORS.black,
    fontWeight = 600,
    lineHeight = "31.2px",
  }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS["2xl"],
      lineHeight,
      textColor: color,
    })}
  `,

  heading7: ({
    color = APP_COLORS.black,
    fontWeight = 700,
    lineHeight = "24px",
  }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS.xl,
      lineHeight,
      textColor: color,
    })}
  `,

  heading8: ({
    color = APP_COLORS.black,
    fontWeight = 700,
    lineHeight = "21.6px",
  }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontWeight,
      fontSize: APP_FONTS.lg,
      lineHeight,
      textColor: color,
    })}
  `,

  heading9: ({ color = APP_COLORS.black, lineHeight = "19.2px" }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS.base,
      lineHeight,
      textColor: color,
    })}
  `,

  heading10: ({ color = APP_COLORS.black, lineHeight = "20px" }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontSize: APP_FONTS.md,
      fontWeight: 800,
      lineHeight,
      textColor: color,
    })}
  `,

  textBodyBig: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontWeight: 400,
      fontSize: APP_FONTS.lg,
      lineHeight: 1.15,
      textColor: color,
    })}
  `,
  textBody1: ({ color = APP_COLORS.black, fontWeight = 400 }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontWeight,
      fontSize: APP_FONTS.lg,
      lineHeight: "28.8px",
      textColor: color,
    })}
  `,

  textBody2: ({ color = APP_COLORS.black, fontWeight = 400 }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontWeight,
      fontSize: APP_FONTS.base,
      lineHeight: "22.4px",
      textColor: color,
    })}
  `,

  textBody3: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontWeight: 400,
      fontSize: APP_FONTS.sm,
      lineHeight: 1.2,
      textColor: color,
    })}
  `,

  textThin: ({ color = APP_COLORS.white }) => css`
    ${StyledTypo.fontUrbanist()}
    ${StyledTypo.fontStyle({
      fontWeight: 300,
      fontSize: APP_FONTS.sm,
      lineHeight: 1.2,
      textColor: color,
    })}
  `,
};
