import "./SearchList.scss";
import { MDBCard, MDBCardBody, MDBListGroup } from "mdb-react-ui-kit";
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
                    alt={creche?.name ?? ""}
                    src={creche?.avatarPath ?? imageDefault}
                  />
                  <h3>{creche.name || "Nom inconnue"}</h3>
                </div>
                <div className="adress_nursery">
                  <ul>
                    <li>Adresse:</li>
                    <li>{creche.adress}</li>
                    <li>
                      {creche.zip} {creche.city}
                    </li>
                  </ul>
                </div>
                <MDBListGroup flush>
                  {crecheHours && (
                    <div className="horaires_nursery">
                      <ul>
                        <li>Ouvert du</li>
                        <li>lundi au samedi</li>
                        <li>Téléphone: {creche.tel}</li>
                      </ul>
                    </div>
                  )}
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
