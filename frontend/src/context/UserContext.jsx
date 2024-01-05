import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [isProfessional, setIsProfessional] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ admin: false });
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3310/api/login`,
        credentials
      );
      localStorage.setItem("token", data.token);
      const tokenData = jwtDecode(data.token);
      alert(`Content de vous revoir ${credentials.email}`);
      setUser(tokenData);
      if (tokenData.isAdmin === 1) {
        return navigate("/structure");
      }
      return navigate("/searchlist");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

    return null;
  };

  const register = async (newUser) => {
    try {
      setUser(await axios.post("http://localhost:3310/api/users", newUser));
      alert(`Bienvenue ${newUser.email}`);
      if (isProfessional === 1) {
        return navigate("/structure");
      }
      return navigate("/searchlist");
    } catch (err) {
      alert(err.message);
    }

    return null;
  };

  const contextValue = useMemo(
    () => ({ login, register, setIsProfessional, isProfessional }),
    [login, register, setIsProfessional, isProfessional]
  );
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
export const useUser = () => useContext(UserContext);
