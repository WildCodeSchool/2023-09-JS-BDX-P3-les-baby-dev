import React, { useEffect, useState } from "react";
import "./profilResa.scss";
import { MDBBadge } from "mdb-react-ui-kit";
import { Link, useLoaderData } from "react-router-dom";
import NavProfil from "../../../components/profile.components/NavProfil";
import imageDefault from "../../../assets/creche2.jpeg";
import { useUser } from "../../../context/UserContext";
import HeaderNav from "../../../components/profile.components/HeaderNav";
import arrowBack from "../../../assets/arrow_back.svg";

function ProfilResa() {
  const loaderDataParent = useLoaderData();
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
  }, []);

  return (
    <div className="profilResa_container">
      <HeaderNav />
      <div className="choisen_profil">
        <Link to="/profil">
          <img className="arrowBack" src={arrowBack} alt="" />
        </Link>
        <div className="picture_profil">
          <img src="../src/assets/Victor.jpeg" alt="" />
        </div>
        <div className="title_Myresa">
          <h1>{myProfil?.parentName ?? ""}</h1>
          <h2>{myProfil?.parentFName ?? ""}</h2>
        </div>
      </div>
      <div className="myResa_container">
        <h1>Mes réservations</h1>
        {myResa.map((item) => {
          const creche = structures.find(
            (structure) => structure.id === item.structure_id
          );
          return (
            <div key={item.id} className="card_myresa">
              <div className="img_structure">
                <img src={creche?.avatarPath ?? imageDefault} alt="" />
              </div>
              <div className="title_resa">
                <div key={creche.id}>
                  <h2>Créche:</h2>
                  <h2>{creche.name}</h2>
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
              <div className="date_resa">
                <h3>Date de réservation:</h3>
                <h3>{item.dayResa}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <NavProfil />
    </div>
  );
}
export default ProfilResa;
