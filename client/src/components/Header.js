import React, { Component } from "react";
import { connect } from "react-redux";
import Payments from "./Payments";
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./content/manicure.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return (
                <DropdownButton title="Login" id="dropdown-basic-button primary">
                    <Dropdown.Item href="/auth/google">Login with Google</Dropdown.Item>
                    <Dropdown.Item href="#action/3.2">Login with Facebook</Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">Login with Apple Id</Dropdown.Item>
                </DropdownButton>
                );
            default:
                return [
                        <div style={{margin: "0px 10px", fontSize: "30px"}} key="1">Kredity: {this.props.auth.credits}</div>,
                        <div key="2">
                            <Payments></Payments>
                            <Button variant="primary" href="/api/logout">Logout</Button>
                            <div className="d-block" style={{textAlign:"center"}}>
                                V&iacute;tejte {this.props.auth.userName}
                            </div>
                        </div>

                ];
        }
    }

    render() {
        return(
            <div>
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
                />
                <Navbar bg="light" expand="md">
                <LinkContainer exact to="/">
                    <Navbar.Brand><Image src={Logo} width="50" height="50"/></Navbar.Brand>
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

                        <NavDropdown title="Služby" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">PShine</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ShellLack</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">In&eacute;</NavDropdown.Item>

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

export default connect(mapStateToProps)(Header);