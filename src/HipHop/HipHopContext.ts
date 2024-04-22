import { createContext } from "react";
import { SongType } from "../Types/SongTypes";

export const intiialHipHopSongs: SongType[] = [
  {
    artist: "MF DOOM",
    title: "Doomsday",
    album: "Operation: Doomsday",
    releaseYear: "1999",
    genre: "Hip Hop",
    length: "4.57",
  },
  {
    artist: "Wu-Tang Clan",
    title: "C.R.E.A.M",
    album: "Enter The Wu-Tang",
    releaseYear: "1993",
    genre: "Hip Hop",
    length: "4.11",
  },
  {
    artist: "Outkast",
    title: "Ms. Jackson",
    album: "Stankonia",
    releaseYear: "2000",
    genre: "Hip Hop",
    length: "4.30",
  },
  {
    artist: "Freddie Gibbs (ft. The Alchemist)",
    title: "1985",
    album: "Alfredo",
    releaseYear: "2020",
    genre: "Hip Hop",
    length: "2.32",
  },
];

export const HipHopContext = createContext([] as SongType[]);
