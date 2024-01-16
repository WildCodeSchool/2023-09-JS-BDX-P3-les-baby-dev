import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useUser } from "./UserContext";

const StructureContext = createContext();

function StructureContextProvider({ children }) {
  const structureData = useLoaderData();
  const { data } = structureData.preloadUserStructure;
  // const [oldData, setOldData] = useState(data);

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.is_admin === 0) {
      return navigate("/login");
    }
    console.info(user);
    return undefined;
  }, [user]);

  const [newData, setData] = useState({
    maxPlaces: 1,
    isHandicapEnabled: false,
    maxHandicap: 0,
    isUnder18MonthsEnabled: false,
    maxUnder18Months: 0,
    isAtypicalHoursEnabled: false,
    maxAtypicalHours: 0,
    isNightCareEnabled: false,
    maxNightCare: 0,
  });

  const [dataSchedules, setdataSchedules] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });

  /* const [crechesData, setCrechesData] = useState([]);

  useEffect(() => {
    const fetchDataCreche = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/structure");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const items = await response.json();
        setCrechesData(items);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDataCreche();
  }, []); */

  const onChange = (e) => {
    setData({
      ...newData,
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

  const handleSubmitSchedules = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3310/api/structure/${data.id}/adaptation/hours`,
        dataSchedules
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3310/api/structure/${structureData.preloadUserStructure.data.id}/adaptation`,
        newData
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
      newData,
      data,
      setData,
      onChange,
      // onChangeFiles,
      updateAllDays,
      updateAmenities,
      dataSchedules,
    }),
    [
      handleSubmit,
      handleSubmitSchedules,
      newData,
      data,
      setData,
      onChange,
      // onChangeFiles,
      updateAllDays,
      updateAmenities,
      dataSchedules,
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
