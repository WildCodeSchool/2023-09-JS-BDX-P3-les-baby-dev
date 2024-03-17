import React, { useEffect, useState } from "react";
import "./profilResa.scss";
import {
  MDBBadge,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useLoaderData } from "react-router-dom";
import NavProfil from "../../../components/profile.components/NavProfil";
import imageDefault from "../../../assets/creche2.jpeg";
import { useUser } from "../../../context/UserContext";
import HeaderNav from "../../../components/profile.components/HeaderNav";

function ProfilResa() {
  const loaderDataParent = useLoaderData();
  const [basicModal, setBasicModal] = useState(false);
  const [selectedResaId, setSelectedResaId] = useState(null);
  const toggleOpen = (id) => {
    setSelectedResaId(id);
    setBasicModal(!basicModal);
  };
  const { apiService } = useUser();
  const myProfil = loaderDataParent?.parentProfil;
  const structures = loaderDataParent?.structures;
  const [myResa, setMyResa] = useState([]);

  const getMyResaByParentId = async () => {
    try {
      const response = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservations/parent/${
          myProfil.id
        }`
      );
      const myResaByParent = response.data;
      return setMyResa(myResaByParent);
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  useEffect(() => {
    getMyResaByParentId();
  }, [myResa]);

  const putResa = async (id) => {
    try {
      await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservation/${id}`,
        { status: false }
      );
      setBasicModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profilResa_container">
      <HeaderNav />
      <div className="myResa_container">
        <h1>Mes réservations</h1>
        {myResa.map((item) => {
          const creche = structures.find(
            (structure) => structure.id === item.structure_id
          );
          return (
            <div
              key={item.id}
              className="card_myresa"
              onClick={item.status ? () => toggleOpen(item.id) : null}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleOpen(item.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="img_structure">
                <img
                  src={
                    creche.avatarPath !== null
                      ? `${import.meta.env.VITE_BACKEND_URL}/${
                          creche.avatarPath
                        }`
                      : { imageDefault }
                  }
                  alt=""
                />
              </div>
              <div className="title_resa">
                <div key={creche.id}>
                  <h2>{creche.name}</h2>
                </div>
                <div className="date_resa">
                  <h3>Date de réservation:</h3>
                  <h3>{item.dayResa}</h3>
                </div>
                {item.status ? (
                  <MDBBadge className="badge" color="success" pill>
                    Accepté
                  </MDBBadge>
                ) : (
                  <MDBBadge color="danger" pill>
                    Refusé
                  </MDBBadge>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Voulez-vous modifier votre reservation ?
              </MDBModalTitle>
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn onClick={toggleOpen}>Fermer</MDBBtn>
              <MDBBtn
                // color="secondary"
                onClick={() => putResa(selectedResaId)}
              >
                Annuler
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <NavProfil />
    </div>
  );
}
export default ProfilResa;
