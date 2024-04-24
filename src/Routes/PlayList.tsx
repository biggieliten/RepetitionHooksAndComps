import { useContext } from "react";
import { GlobalMusic } from "../State/GlobalContext";
import BackButton from "../Components/BackButton/BackButton";

import { Outlet, useParams } from "react-router-dom";
import { SongType } from "../Types/SongTypes";
import Button from "../Components/Button/Button";
const PlayList = () => {
  const { playlistGenre } = useParams<{ playlistGenre: string }>();
  console.log(playlistGenre, "genre");
  const { state, dispatch } = useContext(GlobalMusic);
  //   console.log(state, "playlist");
  //  = useContext(GlobalMusic);

  const allSongs = Object.values(state).flat();
  //   console.log(allSongs, "allsongs");

  const filteredSongs = allSongs.filter(
    (song: any) => song.genre === playlistGenre
  );
  //   console.log(filteredSongs, "filtered");

  return (
    <>
      <div>
        <ul>
          {filteredSongs.map((song: any) => (
            <>
              <li>
                {song.title}
                {song.album}
                {song.genre}
              </li>
            </>
          ))}
        </ul>
      </div>
      <BackButton title="Back" link={`/`} />

      <Button
        ButtonClick={() => {}}
        link={"add"}
        ButtonTitle="Add song"
        Class="addButton"
      />
      <Outlet />
    </>
  );
};

export default PlayList;
