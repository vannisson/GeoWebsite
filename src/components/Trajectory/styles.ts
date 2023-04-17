import { createStyles, em, getBreakpointValue, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.md,
    width: "70%",
  },

  separator: {
    height: rem(3.5),
    borderTop: `${rem(2)} dashed ${theme.colors.dark[3]}`,
    borderRadius: theme.radius.xl,
    backgroundColor: "transparent",
  },

  separatorActive: {
    borderWidth: 0,
    backgroundImage: theme.fn.linearGradient(
      45,
      theme.colors.blue[6],
      theme.colors.cyan[6]
    ),
  },

  stepIcon: {
    borderColor: "transparent",
    backgroundColor: theme.colors.dark[4],
    borderWidth: 0,

    "&[data-completed]": {
      borderWidth: 0,
      backgroundColor: "transparent",
      backgroundImage: theme.fn.linearGradient(
        45,
        theme.colors.blue[6],
        theme.colors.cyan[6]
      ),
    },
  },

  step: {
    transition: "transform 150ms ease",

    "&[data-progress]": {
      transform: "scale(1.05)",
    },
  },

  stepLabel: {
    color: "#C1C2C5",
  },

  stepDescription: {
    color: "#909296",
  },
}));

export default useStyles;
