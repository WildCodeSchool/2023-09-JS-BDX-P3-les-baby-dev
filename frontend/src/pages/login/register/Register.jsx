import { Link } from "react-router-dom";
import { useState } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import { useUser } from "../../../context/UserContext";
import "./register.scss";

function Register() {
  const { register } = useUser();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    is_admin: false,
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onSwitchChange = () => {
    setFormValue({ ...formValue, is_admin: !formValue.is_admin });
  };

  return (
    <div className="register_container">
      <div className="left_part">
        <h2>BabyPlace</h2>
        <h3>Gérer votre Agenda</h3>
        <h4>24h/24 et 7j/7</h4>
      </div>
      <div className="right_part">
        <div className="cadre">
          <div className="already_register">
            <Link to="/login">
              <h4>Déjà inscrit?</h4>
            </Link>
          </div>
          <h3> Je m'inscris sur Baby Place</h3>
          <ul>
            <li>
              <input
                value={formValue.email}
                name="email"
                onChange={onChange}
                required
                label="Email"
                type="email"
              />
            </li>

            <li>
              <input
                className="input2"
                value={formValue.password}
                name="password"
                onChange={onChange}
                required
                label="Password"
                type="password"
              />
            </li>
          </ul>
          <div className="switch">
            <MDBSwitch
              id="flexSwitchCheckDefault"
              label="Je suis professionnel"
              name="is_admin"
              onChange={onSwitchChange}
            />
          </div>
          <div className="btnConnect">
            <button type="button" onClick={() => register(formValue)}>
              Inscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
