import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useUser } from "./UserContext";

const StructureContext = createContext();

function StructureContextProvider({ children }) {
  const { user, apiService } = useUser();
  const loaderData = useLoaderData();
  const [dataImage, setDataImage] = useState({});
  const [data, setData] = useState({
    jardin: false,
    maxPlaces: 1,
    isHandicapEnabled: false,
    maxHandicap: 0,
    isUnder18MonthsEnabled: false,
    maxUnder18Months: 0,
    isAtypicalHoursEnabled: false,
    maxAtypicalHours: 0,
    isNightCareEnabled: false,
    maxNightCare: 0,
    ...loaderData?.preloadUserStructure?.data,
  });

  const [dataSchedules, setdataSchedules] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    openHour: "08:00",
    closeHour: "17:00",
    ...loaderData?.preloadUserStructureHours?.data,
  });
  const [dataEmployee, setDataEmployee] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.is_admin === 0) {
      return navigate("/login");
    }
    console.info(user);
    return undefined;
  }, [user]);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const onChangeFiles = (value) => {
    if (value[0] !== dataImage.avatar) {
      setDataImage((prevDataImage) => ({
        ...prevDataImage,
        avatar: value[0],
      }));
    }
  };

  const updateAllDays = (key, value) => {
    setdataSchedules((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const updateAmenities = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmitEmployee = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/structure/${
          data?.id
        }/adaptation/employees`,
        dataEmployee ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitNewEmployee = async () => {
    try {
      const response = await apiService.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/structure/employees/${
          data?.id
        }`,
        dataEmployee ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitSchedules = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/structure/${
          data?.id
        }/adaptation/hours`,
        dataSchedules ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/structure/${
          data?.id
        }/adaptation`,
        data ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStructureEmployees = async (id) => {
    try {
      const employees = (
        await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/structures/${id}/employees`
        )
      ).data;
      const dictionary = new Map();
      employees.forEach((element) => {
        dictionary.set(element.id, element);
      });
      (dataEmployee?.employees ?? []).forEach((element) => {
        dictionary.set(element.id, element);
      });
      setDataEmployee({
        ...dataEmployee,
        employees: [...dictionary.values()],
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEmployee = async (id) => {
    return apiService.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/employees/${id}`
    );
  };

  const contextStructureValue = useMemo(
    () => ({
      handleSubmit,
      handleSubmitSchedules,
      data,
      setData,
      onChange,
      onChangeFiles,
      updateAllDays,
      updateAmenities,
      dataSchedules,
      handleSubmitEmployee,
      dataEmployee,
      setDataEmployee,
      dataImage,
      getStructureEmployees,
      deleteEmployee,
      handleSubmitNewEmployee,
    }),
    [
      handleSubmit,
      handleSubmitSchedules,
      data,
      setData,
      onChange,
      onChangeFiles,
      updateAllDays,
      updateAmenities,
      dataSchedules,
      handleSubmitEmployee,
      dataEmployee,
      setDataEmployee,
      dataImage,
      getStructureEmployees,
      deleteEmployee,
      handleSubmitNewEmployee,
    ]
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
