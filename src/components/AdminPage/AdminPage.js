import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import AdminGameCard from "../AdminGameCard/AdminGameCard";
import { useContext } from "react";
import StateContext from "../../store";
import { v4 as uuid } from "uuid";

const AdminPage = () => {
  const state = useContext(StateContext);

  const domItems = state.products.map((game) => (
    <AdminGameCard gameData={game} key={game.id} />
  ));

  domItems.push(
    <AdminGameCard
      gameData={{
        id: uuid(),
        name: "New Game",
        desc: "Description",
        price: 1000,
        image: "newicon.png",
      }}
      key={"new"}
    />
  );

  return (
    <>
      <h1 className="text-center fw-bold mt-3 mb-5">Admin Panel</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "2rem",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "76vh",
        }}
      >
        {domItems}
      </div>
    </>
  );
};

AdminPage.propTypes = {};

AdminPage.defaultProps = {};

export default AdminPage;
