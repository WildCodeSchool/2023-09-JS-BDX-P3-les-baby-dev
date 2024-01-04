import React from "react";
import ExpCheckbox from "./checkbox.step4/ExpCheckbox";
import ActivitiesCheckbox from "./checkbox.step4/ActivitiesCheckbox";
import "./fourthStep.scss";

function FourthStep() {
  return (
    <div className="fifty">
      <div className="step5">
        <ExpCheckbox />
        <ActivitiesCheckbox />
      </div>
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h4>Valorisez votre expérience et vos services</h4>
          <p>
            N'hésitez pas à expliquer en détail vos formations et tout votre
            passé de garde d'enfants. Différenciez-vous par des compétences ou
            des qualités inédites (blog de nounou, ménage écologique, ou
            horaires décalés)
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthStep;
