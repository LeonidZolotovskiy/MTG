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
      <img src="" alt="" />
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
