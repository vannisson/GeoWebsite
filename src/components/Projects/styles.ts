import { createStyles, em, getBreakpointValue } from "@mantine/core";

const useStyles = createStyles((theme) => ({
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
  card: {
    backgroundColor: "#25262B",
    width: "20rem",
    borderRadius: "10px",
    ".mantine-Card-cardSection": {
      padding: "1rem",
      marginTop: "0rem",
      img: {
        borderRadius: "10px",
        // marginTop: "0.2rem",
        height: "11.5rem",
      },
    },
  },
  test: {
    width: "75%",
    display: "grid",
    gridGap: "2rem 0",
    gridTemplateColumns: "repeat(auto-fit, 22.5rem)",
    justifyContent: "center",
    justifyItems: "center",
  },
}));

export default useStyles;
