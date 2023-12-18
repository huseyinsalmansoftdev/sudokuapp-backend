import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Import the fileURLToPath function
import path , { dirname } from 'path';
import Router from './router/Router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/', Router);

export default app;