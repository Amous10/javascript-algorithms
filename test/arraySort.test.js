const arraySort = require('./../src/arraySort');

test('check array by parity Output: [2,4,3,1]', () => {
    expect(arraySort([3, 1, 2, 4])).toStrictEqual([2, 4, 3, 1]);
});