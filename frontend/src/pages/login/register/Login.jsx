import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import "./login.scss";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const { login } = useUser();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
            <button type="button" onClick={() => login(formValue)}>
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
