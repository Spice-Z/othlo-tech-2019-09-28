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
      name: "Yugo BOXPs Ogura",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1565385320868-2d6aa499b93d?ixlib=rb-1.2.1&auto=format&fit=crop&w=595&q=80"
    }
  ];

  const [currentPartner, setCurrentPartner] = React.useState(1);
  const [nextPartner, setNextPartner] = React.useState(0);
  const [isCurrentSwiped, setIsCurrentSwiped] = React.useState(false);

  return (
    <div className="App">
      <div className="card-container">
        {nextPartner !== undefined ? (
          <Card
            key={users[nextPartner].name}
            name={users[nextPartner].name}
            age={users[nextPartner].age}
            image={users[nextPartner].image}
            isSwiped={false}
          />
        ) : null}
        {currentPartner !== undefined ? (
          <Card
            key={users[currentPartner].name}
            name={users[currentPartner].name}
            age={users[currentPartner].age}
            image={users[currentPartner].image}
            isSwiped={isCurrentSwiped}
          />
        ) : null}
      </div>
      <div className="buttons">
        <button className="button-nope">Nope</button>
        <button
          className="button-like"
          onClick={() => setIsCurrentSwiped(true)}
        >
          Like
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
