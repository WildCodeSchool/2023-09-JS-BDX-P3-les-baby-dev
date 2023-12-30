import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";
import { useStructure } from "../../context/StrucutreContext";

function FifthStep() {
  const { data, updateAllDays } = useStructure();

  const handleSwitch = (key) => {
    updateAllDays(key, !data.schedules[key]);
  };

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
          <MDBSwitch
            id="mondaySwitch"
            label="Lundi"
            onChange={() => handleSwitch("monday")}
          />
          <MDBSwitch
            id="tuesday"
            label="Mardi"
            onChange={() => handleSwitch("tuesday")}
          />
          <MDBSwitch
            id="wednesday"
            label="Mercredi"
            onChange={() => handleSwitch("wednesday")}
          />
          <MDBSwitch
            id="thursday"
            label="Jeudi"
            onChange={() => handleSwitch("thursday")}
          />
          <MDBSwitch
            id="friday"
            label="Vendredi"
            onChange={() => handleSwitch("friday")}
          />
          <MDBSwitch
            id="saturday"
            label="Samedi"
            onChange={() => handleSwitch("saturday")}
          />
        </div>
        <div className="hour">
          <h4>Même horaires pour tous les jours</h4>
          <p>De</p>
          <input
            type="time"
            name="openHour"
            step="300"
            value={data.schedules.openHour}
            onChange={(e) => updateAllDays("openHour", e.target.value)}
            onBlur={(e) => updateAllDays("openHour", e.target.value)}
          />
          <p>À</p>
          <input
            type="time"
            name="closeHour"
            step="300"
            value={data.schedules.closeHour}
            onChange={(e) => updateAllDays("closeHour", e.target.value)}
            onBlur={(e) => updateAllDays("closeHour", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default FifthStep;
