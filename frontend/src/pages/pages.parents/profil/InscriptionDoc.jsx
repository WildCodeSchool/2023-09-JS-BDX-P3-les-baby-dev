import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";
import "./InscriptionDoc.scss";

function DocInscription() {
  const navigate = useNavigate();

  return (
    <div className="flex-doc">
      <HeaderProfile />
      <div className="div-form-parent">
        <h1>Dossier Inscription</h1>
        <h2>
          Lors de votre première venue dans notre crèche, merci de bien vouloir
          nous apporter les documents suivants:
        </h2>
        <ul>
          <li>Justificatif de revenu (moins de 3 mois)</li>
          <li>Déclaration de revenu (année en cours)</li>
          <li>Justificatif de domicile</li>
          <li>Justificatif de situation professionnelles</li>
          <li>RIB</li>
        </ul>
        <MDBBtn
          type="button"
          className="button-doc"
          onClick={() => navigate("/profil")}
        >
          Enregistrer
        </MDBBtn>
      </div>
      <NavProfil />
    </div>
  );
}

export default DocInscription;
