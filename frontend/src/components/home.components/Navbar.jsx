import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="homeNav">
      <div>
        <img src="./src/assets/logoPasPro.svg" alt="Babyplace" />
      </div>
      <button type="button" className="homeTxtBtn">
        Vous êtes professionnel de la petite enfance ?
      </button>
      <button type="button" className="connectBtn">
        <div>
          <Link to="/login">
            <div>
              Se connecter
              <br />
              <span>Trouver une crèche</span>
            </div>
          </Link>
        </div>
        <span className="arrow">➜</span>
      </button>
    </nav>
  );
}

export default Navbar;
