import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";
import { useStructure } from "../../context/StrucutreContext";
import "./sixthStep.scss";

function SixthStep() {
  const { data, updateAmenities } = useStructure();

  const handleMaxPlacesChange = (newValue) => {
    // Mise à jour de maxPlaces
    updateAmenities("maxPlaces", newValue);

    // Mise à jour des autres champs en fonction de la nouvelle valeur de maxPlaces
    const updatedMaxHandicap = Math.min(data.amenities.maxHandicap, newValue);
    const updatedMaxUnder18Months = Math.min(
      data.amenities.maxUnder18Months,
      newValue
    );
    const updatedMaxAtypicalHours = Math.min(
      data.amenities.maxAtypicalHours,
      newValue
    );
    const updatedMaxNightCare = Math.min(data.amenities.maxNightCare, newValue);

    // Vérifiez si le champ maxHandicap est désactivé et ajustez la valeur en conséquence
    const actualMaxHandicapValue = !data.amenities.isHandicapEnabled
      ? ""
      : updatedMaxHandicap;

    // Vérifiez si le champ maxUnder18Months est désactivé et ajustez la valeur en conséquence
    const actualMaxUnder18MonthsValue = !data.amenities.isUnder18MonthsEnabled
      ? ""
      : updatedMaxUnder18Months;

    // Vérifiez si le champ maxAtypicalHours est désactivé et ajustez la valeur en conséquence
    const actualMaxAtypicalHoursValue = !data.amenities.isAtypicalHoursEnabled
      ? ""
      : updatedMaxAtypicalHours;

    // Vérifiez si le champ maxNightCare est désactivé et ajustez la valeur en conséquence
    const actualMaxNightCareValue = !data.amenities.isNightCareEnabled
      ? ""
      : updatedMaxNightCare;

    updateAmenities("maxHandicap", actualMaxHandicapValue);
    updateAmenities("maxUnder18Months", actualMaxUnder18MonthsValue);
    updateAmenities("maxAtypicalHours", actualMaxAtypicalHoursValue);
    updateAmenities("maxNightCare", actualMaxNightCareValue);
  };

  const handleMaxChildInputChange = (fieldName, value) => {
    // Limitez la valeur du champ à la valeur de maxPlaces
    const updatedValue =
      value === "" ? "" : Math.min(value, data.amenities.maxPlaces);

    // Vérifiez si le champ est désactivé et ajustez la valeur en conséquence
    const actualValue =
      fieldName === "maxHandicap" && !data.amenities.isHandicapEnabled
        ? ""
        : updatedValue;
    const updatedValueAfterDisabledCheck =
      fieldName === "maxUnder18Months" && !data.amenities.isUnder18MonthsEnabled
        ? ""
        : actualValue;
    const updatedValueAfterDisabledCheck2 =
      fieldName === "maxAtypicalHours" && !data.amenities.isAtypicalHoursEnabled
        ? ""
        : updatedValueAfterDisabledCheck;
    const updatedValueAfterDisabledCheck3 =
      fieldName === "maxNightCare" && !data.amenities.isNightCareEnabled
        ? ""
        : updatedValueAfterDisabledCheck2;

    // Mettez à jour les données avec la valeur ajustée
    updateAmenities(fieldName, updatedValueAfterDisabledCheck3);
  };

  return (
    <div className="fifty">
      <div className="step6">
        <div>
          <h4>Nombre de places ou agrements</h4>
          <p>A total, de combien de place disposez vous ?</p>
          <div className="inputContainer">
            <label htmlFor="maxPlaces">
              <input
                type="number"
                min="1"
                name="maxPlaces"
                value={data.amenities.maxPlaces}
                onChange={(e) => handleMaxPlacesChange(e.target.value)}
              />
              &nbsp;place(s)
            </label>
          </div>
          <br />
        </div>
        <div>
          <div className="inputContainer">
            <MDBSwitch
              id="handicapEnabled"
              label="Enfant handicapé"
              onChange={() =>
                updateAmenities(
                  "isHandicapEnabled",
                  !data.amenities.isHandicapEnabled
                )
              }
            />
            <input
              type="number"
              min="0"
              max={data.amenities.maxPlaces}
              name="maxHandicap"
              value={data.amenities.maxHandicap}
              onChange={(e) =>
                handleMaxChildInputChange("maxHandicap", e.target.value)
              }
              disabled={!data.amenities.isHandicapEnabled}
            />
            <MDBSwitch
              id="under18Month"
              label="Enfant de moins de 18 mois"
              onChange={() =>
                updateAmenities(
                  "isUnder18MonthsEnabled",
                  !data.amenities.isUnder18MonthsEnabled
                )
              }
            />
            <input
              type="number"
              min="0"
              max={data.amenities.maxPlaces}
              name="maxUnder18Month"
              value={data.amenities.maxUnder18Months}
              onChange={(e) =>
                handleMaxChildInputChange("maxUnder18Months", e.target.value)
              }
              disabled={!data.amenities.isUnder18MonthsEnabled}
            />
            <MDBSwitch
              id="typicalHours"
              label="Horaires atypique"
              onChange={() =>
                updateAmenities(
                  "isAtypicalHoursEnabled",
                  !data.amenities.isAtypicalHoursEnabled
                )
              }
            />
            <input
              type="number"
              min="0"
              max={data.amenities.maxPlaces}
              name="maxAtypicalHours"
              value={data.amenities.maxAtypicalHours}
              onChange={(e) =>
                handleMaxChildInputChange("maxAtypicalHours", e.target.value)
              }
              disabled={!data.amenities.isAtypicalHoursEnabled}
            />
            <MDBSwitch
              id="nightCare"
              label="Accueil de nuit"
              onChange={() =>
                updateAmenities(
                  "isNightCareEnabled",
                  !data.amenities.isNightCareEnabled
                )
              }
            />
            <input
              type="number"
              min="0"
              max={data.amenities.maxPlaces}
              name="maxNightCare"
              value={data.amenities.maxNightCare}
              onChange={(e) =>
                handleMaxChildInputChange("maxNightCare", e.target.value)
              }
              disabled={!data.amenities.isNightCareEnabled}
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

export default SixthStep;
