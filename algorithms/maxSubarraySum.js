// 1) restate the problems
// - using the sliding window pattern, find out the consecutive array whic sum is max using the number of array elements

function maxSubarraySum(arr, count){
  if (arr.length < count) {
    return null;
  }

  let max = arr.slice(0, count).reduce((result, next) => result + next, 0);
  let temp = max;
  console.log(max);
  for (let i = 1; i <= arr.length - count; i++) {
    temp = temp - arr[i - 1] + arr[i + count - 1];
    console.log('temp: ', temp);
    if (temp > max) max = temp;
  }

  console.log(max);
  return max;
}

// 2) concrete problems
// maxSubarraySum([100, 200, 300, 400], 2); // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
