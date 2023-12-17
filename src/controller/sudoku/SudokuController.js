import * as SudokuService from '../../service/sudoku/SudokuService.js';

const get = async (req, res) => {
    try {

        const { mode, difficulty } = req.body;

        if (!mode || !difficulty) {
            return res.status(400).json({
                ok: false,
                error: 'Game Mode and Difficulty are required'
            });
        }

        if (mode === 'singleplayer') {
            const sudoku = await SudokuService.get(difficulty);

            if (!sudoku) {
                return res.status(400).json({
                    ok: false,
                    error: 'Internal Server Error while retrieving the sudoku'
                });
            }

            return res.status(200).json({
                ok: true,
                data: {
                    puzzle: sudoku.puzzle,
                    solution: sudoku.solution
                }
            });
        }

    } catch (error) {
        console.log('***Internal Server Error at SudokuController.get:', error);
        return res.status(500).json({
            ok: false,
            error: 'Internal Server Error'
        })
    }
}

export { get };