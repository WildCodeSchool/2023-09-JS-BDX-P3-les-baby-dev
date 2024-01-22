import React from "react";
import "./filterDate.scss";
import { MDBDatepicker } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function FilterDate() {
  return (
    <div className="filterDate_container">
      <div className="returnBar">
        <Link to="/searchlist/filter">
          <img
            className="arrowBack"
            src="../../src/assets/arrow_back.svg"
            alt=""
          />
        </Link>
        <h1>Horaires et Dates</h1>
      </div>
      <div className="date_container">
        <h4>Date de votre recherche</h4>
        <MDBDatepicker inline />
      </div>
      <div className="btn_appliquer">
        <button type="button">Appliquer</button>
      </div>
    </div>
  );
}

export default FilterDate;
