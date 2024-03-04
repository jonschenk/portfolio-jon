import HeaderBar from "./components/HeaderBar/HeaderBar";
import Divider from "./components/Divider/Divider";
import Introduction from "./components/introduction/Introduction";
import MyFavoriteTools from "./components/MyFavoriteTools/MyFavoriteTools";
import GitHubStatus from "./components/GitHubStatus/GitHubStatus";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Description from "./components/AudioPlayer/Description";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <HeaderBar />
      <Introduction />
      <Divider />
      <GitHubStatus />
      {/* About container */}
      <MyFavoriteTools />
      <Divider size="small" />
      <Description />
      <AudioPlayer />
      {/* <Projects /> */}
      {/* Contact container */}
      {/* Footer container */}
    </>
  );
}

export default App;
