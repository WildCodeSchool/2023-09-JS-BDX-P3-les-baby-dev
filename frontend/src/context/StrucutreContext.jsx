import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useUser } from "./UserContext";

const StructureContext = createContext();

function StructureContextProvider({ children }) {
  const { user, apiService } = useUser();
  const loaderData = useLoaderData();
  const [dataImage, setDataImage] = useState(undefined);
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
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
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
    if (value?.length) {
      setDataImage(value[0]);
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

  // const handleSubmitPicEmployee = async (index) => {
  //   const employeePics = dataEmployee.employees[index].files;
  //   const formData = new FormData();
  //   formData.append("avatarPath", employeePics);
  //   const response = await axios.put(
  //     `${import.meta.env.VITE_BACKEND_URL}/api//employees/${
  //       dataEmployee.employees[index]?.id
  //     }/avatar`,
  //     formData
  //   );
  //   return response;
  // };

  const handleSubmitNewEmployee = async (index) => {
    // console.log(dataEmployee[i]);
    const response = await apiService.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/structure/${data?.id}/employees`,
      dataEmployee.employees[index]
    );
    return response;
  };

  const handleSubmitEmployee = async (index) => {
    try {
      const employe = { ...dataEmployee.employees[index] };

      if (employe.id) {
        delete employe.id;
        dataEmployee.employees[index] = await apiService.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/structure/${
            dataEmployee.employees[index]?.id
          }/adaptation/employees`,
          employe
        );
      } else {
        dataEmployee.employees[index] = await handleSubmitNewEmployee(index);
      }

      setDataEmployee({ ...dataEmployee });
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
