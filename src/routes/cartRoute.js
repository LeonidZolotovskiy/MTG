import express from "express";
import { Basket, Card, User } from "../../db/models";

const router = express.Router();

router.get("/", async (req, res) => {
  const allItems = await Basket.findAll({
    where: { u_id: req.session.user.id },
    include: [{ model: User }, { model: Card }],
  });
  res.render("Layout", { allItems });
});

router.delete("/:id", async (req, res) => {
  const item = await Basket.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!item) res.sendStatus(401);
  item.destroy();
  res.sendStatus(200);
});

export default router;
