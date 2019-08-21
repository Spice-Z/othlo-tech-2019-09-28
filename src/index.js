import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Card } from "./card";

function App() {
  return (
    <div className="App">
      <Card />
      <div className="buttons">
        <button className="button-nope">Nope</button>
        <button className="button-like">Like</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
