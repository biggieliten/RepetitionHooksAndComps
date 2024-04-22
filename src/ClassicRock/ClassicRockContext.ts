import { createContext } from "react";
import { SongType } from "../Types/SongTypes";

export const initialClassicRockSongs: SongType[] = [
  {
    artist: "Pink Floyd",
    title: "Breathe (In The Air)",
    album: "The Dark Side Of The Moon",
    releaseYear: "1973",
    genre: "Classic Rock",
    length: "2.49",
  },
  {
    artist: "The Rolling Stones",
    title: "Sympathy For The Devil",
    album: "Beggars Banquet",
    releaseYear: "1968",
    genre: "Classic Rock",
    length: "6.18",
  },
  {
    artist: "The Who",
    title: "The Seeker",
    album: "Meaty, Beaty, Big And Bouncy",
    releaseYear: "1971",
    genre: "Classic Rock",
    length: "3.10",
  },
  {
    artist: "The Beach Boys",
    title: "Good Vibrations",
    album: "Smiley Smile",
    releaseYear: "1967",
    genre: "Classic Rock",
    length: "3.39",
  },
];

export const ClassicRockContext = createContext([] as SongType[]);
