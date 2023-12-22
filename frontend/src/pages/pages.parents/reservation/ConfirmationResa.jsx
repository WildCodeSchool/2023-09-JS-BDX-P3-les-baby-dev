import React from "react";
import "./confirmationResa.scss";
import { Link } from "react-router-dom";

function ConfirmationResa() {
  return (
    <div className="confirmation_container">
      <div className="pictures_match">
        <div className="pictureParent">
          <img src="../src/assets/adam.jpeg" alt="" />
        </div>
        <div className="picturePro">
          <img src="../src/assets/Victor.jpeg" alt="" />
        </div>
      </div>
      <div className="picturelogo">
        <img src="../src/assets/logoRondVert.svg" alt="" />
      </div>
      <h1>Fantastique!</h1>
      <p>
        La crèche Picoti Picota cofirme accueillir votre enfant le Lundi 14
        septembre de 9h à 17h
      </p>
      <h2>Statut de votre réservation:</h2>
      <h3>Confirmé</h3>
      <Link to="/searchlist">
        <button type="button">Suivant</button>
      </Link>
    </div>
  );
}

export default ConfirmationResa;
