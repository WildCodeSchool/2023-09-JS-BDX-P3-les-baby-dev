import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";

function SixthStep() {
  return (
    <div className="step6">
      <div>
        <h4>Nombre de places ou agrements</h4>
        <p>A total, de combien d’aggrément disposez vous ?</p>
        <div className="inputContainer">
          <label htmlFor="maxPlaces">
            <input type="number" min="1" name="maxPlaces" value="" />
            place(s)
          </label>
        </div>
      </div>
      <div>
        <h4>Agréments</h4>
        <p>
          Disposez vous de restriction d'agrément ? Mettez le nombre
          <strong>maximum</strong>
          d'enfant que vous pouvez accueillir en fonction des conditions
          d'accueil.
        </p>
        <div className="inputContainer">
          <p>Enfant(s) handicapé(s)</p>
          <MDBSwitch id="flexSwitchCheckDefault" label="Enfant handicapé" />
          <input type="number" min="0" max="5" name="maxHandi" value="" />
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Enfant de moins de 18 mois"
          />
          <input type="number" min="0" max="5" name="maxHandi" value="" />
          <MDBSwitch id="flexSwitchCheckDefault" label="Horaires atypique" />
          <input type="number" min="0" max="5" name="maxHandi" value="" />
          <MDBSwitch id="flexSwitchCheckDefault" label="Accueil de nuit" />
          <input type="number" min="0" max="5" name="maxHandi" value="" />
        </div>
      </div>
    </div>
  );
}

export default SixthStep;
