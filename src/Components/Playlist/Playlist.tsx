import { useContext } from "react";
import { GlobalMusic } from "../../Global/GlobalContext";
import BackButton from "../BackButton/BackButton";

import { useParams } from "react-router-dom";
import { SongType } from "../../Types/SongTypes";
const PlayList = () => {
  const { playlistGenre } = useParams<{ playlistGenre: string }>();
  let [genres] = useContext(GlobalMusic);

  const allSongs = Object.values(genres).flat();
  console.log(allSongs);

  const filteredSongs = allSongs.filter((song) => song.genre === playlistGenre);
  console.log(filteredSongs);

  return (
    <>
      <div>
        <ul>
          {filteredSongs.map((s: SongType) => (
            <>
              <li>
                {
                  s.title + " -" + s.artist
                  //   s.genre +
                  //   s.length +
                  //   s.releaseYear +
                  //   s.title
                }
              </li>
            </>
          ))}
        </ul>
      </div>

      <BackButton title="Back" link={`/`} />
    </>
  );
};

export default PlayList;
