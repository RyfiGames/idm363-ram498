import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import logo from "../../logo.webp";

const ShopPage = () => {
  const items = ["test", "jim", "joe", "squirt"];
  const domItems = items.map((v) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{v}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));
  return <div>{domItems}</div>;
};

ShopPage.propTypes = {};

ShopPage.defaultProps = {};

export default ShopPage;