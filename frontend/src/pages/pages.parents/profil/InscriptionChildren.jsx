import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
  MDBSwitch,
} from "mdb-react-ui-kit";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useParent } from "../../../context/ParentContext";

function IncriptionChildren() {
  const { dataParent, handleClickChild, handleSubmit } = useParent();
  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <h1>Dossier Enfant</h1>
        <button type="button" className="button-children">
          Enfant 1
        </button>
        <div className="div-form-parent">
          <MDBValidation className="row g-3">
            <MDBValidationItem
              className="col-md-4"
              feedback="Veuillez entrer un nom valide"
              invalid
              isValidated
            >
              <MDBInput
                value={dataParent.childName}
                name="childName"
                onChange={handleClickChild}
                id="validationCustom01"
                pattern=".{4,}"
                required
                label="Nom"
              />
            </MDBValidationItem>
            <MDBValidationItem
              className="col-md-4"
              feedback="Veuillez entrer un prénom valide"
              invalid
              isValidated
            >
              <MDBInput
                value={dataParent.childFName}
                name="parentFName"
                onChange={handleClickChild}
                id="validationCustom01"
                pattern=".{4,}"
                required
                label="Prénom"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-4"
              feedback="Veuillez entrer une profession valide"
              invalid
              isValidated
            >
              <MDBInput
                label="Date de naissance"
                id="validationCustomUsername"
                type="date"
                name="Date"
                onChange={handleClickChild}
                value={dataParent.childDate}
                pattern="/^\d{2}\/\d{2}\/\d{4}$/"
                required
              />
            </MDBValidationItem>
            <MDBSwitch
              id="flexSwitchCheckDefault"
              label="Mon enfant marche"
              name="walkingChild"
            />
            <MDBValidationItem
              className="col-md-4"
              feedback="Veuillez entrer un prénom valide"
              invalid
              isValidated
            >
              <MDBInput
                value={dataParent.childDoctor}
                name="Doctor"
                onChange={handleClickChild}
                id="validationCustom01"
                pattern=".{4,}"
                required
                label="Médecin traitant"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-4"
              feedback="Veuillez entrer les allergies"
            >
              <MDBInput
                value={dataParent.parentFName}
                name="Allergies"
                onChange={handleClickChild}
                id="validationCustom01"
                pattern=".{4,}"
                required
                label="Allergies"
              />
            </MDBValidationItem>

            <div>
              <MDBValidationItem
                className="col-md-4"
                feedback="Veuillez entrer un numéro valide"
                invalid
                isValidated
              >
                <MDBBtn
                  type="submit"
                  className="button-children"
                  onClick={handleSubmit}
                >
                  <Link
                    to="/profil/inscription/inscription"
                    type="button"
                    className="link-children"
                  >
                    Documents →
                  </Link>
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

export default IncriptionChildren;
