import { useLoaderData, useNavigate } from "react-router-dom";
import { createContext, useContext, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";
import axios from "axios";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const { memoryUser } = useLoaderData();
  const [isProfessional, setIsProfessional] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(memoryUser);
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
      if (tokenData.is_admin === 1) {
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
      if (newUser.is_admin) {
        return navigate("/structure");
      }
      return navigate("/searchlist");
    } catch (err) {
      console.error(err);
      alert(err.response.data.message);
    }

    return null;
  };

  const logout = () => {
    localStorage.clear();
    setUser(undefined);
    navigate("/login");
  };

  const contextValue = useMemo(
    () => ({
      login,
      register,
      setIsProfessional,
      isProfessional,
      user,
      logout,
    }),
    [login, register, setIsProfessional, isProfessional, user, logout]
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
