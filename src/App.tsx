import FooterBar from "./components/FooterBar/FooterBar";
import Alert from "./components/Alert/Alert";
import Divider from "./components/Divider/Divider";
import Introduction from "./components/introduction/Introduction";
import AboutMe from "./components/AboutMe/AboutMe";
import MyFavoriteTools from "./components/MyFavoriteTools/MyFavoriteTools";
import GitHubStatus from "./components/GitHubStatus/GitHubStatus";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import AudioDescription from "./components/AudioPlayer/AudioDescription";
import Projects from "./components/projects/projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Introduction />
      <Alert />

      <Divider />
      <AboutMe />
      <Divider size="micro" />
      <GitHubStatus />
      <MyFavoriteTools />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider size="small" />
      <AudioDescription />
      <AudioPlayer />
      <FooterBar />
    </>
  );
}

export default App;
