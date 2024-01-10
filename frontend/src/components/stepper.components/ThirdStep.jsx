import { MDBFileUpload } from "mdb-react-file-upload";
import {
  MDBBtn,
  MDBInput,
  MDBInputGroup,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
// import React, { useState } from "react";
import "./thirdStep.scss";
import { useStructure } from "../../context/StrucutreContext";

function ThirdStep() {
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
      employees: [...prevData.employees, newEmployee],
    }));
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
                <div>
                  <label htmlFor="nomProfil" className="labelChecked">
                    Nom
                  </label>
                  <input
                    required
                    type="text"
                    name="nomStructure"
                    placeholder="Nom"
                    onChange={(e) => handleChange(e.target.value, i, "name")}
                  />
                  <label htmlFor="nomProfil" className="labelChecked">
                    Prenom
                  </label>
                  <input
                    required
                    type="text"
                    name="nomStructure"
                    placeholder="Prenom"
                    onChange={(e) => handleChange(e.target.value, i, "fName")}
                  />
                </div>
                <div>
                  <label htmlFor="nomProfil" className="labelChecked">
                    Mail
                  </label>
                  <input
                    required
                    type="text"
                    name="nomStructure"
                    placeholder="Mail"
                    onChange={(e) => handleChange(e.target.value, i, "mail")}
                  />
                  <label htmlFor="nomProfil" className="labelChecked">
                    Fonction
                  </label>
                  <input
                    required
                    type="text"
                    name="nomStructure"
                    placeholder="Fonction"
                    onChange={(e) =>
                      handleChange(e.target.value, i, "fonction")
                    }
                  />
                </div>
                <MDBValidation className="row g-3" isValidated>
                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      name="fname"
                      onChange={(e) =>
                        handleChange(e.target.value, i, "fonction")
                      }
                      id="validationCustom01"
                      required
                      label="First name"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem className="col-md-4">
                    <MDBInput
                      name="lname"
                      onChange={(e) =>
                        handleChange(e.target.value, i, "fonction")
                      }
                      id="validationCustom02"
                      required
                      label="Last name"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    feedback="Please choose a username."
                    invalid
                    className="col-md-4"
                  >
                    <MDBInputGroup textBefore="@">
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustomUsername"
                        placeholder="Username"
                        required
                      />
                    </MDBInputGroup>
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Please provide a valid city."
                    invalid
                  >
                    <MDBInput
                      name="city"
                      onChange={(e) =>
                        handleChange(e.target.value, i, "fonction")
                      }
                      id="validationCustom03"
                      required
                      label="City"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Please provide a valid zip."
                    invalid
                  >
                    <MDBInput
                      name="zip"
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

export default ThirdStep;
