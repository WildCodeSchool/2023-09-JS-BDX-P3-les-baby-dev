import { MDBFileUpload } from "mdb-react-file-upload";

function SecondStep() {
  return (
    <div>
      <div className="step2">
        <h4>Choisir une photo de profil :</h4>
        <div className="pageContent">
          <div className="fileUpload">
            <MDBFileUpload
              defaultFile="../src/assets/profil-picture.svg"
              disabledRemoveBtn
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="file">Formats acceptés : .jpg, .jpeg, .png</label>
          </div>
        </div>
      </div>
      <div className="page-left structure4">
        <h4>Présentez vous auprès des parents</h4>
        <div className="pageContent">
          <p>
            Présentez vous et décrivez votre expérience. Indiquez les activités
            d'éveil que vous proposez aux enfants, respect du rythme de
            l'enfant, activités, sorties, pédagogie... Décrivez les espaces de
            jeu, le lieu de sommeil, les équipements dont vous disposez...
          </p>
          <textarea id="description" name="description" maxLength="500" />
          <legend>Maximum 500 caractères.</legend>
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
