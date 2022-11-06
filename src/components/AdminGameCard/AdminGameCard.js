import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import StateContext from "../../store";

const AdminGameCard = ({ gameData }) => {
  const state = useContext(StateContext);
  const [gameInfo, setGameInfo] = useState({ ...gameData });
  let localGameData = gameInfo;

  function save() {
    state.sendChanges(localGameData);
  }

  return (
    <Card style={{ width: "18rem", margin: "0% 5%" }}>
      <Card.Img variant="top" src={"images/" + gameData.image} />
      <Card.Body>
        <Card.Title>{gameData.name}</Card.Title>
        <details>
          <summary>Edit</summary>
          <label htmlFor="nameInput">Name:</label>
          <br />
          <input
            id="nameInput"
            className="w-100"
            value={gameInfo.name}
            onChange={(event) => {
              localGameData.name = event.target.value;
              setGameInfo({ ...localGameData });
            }}
          ></input>
          <br />
          <label htmlFor="descInput">Description:</label>
          <br />
          <input
            id="descInput"
            className="w-100"
            value={gameInfo.desc}
            onChange={(event) => {
              localGameData.desc = event.target.value;
              setGameInfo({ ...localGameData });
            }}
          ></input>
          <br />
          <label htmlFor="priceInput">Price:</label>
          <br />
          <input
            id="priceInput"
            className="w-100"
            value={gameInfo.price}
            onChange={(event) => {
              localGameData.price = event.target.value;
              setGameInfo({ ...localGameData });
            }}
          ></input>
          <br />
          <label htmlFor="imageInput">Image:</label>
          <br />
          <input
            id="imageInput"
            className="w-100"
            value={gameInfo.image}
            onChange={(event) => {
              localGameData.image = event.target.value;
              setGameInfo({ ...localGameData });
            }}
          ></input>
          <br />
          <br />
          <Button onClick={() => save()}>Save</Button>
        </details>
      </Card.Body>
    </Card>
  );
};

export default AdminGameCard;
