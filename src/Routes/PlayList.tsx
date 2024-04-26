import { useContext, useEffect, useState } from "react";
import { GlobalMusic } from "../State/GlobalContext";
import BackButton from "../Components/BackButton/BackButton";
import { Outlet, useParams } from "react-router-dom";
import Button from "../Components/Button/Button";
import { SongType } from "../Types/SongTypes";

const PlayList = () => {
  const { playlistGenre } = useParams<{ playlistGenre: string }>();
  const { state, dispatch } = useContext(GlobalMusic);
  const [albumCover, setAlbumCover] = useState(false);

  const allSongs = Object.values(state).flat() as SongType[];

  const filteredSongs: SongType[] = allSongs.filter(
    (song) => song.genre === playlistGenre
  );

  const handleRemoveDispatch = (song: any) => {
    dispatch({ type: "REMOVE_SONG", payload: song });
  };

  useEffect(() => {
    filteredSongs.map((song: SongType) => {
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
          <h1 className="playlistBoxHeader">{filteredSongs[0].genre}</h1>
          <BackButton
            buttonStyle="plBackButton"
            linkStyle="plBackLink"
            title="➜"
            link={`/`}
          />
          {filteredSongs.map((song: any) => (
            <>
              <li className="playListItem">
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
                <p>{song.length} Min</p>
                <p>{song.releaseYear}</p>
                <p>{song.genre}</p>
              </li>
            </>
          ))}
        </ul>

        <Button
          btnLinkStyle="plAddLink"
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
