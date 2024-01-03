import { Link } from "react-router-dom";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";

function DocInscription() {
  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <h1>Dossier Inscription</h1>
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
            placeholder="Profession"
          />
          <input
            className="form-parent"
            required
            type="text"
            name="nomStructure"
            placeholder="Téléphone Portable"
          />
          <input
            className="form-parent"
            required
            type="text"
            name="nomStructure"
            placeholder="Mail"
          />
          <input
            className="form-parent"
            required
            type="text"
            name="nomStructure"
            placeholder="Adresse postale"
          />
        </div>
        <Link
          to="/profil/inscription/children"
          type="button"
          className="button-children"
        >
          {" "}
          Valider mon dossier{" "}
        </Link>
      </div>
      <NavProfil />
    </div>
  );
}

export default DocInscription;
