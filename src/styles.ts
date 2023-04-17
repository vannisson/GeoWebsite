import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  anchor: {
    color: "#FFFFFF",
    ":hover": {
      color: "hsla(228, 94%, 67%, 1)",
      textDecoration: "none",
      borderBottomStyle: "solid",
      borderBottomWidth: "3.1px",
      borderBottomColor: "hsla(228, 94%, 67%, 1)",
      width: "fit-content",
    },
  },
}));

export default useStyles;
