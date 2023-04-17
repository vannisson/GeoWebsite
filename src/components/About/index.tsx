import {
  Box,
  Group,
  Stack,
  Title,
  Text,
  SimpleGrid,
  Badge,
  Button,
  Tooltip,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import useStyles from "./styles";
import img from "../../assets/About.png";

export default function About() {
  const { classes } = useStyles();
  return (
    <Stack
      id="About"
      sx={{
        width: "100%",
        backgroundColor: "#0A0A0B",
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
        Who I am
      </Text>

      <SimpleGrid
        breakpoints={[
          { minWidth: "xl", cols: 2 },
          { minWidth: "lg", cols: 2 },
          { minWidth: "md", cols: 2 },
          { minWidth: "sm", cols: 1 },
          { minWidth: "xs", cols: 1 },
        ]}
        sx={{
          width: "70%",
          backgroundColor: "transparent",
          padding: "6.25rem 0",
        }}
      >
        <Stack
          align="center"
          sx={{ width: "100%", backgroundColor: "transparent" }}
        >
          <img
            className={classes.img}
            src={img}
            width="40%"
            alt="Profile Photo"
          />
        </Stack>
        <Stack sx={{ width: "100%", backgroundColor: "transparent" }}>
          <Stack className={classes.texts}>
            <Title className={classes.aboutName} order={5}>
              Geovane Leite de Carvalho Filho
            </Title>

            <Title className={classes.aboutText} order={6}>
              I have 21 years old and I'm married to a very amazing person (I
              love you Beqa❤️) and the father of three cats. I like music of all
              kinds, but I'm passionate about Indie. My favorite bands are The
              Neighbourhood, Peach Pit, and Wallows. I really enjoy learning
              about different cultures and places, but I have a greater interest
              in Asian culture, and because of that my favorite game is Sekiro:
              Shadows Die Twice. I'm usually playing single-player games, but I
              also like to play different things, so send me a message and maybe
              we'll play something too?
            </Title>
            <Stack align="center" sx={{ backgroundColor: "transparent" }}>
              <Text
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                sx={{}}
              >
                Here is where you can find me:
              </Text>

              <Group spacing={"xl"} sx={{ backgroundColor: "transparent" }}>
                <Tooltip position="bottom" label="Github">
                  <Button
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    className={classes.button}
                    onClick={() =>
                      window.open("https://github.com/vannisson", "_blank")
                    }
                  >
                    <Icon width={"50px"} icon="fe:github-alt" />
                  </Button>
                </Tooltip>
                <Tooltip position="bottom" label="Linkedin">
                  <Button
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/geovaneleitefilho/",
                        "_blank"
                      )
                    }
                  >
                    <Icon width={"50px"} icon="mdi:linkedin" />
                  </Button>
                </Tooltip>
                <Tooltip position="bottom" label="Lattes">
                  <Button
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "http://lattes.cnpq.br/5633875540532123",
                        "_blank"
                      )
                    }
                  >
                    <Icon width={"50px"} icon="academicons:lattes" />
                  </Button>
                </Tooltip>
                <Tooltip position="bottom" label="Steam">
                  <Button
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    className={classes.button}
                    onClick={() =>
                      window.open(
                        "https://steamcommunity.com/id/geovanef/",
                        "_blank"
                      )
                    }
                  >
                    <Icon width={"50px"} icon="mdi:steam" />
                  </Button>
                </Tooltip>
              </Group>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}
