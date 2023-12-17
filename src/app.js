import express from 'express';
import cors from 'cors';
import Router from './router/Router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', Router);

export default app;