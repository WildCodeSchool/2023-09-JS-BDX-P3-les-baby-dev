import React from "react";
import { MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
import "./structureRegister.scss";
import FirstStep from "../../components/stepper.components/FirstStep";
import SecondStep from "../../components/stepper.components/SecondStep";

function StructureRegister() {
  return (
    <MDBStepper type="vertical">
      <MDBStepperStep headIcon={1} headText="Stucture d'accueil" itemId={1}>
        <FirstStep />
      </MDBStepperStep>
      <MDBStepperStep headIcon={2} headText="Localisation" itemId={2}>
        <SecondStep />
      </MDBStepperStep>
      <MDBStepperStep headIcon={3} headText="Présentation" itemId={3}>
        <div>yo</div>
      </MDBStepperStep>
      <MDBStepperStep headIcon={4} headText="Votre équipe" itemId={4}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </MDBStepperStep>
      <MDBStepperStep headIcon={5} headText="Services et Activitées" itemId={5}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </MDBStepperStep>
      <MDBStepperStep headIcon={6} headText="Réglement intérieur" itemId={6}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </MDBStepperStep>
      <MDBStepperStep headIcon={7} headText="Vos disponibilitées" itemId={7}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </MDBStepperStep>
      <MDBStepperStep headIcon={8} headText="Nombre de places" itemId={8}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </MDBStepperStep>
      <MDBStepperStep headIcon={9} headText="Récapitulatif" itemId={9}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </MDBStepperStep>
      <MDBStepperStep headIcon={10} headText="Bienvenue" itemId={10}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur
      </MDBStepperStep>
    </MDBStepper>
  );
}

export default StructureRegister;
