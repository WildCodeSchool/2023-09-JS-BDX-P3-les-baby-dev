import React from "react";
import "./profil.scss";
import { Link, useLoaderData } from "react-router-dom";
import NavProfil from "../../components/profile.components/NavProfil";
import { useUser } from "../../context/UserContext";
import HeaderNav from "../../components/profile.components/HeaderNav";
import imageDefault from "../../assets/user-solid.svg";

function Profil() {
  const { logout } = useUser();
  const loaderDataParent = useLoaderData();
  const myProfil = loaderDataParent?.parentProfil ?? "";

  return (
    <div className="profil_container">
      <HeaderNav />
      <div className="name-profil">
        <h2>Bienvenue dans votre espace personnel</h2>
        <div className="avatar">
          <img
            src={
              myProfil.avatarPath !== null
                ? `${import.meta.env.VITE_BACKEND_URL}/${myProfil.avatarPath}`
                : imageDefault
            }
            alt=""
          />
        </div>
        <h1>
          {myProfil?.parentFName ?? ""} {myProfil?.parentName ?? ""}
        </h1>
      </div>
      <div className="list_options">
        <ul>
          <Link to="/profil/inscription">
            <li>Dossier d'inscription</li>
          </Link>
          <Link to="/profil/myresa">
            <li>Mes réservations</li>
          </Link>
          <button type="button" onClick={logout}>
            Déconnexion
          </button>
        </ul>
      </div>
      <NavProfil />
    </div>
  );
}

export default Profil;
