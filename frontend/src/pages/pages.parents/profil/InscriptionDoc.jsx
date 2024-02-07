import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";
import "./InscriptionDoc.scss";

function DocInscription() {
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
      </div>
      <NavProfil />
    </div>
  );
}

export default DocInscription;
