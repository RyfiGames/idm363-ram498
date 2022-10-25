import "./App.css";
import { Header } from "./components";
import bannerImg from "./homeBanner.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import StateContext from "./store";
import { getFeaturedGames } from "./data.service";

function App() {
  const state = useContext(StateContext);

  function addToCart() {
    state.addItem(1);
    // state.cartItems.push(1);
    // state.itemCount++;
  }

  return (
    <>
      <div
        style={{
          height: "400px",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "contain",
        }}
      >
        big chungus
      </div>
      <h1 className="text-center fw-bold">Featured Games</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {getFeaturedGames().map(({ name, desc, image }) => (
          <Card style={{ width: "18rem", margin: "5%" }}>
            <Card.Img variant="top" src={"images/" + image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Button onClick={() => addToCart()}>Add to cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
