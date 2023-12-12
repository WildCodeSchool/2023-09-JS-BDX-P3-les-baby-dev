import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./pages/Home";
import HomePro from "./pages/HomePro";
import Loc from "./pages/Loc";
import SearchList from "./pages/SearchList";
import ProLogin from "./pages/ProLogin";
import ProRegister from "./pages/ProRegister";
import App from "./App";
import "./assets/scss/mdb.pro.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/pro/connect",
        element: <ProLogin />,
      },
      {
        path: "/pro/register",
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
