import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const ProContext = createContext();

function ProContextProvider({ children }) {
  // const [proType, setProType] = useState(false);

  const contextValue = useMemo(() => ({}), []);

  return (
    <ProContext.Provider value={contextValue}>{children}</ProContext.Provider>
  );
}

ProContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProContextProvider;
export const usePro = () => useContext(ProContext);
