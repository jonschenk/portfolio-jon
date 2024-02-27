export type Playlist = Array<Track>;

export type Track = {
  audioSrc: string;
  metadata: TrackMetadata;
};

export type Controls = {
  toggleRepeat: () => void;
  toggleShuffle: () => void;
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPrevTrack: () => void;
  cleanup: () => void;
  setPlaybackPosition: (position: number) => void;
};

export type TrackMetadata = {
  title: string;
  year: string;
};

// Player state
export type PlayerState = {
  currentTrackDuration: number | null;
  currentTrackPlaybackPosition: number | null;
  playbackState: PlaybackState;
  repeat: boolean;
  shuffle: boolean;
  currentTrackMetadata: TrackMetadata | null;
};

export type PlaybackState = "PLAYING" | "PAUSED";

export const InitialPlayerState: PlayerState = {
  currentTrackMetadata: null,
  currentTrackDuration: null,
  currentTrackPlaybackPosition: null,
  playbackState: "PAUSED",
  repeat: false,
  shuffle: false,
};
