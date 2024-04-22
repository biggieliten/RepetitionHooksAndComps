import Button from "../Button/Button";
const GenreMenu = () => {
  return (
    <>
      <div className="genreMenu">
        <Button
          ButtonClick={() => console.log("HipHop")}
          ButtonTitle="HipHop"
        />
        <Button
          ButtonClick={() => console.log("Classic rock")}
          ButtonTitle="Classic Rock"
        />
      </div>
    </>
  );
};

export default GenreMenu;
