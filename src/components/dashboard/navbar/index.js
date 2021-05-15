import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Button className="dashButton" variant="outline-info"><FaRegCalendarAlt className="dashIcon"/> Mensual</Button>
        <Button className="dashButton" variant="outline-info"><MdRemoveRedEye className="dashIcon"/> Intendente</Button>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="navItems active borderSection">EN <GoChevronDown className="navIcon" /></Nav.Link>
          <Nav.Link className="navItems borderSection">Módulos <GoChevronDown className="navIcon" /></Nav.Link>
          <Nav.Link className="navItems">Username</Nav.Link>
            <FaUserCircle className="userIcon" />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
