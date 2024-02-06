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
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import imageDefault from "../../assets/defaultImage.png";
import { useParent } from "../../context/ParentContext";
import Return from "../../assets/arrow_back.svg";

function NurseryCard() {
  const navigate = useNavigate();
  const [scrollableModal, setScrollableModal] = useState(false);
  const loaderData = useLoaderData();
  const parent = loaderData.parentProfil;
  const { setReservationData, reservationData } = useParent();

  const creche = loaderData?.preloadNursery;
  const crecheHours = loaderData?.hours.find(
    (hour) => hour.structure_id === creche.id
  );

  const handleNavigate = () => {
    if (
      parent.address === null ||
      parent.avatarPath === null ||
      parent.parentFName === null ||
      parent.parentName === null ||
      parent.profession === null ||
      parent.telephone === null ||
      parent.ville === null
    ) {
      navigate("/profil/inscription");
    } else {
      navigate(`/searchlist/nursery/${creche.id}/reservation`);
      setReservationData({
        ...reservationData,
        structure_id: creche.id,
      });
    }
  };

  return (
    <div className="card_container">
      <div key={creche.id}>
        <div className="header-nursery">
          <Link to="/searchlist">
            <img className="arrowBack" src={Return} alt="" />
          </Link>
          <h1>Créche {creche.name}</h1>
        </div>
        <div className="infos_card">
          <div className="picture_card">
            <img
              alt={creche.name}
              src={
                creche.avatarPath !== null
                  ? `${import.meta.env.VITE_BACKEND_URL}/${creche.avatarPath}`
                  : { imageDefault }
              }
            />
          </div>
          <div className="description_card">
            <h3>3/5</h3>
            <h4>Description</h4>
            <p>{creche.structureDesc}</p>
          </div>
          {crecheHours && (
            <div className="horaires_nursery">
              <ul>
                <li>
                  Ouvert le : {crecheHours.monday} - {crecheHours.tuesday} -{" "}
                  {crecheHours.wednesday} - {crecheHours.thursday} -
                  {crecheHours.friday} - {crecheHours.saturday}
                </li>
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
                {creche?.psci ? <li>Formation premiers secours (PSCI)</li> : ""}
                {creche?.nesting ? <li>Formation Nesting</li> : ""}
                {creche?.montessori ? <li>Pedagogie Montessori</li> : ""}
                {creche?.handicap ? (
                  <li>Formation accueil d'enfant handicapés</li>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <div className="accueil_nursery">
              <h5>Accueil</h5>
              <ul>
                {creche?.jardin ? <li>Espaces extérieur / jardin</li> : ""}
                {creche?.sorties ? <li>Sorties extérieur</li> : ""}
                <li>Foyer non-fumeur</li>
              </ul>
            </div>
            <div className="activity_nursery">
              <h5>Activités</h5>
              <ul>
                {creche?.promenades ? <li>Promenade</li> : ""}
                {creche?.eveil ? <li>Activité d'éveil</li> : ""}
                {creche?.musique ? <li>Atelier musique</li> : ""}
                {creche?.art ? <li>Activité artistique</li> : ""}
                {creche?.bilingue ? <li>Bilingue / International</li> : ""}
                {creche?.bibli ? <li>Bibliothéque / Ludothéque</li> : ""}
                {creche?.transport ? <li>Transport d'enfant</li> : ""}
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
                      {creche?.maxPlaces ? (
                        <li>Nous avous {creche.maxPlaces} places</li>
                      ) : (
                        ""
                      )}

                      {creche?.isHandicapEnabled ? (
                        <li>
                          Enfant handicapé : {creche.maxHandicap} place(s)
                        </li>
                      ) : (
                        ""
                      )}
                      {creche?.isUnder18MonthsEnabled ? (
                        <li>
                          Enfant de moins de 18 mois : {creche.maxUnder18Months}{" "}
                          place(s)
                        </li>
                      ) : (
                        ""
                      )}
                      {creche?.isAtypicalHoursEnabled ? (
                        <li>
                          Horaire atypique {creche.maxAtypicalHours} place(s)
                        </li>
                      ) : (
                        ""
                      )}
                      {creche?.isNightCareEnabled ? (
                        <li>Accueil de nuit {creche.maxNightCare} place(s)</li>
                      ) : (
                        ""
                      )}
                    </ol>
                    <h4>Réglement intérieur</h4>
                    {creche?.isAdaptationRequired ? (
                      <p>La période d'adaptation est obligatoire</p>
                    ) : (
                      ""
                    )}

                    {creche?.isRespectRequired ? (
                      <p>
                        Les parents sont priés de respecter l'environnement, le
                        voisinage, la vie privée et la famille de l'assistante
                        maternelle
                      </p>
                    ) : (
                      ""
                    )}

                    {creche?.isDoorRespectRequired ? (
                      <p>
                        Taper ou sonner à la porte, ne pas rentrer sans y être
                        invité et attendre qu'on vienne vous ouvrir.
                      </p>
                    ) : (
                      ""
                    )}

                    {creche?.isInfoTransmissionRequired ? (
                      <p>
                        Les parents doivent me transmettent toutes les
                        informations nécessaires, ainsi que les incidents
                        éventuels survenus au domicile
                      </p>
                    ) : (
                      ""
                    )}

                    {creche?.isCleanArrivalRequired ? (
                      <p>
                        L'enfant arrivera en état de propreté, habillé et ayant
                        pris son premier repas
                      </p>
                    ) : (
                      ""
                    )}
                    {creche?.isJewelryRemovalRequired ? (
                      <p>
                        Les bijoux seront enlevés et rendus aux parents pour des
                        raisons de sécurité (étouffement, ingestion…).
                      </p>
                    ) : (
                      ""
                    )}
                    {creche?.isMedicationAdminRequired ? (
                      <p>
                        La structure est habilitée à administrer les médicaments
                        uniquement sur ordonnance ou protocole.
                      </p>
                    ) : (
                      ""
                    )}
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
