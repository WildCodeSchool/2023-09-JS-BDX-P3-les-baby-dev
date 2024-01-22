import { Link } from "react-router-dom";
// import { MDBFileUpload } from "mdb-react-file-upload";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";

function DocInscription() {
  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <h1>Dossier Inscription</h1>
        <div className="div-form-parent">
          <label htmlFor="photo1">
            Justificatif de revenu (moins de 3 mois)
          </label>
          <input
            type="file"
            id="photo1"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
            className="form-control"
          />
          <label htmlFor="photo1">Déclaration de revenu (année en cours)</label>
          <input
            type="file"
            id="photo1"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
            className="form-control"
          />
          <label htmlFor="photo1">Justificatif de domicile</label>
          <input
            type="file"
            id="photo1"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
            className="form-control"
          />
          <label htmlFor="photo1">
            Justificatif de situation professionnelles
          </label>
          <input
            type="file"
            id="photo1"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
            className="form-control"
          />
          <label htmlFor="photo1">RIB</label>
          <input
            type="file"
            id="photo1"
            name="file"
            accept="image/png, image/jpg, image/jpeg"
            className="form-control"
          />
          <input
            className="form-parent form-control"
            required
            type="text"
            name="nomParent"
            placeholder="Numéro allocataire CAF"
          />
          <input
            className="form-parent form-control"
            required
            type="text"
            name="nomParent"
            placeholder="Numéro de sécurité sociale"
          />
        </div>
        <Link to="/profil" type="button" className="button-children">
          {" "}
          Valider mon dossier{" "}
        </Link>
      </div>
      <NavProfil />
    </div>
  );
}

export default DocInscription;
