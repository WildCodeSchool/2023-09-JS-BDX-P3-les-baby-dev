import { MDBFileUpload } from "mdb-react-file-upload";
import { MDBBtn } from "mdb-react-ui-kit";
// import React, { useState } from "react";
import "./thirdStep.scss";
import { useStructure } from "../../context/StrucutreContext";

function ThirdStep() {
  const { data, setData } = useStructure();

  // const [employee, setEmployee] = useState([
  //   { files: null, name: null, fName: null, mail: null },
  // ]);

  // const HandleAdd = () => {
  //   const abc = [
  //     ...employee,
  //     { files: null, name: null, fName: null, mail: null },
  //   ];
  //   setEmployee(abc);
  // };

  // const handleChange = (value, i, propertyName) => {
  //   const inputData = [...employee];
  //   inputData[i][propertyName] = value;
  //   setEmployee(inputData);
  // };

  // const handleDelete = (i) => {
  //   const deleteEmployee = [...employee];
  //   deleteEmployee.splice(i, 1);
  //   setEmployee(deleteEmployee);
  // };
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
    console.info(value);
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
        <div className="pageContent">
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
                </div>
                {data.employees.length > 1 && (
                  <MDBBtn type="submit" onClick={() => handleDelete(i)}>
                    x
                  </MDBBtn>
                )}
              </div>
            ))}

          <MDBBtn type="submit" onClick={HandleAdd}>
            +
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
