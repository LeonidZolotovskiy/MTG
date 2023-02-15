import React from "react";

export default function Basket() {
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>

      <div className="item" style={{ display: "flex", flexDirection: "row" ,justifyContent:'space-around'}}>
        {/* delete item  */}
        <div className="buttons">
          <button type="button" className="delete-btn">
            delete
          </button>
        </div>
        {/* card */}
        <div className="image">
          <img src="item-1.png" alt="" />
        </div>

        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>
        {/* price */}
        <div className="total-price">$549</div>
        {/* button buy */}
      </div>
      <button type="button">buy</button>
    </div>
  );
}
