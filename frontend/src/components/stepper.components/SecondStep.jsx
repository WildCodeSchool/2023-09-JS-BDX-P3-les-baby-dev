import { MDBFileUpload } from "mdb-react-file-upload";
import { useStructure } from "../../context/StrucutreContext";
import "./secondStep.scss";

function SecondStep() {
  const { data, onChange, onChangeFiles } = useStructure();
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
                  name="profilPic"
                  getInputFiles={onChangeFiles}
                  maxFileQuantity={3}
                />
              </form>
            </div>
            <label htmlFor="file">
              Formats acceptés : .jpg, .jpeg, .png <br /> 3 photos Maximum
            </label>
          </div>
        </div>
        <div className="structure4">
          <div className="pageContent">
            <textarea
              id="description"
              name="description"
              maxLength="500"
              value={data.description}
              onChange={onChange}
            />
            <legend>Maximum 500 caractères.</legend>
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
