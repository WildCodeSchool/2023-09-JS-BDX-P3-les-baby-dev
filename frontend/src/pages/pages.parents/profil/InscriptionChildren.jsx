import { MDBSwitch } from "mdb-react-ui-kit";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";

function IncriptionChildren() {
  return (
    <div>
      <HeaderProfile />
      <h1>Dossier Enfant</h1>
      <button type="button" className="button-children">
        Enfant 1
      </button>
      <div className="div-form-parent">
        <input
          className="form-parent"
          required
          type="text"
          name="nomParent"
          placeholder="Nom"
        />
        <input
          className="form-parent"
          required
          type="text"
          name="prénomParent"
          placeholder="Prénom"
        />
        <input
          className="form-parent"
          required
          type="text"
          name="Birthdate"
          placeholder="Date de naissance"
        />
        <MDBSwitch id="flexSwitchCheckDefault" label="Mon enfant marche" />
        <input
          className="form-parent"
          required
          type="text"
          name="nomStructure"
          placeholder="Allergie"
        />
        <input
          className="form-parent"
          required
          type="text"
          name="nomStructure"
          placeholder="Attestation d'assurance"
        />
        <input
          className="form-parent"
          required
          type="text"
          name="nomStructure"
          placeholder="Medecin traitant"
        />
      </div>
    </div>
  );
}

export default IncriptionChildren;
