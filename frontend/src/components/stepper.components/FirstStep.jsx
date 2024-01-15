import { useState } from "react";
import PropTypes from "prop-types";
import "./firstStep.scss";
import {
  MDBBtn,
  MDBInput,
  MDBSpinner,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";

function FirstStep({ nextRef }) {
  const { data, onChange } = useStructure();
  const [loading, setLoading] = useState(false);

  const { handleSubmit } = useStructure();

  const validateFirstStep = async () => {
    setLoading(true);
    // a supprimer et remplacer par axios .....
    setTimeout(() => {
      nextRef.current.click();
      handleSubmit();
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="fifty">
      <div className="step1">
        <h4>Complétez et vérifiez vos informations</h4>
        <MDBValidation className="row g-3" isValidated>
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
            />
          </MDBValidationItem>
          <MDBBtn type="submit" onClick={validateFirstStep}>
            {loading ? "" : "next"}
            {loading && (
              <MDBSpinner role="status">
                <span className="visually-hidden">loading...</span>
              </MDBSpinner>
            )}
          </MDBBtn>
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

FirstStep.propTypes = {
  nextRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default FirstStep;
