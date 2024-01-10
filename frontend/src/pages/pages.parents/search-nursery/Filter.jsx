import React from "react";
import { Link } from "react-router-dom";
import "./filter.scss";
import { MDBSwitch } from "mdb-react-ui-kit";

function Filter() {
  return (
    <div className="filter_container">
      <div className="returnBar">
        <Link to="/searchlist">
          <img
            className="arrowBack"
            src="../../src/assets/arrow_back.svg"
            alt=""
          />
        </Link>
        <h1>Filtres</h1>
      </div>
      <div className="lines_filter">
        <div className="line_filter">
          <h2>Créche</h2>
          <MDBSwitch id="flexSwitchCheckDefault" />
        </div>
        <div className="line_filter">
          <h2>Assistante Maternelle</h2>
          <MDBSwitch id="flexSwitchCheckDefault" />
        </div>
        <div className="line_filter">
          <h2>Dates et Horaires</h2>
          <Link to="/searchlist/filter/dates">
            <img
              className="arrowNext"
              src="../../src/assets/arrowNext.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="line_filter">
          <h2>Que les profils dispo</h2>
          <MDBSwitch id="flexSwitchCheckDefault" />
        </div>
        <div className="line_filter">
          <h2>Service</h2>
          <Link to="/searchlist/filter/services">
            <img
              className="arrowNext"
              src="../../src/assets/arrowNext.svg"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="btn_appliquer">
        <button type="button">Appliquer</button>
      </div>
    </div>
  );
}

export default Filter;
