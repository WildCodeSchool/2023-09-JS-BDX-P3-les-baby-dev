// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useParent } from "../../../context/ParentContext";
import ChildForm from "./ChildForm";
import { useUser } from "../../../context/UserContext";

function IncriptionChildren() {
  const { apiService } = useUser();
  const { dataChildren, setDataChildren } = useParent();
  const [currentChildIndex, setCurrentChildIndex] = useState(0);

  const handleAddChild = () => {
    setDataChildren([
      ...dataChildren,
      {
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

  const handleRemoveChild = async () => {
    try {
      if (dataChildren[currentChildIndex]?.id) {
        await apiService.delete(
          `${import.meta.env.VITE_BACKEND_URL}/api/children/${
            dataChildren[currentChildIndex]?.id
          }`
        );
      }

      const newChildList = [...dataChildren];
      newChildList.splice(currentChildIndex, 1);
      setDataChildren(newChildList);
      setCurrentChildIndex(0);
      // TODO: display success message
    } catch (err) {
      console.error(err);
      // TODO: display error
    }
  };

  return (
    <div className="flex-inscription">
      <div>
        <HeaderProfile />
        <h1>Dossier Enfant</h1>
        {dataChildren.map((child, index) => (
          <button
            key={`${index + 1}`}
            type="button"
            className="button-children"
            onClick={() => {
              setCurrentChildIndex(index);
            }}
          >
            {child.firstname ? child.firstname : `Enfant ${index + 1}`}
          </button>
        ))}
        {dataChildren && dataChildren.length > 0 && (
          <ChildForm
            child={dataChildren[currentChildIndex]}
            onChange={(child) => handleChangeChild(currentChildIndex, child)}
          />
        )}
        <div>
          <MDBBtn type="button" className="button-children">
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
