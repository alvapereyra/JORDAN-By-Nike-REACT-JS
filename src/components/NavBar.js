import React from "react";
import Container from "react-bootstrap/Container";
import foto from '../assets/img/logo.png'
import CartWidget from "./CartWidget";
import foto2 from '../assets/img/nike.png'
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../app/App.css'

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Link to="/"><img src={foto} alt="logo" className="logo responsive"/></Link>
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={{cursor:"pointer"}}>JORDAN by <img src={foto2} alt="nike"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/category/sneakers")} style={{cursor:"pointer"}}>Sneakers</Nav.Link>
            <Nav.Link onClick={() => navigate("/category/clothes")} style={{cursor:"pointer"}}>Clothes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
    
  );
};

export default NavBar;
