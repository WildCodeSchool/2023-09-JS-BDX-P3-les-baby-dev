import React, { useEffect, useState } from "react";
import "./profilResa.scss";
import { MDBBadge } from "mdb-react-ui-kit";
import { Link, useLoaderData } from "react-router-dom";
import NavProfil from "../../../components/profile.components/NavProfil";
import { useUser } from "../../../context/UserContext";

function ProfilResa() {
  const loaderDataParent = useLoaderData();
  const { apiService } = useUser();
  const myProfil = loaderDataParent?.parentProfil;
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
  }, []);

  return (
    <div className="profilResa_container">
      <div className="choisen_profil">
        <Link to="/profil">
          <img
            className="arrowBack"
            src="../src/assets/arrow_back.svg"
            alt=""
          />
        </Link>
        <div className="picture_profil">
          <img src="../src/assets/Victor.jpeg" alt="" />
        </div>
        <div className="title_Myresa">
          <h1>Le vic</h1>
          <h2>Papa Poule</h2>
        </div>
      </div>
      <div className="myResa_container">
        <h1>Mes réservations</h1>
        {myResa.map((item) => (
          <div key={item.id} className="card_myresa">
            <div className="img_structure">
              <img src="../src/assets/creche3.jpeg" alt="" />
            </div>
            <div className="title_resa">
              <h2>Bibiche Structure</h2>
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
            <div className="date_resa">
              <h3>Date de réservation:</h3>
              <h3>{item.dayResa}</h3>
            </div>
          </div>
        ))}
      </div>
      <NavProfil />
    </div>
  );
}
export default ProfilResa;
