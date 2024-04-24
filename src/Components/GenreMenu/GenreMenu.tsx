import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const MenuButtons: string[] = ["HipHop", "Classic Rock"];

const GenreMenu = () => {
  return (
    <>
      <div className="genreMenu">
        <h1 className="genreHeader">Choose your genre!</h1>

        {MenuButtons.map((genre) => (
          //   <Button
          //     Class={`menuButton ${genre}`}
          //     ButtonClick={() => {
          //       `${genre}`;
          //     }}
          //     ButtonTitle={genre}
          //     link={`playlist/${genre}`}
          //   <NavLink to={`playlist/${genre}`} > {genre}
          <NavLink to={`playlist/${genre}`}>{genre}</NavLink>
        ))}
        {/* <Button
					Class=".menuButton CR"
					ButtonClick={() => console.log("HipHop")}
					ButtonTitle="HipHop"
					link="/playlist"
				/>
				<Button
					Class=".menuButon HipHop"
					ButtonClick={() => console.log("Classic rock")}
					ButtonTitle="Classic Rock"
					link="/playlist"
				/> */}
      </div>
    </>
  );
};

export default GenreMenu;
