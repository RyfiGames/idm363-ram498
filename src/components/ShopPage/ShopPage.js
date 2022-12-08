import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import StateContext from "../../store";
import GameCard from "../GameCard/GameCard";

const ShopPage = () => {
  const state = useContext(StateContext);

  const domItems = state.products.map((game) => (
    <GameCard gameData={game} key={game.id} />
  ));

  return (
    <>
      <h1 className="text-center fw-bold mt-3 mb-5">
        Our Board Game Collection
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1rem",
          justifyContent: "center",
          alignItems: "stretch",
          minHeight: "76vh",
        }}
        className="mb-3"
      >
        {domItems}
      </div>
    </>
  );
};

ShopPage.propTypes = {};

ShopPage.defaultProps = {};

export default ShopPage;
