import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import StateContext from "../../store";
import { LinkContainer } from "react-router-bootstrap";

const GameCard = ({ gameData }) => {
  const state = useContext(StateContext);
  const [addText, setAddText] = useState("Add to Cart");

  function addToCart() {
    state.addCartItem(gameData.id);

    setAddText("Added");
    setTimeout(() => {
      setAddText("Add to Cart");
    }, 1000);
  }

  return (
    <Card style={{ width: "18rem", margin: "0% 10px" }}>
      <Card.Img
        variant="top"
        src={
          gameData.image.startsWith("http")
            ? gameData.image
            : "images/" + gameData.image
        }
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{gameData.name}</Card.Title>
        <Card.Text>{gameData.desc}</Card.Text>
        <Card.Text>${gameData.price / 100}</Card.Text>
        <div className="d-flex justify-content-between">
          <LinkContainer to={`/game/${gameData.id}`}>
            <Button>More Info</Button>
          </LinkContainer>
          <Button onClick={() => addToCart()}>{addText}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
