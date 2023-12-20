import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import "./InscriptionParent.scss";

function InscriptionParent() {
  return (
    <div>
      <HeaderProfile />
      <h1>Dossier Parent</h1>
      <button type="button" className="button-children">
        Parent 1
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
    </div>
  );
}

export default InscriptionParent;
