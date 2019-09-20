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
    renderContent(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return (<Button variant="primary" href="/auth/google"> {textLogin} </Button>
                {/*<DropdownButton title="Přihlásit se" id="dropdown-basic-button primary">
                    <Dropdown.Item href="/auth/google">Prihlasit se cez google ucet</Dropdown.Item>
                    <Dropdown.Item href="#action/3.2">Login with Facebook</Dropdown.Item>
                    <Dropdown.Item href="#action/3.3">Login with Apple Id</Dropdown.Item>
                </DropdownButton>*/}
                );
            default:
                return [
                        <div className="d-block" key="1" style={{marginRight: "5px"}}>
                            V&iacute;tejte {this.props.auth.userName} 
                        </div>,
                        <div key="2">
                            <Button variant="primary" href="/api/logout">Odhlasit se</Button>
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
                <Navbar bg="light" expand="md" collapseOnSelect>
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
                        <LinkContainer exact to="/comments">
                               <Nav.Link> Koment&aacute;ře </Nav.Link>  
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

export default connect(mapStateToProps, actions)(Header);