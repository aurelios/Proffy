import express from 'express';
import cors from 'cors'; //Permite endereços diferentes acessem esse backend
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);