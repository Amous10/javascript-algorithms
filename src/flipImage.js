function invert(n) {
	return n ^ 1;
}

var flipAndInvertImage = function(A) {
	return A.map(function(a) {
		a.reverse();
		var x = a.map(n => invert(n));
		return x;
	});
};

module.exports = flipAndInvertImage;
