function power(base, exponent){
  if (exponent === 0) {
    return 1;
  }

  const result = base * power(base, exponent - 1);
  return result;
}

power(2,0) // 1
power(2,2) // 4
// 2 * power(1)
//        2 * power(0)
//              1
power(2,4) // 16