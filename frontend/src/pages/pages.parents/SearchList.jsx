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

  const handleNavigate = (crecheId) => {
    navigate(`/searchlist/nursery/${crecheId}`);
  };

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
        {loaderData.structures.map((creche) => (
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
                  <div className="days-availability">
                    <p>Lundi: Disponible</p>
                  </div>
                  <div className="days-availability">
                    <p>Mardi: Disponible</p>
                  </div>
                  <div className="days-availability">
                    <p>Mercredi: Disponible</p>
                  </div>
                  <div className="days-availability">
                    <p>Jeudi: Disponible</p>
                  </div>
                  <div className="days-availability">
                    <p>Vendredi: Disponible</p>
                  </div>
                  <div className="days-availability">
                    <p>Samedi: Disponible</p>
                  </div>
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
        ))}
      </div>
      <NavProfil />
    </div>
  );
}

export default SearchList;
