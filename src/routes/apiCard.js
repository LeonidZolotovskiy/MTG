import express from 'express';
import { Card, Basket } from '../../db/models';

const apiCard = express.Router();

apiCard.route('/')
  .post(async (req, res) => {
    console.log(req.body);
    const {
      name, img, price, condition,
    } = req.body;
    if (!name && !img && !price && !condition) return res.sendStatus(401);
    try {
      await Card.create({
        name,
        img,
        price,
        condition,
        owner_id: 1,
      });

      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });

apiCard.route('/cart/:id')
  .post(async (req, res) => {
    try {
      await Basket.create({ u_id: res.locals.user.id, c_id: req.params.id });
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });

export default apiCard;
