import React, { useRef } from "react";
import { MDBBtn, MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
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
import Navbar from "../../components/stepper.components/Navbar";

function StructureRegister() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const { handleSubmit } = useStructure();

  return (
    <>
      <Navbar />

      <button ref={nextRef} type="button" className="d-none">
        suivant
      </button>
      <button ref={prevRef} type="button" className="d-none">
        précédent
      </button>

      <MDBStepper
        type="vertical"
        externalNext={nextRef}
        externalPrev={prevRef}
        // disableHeadSteps
      >
        <MDBStepperStep
          contentClassName="stepContent"
          headIcon={1}
          headText="Stucture d'accueil"
          itemId={1}
        >
          <FirstStep nextRef={nextRef} />
        </MDBStepperStep>
        <MDBStepperStep headIcon={2} headText="Présentation" itemId={2}>
          <SecondStep nextRef={nextRef} prevRef={prevRef} />
        </MDBStepperStep>

        <MDBStepperStep
          contentClassName="h-auto"
          headIcon={3}
          headText="Votre équipe"
          itemId={3}
        >
          <ThirdStep nextRef={nextRef} prevRef={prevRef} />
        </MDBStepperStep>
        <MDBStepperStep
          headIcon={4}
          headText="Services et Activitées"
          itemId={4}
        >
          <FourthStep nextRef={nextRef} prevRef={prevRef} />
        </MDBStepperStep>
        <MDBStepperStep headIcon={5} headText="Vos disponibilitées" itemId={5}>
          <FifthStep nextRef={nextRef} prevRef={prevRef} />
        </MDBStepperStep>
        <MDBStepperStep headIcon={6} headText="Nombre de places" itemId={6}>
          <SixthStep nextRef={nextRef} prevRef={prevRef} />
        </MDBStepperStep>
        <MDBStepperStep headIcon={7} headText="Règlement intérieur" itemId={7}>
          <SeventhStep nextRef={nextRef} prevRef={prevRef} />
        </MDBStepperStep>
        <MDBStepperStep headIcon={8} headText="Récapitulatif" itemId={8}>
          <EighthStep prevRef={prevRef} />
          <div className="submitForm">
            <MDBBtn type="submit" onClick={handleSubmit}>
              terminé
            </MDBBtn>
            <MDBBtn type="button" onClick={() => prevRef.current.click()}>
              précédent
            </MDBBtn>
          </div>
        </MDBStepperStep>
        <MDBStepperStep headIcon={9} headText="Bienvenue" itemId={9}>
          <NinthStep />
        </MDBStepperStep>
      </MDBStepper>
    </>
  );
}

export default StructureRegister;
