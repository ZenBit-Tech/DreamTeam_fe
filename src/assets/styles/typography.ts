import { Typography, styled } from "@mui/material";
import { FONTS } from "@/assets/styles/constants/fonts.ts";
import { SIZES } from "@/assets/styles/constants/sizes.ts";
import { COLORS } from "@/assets/styles/constants/colors.ts";

export const TitleHero = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 400,
  fontSize: SIZES.largeTitle,
  lineHeight: "120%",
  letterSpacing: "-3%",
});

export const TitlePage = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 700,
  fontSize: SIZES.title,
  lineHeight: "120%",
  letterSpacing: "-2%",
});

export const Subtitle = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 400,
  fontSize: SIZES.subtitle,
  lineHeight: "120%",
  letterSpacing: "0%",
});

export const Heading = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 600,
  fontSize: SIZES.heading,
  lineHeight: "120%",
  letterSpacing: "-2%",
});

export const H3Heading = styled(Typography)({
  fontFamily: FONTS.PUBLIC_SANS,
  fontWeight: 600,
  fontSize: SIZES.h3Heading,
  lineHeight: "36px",
  textAlign: "left",
});

export const LabelSM = styled(Typography)({
  fontFamily: FONTS.PUBLIC_SANS,
  fontWeight: 400,
  fontSize: SIZES.label,
  lineHeight: "15px",
  textAlign: "left",
});

export const Paragraph = styled(Typography)({
  fontFamily: FONTS.PUBLIC_SANS,
  fontWeight: 400,
  fontSize: SIZES.paragraph,
  lineHeight: "22px",
  textAlign: "left",
});

export const Subheading = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "120%",
  letterSpacing: "0%",
});

export const BodyBase = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 400,
  fontSize: SIZES.bodyBase,
  lineHeight: "140%",
  letterSpacing: "0%",
});

export const BodyBaseLarge = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "140%",
  letterSpacing: "0%",
});

export const BodyStrong = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 600,
  fontSize: SIZES.bodyStrong,
  lineHeight: "140%",
  letterSpacing: "0%",
});

export const BodyEmphasis = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: SIZES.bodyBase,
  lineHeight: "140%",
  letterSpacing: "0%",
});

export const BodyLink = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 400,
  fontSize: SIZES.bodyBase,
  lineHeight: "140%",
  letterSpacing: "0%",
  color: COLORS.primary,
  textDecoration: "underline",
});

export const BodySmall = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "140%",
  letterSpacing: "0%",
});

export const BodySmallStrong = styled(Typography)({
  fontFamily: FONTS.INTER,
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "140%",
  letterSpacing: "0%",
});

export const BodyCode = styled(Typography)({
  fontFamily: FONTS.ROBOTO_MONO,
  fontWeight: 400,
  fontSize: SIZES.bodyBase,
  lineHeight: "100%",
  letterSpacing: "0%",
  backgroundColor: "#f5f5f5",
  padding: "2px 4px",
  borderRadius: "4px",
});
