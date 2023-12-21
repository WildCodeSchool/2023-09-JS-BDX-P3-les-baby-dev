import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const StructureContext = createContext();

function StructureContextProvider({ children }) {
  // const [proType, setProType] = useState(false);
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(data);
  };

  const contextStructureValue = useMemo(
    () => ({ handleSubmit, data, setData }),
    [handleSubmit, data, setData]
  );

  return (
    <StructureContext.Provider value={contextStructureValue}>
      {children}
    </StructureContext.Provider>
  );
}

StructureContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StructureContextProvider;
export const useStructure = () => useContext(StructureContext);
