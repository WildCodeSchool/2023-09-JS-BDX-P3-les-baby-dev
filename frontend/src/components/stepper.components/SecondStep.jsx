import axios from "axios";
import { useState } from "react";
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

  const { onChange, onChangeFiles, data, dataImage } = useStructure();

  const maxLength = 500;
  const descriptionLength = data.description ? data.description.length : 0;

  const { handleSubmit } = useStructure();

  const handleSubmitFiles = () => {
    const formData = new FormData();
    formData.append("avatarPath", dataImage.avatar);
    if (dataImage.avatar) {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/api/structures/${
            data?.id
          }/avatar`,
          formData ?? {}
        )
        .then((response) => {
          console.info(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const validateSecondStep = () => {
    // const isFileValid = data.avatarPath;
    const isDescValid = data.structureDesc;

    const isValid = isDescValid;

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        handleSubmit();
        nextQuestion();
        handleSubmitFiles();
        setLoading(false);
      }, 1000);
    } else {
      // eslint-disable-next-line no-alert
      alert("Les champs ne sont pas valides");
    }
  };

  const removeChar = data.avatarPath.substring(1);

  return (
    <div className="fifty">
      <div className="step2">
        <div>
          <h4>Égayez votre annonce avec des photos</h4>
          <div className="pageContent">
            <div className="fileUpload">
              <form encType="multipart/form-data">
                {/* {data?.avatarPath !== null ? ( */}
                <MDBFileUpload
                  defaultFile={
                    data.avatarPath
                      ? `${import.meta.env.VITE_BACKEND_URL}/${removeChar}`
                      : "../src/assets/profil-picture.svg"
                  }
                  name="avatarPath"
                  getInputFiles={onChangeFiles}
                />
                {/* // ) : ( */}
                {/* //   <MDBFileUpload */}
                {/* //     defaultFile="../src/assets/profil-picture.svg"
                //     name="avatarPath"
                //     getInputFiles={onChangeFiles}
                //   />
                // )} */}
              </form>
            </div>

            <label className="format" htmlFor="file">
              Formats acceptés : .jpg, .jpeg, .png
            </label>
          </div>
        </div>
        <div className="structure4">
          <div className="pageContent">
            <MDBValidation className="row g-3 second-validation" isValidated>
              <MDBValidationItem className="col-md-4 text-area" feedback="yooo">
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
              <div className="next-prev">
                <MDBBtn type="button" onClick={prevQuestion}>
                  précédent
                </MDBBtn>
                <MDBBtn type="button" onClick={validateSecondStep}>
                  {loading ? "" : "suivant"}
                  {loading && (
                    <MDBSpinner role="status" size="sm">
                      <span className="visually-hidden">loading...</span>
                    </MDBSpinner>
                  )}
                </MDBBtn>
              </div>
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
