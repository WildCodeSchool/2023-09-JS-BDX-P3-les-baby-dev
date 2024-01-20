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
  const { onChange, data } = useStructure();
  const [loading, setLoading] = useState(false);

  const { handleSubmit } = useStructure();

  const validateFirstStep = () => {
    const isStructureNameValid = data.name;
    const isTelValid = /^\d{10}$/.test(data.tel);
    const isAddressValid = /^\d+\s[\w\s]+$/.test(data.adress);
    const isZipValid = data.zip;
    const isCityValid = data.city;

    const isValid =
      isStructureNameValid &&
      isTelValid &&
      isAddressValid &&
      isZipValid &&
      isCityValid;

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        handleSubmit();

        nextRef.current.click();
        setLoading(false);
      }, 1000);
    } else {
      // eslint-disable-next-line no-alert
      alert("Les champs ne sont pas valides");
    }
  };

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
              value={data?.name ?? ""}
              name="name"
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
              value={data?.tel ?? ""}
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
              name="adress"
              pattern="^\d+\s[\w\s]+$"
              onChange={onChange}
              value={data?.adress ?? ""}
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
              value={data?.zip ?? ""}
              name="zip"
              onChange={onChange}
              pattern="^\d{5}$"
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
              value={data?.city ?? ""}
              name="city"
              onChange={onChange}
              id="validationCustom03"
              required
              label="Ville"
            />
          </MDBValidationItem>
        </MDBValidation>
        <MDBBtn type="button" onClick={validateFirstStep}>
          {loading ? "" : "suivant"}
          {loading && (
            <MDBSpinner role="status" size="sml">
              <span className="visually-hidden">loading...</span>
            </MDBSpinner>
          )}
        </MDBBtn>
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
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default FirstStep;
