import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";

function FifthStep() {
  return (
    <div className="step5">
      <h4>Quels sont vos horaires d'ouverture (à titre indicatif) ? </h4>
      <div>
        <p>
          Renseignez ici les horaires d'accueil habituels, cet horaire sera
          renseigné sur votre fiche de présenttaion. Cela ne concerne pas vos
          disponibilités et vos plages de réservation.
        </p>
      </div>
      <div className="hourContainer">
        <div className="switchHourly">
          <MDBSwitch id="flexSwitchCheckDefault" label="Lundi" />
          <MDBSwitch id="flexSwitchCheckDefault" label="Mardi" />
          <MDBSwitch id="flexSwitchCheckDefault" label="Mercredi" />
          <MDBSwitch id="flexSwitchCheckDefault" label="Jeudi" />
          <MDBSwitch id="flexSwitchCheckDefault" label="Vendredi" />
          <MDBSwitch id="flexSwitchCheckDefault" label="Samedi" />
        </div>
        <div className="hour">
          <h4>Même horaires pour tous les jours</h4>
          <p>De</p>
          <input type="time" name="openHour" step="300" value="" />
          <p>À</p>
          <input type="time" name="closeHour" step="300" value="" />
        </div>
      </div>
    </div>
  );
}

export default FifthStep;
