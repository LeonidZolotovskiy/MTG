import express from 'express';
import { Card, Basket, User } from '../../db/models';

const renderRoutes = express.Router();

renderRoutes.get('/', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/signin', (req, res) => {
  res.render('Layout');
});
renderRoutes.get('/addcard', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/signup', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/allCards', async (req, res) => {
  const rowcards = await Card.findAll({ where: { status: false } });
  const rowbasketCards = await Basket.findAll(
    {
      where: { u_id: req.session.user.id },
    },
  );
  const cards = JSON.parse(JSON.stringify(rowcards));
  const basketCards = JSON.parse(JSON.stringify(rowbasketCards));
  cards.forEach((card) => {
    card.inBasket = basketCards.some((el) => el.c_id === card.id);
  });
  console.log(cards);
  res.render('Layout', { cards });
});

renderRoutes.get('/allCards/:id', async (req, res) => {
  const oneCard = await Card.findOne({ where: { id: req.params.id }, include: User });
  const initState = { oneCard };
  res.render('Layout', initState);
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
  const cards = await Card.findAll({ where: { owner_id: req.session.user.id } });
  res.render('Layout', { cards });
});

export default renderRoutes;
