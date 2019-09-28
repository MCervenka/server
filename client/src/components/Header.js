import React, { Component } from "react";
import { connect } from "react-redux";
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./content/manicure.png";
//import DropdownButton from "react-bootstrap/DropdownButton";
//import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import * as actions from "../actions";

const textLogin = "Přihlásit se";

class Header extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (<Button variant="primary" href="/auth/google"> {textLogin} </Button>
                );
            default:
                return [
                    <div className="d-block" key="1" style={{ marginRight: "5px" }}>
                        V&iacute;tejte {this.props.auth.userName}
                    </div>,
                    <div key="2">
                        <Button variant="primary" href="/api/logout">Odhl&aacute;sit se</Button>
                    </div>

                ];
        }
    }

    render() {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                    collapseOnSelect
                />
                <Navbar bg="light" expand="md" collapseOnSelect>
                    <LinkContainer exact to="/">
                        <Navbar.Brand><Image src={Logo} width="50" height="50" /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer exact to="/gallery">
                                <Nav.Link> Gal&eacute;ria</Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/appointment">
                                <Nav.Link> Objedn&aacute;vkov&yacute; kalend&aacute;ř </Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/comments">
                                <Nav.Link> Koment&aacute;ře </Nav.Link>
                            </LinkContainer>

                            <NavDropdown title="Služby" id="basic-nav-dropdown">
                                <LinkContainer exact to="/pshine">
                                    <NavDropdown.Item>P.Shine</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to="/cndshellac">
                                    <NavDropdown.Item>CND Shellac</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer exact to="/jessica">
                                    <NavDropdown.Item>Jessica nail therapy</NavDropdown.Item>
                                </LinkContainer>


                            </NavDropdown>
                        </Nav>
                        {this.renderContent()}

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Header);