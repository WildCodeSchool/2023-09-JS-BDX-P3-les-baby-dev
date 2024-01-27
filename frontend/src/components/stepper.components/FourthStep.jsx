import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDBBtn, MDBSpinner } from "mdb-react-ui-kit";
import ExpCheckbox from "./checkbox.step4/ExpCheckbox";
import ActivitiesCheckbox from "./checkbox.step4/ActivitiesCheckbox";
import "./fourthStep.scss";
import { useStructure } from "../../context/StrucutreContext";

function FourthStep({ nextQuestion, prevQuestion }) {
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useStructure();

  const validateFourthStep = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmit();
      nextQuestion();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fifty">
      <div className="step5">
        <div className="next-prev">
          <MDBBtn type="button" onClick={validateFourthStep}>
            {loading ? "" : "suivant"}
            {loading && (
              <MDBSpinner role="status" size="sm">
                <span className="visually-hidden">loading...</span>
              </MDBSpinner>
            )}
          </MDBBtn>
          <MDBBtn type="button" onClick={prevQuestion}>
            précédent
          </MDBBtn>
        </div>
        <h4>Les petits plus de votre accueil</h4>
        <p>
          Il s'agit en général des services que les parents souhaitent retrouver
          pour l'accueil de leurs enfants, mais vous pourrez en ajouter d'autres
          auprès la publication.
        </p>
        <div className="checkQestion">
          <ExpCheckbox />
          <ActivitiesCheckbox />
        </div>
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
  nextQuestion: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
};
export default FourthStep;
