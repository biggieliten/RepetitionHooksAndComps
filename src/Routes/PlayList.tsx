import { useContext, useEffect, useState } from "react";
import { GlobalMusic } from "../State/GlobalContext";
import BackButton from "../Components/BackButton/BackButton";
import { Outlet, useParams } from "react-router-dom";
import Button from "../Components/Button/Button";
import { initialSongsGlobal } from "../State/GlobalContext";

const PlayList = () => {
  const { playlistGenre } = useParams<{ playlistGenre: string }>();
  //   console.log(playlistGenre, "genre");
  const { state, dispatch } = useContext(GlobalMusic);
  const [albumCover, setAlbumCover] = useState(false);

  const allSongs = Object.values(state).flat();
  //   console.log(allSongs, "allsongs");

  const filteredSongs = allSongs.filter(
    (song: any) => song.genre === playlistGenre
  );
  //   console.log(filteredSongs, "filtered");

  const handleRemoveDispatch = (song: any) => {
    dispatch({ type: "REMOVE_SONG", payload: song });
  };

  useEffect(() => {
    filteredSongs.map((song: any) => {
      if (song.albumCover) {
        setAlbumCover(true);
      } else {
        setAlbumCover(false);
      }
    });
  }, [filteredSongs]);

  return (
    <>
      <div>
        <ul>
          {filteredSongs.map((song: any) => (
            <>
              {song.albumCover && (
                <img
                  className={`albumCover ${albumCover ? "visible" : " "} `}
                  src={song.albumCover}
                  alt=""
                />
              )}
              <li>
                {song.title}
                {song.album}
                {song.genre}
              </li>
              <button onClick={() => handleRemoveDispatch(song.title)}>
                Remove
              </button>
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
