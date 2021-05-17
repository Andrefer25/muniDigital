import React from "react";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children)}
        </ul>
      </div>
    );
  }
);

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
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <Nav.Link className="navItems borderSection">
              Módulos <GoChevronDown className="navIcon" />
            </Nav.Link>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
              <Dropdown.Header>Módulos Internos</Dropdown.Header>
              <Dropdown.Item eventKey="1">MuniGestion</Dropdown.Item>
              <Dropdown.Item eventKey="2">MuniObras</Dropdown.Item>
              <Dropdown.Item eventKey="3">MuniArbolado</Dropdown.Item>
              <Dropdown.Item eventKey="1">MuniIoT</Dropdown.Item>
              <Dropdown.Item eventKey="1">MuniInspección</Dropdown.Item>
              <Dropdown.Item eventKey="1">MuniSeguridad</Dropdown.Item>
              <Dropdown.Item eventKey="1">MuniSocial</Dropdown.Item>
              <Dropdown.Header>Módulos Externos</Dropdown.Header>
              <Dropdown.Item eventKey="1">MuniTurnero</Dropdown.Item>
              <Dropdown.Item eventKey="2">MuniEspectáculos</Dropdown.Item>
              <Dropdown.Item eventKey="3">MuniCiudadano</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link className="navItems">Username</Nav.Link>
          <FaUserCircle className="userIcon" />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
