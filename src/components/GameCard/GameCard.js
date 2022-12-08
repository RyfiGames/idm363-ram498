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
        <Card.Text>
          <strong>${gameData.price / 100}</strong>
        </Card.Text>
        <div style={{ height: "28px" }}></div>
        <Button
          variant="secondary"
          style={{ position: "absolute", bottom: "16px" }}
          onClick={() => addToCart()}
        >
          {addText}
        </Button>
        <LinkContainer
          to={`/game/${gameData.id}`}
          style={{ position: "absolute", bottom: "16px", right: "16px" }}
        >
          <Button variant="secondary">More Info</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
