function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minimumIndex]) minimumIndex = j;
    }
    if (minimumIndex !== i) [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
  }

  console.log(arr);
  return arr;
}


selectionSort([2, 5, 1, 4, 3, 55, 10]) // return [1, 2, 3, 4, 5, 10, 55]
selectionSort([3, 5, 2, 1, 0]) // return [0, 1, 2, 3, 5]