import React from "react";
import { Link } from "react-router-dom";
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
    <div>
      <Navbar>
        <NavbarCollapse>
          <Nav className="nav">
            <Nav.Link className="text-light bg-dark" href="/">
              Etusivu
            </Nav.Link>
            <Nav.Link className="text-light bg-dark" href="/recipes">
              Reseptit
            </Nav.Link>

            <Nav.Link className="text-light bg-dark" href="/MargitinRecipeForm">
              Lisää resepti
            </Nav.Link>

            <Nav.Link className="text-light bg-dark" href="/about">
              About
            </Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Header;
