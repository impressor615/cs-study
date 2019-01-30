// sorted array is given
// 1) restate problem
// - using multiple pointer, find out whether the target pair exsists

function averagePair(arr, targetAvg){
  if (arr.length === 0) {
    return false;
  }

  const pointer1 = 0;
  const pointer2 = 1;


}

// 2) consider the concrete example
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true