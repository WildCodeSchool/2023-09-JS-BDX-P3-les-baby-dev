import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useUser } from "../../../context/UserContext";
import "./login.scss";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const { login, basicErrorModal, setBasicErrorModal, toggleErrorOpen } =
    useUser();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    await login(formValue);
  };

  return (
    <div className="login_container">
      <div className="left_part">
        <h2>BabyPlace</h2>
        <h3>Gérer votre Agenda</h3>
        <h4>24h/24 et 7j/7</h4>
      </div>
      <div className="right_part">
        <div className="cadre">
          <div className="notAlready_register">
            <Link to="/register">
              <h4>Vous n'avez pas encore de compte?</h4>
            </Link>
          </div>
          <h3> Je me connecte à BabyPlace</h3>
          <ul>
            <li>
              <input
                placeholder="email"
                type="email"
                value={formValue.email}
                onChange={handleChange}
                required
                name="email"
                label="Email"
              />
            </li>
            <li>
              <input
                value={formValue.password}
                placeholder="password"
                type="password"
                onChange={handleChange}
                required
                name="password"
                label="Password"
              />
            </li>
          </ul>
          <div className="btnConnect">
            <button type="button" onClick={handleLogin}>
              Connexion
            </button>
          </div>
        </div>
        <MDBModal
          open={basicErrorModal}
          setOpen={setBasicErrorModal}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>
                  Identifiant ou mot de passe incorrect
                </MDBModalTitle>
              </MDBModalHeader>

              <MDBModalFooter>
                <MDBBtn onClick={toggleErrorOpen}>Fermer</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    </div>
  );
}

export default Login;
