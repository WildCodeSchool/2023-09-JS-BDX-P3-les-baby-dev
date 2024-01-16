import React, { useState, useEffect } from "react";
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
import Babyplace from "../../assets/Babyplace.svg";
import { useUser } from "../../context/UserContext";

export default function App() {
  const [colorOpen, setColorOpen] = useState(true);
  const [colorCollapse1, setColorCollapse1] = useState(true);
  const [colorCollapse2, setColorCollapse2] = useState(false);
  // const [color, setColor] = useState("primary");
  const [filter, setFilter] = useState("Tous");
  const [resaData, setResaData] = useState([]);
  const { logout } = useUser();

  /* const data = [
    {
      id: 1,
      name: "Mat Doe",
      dayResa: "Lundi 17 mars",
      startHour: "9h",
      finishHour: "17h",
      price: "15euros",
      status: "Accepté",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
    },
    {
      id: 2,
      name: "Alex Ray",
      dayResa: "Mardi 18 mars",
      startHour: "9h",
      finishHour: "17h",
      price: "15euros",
      status: "Refusé",
      position: "Junior",
      img: "https://mdbootstrap.com/img/new/avatars/6.jpg",
    },
    {
      id: 3,
      name: "Kate Hunington",
      dayResa: "Mercredi 19 mars",
      startHour: "9h",
      finishHour: "17h",
      price: "15euros",
      status: "En attente",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/4.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      dayResa: "Vendredi 19 mars",
      startHour: "9h",
      finishHour: "17h",
      price: "15euros",
      status: "Accepté",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/5.jpg",
    },
    {
      id: 5,
      name: "Alex Ray",
      dayResa: "Mardi 03 avril",
      startHour: "9h",
      finishHour: "17h",
      price: "15euros",
      status: "Accepté",
      position: "Junior",
      img: "https://mdbootstrap.com/img/new/avatars/6.jpg",
    },
    {
      id: 6,
      name: "Kate Hunington",
      dayResa: "Mercredi 04 avril",
      startHour: "9h",
      finishHour: "17h",
      price: "15euros",
      status: "En attente",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/7.jpg",
    },
    // ... autres données
  ]; */

  useEffect(() => {
    const fetchResaData = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/reservations");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setResaData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResaData();
  }, []);

  const filteredData = resaData.filter((item) => {
    if (filter === "Tous") {
      return true;
    }
    return item.status === filter;
  });

  return (
    <>
      <div className="filters">
        <MDBBtn onClick={() => setFilter("Tous")}>Tous</MDBBtn>
        <MDBBtn onClick={() => setFilter("En attente")} color="warning">
          En attente
        </MDBBtn>
        <MDBBtn onClick={() => setFilter("Accepté")} color="success">
          Accepté
        </MDBBtn>
        <MDBBtn onClick={() => setFilter("Refusé")} color="danger">
          Refusé
        </MDBBtn>
      </div>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Jour de réservation</th>
            <th scope="col">Heure d'arrivée</th>
            <th scope="col">Heure de sortie</th>
            <th scope="col">Tarifs</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={item.picture}
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{item.name}</p>
                    <p className="text-muted mb-0">{item.email}</p>
                  </div>
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
                <h2 className="fw-normal mb-1">{item.price}€/heure</h2>
              </td>
              {item.status === "Accepté" && (
                <MDBBadge className="badge" color="success" pill>
                  {item.status}
                </MDBBadge>
              )}
              {item.status === "Refusé" && (
                <MDBBadge color="danger" pill>
                  {item.status}
                </MDBBadge>
              )}
              {item.status === "En attente" && (
                <MDBBadge color="warning" pill>
                  {item.status}
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
                  <MDBSideNavLink>Modifier ma structure</MDBSideNavLink>
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
