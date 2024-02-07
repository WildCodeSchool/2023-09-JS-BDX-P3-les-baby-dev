import React from "react";
import "./confirmationResa.scss";
import { Link } from "react-router-dom";
import rondVert from "../../../assets/logoRondVert.svg";

function ConfirmationResa() {
  return (
    <div className="confirmation_container">
      <div className="picturelogo">
        <img src={rondVert} alt="" />
      </div>
      <h1>Fantastique!</h1>
      <p>Votre réservation à bien été pris en compte !</p>
      <h2>Statut de votre réservation:</h2>
      <h3>Confirmé</h3>
      <Link to="/searchlist">
        <button type="button">Suivant</button>
      </Link>
    </div>
  );
}

export default ConfirmationResa;
