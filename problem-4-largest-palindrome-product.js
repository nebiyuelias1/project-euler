function reverseString(str) {
    return str.split("").reverse().join("");
}

function isPalindrome(num) {
  const reverse = +reverseString(num.toString());
  if (num === reverse) return true;

  return false;
}
function largestPalindromeProduct(n) {
  if (n === 1) return 9;
  const upper = 10**n - 1;
  const lower = 10**(n-1);
  let max = -1;
  for (let i = upper; i >= lower; i--) {
    for (let j = i; j >= lower; j--) {
      let product = i * j;
      if (isPalindrome(product)) {
        if (product > max) {
          max = product;
        }
      }
    }
  }
  return max;
}
largestPalindromeProduct(2);
