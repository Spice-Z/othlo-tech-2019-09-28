import React from "react";

export const Card = props => {
  return (
    <div className="card">
      <img className="image" src={props.image} alt="human" />
      <p>
        {props.name}
        <span>({props.age})</span>
      </p>
    </div>
  );
};
