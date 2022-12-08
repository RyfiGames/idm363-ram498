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
    return "Game not found!";
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
            <img
              src={
                gameData.image.startsWith("http")
                  ? gameData.image
                  : "../images/" + gameData.image
              }
              className="w-100 rounded-5"
            />
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
                <Button onClick={() => addToCart()}>{addText}</Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamePage;
