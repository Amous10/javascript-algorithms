// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Link to Exercise

// Acceptance Criteria:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Note:
// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

function arraySort(arrays) {

	var even = arrays.filter(x => x % 2 == 0);
	var odd = arrays.filter(x => x % 2 != 0);
	return even.concat(odd);
}

// Output: [2,4,3,1]
console.log(arraySort([3, 1, 2, 4]));