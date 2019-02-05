function mergeTwoSortedArray(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const arrItem1 = arr1[i];
    const arrItem2 = arr2[j];
    if (arrItem1 < arrItem2) {
      result.push(arrItem1);
      i += 1;
    } else {
      result.push(arrItem2);
      j += 1;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j += 1;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; 
  const midIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));
  return mergeTwoSortedArray(left, right);
}

const result = mergeSort([3, 3, 5, 1, 9, 8]); // return [1, 3, ,3 ,5, 8, 9];
console.log(result);