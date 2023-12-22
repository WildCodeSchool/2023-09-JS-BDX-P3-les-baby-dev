import { MDBFileUpload } from "mdb-react-file-upload";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";

function ThirdStep() {
  const [employee, setEmployee] = useState([]);

  const HandleAdd = () => {
    const abc = [...employee, []];
    setEmployee(abc);
  };

  const handleChange = (onChangeValue, i) => {
    const inputData = [...employee];
    inputData[i] = onChangeValue.target.value;
    setEmployee(inputData);
  };

  const handleDelete = (i) => {
    const deleteEmployee = [...employee];
    deleteEmployee.splice(i, 1);
    setEmployee(deleteEmployee);
  };
  return (
    <div className="step3">
      <h4>Égayez votre annonce avec des photos</h4>
      <p>
        Prenez des photos avec un téléphone ou un appareil photo. Téléchargez au
        moins une photo pour publier votre annonce. Vous pourrez toujours en
        ajouter d'autres ou apporter des modifications par la suite. Maximum
        trois photos, format JPEG, JPG ou PNG.
      </p>
      <div className="pageContent">
        <div className="photoContainer">
          <div className="fileUpload">
            <MDBFileUpload defaultFile="../src/assets/profil-picture.svg" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo1"
              name="file"
              accept="image/png, image/jpg, image/jpeg"
            />
            <label htmlFor="nomProfil" className="labelChecked">
              Nom
            </label>
            <input required type="text" name="nomStructure" placeholder="Nom" />
            <input
              required
              type="text"
              name="nomStructure"
              placeholder="Prenom"
            />
            <label htmlFor="nomProfil" className="labelChecked">
              Prenom
            </label>
            <input
              required
              type="text"
              name="nomStructure"
              placeholder="Mail"
            />
            <label htmlFor="nomProfil" className="labelChecked">
              Mail
            </label>
            <input
              required
              type="text"
              name="nomStructure"
              placeholder="Fonction"
            />
            <label htmlFor="nomProfil" className="labelChecked">
              Fonction
            </label>
          </div>

          <MDBBtn type="submit" onClick={() => HandleAdd()}>
            +
          </MDBBtn>
        </div>
        {employee.map((index, i) => (
          <div key={index} className="photoContainer">
            <div className="fileUpload">
              <MDBFileUpload
                defaultFile="../src/assets/profil-picture.svg"
                disabledRemoveBtn
              />
            </div>
            <div className="inputContainer">
              <br />
              <input
                type="file"
                id="photo1"
                name="file"
                accept="image/png, image/jpg, image/jpeg"
              />
              <label htmlFor="nomProfil" className="labelChecked">
                Nom
              </label>
              <input
                required
                type="text"
                name="nomStructure"
                placeholder="Nom"
                onChange={(e) => handleChange(e, i)}
              />
              <input
                required
                type="text"
                name="nomStructure"
                placeholder="Prenom"
                onChange={(e) => handleChange(e, i)}
              />
              <label htmlFor="nomProfil" className="labelChecked">
                Prenom
              </label>
              <input
                required
                type="text"
                name="nomStructure"
                placeholder="Mail"
                onChange={(e) => handleChange(e, i)}
              />
              <label htmlFor="nomProfil" className="labelChecked">
                Mail
              </label>
              <input
                required
                type="text"
                name="nomStructure"
                placeholder="Fonction"
                onChange={(e) => handleChange(e, i)}
              />
              <label htmlFor="nomProfil" className="labelChecked">
                Fonction
              </label>
            </div>
            <MDBBtn type="submit" onClick={() => handleDelete(i)}>
              x
            </MDBBtn>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdStep;
