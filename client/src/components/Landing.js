import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import salonImg from './content/salon.jpg';
import phone from './content/mobile-phone.png';
import email from './content/email.png';
import banner from './content/Pink Flowers Twitter Header.png'

const textUvod = "Jmenuji se Katka Červenková a budu pečovat o Vaše přírodní nehty dle Vašich potřeb a přání";
const textOdsek1 = "Péče o ruce a nehty mě fascinovala už jako malou holku. Více jsem se začala věnovat tomuto oboru přibližně před 12 lety, kdy jsem zkoušela různé materiály a zdobení.";
const textOdsek2 = "Už tehdy jsem pracovala s technikou gelových nehtů a v roce 2014 jsem absolvovala kurz akrylovej modeláže. Dnes jsou to už 3 roky, co se specializuji na léčbu přírodních nehtů, zničených po nehtové modeláži nebo neodborně provedenou manikúrou. Mým cílem je řešit tyto problémy komplexně, přes vitamíny, stravu a následnou domácí péči o nehty.";
const textOdsek3 = "Neváhejte se na mě obrátit se svými potřebami s nehtama.";
const textOdsek4 = "Moje motto: Krásne nehty = Zdravé nehty";
const Landing = () => {
    return (
        <Container style={{ textAlign: "center", marginTop: "10px" }}>
            <Row>
                <Col xs={12} md={6} lg={7} >
                    <img src={banner} alt="banner" id="banner" width="100%" />
                    <div className="myBodyText">
                        <p></p>
                        <p> {textUvod} </p>
                        <p> {textOdsek1} </p>
                        <p> {textOdsek2} </p>
                        <p>
                            Pracuji se značkama:
                            <br /> CND (USA) <br /> Cuccio Spa (It&aacute;lie)<br />Jessica System (USA)
                        </p>
                        <p> {textOdsek3} </p>
                        <p>
                            {textOdsek4}
                        </p>
                    </div>
                    <div className="contact">
                        <p>
                            <img src={phone} alt="phone" id="phone" /> +420 777 215 510
                        </p>
                        <p>
                            <img src={email} alt="email" id="email" /> brezovska.katarina@gmail.com
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={5}>
                    <img src={salonImg} alt="salonImg" id="salonImg" />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.3281322800217!2d14.433072515098747!3d50.06141617942358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b947ba87ba151%3A0xae1339b82811468e!2s%C5%BDateck%C3%BDch%201213%2F18%2C%20140%2000%20Praha%204-Nusle!5e0!3m2!1scs!2scz!4v1569575074400!5m2!1scs!2scz" width="300" height="250" frameBorder="0" style={{ border: 0, marginTop: "5px" }} allowFullScreen="" title="google maps"></iframe>
                </Col>
            </Row>

        </Container>
    );
};

export default Landing;