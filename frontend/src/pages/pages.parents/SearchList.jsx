import "./SearchList.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  // MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavProfil from "../../components/profile.components/NavProfil";
import FilterComponent from "../../components/searchList.components/FilterComponent";
import HeaderNav from "../../components/profile.components/HeaderNav";
// import { useStructure } from "../../context/StrucutreContext";
// import ApiService from "../../services/api.service";

function SearchList() {
  const navigate = useNavigate();
  const [crechesData, setCrechesData] = useState([]);

  // const { fetchDataCreche } = useStructure();

  const handleNavigate = () => {
    navigate("/searchlist/nursery/:id");
  };

  useEffect(() => {
    const fetchDataCreche = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/structure");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setCrechesData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDataCreche();
  }, []);

  /*
  const crechesData = [
    {
      id: 1,
      name: "Picoti Picota",
      avatarPath: "./src/assets/creche3.jpeg",
      stuctureDesc:
        "La crèche « Picoti Picota » n’est pas qu’un lieu de garde, c’est surtout un lieu d’échange et d’accueil des enfants et des familles dans une confiance réciproque où le respect, l’autonomie et la sécurité sont des références privilégiées dans notre projet.",
      openingHours: "Lundi - Samedi : 9h-16h",
        tel: "05 56 56 56 56",
        adress: "contact@picotipicota.fr",
      availability: {
        "lundi 14": false,
        "mardi 15": true,
        "mercredi 16": false,
        "jeudi 17": true,
        "vendredi 18": false,
        "samedi 19": true,
      },
    },
    {
      id: 2,
      name: "Joyeux P'tits Loups",
      avatarPath: "./src/assets/creche2.jpeg",
      stuctureDesc:
        "Bienvenue chez les Joyeux P'tits Loups ! Une crèche où le bonheur et l'épanouissement des tout-petits sont au cœur de nos préoccupations. Nous offrons un environnement chaleureux et sécurisé pour que vos enfants grandissent dans la joie et la confiance.",
      openingHours: "Lundi - Vendredi : 8h-18h",
        tel: "07 77 77 77 77",
        adress: "contact@joyeuxptitsloups.com",
      availability: {
        "lundi 14": false,
        "mardi 15": false,
        "mercredi 16": false,
        "jeudi 17": true,
        "vendredi 18": false,
        "samedi 19": false,
      },
    },
    {
      id: 3,
      name: "Les Petites Canailles",
      avatarPath: "./src/assets/creche.jpeg",
      stuctureDesc:
        "Les Petites Canailles, une crèche où chaque enfant est unique ! Nous favorisons le développement global de l'enfant en lui offrant des activités ludiques et éducatives. Notre équipe dévouée assure un environnement sécurisé et bienveillant.",
      openingHours: "Lundi - Jeudi : 7h-18h, Vendredi : 7h-16h",
        tel: "06 66 66 66 66",
        adress: "contact@petitescanailles.fr",
      availability: {
        "lundi 14": true,
        "mardi 15": true,
        "mercredi 16": false,
        "jeudi 17": true,
        "vendredi 18": true,
        "samedi 19": false,
      },
    },
  ]; */

  return (
    /* <div>
      <FilterComponent />
      <div className="card-container container">
        {crechesData.map((creche) => (
          <div key={creche.id}>
            <MDBCard>
              <MDBCardImage
                position="top"
                alt={creche.name}
                src={creche.avatarPath}
              />
              <MDBCardBody>
                <MDBCardTitle>{creche.name}</MDBCardTitle>
                <MDBCardText>{creche.stuctureDesc}</MDBCardText>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem>{creche.openingHours}</MDBListGroupItem>
                <MDBListGroupItem>{creche.tel}</MDBListGroupItem>
                <MDBListGroupItem>{creche.adress}</MDBListGroupItem>
                <div className="days-container">
                  {Object.entries(creche.availability).map(
                    ([day, isAvailable], index) => (
                      <div
                        className="days-availability"
                        key={`index-${index + 1}`}
                        style={{
                          backgroundColor: isAvailable
                            ? "green"
                            : "rgb(105, 105, 105)",
                        }}
                      >
                        {day}: {isAvailable ? "Disponible" : "Complet"}
                      </div>
                    )
                  )}
                </div>
              </MDBListGroup>
              <MDBCardBody>
                <MDBCardLink onClick={handleNavigate}>Nursery</MDBCardLink>
                <MDBCardLink>
                  <Link to="/searchlist/nursery">Réserver</Link>
                </MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
      <NavProfil />
    </div> */
    <div className="searchlist_container">
      <HeaderNav />
      <FilterComponent />
      <div className="card-container">
        {crechesData.map((creche) => (
          <div key={creche.id}>
            <div className="oneCard">
              <MDBCard>
                <div className="img_creche">
                  <img alt={creche.name} src="./src/assets/creche.jpeg" />
                  <h3>{creche.name}</h3>
                </div>

                <MDBCardBody>
                  <MDBCardTitle>{creche.name}</MDBCardTitle>
                </MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>{creche.tel}</MDBListGroupItem>
                  <MDBListGroupItem>{creche.city}</MDBListGroupItem>
                </MDBListGroup>
                <MDBCardBody>
                  <MDBCardLink onClick={handleNavigate}>Nursery</MDBCardLink>
                  <MDBCardLink>
                    <Link to="/searchlist/nursery">Réserver</Link>
                  </MDBCardLink>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        ))}
      </div>
      <NavProfil />
    </div>
  );
}

export default SearchList;
