import React /* { useState } */ from "react";
import { Link } from "react-router-dom";
import "./filterService.scss";

function FilterService() {
  /* const [checkboxState, setCheckboxState] = useState({
    psci: false,
    nesting: false,
    montessori: false,
    handicap: false,
    jardin: false,
    sorties: false,
    promenades: false,
    eveil: false,
    musique: false,
    art: false,
    bilingue: false,
    bibli: false,
  });

  /* const handleCheckboxChange = (checkboxName) => {
    setCheckboxState((prevCheckboxState) => ({
      ...prevCheckboxState,
      [checkboxName]: !prevCheckboxState[checkboxName],
    }));
  }; */

  const handleAppliquerClick = () => {
    // console.log("Filtres à appliquer :", checkboxState);
  };

  return (
    <div className="filterService_container">
      <div className="returnBar">
        <Link to="/searchlist/filter">
          <img
            className="arrowBack"
            src="../../src/assets/arrow_back.svg"
            alt=""
          />
        </Link>
        <h1>Service</h1>
      </div>
      <h2>Expériences et Formations</h2>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="psci"
          name="psci"
          //        checked={value}
          //      onChange={() => handleCheckboxChange(key)}
        />
        <label htmlFor="psci">Formation premiers secours (PSCI)</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="nesting" name="nesting" />
        <label htmlFor="nesting">
          Formation Nesting (pollution intérieure)
        </label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="montessori" name="montessori" />
        <label htmlFor="montessori">Pedagogie Montessori / Pikler Loczy</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="handicap" name="handicap" />
        <label htmlFor="handi">Formation accueil d'enfant handicapés</label>
      </div>
      <h2>Sorties</h2>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="jardin"
          name="jardin"
          //          checked={checkboxState.jardin || false}
          //         onChange={setCheckboxState}
        />
        <label htmlFor="jardin">Espace extérieur / jardin</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="sorties" name="sorties" />
        <label htmlFor="sorties">Sorties extérieures</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="promenades" name="promenades" />
        <label htmlFor="promenades">Promenades</label>
      </div>
      <h2>Activités</h2>
      <div className="checkboxContainer">
        <input type="checkbox" id="eveil" name="eveil" />
        <label htmlFor="eveil">Activités d'éveil</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="musique" name="musique" />
        <label htmlFor="musique">Atelier musique</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="art" name="art" />
        <label htmlFor="art">Activité artistique</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="bilingue" name="bilingue" />
        <label htmlFor="bilingue">Bilingue/internationale</label>
      </div>
      <div className="checkboxContainer">
        <input type="checkbox" id="bibli" name="bibli" />
        <label htmlFor="bibli">Bibliothèque / Ludothèque / RAM</label>
      </div>
      <div className="btn_appliquer">
        <button type="button" onClick={handleAppliquerClick}>
          Appliquer
        </button>
      </div>
    </div>
  );
}

export default FilterService;
