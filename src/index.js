import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Card } from "./card";

function App() {
  const users = [
    {
      name: "Yugo Spice Ogura",
      age: 23,
      image:
        "https://images.unsplash.com/photo-1563170423-741125661ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    },
    {
      name: "Yugo BOXP Ogura",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1565385320868-2d6aa499b93d?ixlib=rb-1.2.1&auto=format&fit=crop&w=595&q=80"
    }
  ];
  return (
    <div className="App">
      <div className="card-container">
        {users.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            age={user.age}
            image={user.image}
          />
        ))}
      </div>
      <div className="buttons">
        <button className="button-nope">Nope</button>
        <button className="button-like">Like</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
