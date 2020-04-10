
function fiboEvenSum(n) {
  if (n === 2) return 2;

  let sum = 0;

  let prev = 1;
  let prev_prev = 2;
  let current = prev_prev;
  while(current <= n) {
    if (current % 2 === 0) {
      sum += current;
    }

    current = prev + prev_prev;
    prev = prev_prev;
    prev_prev = current;
  }
  return sum;
}

fiboEvenSum(10);
