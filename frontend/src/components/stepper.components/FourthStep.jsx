import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDBBtn, MDBSpinner } from "mdb-react-ui-kit";
import ExpCheckbox from "./checkbox.step4/ExpCheckbox";
import ActivitiesCheckbox from "./checkbox.step4/ActivitiesCheckbox";
import "./fourthStep.scss";
import { useStructure } from "../../context/StrucutreContext";

function FourthStep({ nextRef, prevRef }) {
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useStructure();

  const validateFourthStep = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmit();
      nextRef.current.click();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fifty">
      <div className="step5">
        <ExpCheckbox />
        <ActivitiesCheckbox />
        <MDBBtn type="button" onClick={validateFourthStep}>
          {loading ? "" : "suivant"}
          {loading && (
            <MDBSpinner role="status" size="sml">
              <span className="visually-hidden">loading...</span>
            </MDBSpinner>
          )}
        </MDBBtn>
        <MDBBtn type="button" onClick={() => prevRef.current.click()}>
          précédent
        </MDBBtn>
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

FourthStep.propTypes = {
  nextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  prevRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
export default FourthStep;
