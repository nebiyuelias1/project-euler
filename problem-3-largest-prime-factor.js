function isPrime(number) {
  if (number == 2) return true;

  for (let i = 2; i*i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function largestPrimeFactor(number) {
  // Good luck!
  if (isPrime(number)) return number;

  let start = Math.ceil(Math.sqrt(number));
  for (let i = start; i >= 2; i--) {
    if (number % i === 0 && isPrime(i)) {
      return i;
    }
  }
}

