import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pShineLogo from './content/Pshine-logo.jpg';
import pShineImage from './content/p-shine.jpg';


const textHeader = "P.Shine manikúra";
const textUvod = "P.Shine manikúra je čistě přírodní technika úpravy nehtů, jejíž výrobky neobsahují žádné syntetické chemikálie a jsou založeny pouze na přírodní bázi.";
const textOdsek1 = "Obsahuje včelí vosk, mateří kašičku a křemičitou hlinku, která se těží v japonském moři.";
const textOdsek2 = "Technika P.Shine podporuje prokrvení a zdravý růst nehtů, jejích posílení a obohacení o vitamíny.";
const textOdsek3 = "Procedura se používa zejména proti třepení, lámání nehtů a významně se projevuje i na růstu a kvalitě celého nehtu.";
const textOdsek4 = "Nedoporučuje se používat na tenké, měkké nehty a po nehtovej modeláži.";

const Pshine = () => {
    return (
        <Container style={{ textAlign: "center", marginTop: "10px" }}>
            <Row>
                <Col xs={12} md={3}>
                    <img src={pShineImage} alt="pShineImage" id="pShineImage" width="100%" />
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
                        <p> {textOdsek3} </p>
                        <p> {textOdsek4} </p>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <img src={pShineLogo} alt="pShineLogo" id="pShineLogo" width="100%" />
                </Col>
            </Row>

        </Container>

    );
};

export default Pshine;