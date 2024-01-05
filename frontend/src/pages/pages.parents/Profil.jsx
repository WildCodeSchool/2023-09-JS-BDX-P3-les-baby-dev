import React from "react";
import "./profil.scss";
import { Link } from "react-router-dom";
import NavProfil from "../../components/profile.components/NavProfil";
import { useUser } from "../../context/UserContext";

function Profil() {
  const { logout } = useUser();
  return (
    <div className="profil_container">
      <div className="header_profil">
        <div className="picture_creche">
          <img src="../src/assets/Victor.jpeg" alt="" />
        </div>
        <div className="title_profil">
          <h1>Le vic</h1>
          <h2>Papa Poule</h2>
        </div>
      </div>
      <div className="list_options">
        <ul>
          <li>Dossier d'inscription</li>
          <Link to="/profil/myresa">
            <li>Mes réservations</li>
          </Link>
          <li>Mes favoris</li>
          <button type="button" onClick={logout}>
            déco
          </button>
        </ul>
      </div>
      <NavProfil />
    </div>
  );
}

export default Profil;
