// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

// Note:
// The boundaries of each input argument are 1 <= left <= right <= 10000.
const sd = require('./../src/selfDividingNumbers');

test('selfDividingNumbersExample1', () => {
	expect(sd.selfDividingNumbers(1, 22)).toStrictEqual([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		11,
		12,
		15,
		22
	]);
});

test('isSelfDividing', () => {
	expect(sd.isSelfDividing(128)).toBe(true);
});
