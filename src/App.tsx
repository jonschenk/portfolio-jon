import HeaderBar from "./components/HeaderBar/HeaderBar";
import Divider from "./components/Divider/Divider";
import Introduction from "./components/introduction/Introduction";
import AboutMe from "./components/AboutMe/AboutMe";
import MyFavoriteTools from "./components/MyFavoriteTools/MyFavoriteTools";
import GitHubStatus from "./components/GitHubStatus/GitHubStatus";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import AudioDescription from "./components/AudioPlayer/AudioDescription";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <HeaderBar />
      <Introduction />
      <Divider />
      <AboutMe />
      <Divider size="micro" />
      <GitHubStatus />
      <MyFavoriteTools />
      <Divider />
      <Projects />
      <Divider />
      <AudioDescription />
      <AudioPlayer />
      {/* <Projects /> */}
      {/* Contact container */}
      {/* Footer container */}
    </>
  );
}

export default App;
