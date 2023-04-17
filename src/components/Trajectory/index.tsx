import {
  Stack,
  Text,
  Stepper,
  rem,
  StepperProps,
  Box,
  Title,
  Group,
} from "@mantine/core";
import useStyles from "./styles";

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: "none",
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
      {...props}
    />
  );
}

const steppers = [
  { label: "High school", description: "Colégio Santa Afra" },
  { label: "Graduation", description: "Universidade Federal de Alagoas(UFAL)" },
  {
    label: "Master's Degree",
    description: "Universidade Federal de Alagoas(UFAL)",
  },
  { label: "Doctorate Degree", description: "..." },
];

export default function Trajectory() {
  const { classes } = useStyles();
  return (
    <Stack
      id="Trajectory"
      sx={{
        width: "100%",
        backgroundColor: "#0A0A0B",
        gap: "3rem",
        paddingBottom: "7rem",
      }}
      justify="start"
      align="center"
    >
      <Text
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        sx={{
          padding: "6.25rem 0 0 0",
          fontSize: "2rem",
          textDecoration: "none",
          borderBottomStyle: "solid",
          borderBottomWidth: "3.1px",
          borderBottomColor: "hsla(228, 94%, 67%, 1)",
          width: "fit-content",
        }}
      >
        My Trajectory
      </Text>
      <Stepper classNames={classes} active={2} breakpoint="sm">
        <Stepper.Step label="High School" description="Colégio Santa Afra" />
        <Stepper.Step
          label="Graduation"
          description="Universidade Federal de Alagoas"
        />
        <Stepper.Step
          label="Master's Degree"
          description="In Progress"
          loading
        />
        <Stepper.Step label="Ph.D." description="In Progress" loading />
      </Stepper>
      <Text
        sx={{
          color: "#FFFFFF",
          padding: "0 16rem",
          textAlign: "center",
        }}
      >
        I started my programming career in college. I entered the Computer
        Science course in 2019 and since then I have been venturing into
        different areas of computing, but my focus has become the areas of
        Computer Vision, Mixed Reality, and Artificial Intelligence. Lately, I
        have also been working on the intersection of these areas with
        industrial processes. I finished my graduation at the Federal University
        of Alagoas in the city of Arapiraca in 2023, and in the same year I
        entered the master's degree also at the Federal University of Alagoas,
        but this time in the capital of the state of Alagoas, Maceió. I
        currently have plans to pursue a Ph.D. in these areas.
      </Text>
    </Stack>
  );
}
