import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar";
import NavBar from "./navbar";
import "../../assets/css/styles.css";
import Map from "./map";

const Dashboard = (props) => {
  return (
    <>
        <Row>
            <Col xs={2} id="sidebar-wrapper">
            <Sidebar />
            </Col>
            <Col xs={10} id="page-content-wrapper">
            <NavBar />
            {/* Componente del mapa y las cards */}
            <Map/>
            </Col>
        </Row>
    </>
  );
};

export default Dashboard;