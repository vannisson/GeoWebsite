import { createStyles, em, getBreakpointValue, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  img: {
    borderRadius: "50%",
    transition: "all .4s",
    ":hover": { transform: "scale(1.1)" },

    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md) - 1)})`]:
      {
        width: "60%",
      },
  },
  test: {
    width: "80%",
    display: "grid",
    gridGap: "2rem 3rem",
    gridTemplateColumns: "repeat(auto-fit, 22.5rem)",
    justifyContent: "center",
    justifyItems: "center",
  },
  title: { color: "#FFFFFF" },
  text: { color: "#FFFFFF", textAlign: "justify", padding: "1rem" },
}));

export default useStyles;
