import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalMusic, initialSongsGlobal } from "./State/GlobalContext.ts";
import PlayList from "./Routes/PlayList.tsx";
import { AddForm } from "./Routes/AddForm.tsx";
import HomePage from "./Routes/HomePage.tsx";
import { GlobalMusicProvider } from "./State/GlobalContextProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>Error 404 Page not found</div>,
  },
  {
    path: "/playlist/:playlistGenre",
    element: <PlayList />,
    children: [
      {
        element: <AddForm />,
        path: "add",
      },
    ],
  },
  //   {
  //     path: "/playlist/:playlistGenre/add",
  //     element: <AddForm />,
  //   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalMusicProvider>
      <RouterProvider router={router} />
    </GlobalMusicProvider>
    {/* <App /> */}
    {/* <GlobalMusic.Provider value={[initialSongsG]}>
      <RouterProvider router={router} />
    </GlobalMusic.Provider> */}
  </React.StrictMode>
);
