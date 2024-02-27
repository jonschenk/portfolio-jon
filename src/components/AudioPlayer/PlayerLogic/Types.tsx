export type Playlist = Array<Track>;

export type Track = {
  audioSrc: string;
  metadata: TrackMetadata;
};

export type TrackMetadata = {
  title: string;
  year: string;
};
