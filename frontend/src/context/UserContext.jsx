import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const getUser = () => JSON.parse(localStorage.getItem("users") ?? "[]");

  const login = (credential) => {
    const users = getUser();
    const memoryUser = users.find(
      (userdb) =>
        userdb.email === credential.email &&
        userdb.password === credential.password
    );
    if (!memoryUser) {
      alert("Identifiants incorrects !");
    } else {
      alert(`Content de vous revoir ${credential.email}`);
    }
  };
  // const [userType, setUserType] = useState(false);

  const register = (user) => {
    const users = getUser();

    if (!users.find((userdb) => userdb.email === user.email)) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert(`Bienvenue ${user.email}`);
    } else {
      alert("Vous êtes déjà inscrit !");
    }
  };

  const contextValue = useMemo(() => ({ login, register }), [login, register]);
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
export const useUser = () => useContext(UserContext);
