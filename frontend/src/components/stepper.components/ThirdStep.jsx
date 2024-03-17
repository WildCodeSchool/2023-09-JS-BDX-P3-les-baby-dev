import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBInput,
  MDBSpinner,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { MDBFileUpload } from "mdb-react-file-upload";
import { useStructure } from "../../context/StrucutreContext";
import "./thirdStep.scss";

import profilePic from "../../assets/profil-picture.svg";

function ThirdStep({ nextQuestion, prevQuestion }) {
  const [loading, setLoading] = useState(false);
  const {
    dataEmployee,
    setDataEmployee,
    getStructureEmployees,
    data,
    deleteEmployee,
    handleSubmitEmployee,
  } = useStructure();

  const HandleAdd = () => {
    const newEmployee = {
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

  const handleDelete = async (i, id) => {
    try {
      if (id) {
        await deleteEmployee(id);
      }

      setDataEmployee((prevData) => {
        const updatedEmployees = [...prevData.employees];
        updatedEmployees.splice(i, 1);
        return { ...prevData, employees: updatedEmployees };
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStructureEmployees(data.id);
  }, []);

  return (
    <div className="fifty">
      <div className="step3">
        <div className="employees">
          {dataEmployee?.employees &&
            dataEmployee?.employees.map((employee, i) => (
              <div key={`${i + 1}`} className="photoContainer">
                <div className="fileUpload">
                  <MDBFileUpload
                    defaultFile={
                      employee?.files
                        ? `${import.meta.env.VITE_BACKEND_URL}/${
                            employee.files
                          }`
                        : profilePic
                    }
                    onChange={(e) => handleChange(e[0], i, "files")}
                  />
                </div>
                <div className="thirdInputContainer">
                  <MDBValidation className="row g-1" isValidated>
                    <MDBValidationItem className="col-md-4" feedback="">
                      <MDBInput
                        name="fName"
                        value={employee?.fName ?? ""}
                        onChange={(e) =>
                          handleChange(e.target.value, i, "fName")
                        }
                        id="validationCustom01"
                        required
                        label="Prénom"
                      />
                    </MDBValidationItem>
                    <MDBValidationItem className="col-md-4" feedback="">
                      <MDBInput
                        name="name"
                        value={employee?.name ?? ""}
                        onChange={(e) =>
                          handleChange(e.target.value, i, "name")
                        }
                        id="validationCustom02"
                        required
                        label="Nom"
                      />
                    </MDBValidationItem>
                    <MDBValidationItem feedback="" className="col-md-4">
                      <MDBInput
                        type="email"
                        className="form-control"
                        id="validationCustomUsername"
                        placeholder="Mail"
                        name="mail"
                        value={employee?.mail ?? ""}
                        onChange={(e) =>
                          handleChange(e.target.value, i, "mail")
                        }
                        required
                        label="Mail"
                      />
                    </MDBValidationItem>
                    <MDBValidationItem className="col-md-6" feedback="">
                      <MDBInput
                        name="function"
                        value={employee?.fonction ?? ""}
                        onChange={(e) =>
                          handleChange(e.target.value, i, "fonction")
                        }
                        id="validationCustom05"
                        required
                        label="Fonction"
                      />
                    </MDBValidationItem>
                  </MDBValidation>
                </div>
                <div className="modify-employee">
                  <MDBBtn
                    className="delete"
                    type="submit"
                    onClick={() => handleSubmitEmployee(i)}
                  >
                    {employee.id ? "modifier" : "créer"}
                  </MDBBtn>

                  <MDBBtn
                    className="delete"
                    type="submit"
                    disabled={!dataEmployee.employees.length}
                    onClick={() => handleDelete(i, employee.id)}
                  >
                    supprimer
                  </MDBBtn>
                </div>
              </div>
            ))}
        </div>
        <div className="addbtn">
          <div className="add-employee">
            <MDBBtn type="submit" onClick={HandleAdd}>
              ajouter un employé
            </MDBBtn>
          </div>
          <div className="next-prev">
            <MDBBtn type="button" onClick={prevQuestion}>
              précédent
            </MDBBtn>
            <MDBBtn type="button" onClick={validateThirdStep}>
              {loading ? "" : "suivant"}
              {loading && (
                <MDBSpinner role="status" size="sm">
                  <span className="visually-hidden">loading...</span>
                </MDBSpinner>
              )}
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
