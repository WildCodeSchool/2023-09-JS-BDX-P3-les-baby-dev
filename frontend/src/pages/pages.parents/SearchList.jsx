import "./SearchList.scss";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import NavProfil from "../../components/profile.components/NavProfil";
import FilterComponent from "../../components/searchList.components/FilterComponent";

function SearchList() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/searchlist/nursery/:id");
  };
  const crechesData = [
    {
      id: 1,
      name: "Picoti Picota",
      imageLink: "./src/assets/creche3.jpeg",
      presentation:
        "La crèche « Picoti Picota » n’est pas qu’un lieu de garde, c’est surtout un lieu d’échange et d’accueil des enfants et des familles dans une confiance réciproque où le respect, l’autonomie et la sécurité sont des références privilégiées dans notre projet.",
      openingHours: "Lundi - Samedi : 9h-16h",
      contact: {
        phone: "05 56 56 56 56",
        email: "contact@picotipicota.fr",
      },
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
      imageLink: "./src/assets/creche2.jpeg",
      presentation:
        "Bienvenue chez les Joyeux P'tits Loups ! Une crèche où le bonheur et l'épanouissement des tout-petits sont au cœur de nos préoccupations. Nous offrons un environnement chaleureux et sécurisé pour que vos enfants grandissent dans la joie et la confiance.",
      openingHours: "Lundi - Vendredi : 8h-18h",
      contact: {
        phone: "07 77 77 77 77",
        email: "contact@joyeuxptitsloups.com",
      },
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
      imageLink: "./src/assets/creche.jpeg",
      presentation:
        "Les Petites Canailles, une crèche où chaque enfant est unique ! Nous favorisons le développement global de l'enfant en lui offrant des activités ludiques et éducatives. Notre équipe dévouée assure un environnement sécurisé et bienveillant.",
      openingHours: "Lundi - Jeudi : 7h-18h, Vendredi : 7h-16h",
      contact: {
        phone: "06 66 66 66 66",
        email: "contact@petitescanailles.fr",
      },
      availability: {
        "lundi 14": true,
        "mardi 15": true,
        "mercredi 16": false,
        "jeudi 17": true,
        "vendredi 18": true,
        "samedi 19": false,
      },
    },
  ];
  return (
    <div>
      <FilterComponent />
      <div className="card-container container">
        {crechesData.map((creche) => (
          <div key={creche.id}>
            <MDBCard>
              <MDBCardImage
                position="top"
                alt={creche.name}
                src={creche.imageLink}
              />
              <MDBCardBody>
                <MDBCardTitle>{creche.name}</MDBCardTitle>
                <MDBCardText>{creche.presentation}</MDBCardText>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem>{creche.openingHours}</MDBListGroupItem>
                <MDBListGroupItem>{creche.contact.phone}</MDBListGroupItem>
                <MDBListGroupItem>{creche.contact.email}</MDBListGroupItem>
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
    </div>
  );
}

export default SearchList;
