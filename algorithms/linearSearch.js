function linearSearch(arr, value){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log(i);
      return i;
    }
  }

  console.log(-1);
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15) // return 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // return 5