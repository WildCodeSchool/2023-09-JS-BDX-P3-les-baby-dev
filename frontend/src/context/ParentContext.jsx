import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const ParentContext = createContext();

function ParentContextProvider({ children }) {
  const loaderData = useLoaderData();
  // console.log(loaderData);

  const [dataParent, setDataParent] = useState({
    address: "12 fdf",
    parentFName: "dsfdf",
    parentName: "sfdfsdf",
    profession: "sdfsdf",
    telephone: "1234678910",
    ville: "fdfdf",
    ...loaderData?.preloadUser?.data,
  });

  // console.log(dataParent.id);

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
    // console.log(dataParent);
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
  // const handleSubmitFiles = (event) => {
  //   event.preventDefault();
  // };

  const contextParentValue = useMemo(
    () => ({
      handleClick,
      dataParent,
      handleSubmit,
      handleClickChild,
      // handleSubmitFiles,
    }),
    [
      handleClick,
      dataParent,
      handleSubmit,
      handleClickChild,
      // handleSubmitFiles
    ]
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
