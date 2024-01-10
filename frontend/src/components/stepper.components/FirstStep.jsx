import "./firstStep.scss";
import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";

function FirstStep() {
  const { data, onChange, handleSubmit } = useStructure();

  return (
    <div className="fifty">
      <div className="step1">
        <h4>Complétez et vérifiez vos informations</h4>
        <MDBValidation className="row g-3">
          <MDBValidationItem
            className="col-md-4"
            feedback="Veuillez entrer un nom valide"
            invalid
            isValidated
          >
            <MDBInput
              value={data.structureName}
              name="structureName"
              onChange={onChange}
              id="validationCustom01"
              pattern=".{4,}"
              required
              label="Nom de l'établissement"
            />
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-4"
            feedback="Veuillez entrer un numéro valide"
            invalid
            isValidated
          >
            <MDBInput
              label="Numéro"
              id="typePhone"
              type="tel"
              name="tel"
              pattern="\d{10}"
              onChange={onChange}
              value={data.tel}
              required
            />
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-4"
            feedback="Veuillez entrer adresse valide"
            invalid
            isValidated
          >
            <MDBInput
              label="N° et nom de rue"
              id="validationCustomUsername"
              type="text"
              name="adresse"
              pattern="^\d+\s[\w\s]+$"
              onChange={onChange}
              value={data.address}
              required
            />
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-3"
            feedback="Veuillez entrer un code postale"
            invalid
            isValidated
          >
            <MDBInput
              value={data.zip}
              name="zip"
              onChange={onChange}
              id="validationCustom05"
              required
              label="Code postal"
            />
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-4"
            feedback="Veuillez entrer une ville"
            invalid
            isValidated
          >
            <MDBInput
              value={data.city}
              name="ville"
              onChange={onChange}
              id="validationCustom03"
              required
              label="Ville"
              pattern="[A-Za-z-]+"
            />
          </MDBValidationItem>
          <div>
            <MDBBtn type="submit" onClick={handleSubmit}>
              M'enregistrer
            </MDBBtn>
          </div>
        </MDBValidation>
      </div>
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h5>Où se situe votre structure ?</h5>
          <p>
            Les parents n'obtiendront l'adresse exacte qu'après avoir effectué
            la réservation
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
