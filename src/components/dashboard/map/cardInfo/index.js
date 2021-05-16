import React from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";


export const CardReclamos = () => {

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <h4>Reclamos</h4>
                </Modal.Header>
                <Modal.Body>
                    <Row className="cardRow">
                        <Col md={4} className="centeredCol redCol" >
                            <h3>2656</h3>
                            <p>Totales</p>
                        </Col>
                        <Col md={4} className="centeredCol borderedCol yellowCol" >
                            <h3>395</h3>
                            <p>Pendientes</p>
                        </Col>
                        <Col md={4} className="centeredCol greenCol " >
                            <h3>2648</h3>
                            <p>Resueltos</p>
                        </Col>

                    </Row>

                    <Row>
                    <Col md={4} className="centeredCol">
                        100%
                       
                        
                    </Col>
                    <Col md={4} className="centeredCol">
                        24%
                        
                    </Col>
                    <Col md={4} className="centeredCol">
                        85%
                        
                    </Col>



                    </Row>
                    
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}

const CardTareas = () => {

    return (
        <div>
            card component
        </div>
    );
}

const CardAsistenciaSocial = () => {

    return (
        <div>
            card component
        </div>
    );
}



