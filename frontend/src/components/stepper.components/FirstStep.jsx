import { useState } from "react";
import PropTypes from "prop-types";
import "./firstStep.scss";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBSpinner,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";

function FirstStep({ nextQuestion }) {
  const { onChange, data } = useStructure();
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useStructure();
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

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

  const validateFirstStep = () => {
    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        handleSubmit();
        nextQuestion();

        setLoading(false);
      }, 1000);
    } else {
      toggleOpen();
    }
  };

  return (
    <div className="fifty">
      <div className="step1">
        <h4>Complétez et vérifiez vos informations</h4>
        <MDBValidation className="row g-3 mb-3 mt-3" isValidated>
          <MDBValidationItem className="col-md-4" feedback="">
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
          <MDBValidationItem className="col-md-4" feedback="">
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
          <MDBValidationItem className="col-md-4" feedback="">
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
          <MDBValidationItem className="col-md-3" feedback="">
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
          <MDBValidationItem className="col-md-4" feedback="">
            <MDBInput
              value={data?.city ?? ""}
              name="city"
              onChange={onChange}
              id="validationCustom03"
              required
              label="Ville"
              validation="Please provide your email"
            />
          </MDBValidationItem>
          <div className="next-prev">
            <MDBBtn type="button" onClick={validateFirstStep}>
              {loading ? "" : "suivant"}
              {loading && (
                <MDBSpinner size="sm" role="status">
                  <span className="visually-hidden">loading...</span>
                </MDBSpinner>
              )}
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
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Les champs ne sont pas valides</MDBModalTitle>
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn onClick={toggleOpen}>Fermer</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

FirstStep.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
};

export default FirstStep;
