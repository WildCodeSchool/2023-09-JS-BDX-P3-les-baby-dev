import React from "react";

function ActivitiesCheckbox() {
  return (
    <div className="activitiesContainer">
      <h5>Activités</h5>
      <div className="inputContainer">
        <input type="checkbox" id="promenades" name="promenades" checked="" />
        <label htmlFor="promenades">Promenades</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="jardin" name="jardin" checked="" />
        <label htmlFor="jardin">Espace extérieur / jardin</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="sorties" name="sorties" checked="" />
        <label htmlFor="sorties">Sorties extérieures</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="eveil" name="eveil" checked="" />
        <label htmlFor="eveil">Activités d'éveil</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="musique" name="musique" checked="" />
        <label htmlFor="musique">Atelier musique</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="art" name="art" checked="" />
        <label htmlFor="art">Activité artistique</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="bilingue" name="bilingue" checked="" />
        <label htmlFor="bilingue">Bilingue/internationale</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="bibli" name="bibli" checked="" />
        <label htmlFor="bibli">Bibliothèque / Ludothèque / RAM</label>
      </div>
      <div className="inputContainer">
        <input type="checkbox" id="transport" name="transport" checked="" />
        <label htmlFor="transport">Transport d'enfant</label>
      </div>
    </div>
  );
}

export default ActivitiesCheckbox;
