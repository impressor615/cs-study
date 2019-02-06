function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    };
  }

  swap(arr, start, swapIdx);
  // console.log(swapIdx, arr);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

const result = quickSort([9, 8, 2, 1, 5, 7, 6, 3]);
console.log('quicksort result: ', result);
// return 3
// [1, 2, 3, (4), ....]
// 본인보다 작은 것을 왼쪽으로 몰아두고 마지막에 본인과 작은것의 마지막과 swap하는 방식