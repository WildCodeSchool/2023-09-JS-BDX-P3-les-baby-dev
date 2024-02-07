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
        <div className="home-visuel">
          <div className="visuel-one">
            <img src={homeVisuelOne} alt="visuel1" className="visuel" />
            <span className="home-visuel text text-visuel ">
              Accédez aux disponibilités de dizaine de miliers de
              professionnelles de la petite enfance
            </span>
          </div>
          <div className="visuel-two">
            <img src={homeVisuelTwo} alt="visuel2" className="visuel" />
            <span className="home-visuel text text-visuel">
              Réservez en ligne, prenez rdv 24h/24 et 7j/7 avec des crèches ou
              assistantes maternelles
            </span>
          </div>
          <div className="visuel-three">
            <img src={homeVisuelThree} alt="visuel3" className="visuel" />
            <span className="home-visuel text text-visuel">
              Retrouvez votre historique de réservation et votre dossier petite
              enfance
            </span>
          </div>
        </div>
        {/* <div className="home-visuel text text-visuel"></div> */}
        <h1 className="text">
          Simplifiez vous la vie avec Babyplace grâce à notre logiciel de
          reservation en ligne
        </h1>
        <img src={zeroPapier} alt="Zero papier App" className="zeroPapier" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
