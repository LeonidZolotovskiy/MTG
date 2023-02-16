import React from "react";

import OneCartItem from "./OneCartItem";
import AppStore from "../../store";

export default function Basket() {
  const allItems = AppStore((state) => state.allItems);
  const deleteHandler = AppStore((state) => state.deleteItems);

  return (
    <div
      className="shopping-cart"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px auto",
      }}
    >
      <h3 className="title" style={{ margin: "25px auto" }}>
        Shopping Bag
      </h3>

      {/* Добавляем карточку oneCardменяем на свой элемент */}
      {allItems.map((el) => (
        <OneCartItem card={el} deleteHandler={deleteHandler} key={el.id} />
      ))}
      {/* button buy */}
      <button
        type="button"
        className="btn btn-success"
        style={{ width: "20%" }}
      >
        buy
      </button>
    </div>
  );
}
