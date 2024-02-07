import React from "react";
import "./headerNav.scss";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Babyplace from "../../assets/Babyplace.svg";
import { useUser } from "../../context/UserContext";

function HeaderNav() {
  const { logout } = useUser();

  return (
    <div className="headerNav_container">
      <Link to="/searchlist">
        <div className="logo">
          <img className="img-logo" src={Babyplace} alt="" />
        </div>
      </Link>
      <div className="sections_nav">
        <ul>
          <li>
            <Link to="/searchlist">
              <h2>HOME</h2>
            </Link>
          </li>
          <li>
            <MDBDropdown>
              <MDBDropdownToggle>Profil</MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link childTag="button">
                  <Link to="/profil/inscription">INSCRIPTION</Link>
                </MDBDropdownItem>
                <MDBDropdownItem link childTag="button">
                  <Link to="/profil/myresa">MES RESERVATIONS</Link>
                </MDBDropdownItem>
                <MDBDropdownItem link childTag="button" onClick={logout}>
                  DECONNEXION
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderNav;
