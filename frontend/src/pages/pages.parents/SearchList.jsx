import "./SearchList.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import NavProfil from "../../components/profile.components/NavProfil";
import FilterComponent from "../../components/searchList.components/FilterComponent";
import HeaderNav from "../../components/profile.components/HeaderNav";
import imageDefault from "../../assets/defaultImage.png";

function SearchList() {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  // console.log("dans searchlist:", loaderData);

  const handleNavigate = (crecheId) => {
    navigate(`/searchlist/nursery/${crecheId}`);
  };

  return (
    <div className="searchlist_container">
      <HeaderNav />
      <FilterComponent />
      <div className="card-container">
        {loaderData.structures.map((creche) => {
          // Filtrer les heures pour la crèche actuelle
          const crecheHours = loaderData.hours.find(
            (hour) => hour.structure_id === creche.id
          );
          return (
            <div className="oneCard" key={creche.id}>
              <MDBCard>
                <div className="img_creche">
                  <img
                    alt={creche.name}
                    src={creche.avatarPath || imageDefault}
                  />
                  <h3>{creche.name}</h3>
                </div>

                <MDBCardBody>
                  <MDBCardTitle>{creche.name}</MDBCardTitle>
                </MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>{creche.tel}</MDBListGroupItem>
                  <MDBListGroupItem>{creche.city}</MDBListGroupItem>
                  <MDBListGroupItem>
                    <h4>3€/heure</h4>
                  </MDBListGroupItem>
                </MDBListGroup>
                <MDBCardBody>
                  <div className="days-container">
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours?.monday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Lundi: {crecheHours?.monday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours?.tuesday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Mardi: {crecheHours?.tuesday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours?.wednesday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Mercredi:{" "}
                      {crecheHours?.wednesday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours?.thursday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Jeudi: {crecheHours?.thursday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours?.friday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Vendredi: {crecheHours?.friday ? "Disponible" : "Complet"}
                    </p>
                    <p
                      className="days-availability"
                      style={{
                        backgroundColor: crecheHours?.saturday
                          ? "#32c766"
                          : "gray",
                      }}
                    >
                      Samedi: {crecheHours?.saturday ? "Disponible" : "Complet"}
                    </p>
                  </div>
                </MDBCardBody>

                <MDBCardBody>
                  <Link to={`/searchlist/nursery/${creche.id}`}>
                    <button
                      type="button"
                      className="btn_reservation"
                      onClick={() => handleNavigate(creche.id)}
                    >
                      Réserver
                    </button>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
      </div>
      <NavProfil />
    </div>
  );
}

export default SearchList;
