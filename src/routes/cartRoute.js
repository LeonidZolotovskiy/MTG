import express from "express";
import { Card, Basket, User } from "../../db/models";
import mailer from "../nodemailer";

const router = express.Router();
router.delete("/buy", async (req, res) => {
  const findItems = await Basket.findAll({
    where: { u_id: req.session.user.id },
    include: {
      model: Card,
      include: { model: User },
    },
  });
  const allItems = JSON.parse(JSON.stringify(findItems));
  const allItemsMail = allItems.map((el) => el.Card.User.email).join(",");

  await findItems.forEach((el) =>
    Card.update({ status: true }, { where: { id: el.Card.id } })
  );

  const message = {
    to: allItemsMail,
    subject: "вашу карточку хотят приобрести",
    html: `
       <h2>email для связи : ${req.session.user.email}</h2>
  `,
  };
  mailer(message);

  await Basket.destroy({ where: { u_id: req.session.user.id } });

  res.sendStatus(200);
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
