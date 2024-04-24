import { createContext, useState } from "react";

import { initialClassicRockSongs } from "../ClassicRock/ClassicRockContext";
import { initialHipHopSongs } from "../HipHop/HipHopContext";
import { SongType } from "../Types/SongTypes";

type GlobalContextType = {
  hiphop: SongType[];
  classicrock: SongType[];
};

export const initialSongs: GlobalContextType = {
  hiphop: initialHipHopSongs,
  classicrock: initialClassicRockSongs,
};
// const GlobalMusic = createContext<GlobalContextType>()

// const GloblMusicProvider: React.FC = ({ children }) => {
//   const [songs, setSongs] = useState<SongType[]>([]);
// };

// return(
// 	<Gl
// )
console.log(initialSongs);
export const GlobalMusic = createContext([] as GlobalContextType[]);
