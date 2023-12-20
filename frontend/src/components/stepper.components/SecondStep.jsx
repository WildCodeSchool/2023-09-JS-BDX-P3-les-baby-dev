import React from "react";

function SecondStep() {
  return (
    <div className="step2">
      <h4>Choisir une photo de profil :</h4>
      <div className="pageContent">
        <div className="imgstep2">
          <img src="./src/assets/profil-picture.svg" alt="profil" />
        </div>
        <div className="inputContainer">
          <label htmlFor="file">Formats acceptés : .jpg, .jpeg, .png</label>
          <br />
          <input
            type="file"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
            onChange=""
          />
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
