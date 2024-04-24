import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalMusic, initialSongs } from "./Global/GlobalContext";
import PlayList from "./Components/PlayList/PlayList.tsx";

import HomePage from "./Routes/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Error 404 Page not found</div>,
  },
  {
    path: "/playlist/:playlistGenre",
    element: <PlayList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <GlobalMusic.Provider value={[initialSongs]}>
      <RouterProvider router={router} />
    </GlobalMusic.Provider>
  </React.StrictMode>
);
