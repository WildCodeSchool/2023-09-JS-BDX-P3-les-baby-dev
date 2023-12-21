import React from "react";

function ExpCheckbox() {
  return (
    <div className="expContainer">
      <h4>Les petits plus de votre accueil</h4>
      <p>
        Il s'agit en général des services que les parents souhaitent retrouver
        pour l'accueil de leurs enfants, mais vous pourrez en ajouter d'autres
        auprès la publication.
      </p>
      <div className="checkContainer">
        <div className="inputsContainer">
          <h5> Expérience & Formations</h5>
          <div className="inputContainer">
            <input type="checkbox" id="psci" name="psci" checked="" />
            <label htmlFor="psci">Formation premiers secours (PSC1)</label>
          </div>
          <div className="inputContainer">
            <input type="checkbox" id="nesting" name="nesting" checked="" />
            <label htmlFor="nesting">
              Formation Nesting (pollution intérieure)
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="checkbox"
              id="montessori"
              name="montessori"
              checked=""
            />
            <label htmlFor="montessori">
              Pedagogie Montessori / Pikler Loczy
            </label>
          </div>
          <div className="inputContainer">
            <input type="checkbox" id="handi" name="handi" checked="" />
            <label htmlFor="handi">Formation accueil d'enfant handicapés</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCheckbox;
