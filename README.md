# Sudoku App Backend

## This is the backend of the Sudoku App build on Express and MongoDB.

## Instalation

1. Clone the repo: `git clone https://github.com/huseyinsalmansoftdev/sudokuapp-backend`
2. Install dependencies: `npm install`

## Setup

1. Create a `.env` file.
2. Enter `PORT=5000`
3. Enter MONGODB_URI=`Your MongoDB URI`
4. Inser a sample sudoku data to your MongoDB database.

### Sample Sudoku Document

{
    "puzzle":"070000043040009610800634900094052000358460020000800530080070091902100005007040802","solution":"679518243543729618821634957794352186358461729216897534485276391962183475137945862",
    "difficulty":"hard"
}

## Sudoku Source

In this project I made use of the Sudoku Puzzles from [1 million Sudoku games](https://www.kaggle.com/datasets/bryanpark/sudoku)

I have processed a subset of the Sudoku Puzzles in to the format above.

## Demo

You can find the deployed version of the Sudoku App: [DEMO](https://sudokuapp.onrender.com)

## Contact

`huseyinsalmansoftdev@gmail.com`

