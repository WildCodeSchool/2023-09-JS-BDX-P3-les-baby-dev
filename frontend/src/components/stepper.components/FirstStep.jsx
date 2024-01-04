import "./firstStep.scss";
import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";

function FirstStep() {
  const { data, handleSubmit, onChange } = useStructure();

  return (
    <div className="fifty">
      <div className="step1">
        <h4>Complétez et vérifiez vos informations</h4>
        <MDBValidation className="row g-3" isValidated>
          <MDBValidationItem className="col-md-4">
            <MDBInput
              value={data.structureName}
              name="structureName"
              onChange={onChange}
              id="validationCustom01"
              required
              label="Nom de l'établissement"
            />
          </MDBValidationItem>
          <MDBValidationItem className="col-md-4">
            <MDBInput
              label="Numéro"
              id="typePhone"
              type="tel"
              name="tel"
              onChange={onChange}
              value={data.tel}
              required
            />
          </MDBValidationItem>
          <MDBValidationItem
            feedback="Veuillez entrer une adresse."
            invalid
            className="col-md-4"
          >
            <MDBInput
              label="N° et nom de rue"
              id="validationCustomUsername"
              type="text"
              name="adresse"
              onChange={onChange}
              value={data.address}
              required
            />
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-3"
            feedback="Veuillez entrer une ville."
            invalid
          >
            <MDBInput
              value={data.city}
              name="ville"
              onChange={onChange}
              id="validationCustom03"
              required
              label="Ville"
            />
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-4"
            feedback="Veuillez entrer un code postal."
            invalid
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
          <div className="col-12">
            <MDBBtn type="submit" onClick={handleSubmit}>
              Submit form
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
