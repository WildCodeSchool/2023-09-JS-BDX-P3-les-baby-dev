import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ParentContext = createContext();

function ParentContextProvider({ children }) {
  const [dataParent, setDataParent] = useState({});
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(dataParent, dataChildren);
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
