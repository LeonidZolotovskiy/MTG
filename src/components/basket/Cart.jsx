import React, { useState } from "react";
import axios from "axios";
import OneCartItem from "./OneCartItem";

export default function Basket({ allItems }) {
  const [cards, setcards] = useState(allItems || []);

  const deleteHandler = (id) => {
    axios.delete(`/api/cart/${id}`).then((res) => {
      if (res.status === 200) {
        setcards((prev) => prev.filter((el) => el.id !== id));
      }
    });
  };

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
          {cards.map((el) => (
            <OneCartItem card={el} deleteHandler={deleteHandler} key={el.id}/>
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
