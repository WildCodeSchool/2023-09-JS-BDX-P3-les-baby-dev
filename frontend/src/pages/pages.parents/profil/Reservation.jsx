import React, { useState } from "react";

import {
  MDBTimepicker,
  MDBDatepicker,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import "./reservation.scss";
import { useLoaderData, useNavigate } from "react-router-dom";
import imageDefault from "../../../assets/defaultImage.png";
import { useParent } from "../../../context/ParentContext";

function Reservation() {
  const loaderData = useLoaderData();
  const { /* reservationData */ updateReservationData } = useParent();
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const navigate = useNavigate();

  // console.log(selectedDate);
  // console.log(startTime);
  // console.log(endTime);
  // console.log(reservationData)

  const creche = loaderData?.preloadNursery;

  const nextStep = async () => {
    await updateReservationData(selectedDate, startTime, endTime);
    navigate("/searchlist/conditions");
  };

  // const [status, setStatus] = useState(true);

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
              <button type="button" className="btn_next" onClick={nextStep}>
                Suivant
              </button>
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
