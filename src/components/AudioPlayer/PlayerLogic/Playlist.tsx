import HIGH from "/assets/Discography/H!GH.wav";
import Cascade from "/assets/Discography/Cascade.wav";
import Overflow from "/assets/Discography/Overflow.wav";
import Tangerine from "/assets/Discography/Tangerine.wav";
import SomethingComforting from "/assets/Discography/something comforting halftale cover.mp3";
import Divinity from "/assets/Discography/Divinity (w Lunar).wav";
import TheDifference from "/assets/Discography/The Difference.wav";
import SomethingThatINeed from "/assets/Discography/Something That I Need.wav";
import Reliance from "/assets/Discography/reliance.wav";
import UntitledBassTrack from "/assets/Discography/Untitled Bass Track.wav";

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
