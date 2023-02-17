import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';
import mailer from '../nodemailer';

const apiUserRoutes = express.Router();

apiUserRoutes.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const {
      email, password, name, city,
    } = req.body;

    const message = {
      to: email,
      subject: 'Welcome to the Covid-19 Tracker',
      text: `Welcome to the Covid-19 Tracker, ${name}!`,
    };
    mailer(message);
    const hashPass = await bcrypt.hash(password, 10);
    const [user, create] = await User.findOrCreate({
      where: { email },
      defaults: {
        password: hashPass,
        name,
        city,
      },
    });
    req.session.user = user;
    return res.sendStatus(200);
  } catch (erro) {
    console.log(erro, '<====================');
    return res.sendStatus(500);
  }
});

apiUserRoutes.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({
      where: { email },
    });
    if (!(foundUser && await bcrypt.compare(password, foundUser.password))) {
      return res.sendStatus(401);
    }
    const user = JSON.parse(JSON.stringify(foundUser));
    delete user.hashPass;
    req.session.user = user;
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(501);
  }
});

apiUserRoutes.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('userId');
  res.redirect('/');
});


export default apiUserRoutes;
