import {
  Controls,
  PlaybackState,
  PlayerState,
  Playlist,
  TrackMetadata,
} from "./Types";

export function createAudioPlayer(
  playlist: Playlist,
  onStateChange: (state: PlayerState) => void
): Controls {
  let currentTrackIndex = 0;
  let repeat = false;
  let shuffle = false;
  const audioElement: HTMLAudioElement = new Audio();
  const playbackHistory: Array<number> = [];

  // Player state

  function emitCurrentPlayerState() {
    const state = computeCurrentPlayerState();
    onStateChange(state);
  }

  function computeCurrentPlayerState(): PlayerState {
    return {
      currentTrackMetadata: getCurrentTrackMetadata(),
      currentTrackDuration: getCurrentTrackDuration(),
      currentTrackPlaybackPosition: getCurrentTrackPlaybackPosition(),
      playbackState: getPlaybackState(),
      repeat,
      shuffle,
    };
  }

  function getCurrentTrackMetadata(): TrackMetadata | null {
    if (currentTrackIndex < playlist.length) {
      return playlist[currentTrackIndex].metadata;
    } else {
      return null;
    }
  }

  function getCurrentTrackDuration(): number | null {
    return isNaN(audioElement.duration) ? null : audioElement.duration;
  }

  function getCurrentTrackPlaybackPosition(): number | null {
    return isNaN(audioElement.currentTime) ? null : audioElement.currentTime;
  }

  function getPlaybackState(): PlaybackState {
    return audioElement.paused ? "PAUSED" : "PLAYING";
  }

  // Event Listener

  function setupAudioElementListeners() {
    audioElement.addEventListener("playing", emitCurrentPlayerState);
    audioElement.addEventListener("pause", emitCurrentPlayerState);
    audioElement.addEventListener("ended", onCurrentTrackEnded);
    audioElement.addEventListener("timeupdate", emitCurrentPlayerState);
    audioElement.addEventListener("loadeddata", emitCurrentPlayerState);
  }

  function removeAudioElementListeners() {
    audioElement.removeEventListener("playing", emitCurrentPlayerState);
    audioElement.removeEventListener("pause", emitCurrentPlayerState);
    audioElement.removeEventListener("ended", onCurrentTrackEnded);
    audioElement.removeEventListener("timeupdate", emitCurrentPlayerState);
    audioElement.removeEventListener("loadeddata", emitCurrentPlayerState);
  }

  function onCurrentTrackEnded() {
    if (repeat) {
      replayCurrentTrack();
    } else {
      playNextTrack();
    }
  }

  //   track handling
  function loadTrack(index: number) {
    audioElement.src = playlist[index].audioSrc;
    audioElement.load();
    currentTrackIndex = index;
  }

  function computeNextTrackIndex(): number {
    return shuffle ? computeRandomTrackIndex() : computeSubsequenTrackIndex();
  }

  function computeSubsequenTrackIndex(): number {
    return (currentTrackIndex + 1) % playlist.length;
  }

  function computeRandomTrackIndex(): number {
    if (playlist.length === 1) {
      return 0;
    }

    const index = Math.floor(Math.random() * playlist.length - 1);
    return index < currentTrackIndex ? index : index + 1;
  }

  function replayCurrentTrack() {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  // init & cleanup
  function init() {
    setupAudioElementListeners();
    loadTrack(0);
  }

  function cleanup() {
    removeAudioElementListeners();
    audioElement.pause();
  }

  //  controls
  function togglePlayPause() {
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  function playNextTrack() {
    playbackHistory.push(currentTrackIndex);
    const nextTrackIndex = computeNextTrackIndex();
    loadTrack(nextTrackIndex);
    audioElement.play();
  }

  function playPrevTrack() {
    if (playbackHistory.length === 0 || audioElement.currentTime > 3) {
      replayCurrentTrack();
      return;
    } else {
      const prevTrackIndex = playbackHistory.pop();
      loadTrack(prevTrackIndex!);
      audioElement.play();
    }
  }

  function toggleRepeat() {
    repeat = !repeat;
    emitCurrentPlayerState();
  }

  function toggleShuffle() {
    shuffle = !shuffle;
    emitCurrentPlayerState();
  }

  function setPlaybackPosition(position: number) {
    if (isNaN(position)) return;
    audioElement.currentTime = position;
  }

  init();
  return {
    setPlaybackPosition,
    toggleShuffle,
    toggleRepeat,
    playNextTrack,
    playPrevTrack,
    togglePlayPause,
    cleanup,
  };
}
