import { Link, useNavigate } from "react-router-dom";
import "./filterService.scss";
import { useParent } from "../../../context/ParentContext";

function FilterService() {
  const navigate = useNavigate();
  const { onChange, checkboxState, handleAppliquerClick } = useParent();

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
          onChange={onChange}
          checked={checkboxState.psci}
        />
        <span className="check"> </span>
        <label htmlFor="psci">Formation premiers secours (PSCI)</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="nesting"
          name="nesting"
          onChange={onChange}
          checked={checkboxState.nesting}
        />
        <span className="check"> </span>
        <label htmlFor="nesting">
          Formation Nesting (pollution intérieure)
        </label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="montessori"
          name="montessori"
          onChange={onChange}
          checked={checkboxState.montessori}
        />
        <span className="check"> </span>
        <label htmlFor="montessori">Pedagogie Montessori / Pikler Loczy</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="handicap"
          name="handicap"
          onChange={onChange}
          checked={checkboxState.handicap}
        />
        <span className="check"> </span>
        <label htmlFor="handicap">Formation accueil d'enfant handicapés</label>
      </div>
      <h2>Sorties</h2>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="jardin"
          name="jardin"
          onChange={onChange}
          checked={checkboxState.jardin}
        />
        <span className="check"> </span>
        <label htmlFor="jardin">Espace extérieur / jardin</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="sorties"
          name="sorties"
          onChange={onChange}
          checked={checkboxState.sorties}
        />
        <span className="check"> </span>
        <label htmlFor="sorties">Sorties extérieures</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="promenades"
          name="promenades"
          onChange={onChange}
          checked={checkboxState.promenades}
        />
        <span className="check"> </span>
        <label htmlFor="promenades">Promenades</label>
      </div>
      <h2>Activités</h2>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="eveil"
          name="eveil"
          onChange={onChange}
          checked={checkboxState.eveil}
        />
        <span className="check"> </span>
        <label htmlFor="eveil">Activités d'éveil</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="musique"
          name="musique"
          onChange={onChange}
          checked={checkboxState.musique}
        />
        <span className="check"> </span>
        <label htmlFor="musique">Atelier musique</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="art"
          name="art"
          onChange={onChange}
          checked={checkboxState.art}
        />
        <span className="check"> </span>
        <label htmlFor="art">Activité artistique</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="bilingue"
          name="bilingue"
          onChange={onChange}
          checked={checkboxState.bilingue}
        />
        <span className="check"> </span>
        <label htmlFor="bilingue">Bilingue/internationale</label>
      </div>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="bibli"
          name="bibli"
          onChange={onChange}
          checked={checkboxState.bibli}
        />
        <span className="check"> </span>
        <label htmlFor="bibli">Bibliothèque / Ludothèque / RAM</label>
      </div>
      <div className="btn_appliquer">
        <button
          type="button"
          onClick={() => {
            handleAppliquerClick();
            navigate("/searchlist");
          }}
        >
          Appliquer
        </button>
      </div>
    </div>
  );
}

export default FilterService;
