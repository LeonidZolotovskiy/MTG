import React from "react";

const ulStyle = {
  width: "50em",
  display: "flex",
  justifyContent: "space-around",
  margin: "10px 20px",
  listStyleType: "none",
  padding: "0",
  color: "black",
  border: "3px solid white",
};

export default function OneCartItem({ card, deleteHandler }) {
  return (
    <div style={{ display: "flex" , alignItems:'center'}}>
      <ul style={ulStyle}>
        <li>{card.Card.name}</li>
        <li>{card.Card.condition}</li>
        <li>{card.Card.User.name}</li>
        <li>{card.Card.price}</li>
      </ul>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteHandler(card.id)}
        style={{ height: "30px",display: "flex",
        alignItems: 'center', }}
      >
        delete
      </button>
    </div>
  );
}
