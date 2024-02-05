// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderProfile from "../../../components/profile.components/HeaderProfile";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useParent } from "../../../context/ParentContext";
import ChildForm from "./ChildForm";
import { useUser } from "../../../context/UserContext";
import HeaderNav from "../../../components/profile.components/HeaderNav";

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

  const handleUpdateChild = async () => {
    try {
      const response = await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/children`,
        dataChildren[currentChildIndex]?.id ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmitChild = async () => {
  //   try {
  //     const response = await apiService.post(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/parents/children/${
  //         dataParent?.id
  //       }`,
  //       dataChildren ?? {}
  //     );

  //     console.info(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

  // const handlePutChild = async () => {
  //   try {
  //     const child = dataChildren[currentChildIndex];
  //     await apiService.put(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/children/${child.id}`,
  //       child
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="flex-inscription">
      <div>
        <HeaderNav />
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
          <button
            type="button"
            className="button-children"
            onClick={handleUpdateChild}
          >
            Modifier
          </button>
          {/* <button
            type="button"
            className="button-children"
            onClick={handleSubmitChild}
          >
            Enregistrer
          </button> */}
          <button
            onClick={handleAddChild}
            type="button"
            className="button-children"
          >
            Ajouter un enfant
          </button>
          <button
            onClick={handleRemoveChild}
            type="button"
            className="button-children"
          >
            Supprimer
          </button>
        </div>
      </div>
      <NavProfil />
    </div>
  );
}

export default IncriptionChildren;
