import { initialSongsGlobal } from "./GlobalContext";
console.log(initialSongsGlobal, "initial");
const SongReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "ADD_SONG":
      return {};
    case "REMOVE_SONG":
      return {};
    default:
      return state;
  }
};

export default SongReducer;
