import { createStyles, em, getBreakpointValue } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  welcome: {
    fontWeight: 500,
    fontSize: "1rem",
    letterSpacing: "3px",
    color: "#FFFFFF",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        fontSize: "0.8rem",
      },
  },
  texts: {
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        alignItems: "center",
      },
  },
  hi: {
    display: "flex",
    alignItems: "end",
    gap: "0.6rem",
    color: "#FFFFFF",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        fontSize: "1rem",
        gap: "0.3rem",
        lineHeight: 1.55,
      },
  },
  name: {
    lineHeight: 1.35,
    fontSize: "2rem",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        fontSize: "1.5rem",
      },
  },
  intro: {
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      },
  },
  devIntro: {
    color: "#FFFFFF",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        fontSize: "1rem",
      },
  },
  textIntro: {
    fontWeight: 500,
    color: "#FFFFFF",
    textAlign: "justify",

    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        fontSize: "0.8rem",
      },
  },
  img: {
    borderRadius: "50%",
    transition: "all .4s",
    ":hover": { transform: "scale(1.2)" },

    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        width: "60%",
      },
  },
}));

export default useStyles;
