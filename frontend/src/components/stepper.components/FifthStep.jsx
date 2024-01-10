import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";
import { useStructure } from "../../context/StrucutreContext";
import "./fifthStep.scss";

function FifthStep() {
  const { data, updateAllDays } = useStructure();

  const handleSwitch = (key) => {
    updateAllDays(key, !data.schedules[key]);
  };

  return (
    <div className="fifty">
      <div className="step5">
        <h4>Quels sont vos horaires d'ouverture (à titre indicatif) ? </h4>

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
          <div>
            <h4>Même horaires pour tous les jours</h4>
          </div>
          <div className="hour">
            <div>
              <p>De</p>
              <input
                type="time"
                name="openHour"
                step="300"
                value={data.schedules.openHour}
                onChange={(e) => updateAllDays("openHour", e.target.value)}
                onBlur={(e) => updateAllDays("openHour", e.target.value)}
              />
            </div>
            <div>
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
      </div>
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h4>Indiquer vos horaires</h4>
          <p>
            Renseignez ici les horaires d'accueil habituels, cet horaire sera
            renseigné sur votre fiche de présenttaion. Cela ne concerne pas vos
            disponibilités et vos plages de réservation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FifthStep;
