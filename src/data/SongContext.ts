import { createContext } from "react";
import { SongType } from "../Types/SongTypes";
// import { uuid } from 'uuidv4';

export const initialSongs: SongType[] = [
  {
    artist: "Pink Floyd",
    title: "Breathe (In The Air)",
    album: "The Dark Side Of The Moon",
    releaseYear: "1973",
    genre: "Classic Rock",
    length: "2.49",
    albumCover: "",
  },
  {
    artist: "The Rolling Stones",
    title: "Sympathy For The Devil",
    album: "Beggars Banquet",
    releaseYear: "1968",
    genre: "Classic Rock",
    length: "6.18",
    albumCover: "",
  },
  {
    artist: "The Who",
    title: "The Seeker",
    album: "Meaty, Beaty, Big And Bouncy",
    releaseYear: "1971",
    genre: "Classic Rock",
    length: "3.10",
    albumCover: "",
  },
  {
    artist: "The Beach Boys",
    title: "Good Vibrations",
    album: "Smiley Smile",
    releaseYear: "1967",
    genre: "Classic Rock",
    length: "3.39",
    albumCover: "",
  },
  {
    artist: "MF DOOM",
    title: "Doomsday",
    album: "Operation: Doomsday",
    releaseYear: "1999",
    genre: "HipHop",
    length: "4.57",
    albumCover: "",
  },
  {
    artist: "Wu-Tang Clan",
    title: "C.R.E.A.M",
    album: "Enter The Wu-Tang",
    releaseYear: "1993",
    genre: "HipHop",
    length: "4.11",
    albumCover: "",
  },
  {
    artist: "Outkast",
    title: "Ms. Jackson",
    album: "Stankonia",
    releaseYear: "2000",
    genre: "HipHop",
    length: "4.30",
    albumCover: "",
  },
  {
    artist: "Freddie Gibbs (ft. The Alchemist)",
    title: "1985",
    album: "Alfredo",
    releaseYear: "2020",
    genre: "HipHop",
    length: "2.32",
    albumCover: "",
  },
];

export const SongContext = createContext([] as SongType[]);
