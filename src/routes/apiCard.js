import express from 'express';
import { Card, Basket, User } from '../../db/models';

const apiCard = express.Router();

apiCard.route('/')
  .post(async (req, res) => {
    console.log(req.body);
    const {
      name, img, price, condition, owner_id,
    } = req.body;
    if (!name && !img && !price && !condition && !owner_id) return res.sendStatus(401);
    try {
      await Card.create({
        name,
        img,
        price,
        condition,
        owner_id,
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

apiCard.route('/cities')
  .get(async (req, res) => {
    try {
      const cities = await User.findAll({
        attributes: ['city'],
        group: ['city'],
      });
      // const initState = { cities };
      return res.json(cities);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  });

export default apiCard;
