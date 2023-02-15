import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import apiUserRoutes from './routes/apiUserRoute';
import indexRouter from './routes/indexRouter';
import jsxRender from './utils/jsxRender'
import path from 'path';

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', 				
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true, 				
  saveUninitialized: false, 		
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, 
    httpOnly: true, 			
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));


app.use('/user', apiUserRoutes);
app.use('/addcard', indexRouter);

app.get('/', (req, res) => {
    const initState = { hello: 'world' };
    res.render('Layout', initState);
  });

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
