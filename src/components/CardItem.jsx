import React from "react";
import "../../src/styles/cardItem.css";

function CardItem({ robot }) {
  return (
    <div className="list-item">
      <div className="avatar">
        <img alt={robot.name} src={`https://robohash.org/${robot.id}`} />
      </div>
      <div className="robot-info">
        <p className="name">{robot.name}</p>
        <p className="email">{robot.email}</p>
      </div>
    </div>
  );
}
export default CardItem;
