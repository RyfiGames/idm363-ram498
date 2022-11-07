import React from "react";
import PropTypes from "prop-types";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const CartPage = () => {
  return (
    <>
      <h1 className="text-center fw-bold mt-3 mb-5">Your Cart</h1>
      <Container>
        <Row style={{ minHeight: "76vh" }}>
          <Col sm={1}></Col>
          <Col sm={7}>
            <ListGroup>
              <ListGroupItem>You have no items in your cart.</ListGroupItem>
              <ListGroupItem>You have no items in your cart.</ListGroupItem>
              <ListGroupItem>You have no items in your cart.</ListGroupItem>
              <ListGroupItem>You have no items in your cart.</ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={3}>
            <ListGroup>
              <ListGroupItem>You have no items in your cart.</ListGroupItem>
              <ListGroupItem>You have no items in your cart.</ListGroupItem>
              <ListGroupItem>You have no items in your cart.</ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </>
  );
};

CartPage.propTypes = {};

CartPage.defaultProps = {};

export default CartPage;
