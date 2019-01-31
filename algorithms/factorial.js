factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040
factorial(1000)

function factorial(num){
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// base case
// shrinking case