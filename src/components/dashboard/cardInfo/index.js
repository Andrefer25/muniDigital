import React from "react";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { BsFillExclamationCircleFill, BsTools } from "react-icons/bs";
import { FaHandPaper, FaTree } from "react-icons/fa";
import { RiAlarmWarningFill, RiAddCircleFill } from "react-icons/ri";
import { GiMiningHelmet } from "react-icons/gi";
import CountUp from 'react-countup';
import chart from "./../../../assets/img/chart.png";

export const CardReclamos = ({ visible, close }) => {
  return (
    <div>
        <Modal.Dialog className={visible? 'animated animatedFadeInUp fadeInUp':'fadeOut'}>
          <Modal.Header closeButton onHide={() => close(false)}>
            <BsFillExclamationCircleFill className="headerIcon" />
            <h6 className="headerTitle">RECLAMOS - PQSRSD</h6>
            <div className="dateRange">Nov 2020</div>
          </Modal.Header>
          <Modal.Body>
            <Row className="cardRow">
              <Col md={4} className="centeredCol redCol">
                { visible && 
                  <h3><CountUp end={2656} duration={1} /></h3>
                }
                <p>Totales</p>
              </Col>
              <Col md={4} className="centeredCol borderedCol yellowCol">
                { visible && 
                  <h3><CountUp end={395} duration={1} /></h3>
                }
                <p>Pendientes</p>
              </Col>
              <Col md={4} className="centeredCol greenCol ">
                { visible && 
                  <h3><CountUp end={2648} duration={1} /></h3>
                }
                <p>Resueltos</p>
              </Col>
            </Row>

            <Row>
              <Col md={4} className="centeredCol">
                <div className="percent">100%</div>
              </Col>
              <Col md={4} className="centeredCol">
                <div className="percent">24%</div>
              </Col>
              <Col md={4} className="centeredCol">
                <div className="percent">85%</div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
    </div>
  );
};

export const CardTareas = ({ visible, close }) => {
  return (
    <div>
        <Modal.Dialog className={visible? 'animated animatedFadeInUp fadeInUp':'fadeOut'}>
          <Modal.Header closeButton onHide={() => close(false)}>
            <BsTools className="headerIcon" />
            <h6 className="headerTitle">TAREAS PROGRAMADAS</h6>
          </Modal.Header>
          <Modal.Body>
            <Row className="cardRow">
              <Col md={4} className="centeredCol redCol">
                { visible && 
                  <h3><CountUp end={2656} duration={1} /></h3>
                }
                <p>Totales</p>
              </Col>
              <Col md={4} className="centeredCol borderedCol yellowCol">
                { visible && 
                  <h3><CountUp end={395} duration={1} /></h3>
                }
                <p>Pendientes</p>
              </Col>
              <Col md={4} className="centeredCol greenCol ">
                { visible && 
                  <h3><CountUp end={2648} duration={1} /></h3>
                }
                <p>Resueltos</p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
    </div>
  );
};

export const CardSalud = ({ visible, close }) => {
  return (
    <div>
        <Modal.Dialog className={visible? 'animated animatedFadeInUp fadeInUp':'fadeOut'}>
          <Modal.Header closeButton onHide={() => close(false)}>
            <RiAddCircleFill className="headerIcon" />
            <h6 className="headerTitle">SALUD</h6>
          </Modal.Header>
          <Modal.Body>
            <Row className="cardRow">
              <Col md={4} className="centeredCol redCol borderRight">
                <div className="subtitle">Controles locales</div>
                { visible && 
                  <h3><CountUp end={194} duration={1} /></h3>
                }
                <p>Focos Dengue</p>
              </Col>
              <Col md={4} className="centeredCol redCol">
                <div className="subtitle">Controles Covid</div>
                { visible && 
                  <h3><CountUp end={98} duration={1} /></h3>
                }
                <p>Confirmados</p>
              </Col>
              <Col md={4} className="centeredCol greenCol">
                <div className="subtitle">Controles Covid</div>
                { visible && 
                  <h3><CountUp end={24} duration={1} /></h3>
                }
                <p>Vacunados</p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
    </div>
  );
};

export const CardAsistenciaSocial = ({ visible, close }) => {
  return (
    <div>
        <Modal.Dialog className={visible? 'animated animatedFadeInUp fadeInUp':'fadeOut'}>
          <Modal.Header closeButton onHide={() => close(false)}>
            <FaHandPaper className="headerIcon" />
            <h6 className="headerTitle">ASISTENCIA SOCIAL</h6>
          </Modal.Header>
          <Modal.Body>
            <Row className="cardRow">
              <Col md={4} className="centeredCol redCol">
                { visible && 
                  <h3><CountUp end={3519} duration={1} /></h3>
                }
                <p>Solicitudes</p>
              </Col>
              <Col md={4} className="centeredCol borderedCol greenCol">
                { visible && 
                  <h3><CountUp end={3347} duration={1} /></h3>
                }
                <p>Entregadas</p>
              </Col>
              <Col md={4} className="centeredCol greenCol ">
                { visible && 
                  <h3><CountUp end={6694} duration={1} /></h3>
                }
                <p>Ciudadanos Beneficiados</p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
    </div>
  );
};

