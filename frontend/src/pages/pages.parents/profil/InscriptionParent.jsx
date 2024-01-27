import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import "./InscriptionParent.scss";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useParent } from "../../../context/ParentContext";

function InscriptionParent() {
  const { dataParent, handleClick, handleSubmit } = useParent();
  const navigate = useNavigate();
  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <h1>Dossier Parent</h1>
        <button type="button" className="button-children">
          Parent 1
        </button>
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
                  type="submit"
                  onClick={() => {
                    handleSubmit();
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
      <NavProfil />
    </div>
  );
}

export default InscriptionParent;
