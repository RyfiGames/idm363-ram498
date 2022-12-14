import Card from "react-bootstrap/Card";
import {
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import StateContext from "../../store";
import { useParams } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

const GamePage = () => {
  const state = useContext(StateContext);
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);
  const [addText, setAddText] = useState("Add to Cart");

  function addToCart() {
    state.addCartItem(gameData.id);

    setAddText("Added");
    setTimeout(() => {
      setAddText("Add to Cart");
    }, 1000);
  }
  useEffect(() => {
    setGameData(state.products.find((prod) => prod.id === id));
  }, [state]);

  if (!gameData && state.products.length > 0) {
    return (
      <>
        <h1 className="text-center fw-bold mt-3 mb-5">Game not found!</h1>
        <h3 className="text-center fw-bold mt-3 mb-5">
          We're not sure what you were looking for...
        </h3>
        <div
          className="m-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <LinkContainer
            to="/shop"
            style={{ width: "25rem", fontSize: "30px" }}
          >
            <Button variant="secondary">
              Back to Shop{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Button>
          </LinkContainer>
        </div>
      </>
    );
  }
  if (!gameData && state.products.length == 0) {
    return "Loading...";
  }

  function formatMoney(value) {
    return "$" + parseFloat(value / 100).toFixed(2);
  }

  return (
    <>
      <div className="mt-3 mb-5"></div>
      <Container>
        <Row style={{ minHeight: "76vh" }}>
          <Col sm={8}>
            <div className="d-flex justify-content-center">
              <img
                src={
                  gameData.image.startsWith("http")
                    ? gameData.image
                    : "../images/" + gameData.image
                }
                className="rounded-5"
                style={{ width: "75%" }}
              />
            </div>
            <p
              className="mt-4"
              style={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
              }}
            >
              {gameData.longDesc}
            </p>
            <div className="mt-5 mb-5"></div>
          </Col>
          <Col sm={4}>
            <ListGroup className="mx-4">
              <ListGroupItem>
                <h1 className="text-center fw-bold mt-3 mb-3">
                  {gameData.name}
                </h1>
              </ListGroupItem>
              <ListGroupItem>
                <h5>{gameData.desc}</h5>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <h5>Year Published</h5>
                <h5>{gameData.year}</h5>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <h5>Players</h5>
                <h5>
                  {gameData.minPlayers} - {gameData.maxPlayers}
                </h5>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <h5>BGG Rank</h5>
                <h5>{gameData.rank}</h5>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <h5>Rating</h5>
                <h5>{gameData.rating}</h5>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <h5>Complexity Rating</h5>
                <h5>{gameData.complexity}</h5>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between">
                <h3>
                  <strong>{formatMoney(gameData.price)}</strong>
                </h3>
                <Button variant="secondary" onClick={() => addToCart()}>
                  {addText}
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamePage;
