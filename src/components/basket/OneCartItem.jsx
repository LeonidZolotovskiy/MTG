import React from "react";

export default function OneCartItem({ card, deleteHandler }) {
  return (
    <div
      className="card-body"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <img src={card.img} alt="" />
      <h4>{card.name}</h4>
      <p>{card.price}</p>
      <p>{card.condition}</p>
      <p>{card.status}</p>

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
