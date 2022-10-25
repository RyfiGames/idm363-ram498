import "./App.css";
import { Header } from "./components";
import bannerImg from "./homeBanner.jpeg";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import StateContext from "./store";

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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Button onClick={() => addToCart()}>Add to cart</Button>
    </>
  );
}

export default App;
