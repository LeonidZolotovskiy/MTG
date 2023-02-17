import express from 'express';
import { Op } from 'sequelize';
import { Card, Basket, User } from '../../db/models';

const renderRoutes = express.Router();

renderRoutes.get('/signin', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/signup', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/', async (req, res) => {
  let rowcards = [];
  if (req.session.user) {
    rowcards = await Card.findAll({
      where: { status: false, owner_id: { [Op.ne]: req.session.user.id } },
      include: [{ model: User }],
    });
    console.log(rowcards)
    const rowbasketCards = await Basket.findAll(
      {
        where: { u_id: req.session.user.id },
      },
    );
    const basketCards = JSON.parse(JSON.stringify(rowbasketCards));
    rowcards = JSON.parse(JSON.stringify(rowcards));
    rowcards.forEach((card) => {
      card.inBasket = basketCards.some((el) => el.c_id === card.id);
    });
  } else {
    rowcards = await Card.findAll({ where: { status: false }, include: [{ model: User }] });
    rowcards = JSON.parse(JSON.stringify(rowcards));
  }
  const cards = rowcards;
  res.render('Layout', { cards });
});

renderRoutes.get('/cart', async (req, res) => {
  const findItems = await Basket.findAll({
    where: { u_id: req.session.user.id },
    include: {
      model: Card,
      include: { model: User },
    },
  });
  const allItems = JSON.parse(JSON.stringify(findItems));
  res.render('Layout', { allItems });
});

renderRoutes.get('/private', async (req, res) => {
  const cards = await Card.findAll({
    where: { owner_id: req.session.user.id },
    include: [{ model: User }],
  });
  res.render('Layout', { cards });
});

export default renderRoutes;
