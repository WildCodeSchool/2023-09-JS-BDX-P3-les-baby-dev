import Footer from "../../components/home.components/Footer";
import Header from "../../components/home.components/Header";
import Navbar from "../../components/home.components/Navbar";
import zeroPapier from "../../assets/zeroPapier.svg";
import homeVisuelOne from "../../assets/homeVisuel1.svg";
import homeVisuelTwo from "../../assets/homeVisuel2.svg";
import homeVisuelThree from "../../assets/homeVisuel3.svg";

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
          <img src={homeVisuelOne} alt="visuel1" />
          <img src={homeVisuelTwo} alt="visuel2" />
          <img src={homeVisuelThree} alt="visuel3" />
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
        <img src={zeroPapier} alt="Zero papier App" className="zeroPapier" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
