import React from "react";

function FirstStep() {
  return (
    <div>
      <div className="">
        <div className="step1">
          <h3>Complétez et vérifiez vos informations</h3>
          <input
            required
            type="text"
            name="nomStructure"
            placeholder="Nom de votre établissement"
          />
          <label htmlFor="nomStrucure" className="labelChecked">
            Nom
          </label>
          <p>Ce nom sera celui qui s'affichera en titre de votre annonce</p>
        </div>
        <div className="inputsContainer">
          <input
            required
            type="text"
            name="adresseStructure"
            placeholder="N°, rue, CP, ville"
          />
          <label htmlFor="adresseStrucure" className="labelChecked">
            Adresse
          </label>
          <p>
            Les parents n'obtiendront l'adresse exacte qu'après avoir effectué
            la réservation
          </p>
        </div>
        <div className="inputsContainer">
          <input required type="tel" placeholder="0123456789" />
          <label htmlFor="phone" className="labelChecked">
            Numéro de téléphone
          </label>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
