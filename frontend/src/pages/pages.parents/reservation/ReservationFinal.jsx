import React, { useState } from "react";
import Axios from "axios";
import "./reservationFinal.scss";
import { Link, useNavigate } from "react-router-dom";
import { MDBSwitch } from "mdb-react-ui-kit";
import { useParent } from "../../../context/ParentContext";

function ReservationFinal() {
  const { reservationData, updateReservationData } = useParent();
  const [parentMessage, setParentMessage] = useState("");
  const navigate = useNavigate();

  const handleConfirmationClick = async () => {
    updateReservationData(
      reservationData.dayResa,
      reservationData.startHour,
      reservationData.finishHour,
      parentMessage
    );
    // console.log(reservationData);

    navigate("/searchlist/confirmation");
    try {
      const response = await Axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservation`,
        {
          ...reservationData,
          message: parentMessage,
        }
      );
      console.info(response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réservation :", error);
    }
  };

  return (
    <div className="finalResa_container">
      <div className="choisen_creche">
        <Link to="/searchlist/conditions">
          <img
            className="arrowBack"
            src="../src/assets/arrow_back.svg"
            alt=""
          />
        </Link>
        <div className="picture_creche">
          <img src="../src/assets/creche2.jpeg" alt="" />
        </div>
        <div className="title_creche">
          <h1>Terminer ma réservation</h1>
          <h2>Créche "NAME_CRECHE"</h2>
        </div>
      </div>
      <div className="infos_container">
        <h3>Enfants à garder</h3>
        <div className="switch">
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Adam le bébé (18 mois)"
          />
          <MDBSwitch
            id="flexSwitchCheckDefault"
            label="Victor le bébé (21 mois)"
          />
        </div>
        <div className="textArea">
          <h4>Message Libre</h4>
          <textarea
            value={parentMessage}
            onChange={(e) => setParentMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="acceptation">
        <h5>En envoyant ma demande de réservation, j'accepte:</h5>
        <ul>
          <li>les conditions générales de réservations</li>
          <li>
            le règlement intérieur de la structure d'envoyer mes information et
            dossier d'inscription à la crèche
          </li>
        </ul>
      </div>
      <div className="btn_confirmation">
        <button type="button" onClick={handleConfirmationClick}>
          Je confirme ma réservation
        </button>
      </div>
    </div>
  );
}

export default ReservationFinal;
