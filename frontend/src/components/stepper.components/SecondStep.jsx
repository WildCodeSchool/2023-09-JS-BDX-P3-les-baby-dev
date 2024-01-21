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

function SecondStep({ nextQuestion, prevQuestion }) {
  const [loading, setLoading] = useState(false);

  const { onChange, onChangeFiles, data } = useStructure();
  const inputRef = useRef();
  const maxLength = 500;
  const descriptionLength = data.description ? data.description.length : 0;

  const { handleSubmit } = useStructure();

  // const handleSubmitFiles = () => {
  //   const formData = new FormData();
  //   formData.append("avatar", inputRef.current.files[0]);
  //   axios.put(`http://localhost:3310/api/${data?.id}/avatar`, formData ?? {});
  // };

  const validateSecondStep = () => {
    // const isFileValid = inputRef.current.files.length > 0;
    const isDescValid = data.structureDesc;

    const isValid = isDescValid;

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        handleSubmit();
        nextQuestion();
        // handleSubmitFiles();

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
        <div className="next-prev">
          <MDBBtn type="button" onClick={validateSecondStep}>
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
                />
              </form>
            </div>

            <label className="format" htmlFor="file">
              Formats acceptés : .jpg, .jpeg, .png
            </label>
          </div>
        </div>
        <div className="structure4">
          <div className="pageContent">
            <MDBValidation className="row g-3 second-validation">
              <MDBValidationItem
                className="col-md-4 text-area"
                feedback="Veuillez entrer un nom valide"
                invalid
                isValidated
              >
                <MDBTextArea
                  label="Message"
                  id="textAreaExample"
                  maxLength={maxLength}
                  rows={4}
                  value={data?.structureDesc ?? ""}
                  onChange={onChange}
                  name="structureDesc"
                  required
                />
              </MDBValidationItem>
            </MDBValidation>
            <legend>
              Maximum {`${maxLength - descriptionLength}`} caractères.
            </legend>
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
  nextQuestion: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
};

export default SecondStep;
