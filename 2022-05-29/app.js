// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

// Solution:
function isNarcissistic(n) {
    let sum = String(n).split('').reduce((a,v) => a+Math.pow(v,n.toString().length),0);
    if (sum===n){
      return true
    } else {
      return false
    }
  }