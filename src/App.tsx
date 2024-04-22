import "./App.css";
import { GlobalSongs, initialSongs } from "./Global/GlobalContext";
import GenreMenu from "./Components/GenreMenu/GenreMenu";

function App() {
  console.log([initialSongs]);
  return (
    <>
      <div>
        <GlobalSongs.Provider value={[initialSongs]}></GlobalSongs.Provider>
        {/* <GenreMenu /> */}
      </div>
    </>
  );
}

export default App;
