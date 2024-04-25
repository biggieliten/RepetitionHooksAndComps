import { createContext, useState } from "react";
import { initialSongs } from "../data/SongContext";
import { SongType } from "../Types/SongTypes";
import { Action } from "../Types/ReducerTypes";

type GlobalContextType = {
  songs: SongType[];
  state?: string[];
};

export const initialSongsGlobal: GlobalContextType = {
  songs: initialSongs,
};

export const GlobalMusic = createContext<{
  state: GlobalContextType;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialSongsGlobal,
  dispatch: () => null,
});
console.log(initialSongsGlobal, "isg");
