const fizzBuzz = require('./../src/fizzBuzz');

// (n = 15),
// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",s
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

test('Example 1', () => {
	expect(fizzBuzz(15)).toStrictEqual([
		'1',
		'2',
		'Fizz',
		'4',
		'Buzz',
		'Fizz',
		'7',
		'8',
		'Fizz',
		'Buzz',
		'11',
		'Fizz',
		'13',
		'14',
		'FizzBuzz'
	]);
});
