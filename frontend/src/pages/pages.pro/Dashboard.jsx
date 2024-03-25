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
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { useLoaderData, useNavigate } from "react-router-dom";
import Babyplace from "../../assets/Babyplace.svg";
import { useUser } from "../../context/UserContext";

export default function App() {
  const [colorOpen, setColorOpen] = useState(true);
  const [colorCollapse1, setColorCollapse1] = useState(true);
  const [filter, setFilter] = useState("Tous");
  const { logout, apiService } = useUser();
  const [myResa, setMyResa] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const [selectedResaId, setSelectedResaId] = useState(null);
  const toggleOpen = (id) => {
    setSelectedResaId(id);
    setBasicModal(!basicModal);
  };

  const { basicHelloModal, setBasicHelloModal, user, toggleHelloOpen } =
    useUser();

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
  }, [myResa]);

  const putResa = async (id) => {
    try {
      await apiService.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/reservation/${id}`,
        { status: false }
      );
      setBasicModal(false);
    } catch (error) {
      console.error(error);
    }
  };

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
                    <div key={p.id} className="ms-0">
                      {item.parent_id === p.id && (
                        <>
                          <div className="fw-bold mb-0">
                            Parent: {p.parentFName} {p.parentName}
                          </div>
                          <div className="text-muted mb-0">
                            Enfant: {item?.childFName}
                          </div>
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
                <MDBBadge className="badge" color="danger" pill>
                  Refusé
                </MDBBadge>
              )}

              <td>
                <MDBBtn rounded size="sm" onClick={() => toggleOpen(item.id)}>
                  Annuler
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
                  <MDBSideNavLink onClick={() => navigate("/structure/step/1")}>
                    Modifier ma structure
                  </MDBSideNavLink>
                  <MDBSideNavLink onClick={logout}>Déconnextion</MDBSideNavLink>
                </MDBSideNavCollapse>
              </MDBSideNavItem>
            </MDBSideNavMenu>
          </div>
        </MDBSideNav>
      </div>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Voulez-vous modifier votre reservation ?
              </MDBModalTitle>
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn onClick={toggleOpen}>Fermer</MDBBtn>
              <MDBBtn
                // color="secondary"
                onClick={() => putResa(selectedResaId)}
              >
                Annuler
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <MDBModal
        open={basicHelloModal}
        setOpen={setBasicHelloModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Content de vous revoir {user?.email}
              </MDBModalTitle>
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn onClick={toggleHelloOpen}>Fermer</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <div style={{ padding: "20px" }} className="text-center">
        <MDBBtn onClick={() => setColorOpen(!colorOpen)}>
          <MDBIcon fas icon="bars" />
        </MDBBtn>
      </div>
    </>
  );
}
