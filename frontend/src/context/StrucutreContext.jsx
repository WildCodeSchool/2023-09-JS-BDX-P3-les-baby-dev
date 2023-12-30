import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const StructureContext = createContext();

function StructureContextProvider({ children }) {
  // const [proType, setProType] = useState(false);
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
  });

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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(data);
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
