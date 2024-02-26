import HeaderBar from "./components/HeaderBar/HeaderBar";
import Divider from "./components/Divider/Divider";
import Introduction from "./components/introduction/Introduction";
import MyFavoriteTools from "./components/MyFavoriteTools/MyFavoriteTools";
import GitHubStatus from "./components/GitHubStatus/GitHubStatus";

function App() {
  return (
    // Introduction container
    // Socials container
    //     Socials buttons
    // About container
    // Projects container
    //     Project cards
    // Contact container
    // Footer container
    <>
      <HeaderBar />
      <Introduction />
      <Divider />
      <GitHubStatus />
      {/* <MyFavoriteTools /> */}
    </>
  );
}

export default App;
