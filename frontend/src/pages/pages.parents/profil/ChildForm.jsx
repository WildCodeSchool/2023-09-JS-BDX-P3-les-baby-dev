import PropTypes from "prop-types";
import React from "react";
import {
  MDBInput,
  MDBSwitch,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

function ChildForm({ child, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...child, [field]: value });
  };
  return (
    <div className="div-form-parent">
      <MDBValidation className="row g-3">
        <MDBValidationItem
          className="col-md-4"
          feedback="Veuillez entrer un nom valide"
          invalid
        >
          <MDBInput
            value={child?.lastname ?? ""}
            name="childName"
            onChange={(e) => handleChange("lastname", e.target.value)}
            id="validationCustom01"
            pattern=".{4,}"
            required
            label="Nom"
          />
        </MDBValidationItem>
        <MDBValidationItem
          className="col-md-4"
          feedback="Veuillez entrer un prénom valide"
          invalid
        >
          <MDBInput
            value={child?.firstname ?? ""}
            name="childFName"
            onChange={(e) => handleChange("firstname", e.target.value)}
            id="validationCustom01"
            pattern=".{4,}"
            required
            label="Prénom"
          />
        </MDBValidationItem>

        <MDBValidationItem
          className="col-md-4"
          feedback="Veuillez entrer une profession valide"
          invalid
        >
          <MDBInput
            label="Date de naissance"
            id="validationCustomUsername"
            type="date"
            name="birthday"
            onChange={(e) => handleChange("birthday", e.target.value)}
            value={child?.birthday ?? ""}
            pattern="/^\d{2}\/\d{2}\/\d{4}$/"
            required
          />
        </MDBValidationItem>
        <MDBSwitch
          id="flexSwitchCheckDefault"
          label="Mon enfant marche"
          name="isWalking"
          onChange={() => handleChange("isWalking", !child.isWalking)}
        />
        <MDBValidationItem
          className="col-md-4"
          feedback="Veuillez entrer un prénom valide"
          invalid
        >
          <MDBInput
            value={child?.childDoctor ?? ""}
            name="childDoctor"
            onChange={(e) => handleChange("childDoctor", e.target.value)}
            id="validationCustom01"
            pattern=".{4,}"
            required
            label="Médecin traitant"
          />
        </MDBValidationItem>

        <MDBValidationItem
          className="col-md-4"
          feedback="Veuillez entrer les allergies"
        >
          <MDBInput
            value={child?.allergies ?? ""}
            name="allergies"
            onChange={(e) => handleChange("allergies", e.target.value)}
            id="validationCustom01"
            pattern=".{4,}"
            required
            label="Allergies"
          />
        </MDBValidationItem>
      </MDBValidation>
    </div>
  );
}

ChildForm.propTypes = {
  child: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    isWalking: PropTypes.bool.isRequired,
    childDoctor: PropTypes.string.isRequired,
    allergies: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChildForm;
