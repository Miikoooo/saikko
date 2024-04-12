import React, { useState } from "react";
import PlayerContext from "./PlayerContext";
import Form from "./Form";
import Regulars from "./Regulars";
import Footer from "./Footer";

function App() {
  const [players, setPlayers] = useState([]);
  const [regularPlayers, setRegularPlayers] = useState({
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
  });

  return (
    <div>
      <div className="hd1">
        <h1 className="Title">SAIKKO</h1>
      </div>
      <div>
        <PlayerContext.Provider
          value={{ players, setPlayers, regularPlayers, setRegularPlayers }}
        >
          <Form />
          <Regulars />
          <Footer />
        </PlayerContext.Provider>
      </div>
    </div>
  );
}

export default App;
