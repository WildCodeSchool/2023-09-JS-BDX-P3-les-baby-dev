import React from "react";
import { useStructure } from "../../../context/StrucutreContext";
import "./expCheckbox.scss";

function ExpCheckbox() {
  const { onChange, data } = useStructure();

  return (
    <div className="expContainer">
      <div className="checkContainer">
        <div className="checkboxsContainer">
          <h5> Expérience & Formations</h5>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              id="psci"
              name="psci"
              checked={data?.psci ?? false}
              onChange={onChange}
            />
            <span className="check"> </span>
            <label htmlFor="psci">Formation premiers secours (PSCI)</label>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              id="nesting"
              name="nesting"
              checked={data?.nesting ?? false}
              onChange={onChange}
            />
            <span className="check"> </span>
            <label htmlFor="nesting">
              Formation Nesting (pollution intérieure)
            </label>
          </div>
          <div className="checkboxContainer">
            <div>
              <input
                type="checkbox"
                id="montessori"
                name="montessori"
                checked={data?.montessori ?? false}
                onChange={onChange}
              />
              <span className="check"> </span>
            </div>
            <label htmlFor="montessori">
              Pedagogie Montessori / Pikler Loczy
            </label>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              id="handicap"
              name="handicap"
              checked={data?.handicap ?? false}
              onChange={onChange}
            />
            <span className="check"> </span>
            <label htmlFor="handicap">
              Formation accueil d'enfant handicapés
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCheckbox;
