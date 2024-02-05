import React from "react";
import "./conditionResa.scss";
import { Link } from "react-router-dom";
import Return from "../../../assets/arrow_back_black.svg";

function ConditonResa() {
  return (
    <div className="conditions_container">
      <div className="choisen_creche">
        <Link to="/searchlist/reservation">
          <img className="arrowBack" src={Return} alt="" />
        </Link>
        <div className="picture_creche">
          <img src="../src/assets/creche2.jpeg" alt="" />
        </div>
        <div className="title_creche">
          <h1>Demander une place</h1>
          <h2>Créche "NAME_CRECHE"</h2>
        </div>
      </div>
      <h3>Conditions de réservation</h3>
      <div className="list_conditions">
        <ul>
          <li>
            <img src="../src/assets/check.svg" alt="" />
            <p>Votre enfant a déjà été gardé par une structure</p>
          </li>
          <li>
            <img src="../src/assets/check.svg" alt="" />
            <p>Votre profil est complet et vérifié</p>
          </li>
          <li>
            <img src="../src/assets/check.svg" alt="" />
            <p>La période d'adaptation est obligatoire</p>
          </li>
          <li>
            <img src="../src/assets/check.svg" alt="" />
            <p>Votre enfant à plus de 18 mois</p>
          </li>
        </ul>
      </div>
      <div className="btn_accepted">
        <Link to="/searchlist/reservation2">
          <button type="button">J'ai lu et j'accepte la consigne</button>
        </Link>
      </div>
    </div>
  );
}

export default ConditonResa;
