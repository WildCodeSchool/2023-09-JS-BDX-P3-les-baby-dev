import React, { useState /* useEffect */ } from "react";
import "./nurseryCard.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import imageDefault from "../../assets/defaultImage.png";
import { useParent } from "../../context/ParentContext";

function NurseryCard() {
  const [scrollableModal, setScrollableModal] = useState(false);

  const { creche } = useParent();

  const navigate = useNavigate();

  const handleNavigate = (crecheId) => {
    navigate(`/searchlist/nursery/${crecheId}/reservation`);
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
            <p>presentation</p>
          </div>
          <div className="horaires_nursery">
            <ul>
              <li>Lundi de 9h à 12h</li>
              <li>{creche.tel}</li>
              <li>{creche.city}</li>
            </ul>
          </div>
          <div className="critere_nursery">
            <div className="disponibility_nursery">
              <h5>Disponibilités</h5>
              <div className="days-container">
                <h6>Container days</h6>
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
                    <MDBBtn onClick={() => handleNavigate(creche.id)}>
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

NurseryCard.propTypes = {
  creche: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default NurseryCard;
