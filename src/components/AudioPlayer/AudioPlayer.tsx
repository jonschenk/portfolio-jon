import { useRef, useState } from "react";
import { createAudioPlayer } from "./PlayerLogic/Player";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import playlist from "./PlayerLogic/Playlist";
import "./AudioPlayer.css";
import { PlayerState, InitialPlayerState } from "./PlayerLogic/Types";

function AudioPlayer() {
  const [playerState, setPlayerState] =
    useState<PlayerState>(InitialPlayerState);
  const togglePlayPauseRef = useRef(
    createAudioPlayer(playlist, setPlayerState)
  );
  return (
    <div className="ctrl-container">
      <SongInfo />
      <ProgressBar />
      <Controls
        onPlayClick={togglePlayPauseRef.current}
        isPlaying={playerState.playbackState == "PLAYING"}
      />
    </div>
  );
}

export default AudioPlayer;
