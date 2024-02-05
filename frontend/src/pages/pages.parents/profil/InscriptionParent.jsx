import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import axios from "axios";
import { MDBFileUpload } from "mdb-react-file-upload";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import "./InscriptionParent.scss";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useParent } from "../../../context/ParentContext";

function InscriptionParent() {
  const [dataImage, setDataImage] = useState({});
  const { dataParent, handleClick, handleSubmitParent } = useParent();
  const navigate = useNavigate();

  const onChangeFiles = (value) => {
    if (value[0] !== dataImage.avatar) {
      setDataImage((prevDataImage) => ({
        ...prevDataImage,
        avatar: value[0],
      }));
    }
  };

  const handleSubmitFiles = () => {
    const formData = new FormData();
    formData.append("avatarPath", dataImage.avatar);
    if (dataImage.avatar) {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/api/parents/${
            dataParent?.id
          }/avatar`,
          formData ?? {}
        )
        .then((response) => {
          console.info(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <div className="input-parent">
          <h1>Dossier Parent</h1>
          <button type="button" className="button-children">
            Parent 1
          </button>
          <div className="fileUpload">
            <form encType="multipart/form-data">
              <MDBFileUpload
                defaultFile={
                  dataParent?.avatarPath
                    ? `${import.meta.env.VITE_BACKEND_URL}/${
                        dataParent?.avatarPath
                      }`
                    : "../src/assets/profil-picture.svg"
                }
                name="avatarPath"
                getInputFiles={onChangeFiles}
              />
            </form>
          </div>
          <div className="div-form-parent">
            <MDBValidation className="row g-3">
              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer un nom valide"
                invalid
              >
                <MDBInput
                  value={dataParent?.parentName ?? ""}
                  name="parentName"
                  onChange={handleClick}
                  id="validationCustom01"
                  pattern=".{4,}"
                  required
                  label="Nom"
                  className="input-parent"
                />
              </MDBValidationItem>
              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer un prénom valide"
                invalid
              >
                <MDBInput
                  value={dataParent?.parentFName ?? ""}
                  name="parentFName"
                  onChange={handleClick}
                  id="validationCustom01"
                  pattern=".{4,}"
                  required
                  label="Prénom"
                  className="input-parent"
                />
              </MDBValidationItem>

              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer une profession valide"
                invalid
              >
                <MDBInput
                  label="Profession"
                  id="validationCustomUsername"
                  type="text"
                  name="profession"
                  onChange={handleClick}
                  value={dataParent?.profession ?? ""}
                  required
                  className="input-parent"
                />
              </MDBValidationItem>
              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer une adresse valide"
                invalid
              >
                <MDBInput
                  label="N° et nom de rue"
                  id="validationCustomUsername"
                  type="text"
                  name="address"
                  pattern="^\d+\s[\w\s]+$"
                  onChange={handleClick}
                  value={dataParent?.address ?? ""}
                  required
                  className="input-parent"
                />
              </MDBValidationItem>
              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer une ville"
                invalid
              >
                <MDBInput
                  value={dataParent?.ville ?? ""}
                  name="ville"
                  onChange={handleClick}
                  id="validationCustom03"
                  required
                  label="Ville"
                  pattern="[A-Za-z-]+"
                  className="input-parent"
                />
              </MDBValidationItem>
              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer un numéro valide"
                invalid
              >
                <MDBInput
                  label="Téléphone portable"
                  id="typePhone"
                  type="tel"
                  name="telephone"
                  pattern="\d{10}"
                  onChange={handleClick}
                  value={dataParent?.telephone ?? ""}
                  required
                  className="input-parent"
                />
              </MDBValidationItem>
              <div>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Veuillez entrer un numéro valide"
                  invalid
                >
                  <MDBBtn
                    type="button"
                    onClick={() => {
                      handleSubmitFiles();
                      handleSubmitParent();
                      navigate("/profil/inscription/children");
                    }}
                  >
                    Enfant →
                  </MDBBtn>
                </MDBValidationItem>
              </div>
            </MDBValidation>
          </div>
        </div>
      </div>
      <NavProfil />
    </div>
  );
}

export default InscriptionParent;
