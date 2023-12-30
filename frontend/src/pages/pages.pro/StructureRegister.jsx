import React from "react";
import { MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
import "./structureRegister.scss";
import FirstStep from "../../components/stepper.components/FirstStep";
import SecondStep from "../../components/stepper.components/SecondStep";
import ThirdStep from "../../components/stepper.components/ThirdStep";
import FourthStep from "../../components/stepper.components/FourthStep";
import FifthStep from "../../components/stepper.components/FifthStep";
import SixthStep from "../../components/stepper.components/SixthStep";
import EighthStep from "../../components/stepper.components/EighthStep";
import NinthStep from "../../components/stepper.components/NinthStep";
import SeventhStep from "../../components/stepper.components/SeventhStep";
import "mdb-react-file-upload/dist/scss/file-upload.scss";
import { useStructure } from "../../context/StrucutreContext";

function StructureRegister() {
  const { handleSubmit } = useStructure();
  return (
    <>
      <div className="nav">
        <div>Babyplace</div>
        <div>Inscription</div>
      </div>
      <MDBStepper type="vertical" externalNext={handleSubmit}>
        <MDBStepperStep
          contentClassName="stepContent"
          headIcon={1}
          headText="Stucture d'accueil"
          itemId={1}
        >
          <FirstStep />
        </MDBStepperStep>
        <MDBStepperStep headIcon={2} headText="Présentation" itemId={2}>
          <SecondStep />
        </MDBStepperStep>

        <MDBStepperStep
          contentClassName="h-auto"
          headIcon={3}
          headText="Votre équipe"
          itemId={3}
        >
          <ThirdStep />
        </MDBStepperStep>
        <MDBStepperStep
          headIcon={4}
          headText="Services et Activitées"
          itemId={4}
        >
          <FourthStep />
        </MDBStepperStep>
        <MDBStepperStep headIcon={5} headText="Vos disponibilitées" itemId={5}>
          <FifthStep />
        </MDBStepperStep>
        <MDBStepperStep headIcon={6} headText="Nombre de places" itemId={6}>
          <SixthStep />
        </MDBStepperStep>
        <MDBStepperStep headIcon={7} headText="Règlement intérieur" itemId={7}>
          <SeventhStep />
        </MDBStepperStep>
        <MDBStepperStep headIcon={8} headText="Récapitulatif" itemId={8}>
          <EighthStep />
        </MDBStepperStep>
        <MDBStepperStep headIcon={9} headText="Bienvenue" itemId={9}>
          <NinthStep />
        </MDBStepperStep>
      </MDBStepper>
    </>
  );
}

export default StructureRegister;
