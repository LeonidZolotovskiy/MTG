import React from "react";

import OneCartItem from "./OneCartItem";
import AppStore from "../../store";

export default function Basket() {
  const allItems = AppStore((state) => state.allItems);
  const deleteHandler = AppStore((state) => state.deleteItems);
  return (
    <div
      className="shopping-cart"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 className="title" style={{ margin: "25px auto" }}>
        Shopping Bag
      </h3>
      <div
        className="item"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          className="card text-bg-warning mb-3 "
          style={{
            maxWidth: "18rem;",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h4 className="card-header">Header</h4>

          {/* Добавляем карточку oneCardменяем на свой элемент */}
          {allItems.map((el) => (
            <OneCartItem card={el} deleteHandler={deleteHandler} key={el.id} />
          ))}
        </div>
        {/* button buy */}
        <button
          type="button"
          className="btn btn-success"
          style={{ width: "20%" }}
        >
          buy
        </button>
      </div>
    </div>
  );
}
