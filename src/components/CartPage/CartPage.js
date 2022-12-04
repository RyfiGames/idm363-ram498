import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import StateContext from "../../store";

const CartPage = () => {
  const state = useContext(StateContext);
  const [subtotal, setSubtotal] = useState(0);
  const [cartDom, setCartDom] = useState(<></>);

  useEffect(() => {
    const gameDatas = state.cartItems.map((gameID) =>
      state.products.find((prod) => prod.id == gameID)
    );

    setCartDom(
      gameDatas.map((gameData, index) => (
        <ListGroupItem key={"cart item " + index}>
          <Container>
            <Row>
              <Col sm={4}>
                <img
                  src={
                    gameData.image.startsWith("http")
                      ? gameData.image
                      : "images/" + gameData.image
                  }
                  style={{ width: "8rem" }}
                />
              </Col>
              <Col>
                <h3>{gameData.name}</h3>
                <p>{formatMoney(gameData.price)}</p>
              </Col>
              <Col sm={1}>
                <Button onClick={() => state.removeCartItem(gameData.id)}>
                  X
                </Button>
              </Col>
            </Row>
          </Container>
        </ListGroupItem>
      ))
    );

    if (gameDatas.length === 0) {
      setCartDom(
        <ListGroupItem key="no cart">
          You have no items in your cart.
        </ListGroupItem>
      );
    }

    setSubtotal(
      gameDatas.reduce(
        (running, game) => Number(running) + Number(game.price),
        0
      )
    );
  }, [state]);

  const clickCheckout = () => {
    alert("Congrats! You have checked out!");
    state.emptyCart();
  };

  function formatMoney(value) {
    return "$" + parseFloat(value / 100).toFixed(2);
  }

  return (
    <>
      <h1 className="text-center fw-bold mt-3 mb-5">Your Cart</h1>
      <Container className="mb-3">
        <Row style={{ minHeight: "76vh" }}>
          <Col sm={8}>
            <ListGroup>{cartDom}</ListGroup>
          </Col>
          <Col sm={4}>
            <ListGroup>
              <ListGroupItem className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <strong>{formatMoney(subtotal)}</strong>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <span>Tax:</span>
                <strong>{formatMoney(subtotal * 0.06)}</strong>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <span>
                  <h2>Total:</h2>
                </span>
                <strong>
                  <h2>{formatMoney(subtotal * 1.06)}</h2>
                </strong>
              </ListGroupItem>
            </ListGroup>
            {state.cartItems.length > 0 ? (
              <Button className="mt-2 w-100" onClick={clickCheckout}>
                <h3>Checkout</h3>
              </Button>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

CartPage.propTypes = {};

CartPage.defaultProps = {};

export default CartPage;
