import "./App.css";
import bannerImg from "./homeBanner.jpeg";
import { useContext } from "react";
import StateContext from "./store";
import GameCard from "./components/GameCard/GameCard";

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
          backgroundSize: "contain",
        }}
      >
        big chungus
      </div>
      <h1 className="text-center fw-bold">Featured Games</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {state.featuredProducts.map((game) => (
          <GameCard gameData={game} key={game.id} />
        ))}
      </div>
    </>
  );
}

export default App;
