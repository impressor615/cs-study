// restate the problem I have to solve
// - count unique values (valuse are included in array which is sorted)
// - with two pointers, build array only including unique values
// consider the concret examples
// solve, simplify
// refactor the code I wrote

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let firstPointer = 0;
  let secondPointer = 1;
  const result = [arr[firstPointer]];
  while (secondPointer !== arr.length) {
    const firstIndexVal = result[firstPointer];
    const secondIndexVal = arr[secondPointer];
    if (firstIndexVal === secondIndexVal) {
      secondPointer += 1;
    } else {
      result.push(secondIndexVal);
      firstPointer += 1;
      secondPointer += 1;
    }
  }

  console.log('result: ', result);
  return result.length;
}
countUniqueValues([1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 12, 12, 13]); // 9
