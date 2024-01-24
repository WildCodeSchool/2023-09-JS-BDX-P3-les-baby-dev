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
import Dashboard from "./pages/pages.pro/Dashboard";
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
import ParentContextProvider from "./context/ParentContext";
import StructureContextProvider from "./context/StrucutreContext";
import ApiService from "./services/api.service";
import currentProfilLoader from "./loaders/current-profil.loader";
import currentParentProfilLoader from "./loaders/current-parent-profil.loader";
import structuresLoader from "./loaders/structues.loader";
import currentNurseryLoader from "./loaders/current-nursery.loader";

const apiService = new ApiService();

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => currentProfilLoader(apiService),
    element: (
      <UserContextProvider apiService={apiService}>
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
          {
            path: "/searchlist",
            loader: async () => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await structuresLoader(apiService)),
            }),
            element: (
              <ParentContextProvider>
                <SearchList />
              </ParentContextProvider>
            ),
          },
          {
            children: [
              { path: "/searchlist/filter", element: <Filter /> },
              { path: "/searchlist/filter/dates", element: <FilterDate /> },
              {
                path: "/searchlist/filter/services",
                element: <FilterService />,
              },
            ],
          },
          {
            path: "/searchlist/nursery/:id",
            loader: async ({ params }) => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await currentNurseryLoader(apiService, params.id)),
            }),
            element: (
              <ParentContextProvider>
                <NurseryCard />
              </ParentContextProvider>
            ),
          },
          {
            path: "/searchlist/nursery/:id/reservation",
            loader: async () => currentParentProfilLoader(apiService),
            element: (
              <ParentContextProvider>
                <Reservation />
              </ParentContextProvider>
            ),
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
        // element: <IncriptionChildren />,
        children: [
          { path: "/profil", element: <Profil /> },
          { path: "/profil/myresa", element: <ProfilResa /> },
          {
            path: "/profil/inscription",
            loader: async () => currentParentProfilLoader(apiService),
            children: [
              {
                path: "/profil/inscription",
                element: (
                  <ParentContextProvider>
                    <InscriptionParent />
                  </ParentContextProvider>
                ),
              },
              {
                path: "/profil/inscription/children",
                element: (
                  <ParentContextProvider>
                    <IncriptionChildren />
                  </ParentContextProvider>
                ),
              },
              {
                path: "/profil/inscription/inscription",
                element: (
                  <ParentContextProvider>
                    <DocInscription />
                  </ParentContextProvider>
                ),
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
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/pro",
        element: (
          <ProContextProvider>
            <HomePro />
          </ProContextProvider>
        ),
      },
      {
        path: "/structure",
        loader: async () => {
          try {
            const data = await apiService.get(
              `${import.meta.env.VITE_BACKEND_URL}/api/users/structure`
            );
            return { preloadUserStructure: data ?? null };
          } catch (error) {
            console.error(error.message);
            return null;
          }
        },
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
