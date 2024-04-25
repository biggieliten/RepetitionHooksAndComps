import { useContext, useEffect, useState } from "react";
import { GlobalMusic } from "../State/GlobalContext";
import BackButton from "../Components/BackButton/BackButton";
import { Outlet, useParams } from "react-router-dom";
import Button from "../Components/Button/Button";

const PlayList = () => {
  const { playlistGenre } = useParams<{ playlistGenre: string }>();
  const { state, dispatch } = useContext(GlobalMusic);
  const [albumCover, setAlbumCover] = useState(false);

  const allSongs = Object.values(state).flat();

  const filteredSongs = allSongs.filter(
    (song: any) => song.genre === playlistGenre
  );

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
      <div className="playlist">
        <ul className="playlistBox">
          {filteredSongs.map((song: any) => (
            <>
              <li className="songListItem">
                <button
                  className="removeSongBtn"
                  onClick={() => handleRemoveDispatch(song.title)}
                >
                  &times;
                </button>
                {song.albumCover && (
                  <img
                    className={`albumCover ${albumCover ? "visible" : " "} `}
                    src={song.albumCover}
                    alt=""
                  />
                )}
                <h2>{song.title}</h2>
                <h4>{song.artist}</h4>
                <h4>{song.album}</h4>
                <p>{parseFloat(song.length).toFixed(2)} Min</p>
                <p>{song.releaseYear}</p>
                <p>{song.genre}</p>
              </li>
            </>
          ))}
        </ul>
        <BackButton title="Back" link={`/`} />

        <Button
          ButtonClick={() => {}}
          link={"add"}
          ButtonTitle="Add song"
          Class="addButton"
        />
        <Outlet />
      </div>
    </>
  );
};

export default PlayList;
