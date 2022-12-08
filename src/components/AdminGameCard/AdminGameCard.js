import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import StateContext from "../../store";

const AdminGameCard = ({ gameData }) => {
  const state = useContext(StateContext);
  const [gameInfo, setGameInfo] = useState({ ...gameData });
  const [showModal, setShowModal] = useState(false);
  let localGameData = gameInfo;

  function save() {
    state.sendChanges(localGameData);
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
          <Button
            onClick={() => {
              setGameInfo({ ...gameData });
              setShowModal(true);
            }}
          >
            Edit
          </Button>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
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
