import React from "react";
import "./profil.scss";
import { Link, useLoaderData } from "react-router-dom";
import NavProfil from "../../components/profile.components/NavProfil";
import { useUser } from "../../context/UserContext";
import HeaderNav from "../../components/profile.components/HeaderNav";

function Profil() {
  const { logout } = useUser();
  const loaderDataParent = useLoaderData();
  const myProfil = loaderDataParent?.parentProfil ?? "";

  return (
    <div className="profil_container">
      <HeaderNav />
      <div className="cadre">
        <div className="header_profil">
          <div className="picture_creche">
            <img src="../src/assets/Victor.jpeg" alt="" />
          </div>
          <div className="title_profil">
            <h1>{myProfil?.parentName ?? ""}</h1>
            <h2>{myProfil?.parentFName ?? ""}</h2>
          </div>
        </div>
        <div className="list_options">
          <ul>
            <Link to="/profil/inscription">
              <li>Dossier d'inscription</li>
            </Link>
            <Link to="/profil/myresa">
              <li>Mes réservations</li>
            </Link>
            <li>Mes favoris</li>
            <button type="button" onClick={logout}>
              Déconnexion
            </button>
          </ul>
        </div>
      </div>
      <NavProfil />
    </div>
  );
}

export default Profil;
