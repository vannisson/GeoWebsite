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
  Card,
} from "@mantine/core";
import { Icon } from "@iconify/react";
import useStyles from "./styles";
import img1 from "../../assets/IcerClinic.png";
import img2 from "../../assets/LexicanalyticsWeb.png";
import img3 from "../../assets/pos_tagging.png";

export default function Projects() {
  const { classes } = useStyles();
  return (
    <Stack
      id="Projects"
      sx={{
        width: "100%",
        backgroundColor: "#141517",
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
        Some of my public projects
      </Text>
      <Box className={classes.test}>
        <Card className={classes.card} shadow="xl" radius="md">
          <Card.Section>
            <img src={img1} width="100%" height="250" alt="Icer" />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} sx={{ color: "#C1C2C5" }}>
              <b>Icer - Clinic Managment</b>
            </Text>
          </Group>

          <Text
            size="sm"
            sx={{ color: "#909296", textAlign: "justify", height: "11.5rem" }}
          >
            Icer is a project developed during my graduation together with some
            colleagues. It is a health clinic management platform with an app
            developed so that therapists can record their procedures. It is a
            project developed using NodeJS, React, and Flutter.
          </Text>

          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href="https://clinicafrontend.netlify.app/"
          >
            See more
          </Button>
        </Card>
        <Card className={classes.card} shadow="xl" radius="md">
          <Card.Section>
            <img
              src={img2}
              width="100%"
              height="250"
              alt="Lexicanalytics Web"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} sx={{ color: "#C1C2C5" }}>
              <b>Lexicanalytics Web</b>
            </Text>
          </Group>

          <Text
            size="sm"
            sx={{ color: "#909296", textAlign: "justify", height: "11.5rem" }}
          >
            It is a textual analysis tool focused on analyzing the lexical
            richness of texts. It provides both descriptive statistical data and
            data related to the lexical richness, such as lexical diversity and
            density. This project relies on technologies such as Flask,
            PostgreSQL, Docker, and React.
          </Text>

          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href="https://github.com/vannisson/new_lexicanalytics"
          >
            See more
          </Button>
        </Card>
        <Card className={classes.card} shadow="xl" radius="md">
          <Card.Section>
            <img
              src={img3}
              width="100%"
              alt="BLSTM-BR-Morphological-Classifier"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500} sx={{ color: "#C1C2C5" }}>
              <b>BR - BLSTM POS TAGGER</b>
            </Text>
          </Group>

          <Text
            size="sm"
            sx={{ color: "#909296", textAlign: "justify", height: "11.5rem" }}
          >
            A Part of Speech Tagging algorithm developed using a neural network
            architecture with Bidirectional Long Short-Term Memory. This
            algorithm was developed to integrate Lexicanalytics Web as a POS
            Tagging module. The technologies used were Tensorflow, Keras, and
            Scikit-learn.
          </Text>

          <Button
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            fullWidth
            mt="md"
            radius="md"
            component="a"
            target="_blank"
            href="https://github.com/vannisson/BLSTM-BR-Morphological-Classifier/blob/main/BLSTM-BR-Morphological-Classifier.ipynb"
          >
            See more
          </Button>
        </Card>
      </Box>
    </Stack>
  );
}
