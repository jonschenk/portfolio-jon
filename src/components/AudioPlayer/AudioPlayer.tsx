import { useRef } from "react";
import { createAudioPlayer } from "./PlayerLogic/Player";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import playlist from "./PlayerLogic/Playlist";
import "./AudioPlayer.css";

function AudioPlayer() {
  const togglePlayPauseRef = useRef(createAudioPlayer(playlist));
  createAudioPlayer(playlist);
  return (
    <div className="ctrl-container">
      <SongInfo />
      <ProgressBar />
      <Controls onPlayClick={togglePlayPauseRef.current} />
    </div>
  );
}

export default AudioPlayer;

// https://www.youtube.com/watch?v=ce2MI7-MnBE&ab_channel=Olli @38:47
