// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

function selfDividingNumbers(begin, end) {
	return [...Array(end + 1).keys()].filter(
		n => n >= begin && isSelfDividing(n)
	);
}
function isSelfDividing(n) {
	return !n
		.toString()
		.split('')
		.map(s => parseInt(s, 10))
		.some(d => n % d !== 0);
}

module.exports.selfDividingNumbers = selfDividingNumbers;
module.exports.isSelfDividing = isSelfDividing;
