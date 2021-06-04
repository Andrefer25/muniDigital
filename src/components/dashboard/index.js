import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar";
import NavBar from "./navbar";
import "../../assets/css/styles.css";
import "leaflet/dist/leaflet.css";
import { CardReclamos, CardSalud, CardAsistenciaSocial, CardAccidentes, CardAreaVerde, CardObras } from "./cardInfo";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


const Dashboard = () => {
  const [reclamos, setReclamos] = useState(false);
  const [salud, setSalud] = useState(false);
  const [asistencia, setAsistencia] = useState(false);
  const [accidentes, setAccidentes] = useState(false);
  const [obras, setObras] = useState(false);
  const [verde, setVerde] = useState(false);

  return (
    <>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar 
            reclamos={setReclamos}
            salud={setSalud}
            asistencia={setAsistencia}
            accidentes={setAccidentes}
            obras={setObras}
            verde={setVerde}
          />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <NavBar />
          <div className="mapSection">
            <div className="mapBox">
              <Map center={[-37.1134, -56.8570]} zoom={15}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Row className="dashboardRow">
                  <Col md={4}>
                    <div className="cardColumn">
                      <CardReclamos visible={reclamos} close={setReclamos} />
                      <CardSalud visible={salud} close={setSalud} />
                      <CardAsistenciaSocial visible={asistencia} close={setAsistencia} />
                      <CardAccidentes visible={accidentes} close={setAccidentes}/>
                    </div>
                  </Col>
                  <Col >
                    <div className="">
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="cardColumn">
                      <CardAreaVerde visible={verde} close={setVerde} />
                      <CardObras visible={obras} close={setObras} />
                    </div>
                  </Col>
                </Row>
              </Map>
            </div>
            <br />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
