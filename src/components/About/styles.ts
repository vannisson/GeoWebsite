import { createStyles, em, getBreakpointValue } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  aboutName: {
    fontWeight: 500,
    fontSize: "1.5rem",
    color: "#FFFFFF",
    backgroundColor: "transparent",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        fontSize: "0.8rem",
      },
  },
  texts: {
    backgroundColor: "transparent",
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        alignItems: "center",
      },
  },
  aboutText: {
    fontWeight: 500,
    color: "#FFFFFF",
    textAlign: "justify",
    backgroundColor: "transparent",

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
  button: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
}));

export default useStyles;
