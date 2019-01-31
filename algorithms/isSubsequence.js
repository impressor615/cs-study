// 1) restate the funciton
// each strings should be included in the second string. order matters
// 3) solve or simplify
// - multiple pointers

function isSubsequence(firstString, secondString) {
  if (!firstString) return true;

  let pointer1 = 0;
  let pointer2 = 0;
  while (
    pointer1 < firstString.length
    && pointer2 < secondString.length
  ) {
    const firstStringVal = firstString[pointer1];
    const secondStringVal = secondString[pointer2];
    const isSame = firstStringVal === secondStringVal;
    if (isSame && pointer1 === (firstString.length - 1)) {
      console.log(true);
      return true;
    }
    if (isSame) {
      pointer1 += 1;
      pointer2 += 1;
      continue;
    }

    pointer2 += 1;
  }

  console.log(false);
  return false;
}

// 2) consider the concrete example
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false
