import React, { useState } from "react";
import Axios from "axios";
import {
  MDBTimepicker,
  MDBDatepicker,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import "./reservation.scss";
import { Link, useLoaderData } from "react-router-dom";
import imageDefault from "../../../assets/defaultImage.png";

function Reservation() {
  const loaderData = useLoaderData();
  // console.log(loaderData);

  const creche = loaderData?.preloadNursery;
  const parent = loaderData?.parentProfil;

  // console.log(creche);

  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  // const [status, setStatus] = useState(true);

  const handleNextButtonClick = async () => {
    // Étape 3: Récupérer les données sélectionnées
    const reservationData = {
      dayResa: selectedDate,
      startHour: startTime,
      finishHour: endTime,
      structure_id: creche.id,
      parent_id: parent.id,
      status: true,
    };

    // console.log(reservationData);

    try {
      const response = await Axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservation`,
        reservationData
      );
      console.info(response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réservation :", error);
    }

    // console.log("Données de réservation :", reservationData);
  };

  return (
    <div className="reservation_container">
      <div key={creche.id}>
        <h1>Créche {creche.name}</h1>
        <div className="card_reservation">
          <div className="picture_card">
            <img src={creche.avatarPath || imageDefault} alt={creche.name} />
          </div>
          <h2>Demande de réservation</h2>
          <h3>Créche {creche.name}</h3>
          <MDBValidation>
            <div className="time_resa">
              <ul>
                <li>
                  <h4>Votre date de réservation:</h4>
                  <MDBValidationItem
                    className="col-md-4"
                    feedback="Veuillez entrer une date"
                    invalid
                    isValidated
                  >
                    <MDBDatepicker
                      inline
                      required
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                    />
                  </MDBValidationItem>
                </li>
                <li>
                  <h4>Heure de début souhaité:</h4>
                  <MDBTimepicker
                    inline
                    format="24h"
                    value={startTime}
                    onChange={(time) => setStartTime(time)}
                  />
                </li>
                <li>
                  <h4>Heure de fin souhaité:</h4>
                  <MDBTimepicker
                    inline
                    format="24h"
                    value={endTime}
                    onChange={(time) => setEndTime(time)}
                  />
                </li>
              </ul>
            </div>

            <div className="bottom_resa">
              <Link to="/searchlist/conditions">
                <button
                  type="button"
                  className="btn_next"
                  onClick={handleNextButtonClick}
                >
                  Suivant
                </button>
              </Link>
            </div>
          </MDBValidation>
        </div>
      </div>
      <div className="tarif_perso">
        <p>
          * En complétant mon profil, je peux obtenir une tarification
          personnalisée en fonction de mes revenus{" "}
        </p>
      </div>
    </div>
  );
}

export default Reservation;
