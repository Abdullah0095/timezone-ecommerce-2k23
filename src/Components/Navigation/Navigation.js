import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="pt-3">
          <Navbar.Brand href="#home">Time Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="p-3 text-dark fs-5 fw-bold" href="#home">Home</Nav.Link>
              <Nav.Link className="p-3 text-dark fs-5 fw-bold" href="#link">Shop</Nav.Link>
              <Nav.Link className="p-3 text-dark fs-5 fw-bold" href="#link">About</Nav.Link>

              <NavDropdown className="p-2 text-dark fs-5 fw-bold" title="Latest" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">new arrival</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">watches</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="p-3 text-dark fs-5 fw-bold" href="#link">Blog</Nav.Link>

              <NavDropdown className="p-2 text-dark fs-5 fw-bold" title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Element</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Confirmation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Product Checkout</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="p-3 text-dark fs-5 fw-bold" href="#link">Link</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
