// import { useNavigate } from "react-router-dom";
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
  const {
    // parent,
    handleClickChild,
    // handleSubmit,
    dataChildren,
    HandleAdd,
  } = useParent();
  // console.log("parent", parent);
  // const navigate = useNavigate();

  const envoyé = () => {
    // console.log(dataChildren);
  };

  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <h1>Dossier Enfant</h1>
        {/* {dataChildren.map((child) => (
          <button key={child.id} type="button" className="button-children">
            {child?.name ?? "Enfant 1"}
          </button>
        ))} */}
        <div className="div-form-parent">
          <MDBValidation className="row g-3">
            <MDBValidationItem
              className="col-md-4"
              feedback="Veuillez entrer un nom valide"
              invalid
            >
              <MDBInput
                value={dataChildren.childName}
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
            >
              <MDBInput
                value={dataChildren.childFName}
                name="childFName"
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
            >
              <MDBInput
                label="Date de naissance"
                id="validationCustomUsername"
                type="date"
                name="birthday"
                onChange={handleClickChild}
                value={dataChildren.childDate}
                pattern="/^\d{2}\/\d{2}\/\d{4}$/"
                required
              />
            </MDBValidationItem>
            <MDBSwitch
              id="flexSwitchCheckDefault"
              label="Mon enfant marche"
              name="isWalking"
              onChange={() =>
                handleClickChild({
                  target: {
                    name: "isWalking",
                    value: !dataChildren.walkingChild,
                  },
                })
              }
            />
            <MDBValidationItem
              className="col-md-4"
              feedback="Veuillez entrer un prénom valide"
              invalid
            >
              <MDBInput
                value={dataChildren.childDoctor}
                name="childDoctor"
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
                value={dataChildren.childAllergies}
                name="allergies"
                onChange={handleClickChild}
                id="validationCustom01"
                pattern=".{4,}"
                required
                label="Allergies"
              />
            </MDBValidationItem>
          </MDBValidation>

          <div>
            <MDBBtn
              type="button"
              className="button-children"
              onClick={envoyé}
              // navigate("/profil/inscription/inscription");
            >
              Doc
            </MDBBtn>
            <MDBBtn
              type="button"
              className="button-children"
              onClick={HandleAdd}
            >
              ajouter un enfant
            </MDBBtn>
          </div>
        </div>
      </div>
      <NavProfil />
    </div>
  );
}

export default IncriptionChildren;
