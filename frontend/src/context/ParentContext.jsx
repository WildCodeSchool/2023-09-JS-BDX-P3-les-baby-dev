import { useLoaderData } from "react-router-dom";
import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ParentContext = createContext();

function ParentContextProvider({ children }) {
  const loaderData = useLoaderData();

  const [dataParent, setDataParent] = useState({
    address: "12 fdf",
    parentFName: "dsfdf",
    parentName: "sfdfsdf",
    profession: "sdfsdf",
    telephone: "1234678910",
    ville: "fdfdf",
    ...loaderData?.parentProfil,
  });

  const [dataChildren, setDataChildren] = useState({});

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

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3310/api/parents/${dataParent.id}`,
        dataParent ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contextParentValue = useMemo(
    () => ({
      handleClick,
      dataParent,
      handleSubmit,
      handleClickChild,
    }),
    [handleClick, dataParent, handleSubmit, handleClickChild]
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
