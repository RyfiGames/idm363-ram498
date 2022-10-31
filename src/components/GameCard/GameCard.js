import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import StateContext from "../../store";

const GameCard = ({ gameData }) => {
  const state = useContext(StateContext);

  function addToCart() {
    state.addCartItem(gameData.id);
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

export default GameCard;