import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
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
    <Card style={{ width: "18rem", margin: "0% 5%" }}>
      <Card.Img variant="top" src={"images/" + gameData.image} />
      <Card.Body>
        <Card.Title>{gameData.name}</Card.Title>
        <Card.Text>{gameData.desc}</Card.Text>
        <Card.Text>${gameData.price / 100}</Card.Text>
        <Button onClick={() => addToCart()}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default GamePage;
