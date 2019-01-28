// 1) restate
// -  find out whether there are the same arguments
// 3) solve or simplify
// 4) refactor

// sorted array
function areThereDuplicates() {
  if (arguments.length <= 1) {
    console.log('false');
    return false;
  }

  let pointer1 = 0;
  let pointer2 = 1;
  const { length: argLength } = arguments;
  while (pointer1 < (argLength - 1)) {
    const pointer1Val = arguments[pointer1];
    const pointer2Val = arguments[pointer2];
    if (pointer1Val === pointer2Val) {
      console.log('true');
      return true;
    }

    pointer1 += 1;
    pointer2 += 1;
  }

  console.log('false');
  return false;
  // good luck. (supply any arguments you deem necessary.)
}

// 2) consider the concrete example
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c'); // false
areThereDuplicates('a', 'a', 'c'); // true

