// import "./firstStep.scss";
import {
  MDBBtn,
  MDBInput,
  MDBInputGroup,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";

function FirstStep() {
  const { setData, data, handleSubmit } = useStructure();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="step1">
      <h4>Complétez et vérifiez vos informations</h4>
      <MDBValidation className="row g-3" isValidated>
        <MDBValidationItem className="col-md-4">
          <MDBInput
            value={data.fname}
            name="fname"
            onChange={onChange}
            id="validationCustom01"
            required
            label="First name"
          />
        </MDBValidationItem>
        <MDBValidationItem className="col-md-4">
          <MDBInput
            value={data.lname}
            name="lname"
            onChange={onChange}
            id="validationCustom02"
            required
            label="Last name"
          />
        </MDBValidationItem>
        <MDBValidationItem
          feedback="Please choose a username."
          invalid
          className="col-md-4"
        >
          <MDBInputGroup textBefore="@">
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              placeholder="Email"
              required
            />
          </MDBInputGroup>
        </MDBValidationItem>
        <MDBValidationItem
          className="col-md-6"
          feedback="Please provide a valid city."
          invalid
        >
          <MDBInput
            value={data.city}
            name="city"
            onChange={onChange}
            id="validationCustom03"
            required
            label="City"
          />
        </MDBValidationItem>
        <MDBValidationItem
          className="col-md-6"
          feedback="Please provide a valid zip."
          invalid
        >
          <MDBInput
            value={data.zip}
            name="zip"
            onChange={onChange}
            id="validationCustom05"
            required
            label="Zip"
          />
        </MDBValidationItem>
        <div className="col-12">
          <MDBBtn type="submit" onClick={handleSubmit}>
            Submit form
          </MDBBtn>
        </div>
      </MDBValidation>
    </div>
  );
}

export default FirstStep;
