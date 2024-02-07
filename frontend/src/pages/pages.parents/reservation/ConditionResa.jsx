import React from "react";
import "./conditionResa.scss";
import { Link } from "react-router-dom";
import arrowBack from "../../../assets/arrow_back.svg";
import check from "../../../assets/check.svg";
import { useParent } from "../../../context/ParentContext";
import { useUser } from "../../../context/UserContext";

function ConditonResa() {
  const { apiService } = useUser();
  const { reservationData, setReservationData } = useParent();
  const handleChildSubmit = async () => {
    try {
      const result = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/parent/children/${
          reservationData.parent_id
        }`
      );
      const { childName } = result.data[0];
      const { childFName } = result.data[0];
      const { id } = result.data[0];

      setReservationData((prevData) => ({
        ...prevData,
        childName,
        childFName,
        childId: id,
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  return (
    <div className="conditions_container">
      <div className="choisen_creche">
        <Link to="/searchlist">
          <img className="arrowBack" src={arrowBack} alt="" />
        </Link>
        {/* <div className="picture_creche">
          <img src={crecheSecond} alt="" />
        </div> */}
        <div className="title_creche">
          <h1>Demander une place</h1>
          <h2>Conditions</h2>
        </div>
      </div>
      <h3>Conditions de réservation</h3>
      <div className="list_conditions">
        <ul>
          <li>
            <img src={check} alt="" />
            <p>Votre enfant a déjà été gardé par une structure</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Votre profil est complet et vérifié</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>La période d'adaptation est obligatoire</p>
          </li>
          <li>
            <img src={check} alt="" />
            <p>Votre enfant à plus de 18 mois</p>
          </li>
        </ul>
      </div>
      <div className="btn_accepted">
        <Link to="/searchlist/reservation2">
          <button type="button" onClick={handleChildSubmit}>
            J'ai lu et j'accepte la consigne
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ConditonResa;