export const CardAccidentes = ({ visible, close }) => {
  return (
    <div>
        <Modal.Dialog className={visible? 'animated animatedFadeInUp fadeInUp':'fadeOut'}>
          <Modal.Header closeButton onHide={() => close(false)}>
            <RiAlarmWarningFill className="headerIcon" />
            <h6 className="headerTitle">INSEGURIDAD Y ACCIDENTES</h6>
          </Modal.Header>
          <Modal.Body>
            <Row className="cardRow">
              <Col md={4} className="centeredCol">
                { visible && 
                  <h3><CountUp end={3026} duration={1} /></h3>
                }
                <p>Reportes Inseguridad</p>
              </Col>
              <Col md={4} className="centeredCol borderedCol redCol">
                { visible && 
                  <h3><CountUp end={124} duration={1} /></h3>
                }
                <p>Accidentes</p>
              </Col>
              <Col md={4} className="centeredCol yellowCol ">
                { visible && 
                  <h3><CountUp end={57} duration={1} /></h3>
                }
                <p>Derivacion a Hospital</p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
    </div>
  );
}

export const CardObras = ({ visible, close }) => {
  return (
    <div>
        <Modal.Dialog className={visible? 'animated animatedFadeInUp fadeInUp':'fadeOut'}>
          <Modal.Header closeButton onHide={() => close(false)}>
            <GiMiningHelmet className="headerIcon" />
            <h6 className="headerTitle">OBRAS</h6>
          </Modal.Header>
          <Modal.Body>
            <Row className="cardRow">
              <Col md={4} className="centeredCol borderRight">
                { visible && 
                  <h3 className="presupuesto"><CountUp end={3104519676} duration={1} /></h3>
                }
                <p>Presupuesto</p>
              </Col>
              <Col className="centeredCol redCol">
                { visible && 
                  <h3><CountUp end={250} duration={1} /></h3>
                }
                <p>Pendientes</p>
              </Col>
              <Col className="centeredCol yellowCol">
                { visible && 
                  <h3><CountUp end={2084} duration={1} /></h3>
                }
                <p>Frentes de Obra</p>
              </Col>
              <Col className="centeredCol greenCol">
                { visible && 
                  <h3><CountUp end={29} duration={1} />%</h3>
                }
                <p>Finalizadas</p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
    </div>
  )
}

export const CardAreaVerde = ({ visible, close }) => {
  return (
    <div>
        <Modal.Dialog className={visible? 'animated animatedFadeInUp fadeInUp':'fadeOut'}>
          <Modal.Header closeButton onHide={() => close(false)}>
            <FaTree className="headerIcon" />
            <h6 className="headerTitle">ESPACIOS VERDES</h6>
          </Modal.Header>
          <Modal.Body>
            <Row className="cardRow">
              <Col className="centeredCol yellowCol">
                <img src={chart} alt="chart"/>
              </Col>
              <Col className="centeredCol">
                <Row className="chartRow">
                  <Col md={3}>
                    <div className="greenLine"></div>
                  </Col>
                  <Col md={9}>
                    <p className="percentChart moreSpace">52% Buen estado</p>
                    <p className="infoChart">Sin Reclamos</p>
                  </Col>
                </Row>
                <Row className="chartRow">
                  <Col md={3}>
                    <div className="yellowLine"></div>
                  </Col>
                  <Col md={9}>
                    <p className="percentChart">20% En proceso</p>
                    <p className="infoChart"><strong>78</strong> Reparaciones</p>
                    <p className="infoChart">en progreso</p>
                  </Col>
                </Row>
                <Row className="chartRow">
                  <Col md={3}>
                    <div className="redLine"></div>
                  </Col>
                  <Col md={9}>
                    <p className="percentChart">52% Mal estado</p>
                    <p className="infoChart"><strong>22</strong> Reclamos</p>
                    <p className="infoChart">repartidos</p>
                  </Col>
                </Row>
                <Row className="chartRow">
                  <Col md={3}>
                    <FaTree className="chartIcon"/>
                  </Col>
                  <Col md={9}>
                  { visible && 
                    <p className="percentChart chartValue"><CountUp end={3500} duration={1} /></p>
                  }
                    <p className="infoChart moreInfoSpace">Nuevas Plantaciones</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
    </div>
  )
}