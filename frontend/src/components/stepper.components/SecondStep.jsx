import axios from "axios";
import { useRef } from "react";
import { MDBFileUpload } from "mdb-react-file-upload";
import {
  MDBBtn,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";
import "./secondStep.scss";

function SecondStep() {
  const { data, onChange, onChangeFiles } = useStructure();
  const inputRef = useRef();
  const maxLength = 500;
  const descriptionLength = data.description ? data.description.length : 0;

  const handleSubmitFiles = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);
    axios.post("http://localhost:3310/api/avatar", formData);
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
                  onClick={handleSubmitFiles}
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
                  value={data.description}
                  onChange={onChange}
                  name="stuctureDesc"
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

export default SecondStep;
