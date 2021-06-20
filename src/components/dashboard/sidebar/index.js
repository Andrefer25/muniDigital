import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { RiAlarmWarningFill, RiAddCircleFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { BsTools, BsFillExclamationCircleFill } from "react-icons/bs";
import { FaHandPaper, FaClipboardList, FaTree } from "react-icons/fa";
import { GiMiningHelmet } from "react-icons/gi";
import { AiFillPieChart } from "react-icons/ai";
import SidebarItem from "./sidebarItem";

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

  const changeSite = (active, setActive, propsFunc) => {
    handleCards(false);
    disableOthers();
    setActive(active);
    propsFunc(active);
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
        <SidebarItem 
          title="Reclamos - PQSRSD"
          active={activeReclamos}
          setActive={setActiveReclamos}
          changeSite={changeSite}
          prop={props.reclamos}
          Icon={BsFillExclamationCircleFill}
        />
        <SidebarItem 
          title="Tareas Programadas"
          active={false}
          setActive={false}
          changeSite={() => {}}
          prop={() => {}}
          Icon={BsTools}
        />
        <SidebarItem 
          title="Asistencia Social"
          active={activeAsistencia}
          setActive={setActiveAsistencia}
          changeSite={changeSite}
          prop={props.asistencia}
          Icon={FaHandPaper}
        />
        <SidebarItem 
          title="Obras"
          active={activeObra}
          setActive={setActiveObra}
          changeSite={changeSite}
          prop={props.obras}
          Icon={GiMiningHelmet}
        />
        <SidebarItem 
          title="Inseguridad y Accidentes"
          active={activeAccidentes}
          setActive={setActiveAccidentes}
          changeSite={changeSite}
          prop={props.accidentes}
          Icon={RiAlarmWarningFill}
        />
        <SidebarItem 
          title="Inspecciones"
          active={false}
          setActive={false}
          changeSite={() => {}}
          prop={() => {}}
          Icon={FaClipboardList}
        />
        <SidebarItem 
          title="Arbolado y Espacios Verdes"
          active={activeVerde}
          setActive={setActiveVerde}
          changeSite={changeSite}
          prop={props.verde}
          Icon={FaTree}
        />
        <SidebarItem 
          title="Salud"
          active={activeSalud}
          setActive={setActiveSalud}
          changeSite={changeSite}
          prop={props.salud}
          Icon={RiAddCircleFill}
        />
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