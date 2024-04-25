import { Navigate, useParams } from "react-router-dom";
import BackButton from "../Components/BackButton/BackButton";
import Input from "../Components/Input/Input";
import { useContext, useState } from "react";
import DropDown from "../Components/DropDown/DropDown";
import { DropDownOption } from "../Components/DropDown/DropDownOption";
import Button from "../Components/Button/Button";
import { GlobalMusic } from "../State/GlobalContext";
import { Action } from "../Types/ReducerTypes";

const AddForm = () => {
  const { state, dispatch } = useContext(GlobalMusic);
  console.log(state, "state add");

  const { playlistGenre } = useParams();
  const [song, setSong] = useState({
    artist: "",
    title: "",
    album: "",
    releaseYear: "",
    genre: "",
    length: "",
    albumCover: "",
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleAddDispatch: React.FormEventHandler<
    HTMLFormElement | HTMLButtonElement
  > = (e) => {
    e.preventDefault;
    console.log(song);
    dispatch({ type: "ADD_SONG", payload: song });
  };

  console.log(song, "new song");

  return (
    <>
      <div>
        <form action="">
          <h1>Add a song!</h1>
          <Input
            name="title"
            value={song.title}
            onChange={handleChange}
            inputType="text"
            labelName="Title "
          />
          <Input
            name="artist"
            value={song.artist}
            onChange={handleChange}
            inputType="text"
            labelName="Artist "
          />
          <Input
            name="album"
            value={song.album}
            onChange={handleChange}
            inputType="text"
            labelName="Album "
          />
          <Input
            name="releaseYear"
            value={song.releaseYear}
            onChange={handleChange}
            inputType="text"
            labelName="Release Year "
          />
          <Input
            name="length"
            value={song.length}
            onChange={handleChange}
            inputType="number"
            labelName="Length "
          />
          <Input
            name="albumCover"
            value={song.albumCover}
            onChange={handleChange}
            inputType="text"
            labelName="Album Cover "
          />

          <DropDown onChange={handleChange} value={song.genre} name="genre">
            <DropDownOption value="Choose a genre" />
            <DropDownOption value="HipHop" />
            <DropDownOption value="Classic Rock" />
          </DropDown>
        </form>
        <BackButton link={`/playlist/${playlistGenre}`} title="Back" />
        <Button
          Class="submitButton"
          ButtonClick={handleAddDispatch}
          ButtonTitle="Submit song"
          link={`/playlist/${playlistGenre}`}
        />
        {/* <button
          className="submitSong"
          onClick={handleDispatch}
          //   ButtonTitle="Submit song"
        >
          Submit Song
        </button> */}
      </div>
    </>
  );
};

export default AddForm;
