import { createContext, useReducer } from "react";
import { GlobalMusic, initialSongsGlobal } from "./GlobalContext";
import SongReducer from "./SongReducer";
// import { initialSongs } from "../data/SongContext";

type GlobalMusicProviderProps = {
  children: React.ReactNode;
};

export const GlobalMusicProvider = ({ children }: GlobalMusicProviderProps) => {
  const [state, dispatch] = useReducer(SongReducer, initialSongsGlobal);

  return (
    <GlobalMusic.Provider value={{ state, dispatch }}>
      {children}
    </GlobalMusic.Provider>
  );
};
