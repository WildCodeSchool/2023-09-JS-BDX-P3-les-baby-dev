import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-react-file-upload/dist/css/file-upload.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePro from "./pages/pages.pro/HomePro";
import SearchList from "./pages/pages.parents/SearchList";
import Home from "./pages/pages.parents/Home";
import UserContextProvider from "./context/UserContext";
import ProContextProvider from "./context/ProContext";
import App from "./App";
import Login from "./pages/login/register/Login";
import Dashboard from "./pages/pages.pro/Dashboard";
import Register from "./pages/login/register/Register";
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
import currentOneParentLoader from "./loaders/current-parentById.loader";
import reservationLoader from "./loaders/current-reservation.loader";
import hoursLoader from "./loaders/current-hours.loader";
import currentStructureProfil from "./loaders/current-structure-profil.loader";
import currentStructureHours from "./loaders/current-structure-hours.loader";
import RefusResa from "./pages/pages.parents/reservation/RefusResa";

const apiService = new ApiService();

const router = createBrowserRouter([
  {
    path: "/",
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
              ...(await currentProfilLoader(apiService)),
              ...(await currentParentProfilLoader(apiService)),
              ...(await structuresLoader(apiService)),
              ...(await hoursLoader(apiService)),
            }),
            element: (
              <ParentContextProvider>
                <SearchList />
              </ParentContextProvider>
            ),
          },

          {
            path: "/searchlist/filter/services",
            loader: async () => ({
              ...(await currentParentProfilLoader(apiService)),
            }),
            element: (
              <ParentContextProvider>
                <FilterService />
              </ParentContextProvider>
            ),
          },

          {
            path: "/searchlist/nursery/:id",
            loader: async ({ params }) => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await currentNurseryLoader(apiService, params.id)),
              ...(await hoursLoader(apiService)),
            }),
            element: (
              <ParentContextProvider>
                <NurseryCard />
              </ParentContextProvider>
            ),
          },
          {
            path: "/searchlist/nursery/:id/reservation",
            loader: async ({ params }) => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await currentNurseryLoader(apiService, params.id)),
            }),
            element: (
              <ParentContextProvider>
                <Reservation />
              </ParentContextProvider>
            ),
          },
          {
            path: "/searchlist/conditions",
            loader: async ({ params }) => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await currentNurseryLoader(apiService, params.id)),
            }),
            element: (
              <ParentContextProvider>
                <ConditonResa />
              </ParentContextProvider>
            ),
          },
          {
            path: "/searchlist/reservation2",
            loader: async ({ params }) => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await currentNurseryLoader(apiService, params.id)),
              ...(await structuresLoader(apiService)),
            }),
            element: (
              <ParentContextProvider>
                <ReservationFinal />
              </ParentContextProvider>
            ),
          },
          {
            path: "/searchlist/confirmation",
            loader: async ({ params }) => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await currentNurseryLoader(apiService, params.id)),
            }),
            element: (
              <ParentContextProvider>
                <ConfirmationResa />
              </ParentContextProvider>
            ),
          },
          {
            path: "/searchlist/refus",
            loader: async ({ params }) => ({
              ...(await currentParentProfilLoader(apiService)),
              ...(await currentNurseryLoader(apiService, params.id)),
            }),
            element: (
              <ParentContextProvider>
                <RefusResa />
              </ParentContextProvider>
            ),
          },
        ],
      },
      {
        path: "/profil",
        // element: <IncriptionChildren />,
        children: [
          {
            path: "/profil",
            loader: async () => ({
              ...(await currentParentProfilLoader(apiService)),
            }),
            element: (
              <ParentContextProvider>
                <Profil />
              </ParentContextProvider>
            ),
          },
          {
            path: "/profil/myresa",
            loader: async () => ({
              ...(await currentOneParentLoader(apiService)),
              ...(await currentParentProfilLoader(apiService)),
              ...(await structuresLoader(apiService)),
            }),
            element: (
              <ParentContextProvider>
                <ProfilResa />
              </ParentContextProvider>
            ),
          },
          {
            path: "/profil/inscription",
            loader: async () => currentParentProfilLoader(apiService),
            children: [
              {
                path: "/profil/inscription",
                loader: async () => currentParentProfilLoader(apiService),

                element: (
                  <ParentContextProvider>
                    <InscriptionParent />
                  </ParentContextProvider>
                ),
              },
              {
                path: "/profil/inscription/children",
                loader: async () => currentParentProfilLoader(apiService),
                element: (
                  <ParentContextProvider>
                    <IncriptionChildren />
                  </ParentContextProvider>
                ),
              },
              {
                path: "/profil/inscription/inscription",
                loader: async () => currentParentProfilLoader(apiService),

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
      {
        path: "/dashboard",
        loader: async () => ({
          ...(await currentProfilLoader(apiService)),
          ...(await currentOneParentLoader(apiService)),
          ...(await reservationLoader(apiService)),
          ...(await currentStructureProfil(apiService)),
          ...(await currentStructureHours(apiService)),
        }),
        element: (
          <StructureContextProvider>
            <Dashboard />
          </StructureContextProvider>
        ),
      },
      {
        path: "/pro",
        element: (
          <ProContextProvider>
            <HomePro />
          </ProContextProvider>
        ),
      },
      {
        path: "/structure/step/:step",
        loader: async () => ({
          ...(await currentProfilLoader(apiService)),
          ...(await currentStructureProfil(apiService)),
          ...(await currentStructureHours(apiService)),
        }),
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
