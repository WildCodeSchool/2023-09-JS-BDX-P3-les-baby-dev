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
  const { dataChildren, setDataChildren, parent } = useParent();
  const [currentChildIndex, setCurrentChildIndex] = useState(0);

  const handleAddChild = async () => {
    try {
      const resp = await apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/parents/${parent.id}/children`,
        {
          childName: "",
          childFName: "",
          birthday: "",
          isWalking: false,
          childDoctor: "",
          allergies: false,
        }
      );

      setDataChildren([...dataChildren, resp]);
    } catch (err) {
      console.error(err);
    }
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

  const handlePutChild = async () => {
    try {
      const child = dataChildren[currentChildIndex];
      await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/children/${child.id}`,
        child
      );
    } catch (error) {
      console.error(error);
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
            {child.childFName ? child.childFName : `Enfant ${index + 1}`}
          </button>
        ))}
        {dataChildren && dataChildren.length > 0 && (
          <ChildForm
            child={dataChildren[currentChildIndex]}
            onChange={(child) => handleChangeChild(currentChildIndex, child)}
          />
        )}
        <div>
          <MDBBtn
            type="button"
            className="button-children"
            onClick={handlePutChild}
          >
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
