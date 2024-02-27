import { PlaybackState, PlayerState, Playlist } from "./types";

export function createAudioPlayer(
  playlist: Playlist,
  onStateChange: (state: PlayerState) => void
) {
  let currentTrackIndex = 0;
  const audioElement: HTMLAudioElement = new Audio();

  // Player state

  function emitCurrentPlayerState() {
    const state = computeCurrentPlayerState();
    onStateChange(state);
  }

  function computeCurrentPlayerState(): PlayerState {
    return {
      playbackState: getPlaybackState(),
    };
  }

  function getPlaybackState(): PlaybackState {
    return audioElement.paused ? "PAUSED" : "PLAYING";
  }

  // Event Listener

  function setupAudioElementListeners() {
    audioElement.addEventListener("PLAYING", emitCurrentPlayerState);
    audioElement.addEventListener("PAUSED", emitCurrentPlayerState);
  }

  //   track handling
  function loadTrack(index: number) {
    audioElement.src = playlist[index].audioSrc;
    audioElement.load();
    currentTrackIndex = index;
  }

  // init
  function init() {
    setupAudioElementListeners();
    loadTrack(0);
  }

  //  controls
  function togglePlayPause() {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  init();
  return togglePlayPause;
}
