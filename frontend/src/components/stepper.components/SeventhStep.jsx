import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";
import { useStructure } from "../../context/StrucutreContext";

function SeventhStep() {
  const { data, updateAmenities } = useStructure();

  const handleSwitchChange = (key, value) => {
    updateAmenities(key, value);
  };
  return (
    <div className="sevenContainer">
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
          checked={data.amenities.isAdaptationRequired}
        />
        <MDBSwitch
          id="isRespectRequired"
          label="Les parents sont priés de respecter l'environnement, le voisinage, la vie privée et la famille de l'assistante maternelle"
          onChange={(e) =>
            handleSwitchChange("isRespectRequired", e.target.checked)
          }
          checked={data.amenities.isRespectRequired}
        />
        <MDBSwitch
          id="isDoorRespectRequired"
          label="Taper ou sonner à la porte, ne pas rentrer sans y être invité et attendre qu'on vienne vous ouvrir."
          onChange={(e) =>
            handleSwitchChange("isDoorRespectRequired", e.target.checked)
          }
          checked={data.amenities.isDoorRespectRequired}
        />
        <MDBSwitch
          id="isInfoTransmissionRequired"
          label="Les parents doivent me transmettent toutes les informations nécessaires, ainsi que les incidents éventuels survenus au domicile "
          onChange={(e) =>
            handleSwitchChange("isInfoTransmissionRequired", e.target.checked)
          }
          checked={data.amenities.isInfoTransmissionRequired}
        />
        <MDBSwitch
          id="isCleanArrivalRequired"
          label="L'enfant arrivera en état de propreté, habillé et ayant pris son premier repas"
          onChange={(e) =>
            handleSwitchChange("isCleanArrivalRequired", e.target.checked)
          }
          checked={data.amenities.isCleanArrivalRequired}
        />
        <MDBSwitch
          id="isJewelryRemovalRequired"
          label="Les bijoux seront enlevés et rendus aux parents pour des raisons de sécurité (étouffement, ingestion…)."
          onChange={(e) =>
            handleSwitchChange("isJewelryRemovalRequired", e.target.checked)
          }
          checked={data.amenities.isJewelryRemovalRequired}
        />
        <MDBSwitch
          id="isMedicationAdminRequired"
          label="L'assistante maternelle est habilitée à administrer les médicaments uniquement sur ordonnance ou protocole."
          onChange={(e) =>
            handleSwitchChange("isMedicationAdminRequired", e.target.checked)
          }
          checked={data.amenities.isMedicationAdminRequired}
        />
      </div>
    </div>
  );
}

export default SeventhStep;
