import { MDBBtn, MDBSpinner, MDBSwitch } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useStructure } from "../../context/StrucutreContext";
import "./fifthStep.scss";

function FifthStep({ nextQuestion, prevQuestion }) {
  const [loading, setLoading] = useState(false);

  const { dataSchedules, updateAllDays, handleSubmitSchedules } =
    useStructure();

  const validateFifthStep = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmitSchedules();
      nextQuestion();
      setLoading(false);
    }, 1000);
  };

  const handleSwitch = (key) => {
    updateAllDays(key, !dataSchedules[key]);
  };

  return (
    <div className="fifty">
      <div className="step5">
        <div className="next-prev">
          <MDBBtn type="button" onClick={validateFifthStep}>
            {loading ? "" : "suivant"}
            {loading && (
              <MDBSpinner role="status" size="sm">
                <span className="visually-hidden">loading...</span>
              </MDBSpinner>
            )}
          </MDBBtn>
          <MDBBtn type="button" onClick={prevQuestion}>
            précédent
          </MDBBtn>
        </div>
        <h4>Quels sont vos horaires d'ouverture (à titre indicatif) ? </h4>

        <div className="hourContainer">
          <div className="switchHourly">
            <MDBSwitch
              id="mondaySwitch"
              label="Lundi"
              onChange={() => handleSwitch("monday")}
              checked={dataSchedules?.monday ?? false}
            />
            <MDBSwitch
              id="tuesday"
              label="Mardi"
              onChange={() => handleSwitch("tuesday")}
              checked={dataSchedules?.tuesday ?? false}
            />
            <MDBSwitch
              id="wednesday"
              label="Mercredi"
              onChange={() => handleSwitch("wednesday")}
              checked={dataSchedules?.wednesday ?? false}
            />
            <MDBSwitch
              id="thursday"
              label="Jeudi"
              onChange={() => handleSwitch("thursday")}
              checked={dataSchedules?.thursday ?? false}
            />
            <MDBSwitch
              id="friday"
              label="Vendredi"
              onChange={() => handleSwitch("friday")}
              checked={dataSchedules?.friday ?? false}
            />
            <MDBSwitch
              id="saturday"
              label="Samedi"
              onChange={() => handleSwitch("saturday")}
              checked={dataSchedules?.saturday ?? false}
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
                value={dataSchedules?.openHour ?? dataSchedules.openHour}
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
                value={dataSchedules?.closeHour ?? dataSchedules.closeHour}
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

FifthStep.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
};

export default FifthStep;
