import React from "react";

function ThirdStep() {
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
          <div className="imgContainer">
            <img src="./src/assets/profil-picture.svg" alt="prévisualisation" />
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
        </div>
        <div className="photoAndDescContainer">
          <div className="imgContainer">
            <img
              src="./src/assets/profil-picture.svg "
              alt="prévisualisation"
            />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo2"
              name="file"
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
        </div>
        <div className="photoAndDescContainer">
          <div className="imgContainer">
            <img src="./src/assets/profil-picture.svg" alt="prévisualisation" />
          </div>
          <div className="inputContainer">
            <br />
            <input
              type="file"
              id="photo3"
              name="file"
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdStep;
