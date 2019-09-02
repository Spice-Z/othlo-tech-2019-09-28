import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Card } from "./card";

function App() {
  const [userList, setUserList] = React.useState([
    {
      name: "サトシ",
      age: 23,
      image:
        "https://images.unsplash.com/photo-1563170423-741125661ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      isSwiped: false,
      communities: ["味噌煮込み", "手羽先"]
    },
    {
      name: "たけし",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1565385320868-2d6aa499b93d?ixlib=rb-1.2.1&auto=format&fit=crop&w=595&q=80",
      isSwiped: false,
      communities: ["小倉クリーム唐揚げ"]
    },
    {
      name: "カスミ",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
      isSwiped: false,
      communities: []
    },
    {
      name: "ジョージ",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      isSwiped: false,
      communities: ["味噌煮込み", "手羽先"]
    },
    {
      name: "ステラ",
      age: 26,
      image:
        "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80",
      isSwiped: false,
      communities: ["味噌煮込み", "手羽先"]
    }
  ]);

  const [currentPartner, setCurrentPartner] = React.useState(userList[0]);
  const [nextPartner, setNextPartner] = React.useState(userList[1]);
  // const [isSwied,setIsSwied] = React.useState(false);

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
            communities={nextPartner.communities}
            isSwiped={nextPartner.isSwiped}
          />
        ) : null}
        {currentPartner !== undefined ? (
          <Card
            name={currentPartner.name}
            age={currentPartner.age}
            image={currentPartner.image}
            communities={currentPartner.communities}
            isSwiped={currentPartner.isSwiped}
          />
        ) : null}
      </div>
      <div className="buttons">
        <button className="button-nope">
          <svg style={{ width: "40px", height: "40px" }} viewBox="0 0 24 24">
            <path
              fill="#cbced0"
              d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"
            />
          </svg>
        </button>
        <button className="button-like" onClick={clickLike}>
          <svg style={{ width: "28px", height: "28px" }} viewBox="0 0 24 24">
            <path
              fill="#f67272"
              d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
