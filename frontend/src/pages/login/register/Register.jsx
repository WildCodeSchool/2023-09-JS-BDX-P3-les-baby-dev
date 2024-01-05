import { Link } from "react-router-dom";
import { useState } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import { useUser } from "../../../context/UserContext";
import "./register.scss";

function Register() {
  const [formValue, setFormValue] = useState({
    email: "mathieulebg@gmail.com",
    password: "1234",
    is_admin: false,
  });

  const { register, setIsProfessional, isProfessional } = useUser();

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onSwitchChange = () => {
    setIsProfessional(!isProfessional);
  };

  return (
    <div className="register_container">
      <div className="left_part">
        <h2>BabyPlace</h2>
      </div>
      <div className="right_part">
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
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Je suis professionnel"
            onChange={onSwitchChange}
          />
        </ul>

        <button type="button" onClick={() => register(formValue)}>
          Inscription
        </button>
      </div>
    </div>
  );
}

export default Register;
