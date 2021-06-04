import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { RiAlarmWarningFill, RiAddCircleFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { BsTools, BsFillExclamationCircleFill } from "react-icons/bs";
import { FaHandPaper, FaClipboardList, FaTree } from "react-icons/fa";
import { GiMiningHelmet } from "react-icons/gi";
import { AiFillPieChart } from "react-icons/ai";

import Logo from "./../../../assets/img/logo-muni.png";

const SideBar = (props) => {

  const [activeDashboard, setActiveDashboard] = useState(false);
  const [activeReclamos, setActiveReclamos] = useState(false);
  const [activeAsistencia, setActiveAsistencia] = useState(false);
  const [activeObra, setActiveObra] = useState(false);
  const [activeAccidentes, setActiveAccidentes] = useState(false);
  const [activeVerde, setActiveVerde] = useState(false);
  const [activeSalud, setActiveSalud] = useState(false);

  const handleCards = (value) => {
    props.reclamos(value);
    props.asistencia(value);
    props.obras(value);
    props.accidentes(value);
    props.verde(value);
    props.salud(value);
  }


  const disableOthers = () => {
    setActiveDashboard(false);
    setActiveReclamos(false);
    setActiveAsistencia(false);
    setActiveObra(false);
    setActiveAccidentes(false);
    setActiveVerde(false);
    setActiveSalud(false);
  }

  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block sidebar"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <div className="sidebarLogo">
            <img src={Logo} alt="logo" />
        </div>
        <Nav.Item onClick={() => {handleCards(!activeDashboard); disableOthers(); setActiveDashboard(!activeDashboard) }}>
          <div className={`sideBarItem dashboardPrinc ${activeDashboard? "sidebarDash":""}`}>
            <MdLocationOn className="sidebarMainIcon"/> Dashboard
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => {handleCards(false); disableOthers(); setActiveReclamos(!activeReclamos); props.reclamos(!activeReclamos) } }>
          <div className={`sideBarItem ${activeReclamos? "sidebarActive":""}`}>
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
        <Nav.Item onClick={() => {handleCards(false); disableOthers(); setActiveAsistencia(!activeAsistencia); props.asistencia(!activeAsistencia) } }>
          <div className={`sideBarItem ${activeAsistencia? "sidebarActive":""}`}>
              <div>
                Asistencia Social
              </div>
                <FaHandPaper className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => {handleCards(false); disableOthers(); setActiveObra(!activeObra); props.obras(!activeObra) } }>
          <div className={`sideBarItem ${activeObra? "sidebarActive":""}`}>
              <div>
                Obras
              </div>
                <GiMiningHelmet className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => {handleCards(false); disableOthers(); setActiveAccidentes(!activeAccidentes); props.accidentes(!activeAccidentes) } }>
          <div className={`sideBarItem ${activeAccidentes? "sidebarActive":""}`}>
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
        <Nav.Item onClick={() => {handleCards(false); disableOthers(); setActiveVerde(!activeVerde); props.verde(!activeVerde) } }>
          <div className={`sideBarItem ${activeVerde? "sidebarActive":""}`}>
              <div>
                Arbolado y Espacios Verdes
              </div>
                <FaTree className="sidebarIcon" />
          </div>
        </Nav.Item>
        <Nav.Item onClick={() => {handleCards(false); disableOthers(); setActiveSalud(!activeSalud); props.salud(!activeSalud) } }>
          <div className={`sideBarItem ${activeSalud? "sidebarActive":""}`}>
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