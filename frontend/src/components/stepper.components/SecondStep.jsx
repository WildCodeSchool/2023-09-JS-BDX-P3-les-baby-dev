// import axios from "axios";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { MDBFileUpload } from "mdb-react-file-upload";
import {
  MDBBtn,
  MDBSpinner,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";
import "./secondStep.scss";

function SecondStep({ nextRef, prevRef }) {
  const [loading, setLoading] = useState(false);

  const { newData, onChange, onChangeFiles, data } = useStructure();
  const inputRef = useRef();
  const maxLength = 500;
  const descriptionLength = newData.description
    ? newData.description.length
    : 0;

  const { handleSubmit } = useStructure();

  // const handleSubmitFiles = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("avatar", inputRef.current.files[0]);
  //   axios.put("http://localhost:3310/api/avatar", formData);
  // };

  const validateSecondStep = () => {
    // const isFileValid = inputRef.current.files.length > 0;
    const isDescValid = newData.stuctureDesc;

    const isValid = isDescValid;

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        handleSubmit();
        // handleSubmitFiles();

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
      <div className="step2">
        <div>
          <h4>Égayez votre annonce avec des photos</h4>
          <div className="pageContent">
            <div className="fileUpload">
              <form encType="multipart/form-data">
                <MDBFileUpload
                  defaultFile="../src/assets/profil-picture.svg"
                  name="avatar"
                  ref={inputRef}
                  getInputFiles={onChangeFiles}
                  maxFileQuantity={3}
                />
                <MDBBtn
                  type="button"
                  // onClick={handleSubmitFiles}
                  className="filebtn"
                >
                  Enregister
                </MDBBtn>
              </form>
            </div>
            <br />
            <br />
            <label htmlFor="file">
              Formats acceptés : .jpg, .jpeg, .png <br /> 3 photos Maximum
            </label>
          </div>
        </div>
        <div className="structure4">
          <div className="pageContent">
            <MDBValidation className="row g-3">
              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer un nom valide"
                invalid
                isValidated
              >
                <MDBTextArea
                  label="Message"
                  id="textAreaExample"
                  maxLength={maxLength}
                  rows={4}
                  value={data.stuctureDesc ?? newData.description}
                  onChange={onChange}
                  name="stuctureDesc"
                  required
                />
              </MDBValidationItem>
            </MDBValidation>
            <legend>
              Maximum {`${maxLength - descriptionLength}`} caractères.
            </legend>
            <MDBBtn type="button" onClick={validateSecondStep}>
              {loading ? "" : "suivant"}
              {loading && (
                <MDBSpinner role="status" size="sml">
                  <span className="visually-hidden">loading...</span>
                </MDBSpinner>
              )}
            </MDBBtn>
            <MDBBtn type="button" onClick={() => prevRef.current.click()}>
              précédent
            </MDBBtn>
          </div>
        </div>
      </div>
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h4>Présentez vous auprès des parents</h4>
          <p>
            Présentez votre établissement et indiquez les activités d'éveil que
            vous proposez aux enfants, respect du rythme de l'enfant, activités,
            sorties, pédagogie... Décrivez les espaces de jeu, le lieu de
            sommeil, les équipements dont vous disposez...
          </p>
        </div>
      </div>
    </div>
  );
}

SecondStep.propTypes = {
  nextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  prevRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default SecondStep;
