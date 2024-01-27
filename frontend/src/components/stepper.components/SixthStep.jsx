import { MDBBtn, MDBSpinner, MDBSwitch } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useStructure } from "../../context/StrucutreContext";
import "./sixthStep.scss";

function SixthStep({ nextQuestion, prevQuestion }) {
  const { updateAmenities, handleSubmit, data } = useStructure();
  const [loading, setLoading] = useState(false);

  const validateSixthStep = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmit();
      nextQuestion();
      setLoading(false);
    }, 1000);
  };

  const handleMaxPlacesChange = (newValue) => {
    // Mise à jour de maxPlaces
    updateAmenities("maxPlaces", newValue);

    // Mise à jour des autres champs en fonction de la nouvelle valeur de maxPlaces
    const updatedMaxHandicap = Math.min(data.maxHandicap, newValue);
    const updatedMaxUnder18Months = Math.min(data.maxUnder18Months, newValue);
    const updatedMaxAtypicalHours = Math.min(data.maxAtypicalHours, newValue);
    const updatedMaxNightCare = Math.min(data.maxNightCare, newValue);

    // Vérifiez si le champ maxHandicap est désactivé et ajustez la valeur en conséquence
    const actualMaxHandicapValue = !data.isHandicapEnabled
      ? ""
      : updatedMaxHandicap;

    // Vérifiez si le champ maxUnder18Months est désactivé et ajustez la valeur en conséquence
    const actualMaxUnder18MonthsValue = !data.isUnder18MonthsEnabled
      ? ""
      : updatedMaxUnder18Months;

    // Vérifiez si le champ maxAtypicalHours est désactivé et ajustez la valeur en conséquence
    const actualMaxAtypicalHoursValue = !data.isAtypicalHoursEnabled
      ? ""
      : updatedMaxAtypicalHours;

    // Vérifiez si le champ maxNightCare est désactivé et ajustez la valeur en conséquence
    const actualMaxNightCareValue = !data.isNightCareEnabled
      ? ""
      : updatedMaxNightCare;

    updateAmenities("maxHandicap", actualMaxHandicapValue);
    updateAmenities("maxUnder18Months", actualMaxUnder18MonthsValue);
    updateAmenities("maxAtypicalHours", actualMaxAtypicalHoursValue);
    updateAmenities("maxNightCare", actualMaxNightCareValue);
  };

  const handleMaxChildInputChange = (fieldName, value) => {
    let updatedValue = value === "" ? "" : Math.min(value, data.maxPlaces);
    const switchFieldName = `${fieldName.replace("max", "is")}Enabled`;

    if (data[switchFieldName] === false) {
      updatedValue = "";
    }

    updateAmenities(fieldName, updatedValue);
  };

  return (
    <div className="fifty">
      <div className="step6">
        <div className="next-prev">
          <MDBBtn type="button" onClick={validateSixthStep}>
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
        <div className="finputContainer">
          <h4>Nombre de places ou agrements</h4>
          <p>A total, de combien de place disposez vous ?</p>
          <div className="inputContainer1">
            <label htmlFor="maxPlaces">
              <input
                type="number"
                min="1"
                name="maxPlaces"
                value={data?.maxPlaces ?? ""}
                onChange={(e) => handleMaxPlacesChange(e.target.value)}
              />
              &nbsp;place(s)
            </label>
          </div>
          <br />
        </div>

        <div className="inputContainer">
          <div>
            <MDBSwitch
              id="handicapEnabled"
              label="Enfant handicapé"
              onChange={() =>
                updateAmenities("isHandicapEnabled", !data.isHandicapEnabled)
              }
              checked={data?.isHandicapEnabled ?? false}
            />
            <input
              type="number"
              min="0"
              max={data.maxPlaces}
              name="maxHandicap"
              value={!data.isHandicapEnabled ? 0 : data?.maxHandicap}
              onChange={(e) =>
                handleMaxChildInputChange("maxHandicap", e.target.value)
              }
              disabled={!data.isHandicapEnabled}
            />
          </div>
          <div>
            <MDBSwitch
              id="under18Month"
              label="Enfant < 18 mois"
              onChange={() =>
                updateAmenities(
                  "isUnder18MonthsEnabled",
                  !data.isUnder18MonthsEnabled
                )
              }
              checked={data?.isUnder18MonthsEnabled ?? false}
            />
            <input
              type="number"
              min="0"
              max={data.maxPlaces}
              name="maxUnder18Month"
              value={!data.isUnder18MonthsEnabled ? 0 : data?.maxUnder18Months}
              onChange={(e) =>
                handleMaxChildInputChange("maxUnder18Months", e.target.value)
              }
              disabled={!data.isUnder18MonthsEnabled}
            />
          </div>
          <div>
            <MDBSwitch
              id="typicalHours"
              label="Horaires atypique"
              onChange={() =>
                updateAmenities(
                  "isAtypicalHoursEnabled",
                  !data.isAtypicalHoursEnabled
                )
              }
              checked={data?.isAtypicalHoursEnabled ?? false}
            />
            <input
              type="number"
              min="0"
              max={data.maxPlaces}
              name="maxAtypicalHours"
              value={!data.isAtypicalHoursEnabled ? 0 : data?.maxAtypicalHours}
              onChange={(e) =>
                handleMaxChildInputChange("maxAtypicalHours", e.target.value)
              }
              disabled={!data.isAtypicalHoursEnabled}
            />
          </div>
          <div>
            <MDBSwitch
              id="nightCare"
              label="Accueil de nuit"
              onChange={() =>
                updateAmenities("isNightCareEnabled", !data.isNightCareEnabled)
              }
              checked={data?.isNightCareEnabled ?? false}
            />
            <input
              type="number"
              min="0"
              max={data.maxPlaces}
              name="maxNightCare"
              value={!data.isNightCareEnabled ? 0 : data?.maxNightCare}
              onChange={(e) =>
                handleMaxChildInputChange("maxNightCare", e.target.value)
              }
              disabled={!data.isNightCareEnabled}
            />
          </div>
        </div>
      </div>
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h4>Nombre de places & d'agréments</h4>
          <p>
            Disposez vous de restriction d'agrément ? Mettez le nombre
            <strong> maximum </strong>
            d'enfant que vous pouvez accueillir en fonction des conditions
            d'accueil.
          </p>
        </div>
      </div>
    </div>
  );
}

SixthStep.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
};

export default SixthStep;
