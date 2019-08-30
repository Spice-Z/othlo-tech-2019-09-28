import React from "react";

export const Card = props => {
  return (
    <div
      className={`card ${props.isSwiped ? "card-like-swipe" : ""}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="info">
        <div className="name">
          <span>{props.name}</span>
          <span className="age">{props.age}歳</span>
        </div>
        {props.communities.length > 0 ? (
          <div className="communities">
            {props.communities.map(community => {
              return (
                <span key={community} className="community">
                  {community}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
