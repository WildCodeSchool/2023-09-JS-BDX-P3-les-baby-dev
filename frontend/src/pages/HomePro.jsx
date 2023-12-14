import Navbar from "../components/Home/Navbar";
import "./HomePro.css";

function HomePro() {
  return (
    <div className="container">
      <Navbar />
      <img
        className="visuel-simple"
        src="./src/assets/proSimple.svg"
        alt="Visuel Simple"
      />
      <h1 className="text">
        Equipez vous du logiciel de gestion de place d’accueil de jeunes enfants
        le plus complet
      </h1>
      <h4 className="info-text">
        Cliquez sur l'une de nos solutions pour en savoir plus
      </h4>
      <div className="grid">
        <img
          className="visuel"
          src="./src/assets/ProAgenda.svg"
          alt="Visuel Agenda"
        />
        <img
          className="visuel"
          src="./src/assets/proAlerte.svg"
          alt="Visuel Alerte"
        />
      </div>
      <div className="grid">
        <img
          className="visuel"
          src="./src/assets/ProCom.svg"
          alt="Visuel Agenda"
        />
        <img
          className="visuel"
          src="./src/assets/proMarketing.svg"
          alt="Visuel Alerte"
        />
      </div>
    </div>
  );
}

export default HomePro;
