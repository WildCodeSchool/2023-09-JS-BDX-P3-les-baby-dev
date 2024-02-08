// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useParent } from "../../../context/ParentContext";
import ChildForm from "./ChildForm";
import { useUser } from "../../../context/UserContext";
import "./InscriptionChildren.scss";

function IncriptionChildren() {
  const { apiService } = useUser();
  const { dataChildren, setDataChildren, parent } = useParent();
  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const navigate = useNavigate();

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

      setDataChildren([
        ...dataChildren,
        {
          id: resp.id,
          childName: "",
          childFName: "",
          birthday: "",
          isWalking: false,
          childDoctor: "",
          allergies: false,
        },
      ]);
    } catch (err) {
      console.error(err);
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

  const handleChangeChild = (index, child) => {
    const updatedChildren = [...dataChildren];
    updatedChildren[index] = child;
    setDataChildren(updatedChildren);
  };

  return (
    <div className="flex-inscription">
      <div className="child-container">
        <HeaderProfile />
        <div className="input-child">
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
          <div className="d-flex btn-child">
            <MDBBtn
              type="button"
              onClick={() => {
                handlePutChild();
                navigate("/profil/inscription/inscription");
              }}
            >
              Enregistrer
            </MDBBtn>
            <MDBBtn onClick={handleAddChild} type="button">
              Ajouter un enfant
            </MDBBtn>
            <MDBBtn onClick={handleRemoveChild} type="button">
              Supprimer
            </MDBBtn>
          </div>
        </div>
      </div>
      <NavProfil />
    </div>
  );
}

export default IncriptionChildren;
