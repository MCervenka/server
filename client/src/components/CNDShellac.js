import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cndShellacImg from './content/shellac-laky.jpg';
import cndShellacLogo from './content/CND logo.jpg'

const textHeader = "CND Shellac";
const textUvod = "Revoluce v lakování přírodních nehtů";
const textOdsek1 = "CND Shellac kombinuje lehkost laku, vysoký lesk a dlouhotrvajíci nošení bez odchlipování a praskání. Intenzívní barva vydrží až 3 týdny. Pomoci CND Shellac-u budou vaše přírodní nehty posílené a vzhledem přirozené.";
const textOdsek2 = "CND Shellac se nanáší jako klasický lak, vytvrzuje se v UV-lampě a odstraňuje se speciálními odstraňovacími polštářky - žádné pilování a broušení, bez poškození přírodních nehtů.";
const textOdsek3 = "Přípravek na ostranění obsahuje lanolin a makadamový olej, vitamin E, tudíž je nehet i jeho okolí po odstranění vyživován. Také je důležitá následná domácí péče pomocí nehtového olejíčku CND Solar Oil.";
const textOdsek4 = "Odstranění netrvá déle než 15 minut."

const CNDShellac = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "10px" }}>
      <Row>
        <Col xs={12} md={3}>
          <img src={cndShellacImg} alt="pShineImage" id="pShineImage" width="100%" />
        </Col>
        <Col xs={12} md={6}>
          <h1 className="myFontHeader">
            {textHeader}
          </h1>
          <div className="myBodyText">
            <p></p>
            <h4>{textUvod} </h4>
            <p> {textOdsek1} </p>
            <p> {textOdsek2} </p>
            <p> {textOdsek3} </p>
            <p> {textOdsek4} </p>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img src={cndShellacLogo} alt="pShineImage" id="pShineImage" width="100%" />
        </Col>
      </Row>

    </Container>

  );
};

export default CNDShellac;