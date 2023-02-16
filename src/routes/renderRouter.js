import express from 'express';

const renderRoutes = express.Router();

renderRoutes.get('/', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/signin', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/signup', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/allCards', (req, res) => {
  res.render('Layout');
});

renderRoutes.get('/card', (req, res) => {
  const card = {
    name: 'Mountain', img: 'https://m.media-amazon.com/images/I/41uQsn5uK0L._AC_.jpg', price: '555', condition: 'Good',
  };
  const initState = { card };
  res.render('Layout', initState);
});

renderRoutes.get('/cart', (req, res) => {
  res.render('Layout');
});
renderRoutes.get('/private', (req, res) => {
  res.render('Layout');
});

export default renderRoutes;
