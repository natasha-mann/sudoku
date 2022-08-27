const { CORRECT_SUDOKU } = require("./solutions");

export class Sudoku {
  solution: number[][];

  constructor(solution: number[][]) {
    this.solution = solution;
  }

  validateSudoku() {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        const value = this.solution[row][column];

        const validRow = this.validateRow(row, column, value);
        const validColumn = this.validateColumn(row, column, value);
        const validGrid = this.validateSubGrid(row, column, value);

        if (!validRow.valid || !validColumn.valid || !validGrid.valid) {
          return !validGrid.valid
            ? {
                valid: false,
                message: `Error in subgrid starting at row number ${
                  validGrid.startRow! + 1
                }, column number ${validGrid.startCol! + 1}`,
              }
            : {
                valid: false,
                message: `Error in row number ${row + 1}, column number ${
                  column + 1
                }`,
              };
        }
      }
    }
    return { valid: true };
  }

  private validateRow(row: number, column: number, value: number) {
    for (let j = 0; j < 8; j++) {
      if (j !== column) {
        if (this.solution[row][j] === value) {
          return { valid: false };
        }
      }
    }

    return { valid: true };
  }

  private validateColumn(row: number, column: number, value: number) {
    for (let i = 0; i < 8; i++) {
      if (i !== row) {
        if (this.solution[i][column] === value) {
          return { valid: false };
        }
      }
    }

    return { valid: true };
  }

  private validateSubGrid(row: number, column: number, value: number) {
    const startRow = row - (row % 3);
    const startCol = column - (column % 3);

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (i !== row && j !== column) {
          if (this.solution[i][j] === value) {
            return { valid: false, startRow, startCol };
          }
        }
      }
    }

    return { valid: true };
  }
}

const sudoku = new Sudoku([
  [1, 8, 3, 2, 7, 4, 6, 5, 9],
  [9, 7, 4, 5, 8, 6, 3, 2, 1],
  [2, 6, 5, 1, 9, 3, 7, 4, 8],
  [5, 9, 2, 8, 3, 1, 4, 6, 7],
  [8, 4, 6, 7, 2, 5, 9, 1, 3],
  [7, 3, 1, 4, 6, 9, 2, 8, 5],
  [3, 5, 9, 6, 4, 8, 1, 7, 2],
  [6, 1, 7, 3, 5, 2, 8, 9, 4],
  [4, 2, 8, 9, 1, 7, 5, 3, 6],
]);

const isValid = sudoku.validateSudoku();

console.log(isValid);
