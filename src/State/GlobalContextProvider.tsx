import { createContext, useReducer } from "react";
import { GlobalMusic, initialSongsGlobal } from "./GlobalContext";
import SongReducer from "./SongReducer";
// import { initialSongs } from "../data/SongContext";

type GlobalMusicProviderProps = {
  children: React.ReactNode;
};

export const GlobalMusicProvider = ({ children }: GlobalMusicProviderProps) => {
  const [state, dispatch] = useReducer(SongReducer, initialSongsGlobal.songs);

  //   console.log(initialSongsGlobal, "init");
  //   console.log(state, "state");
  //   console.log(state, "GlobalState");

  return (
    <GlobalMusic.Provider value={{ state, dispatch }}>
      {children}
    </GlobalMusic.Provider>
  );
};

// GlobalMusicProvider();
