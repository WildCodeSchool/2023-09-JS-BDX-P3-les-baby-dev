import "./firstStep.scss";
import {
  MDBBtn,
  MDBInput,
  MDBInputGroup,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useStructure } from "../../context/StrucutreContext";

function FirstStep() {
  const { data, handleSubmit, onChange } = useStructure();

  return (
    <div className="fifty">
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
                value={data.email}
                onChange={onChange}
                className="form-control"
                id="validationCustomUsername"
                placeholder="Email"
                required
              />
            </MDBInputGroup>
          </MDBValidationItem>
          <MDBValidationItem
            className="col-md-3"
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
            className="col-md-2"
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
      <div className="greyBg">
        <div className="infoRegisterCard">
          <h5>Choisissez votre catégorie d'annonce</h5>
          <p>
            En sélectionnant les catégories adéquates, vous aidez les parents à
            savoir à quoi s'attendre concernant l'accueil de leur enfant au sein
            de votre structure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstStep;
