import React from "react";
import "./profilResa.scss";
import { Link } from "react-router-dom";
import NavProfil from "../../../components/profile.components/NavProfil";

function ProfilResa() {
  return (
    <div className="profilResa_container">
      <div className="choisen_profil">
        <Link to="/profil">
          <img
            className="arrowBack"
            src="../src/assets/arrow_back.svg"
            alt=""
          />
        </Link>
        <div className="picture_profil">
          <img src="../src/assets/Victor.jpeg" alt="" />
        </div>
        <div className="title_Myresa">
          <h1>Le vic</h1>
          <h2>Papa Poule</h2>
        </div>
      </div>
      <div className="myResa_container">ok</div>
      <NavProfil />
    </div>
  );
}

export default ProfilResa;
