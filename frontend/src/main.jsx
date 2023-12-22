import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePro from "./pages/pages.pro/HomePro";
import SearchList from "./pages/pages.parents/SearchList";
import "./assets/scss/mdb.pro.scss";
import Home from "./pages/pages.parents/Home";
import UserContextProvider from "./context/UserContext";
import ProContextProvider from "./context/ProContext";
import App from "./App";
import Login from "./pages/login/register/Login";
import Register from "./pages/login/register/Register";
import Filter from "./pages/pages.parents/search-nursery/Filter";
import FilterDate from "./pages/pages.parents/search-nursery/FilterDate";
import FilterService from "./pages/pages.parents/search-nursery/FilterService";
import NurseryCard from "./pages/pages.parents/NurseryCard";
import Reservation from "./pages/pages.parents/profil/Reservation";
import ConditonResa from "./pages/pages.parents/reservation/ConditionResa";
import Profil from "./pages/pages.parents/Profil";
import ProfilResa from "./pages/pages.parents/profil/ProfilResa";
import InscriptionParent from "./pages/pages.parents/profil/InscriptionParent";
import IncriptionChildren from "./pages/pages.parents/profil/InscriptionChildren";
import DocInscription from "./pages/pages.parents/profil/InscriptionDoc";
import ConfirmationResa from "./pages/pages.parents/reservation/ConfirmationResa";
import StructureRegister from "./pages/pages.pro/StructureRegister";
import ReservationFinal from "./pages/pages.parents/reservation/ReservationFinal";
import StructureContextProvider from "./context/StrucutreContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/searchlist",
        children: [
          { path: "/searchlist", element: <SearchList /> },
          {
            path: "/searchlist/filter",
            element: <Filter />,
            children: [
              { path: "/searchlist/filter/dates", element: <FilterDate /> },
              {
                path: "/searchlist/filter/services",
                element: <FilterService />,
              },
            ],
          },
          {
            path: "/searchlist/nursery",
            element: <NurseryCard />,
          },
          {
            path: "/searchlist/reservation",
            element: <Reservation />,
          },
          {
            path: "/searchlist/conditions",
            element: <ConditonResa />,
          },
          {
            path: "/searchlist/reservation2",
            element: <ReservationFinal />,
          },
          {
            path: "/searchlist/confirmation",
            element: <ConfirmationResa />,
          },
        ],
      },
      {
        path: "/profil",
        element: <InscriptionParent />,
        // element: <IncriptionChildren />,
        children: [
          { path: "/profil/myresa", element: <ProfilResa /> },
          {
            path: "/profil/inscription",
            element: <Profil />,
            children: [
              {
                path: "/profil/inscription/children",
                element: <IncriptionChildren />,
                // element: <InscriptionParent />,
              },
              {
                path: "/profil/inscription/documents",
                element: <DocInscription />,
              },
            ],
          },
        ],
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/pro",
        element: (
          <ProContextProvider>
            <HomePro />
          </ProContextProvider>
        ),
        children: [],
      },
      {
        path: "/structure",
        element: (
          <StructureContextProvider>
            <StructureRegister />
          </StructureContextProvider>
        ),
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
