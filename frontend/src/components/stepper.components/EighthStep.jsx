import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import "./eighthStep.scss";

function EighthStep({ prevQuestion }) {
  const [centredModal, setCentredModal] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => setCentredModal(!centredModal);

  return (
    <div className="step8">
      <div className="pageContainer">
        <h4>
          Sur la base de vos paramètres, voici à quoi vous pouvez vous attendre
        </h4>
        <div>
          <h5>
            Vous êtes disponible à partir du 24 août pour accueillir jusqu'à{" "}
            <strong>4 enfants</strong> simultanément.{" "}
          </h5>
          <p>
            La famille Martin trouve votre annonce sur Babyplace, et vous trouve
            parfait.e pour accueillir leur bout de chou.
          </p>
        </div>
        <div>
          <h5>La famille effectue une demande de réservation</h5>
          <p>
            La famille Martin vous indique avoir récemment déménagé et avoir
            besoin en urgence d'une solution de garde pour leur petite fille de
            2 ans, Lou. <br />
            Ils ont remplis le dossier d'inscription avec toutes les
            attestations à jour (carnet de vaccination, signature reglement
            intérieur....)
          </p>
        </div>
        <div>
          <h5>Accueillez la petite Lou en toute serenité </h5>
          <p>
            Le contrat de travail est automatiquement envoyé, vous n'avez plus
            qu'à signer ! <br />
            La fiche de présence est également automatiquement établie à la fin
            de la mission.
          </p>
        </div>
        <div className="next-prev">
          <MDBBtn type="submit" onClick={toggleOpen}>
            terminé
          </MDBBtn>
          <MDBBtn type="button" onClick={prevQuestion}>
            précédent
          </MDBBtn>
        </div>
      </div>
      <MDBModal tabIndex="-1" open={centredModal} setOpen={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Hourra !</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleOpen}>
                {" "}
              </MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Nous avons bien pris en compte tous les éléments pour paramétrer
                votre profil Babyplace Il ne reste plus qu'une dernière étape de
                sécurité à franchir !
              </p>
              <p>
                Votre compte sera vérifié par nos équipes dans un délai de 48h
              </p>
              <h4>Sécurité</h4>
              <p>
                Nous avons besoin d'effectuer une dernière vérification avant
                validation définitive de votre compte sous 48h jour ouvré:
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => navigate("/dashboard")}>
                aller sur mon dashboard
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

EighthStep.propTypes = {
  prevQuestion: PropTypes.func.isRequired,
};

export default EighthStep;
