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
import { Icon } from "@iconify/react";
import img1 from "../../assets/Okita.png";
import img2 from "../../assets/Kotarou.png";
import img3 from "../../assets/Zura.png";

export default function Cats() {
  const { classes } = useStyles();
  return (
    <Stack
      id="Cats"
      sx={{
        width: "100%",
        backgroundColor: "#141517",
        gap: "3rem",
        paddingBottom: "7rem",
      }}
      justify="start"
      align="center"
    >
      <Group></Group>
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
          display: "flex",
          alignItems: "center",
          gap: ".8rem",
        }}
      >
        Meet my cats!
        <Icon icon="emojione:cat-face" />
      </Text>
      <Box className={classes.test}>
        <Stack align="center">
          <img
            className={classes.img}
            src={img1}
            width="40%"
            alt="Profile Photo"
          />
          <Title className={classes.title}>Okita</Title>
          <Text className={classes.text}>
            Okita is the typical black cat, he doesn't seem to enjoy anyone's
            company and is always looking at everyone from afar. I'd say he's a
            lone wolf, or rather a lone cat. He is the oldest of all and came to
            live with me as soon as I moved in with Rebeca. At first, he didn't
            like me, but little by little he gave in and today he even lets me
            pet him from time to time. Even though he seems to hate everyone,
            deep down he enjoys being petted, but only by people he approves of.
          </Text>
        </Stack>
        <Stack align="center">
          <img
            className={classes.img}
            src={img2}
            width="40%"
            alt="Profile Photo"
          />
          <Title className={classes.title}>Kotarou</Title>
          <Text className={classes.text}>
            Kotarou, or Kota if you prefer, is the middle cat. He is a white cat
            with some gray spots. I adopted Kota at the University, I ended up
            finding him when he was very small as I was leaving the lab to go to
            lunch. He is very affectionate, enjoys the company of people, and,
            incredible as it may seem, he likes to go for walks, we always take
            him places. Kota is very attached to me and Rebeca and is always
            accompanying us around the house, he even sleeps with us every
            night.
          </Text>
        </Stack>
        <Stack align="center">
          <img
            className={classes.img}
            src={img3}
            width="40%"
            alt="Profile Photo"
          />
          <Title className={classes.title}>Zura</Title>
          <Text className={classes.text}>
            Zura is the youngest, and to be honest I didn't even expect to breed
            another cat after Kota. I ended up finding Zura very young in front
            of the house I rented while I was finishing graduation. He was
            surrounded by dogs and I ended up being scared of something
            happening to him. After several days of being sick and not eating
            properly, he got better and is now part of the family. Without a
            doubt, he is the one who eats the most and is the most affectionate
            of all.
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
