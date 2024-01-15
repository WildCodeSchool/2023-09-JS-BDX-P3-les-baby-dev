import React, { useState } from "react";
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

export default function App() {
  const [colorOpen, setColorOpen] = useState(true);
  const [colorCollapse1, setColorCollapse1] = useState(true);
  const [colorCollapse2, setColorCollapse2] = useState(false);
  // const [color, setColor] = useState("primary");
  const [filter, setFilter] = useState("Tous");

  const data = [
    {
      id: 1,
      name: "Mat Doe",
      title: "Software engineer",
      status: "Accepté",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/8.jpg",
    },
    {
      id: 2,
      name: "Alex Ray",
      title: "Consultant",
      status: "Refusé",
      position: "Junior",
      img: "https://mdbootstrap.com/img/new/avatars/6.jpg",
    },
    {
      id: 3,
      name: "Kate Hunington",
      title: "Designer",
      status: "En attente",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/4.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      title: "Software engineer",
      status: "Accepté",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/5.jpg",
    },
    {
      id: 5,
      name: "Alex Ray",
      title: "Consultant",
      status: "Accepté",
      position: "Junior",
      img: "https://mdbootstrap.com/img/new/avatars/6.jpg",
    },
    {
      id: 6,
      name: "Kate Hunington",
      title: "Designer",
      status: "En attente",
      position: "Senior",
      img: "https://mdbootstrap.com/img/new/avatars/7.jpg",
    },
    // ... autres données
  ];

  const filteredData = data.filter((item) => {
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
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Position</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={item.img}
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
                <p className="fw-normal mb-1">{item.title}</p>
                <p className="text-muted mb-0">{item.department}</p>
              </td>
              {item.status === "Accepté" && (
                <MDBBadge color="success" pill>
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
              <td>Senior</td>
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
