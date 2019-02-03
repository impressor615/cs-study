function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] >= arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        noSwaps = false;
      };
    }
    if (noSwaps) break;
  }

  console.log(arr);
  return arr;
}

bubbleSort([3,4,51,2]) // return [2, 3, 4, 51]