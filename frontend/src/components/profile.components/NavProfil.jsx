import React from "react";
import "./navProfil.scss";
import { Link } from "react-router-dom";
import Search from "../../assets/Search.svg";
import Profil from "../../assets/user.svg";
import Bell from "../../assets/bell.svg";

function NavProfil() {
  return (
    <div className="nav_container">
      <Link to="/searchlist">
        <img src={Search} alt="" />
      </Link>
      <Link to="/profil">
        <img src={Profil} alt="" />
      </Link>
      <Link to="/profil/myresa">
        <img src={Bell} alt="" />
      </Link>
    </div>
  );
}

export default NavProfil;
