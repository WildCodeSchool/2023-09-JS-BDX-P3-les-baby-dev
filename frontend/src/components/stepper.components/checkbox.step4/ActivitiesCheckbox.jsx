import React from "react";
import { useStructure } from "../../../context/StrucutreContext";

function ActivitiesCheckbox() {
  const { data, onChange } = useStructure();
  return (
    <div className="activitiesContainer">
      <h5>Activités</h5>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="jardin"
          name="jardin"
          checked={data.jardin || false}
          onChange={onChange}
        />
        <label htmlFor="jardin">Espace extérieur / jardin</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="sorties"
          name="sorties"
          checked={data.sorties || false}
          onChange={onChange}
        />
        <label htmlFor="sorties">Sorties extérieures</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="promenades"
          name="promenades"
          checked={data.promenades || false}
          onChange={onChange}
        />
        <label htmlFor="promenades">Promenades</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="eveil"
          name="eveil"
          checked={data.eveil || false}
          onChange={onChange}
        />
        <label htmlFor="eveil">Activités d'éveil</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="musique"
          name="musique"
          checked={data.musique || false}
          onChange={onChange}
        />
        <label htmlFor="musique">Atelier musique</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="art"
          name="art"
          checked={data.art || false}
          onChange={onChange}
        />
        <label htmlFor="art">Activité artistique</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="bilingue"
          name="bilingue"
          checked={data.bilingue || false}
          onChange={onChange}
        />
        <label htmlFor="bilingue">Bilingue/internationale</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="bibli"
          name="bibli"
          checked={data.bibli || false}
          onChange={onChange}
        />
        <label htmlFor="bibli">Bibliothèque / Ludothèque / RAM</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="transport"
          name="transport"
          checked={data.transport || false}
          onChange={onChange}
        />
        <label htmlFor="transport">Transport d'enfant</label>
      </div>
    </div>
  );
}

export default ActivitiesCheckbox;
