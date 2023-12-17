import mongoose, { mongo } from "mongoose";

const SudokuSchema = new mongoose.Schema({
    puzzle: {
        type: String,
        required: true,
        unique: true,
    },
    solution: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
});

const Sudoku = mongoose.model('Sudoku', SudokuSchema);

export default Sudoku;