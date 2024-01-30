import React from "react";
import blueButtonImage from "../../assets/blue-button.svg";
import greenButtonImage from "../../assets/green-button.svg";
import orangeButtonImage from "../../assets/orange-button.svg";
import backgroundProfileImage from "../../assets/background-profil.svg";

import "./HeaderProfile.scss";

function HeaderProfile() {
  return (
    <div
      className="background-header-profile"
      style={{ backgroundImage: `url(${backgroundProfileImage})` }}
    >
      <h1 className="inscription-titre">Jean-Philippe</h1>
      <h2 className="inscription-sous-titre">Papa du petit Antoine</h2>
      <div className="bouton-div">
        <div
          className="color-button blue-button"
          style={{ backgroundImage: `url(${blueButtonImage})` }}
        >
          Parents
        </div>
        <div
          className="color-button green-button"
          style={{ backgroundImage: `url(${greenButtonImage})` }}
        >
          Enfants
        </div>
        <div
          className="color-button orange-button"
          style={{ backgroundImage: `url(${orangeButtonImage})` }}
        >
          Documents
        </div>
      </div>
    </div>
  );
}

export default HeaderProfile;
