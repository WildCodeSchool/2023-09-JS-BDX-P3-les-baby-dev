import React from "react";
import { useStructure } from "../../../context/StrucutreContext";

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
            <label htmlFor="nesting">
              Formation Nesting (pollution intérieure)
            </label>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              id="montessori"
              name="montessori"
              checked={data?.montessori ?? false}
              onChange={onChange}
            />
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
            <label htmlFor="handi">Formation accueil d'enfant handicapés</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCheckbox;
