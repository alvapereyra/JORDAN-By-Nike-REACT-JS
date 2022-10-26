import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import foto from '../assets/img/logo.png'
import '../app/App.css'
import CartWidget from "./CartWidget";
import foto2 from '../assets/img/nike.png'

const NavBar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <img src={foto} alt="logo" className="logo"/>
      <Container>
        <Navbar.Brand href="#home">JORDAN by <img src={foto2} alt="nike"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sneakers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Clothes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
    
  );
};

export default NavBar;
