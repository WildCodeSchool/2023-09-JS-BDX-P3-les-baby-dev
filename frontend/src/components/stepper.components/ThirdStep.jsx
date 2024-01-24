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

function ThirdStep({ nextQuestion, prevQuestion }) {
  const [loading, setLoading] = useState(false);
  const { handleSubmitEmployee } = useStructure();
  const { dataEmployee, setDataEmployee } = useStructure();

  const HandleAdd = () => {
    const newEmployee = {
      // id: null,
      files: "",
      name: "",
      fName: "",
      mail: "",
      fonction: "",
    };

    setDataEmployee((prevData) => ({
      ...prevData,
      employees: [...(prevData.employees || []), newEmployee],
    }));
  };

  const validateThirdStep = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmitEmployee();
      nextQuestion();
      setLoading(false);
    }, 1000);
  };

  const handleChange = (value, i, propertyName) => {
    setDataEmployee((prevData) => {
      const updatedEmployees = [...prevData.employees];
      updatedEmployees[i][propertyName] = value;
      return { ...prevData, employees: updatedEmployees };
    });
  };

  const handleDelete = (i) => {
    setDataEmployee((prevData) => {
      const updatedEmployees = [...prevData.employees];
      updatedEmployees.splice(i, 1);
      return { ...prevData, employees: updatedEmployees };
    });
  };
  return (
    <div className="fifty">
      <div className="step3">
        <div className="next-prev">
          <MDBBtn type="button" onClick={validateThirdStep}>
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
        <div className="employees">
          {dataEmployee.employees &&
            dataEmployee.employees.map((employee, i) => (
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
                    >
                      <MDBInput
                        name="fName"
                        onChange={(e) =>
                          handleChange(e.target.value, i, "fName")
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
                    >
                      <MDBInput
                        name="name"
                        onChange={(e) =>
                          handleChange(e.target.value, i, "name")
                        }
                        id="validationCustom02"
                        required
                        label="Nom"
                      />
                    </MDBValidationItem>
                    <MDBValidationItem
                      feedback="Veuillez entrer un email valide"
                      invalid
                      className="col-md-4"
                    >
                      <MDBInput
                        type="email"
                        className="form-control"
                        id="validationCustomUsername"
                        placeholder="Mail"
                        name="mail"
                        onChange={(e) =>
                          handleChange(e.target.value, i, "mail")
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
                {dataEmployee.employees.length > 0 && (
                  <MDBBtn
                    className="delete"
                    type="submit"
                    onClick={() => handleDelete(i)}
                  >
                    x
                  </MDBBtn>
                )}
              </div>
            ))}
        </div>
        <div className="addbtn">
          <div className="add-employee">
            <MDBBtn type="submit" onClick={HandleAdd}>
              ajouter un employé
            </MDBBtn>
          </div>
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
  nextQuestion: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
};

export default ThirdStep;
