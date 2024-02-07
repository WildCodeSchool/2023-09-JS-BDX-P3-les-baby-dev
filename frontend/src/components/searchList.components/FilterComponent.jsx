import React from "react";
import "./filterComponent.scss";
import { Link } from "react-router-dom";
import filter from "../../assets/Filter.svg";

function FilterComponent() {
  return (
    <div className="filterComponent_container">
      <div className="btn_filter">
        <Link to="/searchlist/filter/services">
          <img src={filter} alt="filter" />
          <h2>Filtrer ma recherche</h2>
        </Link>
      </div>
    </div>
  );
}

export default FilterComponent;
