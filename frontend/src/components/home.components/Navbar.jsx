import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="homeNav">
      <div>
        <img src="./src/assets/logoPasPro.svg" alt="Babyplace" />
      </div>
      {location.pathname === "/" ? (
        <Link to="/pro">
          <button type="button" className="homeTxtBtn">
            Vous êtes professionnel de la petite enfance ?
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button type="button" className="homeTxtBtn">
            Vous êtes un parent ?
          </button>
        </Link>
      )}

      <Link to="/login">
        <button type="button" className="connectBtn">
          <div>
            <div className="purpleBtn">
              Se connecter
              <br />
              <span>Trouver une crèche</span>
            </div>
          </div>
          <span className="arrow">➜</span>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
