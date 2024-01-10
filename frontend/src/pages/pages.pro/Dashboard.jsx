import React, { useState } from "react";
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  const [colorOpen, setColorOpen] = useState(true);
  const [colorCollapse1, setColorCollapse1] = useState(true);
  const [colorCollapse2, setColorCollapse2] = useState(false);
  const [color, setColor] = useState("primary");

  const changeColor = () => setColor(color);

  return (
    <>
      <div className="my-3">
        <MDBBtn>Primary</MDBBtn>
        <MDBBtn onClick={() => changeColor("primary")} color="secondary">
          Secondary
        </MDBBtn>
        <MDBBtn onClick={() => changeColor("warning")} color="warning">
          Warning
        </MDBBtn>
        <MDBBtn onClick={() => changeColor("danger")} color="danger">
          Danger
        </MDBBtn>
        <MDBBtn onClick={() => changeColor("success")} color="success">
          Success
        </MDBBtn>
        <MDBBtn onClick={() => changeColor("info")} color="info">
          Info
        </MDBBtn>
        <MDBBtn onClick={() => changeColor("dark")} color="dark">
          Dark
        </MDBBtn>
        <MDBBtn onClick={() => changeColor("light")} color="light">
          Light
        </MDBBtn>
      </div>

      <MDBSideNav
        open={colorOpen}
        color={color}
        absolute
        getOpenState={(e) => setColorOpen(e)}
      >
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink>
              <MDBIcon far icon="smile" className="fa-fw me-3" />
              Link 1
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={colorCollapse1}
              onClick={() => setColorCollapse1(!colorCollapse1)}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              Category 1
            </MDBSideNavLink>
            <MDBSideNavCollapse open={colorCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink
              icon="angle-down"
              shouldBeExpanded={colorCollapse2}
              onClick={() => setColorCollapse2(!colorCollapse2)}
            >
              <MDBIcon fas icon="grin" className="fa-fw me-3" />
              Category 2
            </MDBSideNavLink>
            <MDBSideNavCollapse open={colorCollapse2}>
              <MDBSideNavLink>Link 4</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

      <div style={{ padding: "20px" }} className="text-center">
        <MDBBtn onClick={() => setColorOpen(!colorOpen)}>
          <MDBIcon fas icon="bars" />
        </MDBBtn>
      </div>
    </>
  );
}
