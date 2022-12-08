import "./App.css";
import bannerImg from "./banner2.jpeg";
import { useContext } from "react";
import StateContext from "./store";
import GameCard from "./components/GameCard/GameCard";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  const state = useContext(StateContext);

  function addToCart() {
    state.addCartItem(1);
  }

  return (
    <>
      <div
        style={{
          height: "400px",
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textShadow:
            "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
        }}
        className="text-center"
      >
        <h1 className="fw-bold" style={{ color: "white", fontSize: "10vh" }}>
          Welcome to
        </h1>
        <h1 className="fw-bold" style={{ color: "white", fontSize: "10vh" }}>
          Bargain Board Games
        </h1>
      </div>
      <h1 className="text-center fw-bold mt-3 mb-5">Featured Games</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {state.featuredProducts.map((game) => (
          <GameCard gameData={game} key={game.id} />
        ))}
      </div>
      <div
        className="m-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <LinkContainer to="/shop" style={{ width: "25rem", fontSize: "30px" }}>
          <Button variant="secondary">
            Shop All Games{" "}
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

export default App;
