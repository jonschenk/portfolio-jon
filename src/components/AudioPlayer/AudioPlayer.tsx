import { useRef, useState } from "react";
import { createAudioPlayer } from "./PlayerLogic/Player";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import playlist from "./PlayerLogic/Playlist";
import "./AudioPlayer.css";
import { PlayerState, InitialPlayerState } from "./PlayerLogic/Types";
import useAudioPlayer from "./hooks";

const AudioPlayer = () => {
  const {
    playerState,
    playNextTrack,
    playPrevTrack,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    shuffle,
    playbackState,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress(): number {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  return (
    <div className="ctrl-container">
      <SongInfo title={currentTrackMetadata?.title} />
      <ProgressBar
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        rightLabel={formatTime(currentTrackDuration)}
        onChange={setProgress}
        progress={computeProgress()}
      />
      <Controls
        shuffle={shuffle}
        repeat={repeat}
        onShuffleClick={toggleShuffle}
        onRepeatClick={toggleRepeat}
        onPrevClick={playPrevTrack}
        onNextClick={playNextTrack}
        onPlayClick={togglePlayPause}
        isPlaying={playbackState === "PLAYING"}
      />
    </div>
  );
};

export default AudioPlayer;

function formatTime(timeInSeconds: number | null): string {
  if (timeInSeconds === null) {
    return "";
  }
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, "0");
  const seconds = `${numberOfSeconds}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
}
