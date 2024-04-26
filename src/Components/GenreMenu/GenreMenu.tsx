import { NavLink } from "react-router-dom";

export const MenuButtons: string[] = [
  "HipHop",
  "Classic Rock",
  "Jazz",
  "Blues",
  "Electronic",
];

const GenreMenu = () => {
  return (
    <>
      <div className="genreMenu">
        <h1 className="genreHeader">Choose your genre</h1>

        {MenuButtons.map((genre) => (
          <NavLink className="navLink" to={`playlist/${genre}`}>
            {genre}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default GenreMenu;
