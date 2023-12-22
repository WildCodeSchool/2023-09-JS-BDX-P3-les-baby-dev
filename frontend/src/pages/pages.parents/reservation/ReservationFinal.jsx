import React from "react";
import "./reservationFinal.scss";
import { Link } from "react-router-dom";
import { MDBSwitch } from "mdb-react-ui-kit";

function ReservationFinal() {
  return (
    <div className="finalResa_container">
      <div className="choisen_creche">
        <Link to="/searchlist/conditions">
          <img
            className="arrowBack"
            src="../src/assets/arrow_back.svg"
            alt=""
          />
        </Link>
        <div className="picture_creche">
          <img src="../src/assets/creche2.jpeg" alt="" />
        </div>
        <div className="title_creche">
          <h1>Terminer ma réservation</h1>
          <h2>Créche "NAME_CRECHE"</h2>
        </div>
      </div>
      <div className="infos_container">
        <h3>Enfants à garder</h3>
        <div className="switch">
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Adam le bébé (18 mois)"
          />
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Victor le bébé (21 mois)"
          />
        </div>
        <div className="textArea">
          <h4>Message Libre</h4>
          <textarea>Votre message ici...</textarea>
        </div>
      </div>
      <div className="acceptation">
        <h5>En envoyant ma demande de réservation, j'accepte:</h5>
        <ul>
          <li>les conditions générales de réservations</li>
          <li>
            le règlement intérieur de la structure d’envoyer mes information et
            dossier d’inscription à la crèche
          </li>
        </ul>
      </div>
      <div className="btn_confirmation">
        <Link to="/searchlist/confirmation">
          <button type="button">Je confirme ma réservation</button>
        </Link>
      </div>
    </div>
  );
}

export default ReservationFinal;
