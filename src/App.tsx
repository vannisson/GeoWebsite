import {
  Anchor,
  AppShell,
  Group,
  Header,
  MantineProvider,
  Text,
} from "@mantine/core";
import About from "./components/About";
import Home from "./components/Home";
import useStyles from "./styles";
import Projects from "./components/Projects";
import Trajectory from "./components/Trajectory";
import Cats from "./components/Cats";

function App() {
  const { classes } = useStyles();
  return (
    <MantineProvider
      theme={{
        fontFamily: "Montserrat",
      }}
    >
      <AppShell
        p={0}
        header={
          <Header
            height={60}
            p="xs"
            sx={{
              backgroundColor: " #141517",
              border: "none",
              padding: 0,
              margin: 0,
              maxWidth: `100vw`,
            }}
          >
            <Group position="center" sx={{ gap: "2rem", height: "100%" }}>
              <Anchor className={classes.anchor} href="#Home">
                <Text>Home</Text>
              </Anchor>
              <Anchor className={classes.anchor} href="#About">
                About
              </Anchor>
              <Anchor className={classes.anchor} href="#Projects">
                Projects
              </Anchor>
              <Anchor className={classes.anchor} href="#Trajectory">
                Trajectory
              </Anchor>
              <Anchor className={classes.anchor} href="#Cats">
                Cats !?
              </Anchor>
            </Group>
          </Header>
        }
      >
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Trajectory></Trajectory>
        <Cats></Cats>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
