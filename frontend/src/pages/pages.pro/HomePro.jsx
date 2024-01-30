import Footer from "../../components/home.components/Footer";
import Navbar from "../../components/home.components/Navbar";
import "./HomePro.scss";

function HomePro() {
  return (
    <div className="containerPro">
      <Navbar />
      <div className="div-visuel">
        <img
          className="visuel-simple"
          src="./src/assets/proSimple.svg"
          alt="Visuel Simple"
        />
        <h4 className="text-overlay titre-overlay">
          Simplifiez vous la vie en choisissant un systeme de reservation
          moderne et efficace
        </h4>
        <p className="text-overlay">
          Gerez vos reservations directement depuis votre agenda que vous pouvez
          consulter sur votre telephone, ordinateur ou tablette Soyez prevenu en
          temps reel des annulations vous permettant ainsi de remplacer les
          places vacantes. Remplacez facilement les absences grace aux “waiting
          list” des parents.
        </p>
      </div>
      <h1 className="text">
        Equipez vous du logiciel de gestion de place d'accueil de jeunes enfants
        le plus complet
      </h1>
      <h4 className="info-text">
        Cliquez sur l'une de nos solutions pour en savoir plus
      </h4>
      <div className="grid-container">
        <div className="grid-item image-one">
          <div className="overlay">
            <h3>Agenda en ligne</h3>
            <p>
              Consultez en temps reel votre agenda et modifiez le en quelques
              cliques afin d'optimiser votre temps et votre rentabilite.
              Accessible de puis votre Smarktphone, tabelle ou Telephone
            </p>
          </div>
        </div>
        <div className="grid-item image-two">
          <div className="overlay">
            <h3>Soyez alerté</h3>
            <p>
              Choisissez le mode de notifications afin d'etre informe au plus
              vote des annulations et des demandes de reservation.
            </p>
          </div>
        </div>
        <div className="grid-item image-three">
          <div className="overlay">
            <h3>Marketing de votre activité</h3>
            <p>
              Optimisez votre page profil pour vous rendre plus visible et vous
              permettre de vous decouvrir par les parents de votre quartier.
            </p>
          </div>
        </div>
        <div className="grid-item image-four">
          <div className="overlay">
            <h3>Communiquez avec les parents</h3>
            <p>
              Les parents doivent avoir preremplis leur liste de documents pour
              pouvoir faire des reservations. Les parents peuvent vous soumettre
              les contrats deja valide par les equipes legales de Babyplabce
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePro;
