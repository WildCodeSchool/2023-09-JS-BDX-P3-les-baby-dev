import { useParams } from "react-router-dom";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ParentContext = createContext();

function ParentContextProvider({ children }) {
  const [dataParent, setDataParent] = useState({});
  const [dataChildren, setDataChildren] = useState({});
  const [creche, setCreche] = useState({});
  const { id } = useParams();

  const handleClick = (e) => {
    setDataParent({
      ...dataParent,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickChild = (e) => {
    setDataChildren({
      ...dataChildren,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(dataParent, dataChildren);
  };

  // const handleSubmitFiles = (event) => {
  //   event.preventDefault();

  useEffect(() => {
    const fetchDataCreche = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/structure/${id}`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const result = await response.json();
        setCreche(result);
      } catch (err) {
        console.error(err);
      }
      return null;
    };

    fetchDataCreche();
  }, [id]);

  if (!creche) {
    // Ajoutez une vérification pour éviter d'accéder à creche si elle est undefined
    return null;
  }

  useEffect(() => {
    const fetchDataParent = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/users/parent/myprofil`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const result = await response.json();
        setDataParent(result);
      } catch (err) {
        console.error(err);
      }
      return null;
    };

    fetchDataParent();
  });

  const contextParentValue = useMemo(
    () => ({
      handleClick,
      dataParent,
      handleSubmit,
      handleClickChild,
      creche,
    }),
    [handleClick, dataParent, handleSubmit, handleClickChild, creche]
  );

  return (
    <ParentContext.Provider value={contextParentValue}>
      {children}
    </ParentContext.Provider>
  );
}

ParentContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ParentContextProvider;
export const useParent = () => useContext(ParentContext);
