import React, { useContext } from "react";
import PropTypes from "prop-types";
import logo from "../../logo.webp";
import cart from "../../cart.png";

import Container from "react-bootstrap/Container";
import { Nav, Navbar, Badge } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import StateContext from "../../store";

const Header = () => {
  const state = useContext(StateContext);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-middle"
              style={{ borderRadius: 50 }}
            />{" "}
            <span className="h3 align-middle">Bargain Board Games</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <span className="h4 align-middle">Home</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link>
                <span className="h4 align-middle">Shop</span>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link>
                <span className="h4 align-middle">Admin</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <span className="h5 align-middle">Cart</span>{" "}
                <img
                  src={cart}
                  width="30"
                  height="30"
                  className="align-middle"
                  style={{ filter: "invert(1)" }}
                />{" "}
                <Badge bg="secondary">{state.cartItems.length}</Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
