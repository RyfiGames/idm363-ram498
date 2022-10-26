import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { data } from "../../data.service";

const ShopPage = () => {
  const domItems = data.products.map(({ name, desc, image }) => (
    <Card style={{ width: "18rem", margin: "5%" }}>
      <Card.Img variant="top" src={"images/" + image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{domItems}</div>
  );
};

ShopPage.propTypes = {};

ShopPage.defaultProps = {};

export default ShopPage;
