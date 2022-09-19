# SUDOKU

Sudoku is a number-placement puzzle where the objective is to fill a 9x9 grid with digits such that each column, each row and each 3x3 sub-grid contain all digits from 1 to 9 exactly once. The challenge this week is to write code capable of validating whether a given Sudoku solution is valid or not.

5️⃣ Points are awarded for an algorithm capable of validating these sample games.
3️⃣ Further points are awarded for solving the challenge in a unique choice of language among other participants
2️⃣ Further points are awarded for outputting a description of where an error in a game lies (for example `Row 2`, or `Sub-grid 1,2` etc).

#### How to run

```
cd typescript
npm i
npm run start
```

Update line 81 in the `index.ts` file to pass in your sudoku solution and the output will be logged to the console.

#### Example:

For this sample Sudoku:

```
[
  [1, 5, 2, 4, 8, 9, 3, 7, 6],
  [7, 3, 9, 2, 5, 6, 8, 4, 1],
  [4, 6, 8, 3, 7, 1, 2, 9, 5],
  [3, 8, 7, 1, 2, 4, 6, 5, 9],
  [5, 9, 1, 7, 6, 3, 4, 2, 8],
  [2, 4, 6, 8, 9, 5, 7, 1, 3],
  [9, 1, 4, 6, 3, 7, 5, 8, 2],
  [6, 2, 5, 9, 4, 8, 1, 3, 7],
  [8, 7, 3, 5, 1, 2, 9, 6, 4]
]
```

The expected output is `{ valid: true }`

However in this solution:

```
[
  [1, 5, 2, 4, 8, 9, 3, 7, 6],
  [7, 4, 9, 2, 5, 6, 8, 4, 1],
  [4, 6, 8, 3, 7, 1, 2, 9, 5],
  [3, 8, 7, 1, 2, 4, 6, 5, 9],
  [5, 9, 1, 7, 6, 3, 4, 2, 8],
  [2, 4, 6, 8, 9, 5, 7, 1, 3],
  [9, 1, 4, 6, 3, 7, 5, 8, 2],
  [6, 2, 5, 9, 4, 8, 1, 3, 7],
  [8, 7, 3, 5, 1, 2, 9, 6, 4],
]
```

there is an error and the expected output would be

```
{
  valid: false,
  message: 'Error in subgrid starting at row number 1, column number 1'
}
```
