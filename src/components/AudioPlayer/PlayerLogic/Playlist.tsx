import HIGH from "./Discography/H!GH.wav";
import Cascade from "./Discography/Cascade.wav";
import Overflow from "./Discography/Overflow.wav";
import Tangerine from "./Discography/Tangerine.wav";
import SomethingComforting from "./Discography/something comforting halftale cover.mp3";
import Divinity from "./Discography/Divinity (w Lunar).wav";
import TheDifference from "./Discography/The Difference.wav";
import SomethingThatINeed from "./Discography/Something That I Need.wav";
import Reliance from "./Discography/reliance.wav";
import UntitledBassTrack from "./Discography/Untitled Bass Track.wav";

import { Playlist } from "./Types";

const playlist: Playlist = [
  {
    audioSrc: Tangerine,
    metadata: {
      title: "Tangerine",
      year: "2021",
    },
  },
  {
    audioSrc: SomethingThatINeed,
    metadata: {
      title: "Something That I Need",
      year: "2022",
    },
  },
  {
    audioSrc: Overflow,
    metadata: {
      title: "Overflow",
      year: "2022",
    },
  },
  {
    audioSrc: UntitledBassTrack,
    metadata: {
      title: "Untitled Bass Track",
      year: "2022",
    },
  },
  {
    audioSrc: SomethingComforting,
    metadata: {
      title: "Something Comforting (Cover)",
      year: "2023",
    },
  },
  {
    audioSrc: Reliance,
    metadata: {
      title: "Reliance",
      year: "2023",
    },
  },
  {
    audioSrc: Cascade,
    metadata: {
      title: "Cascade",
      year: "2022",
    },
  },
  {
    audioSrc: HIGH,
    metadata: {
      title: "H!GH",
      year: "2023",
    },
  },
  {
    audioSrc: Divinity,
    metadata: {
      title: "Divinity (Cover) [ft. Lunar]",
      year: "2022",
    },
  },
  {
    audioSrc: TheDifference,
    metadata: {
      title: "The Difference (Cover)",
      year: "2022",
    },
  },
];

export default playlist;
