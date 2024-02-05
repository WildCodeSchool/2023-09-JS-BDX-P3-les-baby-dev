import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBBtn,
  MDBIcon,
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useLoaderData, useNavigate } from "react-router-dom";
import Babyplace from "../../assets/Babyplace.svg";
import { useUser } from "../../context/UserContext";

export default function App() {
  const [colorOpen, setColorOpen] = useState(true);
  const [colorCollapse1, setColorCollapse1] = useState(true);
  const [colorCollapse2, setColorCollapse2] = useState(false);
  const [filter, setFilter] = useState("Tous");
  const { logout, apiService } = useUser();
  const [myResa, setMyResa] = useState([]);

  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const parent = loaderData?.preloadOneParent;
  // const reservation = loaderData?.reservation;
  const structureId = loaderData?.preloadUserStructure.data.id;
  const structure = loaderData?.preloadUserStructure.data;

  const getMyResa = async (id) => {
    try {
      const response = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservations/${id}`
      );
      const myResaData = response.data;
      return setMyResa(myResaData);
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  useEffect(() => {
    getMyResa(structureId);
  }, []);

  const filteredData = myResa.filter((item) => {
    if (filter === "Tous") {
      return true;
    }
    if (filter === "Accepté") {
      return item.status;
    }
    return !item.status;
  });

  return (
    <>
      <div className="header-dash">
        <h3>Bienvenue {structure?.name ?? ""}</h3>
        <div className="filters">
          <MDBBtn onClick={() => setFilter("Tous")} className="btn-tous">
            Tous
          </MDBBtn>
          <MDBBtn
            onClick={() => setFilter("En attente")}
            className="btn-attente"
          >
            En attente
          </MDBBtn>
          <MDBBtn onClick={() => setFilter("Accepté")} className="btn-accepte">
            Accepté
          </MDBBtn>
          <MDBBtn onClick={() => setFilter("Refusé")} className="btn-refuse">
            Refusé
          </MDBBtn>
        </div>
      </div>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr className="titreInfos">
            <th scope="col">Parent/Enfant</th>
            <th scope="col">Jour de réservation</th>
            <th scope="col">Heure d'arrivée</th>
            <th scope="col">Heure de sortie</th>
            <th scope="col">Message</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  {parent.map((p) => (
                    <div key={parent.id} className="ms-0">
                      {item.parent_id === p.id && (
                        <>
                          <p className="fw-bold mb-0">
                            Parent: {p.parentName} {p.parentFName}
                          </p>
                          <p className="text-muted mb-0">
                            Enfant: {p?.parentName ?? "Juju"}
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{item.dayResa}</p>
                <p className="text-muted mb-0">{item.department}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{item.startHour}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{item.finishHour}</p>
              </td>
              <td>
                <p className="fw-normal mb-1">{item.message}</p>
              </td>
              {item.status ? (
                <MDBBadge className="badge" color="success" pill>
                  Accepté
                </MDBBadge>
              ) : (
                <MDBBadge color="danger" pill>
                  Refusé
                </MDBBadge>
              )}

              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <div className="sideNav_container">
        <MDBSideNav
          open={colorOpen}
          absolute
          getOpenState={(e) => setColorOpen(e)}
        >
          <div className="sideMenu">
            <MDBSideNavMenu>
              <MDBSideNavItem>
                <div className="logo">
                  <img src={Babyplace} alt="" />
                  <h4>PRO</h4>
                </div>
                <MDBSideNavLink
                  icon="angle-down"
                  shouldBeExpanded={colorCollapse1}
                  onClick={() => setColorCollapse1(!colorCollapse1)}
                >
                  <MDBIcon fas icon="grin" className="fa-fw me-3" />
                  Mes reservations
                </MDBSideNavLink>
                <MDBSideNavCollapse open={colorCollapse1}>
                  <MDBSideNavLink>Liste des réservations</MDBSideNavLink>
                  <MDBSideNavLink>Ajouter une place</MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
              <MDBSideNavItem>
                <MDBSideNavLink
                  icon="angle-down"
                  shouldBeExpanded={colorCollapse2}
                  onClick={() => setColorCollapse2(!colorCollapse2)}
                >
                  <MDBIcon fas icon="grin" className="fa-fw me-3" />
                  Administration
                </MDBSideNavLink>
                <MDBSideNavCollapse open={colorCollapse2}>
                  <MDBSideNavLink onClick={() => navigate("/structure")}>
                    Modifier ma structure
                  </MDBSideNavLink>
                  <MDBSideNavLink>Paramètre</MDBSideNavLink>
                  <MDBSideNavLink onClick={logout}>Déconnextion</MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
            </MDBSideNavMenu>
          </div>
        </MDBSideNav>
      </div>

      <div style={{ padding: "20px" }} className="text-center">
        <MDBBtn onClick={() => setColorOpen(!colorOpen)}>
          <MDBIcon fas icon="bars" />
        </MDBBtn>
      </div>
    </>
  );
}
