import { createContext } from "react";

import { initialClassicRockSongs } from "../ClassicRock/ClassicRockContext";
import { intiialHipHopSongs } from "../HipHop/HipHopContext";
import { SongType } from "../Types/SongTypes";

type GlobalContextType = {
  hiphop: SongType[];
  classicrock: SongType[];
};

export const initialSongs: GlobalContextType = {
  hiphop: intiialHipHopSongs,
  classicrock: initialClassicRockSongs,
};

// console.log(initialSongs);
export const GlobalSongs = createContext([] as GlobalContextType[]);
