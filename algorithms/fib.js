fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465

function fib(seq){
  if (seq === 1 || seq === 2) return 1;
  return fib(seq - 1) + fib(seq - 2);
}
