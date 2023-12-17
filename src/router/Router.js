import express from 'express';
import SudokuRouter from '../router/sudoku/SudokuRouter.js';

const Router = express.Router();

Router.use('/sudoku', SudokuRouter);

export default Router;