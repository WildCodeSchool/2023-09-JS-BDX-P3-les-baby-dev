import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useUser } from "./UserContext";

const StructureContext = createContext();

function StructureContextProvider({ children }) {
  const { user } = useUser();
  const loaderData = useLoaderData();
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
  });

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

  // const onChangeFiles = (value) => {
  //   if (value[0] !== data.profilPic) {
  //     setData({ ...data, profilPic: value[0] });
  //   }
  // };

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
        `http://localhost:3310/api/structure/${data?.id}/adaptation/employees`,
        data ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitSchedules = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3310/api/structure/${data?.id}/adaptation/hours`,
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
        `http://localhost:3310/api/structure/${data?.id}/adaptation`,
        data ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contextStructureValue = useMemo(
    () => ({
      handleSubmit,
      handleSubmitSchedules,
      data,
      setData,
      onChange,
      // onChangeFiles,
      updateAllDays,
      updateAmenities,
      dataSchedules,
      handleSubmitEmployee,
    }),
    [
      handleSubmit,
      handleSubmitSchedules,
      data,
      setData,
      onChange,
      // onChangeFiles,
      updateAllDays,
      updateAmenities,
      dataSchedules,
      handleSubmitEmployee,
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
