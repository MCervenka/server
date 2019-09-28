import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jessicaLogo from './content/Jessica_Logo.png';
import jessicaLaky from './content/Jessica_Laky.png';

const textHeader = "Jessica Therapy System";
const textUvod = "Protože žádné nehty nejsou stejné, zákládá si značka Jessica na péči postavené na míru kondici každého nehtu. Již od r. 1969 se specializuje v manikúře na vývoj produktů na BIO a přírodní bázi.";
const textOdsek1 = "Produkty Jessica jsou 7-FREE (bez toulenu, formaldehydu, ftalátů, formaldehydové pryskyřice, kafru, atd) a splňují tak nejvyšší zdravotnícké nároky.";
const textOdsek2 = "Jessica System umožňuje všem lidem mít krásné, zdravé a pevné nehty";

const Jessica = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "10px" }}>
      <Row>
        <Col xs={12} md={3}>
          <img src={jessicaLaky} alt="jessicaLaky" id="jessicaLaky" width="100%" />

        </Col>
        <Col xs={12} md={6}>
          <h1 className="myFontHeader">
            {textHeader}
          </h1>
          <div className="myBodyText">
            <p></p>
            <p> {textUvod} </p>
            <p> {textOdsek1} </p>
            <p> {textOdsek2} </p>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img src={jessicaLogo} alt="jessicaLogo" id="jessicaLogo" width="100%" />
        </Col>
      </Row>
    </Container>

  );
};

export default Jessica;