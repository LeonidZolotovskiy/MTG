import React from "react";

export default function OneCartItem({ card, deleteHandler }) {
  return (
    <div style={{ display: "flex" }}>
      <ul
        style={{
          width: "50em",
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 20px",
          listStyleType: "none",
          padding: "0",
        }}
      >
        <li>{card.Card.name}</li>
        <li>{card.Card.condition}</li>
        <li>{card.Card.User.name}</li>
        <li>{card.Card.price}</li>
      </ul>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteHandler(card.id)}
      >
        delete
      </button>
    </div>
  );
}
