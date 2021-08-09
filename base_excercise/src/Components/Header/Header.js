import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Header.css";

const Header = () => {
  return (
    <Container>
      <Row xs={2}>
        <Col>
          <h2>Järventeiden reseptit</h2>
        </Col>

        <Col>
          <Navigate />
        </Col>
      </Row>
    </Container>
  );
};

const Navigate = () => {
  return (
    <Navbar>
      <NavbarCollapse>
        <Nav className="nav">
          <NavLink className="text-light bg-dark" to="/" exact>
            Etusivu--
          </NavLink>
          <NavLink className="text-light bg-dark" to="/recipes">
            Reseptit--
          </NavLink>

          <NavLink className="text-light bg-dark" to="/MargitinRecipeForm">
            Lisää resepti--
          </NavLink>

          <NavLink className="text-light bg-dark" to="/about">
            About
          </NavLink>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
