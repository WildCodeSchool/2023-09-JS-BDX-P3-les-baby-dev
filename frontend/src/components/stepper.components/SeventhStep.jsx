import { MDBSwitch } from "mdb-react-ui-kit";
import React from "react";

function SeventhStep() {
  return (
    <div className="sevenContainer">
      <h1>Fixez un règlement intérieur</h1>
      <p>
        Les parents doivent accepter votre règlement intérieur avant de
        réserver.
      </p>
      <div className="switchRules">
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="La période d'adaptation est obligatoire"
        />
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="Les parents sont priés de respecter l'environnement, le voisinage, la vie privée et la famille de l'assistante maternelle"
        />
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="Taper ou sonner à la porte, ne pas rentrer sans y être invité et attendre qu'on vienne vous ouvrir."
        />
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="Les parents doivent me transmettent toutes les informations nécessaires, ainsi que les incidents éventuels survenus au domicile "
        />
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="L’enfant arrivera en état de propreté, habillé et ayant pris son premier repas"
        />
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="Les bijoux seront enlevés et rendus aux parents pour des raisons de sécurité (étouffement, ingestion…)."
        />
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="L’assistante maternelle est habilitée à administrer les médicaments uniquement sur ordonnance ou protocole."
        />
      </div>
    </div>
  );
}

export default SeventhStep;
