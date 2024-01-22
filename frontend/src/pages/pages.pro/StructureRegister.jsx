import React, { useEffect, useRef, useState } from "react";
import { MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
import "./structureRegister.scss";
import FirstStep from "../../components/stepper.components/FirstStep";
import SecondStep from "../../components/stepper.components/SecondStep";
import ThirdStep from "../../components/stepper.components/ThirdStep";
import FourthStep from "../../components/stepper.components/FourthStep";
import FifthStep from "../../components/stepper.components/FifthStep";
import SixthStep from "../../components/stepper.components/SixthStep";
import EighthStep from "../../components/stepper.components/EighthStep";
import SeventhStep from "../../components/stepper.components/SeventhStep";
import "mdb-react-file-upload/dist/scss/file-upload.scss";
import Navbar from "../../components/stepper.components/Navbar";

function StructureRegister() {
  const [stepperType, setStepperType] = useState(
    window.innerWidth > 700 ? "vertical" : "horizontal"
  );

  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const nextQuestion = () => {
    if (currentQuestion < 8) {
      setCurrentQuestion(currentQuestion + 1);
      nextRef.current.click();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      prevRef.current.click();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setStepperType(window.innerWidth > 700 ? "vertical" : "horizontal");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />

      <button ref={nextRef} type="button" className="d-none">
        suivant
      </button>
      <button ref={prevRef} type="button" className="d-none">
        précédent
      </button>
      <div className="steppers">
        <div className="half-cover">
          <MDBStepper
            type={stepperType}
            externalNext={nextRef}
            externalPrev={prevRef}
            disableHeadSteps
          >
            <MDBStepperStep headText="Stucture d'accueil" itemId={1}>
              {" "}
            </MDBStepperStep>
            <MDBStepperStep headText="Présentation" itemId={2}>
              {" "}
            </MDBStepperStep>

            <MDBStepperStep headText="Votre équipe" itemId={3}>
              {" "}
            </MDBStepperStep>
            <MDBStepperStep headText="Services et Activitées" itemId={4}>
              {" "}
            </MDBStepperStep>
            <MDBStepperStep headText="Vos disponibilitées" itemId={5}>
              {" "}
            </MDBStepperStep>
            <MDBStepperStep headText="Nombre de places" itemId={6}>
              {" "}
            </MDBStepperStep>
            <MDBStepperStep headText="Règlement intérieur" itemId={7}>
              {" "}
            </MDBStepperStep>
            <MDBStepperStep headText="Récapitulatif" itemId={8}>
              {" "}
            </MDBStepperStep>
          </MDBStepper>
        </div>
        <div className="other-half">
          {currentQuestion === 1 && (
            <FirstStep nextRef={nextRef} nextQuestion={nextQuestion} />
          )}
          {currentQuestion === 2 && (
            <SecondStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {currentQuestion === 3 && (
            <ThirdStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {currentQuestion === 4 && (
            <FourthStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {currentQuestion === 5 && (
            <FifthStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {currentQuestion === 6 && (
            <SixthStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {currentQuestion === 7 && (
            <SeventhStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {currentQuestion === 8 && <EighthStep prevQuestion={prevQuestion} />}
        </div>
      </div>
    </>
  );
}

export default StructureRegister;
