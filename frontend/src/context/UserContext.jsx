import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import ApiService from "../services/api.service";

const UserContext = createContext();

function UserContextProvider({ children, apiService }) {
  const givenData = useLoaderData();
  // console.log("user", givenData);

  const [user, setUser] = useState(givenData?.preloadUser?.data);
  const navigate = useNavigate();

  const login = async (credentials, redirect = true, showAlert = true) => {
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

      if (showAlert) {
        // eslint-disable-next-line no-alert
        alert(`Content de vous revoir ${result.data.email}`);
      }
      setUser(result.data);
      if (!redirect) {
        return null;
      }
      return navigate(result.data.is_admin ? "/dashboard" : "/searchlist");
    } catch (err) {
      console.error(err);
      // eslint-disable-next-line no-alert
      alert(err.message);
    }

    return null;
  };

  const register = async (newUser) => {
    try {
      await apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        newUser
      );
      await login(newUser, false, false);

      // eslint-disable-next-line no-alert
      alert(`Bienvenue ${newUser.email}`);
      return navigate(newUser.is_admin ? "/structure/step/1" : "/searchlist");
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
      user,
      logout,
    }),
    [apiService, login, register, user, logout]
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
