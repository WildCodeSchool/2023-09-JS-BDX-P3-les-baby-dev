import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { useUser } from "../../../context/UserContext";

function Register() {
  const [formValue, setFormValue] = useState({
    email: "mathieulebg@gmail.com",
    password: "1234",
  });

  const { register } = useUser();

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <MDBInput
        value={formValue.email}
        name="email"
        onChange={onChange}
        id="validationCustom01"
        required
        label="Email"
        type="email"
      />
      <MDBInput
        value={formValue.password}
        name="password"
        onChange={onChange}
        id="validationCustom02"
        required
        label="Password"
        type="password"
      />

      <MDBBtn onClick={() => register(formValue)}>Connexion</MDBBtn>
    </div>
  );
}

export default Register;
