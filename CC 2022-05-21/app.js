// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:
// sumOfDifferences([2, 1, 10])
// Returns 9
// Descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

// Solution is an arrow function using a ternary operator to test length of input array. An array length of more than one will evaluate the difference between the biggest and smallest number of the input array. An array of length one or less will evaluate to 0.
const sumOfDiff = arr =>  arr.length>1 ? Math.max(...arr)-Math.min(...arr) : 0;