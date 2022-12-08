import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import StateContext from "../../store";
import { LinkContainer } from "react-router-bootstrap";

const AdminGameCard = ({ gameData, isNew }) => {
  const state = useContext(StateContext);
  const [gameInfo, setGameInfo] = useState({ ...gameData });
  const [showModal, setShowModal] = useState(false);
  let localGameData = gameInfo;

  function save() {
    state.sendChanges(localGameData);
  }

  function gamePageButton() {
    if (isNew === "true") {
      return <></>;
    } else {
      return (
        <LinkContainer to={`/game/${gameData.id}`}>
          <Button variant="secondary">Game Page</Button>
        </LinkContainer>
      );
    }
  }

  return (
    <>
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
          <div className="d-flex justify-content-between">
            <Button
              variant="secondary"
              onClick={() => {
                setGameInfo({ ...gameData });
                setShowModal(true);
              }}
            >
              Edit
            </Button>
            {gamePageButton()}
          </div>
        </Card.Body>
      </Card>
      <Modal show={showModal}>
        <Modal.Header>
          <h3>Edit Game Data</h3>
        </Modal.Header>
        <Modal.Body>
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
          <label htmlFor="descInput">Short Description:</label>
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
          <details>
            <summary>Edit More Details</summary>
            <label htmlFor="longDescInput">Long Description:</label>
            <br />
            <textarea
              id="longDescInput"
              className="w-100"
              value={gameInfo.longDesc}
              onChange={(event) => {
                localGameData.longDesc = event.target.value;
                setGameInfo({ ...localGameData });
              }}
            ></textarea>
            <br />
            <label htmlFor="yearInput">Year Published:</label>
            <br />
            <input
              id="yearInput"
              className="w-100"
              value={gameInfo.year}
              onChange={(event) => {
                localGameData.year = event.target.value;
                setGameInfo({ ...localGameData });
              }}
            ></input>
            <br />
            <label htmlFor="minPlayersInput">Min Players:</label>
            <br />
            <input
              id="minPlayersInput"
              className="w-100"
              value={gameInfo.minPlayers}
              onChange={(event) => {
                localGameData.minPlayers = event.target.value;
                setGameInfo({ ...localGameData });
              }}
            ></input>
            <br />
            <label htmlFor="maxPlayersInput">Max Players:</label>
            <br />
            <input
              id="maxPlayersInput"
              className="w-100"
              value={gameInfo.maxPlayers}
              onChange={(event) => {
                localGameData.maxPlayers = event.target.value;
                setGameInfo({ ...localGameData });
              }}
            ></input>
            <br />
            <label htmlFor="rankInput">BGG Rank:</label>
            <br />
            <input
              id="rankInput"
              className="w-100"
              value={gameInfo.rank}
              onChange={(event) => {
                localGameData.rank = event.target.value;
                setGameInfo({ ...localGameData });
              }}
            ></input>
            <br />
            <label htmlFor="ratingInput">Rating:</label>
            <br />
            <input
              id="ratingInput"
              className="w-100"
              value={gameInfo.rating}
              onChange={(event) => {
                localGameData.rating = event.target.value;
                setGameInfo({ ...localGameData });
              }}
            ></input>
            <br />
            <label htmlFor="complexityInput">Complexity Rating:</label>
            <br />
            <input
              id="complexityInput"
              className="w-100"
              value={gameInfo.complexity}
              onChange={(event) => {
                localGameData.complexity = event.target.value;
                setGameInfo({ ...localGameData });
              }}
            ></input>
            <br />
          </details>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              save();
              setShowModal(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminGameCard;
