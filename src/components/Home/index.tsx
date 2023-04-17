import { Box, Group, Stack, Title, Text, SimpleGrid } from "@mantine/core";
import img from "../../assets/img2.jpg";
import useStyles from "./styles";

export default function Home() {
  const { classes } = useStyles();
  return (
    <Stack
      id="Home"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#141517",
      }}
      justify="center"
      align="center"
    >
      <SimpleGrid
        breakpoints={[
          { minWidth: "xl", cols: 2 },
          { minWidth: "lg", cols: 2 },
          { minWidth: "md", cols: 2 },
          { minWidth: "sm", cols: 1 },
          { minWidth: "xs", cols: 1 },
        ]}
        sx={{ width: "80%" }}
      >
        <Stack sx={{ width: "100%" }}>
          <Stack className={classes.texts}>
            <Title className={classes.welcome} order={5}>
              WELCOME TO MY JOURNEY
            </Title>

            <Box className={classes.intro}>
              <Title className={classes.hi} order={2}>
                Hi, I'm
                <Text
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  className={classes.name}
                >
                  Geovane Filho
                </Text>
              </Title>

              <Title className={classes.devIntro} order={2}>
                a Dev and Researcher.
              </Title>
            </Box>

            <Title className={classes.textIntro} order={6}>
              In love with Research, Programing, Games, and Cats. I am from
              Maceió, the capital of the state of Alagoas in Brazil, and I am
              currently a master's degree student at the Instituto de
              Computação(IC) in the Computer Science course at the Universidade
              Federal de Alagoas.
            </Title>
          </Stack>
        </Stack>
        <Stack align="center" sx={{ width: "100%" }}>
          <img
            className={classes.img}
            src={img}
            width="40%"
            alt="Profile Photo"
          />
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}
