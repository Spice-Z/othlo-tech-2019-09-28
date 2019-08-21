import React from "react";

export const Card = () => {
  const [user, setUser] = React.useState({
    name: "Yugo Spice Ogura",
    age: 23,
    image:
      "https://images.unsplash.com/photo-1563170423-741125661ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  });

  return (
    <div className="card">
      <img className="image" src={user.image} alt="human" />
      <p>
        {user.name}
        <span>({user.age})</span>
      </p>
    </div>
  );
};
