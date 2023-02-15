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

export default renderRoutes;