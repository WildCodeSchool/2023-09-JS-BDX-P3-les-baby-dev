import React from "react";
import "./filterComponent.scss";
import { Link } from "react-router-dom";
import filter from "../../assets/Filter.svg";
import { useParent } from "../../context/ParentContext";

function FilterComponent() {
  const { setFilterSearch, filterSearch } = useParent();

  return (
    <div className="filterComponent_container">
      <div className="btn_filter">
        <Link to="/searchlist/filter/services">
          <div className="filter-text">
            <img src={filter} alt="filter" />
            <h2>Filtrer ma recherche</h2>
          </div>
        </Link>
        {filterSearch.length > 0 && (
          <button
            type="button"
            className="yoo"
            onClick={() => {
              setFilterSearch([]);
            }}
          >
            Supprimer les filtre
          </button>
        )}
      </div>
    </div>
  );
}

export default FilterComponent;
