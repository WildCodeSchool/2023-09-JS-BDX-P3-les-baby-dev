import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserContextProvider({ children }) {
  // const [userType, setUserType] = useState(false);

  return <UserContext.Provider>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
export const useUser = () => useContext(UserContext);
