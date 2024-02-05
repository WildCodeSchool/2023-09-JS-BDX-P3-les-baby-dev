import React from "react";
import "./headerNav.scss";
import { Link } from "react-router-dom";
import Babyplace from "../../assets/Babyplace.svg";
import { useUser } from "../../context/UserContext";

function HeaderNav() {
  const { logout } = useUser();
  return (
    <div className="headerNav_container">
      <div className="logo">
        <img src={Babyplace} alt="" />
      </div>
      <div className="sections_nav">
        <ul>
          <li>
            <Link to="/searchlist">
              <h2>Home</h2>
            </Link>
          </li>
          <li>
            <Link to="/profil">
              <h2>Profil</h2>
            </Link>
          </li>
          <li>
            <Link to="/profil/myresa">
              <h2>Mes réservations</h2>
            </Link>
          </li>
          <li>
            <button type="button" onClick={logout}>
              Deconnexion
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderNav;
