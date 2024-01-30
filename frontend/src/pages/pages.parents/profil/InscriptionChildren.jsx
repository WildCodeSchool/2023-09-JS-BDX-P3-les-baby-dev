// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useParent } from "../../../context/ParentContext";
import ChildForm from "./ChildForm";

function IncriptionChildren() {
  const { dataChildren, setDataChildren } = useParent();
  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const [selectedChildIndex, setSelectedChildIndex] = useState(null);

  const handleAddChild = () => {
    const newChildId = dataChildren.length + 1;
    setDataChildren([
      ...dataChildren,
      {
        id: newChildId,
        lastname: "",
        firstname: "",
        birthday: "",
        isWalking: false,
        childDoctor: "",
        allergies: "",
      },
    ]);
  };

  const handleChangeChild = (index, child) => {
    const updatedChildren = [...dataChildren];
    updatedChildren[index] = child;
    setDataChildren(updatedChildren);
  };

  const handleRemoveChild = () => {
    if (selectedChildIndex) {
      const newChildList = [...dataChildren];
      newChildList.splice(selectedChildIndex, 1);
      setDataChildren(newChildList);
      setSelectedChildIndex(null);
    }
  };

  const envoyé = () => {
    // console.log(dataChildren);
  };

  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <h1>Dossier Enfant</h1>
        {dataChildren.map((child, index) => (
          <button
            key={child.id}
            type="button"
            className="button-children"
            onClick={() => {
              setCurrentChildIndex(index);
              setSelectedChildIndex(index);
            }}
          >
            {child.firstname ? child.firstname : `Enfant ${index + 1}`}
          </button>
        ))}
        <ChildForm
          child={dataChildren[currentChildIndex]}
          onChange={(child) => handleChangeChild(currentChildIndex, child)}
        />
        <div>
          <MDBBtn type="button" className="button-children" onClick={envoyé}>
            Doc
          </MDBBtn>
          <MDBBtn
            onClick={handleAddChild}
            type="button"
            className="button-children"
          >
            ajouter un enfant
          </MDBBtn>
          <MDBBtn
            onClick={handleRemoveChild}
            type="button"
            className="button-children"
          >
            supprimer
          </MDBBtn>
        </div>
      </div>
      <NavProfil />
    </div>
  );
}

export default IncriptionChildren;
