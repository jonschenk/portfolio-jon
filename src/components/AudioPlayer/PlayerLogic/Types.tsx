export type Playlist = Array<Track>;

export type Track = {
  audioSrc: string;
  metadata: TrackMetadata;
};

export type TrackMetadata = {
  title: string;
  year: string;
};

// Player state
export type PlayerState = {
  playbackState: PlaybackState;
};

export type PlaybackState = "PLAYING" | "PAUSED";

export const InitialPlayerState: PlayerState = {
  playbackState: "PAUSED",
};
