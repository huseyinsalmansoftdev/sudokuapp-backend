import Sudoku from "../../model/sudoku/Sudoku.js";

const get = async (difficulty) => {
    try {

        if (!difficulty) {
            throw new Error('Difficulty is required');
        }

        const sudoku = await Sudoku.aggregate([
            { $match: { difficulty } },
            { $sample: { size: 1 } }
        ]);

        if (!sudoku) {
            throw new Error('Internal Server Error while retrieving the sudoku');
        }

        return sudoku[0];

    } catch (error) {
        console.log('***Internal Server Error at SudokuService.get:', error);
        throw new Error('Internal Server Error');
    }
}

export { get };