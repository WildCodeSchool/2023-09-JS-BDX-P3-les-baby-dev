import React from "react";
import { Link } from "react-router-dom";
import blueButtonImage from "../../assets/blue-button.svg";
import greenButtonImage from "../../assets/green-button.svg";
import orangeButtonImage from "../../assets/orange-button.svg";
import Return from "../../assets/arrow_back.svg";
import backgroundProfileImage from "../../assets/background-profil.svg";

import "./HeaderProfile.scss";

function HeaderProfile() {
  return (
    <div
      className="background-header-profile"
      style={{ backgroundImage: `url(${backgroundProfileImage})` }}
    >
      <div className="header-profil">
        <Link to="/profil">
          <img className="arrowBack" src={Return} alt="" />
        </Link>
        <div className="name-inscription">
          <h1 className="inscription-titre">Mon inscription</h1>
        </div>
      </div>
      <div className="bouton-div">
        <Link to="/profil/inscription">
          <div
            className="color-button blue-button"
            style={{ backgroundImage: `url(${blueButtonImage})` }}
          >
            Parents
          </div>
        </Link>
        <Link to="/profil/inscription/children">
          <div
            className="color-button green-button"
            style={{ backgroundImage: `url(${greenButtonImage})` }}
          >
            Enfants
          </div>
        </Link>
        <Link to="/profil/inscription/inscription">
          <div
            className="color-button orange-button"
            style={{ backgroundImage: `url(${orangeButtonImage})` }}
          >
            Documents
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderProfile;
