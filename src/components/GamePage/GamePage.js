import Card from "react-bootstrap/Card";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import StateContext from "../../store";
import { useParams } from "react-router";

const GamePage = () => {
  const state = useContext(StateContext);
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    setGameData(state.products.find((prod) => prod.id === id));
  }, [state]);

  function addToCart() {
    state.addCartItem(gameData.id);
  }

  if (!gameData && state.products.length > 0) {
    return "Game not found!";
  }
  if (!gameData && state.products.length == 0) {
    return "Loading...";
  }

  return (
    <>
      <h1 className="text-center fw-bold mt-3 mb-5">{gameData.name}</h1>
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
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </>
    // <Card style={{ width: "18rem", margin: "0% 5%" }}>
    //   <Card.Img variant="top" src={
    //       gameData.image.startsWith("http")
    //         ? gameData.image
    //         : "images/" + gameData.image
    //     } />
    //   <Card.Body>
    //     <Card.Title>{gameData.name}</Card.Title>
    //     <Card.Text>{gameData.desc}</Card.Text>
    //     <Card.Text>${gameData.price / 100}</Card.Text>
    //     <Button onClick={() => addToCart()}>Add to cart</Button>
    //   </Card.Body>
    // </Card>
  );
};

export default GamePage;
