import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <img
        className="image"
        src="https://images.unsplash.com/photo-1563170423-741125661ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        alt="human"
      />
      <p>
        Yugo Spice Ogura<span>(23)</span>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
