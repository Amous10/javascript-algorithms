const transpose = require('./../src/transpose');


// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.


// Note:

// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000


// Example 1:

// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
test('Example 1', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
});

// Example 2:

// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

test('Example 2', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6]])).toStrictEqual([[1, 4], [2, 5], [3, 6]]);
});