// restate the problem in my words
// - 똑같은 스트링은 똑같은 빈도로 가지고 있어야 합니다.
// exploe the concret examples
// solve or simplify
// - 각각 몇개씩 가지고 있는 지 저장
// - first를 keys loop돌면서 확인
// refactor the code you built

function validAnagram(firstString, secondString) {
  const firstStringCounts = {};
  const secondStringCounts = {};
  for (const firstStringItem of firstString) {
    firstStringCounts[firstStringItem] = firstStringCounts[firstStringItem] ?
      firstStringCounts[firstStringItem] + 1 : 1;
  }

  for (const secondStringItem of secondString) {
    secondStringCounts[secondStringItem] = secondStringCounts[secondStringItem] ?
      secondStringCounts[secondStringItem] + 1 : 1;
  }

  const result =  Object.keys(firstStringCounts).every(key => firstStringCounts[key] === secondStringCounts[key]);
  return result;
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
