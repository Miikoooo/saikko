import React, { useState, useContext } from "react";
import PlayerContext from "./PlayerContext";
import Generate from "./Generate";
import { Tooltip } from "react-tooltip";

function Form() {
  const { players, setPlayers, setRegularPlayers } = useContext(PlayerContext);
  const [playerName, setPlayerName] = useState("");
  const [playerElo, setPlayerElo] = useState("");

  function addP(event) {
    event.preventDefault();
    if (playerName && playerElo) {
      const player = {
        name: playerName,
        elo: parseInt(playerElo),
      };
      setPlayers((prevSpieler) => [...prevSpieler, player]);
      setPlayerName("");
      setPlayerElo("");
    }
  }

  function removePlayer(name) {
    setPlayers(players.filter((player) => player.name !== name));
  }

  function handleAddToRegulars(event) {
    event.preventDefault();
    if (playerName && playerElo) {
      setRegularPlayers((prevRegularPlayers) => {
        const newRegularPlayers = {
          ...prevRegularPlayers,
          [playerName]: parseInt(playerElo),
        };
        return newRegularPlayers;
      });
      setPlayerName("");
      setPlayerElo("");
    }
  }

  return (
    <div className="form">
      <form className="player" onSubmit={addP}>
        <div className="start">
          <div className="Ranks">
            <input
              className="input"
              type="text"
              name="player"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            ></input>
            <select
              className="sel"
              value={playerElo}
              onChange={(e) => setPlayerElo(e.target.value)}
            >
              <option value="10"> Iron 4</option>
              <option value="13"> Iron 3</option>
              <option value="16"> Iron 2</option>
              <option value="19"> Iron 1</option>
              <option value="20"> Bronze 4</option>
              <option value="23"> Bronze 3</option>
              <option value="26"> Bronze 2</option>
              <option value="29"> Bronze 1</option>
              <option value="30"> Silver 4</option>
              <option value="33"> Silver 3</option>
              <option value="36"> Silver 2</option>
              <option value="39"> Silver 1</option>
              <option value="40"> Gold 4</option>
              <option value="43"> Gold 3</option>
              <option value="46"> Gold 2</option>
              <option value="49"> Gold 1</option>
              <option value="50"> Platinum 4</option>
              <option value="53"> Platinum 3</option>
              <option value="56"> Platinum 2</option>
              <option value="59"> Platinum 1</option>
              <option value="60"> Emerald 4</option>
              <option value="63"> Emerald 3</option>
              <option value="66"> Emerald 2</option>
              <option value="69"> Emerald 1</option>
              <option value="70"> Diamond 4</option>
              <option value="73"> Diamond 3</option>
              <option value="76"> Diamond 2</option>
              <option value="79"> Diamond 1</option>
              <option value="80"> Master</option>
              <option value="85"> High Master</option>
              <option value="90"> Grandmaster</option>
              <option value="95"> High Grandmaster</option>
              <option value="100"> Challenger</option>
            </select>
          </div>

          <input
            data-tooltip-id="tooltips-player"
            data-tooltip-content="Add player"
            data-tooltip-place="left"
            className="button-add"
            type="submit"
            value="➕"
          />
          <Tooltip id="tooltips-player" />

          <button
            data-tooltip-id="tooltips-regular"
            data-tooltip-content="Add regular"
            data-tooltip-place="right"
            className="button-regular"
            onClick={handleAddToRegulars}
          >
            ⛺
          </button>
          <Tooltip id="tooltips-regular" />
        </div>
      </form>
      <ul className="allPlayers">
        {players.map((player, index) => (
          <li id="pl" key={index} onClick={() => removePlayer(player.name)}>
            {player.name}, {player.elo}
          </li>
        ))}
      </ul>

      <div className="generate">
        <Generate
          players={players}
          key={players.map((player) => player.name).join(",")}
        />
      </div>
    </div>
  );
}

export default Form;
