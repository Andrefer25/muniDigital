import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar";
import NavBar from "./navbar";
import "../../assets/css/styles.css";
import { CardReclamos, CardSalud, CardAsistenciaSocial, CardAccidentes, CardObras, CardAreaVerde } from "./cardInfo";

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
            <br />
            <Row>
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
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
