import React from "react";
import { useUser } from "../../context/UserContext";
import "./navbar.scss";

function Navbar() {
  const { logout } = useUser();
  return (
    <div className="nav">
      <h4 className="structureTitle">Babyplace</h4>
      <h5>Inscription</h5>
      <button type="button" onClick={logout}>
        sauvegarder et quitter
      </button>
    </div>
  );
}

export default Navbar;
