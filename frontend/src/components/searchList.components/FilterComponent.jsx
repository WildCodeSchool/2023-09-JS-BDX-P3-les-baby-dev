import React from "react";
import "./filterComponent.scss";
import { Link } from "react-router-dom";

function FilterComponent() {
  return (
    <div className="filterComponent_container">
      <div className="btn_filter">
        <Link to="/searchlist/filter">
          <img src="../src/assets/Filter.svg" alt="" />
          <h2>Filter</h2>
        </Link>
      </div>
    </div>
  );
}

export default FilterComponent;
