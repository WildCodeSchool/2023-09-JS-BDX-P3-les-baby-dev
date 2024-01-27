import React, { useState } from "react";
import "./nurseryCard.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useLoaderData, useNavigate } from "react-router-dom";
import imageDefault from "../../assets/defaultImage.png";
import { useParent } from "../../context/ParentContext";

function NurseryCard() {
  const [scrollableModal, setScrollableModal] = useState(false);
  const loaderData = useLoaderData();
  const { setReservationData, reservationData } = useParent();

  const creche = loaderData?.preloadNursery;
  const crecheHours = loaderData?.hours.find(
    (hour) => hour.structure_id === creche.id
  );

  const navigate = useNavigate();

  const handleNavigate = () => {
    // console.log("creche.id:", creche.id);
    navigate(`/searchlist/nursery/${creche.id}/reservation`);
    setReservationData({
      ...reservationData,
      structure_id: creche.id,
    });
  };

  return (
    /* 
            <div className="critere_nursery">
              <div className="disponibility_nursery">
                <h5>Disponibilités</h5>
                <div className="days-container">
                  {Object.entries(creche.availability).map(
                    ([day, isAvailable], index) => (
                      <div
                        className="days-availability"
                        key={`index-${index + 1}`}
                        style={{
                          backgroundColor: isAvailable ? "green" : "silver",
                        }}
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
              </div>
              */

    <div className="card_container">
      <div key={creche.id}>
        <h1>Créche {creche.name}</h1>
        <h2>{creche.name}</h2>
        <div className="infos_card">
          <div className="picture_card">
            <img alt={creche.name} src={creche.avatarPath || imageDefault} />
          </div>
          <div className="description_card">
            <h3>3/5</h3>
            <h4>Description</h4>
            <p>{creche.structureDesc}</p>
          </div>
          {crecheHours && (
            <div className="horaires_nursery">
              <ul>
                <li>Du lundi au samedi</li>
                <li>de {crecheHours.openHour} heure</li>
                <li>à {crecheHours.closeHour} heure</li>
              </ul>
            </div>
          )}
          <div className="critere_nursery">
            <div className="disponibility_nursery">
              <h5>Disponibilités</h5>
              <div className="days-container">
                {crecheHours && (
                  <>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours.monday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Lundi: {crecheHours.monday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours.tuesday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Mardi: {crecheHours.tuesday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours.wednesday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Mercredi:{" "}
                      {crecheHours.wednesday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours.thursday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Jeudi: {crecheHours.thursday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours.friday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Vendredi: {crecheHours.friday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours.saturday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Samedi: {crecheHours.saturday ? "Disponible" : "Complet"}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="experience_nursery">
              <h5>Expériences</h5>
              <ul>
                <li>Formation premiers secours</li>
                <li>Formation Nesting</li>
                <li>Pedagogie Montessori</li>
              </ul>
            </div>
            <div className="accueil_nursery">
              <h5>Accueil</h5>
              <ul>
                <li>Sorties Extérieur</li>
                <li>Repas Maison</li>
                <li>Foyer non-fumeur</li>
              </ul>
            </div>
            <div className="activity_nursery">
              <h5>Activités</h5>
              <ul>
                <li>Promenade</li>
                <li>Activité d'éveil</li>
                <li>Atelier musique</li>
              </ul>
            </div>
          </div>
          <div className="button_reservation">
            <button
              type="button"
              onClick={() => setScrollableModal(!scrollableModal)}
            >
              Reserver
            </button>
          </div>
          <div className="popup_reglement">
            <MDBModal
              open={scrollableModal}
              setOpen={setScrollableModal}
              tabIndex="-1"
            >
              <MDBModalDialog scrollable>
                <MDBModalContent>
                  <MDBModalBody>
                    <h4>Aggréments</h4>
                    <ol>
                      <li>Enfants handicapés</li>
                      <li>Enfants de moins de 18 mois</li>
                      <li>Horaire atypique</li>
                      <li>Accueil de nuit</li>
                    </ol>
                    <h4>Réglement intérieur</h4>
                    <p>La période d’adaptation est obligatoire</p>
                    <p>
                      Les parents sont priés de respecter l’environnement, le
                      voisinage, la vie privée et la famille de l’assistante
                      maternelle
                    </p>
                    <p>
                      Taper ou sonner à la porte, ne pas rentrer sans y être
                      invité et attendre qu’on vienne vous ouvrir.
                    </p>
                    <p>
                      Les parents doivent me transmettent toutes les
                      informations nécessaires, ainsi que les incidents
                      éventuels survenus au domicile
                    </p>
                    <p>
                      L’enfant arrivera en état de propreté, habillé et ayant
                      pris son premier repas
                    </p>
                    <p>
                      Les bijoux seront enlevés et rendus aux parents pour des
                      raisons de sécurité (étouffement, ingestion…).
                    </p>
                    <p>
                      L’assistante maternelle est habilitée à administrer les
                      médicaments uniquement sur ordonnance ou protocole.
                    </p>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn
                      color="secondary"
                      onClick={() => setScrollableModal(!setScrollableModal)}
                    >
                      Close
                    </MDBBtn>
                    <MDBBtn onClick={() => handleNavigate()}>
                      J'ai compris
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
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

export default NurseryCard;
