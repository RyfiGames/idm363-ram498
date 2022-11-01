import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import StateContext from "../../store";

const AdminGameCard = ({ gameData }) => {
  const state = useContext(StateContext);
  let localGameData = { ...gameData };
  const [gameInfo, setGameInfo] = useState(localGameData);

  function save() {}

  return (
    <Card style={{ width: "18rem", margin: "0% 5%" }}>
      <Card.Img variant="top" src={"images/" + gameData.image} />
      <Card.Body>
        <Card.Title>{gameData.name}</Card.Title>
        <details>
          <input
            value={gameInfo.name}
            onChange={(event) => {
              localGameData.name = event.target.value;
            }}
          ></input>
          <Button onClick={() => save()}>Save</Button>
        </details>
      </Card.Body>
    </Card>
  );
};

export default AdminGameCard;
