// sorted array is given
// 1) restate problem
// - using multiple pointer, find out whether the target pair exsists
// 3) solve and simplify
// 4) refactor the code you wrote

function averagePair(arr, avg){
  if (arr.length === 0) {
    return false;
  }

  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  while (pointer1 < pointer2) {
    const firstPointerVal = arr[pointer1];
    const secondPointerVal = arr[pointer2];
    const resultAvg = (firstPointerVal + secondPointerVal) / 2;
    if (resultAvg === avg) {
      console.log(true);
      return true;
    } else if (resultAvg < avg) {
      pointer1 += 1;
    } else {
      pointer2 -= 1;
    }
  }

  console.log(false);
  return false;
}

// 2) consider the concrete example
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true

//  0
// [1, 2, 3]
//        2