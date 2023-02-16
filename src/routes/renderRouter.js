import express from "express";
import { Card, Basket, User } from "../../db/models";

const renderRoutes = express.Router();

renderRoutes.get("/", (req, res) => {
  res.render("Layout");
});

renderRoutes.get("/signin", (req, res) => {
  res.render("Layout");
});

renderRoutes.get("/signup", (req, res) => {
  res.render("Layout");
});

renderRoutes.get("/allCards", async (req, res) => {
  const cards = await Card.findAll();
  res.render("Layout", { cards });
});

renderRoutes.get("/card", (req, res) => {
  const card = {
    name: "Mountain",
    img: "https://m.media-amazon.com/images/I/41uQsn5uK0L._AC_.jpg",
    price: "555",
    condition: "Good",
  };
  const initState = { card };
  res.render("Layout", initState);
});

renderRoutes.get("/cart", async (req, res) => {
  const allItems = await Basket.findAll({
    where: { u_id: req.session.user.id },
    include: [{ model: User }, { model: Card }],
  });
  res.render("Layout", { allItems });
});

renderRoutes.get("/private", (req, res) => {
  res.render("Layout");
});

export default renderRoutes;
