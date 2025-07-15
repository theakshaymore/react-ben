import React from "react";

function Card({ title, username }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{username}</p>
    </div>
  );
}

export default Card;
