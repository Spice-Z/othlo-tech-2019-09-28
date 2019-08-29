import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Card } from "./card";

function App() {
  const [userList, setUserList] = React.useState([
    {
      name: "Yugo Spice Ogura",
      age: 23,
      image:
        "https://images.unsplash.com/photo-1563170423-741125661ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      isSwiped: false
    },
    {
      name: "Yugo BOXPs Ogura",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1565385320868-2d6aa499b93d?ixlib=rb-1.2.1&auto=format&fit=crop&w=595&q=80",
      isSwiped: false
    },
    {
      name: "Yugo Datch Ogura",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
      isSwiped: false
    },
    {
      name: "Yugo OT Ogura",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
      isSwiped: false
    },
    {
      name: "Yugo Melo Ogura",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
      isSwiped: false
    }
  ]);

  const [currentPartner, setCurrentPartner] = React.useState(userList[0]);
  const [nextPartner, setNextPartner] = React.useState(userList[1]);

  const clickLike = () => {
    setCurrentPartner({
      ...currentPartner,
      isSwiped: true
    });
    console.log(userList);
    setTimeout(() => {
      setCurrentPartner(userList[1]);
      setNextPartner(userList[2]);
      setUserList(userList.slice(1));
    }, 1000);
  };

  return (
    <div className="App">
      <div className="card-container">
        {nextPartner !== undefined ? (
          <Card
            name={nextPartner.name}
            age={nextPartner.age}
            image={nextPartner.image}
            isSwiped={nextPartner.isSwiped}
          />
        ) : null}
        {currentPartner !== undefined ? (
          <Card
            name={currentPartner.name}
            age={currentPartner.age}
            image={currentPartner.image}
            isSwiped={currentPartner.isSwiped}
          />
        ) : null}
      </div>
      <div className="buttons">
        <button className="button-nope">Nope</button>
        <button className="button-like" onClick={clickLike}>
          Like
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
