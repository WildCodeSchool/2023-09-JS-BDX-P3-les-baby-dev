import React, { useEffect, useRef, useState } from "react";
import { MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
import "./structureRegister.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import Return from "../../assets/arrow_back.svg";

function StructureRegister() {
  const { step } = useParams();
  const navigate = useNavigate();
  const [stepperType, setStepperType] = useState(
    window.innerWidth > 700 ? "vertical" : "horizontal"
  );

  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const nextQuestion = () => {
    if (+step < 8) {
      navigate(`/structure/step/${+step + 1}`);
      nextRef.current.click();
    }
  };

  const prevQuestion = () => {
    if (+step > 1) {
      navigate(`/structure/step/${+step - 1}`);
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

      <div className="steppers">
        <button ref={nextRef} type="button" className="d-none">
          suivant
        </button>
        <button ref={prevRef} type="button" className="d-none">
          précédent
        </button>
        <div className="half-cover">
          <Link to="/dashboard">
            <img className="arrowBack" src={Return} alt="" />
          </Link>

          <MDBStepper
            defaultStep={+step}
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
          {+step === 1 && (
            <FirstStep nextRef={nextRef} nextQuestion={nextQuestion} />
          )}
          {+step === 2 && (
            <SecondStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {+step === 3 && (
            <ThirdStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {+step === 4 && (
            <FourthStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {+step === 5 && (
            <FifthStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {+step === 6 && (
            <SixthStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {+step === 7 && (
            <SeventhStep
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
            />
          )}
          {+step === 8 && <EighthStep prevQuestion={prevQuestion} />}
        </div>
      </div>
    </>
  );
}

export default StructureRegister;
