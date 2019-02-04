function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  }

  console.log(arr);
  return arr;
}

insertionSort([5, 10, 2, 1, 3]); // return [1, 2, 3, 5, 10]
