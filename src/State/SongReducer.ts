import { initialSongsGlobal } from "./GlobalContext";
import { SongType, StateSongType } from "../Types/SongTypes";
import { Action } from "../Types/ReducerTypes";

const SongReducer = (state: StateSongType, action: Action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case "REMOVE_SONG":
      return {
        ...state,
        songs: state.songs.filter(
          (song: SongType) => song.title !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default SongReducer;
