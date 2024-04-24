import { Navigate, useParams } from "react-router-dom";
import BackButton from "../Components/BackButton/BackButton";
import Input from "../Components/Input/Input";
import { useState } from "react";
import DropDown from "../Components/DropDown/DropDown";
import { DropDownOption } from "../Components/DropDown/DropDownOption";

export const AddForm = () => {
  const { playlistGenre } = useParams();
  const [songInfo, setSongInfo] = useState({
    artist: "",
    title: "",
    album: "",
    releaseYear: "",
    genre: "",
    length: "",
  });

  return (
    <>
      <div>
        <h1>Add a song!</h1>
        <Input inputType="text" labelName="Title " />
        <Input inputType="text" labelName="Artist " />
        <Input inputType="text" labelName="Album " />
        <Input inputType="text" labelName="Release Year " />
        <Input inputType="number" labelName="Length " />
        <Input inputType="text" labelName="Genre " />
        <DropDown>
          <DropDownOption value="HipHop" />
          <DropDownOption value="Classic Rock" />
        </DropDown>
      </div>
      <BackButton link={`/playlist/${playlistGenre}`} title="Back" />
    </>
  );
};
