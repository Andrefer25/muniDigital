import React from "react";
import { Nav } from "react-bootstrap";
import { RiAlarmWarningFill, RiAddCircleFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { BsTools, BsFillExclamationCircleFill } from "react-icons/bs";
import { FaHandPaper, FaClipboardList, FaTree } from "react-icons/fa";
import { GiMiningHelmet } from "react-icons/gi";
import { AiFillPieChart } from "react-icons/ai"

const SideBar = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <div className="sidebarLogo">
            MUNIDIGITAL
        </div>
        <Nav.Item>
          <div className="sideBarItem sidebarDash">
            <MdLocationOn className="sidebarMainIcon"/> Dashboard
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => props.reclamos(true)}>
          <div className="sideBarItem">
              <div>
                Reclamos - PQSRSD
              </div>
                <BsFillExclamationCircleFill className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="sideBarItem">
              <div>
                Tareas Programadas
              </div>
                <BsTools className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => props.asistencia(true)}>
          <div className="sideBarItem">
              <div>
                Asistencia Social
              </div>
                <FaHandPaper className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => props.obras(true)}>
          <div className="sideBarItem">
              <div>
                Obras
              </div>
                <GiMiningHelmet className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => props.accidentes(true)}>
          <div className="sideBarItem">
              <div>
                Inseguridad y Accidentes
              </div>
                <RiAlarmWarningFill className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="sideBarItem">
              <div>
                Inspecciones
              </div>
                <FaClipboardList className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => props.verde(true)}>
          <div className="sideBarItem">
              <div>
                Arbolado y Espacios Verdes
              </div>
                <FaTree className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => props.salud(true)}>
          <div className="sideBarItem">
              <div>
                Salud
              </div>
                <RiAddCircleFill className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="sideBarItem black">
              <div>
                Percepcion Ciudadana
              </div>
                <AiFillPieChart className="sidebarIcon" />
          </div>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default SideBar;