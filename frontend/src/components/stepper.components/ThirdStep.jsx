import { useState } from "react";
import PropTypes from "prop-types";
import { MDBFileUpload } from "mdb-react-file-upload";
import {
  MDBBtn,
  MDBInput,
  MDBSpinner,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";
// import React, { useState } from "react";
import "./thirdStep.scss";

function ThirdStep({ nextRef, prevRef }) {
  const [loading, setLoading] = useState(false);

  const { handleSubmitEmployee } = useStructure();

  const { data, setData } = useStructure();
  const HandleAdd = () => {
    const newEmployee = {
      files: "",
      name: "",
      fName: "",
      mail: "",
      fonction: "",
    };

    setData((prevData) => ({
      ...prevData,
      employees: [...(prevData.employees || []), newEmployee],
    }));
  };

  const validateThirdStep = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmitEmployee();
      nextRef.current.click();
      setLoading(false);
    }, 1000);
  };

  const handleChange = (value, i, propertyName) => {
    setData((prevData) => {
      const updatedEmployees = [...prevData.employees];
      updatedEmployees[i][propertyName] = value;
      return { ...prevData, employees: updatedEmployees };
    });
  };

  const handleDelete = (i) => {
    setData((prevData) => {
      const updatedEmployees = [...prevData.employees];
      updatedEmployees.splice(i, 1);
      return { ...prevData, employees: updatedEmployees };
    });
  };
  return (
    <div className="fifty">
      <div className="step3">
        {data.employees &&
          data.employees.map((employee, i) => (
            <div key={`${i + 1}`} className="photoContainer">
              <div className="fileUpload">
                <MDBFileUpload
                  defaultFile="../src/assets/profil-picture.svg"
                  onChange={(e) => handleChange(e[0], i, "files")}
                />
              </div>
              <div className="thirdInputContainer">
                <MDBValidation className="row g-3">
                  <MDBValidationItem
                    className="col-md-4"
                    feedback="Veuillez entrer un prénom valide"
                    invalid
                    isValidated
                  >
                    <MDBInput
                      name="fname"
                      onChange={(e) =>
                        handleChange(e.target.value, i, "fonction")
                      }
                      id="validationCustom01"
                      required
                      label="Prénom"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-4"
                    feedback="Veuillez entrer un nom valide"
                    invalid
                    isValidated
                  >
                    <MDBInput
                      name="lname"
                      onChange={(e) =>
                        handleChange(e.target.value, i, "fonction")
                      }
                      id="validationCustom02"
                      required
                      label="Nom"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    feedback="Veuillez entrer un email valide"
                    invalid
                    isValidated
                    className="col-md-4"
                  >
                    <MDBInput
                      type="email"
                      className="form-control"
                      id="validationCustomUsername"
                      placeholder="Mail"
                      onChange={(e) =>
                        handleChange(e.target.value, i, "fonction")
                      }
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]+"
                      required
                      label="Mail"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Veuillez entrer une fonction valide"
                    invalid
                  >
                    <MDBInput
                      name="function"
                      onChange={(e) =>
                        handleChange(e.target.value, i, "fonction")
                      }
                      id="validationCustom05"
                      required
                      label="fonction"
                    />
                  </MDBValidationItem>
                </MDBValidation>
              </div>
              {data.employees.length > 0 && (
                <MDBBtn type="submit" onClick={() => handleDelete(i)}>
                  x
                </MDBBtn>
              )}
            </div>
          ))}
        <div className="addbtn">
          <MDBBtn type="submit" onClick={HandleAdd}>
            ajouter un employé
          </MDBBtn>
          <MDBBtn type="button" onClick={validateThirdStep}>
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
      </div>
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h4>
            Veillez à renseigner le mail des professionnels travaillant dans
            votre structure
          </h4>
          <p>
            Veillez à renseigner le mail des professionnels travaillant dans
            votre structure. Une notification les avertira de renseigner leurs
            agenda
          </p>
        </div>
      </div>
    </div>
  );
}

ThirdStep.propTypes = {
  nextRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  prevRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default ThirdStep;
