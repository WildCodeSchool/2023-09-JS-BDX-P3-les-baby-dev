import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "./UserContext";

const ParentContext = createContext();

function ParentContextProvider({ children }) {
  const [filterSearch, setFilterSearch] = useState([]);
  const loaderData = useLoaderData();
  const { apiService } = useUser();

  const parent = loaderData?.parentProfil;
  const child = loaderData?.childProfil;

  const [dataParent, setDataParent] = useState({
    avatarPath: "",
    address: "",
    parentFName: "",
    parentName: "",
    profession: "",
    telephone: "",
    ville: "",
    ...loaderData?.parentProfil,
  });

  const handleClick = (e) => {
    setDataParent({
      ...dataParent,
      [e.target.name]: e.target.value,
    });
  };

  const [dataChildren, setDataChildren] = useState([]);

  const getMyChildren = async () => {
    try {
      const response = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/parent/children/${parent.id}`
        // `${import.meta.env.VITE_BACKEND_URL}/api/parents/${parent.id}/children`
      );

      setDataChildren(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMyChildren();
  }, []);

  // --------------------- Reservation --------------------------

  const [reservationData, setReservationData] = useState({
    dayResa: "",
    startHour: "",
    finishHour: "",
    structure_id: "",
    parent_id: parent?.id ?? "",
    status: true,
    message: "",
  });

  const updateReservationData = (date, startTime, endTime, parentMessage) => {
    setReservationData((prevData) => ({
      ...prevData,
      dayResa: date,
      startHour: startTime,
      finishHour: endTime,
      message: parentMessage,
    }));
  };

  const handleSubmitParent = async () => {
    try {
      const response = await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/parents/${dataParent.id}`,
        dataParent ?? {}
      );

      console.info(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ------------------- filter --------------------

  const [checkboxState, setCheckboxState] = useState({
    psci: false,
    nesting: false,
    montessori: false,
    handicap: false,
    jardin: false,
    sorties: false,
    promenades: false,
    eveil: false,
    musique: false,
    art: false,
    bilingue: false,
    bibli: false,
  });

  const onChange = (e) => {
    setCheckboxState({
      ...checkboxState,
      [e.target.name]: e.target.checked,
    });
  };

  const handleAppliquerClick = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/structures/filter`,
        { params: checkboxState }
      );
      setFilterSearch([...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const contextParentValue = useMemo(
    () => ({
      dataParent,
      handleSubmitParent,
      reservationData,
      setReservationData,
      updateReservationData,
      parent,
      child,
      dataChildren,
      setDataChildren,
      handleClick,
      getMyChildren,
      filterSearch,
      setFilterSearch,
      handleAppliquerClick,
      onChange,
      checkboxState,
    }),
    [
      dataParent,
      handleSubmitParent,
      reservationData,
      setReservationData,
      updateReservationData,
      parent,
      child,
      dataChildren,
      setDataParent,
      handleClick,
      getMyChildren,
      filterSearch,
      setFilterSearch,
      handleAppliquerClick,
      onChange,
      checkboxState,
    ]
  );

  return (
    <ParentContext.Provider value={contextParentValue}>
      {children}
    </ParentContext.Provider>
  );
}

ParentContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ParentContextProvider;
export const useParent = () => useContext(ParentContext);
