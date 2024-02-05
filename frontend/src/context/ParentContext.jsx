import { useLoaderData } from "react-router-dom";
import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useUser } from "./UserContext";

const ParentContext = createContext();

function ParentContextProvider({ children }) {
  const loaderData = useLoaderData();

  const parent = loaderData?.parentProfil;

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

  const [dataChildren, setDataChildren] = useState([
    {
      childName: "",
      childFName: "",
      birthday: "",
      isWalking: false,
      childDoctor: "",
      allergies: "",
    },
  ]);

  // --------------------- Reservation --------------------------
  const { apiService } = useUser();

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

  const contextParentValue = useMemo(
    () => ({
      dataParent,
      handleSubmitParent,
      reservationData,
      setReservationData,
      updateReservationData,
      parent,
      dataChildren,
      setDataChildren,
      handleClick,
    }),
    [
      dataParent,
      handleSubmitParent,
      reservationData,
      setReservationData,
      updateReservationData,
      parent,
      dataChildren,
      setDataParent,
      handleClick,
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
