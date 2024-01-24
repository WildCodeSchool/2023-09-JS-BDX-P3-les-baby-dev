import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import ApiService from "../services/api.service";

const UserContext = createContext();

function UserContextProvider({ children, apiService }) {
  const givenData = useLoaderData();
  // console.log("user", givenData);

  const [isProfessional, setIsProfessional] = useState(
    givenData?.preloadUser?.data?.isAdmin
  );

  const [user, setUser] = useState(givenData?.preloadUser?.data);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        credentials
      );
      localStorage.setItem("token", data.token);
      apiService.setToken(data.token);

      const result = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/myprofil`
      );

      // eslint-disable-next-line no-alert
      alert(`Content de vous revoir ${result.data.email}`);
      setUser(result.data);
      if (result.data.is_admin === 1) {
        return navigate("/dashboard");
      }
      return navigate("/searchlist");
    } catch (err) {
      console.error(err);
      // eslint-disable-next-line no-alert
      alert(err.message);
    }

    return null;
  };

  const register = async (newUser) => {
    try {
      setUser(
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users`,
          newUser
        )
      );
      // eslint-disable-next-line no-alert
      alert(`Bienvenue ${newUser.email}`);
      if (newUser.is_admin) {
        return navigate("/structure");
      }
      return navigate("/searchlist");
    } catch (err) {
      console.error(err);
      // eslint-disable-next-line no-alert
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
      apiService,
      login,
      register,
      setIsProfessional,
      isProfessional,
      user,
      logout,
    }),
    [
      apiService,
      login,
      register,
      setIsProfessional,
      isProfessional,
      user,
      logout,
    ]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  apiService: PropTypes.instanceOf(ApiService).isRequired,
};

export default UserContextProvider;
export const useUser = () => useContext(UserContext);
