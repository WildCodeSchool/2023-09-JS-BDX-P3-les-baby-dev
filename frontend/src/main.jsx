import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import HomePro from "./pages/HomePro";
import Loc from "./pages/Loc";
import SearchList from "./pages/SearchList";
import ProLogin from "./pages/ProLogin";
import ProRegister from "./pages/ProRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/loc",
        element: <Loc />,
      },
      {
        path: "/searchlist",
        element: <SearchList />,
        children: [],
      },
    ],
  },
  {
    path: "/pro",
    element: <HomePro />,
    children: [
      {
        path: "/connect",
        element: <ProLogin />,
      },
      {
        path: "/register",
        element: <ProRegister />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
