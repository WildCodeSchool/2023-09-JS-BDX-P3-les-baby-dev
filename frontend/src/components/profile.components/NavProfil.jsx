import React from "react";
import "./navProfil.scss";
import { Link } from "react-router-dom";

function NavProfil() {
  return (
    <div className="nav_container">
      <Link to="/searchlist">
        <img src="../src/assets/Search.svg" alt="" />
      </Link>
      <Link to="/profil">
        <img src="../src/assets/user.svg" alt="" />
      </Link>
      <Link to="/profil/myresa">
        <img src="../src/assets/bell.svg" alt="" />
      </Link>
    </div>
  );
}

export default NavProfil;
