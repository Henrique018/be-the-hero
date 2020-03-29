import express from 'express';
import { errors } from 'celebrate';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => console.log('app started on port 3333'));
