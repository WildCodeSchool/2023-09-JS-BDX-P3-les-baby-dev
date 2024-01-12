import FooterMdb from "../../components/home.components/FooterMdb";
import Header from "../../components/home.components/Header";
import Navbar from "../../components/home.components/Navbar";

import "./Home.scss";

function Home() {
  return (
    <div className="containerHome">
      <Navbar />
      <Header />
      <div>
        <h1 className="text">
          Simplifiez vous la vie avec Babyplace grâce à notre logiciel de
          reservation en ligne
        </h1>
        <div className="home-visuel">
          <img src="./src/assets/homeVisuel1.svg" alt="visuel1" />
          <img src="./src/assets/homeVisuel2.svg" alt="visuel2" />
          <img src="./src/assets/homeVisuel3.svg" alt="visuel3" />
        </div>
        <div className="home-visuel text text-visuel">
          <span>
            Accédez aux disponibilités de dizaine de miliers de professionnelles
            de la petite enfance
          </span>
          <span>
            Réservez en ligne, prenez rdv 24h/24 et 7j/7 avec des crèches ou
            assistantes maternelles
          </span>
          <span>
            Retrouvez votre historique de réservation et votre dossier petite
            enfance
          </span>
        </div>
        <img
          src="./src/assets/zeroPapier.svg"
          alt="Zero papier App"
          className="zeroPapier"
        />
      </div>
      <FooterMdb />
    </div>
  );
}

export default Home;
