import React from "react";
import "./confirmationResa.scss";
import { Link } from "react-router-dom";
import rondVert from "../../../assets/logoRondRouge.svg";

function RefusResa() {
  return (
    <div className="confirmation_container">
      <div className="picturelogo">
        <img src={rondVert} alt="" />
      </div>
      <h1>Desolé</h1>
      <p>Votre réservation n'a bien été enregisté</p>
      <h2>Statut de votre réservation:</h2>
      <h3 className="refused">Refusé</h3>
      <Link to="/searchlist">
        <button type="button">Terminé</button>
      </Link>
    </div>
  );
}

export default RefusResa;
