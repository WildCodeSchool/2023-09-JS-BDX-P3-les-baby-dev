import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const ProContext = createContext();

function ProContextProvider({ children }) {
  // const [proType, setProType] = useState(false);

  return <ProContext.Provider>{children}</ProContext.Provider>;
}

ProContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProContextProvider;
export const usePro = () => useContext(ProContext);
