import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar";
import NavBar from "./navbar";
import "../../assets/css/styles.css";
import "leaflet/dist/leaflet.css";
import { CardReclamos, CardSalud, CardAsistenciaSocial, CardAccidentes, CardAreaVerde, CardObras } from "./cardInfo";
import { Map, TileLayer } from 'react-leaflet';

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
        <Col xl={2} lg={3}id="sidebar-wrapper">
          <Sidebar 
            reclamos={setReclamos}
            salud={setSalud}
            asistencia={setAsistencia}
            accidentes={setAccidentes}
            obras={setObras}
            verde={setVerde}
          />
        </Col>
        <Col xl={10} lg={9} id="page-content-wrapper">
          <NavBar />
          <div className="mapSection">
            <div className="mapBox">
              <Map center={[-37.1134, -56.8570]} zoom={16} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"
                />
              </Map>
              <div className="absCard">
                <CardReclamos visible={reclamos} close={setReclamos} />
              </div>
              <div className="absCard">
                <CardSalud visible={salud} close={setSalud} />
              </div>
              <div className="absCard">
                <CardAsistenciaSocial visible={asistencia} close={setAsistencia} />
              </div>
              <div className="absCard">
                <CardAccidentes visible={accidentes} close={setAccidentes}/>
              </div>
              <div className="absCard">
                <CardAreaVerde visible={verde} close={setVerde} />
              </div>
              <div className="absCard">
                <CardObras visible={obras} close={setObras} />
              </div>
            </div>
            <br />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
