import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalSongs, initialSongs } from "./Global/GlobalContext";

import Root from "./Routes/root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <GlobalSongs.Provider value={[initialSongs]}></GlobalSongs.Provider>

    <RouterProvider router={router} />
  </React.StrictMode>
);