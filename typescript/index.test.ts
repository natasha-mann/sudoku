const { Sudoku } = require("./index");
const solutions = require("./solutions");

describe("Sudoku validator", () => {
  describe("Given an array of 9 arrays", () => {
    it("should return false if any row does not contain all digits from 1 to 9 exactly once", () => {
      const sudoku = new Sudoku(solutions.ROW_ERROR);
      const actual = sudoku.validateSudoku();
      expect(actual.valid).toBe(false);
    });
    it("should return false if any column does not contain all digits from 1 to 9 exactly once", () => {
      const sudoku = new Sudoku(solutions.COLUMN_ERROR);
      const actual = sudoku.validateSudoku();

      expect(actual.valid).toBe(false);
    });
    it("should return false if any 3x3 sub-grid does not contain all digits from 1 to 9 exactly once", () => {
      const sudoku = new Sudoku(solutions.SUBGRID_ERROR);
      const actual = sudoku.validateSudoku();

      expect(actual.valid).toBe(false);
    });
    it("should return true if each row, column and 3x3 sub grid contains all digits from 1 to 9 exactly once", () => {
      const sudoku = new Sudoku(solutions.CORRECT_SUDOKU);
      const actual = sudoku.validateSudoku();

      expect(actual.valid).toBe(true);
    });
  });
});
