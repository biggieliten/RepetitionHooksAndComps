import { SongType } from "./SongTypes";

export type Action =
  | { type: "ADD_SONG"; payload: SongType }
  | { type: "REMOVE_SONG"; payload: string };
