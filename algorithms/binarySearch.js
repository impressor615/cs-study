function binarySearch(arr, value){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (arr[middle] !== value && left <= right) {
    if (arr[middle] < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((right + left) / 2);
  }

  const result = arr[middle] === value ? middle : -1;
  console.log('result: ', result);
  return result;
}

binarySearch([1, 2, 3, 4, 5], 2) // return 1;
binarySearch([1, 2, 3, 4, 5], 3) // return 2;
binarySearch([1, 2, 3, 4, 5], 7) // return -1;
binarySearch([1, 2, 3, 4, 5], 5) // return 4;
