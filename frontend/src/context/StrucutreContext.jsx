import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { useUser } from "./UserContext";

const StructureContext = createContext();

function StructureContextProvider({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.is_admin === 0) {
      console.info(user);
      return navigate("/login");
    }
    console.info(user);
    return undefined;
  }, [user]);

  const [data, setData] = useState({
    schedules: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    },
    amenities: {
      maxPlaces: 1,
      isHandicapEnabled: false,
      maxHandicap: 0,
      isUnder18MonthsEnabled: false,
      maxUnder18Months: 0,
      isAtypicalHoursEnabled: false,
      maxAtypicalHours: 0,
      isNightCareEnabled: false,
      maxNightCare: 0,
    },
    employees: [],
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
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const onChangeFiles = (value) => {
    if (value[0] !== data.profilPic) {
      setData({ ...data, profilPic: value[0] });
    }
  };

  const updateAllDays = (key, value) => {
    setData({
      ...data,
      schedules: { ...data.schedules, [key]: value },
    });
  };

  const updateAmenities = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      amenities: { ...prevData.amenities, [key]: value },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.info(data);

    try {
      const response = await axios.post("/structureInscription", data);

      console.info(response.data);

      // if (response.data.success) {
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const contextStructureValue = useMemo(
    () => ({
      handleSubmit,
      data,
      setData,
      onChange,
      onChangeFiles,
      updateAllDays,
      updateAmenities,
    }),
    [
      handleSubmit,
      data,
      setData,
      onChange,
      onChangeFiles,
      updateAllDays,
      updateAmenities,
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
