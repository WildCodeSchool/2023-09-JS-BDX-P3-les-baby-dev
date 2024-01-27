import React from "react";
import "./profilResa.scss";
import { Link, useLoaderData } from "react-router-dom";
import NavProfil from "../../../components/profile.components/NavProfil";

function ProfilResa() {
  const loaderDataParent = useLoaderData();

  const reservation = loaderDataParent?.reservation;

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
      <div className="myResa_container">
        <h1>Mes réservations</h1>
        {reservation.map((item) => (
          <div key={item.id} className="card_myresa">
            <div className="img_structure">
              <img src="../src/assets/creche3.jpeg" alt="" />
            </div>
            <div className="title_resa">
              <h2>Bibiche Structure</h2>
              <p>Réservation confirmé</p>
            </div>
            <div className="date_resa">
              <h3>{item.dayResa}</h3>
            </div>
          </div>
        ))}
      </div>
      <NavProfil />
    </div>
  );
}

export default ProfilResa;
