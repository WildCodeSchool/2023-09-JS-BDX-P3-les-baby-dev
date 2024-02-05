import { MDBBtn, MDBSpinner, MDBSwitch } from "mdb-react-ui-kit";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useStructure } from "../../context/StrucutreContext";
import "./seventhStep.scss";

function SeventhStep({ nextQuestion, prevQuestion }) {
  const [loading, setLoading] = useState(false);

  const { updateAmenities, handleSubmit, data } = useStructure();

  const validateSeventhStep = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmit();
      nextQuestion();
      setLoading(false);
    }, 1000);
  };

  const handleSwitchChange = (key, value) => {
    updateAmenities(key, value);
  };
  return (
    <div className="fifty">
      <div className="step7">
        <h1>Fixez un règlement intérieur</h1>
        <p>
          Les parents doivent accepter votre règlement intérieur avant de
          réserver.
        </p>
        <div className="switchRules">
          <MDBSwitch
            id="isAdaptationRequired"
            label="La période d'adaptation est obligatoire"
            onChange={(e) =>
              handleSwitchChange("isAdaptationRequired", e.target.checked)
            }
            checked={data?.isAdaptationRequired ?? false}
          />
          <MDBSwitch
            id="isRespectRequired"
            label="Les parents sont priés de respecter l'environnement, le voisinage, la vie privée et la famille de l'assistante maternelle"
            onChange={(e) =>
              handleSwitchChange("isRespectRequired", e.target.checked)
            }
            checked={data?.isRespectRequired ?? false}
          />
          <MDBSwitch
            id="isDoorRespectRequired"
            label="Taper ou sonner à la porte, ne pas rentrer sans y être invité et attendre qu'on vienne vous ouvrir."
            onChange={(e) =>
              handleSwitchChange("isDoorRespectRequired", e.target.checked)
            }
            checked={data?.isDoorRespectRequired ?? false}
          />
          <MDBSwitch
            id="isInfoTransmissionRequired"
            label="Les parents doivent me transmettent toutes les informations nécessaires, ainsi que les incidents éventuels survenus au domicile "
            onChange={(e) =>
              handleSwitchChange("isInfoTransmissionRequired", e.target.checked)
            }
            checked={data?.isInfoTransmissionRequired ?? false}
          />
          <MDBSwitch
            id="isCleanArrivalRequired"
            label="L'enfant arrivera en état de propreté, habillé et ayant pris son premier repas"
            onChange={(e) =>
              handleSwitchChange("isCleanArrivalRequired", e.target.checked)
            }
            checked={data?.isCleanArrivalRequired ?? false}
          />
          <MDBSwitch
            id="isJewelryRemovalRequired"
            label="Les bijoux seront enlevés et rendus aux parents pour des raisons de sécurité (étouffement, ingestion…)."
            onChange={(e) =>
              handleSwitchChange("isJewelryRemovalRequired", e.target.checked)
            }
            checked={data?.isJewelryRemovalRequired ?? false}
          />
          <MDBSwitch
            id="isMedicationAdminRequired"
            label="L'assistante maternelle est habilitée à administrer les médicaments uniquement sur ordonnance ou protocole."
            onChange={(e) =>
              handleSwitchChange("isMedicationAdminRequired", e.target.checked)
            }
            checked={data?.isMedicationAdminRequired ?? false}
          />
        </div>
        <div className="next-prev">
          <MDBBtn type="button" onClick={prevQuestion}>
            précédent
          </MDBBtn>
          <MDBBtn type="button" onClick={validateSeventhStep}>
            {loading ? "" : "suivant"}
            {loading && (
              <MDBSpinner role="status" size="sm">
                <span className="visually-hidden">loading...</span>
              </MDBSpinner>
            )}
          </MDBBtn>
        </div>
      </div>
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h4>Présentez vous auprès des parents</h4>
          <p>
            Présentez votre établissement et indiquez les activités d'éveil que
            vous proposez aux enfants, respect du rythme de l'enfant, activités,
            sorties, pédagogie... Décrivez les espaces de jeu, le lieu de
            sommeil, les équipements dont vous disposez...
          </p>
        </div>
      </div>
    </div>
  );
}

SeventhStep.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
};

export default SeventhStep;
