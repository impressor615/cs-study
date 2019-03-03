const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
  let maxDigits = 0;
  arr.forEach((item) => {
    const currentDigits = digitCount(item);
    maxDigits = Math.max(maxDigits, currentDigits);
  })

  return maxDigits;
};

const radixSort = (nums) => {
  const maxDigits = mostDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      const bucketIdx = getDigit(nums[j], i);
      digitBuckets[bucketIdx].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }

  console.log(nums);
  return nums;
}

radixSort([1234, 2, 3, 5, 6, 123]);
radixSort([21345, 2, 3, 5, 99]);
