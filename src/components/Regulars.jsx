import React, { useContext, useState, useEffect } from "react";
import PlayerContext from "./PlayerContext";
import { Tooltip } from "react-tooltip";

function Regulars() {
  const regular_players = {
    Kaiser: 14,
    Noah: 11,
    Kaya: 13,
    Nyxaseq: 15,
    Egetz: 18,
    Narwhal: 9,
    Lemis: 5,
    Lars: 10,
    Leon: 10,
    soul: 16,
    Sology: 17,
  };

  const { players, setPlayers, regularPlayers } = useContext(PlayerContext);
  const [showRegulars, setShowRegulars] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [newName, setNewName] = useState("");
  const [newElo, setNewElo] = useState("");

  useEffect(() => {}, [regularPlayers]);

  function handlePlayerClick(playerName) {
    setEditingPlayer(playerName);
    setNewName(playerName);
    setNewElo(regular_players[playerName]);
  }

  function handleSaveClick() {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === editingPlayer
          ? { name: newName, elo: parseInt(newElo) }
          : player
      )
    );
    setEditingPlayer(null);
  }
  function handleAddToFormClick(event, playerName) {
    event.stopPropagation();
    if (!players.some((player) => player.name === playerName)) {
      setPlayers((prevPlayers) => [
        ...prevPlayers,
        { name: playerName, elo: regular_players[playerName] },
      ]);
    }
  }

  return (
    <div className="reg">
      <button
        className="button-18"
        onClick={() => setShowRegulars(!showRegulars)}
      >
        Regulars
      </button>
      {showRegulars && (
        <ul className="reg-ul">
          {Object.keys(regularPlayers).map((player) => (
            <li
              data-tooltip-id="tooltips-edit"
              data-tooltip-content="Edit regular"
              data-tooltip-place="left"
              className="reg-li"
              key={player}
              onClick={() => handlePlayerClick(player)}
            >
              <Tooltip id="tooltips-edit" />
              {player}, {regularPlayers[player]}
              <button
                data-tooltip-id="tooltips-regular"
                data-tooltip-content="Add regular"
                data-tooltip-place="right"
                className="reg-btn"
                onClick={(event) => handleAddToFormClick(event, player)}
              >
                ➕
              </button>
              <Tooltip id="tooltips-regular" />
            </li>
          ))}
        </ul>
      )}
      {editingPlayer && (
        <div className="reg-edit">
          <input
            className="reg-input"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            className="reg-input"
            value={newElo}
            onChange={(e) => setNewElo(e.target.value)}
          />
          <div>
            <button
              data-tooltip-id="tooltips-save"
              data-tooltip-content="Save changes"
              data-tooltip-place="right"
              className="reg-btn"
              onClick={handleSaveClick}
            >
              ✅
            </button>
            <Tooltip id="tooltips-save" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Regulars;
