import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

import "./index.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Button className="dashButton" variant="outline-info">
          <FaRegCalendarAlt className="dashIcon" /> Mensual
        </Button>
        <Button className="dashButton" variant="outline-info">
          <MdRemoveRedEye className="dashIcon" /> Intendente
        </Button>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="navItems active borderSection">
            EN <GoChevronDown className="navIcon" />
          </Nav.Link>
          <NavDropdown title="Módulos" id="basic-nav-dropdown" style={{marginLeft:"1em"}}>
              <NavDropdown.Header>Módulos Internos</NavDropdown.Header>
              <NavDropdown.Item eventKey="1">MuniGestion</NavDropdown.Item>
              <NavDropdown.Item eventKey="2">MuniObras</NavDropdown.Item>
              <NavDropdown.Item eventKey="3">MuniArbolado</NavDropdown.Item>
              <NavDropdown.Item eventKey="1">MuniIoT</NavDropdown.Item>
              <NavDropdown.Item eventKey="1">MuniInspección</NavDropdown.Item>
              <NavDropdown.Item eventKey="1">MuniSeguridad</NavDropdown.Item>
              <NavDropdown.Item eventKey="1">MuniSocial</NavDropdown.Item>
              <NavDropdown.Header>Módulos Externos</NavDropdown.Header>
              <NavDropdown.Item eventKey="1">MuniTurnero</NavDropdown.Item>
              <NavDropdown.Item eventKey="2">MuniEspectáculos</NavDropdown.Item>
              <NavDropdown.Item eventKey="3">MuniCiudadano</NavDropdown.Item>
              <NavDropdown title="MuniPersonalizable" drop="right" id="basic-nav-dropdown" >
                <NavDropdown.Item eventKey="1">MuniGestion</NavDropdown.Item>
                <NavDropdown.Item eventKey="2">MuniObras</NavDropdown.Item>
                <NavDropdown.Item eventKey="3">MuniArbolado</NavDropdown.Item>
                <NavDropdown.Item eventKey="1">MuniIoT</NavDropdown.Item>
              </NavDropdown>
          </NavDropdown>
          <GoChevronDown className="navIcon dropIcon" />
          <Nav.Link className="navItems borderSectionRight">Username</Nav.Link>
          <FaUserCircle className="userIcon" />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
