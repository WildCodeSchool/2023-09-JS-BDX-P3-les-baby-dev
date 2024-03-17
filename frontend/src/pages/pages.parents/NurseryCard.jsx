import React, { useEffect, useRef, useState } from "react";
import "./nurseryCard.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import imageDefault from "../../assets/defaultImage.png";
import { useParent } from "../../context/ParentContext";
import Return from "../../assets/arrow_back.svg";
import { useUser } from "../../context/UserContext";
import profilePic from "../../assets/profil-picture.svg";

function NurseryCard() {
  const { apiService } = useUser();
  const { setReservationData, reservationData } = useParent();
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [scrollableModal, setScrollableModal] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  const [width, setWidht] = useState(0);
  const carousel = useRef();

  const loaderData = useLoaderData();
  const parent = loaderData.parentProfil;

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
      setScrollableModal(!setScrollableModal);
      toggleOpen();
    } else {
      navigate(`/searchlist/nursery/${creche.id}/reservation`);
      setReservationData({
        ...reservationData,
        structure_id: creche.id,
      });
    }
  };

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await apiService.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/structures/${
            creche.id
          }/employees`
        );
        setEmployees(response.data);
        setWidht(carousel.current.scrollWidth - carousel.current.offsetWidth);
      } catch (error) {
        console.error(error);
      }
    };

    getEmployee();
  }, []);

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
            <h4>Description</h4>
            <p>{creche.structureDesc}</p>
          </div>
          {crecheHours && (
            <div className="horaires_nursery">
              <ul>
                <li> Ouvert de : {crecheHours.openHour} heure</li>
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
            <div className="employee">
              <motion.div
                ref={carousel}
                className="carousel"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width - 20 }}
                  className="inner-carousel"
                >
                  {employees.map((employe) => (
                    <motion.div className="item shadow" key={employe.id}>
                      <img
                        src={
                          employe.files
                            ? `${import.meta.env.VITE_BACKEND_URL}/${
                                employe.files
                              }`
                            : profilePic
                        }
                        alt=""
                      />
                      <motion.div className="desc">
                        <p>
                          {employe.fName} {employe.name}
                        </p>
                        <p>{employe.fonction}</p>
                        <p>{employe.mail}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
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
                      // color="secondary"
                      onClick={() => setScrollableModal(!setScrollableModal)}
                    >
                      fermer
                    </MDBBtn>
                    <MDBBtn onClick={() => handleNavigate()}>
                      J'ai compris
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
          {/* <MDBBtn onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn> */}
          <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>
                    Avant de continuer, veuillez remplir votre dossier
                    d'inscription
                  </MDBModalTitle>
                </MDBModalHeader>

                <MDBModalFooter>
                  <MDBBtn onClick={toggleOpen}>Fermer</MDBBtn>
                  <MDBBtn
                    // color="secondary"
                    onClick={() => navigate("/profil/inscription")}
                  >
                    inscription
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
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
