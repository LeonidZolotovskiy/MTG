import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';


const apiUserRoutes = express.Router();

apiUserRoutes.post('/signup', async (req, res) => { // ручка на беке
  try {
    const { email, password, name, city } = req.body;// достаем из рег боди значения имя                                             
    const hashPass = await bcrypt.hash(password, 10);// хэшеривание пароля
    const [user, create] = await User.findOrCreate({// создаем или нахлдим узера
      where: { email },
      defaults: {
        password: hashPass,
        name,
        city
      },
    });
    req.session.user = user;// передаем в рег сессию усера
    return res.sendStatus(200);
  } catch (erro) {
    console.log(erro, '<====================');
    return res.sendStatus(500);
  }
});

apiUserRoutes.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;// берем згачения из боди по названию инпутов
      const foundUser = await User.findOne({// находим по имаилу
        where: { email },
      });
      if (!(foundUser && await bcrypt.compare(password, foundUser.password))) {
        return res.sendStatus(401);//хэшируем пороль для сравнения и проверям усера
      }
      const user = JSON.parse(JSON.stringify(foundUser));//обрабатываем данные джейсоном
      delete user.hashPass;// удаляем пороль после проверки
      req.session.user = user;// создаем сессию для юзера
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(501);
    }
  });

  apiUserRoutes.get('/add', (req, res) => {
    req.session.destroy();// удаление сессии 
    res.clearCookie('userId');// отчистка куки
    res.sendStatus(200);
  });
  export default apiUserRoutes;