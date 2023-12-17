import express from 'express';
import * as SudokuController from '../../controller/sudoku/SudokuController.js';

const SudokuRouter = express.Router();

SudokuRouter.post('/', SudokuController.get);

export default SudokuRouter;