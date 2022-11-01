import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import AdminGameCard from "../AdminGameCard/AdminGameCard";
import { useContext } from "react";
import StateContext from "../../store";

const AdminPage = () => {
  const state = useContext(StateContext);

  const domItems = state.products.map((game) => (
    <AdminGameCard gameData={game} key={game.id} />
  ));

  return (
    <>
      <h1 className="text-center fw-bold mt-3 mb-5">Admin Panel</h1>
      <div
        style={{
          display: "flex",
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
